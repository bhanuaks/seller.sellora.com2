import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { responseFun } from "@/Http/helper";
import { CountReceiptModel, SellerWalletHistoryModel, SellerWalletModel } from "@/Http/Models/WalletModal";
import mongoose from "mongoose";



export async function POST(request) {
    
    const { amount, paymentMethod } = await request.json();

    const seller = await getLoginSeller();
    if(!seller || !seller._id){
        return responseFun(false, {message:"Invalid request"}, 200)
    } 
    const sellerId = seller._id;

    
    const errors = {}
    if(!amount){
        errors.amount = "Amount is required." 
    }
    if(!paymentMethod){
        errors.paymentMethod = "Payment Method is required." 
    }
    if(Object.keys(errors).length > 0){
        return responseFun(false, {message:"Validation Errors", errors, status_code:400}, 200)
    }

    const session = await mongoose.startSession();
    session.startTransaction()

    try {
         
        const wallet = await SellerWalletModel.findOne({seller_id : new mongoose.Types.ObjectId(sellerId)});
       const transactionId = `TR${Date.now()}`;
       const receiptId = await receiptNumber()
       const formattedReceiptId = `REC-${receiptId.toString().padStart(8, "0")}`;
        if(wallet){
             wallet.totalBalance = (wallet.totalBalance || 0) + Number(amount);
             wallet.adsBalance = (wallet.adsBalance || 0) + Number(amount);
            await wallet.save();
        }else{
            await SellerWalletModel.create({
                seller_id       : sellerId,
                totalBalance    : Number(amount),
                adsBilledAmount : 0,
                adsBalance      : Number(amount),
                accruingCharge  : 0,
            });
        }

        // create transaction history of wallet
        await SellerWalletHistoryModel.create({
              seller_id         : sellerId,
              amount            : amount,
              paymentMethod     : paymentMethod,
              transactionType   : "Online",
              remarks           : "Add Amount",
              transactionId     : transactionId,
              receiptId         : formattedReceiptId,
              status            : "Success",
        })


        session.commitTransaction();
        return responseFun(true, {message:"Amount has been Added Successfuly."}, 200)

     } catch (error) {
        session.abortTransaction();
        console.log(error);
        return responseFun(true, {message:error.message}, 200)
    }

    
}


export async function receiptNumber(request) {
    
     let newNumber = 1;
    let data = await CountReceiptModel.findOne();

    if (data) {
      newNumber = data.counter + 1;
      data.counter = newNumber;
      await data.save();
    } else {
      await CountReceiptModel.create({ counter: 1 });
      newNumber = 1;
    }
    return newNumber
}