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
              <a href="#"> Order Management</a>{" "}
            </li>
            <li>
              <a href="#">Reporting</a>
            </li>
            <li>
              <a href="#"> How to download report</a>{" "}
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
              <a href="#"> Order Management</a>{" "}
            </li>
            <li>
              <a href="#"> Reporting </a>
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                How to download report
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
  <h2> How to download report</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How to Download a Report on Sellora</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Sellora’s reporting tools help sellers easily access and analyze key
      business data such as orders, returns, payments, and inventory. By
      downloading reports from the Seller Center, you can keep track of your
      performance, manage accounting, and optimize your operations. Reports are
      available in Excel or CSV format and can be filtered by date, product, or
      order ID for better insights. Whether you need a daily order summary, a
      monthly sales breakdown, or a return history, downloading reports from
      Sellora ensures that your business decisions are backed by real data.
    </p>
  </div>
  <p>
    <strong>How to Download a Report on Sellora</strong> <br />
    Sellora provides downloadable reports to help you monitor your Reports{" "}
    <br />
    <strong>Steps to Download a Report:</strong>
  </p>
  <ul>
    <li>Click on Report then click Report centre</li>
    <li>
      Choose the report type you want to download, such as:
      <ul>
        <li>Inventory Report</li>
        <li>Return Report</li>
        <li>Fulfilment Reports</li>
        <li>Advertising Report</li>
        <li>Custom Report</li>
        <li>Seller Fees Tax Invoice Report</li>
        <li>Seller Fees Credit Note Report</li>
        <li>Sales Report</li>
      </ul>
    </li>
    <li>Select the date range or apply filters</li>
    <li>
      Click on the <strong> Request Report</strong> button.
    </li>
  </ul>
  <p>
    Once the report is ready, click <strong> Download Report</strong> to save it
    as a CSV or Excel file
  </p>
  <p />
  <div>
    <h3>Frequently Asked Questions</h3>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How do I download an Inventory Report?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p></p>
        <ul>
          <li>
            Go to <strong>Reports &gt; Inventory Report</strong>
          </li>
          <li>Select the date range or filters</li>
          <li>
            Click <strong>Generate Report,</strong> then click{" "}
            <strong>Download</strong>
          </li>
        </ul>
        <p />
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What does the Return Report include?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          <strong>The Return Report contains:</strong>
        </p>
        <ul>
          <li>Order ID</li>
          <li>Product name and SKU</li>
          <li>Return reason</li>
          <li>Return status</li>
          <li>Return date</li>
        </ul>
        <p> This helps track return trends and product issues.</p>
        <p />
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What is the Seller Fees Tax Invoice Report?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p> This report provides:</p>
        <ul>
          <li>Monthly tax invoices for Sellora service fees</li>
        </ul>
        <p>&nbsp;Use it for accounting and tax compliance.</p>
        <p />
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What is a Seller Fees Credit Note Report?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          This report lists any fee reversals or adjustments credited back to
          your seller account, often due to disputes or returns.
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