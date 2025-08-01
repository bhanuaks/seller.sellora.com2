import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { connectDb } from "@/Http/dbConnect2";
import { SellerWalletHistoryModel } from "@/Http/Models/WalletModal";
import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function POST(request) {
  await connectDb();
  const { _id } = await request.json();
  const seller = await getLoginSeller();

  if (!seller) {
    return NextResponse.json({ success: false, message: "Unauthorized user" }, { status: 403 });
  }

  try {
    const walletHistory = await SellerWalletHistoryModel.findById(_id).lean();

    const data = {
      receiptId: walletHistory.receiptId,
      name: seller.name,
      email: seller.email,
      paymentMethod: walletHistory.paymentMethod,
      date: new Date(walletHistory.createdAt).toLocaleDateString("en-US"),
      transactionId: walletHistory.transactionId,
      amount: walletHistory.amount.toFixed(2),
      tax: 0,
      taxAmount: 0,
      totalAmount: walletHistory.amount.toFixed(2),
    };

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <title>Payment Receipt</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 30px;
            color: #333;
          }
          h1 {
            text-align: center;
            color: #444;
          }
          .section {
            margin-bottom: 20px;
          }
          .section h3 {
            border-bottom: 1px solid #ccc;
            padding-bottom: 5px;
            margin-bottom: 10px;
          }
          .row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
          }
        </style>
      </head>
      <body>
        <h1>Payment Receipt</h1>
        <div class="section">
          <h3>Receipt Info</h3>
          <div class="row"><span>Receipt ID:</span><span>${data.receiptId}</span></div>
          <div class="row"><span>Date:</span><span>${data.date}</span></div>
        </div>

        <div class="section">
          <h3>Seller Info</h3>
          <div class="row"><span>Name:</span><span>${data.name}</span></div>
          <div class="row"><span>Email:</span><span>${data.email}</span></div>
        </div>

        <div class="section">
          <h3>Payment Info</h3>
          <div class="row"><span>Transaction ID:</span><span>${data.transactionId}</span></div>
          <div class="row"><span>Payment Method:</span><span>${data.paymentMethod}</span></div>
          <div class="row"><span>Amount:</span><span>$${data.amount}</span></div>
          <div class="row"><span>Tax:</span><span>$${data.taxAmount}</span></div>
          <div class="row"><strong>Total:</strong><strong>$${data.totalAmount}</strong></div>
        </div>
      </body>
      </html>
    `;

    // Launch puppeteer with required arguments for Linux/Azure compatibility
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="receipt-${Date.now()}.pdf"`,
      },
    });
  } catch (error) {
    console.error("PDF generation failed:", error.message);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
