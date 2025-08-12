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
                Reporting
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
                Reporting
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
    <h2>Reporting</h2>
  </div>
  <div className="new_content_11">
    <div className="faq-container">
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What types of reports are available in Sellora Seller Center?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Sellora provides a wide range of downloadable reports to help
            sellers track and improve their business operations. Key report
            categories include:
          </p>
          <ul>
            <li>
              <strong>Inventory Report</strong>
            </li>
            <li>
              <strong>Return Report</strong>
            </li>
            <li>
              <strong>Fulfilment Reports</strong>
            </li>
            <li>
              <strong>Advertising Report</strong>
            </li>
            <li>
              <strong>Custom Report</strong>
            </li>
            <li>
              <strong>Seller Fees Tax Invoice Report</strong>
            </li>
            <li>
              <strong>Seller Fees Credit Note Report</strong>
            </li>
            <li>
              <strong>Sales Report</strong>
            </li>
          </ul>
          <p>
            These reports give deep insights into your operations, enabling
            better inventory planning, pricing adjustments, and overall
            decision-making.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>Where can I access reports in the Seller Center?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>To access and download reports:</p>
          <ul>
            <li>
              Log in to your <strong>Sellora Seller Center</strong> account
            </li>
            <li>
              Navigate to <strong>Reports</strong> from the top menu
            </li>
            <li>
              Choose your desired report category (Inventory Report, Return
              Report, etc.)
            </li>
            <li>Apply filters such as date range,</li>
            <li>
              Click <strong>"Request Report"</strong> to export the report as a
              CSV or Excel file
            </li>
          </ul>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How do I download a Return Report?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Steps to download a Return Report:</p>
          <ul>
            <li>
              Go to <strong>Reports &gt; Returns</strong>
            </li>
            <li>
              Filter by <strong>Date Range</strong>
            </li>
            <li>
              Click <strong>"Request Report"</strong>
            </li>
          </ul>
          <p>
            This report contains return reasons, item condition, refund status,
            and processing timelines to help monitor post-sale performance.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How can I analyze my sales trends using reports?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Use the <strong>Sales Report</strong> and{" "}
            <strong>Performance Dashboard</strong> to track:
          </p>
          <ul>
            <li>Daily, weekly, or monthly sales trends</li>
            <li>Top-performing SKUs</li>
            <li>Conversion rate per product</li>
            <li>High-return or canceled items</li>
            <li>Buyer location clusters</li>
          </ul>
          <p>
            Export the reports to Excel or Google Sheets for deeper analysis
            using pivot tables or chart
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>Can I generate a Custom Report?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Yes. Sellora’s <strong>Custom Report</strong> feature allows you to
            define and export specific datasets across modules (orders, returns,
            inventory, payments):
          </p>
          <ul>
            <li>Apply filters Custom Report</li>
            <li>Set Date</li>
            <li>Export in preferred format (CSV, Excel)</li>
          </ul>
          <p>
            Access this via <strong>Reports &gt; Custom Reports</strong> in
            Seller Center. It’s ideal for large sellers with specific tracking
            needs.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What is the Seller Fees Tax Invoice Report?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            This report provides a detailed tax invoice for all{" "}
            <strong>commissions and service</strong> fees charged by Sellora. It
            includes:
          </p>
          <ul>
            <li>Fee type (referral, closing, shipping, storage)</li>
            <li>GST breakup</li>
            <li>Invoice number</li>
            <li>Invoice date</li>
            <li>Taxpayer details</li>
            <li>Total payable</li>
          </ul>
          <p>
            This report is crucial for GST return filing. Download from{" "}
            <strong>Reports &gt; Tax Invoices</strong>.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What is the Seller Fees Credit Note Report?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            The Credit Note Report lists any adjustments or reversals made to
            previously invoiced fees. This includes:
          </p>
          <ul>
            <li>Incorrect fee charges</li>
            <li>Order cancellations</li>
            <li>Return-related commission refunds</li>
            <li>Promotional fee reimbursements</li>
          </ul>
          <p>
            It includes GST credit amounts that can be claimed in your returns.
            Find it under Reports &gt; Credit Notes.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What does the Sales Report show?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            The <strong>Sales Report</strong> gives a breakdown of all completed
            orders over a selected time period. Fields include:
          </p>
          <ul>
            <li>Order ID</li>
            <li>Date of sale</li>
            <li>Product name &amp; SKU</li>
            <li>Quantity sold</li>
            <li>Selling price</li>
            <li>Promotions applied</li>
            <li>Net amount credited</li>
          </ul>
          <p>
            Download from <strong>Reports &gt; Sales</strong>, and use this to
            evaluate performance trends, plan inventory, and file taxes.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            How often should I download and review these reports?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <ul>
            <li>
              <strong>Daily:</strong> Orders, Inventory, Fulfillment
            </li>
            <li>
              <strong>Weekly:</strong> Returns, Advertising, Custom reports
            </li>
            <li>
              <strong>Monthly:</strong> Sales, Payment, Fees, Tax Reports
            </li>
          </ul>
          <p>
            Regular tracking helps maintain account health, reduce operational
            delays, and improve customer experience.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>Can I track sales by region or product category?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            No, Sellora does not currently provide the option to track sales by
            region or product category.
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