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
              <a href="#">Taxes &amp; payments </a>{" "}
            </li>
            <li>
              <a href="#">Payments</a>{" "}
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
              <a href="#">Taxes &amp; payments</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
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
    <li>Payments Overview</li>
    <li>Transactions</li>
    <li>Disbursements</li>
    <li>How to Change Bank Account Information</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Sellora ensures secure, timely, and transparent payments for all your
      successful orders. You can manage and track every aspect of your earnings,
      from individual order transactions to total disbursements—all from your{" "}
      <strong> Seller Center.</strong>
    </p>
  </div>
  <h3>Payments Overview</h3>
  <p>
    The <strong> Payments Overview</strong> page provides a snapshot of your
    recent earnings and scheduled payouts. It shows:
  </p>
  <ul>
    <li>
      <strong>Total Earnings</strong>
    </li>
    <li>
      <strong>Pending Disbursements</strong>
    </li>
    <li>
      <strong>Next Payment Date</strong>
    </li>
    <li>
      <strong>Recent Settlements</strong>
    </li>
  </ul>
  <h3 style={{ margin: 0 }}>Steps to View Transactions:</h3>
  <ul>
    <li>
      Navigate to <strong> Payments &gt; Payments Overview</strong>
    </li>
    <li>
      Show Payments Overview
      <ul>
        <li>Opening balance</li>
        <li>Sales</li>
        <li>Refunds</li>
        <li>Expenses</li>
        <li>Paid to you</li>
        <li>Reserve</li>
      </ul>
    </li>
  </ul>
  <p>
    Use this overview to track your earnings and understand your account
    activity at a glance.
  </p>
  <h3>Transactions</h3>
  <p>
    The <strong> Transactions</strong> tab displays a complete record of all
    payment-related activities, including:
  </p>
  <ul>
    <li>Order-level breakdown</li>
    <li>Commission and service fee details</li>
    <li>Return or refund deductions</li>
    <li>Tax components (Sales tax, TDS, etc.)</li>
  </ul>
  <h3>Steps to View Transactions:</h3>
  <ul>
    <li>
      Navigate to <strong> Payments &gt; Transactions.</strong>
    </li>
    <li>
      Use the available filters to customize your view:
      <ul>
        <li>
          <strong>Transaction Type:</strong>
          <ul>
            <li>Sale</li>
            <li>Refund</li>
            <li>Dispute</li>
            <li>Adjustment</li>
            <li>Service Free</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      Select the <strong> Date Range </strong>(From and To).
    </li>
    <li>
      Click <strong> Search </strong>to display the results.
    </li>
    <li>
      Click <strong> Search</strong> then click on <strong> Download </strong>
      for offline records.
    </li>
  </ul>
  <h3>Disbursements&nbsp;</h3>
  <p>
    Disbursements are the actual payouts sent to your registered bank account
    after deducting applicable charges and return hold periods.
  </p>
  <h3>How to Change Bank Account Information</h3>
  <p>Please follow these steps:&nbsp;</p>
  <ul>
    <li>
      Click on the <strong> Settings </strong>icon at the top right corner of
      the page.
    </li>
    <li>
      Select <strong> Bank Account Information </strong>from the menu.
    </li>
    <li>
      Click on the <strong>Edit </strong> button.
    </li>
    <li>Enter the required details accurately.&nbsp;</li>
    <li>
      After filling in all the necessary information, click on the{" "}
      <strong> Update </strong>button.&nbsp;
    </li>
    <li>Your bank account information will be successfully updated.</li>
  </ul>
  <p />
  <div className="notes_11">
    <h3>Notes:</h3>
    <p>
      {" "}
      After updating your bank account details, your payments will be placed on
      hold for <strong> 7 days </strong>for security verification.
    </p>
  </div>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>When will I receive my payment?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          Payments are processed weekly, usually 7 days after the order is
          marked as shipped and the return period is over.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What happens if my bank details are incorrect?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Your payment will fail, and you’ll be notified to update your bank
          details in <strong> Settings &gt; Bank Information.</strong>
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How to check the breakdown of a payment?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Go to <strong> Payments Report</strong>, select the transaction, and
          click on “View Details” to see commissions, taxes, and net payout.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Is Tax deducted?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes. Service tax is applicable on commissions and service fees as per
          government norms and is included in your tax invoice.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What is a Credit Note?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          A Credit Note is issued when there’s an overcharge, return adjustment,
          or fee reversal. You can download it from the Reports section
        </p>
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