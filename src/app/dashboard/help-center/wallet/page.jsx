'use client'
import React, { useEffect, useState } from 'react'
import LeftSideBar from '../LeftSideBar';
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
              <a href="#"> Wallets</a>{" "}
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
                {" "}
                Wallets
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
  <h2> Wallets</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>Key Uses of Wallets</li>
    <li>How to Access and Use Wallets</li>
    <li>How to Add Funds to Wallet</li>
    <li>Wallet Transaction Report</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      The <strong> Wallets</strong> section on <strong> Sellora </strong>is a
      dedicated balance account that sellers can use for{" "}
      <strong> Advertising, Sales Events and Influencer marketing</strong>.
      Instead of deducting charges from your disbursements, Sellora uses the
      wallet to manage Advertising &amp; promotional spending efficiently.
    </p>
  </div>
  <h3>Key Uses of Wallets:</h3>
  <ul>
    <li>
      <strong>Advertising Charges:</strong>
      <p>
        {" "}
        Funds are used to run Sponsored Ads or banner promotions on Sellora.
      </p>
    </li>
    <li>
      <strong>Sales Events Fees:</strong>
      <p>
        {" "}
        If you enroll your products in special deals or events (e.g.,{" "}
        <strong>Sales Events</strong> Deals), the fee is deducted from the
        wallet.
      </p>
    </li>
    <li>
      <strong>Influencer marketing :</strong>
      <p>
        {" "}
        all directly through the wallet. This ensures faster payouts, better
        tracking, and smoother financial control during influencer campaigns.
      </p>
    </li>
  </ul>
  <h3 style={{ margin: 0 }}>How to Access and Use Wallets:</h3>
  <ul>
    <li>
      Navigate to <strong> Advertising &gt; Wallets.</strong>
    </li>
    <li>
      View Wallet Summary
      <ul>
        <li>&nbsp;Ads Wallet Balance</li>
        <li>&nbsp;Accruing charges</li>
        <li>Ads Billed Amount</li>
        <li>Total balance</li>
      </ul>
    </li>
  </ul>
  <h3>How to Add Funds to Wallet:</h3>
  <ul>
    <li>
      Navigate to <strong> Advertising &gt; Wallets.</strong>
    </li>
    <li>Click on Add Money.</li>
    <li>Choose the amount and complete payment via net banking, or card.</li>
  </ul>
  <div className="notes_11">
    <h3>Notes:</h3>
    <p>
      {" "}
      Ensure sufficient balance to avoid interruption in ads or deal visibility.
    </p>
  </div>
  <h3>Wallet Transaction Report:</h3>
  <ul>
    <li>
      Navigate to <strong> Advertising &gt; Wallets.</strong>
    </li>
    <li>
      <strong>All Transactions</strong>
      <ul>
        <li>
          <strong>Ads Bills</strong>
        </li>
        <li>
          <strong>Payment</strong>
        </li>
      </ul>
    </li>
    <li>Select any one of the tabs based on your requirement.</li>
    <li>
      Click on <strong> Export All </strong>to see Wallet Transaction
    </li>
  </ul>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>What is the Sellora Wallet?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          The Sellora Wallet is a virtual account used to pay for Advertising,
          Sales Events, and Influencer Marketing on the Sellora platform. It
          helps you manage all your promotional expenses in one convenient
          place.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What can I use my wallet balance for?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>You can use your wallet balance for:</p>
        <ul>
          <li>Sponsored Ads</li>
          <li>Sales Events</li>
          <li>Influencer Marketing</li>
        </ul>
        <p />
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What happens if my wallet has insufficient balance?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          If your wallet has insufficient balance, your active Ads, Sales
          Events, and Influencer Marketing campaigns may be automatically paused
          until sufficient funds are added.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I withdraw money from my Sellora wallet?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Can I withdraw money from my Sellora wallet? No. Wallet balance is
          non-withdrawable and can only be used for promotional services on
          Sellora.
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