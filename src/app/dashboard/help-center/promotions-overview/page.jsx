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
                Promotions Overview
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
                Promotions Overview
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
    <h2>Promotions Overview</h2>
  </div>
  <div className="new_content_11">
    <div className="faq-container">
      <div className="accordion-item">
        <div className="accordion-header">
          <span>What promotional tools does Sellora offer to sellers?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Sellora offers multiple promotional tools to help increase your
            visibility, drive traffic, and boost conversions, including:
          </p>
          <ul>
            <li>Sale Events</li>
            <li>Discount Coupons</li>
            <li>Influencer Marketing</li>
          </ul>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What is the Promotions Overview in the Seller Center?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            The <strong>Promotions Overview</strong> page is your central hub to
            manage and monitor all promotional activity. From here, you can:
          </p>
          <ul>
            <li>View ongoing and upcoming Sale Events</li>
            <li>Create and manage discount coupons</li>
            <li>Apply for site-wide events</li>
          </ul>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What are ‘Sale Events’ on Sellora?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            <strong>Sale Events</strong> are site-wide promotional periods
            (e.g., Festive Sale, Republic Day Sale, End of Season Sale) where
            Sellora features selected products with special visibility and
            marketing support.
          </p>
          <p>
            <strong>To participate:</strong>
          </p>
          <ul>
            <li>
              Go to{" "}
              <strong>Growth &gt; Sellora Promotions &gt; Sale Events</strong>
            </li>
            <li>
              Apply by submitting your product list, discounted price, and stock
              availability
            </li>
            <li>
              Ensure the listings meet event criteria (high quality score,
              on-time delivery, etc.)
            </li>
          </ul>
          <p>
            Accepted products receive homepage or category banner placement and
            email/push promotion to buyers.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How do Discount Coupons work?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Discount Coupons allow sellers to offer limited-time price
            reductions directly to buyers. Sellers can define:
          </p>
          <ul>
            <li>Flat discount (₹50 off, ₹100 off)</li>
            <li>% discount (e.g., 10% off)</li>
            <li>Minimum purchase value (e.g., min ₹999)</li>
            <li>Validity dates</li>
          </ul>
          <p>
            You can create these by navigating to{" "}
            <strong>
              Seller Center &gt; Growth &gt; Sellora Promotions &gt; Discount
              Coupons
            </strong>
            . These coupons are displayed on product pages and during checkout.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>Do I need to pay to join Sale Events or run coupons?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>For each order:</p>
          <ul>
            <li>
              <strong>Sale Events:</strong> There is no platform fee for
              participation, but you must provide attractive discounts and
              maintain a high-performance record.
            </li>
            <li>
              <strong>Coupons:</strong> You fund the discounts, but there’s no
              additional fee for creating or promoting them.
            </li>
          </ul>
          <p>
            {" "}
            Sellora covers marketing costs like banners, emails, and app
            promotions for major events.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What kinds of products perform best in Sale Events?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Products with the highest performance during events usually meet the
            following criteria:
          </p>
          <ul>
            <li>Competitive pricing with at least 15–25% discount</li>
            <li>High-quality images and complete descriptions</li>
            <li>4-star+ ratings and positive reviews</li>
            <li>Fast fulfillment and low return rate</li>
            <li>Already trending or seasonal relevance</li>
          </ul>
          <p>
            Use Sellora Insights to spot opportunities and align inventory with
            event calendars.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>Can I use promotions for new product launches?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Yes, promotions like <strong>Coupons + Influencer Marketing</strong>{" "}
            are ideal for new launches.
          </p>
          <p>You can:</p>
          <ul>
            <li>Run a launch-exclusive coupon</li>
            <li>Promote it through Influencer Marketing</li>
          </ul>
          <p>
            This combination helps boost initial traction and review
            acquisition.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            Where can I find upcoming promotions and register for them?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Sellora provides an event calendar in{" "}
            <strong>
              Seller Center &gt; Growth &gt; Sellora Promotions &gt; Sale Events
            </strong>
            .
          </p>
          <ul>
            <li>
              Each event includes registration deadlines, criteria, and pricing
              guidelines
            </li>
            <li>You can apply product-wise and track approval status</li>
            <li>
              Notifications and reminders will appear in your seller dashboard
            </li>
          </ul>
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