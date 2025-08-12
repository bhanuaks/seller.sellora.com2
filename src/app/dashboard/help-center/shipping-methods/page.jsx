'use client'
import React, { useEffect, useState } from 'react'
import LeftSideBar from '../leftSideBar';
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
              <a href="#">Shipping Methods</a>{" "}
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
                Shipping Methods
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
  <h2>Shipping Methods</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How to Select Shipping Methods</li>
    <li>How to Set Free Shipping on All Orders</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Shipping methods define <strong> how your products are delivered</strong>{" "}
      to customers on Sellora. As a seller, you can configure different{" "}
      <strong>types of shipping services</strong> , including speed, cost, and
      serviceable areas. Choosing the right shipping methods helps improve
      customer satisfaction and increase sales.
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>How to Select Shipping Methods</h4>
    <ul>
      <li>
        Go to <strong> Settings</strong> then click on the{" "}
        <strong> Shipping Setting.</strong>
      </li>
      <li>
        Under the Shipping Setting section, you will see available two options
        <ul>
          <li>Set free shipping on all orders</li>
          <li>Set your own Shipping Rate</li>
        </ul>
      </li>
      <li>Enable the methods you want to offer by checking the box.</li>
      <li>Click Save to apply the changes.</li>
    </ul>
    <h4 style={{ margin: "0px !important" }}>
      How to Set Free Shipping on All Orders
    </h4>
    <ul>
      <li>
        Go to <strong> Settings</strong> then click on the{" "}
        <strong> Shipping Setting.</strong>
      </li>
      <li>
        Under the <strong> Shipping Charges</strong> section, select{" "}
        <strong> Set Free Shipping on All Orders.</strong>
      </li>
      <li>
        Click on <strong> Set Free Shipping</strong> to save your shipping
        method.
      </li>
    </ul>
  </div>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>
          Will customers see “Free Shipping” on my product listing?
        </span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          Yes, if this setting is enabled, “Free Shipping” will appear on your
          product detail page and during checkout.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I remove free shipping later?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes, you can go back to <strong> Shipping Settings</strong> anytime
          and switch to <strong> custom shipping rates</strong>.
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