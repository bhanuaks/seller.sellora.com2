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
              <a href="#">Seller Fulfillment Services </a>{" "}
            </li>
            <li>
              <a href="#">Shipping Templates</a>{" "}
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
              <a href="#"> Seller Fulfillment Services </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Shipping Templates
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
  <h2>Shipping Templates</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How to Create a Shipping Template</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      <strong> Shipping Templates</strong> in Sellora allow sellers to
      pre-define shipping rules and apply them to multiple products quickly and
      consistently. Instead of setting shipping methods and rates for each
      product manually, you can <strong> create a template</strong> once and
      apply it across different listings.
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>
      How to Create a Shipping Template
    </h4>
    <ul>
      <li>
        Go to <strong> Settings</strong> then click on the{" "}
        <strong> Shipping Setting.</strong>
      </li>
      <li>
        Click on <strong> Set Your Own Shipping Rate</strong>, then select{" "}
        <strong> Create Shipping Template</strong>
      </li>
      <li>
        Choose a <strong> Shipping Rate Model:</strong>
        <ul>
          <li>
            Based on the total order <strong> weight</strong>, or
          </li>
          <li>
            Based on the total order <strong> price (tiers).</strong>
          </li>
        </ul>
      </li>
      <li>
        Select your preferred <strong> Shipping Methods and Regions:</strong>
        <ul>
          <li>
            <strong>Standard</strong>
          </li>
          <li>
            <strong>Expedited</strong>
          </li>
        </ul>
      </li>
      <li>
        Fill in the required details:
        <ul>
          <li>
            <strong>Transit Time</strong>
          </li>
          <li>
            <strong>Set Rate</strong>
          </li>
        </ul>
      </li>
      <li>
        After completing all the fields, click on the{" "}
        <strong> Save button</strong>.
      </li>
      <li>Your Shipping Template is now created.</li>
    </ul>
  </div>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>What is the benefit of using a shipping template?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          It saves time, ensures consistency, and makes it easy to manage
          shipping settings for multiple products.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I apply different templates to different categories?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes. You can create category-specific templates and assign them as
          needed per product.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Does free shipping help increase sales?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Absolutely. Products with free shipping usually attract more clicks,
          get better conversion rates, and perform better in search results.
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