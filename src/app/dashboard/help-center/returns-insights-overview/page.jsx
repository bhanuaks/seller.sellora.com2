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
              <a href="">Order Management</a>
            </li>
            <li>
              <a href="#">Returns &amp; Refunds</a>{" "}
            </li>
            <li>
              <a href="#">Returns insights: Overview</a>{" "}
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
              <a href="#">Order Management</a>{" "}
            </li>
            <li>
              <a href="#">Returns &amp; Refunds </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Returns insights: Overview
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
  <h2>Returns insights: Overview</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How does it work?</li>
    <li>How to Manage Returns on Sellora</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      The Returns insights dashboard provides historical data about your
      returns, including the reason the item was returned and the refunded
      amount. In this guide, you’ll learn more about these insights and how to
      access them.
    </p>
  </div>
  <h3>How does it work?</h3>
  <p>
    The dashboard includes SKU-level details of all of your returned items along
    with additional relevant data column fields. To access your insights, select
    Returns under Orders in Seller Center, then choose the View returns insights
    button.&nbsp; The dashboard also allows you to view the reason for a return
    or identify defective items. Select the underlined number in the Returns
    reasons column to view why a customer returned the item. Below are
    additional metrics you can track:
  </p>
  <div className="table-container2">
    <table>
      <thead>
        <tr>
          <th width="50%">Performance metric</th>
          <th width="50%">Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
              {" "}
              <li>Total returns (orders)</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>The total number of orders returned by customers.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              {" "}
              <li>Refund rate</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                The percentage of orders refunded for reasons the seller is
                responsible for such as an item damaged or incorrect item
                received. You must maintain a rate of &lt; 6%
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              {" "}
              <li>Refund gross merchandise value (GMV)</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>The total GMV refunded.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              {" "}
              <li>Returns processing fee</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>The total fees paid for processing returns.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              {" "}
              <li>Units</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>The number of units returned within the date range.</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <h3 style={{ margin: 0 }}>How to Manage Returns on Sellora</h3>
  <p>
    Sellora provides a clear dashboard for managing all your return requests in
    the Seller Center. You can easily view and track return statuses, including
    pending and completed returns.
  </p>
  <p>
    <strong>Steps to Manage Returns:</strong>
  </p>
  <ul>
    <li>
      click on <strong> Orders</strong>.then click on <strong> Returns</strong>
    </li>
    <li>
      You will see the following return categories displayed at the top:{" "}
      <ul>
        <li>All Returns – Shows total number of all return requests.</li>
        <li>
          Pending Returns – Returns that are waiting for your approval or
          processing.
        </li>
        <li>
          Complete Returns – Returns that have been successfully processed and
          closed.
        </li>
      </ul>
    </li>
    <p>
      Click on each tab to view the corresponding return orders and their
      details.
    </p>
  </ul>
  <h3>How to Download Return Report&nbsp;</h3>
  <p>Step-by-Step Guide:</p>
  <ul>
    <li>
      Click on <strong> Performance</strong> from the main menu.
    </li>
    <li>
      Then click on <strong> Returns</strong>.
    </li>
    <li>
      Select the <strong> Return Report tab</strong>.
    </li>
    <li>
      Apply filters if needed:
      <ul>
        <li>
          <strong>Date Range</strong> (From – To)
        </li>
        <li>
          {" "}
          <strong>Enter SKU</strong> or <strong> SIN</strong>
        </li>
        <li>
          Click on <strong>Download Report </strong> to generate and save the
          file.
        </li>
      </ul>
    </li>
  </ul>
  <p />
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>
          Why is my refund rate different from my refund rate shown on the
          Performance dashboard?
        </span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          Depending on the date range you’ve selected, the refund rate displayed
          on the Returns insight dashboard may differ from your overall refund
          rate that is used to calculate your Seller Performance metrics.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>How quickly should I process a return?&nbsp;</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>Returns should be processed within 48 hours.</p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>What should I do if I want to dispute a return?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>If you’re eligible, you may be able to dispute a return. </p>
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