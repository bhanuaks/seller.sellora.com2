'use client'
import React, { useEffect, useState } from 'react'
import SearchBox from '../SearchBox';
import { baseUrl } from '@/Http/helper';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { initAccordion } from '../menuListeners';
import LeftSideBarFaq from '../LeftSideBarFaq';
import LeftMobileSideBarFaq from '../LeftMobileSideBarFaq';


function page() {

const pathname = usePathname();

   useEffect(() => {
    const cleanUp = initAccordion();
    return cleanUp;
  }, []);

  return (
    <>
  
<div className="notification_breadcomb_rts-navigation-area-breadcrumb d-lg-none d-md-block">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="notification_breadcomb mb-6">
          <ul>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <Link href={`${baseUrl}dashboard/help-center/faq`}>FAQ</Link>
            </li>
            <li>
              <a href="#" className="active_002">
                Taxes &amp; Payments{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>







  {/* ==================new-code================== */}
  <div className="container">
    <div className="row">
      
       <LeftSideBarFaq />
      
      <div className="col-lg-9">
        
        <div className="notification_breadcomb_rts-navigation-area-breadcrumb d-lg-block d-none">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="notification_breadcomb mb-6">
          <ul>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <Link href={`${baseUrl}dashboard/help-center/faq`}>FAQ</Link>
            </li>
            <li>
              <a href="#" className="active_002">
                Taxes &amp; Payments{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>







        {/* ==============mobile-menu-filter-open========================= */}
        <LeftMobileSideBarFaq />
        {/* ===================mobile-menu-filter-end==================== */}
        <div className="main-content_10-7">
          <SearchBox />


<>
  <div className="featured_10-7">
    <h2>Taxes &amp; Payments</h2>
  </div>
  <div className="new_content_11">
    <div className="faq-container">
      <div className="accordion-item">
        <div className="accordion-header">
          <span>How do I update my tax information in the Seller Center?</span>
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>
        </div>
        <div className="accordion-content">
          <p>
            To stay compliant with legal and financial regulations, sellers must
            provide valid tax details such as:
          </p>
          <ul>
            <li>TAXIN (Tax Identification Number)</li>
            <li>Registered business address</li>
            <li>Legal business name matching TAX records</li>
          </ul>
          <p>
            <strong>To update:</strong>
          </p>
          <ul>
            <li>
              Log in <strong>to Seller Center</strong>
            </li>
            <li>
              Navigate to <strong>Settings &gt; Tax Information</strong>
            </li>
            <li>Enter or edit your TAX and associated business data</li>
            <li>Upload supporting documents TAX certificate</li>
            <li>
              Click <strong>Update</strong> and wait for verification (usually
              24–48 hours)
            </li>
          </ul>
          <p>
            Failure to update accurate tax data may lead to listing restrictions
            or payout delays.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <span>How is TAX handled for sales on Sellora?</span>
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>
        </div>
        <div className="accordion-content">
          <p>
            Sellora operates under the marketplace model, where tax is collected
            at source (TCS) and credited accordingly. Here's how TAX is managed
          </p>
          <ul>
            <li>Sellora charges TAX on marketplace fees and commissions</li>
            <li>You receive TAX-compliant tax invoices for such charges</li>
            <li>
              For seller-fulfilled orders, you must charge TAX to buyers and
              report in your returns
            </li>
          </ul>
          <p>
            Sellers are responsible for proper classification and tax rates on
            their products.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <span>What is the TCS (Tax Collected at Source) in Sellora?</span>
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>
        </div>
        <div className="accordion-content">
          <p>
            Sellora deducts <strong>1% TCS</strong> on the net taxable value of
            each sale and deposits it with the government under your TIN.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <span>Where can I download my Tax Invoices from Sellora?</span>
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>
        </div>
        <div className="accordion-content">
          <p>To download GST invoices for Sellora’s service fees:</p>
          <ul>
            <li>
              Log in to <strong>Seller Center</strong>
            </li>
            <li>
              Go to <strong>Reports &gt;Report centre &gt; Tax Invoices</strong>
            </li>
            <li>Filter by month or date range</li>
            <li>
              Click <strong>Download Invoice (PDF/Excel)</strong>
            </li>
          </ul>
          <p>
            These invoices include tax amounts, invoice numbers, your TIN, and
            Sellora’s TAX details—needed for accounting and ITC claims.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How are seller payments processed on Sellora?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Sellora settles payments on a <strong>weekly or biweekly</strong>{" "}
            cycle depending on your account. Payments include:
          </p>
          <ul>
            <li>Total order amount (including shipping)</li>
            <li>
              Minus Sellora’s commission, TCS, and applicable service charges
            </li>
            <li>Minus refunds or returns (if any)</li>
          </ul>
          <p>
            Once processed, payouts are directly transferred to your registered
            bank account.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>Where can I view my payment summary and history?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>To access your payment dashboard:</p>
          <ul>
            <li>Go to Seller Center &gt; Payments &gt; Transaction</li>
            <li>View statements by week or invoice period</li>
            <li>
              Download CSV/PDF summaries that include:
              <ul>
                <li>Orders fulfilled</li>
                <li>Fees deducted</li>
                <li>TCS breakdown</li>
                <li>Net payable</li>
              </ul>
            </li>
          </ul>
          <p>This helps track cash flow, commissions, and tax compliance.</p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What is the Seller Wallet in Sellora?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            The <strong>Seller Wallet</strong> is a digital balance maintained
            within your Sellora account to:
          </p>
          <ul>
            <li>Pay for advertising</li>
            <li>Deduct penalties or reimbursements</li>
            <li>Receive instant promotional credits</li>
            <li>Settle minor dues without bank transfers</li>
          </ul>
          <p>
            Your wallet can be topped up manually via UPI/Net Banking or
            auto-adjusted from payout
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How do I recharge my Sellora Wallet?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>To add balance to your wallet:</p>
          <ul>
            <li>Go to Seller Center &gt; Wallet &gt; Add Funds</li>
            <li>
              Choose your preferred payment method (UPI, net banking,
              debit/credit card)
            </li>
            <li>Enter the amount</li>
            <li>Confirm and make payment</li>
          </ul>
          <p>
            {" "}
            Once successful, the balance will be available for use instantly.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How can I use my wallet balance on Sellora?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>You can use wallet balance for:</p>
          <ul>
            <li>Ad campaign budgets</li>
            <li>Event participation fees (e.g., festive sales)</li>
            <li>Discount Coupon &amp; influencer-marketing</li>
            <li>Penalty settlements or service subscriptions</li>
            <li>Quick refunds if needed</li>
          </ul>
          <p>
            {" "}
            Wallet transactions are visible under{" "}
            <strong>Wallet &gt; Transaction History</strong> in Seller Center.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <span>What if I see a mismatch in my payments or deductions?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>If there's a discrepancy in your payments:</p>
          <ul>
            <li>Review the Settlement Report and Tax Invoices</li>
            <li>Cross-check your bank statement and payment release dates</li>
            <li>
              If still unresolved, raise a{" "}
              <strong>
                support ticket via Seller Center &gt; Help &gt; Payments &amp;
                Fees
              </strong>
            </li>
          </ul>
          <p>
            Sellora’s support team typically resolves payment disputes within
            3-5 business days.
          </p>
        </div>
      </div>
    </div>
  </div>
</>





          {/* ==============getting-started-section=open================ */}
        </div>
        
      </div>
    </div>
  </div>
</>

  )
}

export default page