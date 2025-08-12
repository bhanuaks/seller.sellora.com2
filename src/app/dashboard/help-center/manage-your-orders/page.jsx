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
              <a href="#">Order Management</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Manage Your Orders
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
              <a href="#">Order Management</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Manage Your Orders
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
  <h2>Manage Your Orders</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How to Manage Your Orders</li>
    <li>How to confirm an Order on Sellora</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      {" "}
      Managing orders on Sellora is essential for delivering a smooth and
      professional shopping experience to your customers. The Seller Center
      provides a centralized dashboard where you can view, process, and track
      all customer orders efficiently. From receiving a new order to updating
      its shipment status, every step can be managed in one place. Sellers are
      required to process orders promptly, print invoices and shipping labels,
      update tracking details, and ensure timely delivery. Accurate order
      management helps improve customer satisfaction, reduce cancellations, and
      maintain a strong seller performance rating.
    </p>
  </div>
  <p>
    <strong>How to Manage Your Orders</strong> <br />
    Sellora provides an easy-to-use dashboard to track and manage all your
    orders efficiently. You can view your order status in the following
    categories:
  </p>
  <ul>
    <li>
      {" "}
      <strong> Unshipped Orders –</strong>View orders that are confirmed but not
      yet shipped. Take action to process and dispatch them on time.
    </li>
    <li>
      {" "}
      <strong> Shipped Orders –</strong> View all orders that have been shipped.
      Track delivery status and manage any post-shipment issues.
    </li>
    <li>
      {" "}
      <strong>Canceled Orders –</strong>&nbsp; Review orders that have been
      canceled by customers or the system. Analyze reasons to reduce future
      cancellations.
    </li>
    <li>
      <strong>All Orders –</strong>Get a complete overview of every
      order—unshipped, shipped, or canceled—for full visibility and
      control.Manage your orders regularly to maintain high performance and
      customer satisfaction on Sellora.
    </li>
  </ul>
  <p />
  <p>
    <strong>How to confirm an Order on Sellora</strong> <br />
    To Confirm an order on Sellora, follow these steps:
  </p>
  <ul>
    <li>Log in to your Seller Center account at seller.sellora.com.</li>
    <li>
      Click on <strong> “Orders”</strong> from the main menu, then select{" "}
      <strong> “Manage Orders.”</strong>
    </li>
    <li>
      Go to the <strong>“Unshipped Orders”</strong> tab.
    </li>
    <li>
      Under the <strong>Action</strong> section on the right side, click the{" "}
      <strong>“Select”</strong> button.
    </li>{" "}
    <li>
      From the dropdown menu, choose <strong>“Confirm Order.”</strong>
    </li>
    <li>You will be redirected to the tracking page.</li>
    <li>
      Click on <strong>“Add Tracking,”</strong> enter the{" "}
      <strong>tracking number,</strong> and select the{" "}
      <strong>shipping carrier.</strong>
    </li>
    <li>
      Click <strong>“Save.”</strong>
    </li>
  </ul>
  <p>
    The order will now be marked as Confirmed, and you can proceed with
    packaging and shipping.
  </p>
  <p />
  <div>
    <div>
      <img src={`${baseUrl}front/assets/images/image-cancel.png`} alt="" />
    </div>
    <div>
      <p>
        <strong>How to Download a Label (Packing Slip) on Sellora</strong>{" "}
        <br />
        To download the packing slip for an order on Sellora, follow these
        steps:
      </p>
      <ul>
        <li>
          Log in to your <strong>Seller Center</strong>account on
          seller.sellora.com.
        </li>
        <li>
          Click on <strong> “Orders”</strong> from the main menu, then select
          <strong> “Manage Orders.”</strong>
        </li>
        <li>
          Click on <strong>“Unshipped Orders”</strong> tab.
        </li>
        <li>
          On the right side under the <strong>Action</strong> section, click on
          the <strong> “Select”</strong> button.
        </li>
        <li>
          From the dropdown menu, choose <strong>“Print packing slip.”</strong>
        </li>
        <li>
          The packing slip (label) will be generated for download or printing.
        </li>
      </ul>
      <p />
    </div>
    <h3>Frequently Asked Questions</h3>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What is an Unshipped Order?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          An Unshipped Order is a confirmed customer order that you haven’t
          dispatched yet. You should fulfill and ship it within the promised
          time to avoid penalties.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What is a Shipped Order?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          A Shipped Order refers to any order that has been dispatched from your
          side. You can track the shipment status and confirm delivery under
          this section.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What does Canceled Order mean?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          A Canceled Order is an order that has been canceled by the customer or
          automatically by the system due to delay or unavailability. Reviewing
          canceled orders helps improve service quality.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What will I see under All Orders?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          If keywords have low impressions or clicks: The All Orders section
          gives you a complete view of all your orders—unshipped, shipped, and
          canceled—in one place for easier management and tracking
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