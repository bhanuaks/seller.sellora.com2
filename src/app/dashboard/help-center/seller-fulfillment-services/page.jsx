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
                Seller Fulfillment Services
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
                Seller Fulfillment Services
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
    <h2>Seller Fulfillment Services</h2>
  </div>
  <div className="new_content_11">
    <div className="faq-container">
      <div className="accordion-item">
        <div className="accordion-header">
          <span>What is Seller Fulfillment on Sellora?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Seller Fulfillment (also called Merchant Fulfillment) is when the
            seller is responsible for:
          </p>
          <ul>
            <li>Storing inventory</li>
            <li>Packing and shipping the orders</li>
            <li>Handling returns and delivery support</li>
          </ul>
          <p>
            Sellora provides tools to help sellers manage fulfillment smoothly,
            including shipping templates, courier integration, and inventory
            tracking.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>Can I offer free shipping on selected products only?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Yes. Within your shipping template:</p>
          <ul>
            <li>Set specific SKUs or categories to have ₹0 shipping fee</li>
            <li>
              Or define{" "}
              <strong>"Free shipping on orders above X amount"</strong>
            </li>
          </ul>
          <p>
            {" "}
            Free shipping often improves conversions and reduces cart
            abandonment.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            How can I control delivery timelines for merchant-fulfilled
            products?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            You can set your own <strong>handling time</strong> (how long you
            take to dispatch an order) in the Seller Center. Standard is{" "}
            <strong>1–2 business days</strong>, but you may set longer timelines
            for made-to-order or bulk items. Delivery speed depends on the
            courier method chosen and distance to the customer.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What happens if I miss a delivery deadline as a merchant?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Consequences of late dispatch or delivery include:</p>
          <ul>
            <li>Reduced seller performance score</li>
            <li>
              Potential <strong>late shipping penalties</strong>
            </li>
            <li>Lower visibility for affected SKUs</li>
          </ul>
          <p>
            Use cut-off time, real-time inventory, and courier tracking to stay
            on time.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How do I track shipments and update order status?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>For each order:</p>
          <ul>
            <li>Upload tracking ID</li>
            <li>Select courier from dropdown</li>
            <li>Update expected delivery date (optional)</li>
          </ul>
          <p>
            {" "}
            Once marked as shipped, customers receive tracking info
            automatically.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What’s the best way to reduce my shipping costs as a merchant?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <ul>
            <li>Use optimized packaging to reduce dimensional weight</li>
            <li>Negotiate bulk courier rates</li>
            <li>Use region-specific shipping templates</li>
            <li>Consolidate orders by location when possible</li>
          </ul>
          <p>
            Reducing cost without compromising service boosts profitability.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What should I include in a shipment to ensure good customer
            experience?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Recommended inclusions:</p>
          <ul>
            <li>Well-secured packaging</li>
            <li>Product tags, instructions, or warranty card</li>
            <li>Invoice (TAX-compliant)</li>
            <li>Optional: a thank-you note or small freebie for retention</li>
          </ul>
          <p>
            {" "}
            A clean, well-packed item reduces returns and boosts positive
            reviews.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            Can I track performance for my merchant fulfillment activities?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Yes. <strong>Go to Reports &gt; Fulfillment Dashboard</strong> in
            Seller Center.
          </p>
          <p>Track metrics like:</p>
          <ul>
            <li>On-time shipping rate</li>
            <li>Delivery success rate</li>
            <li>Return %</li>
            <li>Shipping cost vs. revenue</li>
          </ul>
          <p> Use this data to identify gaps and optimize operations.</p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What should I do if a buyer falsely claims non-delivery?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>If tracking shows delivered:</p>
          <ul>
            <li>
              Provide tracking proof in Seller Center under Dispute Orders
            </li>
            <li>Request Sellora’s mediation if needed</li>
            <li>
              Use delivery confirmation methods like OTP (if available with
              courier)
            </li>
            <li>
              Frequent cases may trigger buyer fraud protection by Sellora.
            </li>
          </ul>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            How do I handle damaged returns or customer complaints about
            packaging?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>If customers report damaged products:</p>
          <ul>
            <li>Initiate a return and request product photos via support</li>
            <li>Inspect the item once returned</li>
          </ul>
          <p>
            File a <strong>claim with your shipping partner</strong> if damage
            occurred in transit
          </p>
          <p>
            Maintain high-quality packaging materials and avoid loose
            cushioning.
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