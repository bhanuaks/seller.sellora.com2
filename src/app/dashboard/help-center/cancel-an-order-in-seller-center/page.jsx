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
              <a href="#">Order Management</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Cancel an order in Seller Center
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
                Cancel an order in Seller Center
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
  <h2>Cancel an order in Seller Center</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How to Cancel an Order in Seller Center</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      {" "}
      Sellers on Sellora have the option to cancel an order in certain
      situations—such as buyer request, out-of-stock items, incorrect pricing,
      or order errors. Order cancellation should be done carefully, as frequent
      cancellations can negatively impact your performance score. Cancellations
      must be updated in the Seller Center before the item is shipped, and a
      valid reason must be provided.
    </p>
  </div>
  <p>
    <strong>How to Cancel an Order in Seller Center</strong> <br />
    To cancel an order on Sellora, follow these steps:
  </p>
  <p> </p>
  <ol style={{ marginLeft: 5 }}>
    <li style={{ color: "black !important" }}>
      {" "}
      Log in to your Seller Center account at seller.sellora.com.
    </li>
    <li style={{ color: "black !important" }}>
      Click on <strong>“Orders”</strong> from the main menu, then select{" "}
      <strong>“Manage Orders.”</strong>
    </li>
    <li style={{ color: "black !important" }}>
      Go to the <strong>“Unshipped Orders”</strong> tab and locate the order you
      wish to cancel.
    </li>
    <li style={{ color: "black !important" }}>
      Under the <strong>Action</strong> section on the right side, click the{" "}
      <strong>“Select”</strong> button.
    </li>
    <li style={{ color: "black !important" }}>
      From the dropdown menu, select <strong>“Cancel Order.”</strong>
    </li>
    <li style={{ color: "black !important" }}>
      You will be redirected to the <strong>Cancel Order</strong> page.
    </li>
    <li style={{ color: "black !important" }}>
      From the <strong>Reason for Refund dropdown,</strong> select the
      appropriate reason:
      <ul>
        <li>Buyer Return</li>
        <li>Product Not as Described</li>
        <li>No Inventory</li>
        <li>Order Not Received</li>
        <li>Could Not Ship</li>
        <li>Missed Fulfillment Promise</li>
        <li>Pricing Error</li>
        <li>Buyer Cancelled</li>
        <li>Different Item</li>
        <li>Delivered Late by Carrier</li>
      </ul>
    </li>
    <li style={{ color: "black !important" }}>
      Click <strong>“Refund Full Amount”</strong> and enter a note in the{" "}
      <strong>Take Note</strong> field.
    </li>
    <li style={{ color: "black !important" }}>
      Tick the checkbox to acknowledge: <br />
      “I acknowledge that this is a prepaid order and confirm that I have
      received the payment from the buyer.”
    </li>
    <li style={{ color: "black !important" }}>
      Click <strong>“Submit Refund.”</strong>
    </li>
  </ol>
  <p />
  <p>
    {" "}
    The order will be marked as Canceled, and the customer will be notified
    automatically.
  </p>
  <p />
  <div>
    <img src={`${baseUrl}front/assets/images/cancel-image100.png`} alt="" />
  </div>
  <div>
    <p>
      Note:- If you cancel an order, Sellora will charge you 100% of the
      commission fee on your order&nbsp;
    </p>
  </div>
  <h3>Frequently Asked Questions</h3>
  <div className="accordion-item">
    <div className="accordion-header">
      <span>
        What Happens If a Buyer Requests Order Cancellation Before or After the
        Order Is Shipped?
      </span>
      <span className="accordion-arrow">
        <i className="fas fa-chevron-right" />
      </span>
    </div>
    <div className="accordion-content">
      <p>
        {" "}
        <strong>Before the Order Is Shipped:</strong> <br />
        If a buyer requests cancellation before the order is marked as shipped,
        you can cancel the order without any penalty. <br />
      </p>
      <ul>
        <li>The buyer will receive a 100% refund.</li>
        <li>There are no charges or penalties for the seller.</li>
        <li>
          It is recommended to process the cancellation request promptly to
          maintain a good customer experience.
        </li>
      </ul>
      <p>
        <strong>After the Order Is Shipped:</strong> <br />
        If the buyer requests cancellation after the order has been shipped, the
        order can still be cancelled if the seller agrees.{" "}
      </p>
      <ul>
        <li>A full refund must be provided to the buyer.</li>
        <li>
          No penalty will be applied to the seller if the cancellation is
          initiated by the buyer.
        </li>
        <li>
          The seller can also guide the buyer to refuse delivery or initiate a
          return if applicable.
        </li>
      </ul>
      Important: Cancellations requested by the buyer are not penalized.
      However, sellers should still handle such requests professionally and
      ensure timely communication.
      <p />
    </div>
  </div>
  <div className="accordion-item">
    <div className="accordion-header">
      <span>Can I Cancel an Order After It Has Been Shipped?</span>
      <span className="accordion-arrow">
        <i className="fas fa-chevron-right" />
      </span>
    </div>
    <div className="accordion-content">
      <p>
        <strong>Yes,</strong> an order can still be cancelled after it has been
        marked as <strong>shipped,</strong> but it is{" "}
        <strong>strongly discouraged.</strong> <br />
        If cancellation is necessary:
      </p>
      <ul>
        <li>
          You must select a valid <strong>cancellation reason.</strong>
        </li>
        <li>
          A <strong>100% refund</strong> will be issued to the buyer.
        </li>
        <li>
          <strong>Sellora will charge a cancellation fee</strong> equivalent to{" "}
          <strong>150% of the commission</strong> for the cancelled order.
        </li>
      </ul>
      <p>
        <strong>Important:</strong> Cancelling orders after shipment or
        confirmation may impact your seller performance metrics.{" "}
        <strong>Sellora strongly recommends avoiding cancellations</strong>{" "}
        unless absolutely necessary, especially after the order has been
        confirmed or shipped.
      </p>
      <p />
    </div>
  </div>
  <div className="accordion-item">
    <div className="accordion-header">
      <span>What are valid reasons to cancel an order?</span>
      <span className="accordion-arrow">
        <i className="fas fa-chevron-right" />
      </span>
    </div>
    <div className="accordion-content">
      <p> Some valid cancellation reasons include:</p>
      <ul>
        <li>Out of stock</li>
        <li>Incorrect pricing</li>
        <li>Address issue</li>
        <li>Product no longer available</li>
        <li>Technical error</li>
      </ul>
      <p />
    </div>
  </div>
  <div className="accordion-item">
    <div className="accordion-header">
      <span>Will the customer be notified if I cancel their order?</span>
      <span className="accordion-arrow">
        <i className="fas fa-chevron-right" />
      </span>
    </div>
    <div className="accordion-content">
      <p>
        {" "}
        Yes, the customer will automatically receive a notification once the
        order is canceled through the Seller Center.
      </p>
    </div>
  </div>
  <div className="accordion-item">
    <div className="accordion-header">
      <span>Does canceling orders affect my seller performance?</span>
      <span className="accordion-arrow">
        <i className="fas fa-chevron-right" />
      </span>
    </div>
    <div className="accordion-content">
      <p>
        {" "}
        Yes, frequent cancellations can negatively affect your seller rating and
        account health. Keep your inventory and pricing accurate to avoid
        cancellations.
      </p>
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