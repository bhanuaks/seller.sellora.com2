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
              <a href="#">Policies &amp; Standards </a>{" "}
            </li>
            <li>
              <a href="#">Orders &amp; returns</a>{" "}
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
              <a href="#">Policies &amp; Standards </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Orders &amp; returns
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
  <h2>Orders &amp; returns</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>Order Fulfillment</li>
    <li>Shipping &amp; Tracking</li>
    <li>Order Cancellation Policy</li>
    <li>Returns Policy</li>
    <li>Return Shipping &amp; Restocking</li>
    <li>Refunds</li>
    <li>Return Disputes</li>
    <li>Non-Returnable Products</li>
    <li>Order &amp; Return Performance Impact</li>
    <li>Customer Communication</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      To deliver a seamless and reliable shopping experience, Sellora requires
      all sellers to manage <strong> orders and returns</strong> in strict
      alignment with platform standards.
      <br />
      Sellers must <strong> process orders promptly</strong>, provide{" "}
      <strong> valid tracking information</strong>, and meet{" "}
      <strong>shipping deadlines</strong> to ensure timely delivery. All orders
      must be fulfilled accurately, and inventory levels should be consistently
      updated to avoid cancellations.
      <br />
      For returns, Sellora’s policy emphasizes{" "}
      <strong> customer satisfaction</strong> while holding sellers accountable
      for product quality and accurate descriptions. Sellers are expected to
      handle return requests professionally, issue refunds within the defined
      timeframe, and ensure that customers have access to a smooth and fair
      return process.
      <br />
      By following these policies, sellers help build trust, reduce disputes,
      and improve their performance rating on Sellora.
    </p>
  </div>
  <h3>Order Fulfillment</h3>
  <ul>
    <li>
      Sellers must <strong> process and dispatch</strong> all orders within the
      committed handling time.
    </li>
    <li>
      Orders should be shipped using <strong> Sellora-approved carriers</strong>{" "}
      with valid tracking IDs.
    </li>
    <li>
      Delayed or unshipped orders negatively impact your{" "}
      <strong>performance metrics</strong> and may result in penalties.
    </li>
  </ul>
  <h3>Shipping &amp; Tracking</h3>
  <ul>
    <li>
      Sellers must provide <strong> accurate tracking information</strong> for
      every order.
    </li>
    <li>
      Once dispatched, tracking must show{" "}
      <strong> movement within 24 hours</strong>.
    </li>
    <li>
      Sellers are responsible for ensuring orders are packaged securely and
      delivered in the <strong>promised condition</strong> .
    </li>
  </ul>
  <h3>Order Cancellation Policy</h3>
  <ul>
    <li>
      Sellers should only cancel orders in <strong>exceptional cases</strong> ,
      such as stock unavailability.
    </li>
    <li>
      High cancellation rates can lead to reduced visibility, restricted tools,
      or <strong> account suspension</strong>.
    </li>
    <li>
      If an order must be canceled, it should be done <strong> promptly</strong>
      , and the buyer must be informed via the system.
    </li>
  </ul>
  <h3>Order Cancellation Charges</h3>
  <p>
    {" "}
    If a seller cancels an order—whether before or after it has been confirmed—{" "}
    <strong>
      Sellora will impose a penalty equal to 100% of the commission fee{" "}
    </strong>
    applicable to that order. <br />
    <strong>Example:</strong> If the commission for an order is{" "}
    <strong> $10</strong> and the seller cancels it, Sellora will still deduct
    $10 as a cancellation penalty. <br />
    This policy is in place to maintain a high level of buyer satisfaction and
    order reliability on the Sellora platform.
  </p>
  <h3>Returns Policy</h3>
  <ul>
    <li>
      Sellora follows a <strong> customer-first return policy</strong>, which
      allows eligible products to be returned within a defined return window.
    </li>
    <li>
      Sellers are <strong> expected to accept returns</strong> for valid reasons
      including:
      <ul>
        <li>Damaged or defective items</li>
        <li>Incorrect product shipped</li>
        <li>Product not as described</li>
      </ul>
    </li>
  </ul>
  <h3>Return Shipping &amp; Restocking</h3>
  <ul>
    <li>
      If the return is due to seller error (e.g., wrong, damaged, or defective
      item), the seller bears the <strong> return shipping cost</strong>.
    </li>
    <li>
      For buyer-initiated returns (e.g., changed mind), Sellora may deduct{" "}
      <strong>reverse logistics charges</strong> as per platform policy.
    </li>
    <li>
      Sellers may apply a <strong> restocking fee</strong>, if applicable and
      transparently mentioned in the listing.
    </li>
  </ul>
  <h3>Refunds</h3>
  <ul>
    <li>
      Refunds are initiated automatically once the returned item is{" "}
      <strong> received and verified</strong>.
    </li>
    <li>
      Refunds to the customer are deducted from the seller’s account as part of
      the <strong> adjusted payout cycle</strong>.
    </li>
  </ul>
  <h3>Return Charges</h3>
  <p>
    {" "}
    When a buyer returns a product,{" "}
    <strong>Sellora will charge the seller 25% of the commission</strong>{" "}
    originally charged on that order.
    <strong>Example:</strong>
    <br /> If the commission on an order was <strong>$100</strong>, and the
    product is returned by the buyer, <strong> $25 (25% of $100)</strong> will
    be charged to the seller as a <strong> return fee.</strong>
    <br /> The product is <strong> returned by the buyer</strong> for reasons
    such as:
  </p>
  <ul>
    <ul>
      <li>Item not as described</li>
      <li>Defective or damaged item</li>
      <li>Wrong product delivered</li>
      <li>Quality dissatisfaction</li>
    </ul>
  </ul>
  <p />
  <h3>Return Disputes</h3>
  <ul>
    <li>
      If a seller believes a return is <strong> unjustified or abusive</strong>,
      a dispute can be raised through{" "}
      <strong>Seller Center &gt; Dispute Returns</strong> within the resolution
      window.
    </li>
    <li>
      {" "}
      <strong>Sellers must provide supporting evidence</strong> (e.g., unboxing
      videos, shipment photos, or communication logs) for dispute review
    </li>
  </ul>
  <h3>Non-Returnable Products</h3>
  <ul>
    <li>
      Products marked as <strong>non-returnable</strong> must be clearly
      indicated in the listing.
    </li>
    <li>
      Categories such as perishable goods, hygiene products, and made-to-order
      items may not be eligible for return, subject to Sellora’s policy
      approval.
    </li>
  </ul>
  <h3>Order &amp; Return Performance Impact</h3>
  <ul>
    <li>
      Late dispatches, cancellations, and poor return handling negatively
      impact:
      <ul>
        <li>Seller performance rating</li>
        <li>Visibility in search and campaigns</li>
        <li>Eligibility for promotions and seller tiers</li>
      </ul>
    </li>
  </ul>
  <h3>Customer Communication</h3>
  <ul>
    <li>
      All communication regarding orders or returns must be handled{" "}
      <strong> professionally and promptly</strong>.
    </li>
    <li>
      Sellers are encouraged to respond to buyer queries and return requests
      within <strong> 24 hours</strong> to ensure a smooth experience.
    </li>
  </ul>
  <p style={{ margin: 0 }}>
    <strong>Need Help?</strong>
  </p>
  <p>
    For assistance with orders, returns, or disputes, sellers can visit the{" "}
    <strong> Seller Center &gt; Orders &amp; Returns Help </strong>Center or
    contact <strong> Sellora Seller Support</strong>.
  </p>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>Can I refuse a return request?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          You may deny a return if it falls outside the return window or if the
          item is damaged due to customer misuse. All denials must be in line
          with Sellora’s return policy and require supporting evidence.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What happens if I fail to ship on time?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Orders not shipped by the Expected Ship Date (ESD) may be
          auto-canceled. Repeated delays will negatively affect your Seller
          Performance Metrics and may lead to account restrictions.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How will I know if a return has been initiated?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          You will receive a notification via Seller Center and/or email when a
          return is requested. You must respond within the specified timeframe
          to avoid auto-approval.{" "}
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can customers return items after delivery?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes. Customers can initiate a return based on the product category and
          return eligibility window outlined in Sellora’s Returns Policy.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Are all items returnable?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          No. Certain items are marked as non-returnable such as hygiene
          products, perishables, or custom-made goods. These must be clearly
          mentioned in your listing.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>When does the buyer receive their refund?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Once the returned item is received and verified, the refund is
          processed within 2–5 business days, and adjusted from your next
          payout.
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