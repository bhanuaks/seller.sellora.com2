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
                Order Management
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
                Order Management
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
    <h2>Order Management</h2>
  </div>
  <div className="new_content_11">
    <div className="faq-container">
      <div className="accordion-item">
        <div className="accordion-header">
          <span>
            Manage Orders
            <br />
            How do I manage my orders on Sellora?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            You can manage all your orders through{" "}
            <strong>Seller Center &gt; Orders &gt; Manage Orders.</strong> This
            dashboard allows you to:
          </p>
          <ul>
            <li>View new, Unshipped, shipped, canceled, or returned orders</li>
            <li>Download bulk order reports</li>
            <li>Print invoices and shipping labels</li>
            <li>Update order statuses</li>
            <li>Communicate with buyers if needed</li>
          </ul>
          <p>
            Always process orders within your committed dispatch timelines to
            avoid penalties.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            How do I update tracking information for shipped orders?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>To upload tracking details:</p>
          <ul>
            <li>
              Go to <strong>Orders &gt; Manage Orders</strong>
            </li>
            <li>
              Click{" "}
              <strong>
                “Unshipped order and click confirm and Update Tracking”
              </strong>{" "}
              on the specific order
            </li>
            <li>
              Enter: <strong>Tracking number</strong>
            </li>
            <li>
              Click <strong>Submit</strong>
            </li>
          </ul>
          <p>
            This helps customers track their delivery and ensures faster
            remittance after delivery confirmation.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            Can I print invoices and shipping labels from Sellora?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Yes. Go to <strong>Orders &gt; Manage Orders</strong>, and select
            the relevant order. You can print:
          </p>
          <ul>
            <li>Tax invoices</li>
            <li>Packing slips</li>
            <li>Shipping labels (if using integrated logistics)</li>
          </ul>
          <p>
            You may also customize invoice format under{" "}
            <strong>Settings &gt; Invoice Preferences.</strong>
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What happens if I miss fulfilling an order on time?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>If you fail to ship within the committed dispatch time:</p>
          <ul>
            <li>The order may be canceled automatically</li>
            <li>Your seller rating may drop</li>
            <li>
              Repeated delays can lead to{" "}
              <strong>account suspension or restriction</strong>
            </li>
          </ul>
          <p>
            Always update stock in real time and mark products as inactive if
            unavailable.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How can I cancel an order from my end?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>To cancel an order:</p>
          <ul>
            <li>
              Go to <strong>Orders &gt; Manage Orders</strong>
            </li>
            <li>
              Select the order &gt; Click <strong>Cancel</strong>
            </li>
            <li>
              Choose a cancellation reason (e.g., Out of Stock, Damaged, Wrong
              Listing)
            </li>
            <li>Submit</li>
          </ul>
          <p>
            Note: Canceling confirmed orders may affect your Order Defect Rate
            &amp; 100% penalty on commission . It is advisable to cancel only in
            unavoidable situations.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>Will I be charged fees if I cancel an order?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Yes. If a seller cancels an order after it has been confirmed:</p>
          <ul>
            <li>
              Sellora charges 100% of the referral fee that would’ve applied
            </li>
            <li>
              This helps compensate for customer experience disruption and
              platform loss
            </li>
          </ul>
          <p>To avoid this, keep your listings and stock up to date.</p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            Can a customer cancel an order, and how do I handle it?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Yes. Customers may cancel an order before it ships. In such cases:
          </p>
          <ul>
            <li>You’ll be notified immediately</li>
            <li>If already packed/shipped, you can initiate a return/refund</li>
            <li>
              No referral fee will be charged if the buyer cancels before
              dispatch
            </li>
          </ul>
          <p>Do not ship orders that have already been canceled.</p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            How do I pause my sales if I am temporarily unable to fulfill
            orders?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            If you're on vacation or facing operational downtime, you can Pause
            Sales via:
          </p>
          <ul>
            <li>Seller Center &gt; Settings &gt; Pause Store</li>
            <li>Set the pause start and end date</li>
          </ul>
          <p>Confirm your selection</p>
          <p>
            Your listings will be temporarily hidden from buyers. Once the pause
            ends, listings automatically become active again.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            Can I continue fulfilling open orders even after pausing sales?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Yes. Pausing your sales only prevents new orders from being placed.
            You are still{" "}
            <strong>required to fulfill any open or pending orders</strong>.
            Failing to do so may result in negative metrics or penalties.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What if I forgot to resume my store after pausing sales?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            If you set an end date for the pause, your store will resume
            automatically. However, if you manually paused it without a set
            date, you’ll need to:
          </p>
          <ul>
            <li>
              Go to{" "}
              <strong>Seller Center &gt; Settings &gt; Resume Sales</strong>
            </li>
            <li>Reactivate your listings manually</li>
          </ul>
          <p>Monitor your pause period to avoid losing potential sales.</p>
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