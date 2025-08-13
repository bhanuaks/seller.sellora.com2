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
              <a href="#">Help &gt;</a>{" "}
            </li>
            <li>
              <a href="#"> Listing Set Up &gt;</a>{" "}
            </li>
            <li>
              <a href="#"> Add Catalog Overview &gt; </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Create the listing if it already exists on sellora.com
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
              <a href="#"> Listing Set Up </a>{" "}
            </li>
            <li>
              <a href="#">Add Catalog Overview </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Create the listing if it already exists on sellora.com
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
  <h2>Create the listing if it already exists on sellora.com</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How to Create a Listing for an Existing Product on Sellora.com</li>
    <li>Frequently asked questions</li>
  </ul>
  <div className="section-box">
    <h3>Overview</h3>
    <p>
      If the product already exists in the Sellora.com catalog, sellers can
      create their own listing by referencing the existing product information.
      This helps maintain consistency across listings while ensuring a faster
      and easier onboarding process.By creating a listing from an existing
      product, sellers benefit from pre-filled details such as product title,
      description, images, and specifications. You only need to add your
      specific offer details like pricing, quantity, shipping options, and
      condition (new, refurbished, etc.).This approach reduces duplication,
      improves the customer shopping experience, and supports better catalog
      integrity on <strong>Sellora.com.</strong>{" "}
    </p>
  </div>
  <div className="video-container">
    <iframe
      src="https://www.youtube.com/embed/hYiOM4Nwlnw?si=_XNzZlgZVKFHdcmR"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen=""
    />
  </div>
  <div className="ragister-brand-">
    <h4>How to Create a Listing for an Existing Product on Sellora.com</h4>
    <p>
      Follow these simple steps to create a listing when the product already
      exists in the Sellora catalog:
    </p>
    <ul>
      <li>
        Click on <span><strong>"Listing"</strong></span>
      </li>
      <li>
        Choose the <span><strong>"Add Catalog"</strong></span> feature to search for an existing
        product.
      </li>
      <li>
        Enter the product name, brand, in the search bar and click on the{" "}
        <span><strong>search icon.</strong></span>
      </li>
      <li>
        Browse the search results and select the correct product from the
        catalog.
      </li>
      <li>
        Enter your SKU Id, pricing, available quantity, condition (e.g., New),
        and shipping information.
      </li>
      <li>
        Once all details are filled, click on "List" to publish your offer.
      </li>
    </ul>
  </div>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>
          Can I edit the product details if I create a listing from an existing
          product?
        </span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          No, the core product information (title, description, images) is
          shared across all listings. You can only update your offer-specific
          details.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          What should I do if the product I want to list already exists but has
          incorrect information?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          You can report incorrect content to the Sellora support team through
          the "Report a Product Issue" option.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          Will my listing be merged with other sellers offering the same
          product?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes, all offers for the same product are grouped together to help
          customers compare options easily.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What happens if I accidentally create a duplicate listing?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Duplicate listings may be flagged and suppressed. Always search the
          catalog thoroughly before listing.
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