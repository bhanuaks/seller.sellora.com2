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
              <a href="#"> Listing optimization </a>{" "}
            </li>
            <li>
              <a href="#">Manage Price &amp; Business price</a>{" "}
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
              <a href="#">Listing optimization</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Manage Price &amp; Business price
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
  <h2>Manage Price &amp; Business price</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>What is MSRP, Selling Price &amp; Business Price?</li>
    <li>How to Set or Edit Prices</li>
    <li>Best Practices for Pricing</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Correct pricing helps attract more customers, remain competitive, and win
      the <strong>Buy Box</strong> . On Sellora, you can set the{" "}
      <strong>
        {" "}
        MSRP (Manufacturer’s Suggested Retail Price), Consumer Selling Price
      </strong>
      , and <strong> Business Price </strong>
      (for B2B buyers). Each must be set accurately to reflect your pricing
      strategy.
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>
      What is MSRP, Selling Price &amp; Business Price?
    </h4>
    <ul style={{ margin: "0px !important" }}>
      <li>
        <h4 style={{ margin: "0px !important" }}>
          MSRP (Manufacturer’s Suggested Retail Price):
        </h4>
      </li>
    </ul>
    <p style={{ margin: "0px !important" }}>
      The highest price that can be charged for a product. This must always be
      the highest value in your pricing section.
    </p>
    <ul style={{ margin: "0px !important" }}>
      <li>
        <h4 style={{ margin: "0px !important" }}>
          Selling Price (Consumer Price):
        </h4>
      </li>
    </ul>
    <p style={{ margin: "0px !important" }}>
      The price shown to all regular customers on Sellora.com. This should be
      equal to or less than the MSRP.
    </p>
    <ul style={{ margin: "0px !important" }}>
      <li>
        <h4 style={{ margin: "0px !important" }}>Business Price:</h4>
      </li>
    </ul>
    <p style={{ margin: "0px !important" }}>
      A discounted price visible only to business buyers (like retailers or
      resellers) who have GST-registered accounts. This price helps increase B2B
      sales volume.
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>How to Set or Edit Prices</h4>
    <p style={{ margin: "0px !important" }}>
      Edit Prices on an Existing Listing:
    </p>
    <ul>
      <li>
        {" "}
        <strong>Title:</strong>Go to{" "}
        <strong>Seller Dashboard → Listing → My Listings.</strong>{" "}
      </li>
      <li>
        Find the product and click on the <strong>three-dot</strong> menu on the
        right.
      </li>
      <li>
        Select <strong> Edit Catalogue.</strong>
      </li>
      <li>
        Go to the <strong> Image/Price/Inventory/Variation.</strong>
      </li>
      <li>
        Scroll Down and Enter:
        <ul style={{ margin: "0px !important" }}>
          <li>
            <strong>MSRP</strong>
          </li>
          <li>
            <strong>Selling Price</strong>
          </li>
          <li>
            <strong>Business Price (optional but recommended)</strong>
          </li>
        </ul>
      </li>
      <li>
        Click <strong> Submit and publish.</strong>
      </li>
    </ul>
    <div className="notes_11">
      <h3>Note:</h3>
      <p> Ensure Selling Price ≤ MRP. Business Price ≤ Selling Price.</p>
    </div>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>
      &nbsp;Best Practices for Pricing
    </h4>
    <ul>
      <li>
        Keep <strong> competitive pricing </strong>to improve visibility.
      </li>
      <li>
        Use <strong> business prices</strong> strategically to attract bulk
        buyers.
      </li>
      <li>Adjust prices based on market trends, seasons, and demand.</li>
      <li>
        Monitor your <strong> Buy Box performance</strong>—frequent price
        optimization helps win it.
      </li>
    </ul>
  </div>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>What if I don't set a Business Price?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          Your product will still be visible to B2B buyers, but you may miss out
          on high-volume orders.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I offer different prices for different quantities?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Currently, Sellora allows setting one Business Price, but you can
          update it anytime based on volume or deals.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What happens if I enter a Selling Price higher than MRP?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          The listing will be rejected. Selling Price must always be equal to or
          less than MRP.
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