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
                Catalog Management
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
                Catalog Management
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
    <h2>Catalog Management</h2>
  </div>
  <div className="new_content_11">
    <div className="faq-container">
      <div className="accordion-item">
        <div className="accordion-header">
          <span>What is Catalog Management on Sellora?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            <strong>Catalog Management</strong> is the process of maintaining
            and updating your product listings, prices, inventory, and content
            in the Seller Center. It ensures that your storefront is accurate,
            up-to-date, and ready to convert visitors into buyers. This
            includes:
          </p>
          <ul>
            <li>Creating and managing product listings</li>
            <li>Updating inventory for seller-fulfilled orders</li>
            <li>Monitoring prices and promotions</li>
            <li>Resolving listing issues and content errors</li>
          </ul>
          <p>
            {" "}
            A well-managed catalog directly impacts your visibility and sales
            performance.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What is Listing Management and why is it important?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            <strong>Listing Management</strong> refers to how sellers handle
            their product content on Sellora, including:
          </p>
          <ul>
            <li>Titles, descriptions, and bullet points</li>
            <li>Images and videos</li>
            <li>Category and attribute assignment</li>
            <li>Variant structures and groupings</li>
          </ul>
          <p>
            {" "}
            A well-managed listing improves discoverability, boosts conversion,
            and reduces order issues. Poor listing management may lead to
            rejections or suppressed visibility.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What is the Listing Error Troubleshooter and how do I use it?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            The Listing Error Troubleshooter is a diagnostic tool that helps
            identify and fix common issues in your product listings.
          </p>
          <p>
            Access it via{" "}
            <strong>Listing &gt; My Listing &gt; Listing Errors</strong> and
            view flagged issues like:
          </p>
          <ul>
            <li>Missing or invalid attributes</li>
            <li>Image format or size errors</li>
            <li>Disallowed keywords or content</li>
          </ul>
          <p>
            You can filter by error type and click <strong>“Fix Now”</strong>{" "}
            for direct resolution.{" "}
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What’s the best way to manage large catalogs efficiently?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>For catalogs with hundreds or thousands of products, use:</p>
          <ul>
            <li>
              <strong>Bulk Upload Tools</strong> for listings, pricing, and
              inventory{" "}
            </li>
          </ul>
          <p>Scheduled review of listing health using dashboards</p>
          <p>
            Bulk tools save time, reduce human error, and scale your business
            operations.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What happens if I oversell a product I no longer have in stock?{" "}
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Overselling may lead to:</p>
          <ul>
            <li>Order cancellation penalties</li>
            <li>Negative customer feedback</li>
            <li>
              Possible temporary <strong>account suspension</strong> if repeated
            </li>
          </ul>
          <p>
            To avoid this, enable <strong>low-stock alerts</strong>, integrate
            with inventory management software, or update stock manually before
            accepting large promotions or events.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            How do I deal with listings showing incorrect pricing?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>If you notice unexpected price changes:</p>
          <ul>
            <li>
              Check your <strong>Pricing History</strong> in Seller Center
            </li>
            <li>
              Ensure <strong>no automated tool or bulk upload</strong> was
              responsible
            </li>
            <li>Manually edit or re-upload the correct price</li>
            <li>Submit a ticket if the issue persists after correction</li>
          </ul>
          <p>Always double-check price uploads before bulk applying changes.</p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            Can I offer different prices for the same product in different
            campaigns?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Currently, Sellora supports <strong>unified pricing per SKU</strong>
            . However, you can participate in <strong>Sale Events</strong> and
            apply campaign-based discounts using:
          </p>
          <ul>
            <li>Sale Price fields</li>
            <li>Coupon-based promotions</li>
          </ul>
          <p>
            For marketplace-wide events, join through{" "}
            <strong>Campaign Manager</strong> and opt-in SKUs with
            event-specific pricing.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What is the best format for uploading product images?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Sellora accepts:</p>
          <ul>
            <li>Format: JPE, PNG (preferred)</li>
            <li>Dimensions: Minimum 1600x1600 pixels</li>
            <li>Aspect Ratio: 1:1 or 4:5 recommended</li>
            <li>No watermarks, borders, logos, or promotional overlays</li>
          </ul>
          <p>
            Upload up to <strong>7 images per SKU</strong>, including lifestyle,
            close-up, and packaging shots for better impact.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What is the ideal product title format?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Use a structure like:</p>
          <p>
            <strong>
              Brand + Gender+Material+Product Type + Variant (Size/Color)
            </strong>
          </p>
          <p>For example:</p>
          <p>
            <strong>
              Sellora Home Velvet Cushion Cover – 16x16 Inch – Navy Blue (Pack
              of 2)
            </strong>
          </p>
          <p>
            Avoid all caps, promotional phrases like “Best Price”, and special
            characters.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What’s the difference between a listing error and a listing
            rejection?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <ul>
            <li>
              A listing error refers to a mistake in your input (e.g., missing
              fields, format issues). You can fix it and resubmit.
            </li>
            <li>
              A rejection happens when a listing violates Sellora's policies
              (e.g., prohibited items, fake brand claims) and may require a
              support ticket for appeal.
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