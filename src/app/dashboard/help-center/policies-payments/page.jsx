'use client'
import React, { useEffect, useState } from 'react'
import LeftSideBar from '../leftSideBar';
import LeftMobileSideBar from '../LeftMobileSideBar';
import SearchBox from '../SearchBox';
import { baseUrl } from '@/Http/helper';
import { usePathname } from 'next/navigation';
import { initAccordion } from '../menuListeners';

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
              <a href="#">Help </a>{" "}
            </li>
            <li>
              <a href="#"> Policies &amp; Standards </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Payments
              </a>{" "}
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
      
       <LeftSideBar />
      
      <div className="col-lg-9">
        <div className="notification_breadcomb_rts-navigation-area-breadcrumb d-lg-block d-none">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="notification_breadcomb mb-6">
          <ul>
            <li>
              <a href="#">Help </a>{" "}
            </li>
            <li>
              <a href="#"> Policies &amp; Standards </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Payments
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>






        {/* ==============mobile-menu-filter-open========================= */}
        <LeftMobileSideBar />
        {/* ===================mobile-menu-filter-end==================== */}
        <div className="main-content_10-7">
          <SearchBox />
          <div className="featured_10-7">
            <div className="new_content_11">
              

             
  

<>
  <h2>Payments</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>Payment Eligibility</li>
    <li>Payment Cycle</li>
    <li>Bank Account &amp; Verification</li>
    <li>Payment Status &amp; Reports </li>
    <li>Payment Delays </li>
    <li>Taxes &amp; Compliance </li>
    <li>Wallet Balance vs. Payment Payouts</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Sellora ensures secure and timely payments to all sellers through a
      streamlined and transparent payment system. Once an order is successfully
      delivered and the return window has passed (as per category-specific
      guidelines), the payment is processed to the seller’s registered bank
      account. <br />
    </p>
    <p>
      {" "}
      <strong>Key Payment Policies:</strong>
    </p>
    <ul>
      <li>
        <strong>Payment Cycle:</strong>Payouts are processed on a scheduled
        cycle (e.g., weekly or bi-weekly), depending on the seller tier and
        account status.
      </li>
      <li>
        {" "}
        <strong>Deductions:</strong>All applicable charges, such as commission
        fees, service fees, and promotional costs (e.g., ads, coupons), are
        automatically deducted before the final payout or Wallet.
      </li>
      <li>
        {" "}
        <strong>Wallet Adjustments:</strong> If you've used Sellora Wallet for
        promotional services (Sponsored Ads, Sales Events, Influencer
        Marketing), the corresponding charges are reflected in your earnings
        summary.
      </li>
      <li>
        <strong>Bank Details:</strong>Sellers must ensure their bank details are
        accurate and verified to avoid payout delays.
      </li>
      <li>
        <strong>Tax &amp; Invoicing:</strong> All payments are Tax-compliant,
        and invoices are available in the Seller Center under the Finance or
        Payments tab.
      </li>
    </ul>
    <p />
    <p />
    <p>
      {" "}
      <strong>Important Notes:</strong>
    </p>
    <ul>
      <li>
        Orders with return or dispute issues may have temporary payment holds
        until resolution.
      </li>
      <li>
        Any violation of payment policies or attempts to bypass the platform’s
        transaction process can lead to account suspension or legal action.
      </li>
    </ul>
    <p>
      By maintaining compliance with Sellora’s payment standards, sellers ensure
      a smooth and trustworthy business operation.
    </p>
    <p />
  </div>
  <p>
    <strong>Payment Eligibility</strong>
  </p>
  <ul>
    <li>
      Sellers are eligible to receive payments only after{" "}
      <strong> successful order delivery</strong> and completion of the{" "}
      <strong> return window, </strong> as per Sellora’s return policy.
    </li>
    <li>
      Orders marked as <strong> canceled, returned, or disputed</strong> may
      affect the payout schedule.
    </li>
  </ul>
  <p />
  <p>
    <strong>Payment Cycle</strong>
  </p>
  <ul>
    <li>
      Sellora follows a <strong> weekly payment cycle.</strong> Payments are
      processed and transferred to the seller’s registered bank account every{" "}
      <strong> 7-15 </strong>days, subject to:
      <ul>
        <li>Order delivery confirmation</li>
        <li>Deductions for returns, refunds, or penalties</li>
        <li>Completion of tax information</li>
      </ul>
    </li>
  </ul>
  <p />
  <p>
    <strong>Bank Account &amp; Verification</strong>
  </p>
  <ul>
    <li>
      Sellers must provide a <strong> valid and active bank account</strong>{" "}
      during registration.
    </li>
    <li>
      Bank details must match the <strong> legal name </strong>of the business
      or account holder.
    </li>
    <li>
      Changes to bank account information require{" "}
      <strong> re-verification</strong> for security purposes.
    </li>
  </ul>
  <p />
  <p>
    <strong>&nbsp;Payment Status &amp; Reports</strong>
  </p>
  <ul>
    <li>
      Sellers can track their payments under{" "}
      <strong> Seller Center &gt; Payments</strong>&nbsp;
    </li>
    <li>
      Each payment cycle includes a detailed breakdown of:
      <ul>
        <li>Net earnings</li>
        <li>Order-level income</li>
        <li>Adjustments or deductions</li>
        <li>Payment release date</li>
      </ul>
    </li>
  </ul>
  <p />
  <p>
    <strong>Payment Delays</strong>
  </p>
  <p>Payments may be delayed for the following reasons:</p>
  <ul>
    <li>Incomplete account or identity verification</li>
    <li>Mismatched or incorrect bank details</li>
    <li>Unresolved disputes, returns, or buyer complaints</li>
    <li>System maintenance or delays due to national holidays</li>
    <li>High return rates caused by product quality issues</li>
    <li>
      Violations of Sellora’s Intellectual Property Rights (IPR) Policy Sellora
      will inform you of the cause of the delay and guide you on the actions
      required to resolve it.
    </li>
  </ul>
  <p />
  <p />
  <p>
    <strong>Taxes &amp; Compliance</strong>
  </p>
  <ul>
    <li>
      Sellers must submit valid <strong>tax documentation.</strong>
    </li>
    <li>
      Sellora complies with all applicable{" "}
      <strong> tax collection at source (TCS)</strong> regulations.
    </li>
    <li>
      Tax statements and downloadable reports are available in the{" "}
      <strong> Report &gt; Report centre</strong> section of your dashboard.
    </li>
  </ul>
  <p />
  <p>
    <strong>Wallet Balance vs. Payment Payouts</strong>
  </p>
  <ul>
    <li>
      {" "}
      <strong>Sellora Wallet</strong> is separate from your bank payout. Wallet
      balance is used for:
      <ul>
        <li>Sponsored Ads</li>
        <li>Sales Events</li>
        <li>Influencer Campaigns</li>
      </ul>
    </li>
  </ul>
  <p>
    Payouts to your bank are based on <strong> net sales revenue</strong> after
    platform deductions and do not use wallet funds.
  </p>
  <p />
  <p>
    {" "}
    <strong>Need Assistance?</strong> <br />
    If you have questions or notice discrepancies in your payment, contact{" "}
    <strong>Sellora Seller Support</strong> or raise a ticket through the{" "}
    <strong>Payments Help Center</strong> in your dashboard.
  </p>
  <div>
    <h3>Frequently Asked Questions</h3>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What should I do if my payment amount looks incorrect?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          First, review your <strong>Payment Summary Report</strong> for any
          deductions or adjustments. If you still need assistance, contact{" "}
          <strong>Sellora Seller Support</strong> or raise a ticket from the
          Payments Help Center.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I change my bank account details?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          Yes, you can update your bank details from the Seller Center. However,{" "}
          <strong>re-verification </strong>will be required for security
          reasons, and payouts may be temporarily held until verification is
          complete.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          What happens to my payment if an order is returned or refunded?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          If an order is returned or refunded, the payment for that order will
          be adjusted or reversed from your upcoming payouts. The adjustment
          will be reflected in your Payment Summary, and associated return fees
          may also apply as per Sellora’s return policy.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can Sellora hold my payments?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes, Sellora may place a hold on your payments under certain
          circumstances, including:
        </p>
        <ul>
          <li>Unresolved buyer complaints or disputes</li>
          <li>
            Ongoing account reviews due to performance issues or policy
            violations
          </li>
          <li>Detection of suspicious activity or potential fraud</li>
          <li>High return rates impacting account health</li>
        </ul>
        <p />
      </div>
    </div>
    
  </div>
</>







            </div>
          </div>
          {/* ==============getting-started-section=open================ */}
        </div>
        
      </div>
    </div>
  </div>
</>

  )
}

export default page