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
                Listing set up
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
                Listing set up
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
    <h2>Listing Set Up</h2>
  </div>
  <div className="new_content_11">
    <div className="faq-container">
      <div className="accordion-item">
        <div className="accordion-header">
          <span>How do I apply for brand approval on Sellora?</span>
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>
        </div>
        <div className="accordion-content">
          <p>
            To list branded products under your name, you need to apply for{" "}
            <strong>Brand Approval</strong>. Here’s how:
          </p>
          <ul>
            <li>
              Go to <strong>Seller Center</strong> &gt;Click on{" "}
              <strong>Listing</strong>, then select <strong>Add Catalog</strong>
              .
            </li>
            <li>
              Click <strong>Add a Single Listing</strong>.
            </li>
            <li>
              Select the appropriate <strong>product categories</strong>.
            </li>
            <li>
              Enter your <strong>brand name</strong>.
            </li>
            <li>
              Click <strong>Verify Brand</strong>.
            </li>
            <li>
              Once verified, click <strong>Apply Brand</strong>.
            </li>
            <li>
              Upload your{" "}
              <strong>
                trademark certificate or brand authorization letter
              </strong>
            </li>
            <li>Submit a sample product image and packaging if required</li>
          </ul>
          <p>
            {" "}
            Once reviewed and approved, you can list products under your brand
            and access additional features like{" "}
            <strong>brand content, protection, and analytics</strong>.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <span>What if my product already exists on Sellora.com?</span>
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>
        </div>
        <div className="accordion-content">
          <p>If your product is already listed by another seller:</p>
          <ul>
            <li>
              You can match to the existing listing using the{" "}
              <strong>(SIN)</strong> or product Name
            </li>
            <li>
              Go to{" "}
              <strong>Listing &gt; Add Catalog&gt;Add a single listing</strong>{" "}
              and enter product Name
            </li>
            <li>
              If it’s a match, just add your price and stock—no need to
              re-upload content or images{" "}
            </li>
          </ul>
          <p>
            This helps maintain a clean catalog and improves customer
            experience.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <span>What content is required for a good product listing?</span>
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>
        </div>
        <div className="accordion-content">
          <p>For strong visibility and conversions, include:</p>
          <ul>
            <li>
              <strong>Clear product title</strong> (with keywords)
            </li>
            <li>
              <strong>Bullet points</strong> (key features and benefits)
            </li>
            <li>
              <strong>Detailed description</strong>
            </li>
            <li>
              <strong>Images</strong> (minimum 3, max 8)
            </li>
            <li>
              <strong>Pricing and stock</strong>
            </li>
          </ul>
          <p>Make sure your content is original, accurate, and SEO-friendly.</p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <span>What does the product detail page include?</span>
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>
        </div>
        <div className="accordion-content">
          <p>
            Your <strong>Product Detail Page</strong> (PDP) is the page buyers
            see. It includes:
          </p>
          <ul>
            <li>Product title, images, pricing</li>
            <li>Bullet points, long description</li>
            <li>Variants (if any)</li>
            <li>Delivery, return, and seller information</li>
          </ul>
          <p>
            Optimizing this page helps improve customer trust and boosts
            conversions.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What are the image requirements for product listings?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Sellora image guidelines:</p>
          <ul>
            <li>Main image: white background, product-only</li>
            <li>Minimum 1600x1600 pixels</li>
            <li>No watermarks or promotional text</li>
            <li>Upload lifestyle or usage images (optional but recommended)</li>
          </ul>
          <p>A good image set builds trust and increases click-through rate.</p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What is a Variant Set and when should I use it?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            A <strong>Variant Set</strong> groups similar products (e.g., a
            shirt in different sizes or colors) under one listing. This makes it
            easier for buyers to choose options. You can set up variant sets
            during manual or bulk upload by linking products with shared Parent
            SKU and assigning variant attributes like size, color, or style.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What are product variations, and how do I manage them?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            <strong>Product variations</strong> allow you to display multiple
            options on one product page. For example:
          </p>
          <ul>
            <li>One t-shirt in 4 colors</li>
            <li>One shoe model in 5 sizes</li>
          </ul>
          <p>
            {" "}
            You can add variations in the Seller Center by selecting{" "}
            <strong>“Add Variant”</strong> when creating or editing a listing.
            Keep all variants connected under the same product group.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What should I do if there’s a problem with my product variants?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>If variants are not displaying correctly:</p>
          <ul>
            <li>
              Check that all <strong>child products</strong> have the same{" "}
              <strong>Parent SKU</strong>
            </li>
            <li>
              Make sure only one variant attribute (e.g., Size or Color) is used
              per group
            </li>
            <li>
              Visit Fix Variant Issues under the Catalog tab to auto-correct
              mismatches
            </li>
          </ul>
          <p>
            You can also contact Catalog Support through the Help Center if
            needed.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What should I do if a listing is flagged or rejected?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>If your listing is flagged or rejected:</p>
          <ul>
            <li>
              <strong>Visit Listing &gt; My Listing &gt; Listing Errors</strong>
            </li>
            <li>
              View the rejection reason (e.g., missing attributes, image
              violation, incorrect pricing)
            </li>
            <li>Make the necessary edits and resubmit</li>
          </ul>
          <p>
            If you believe it’s a mistake, raise a support ticket through{" "}
            <strong>Help Center &gt; Listing Support.</strong>
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>Can I add keywords to improve my listing SEO?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Yes. During listing, include relevant{" "}
            <strong>search keywords</strong> in the title, bullet points, and
            description. Sellora’s algorithm uses this metadata to rank your
            product in search results.
          </p>
          <p>
            Avoid keyword stuffing—use natural, readable phrases that match what
            your customer would search.
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