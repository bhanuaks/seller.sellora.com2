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
              <a href="#"> Merchant Fulfillment Settings</a>{" "}
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
                {" "}
                Merchant Fulfillment Settings
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
  <h2>Merchant Fulfillment Settings</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>Two Types of Shipping Settings – Sellora</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Merchant Fulfillment on Sellora allows sellers to handle their own order
      processing, packaging, shipping, and delivery directly, instead of using
      Sellora’s in-house fulfillment services
      <br />
      Shipping settings on Sellora allow you to control
      <strong>how much your customers pay for shipping</strong>, how fast you
      deliver, and where you ship. You can choose between offering{" "}
      <strong> Free Shipping</strong>or setting your{" "}
      <strong> own shipping rates</strong> based on your business mode
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>
      Two Types of Shipping Settings – Sellora
    </h4>
    <h4 style={{ margin: "0px !important" }}>
      1. Set Free Shipping on All Orders
    </h4>
    <p style={{ margin: "0px !important" }}>
      <strong> Set Free Shipping on All Orders"</strong> is a shipping option on{" "}
      <strong>Sellora</strong> that allows sellers to offer{" "}
      <strong>free delivery</strong> to customers for all products, regardless
      of the order value, product type, or delivery location.
      <br />
      By enabling this setting:
    </p>
    <ul>
      <li>Customers won’t be charged any shipping fees at checkout.</li>
      <li>It can increase your product’s visibility and boost conversions.</li>
      <li>
        The shipping cost is covered by you (the seller), which can be adjusted
        within your product pricing.
      </li>
    </ul>
    <p style={{ margin: "0px !important" }}>
      Offering free shipping builds trust, attracts more buyers, and helps
      improve your chances of winning the Buy Box on Sellora.
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>2. Set Your Own Shipping Rate</h4>
    <p style={{ margin: "0px !important" }}>
      {" "}
      <strong>Set Your Own Shipping Rate"</strong> is a flexible shipping option
      on <strong>Sellora</strong> that allows sellers to define their own
      shipping charges based on their preferences.
      <br />
      By choosing this option, you can:
    </p>
    <ul>
      <li>
        Set different shipping fees based on{" "}
        <strong> product, order value, weight, or region.</strong>
      </li>
      <li>
        Offer <strong> free shipping</strong> on select products while charging
        for others.
      </li>
      <li>
        Adjust shipping costs to cover logistics, packaging, or courier fees.
      </li>
    </ul>
    <p style={{ margin: "0px !important" }}>
      This option gives you full control over your shipping strategy, helping
      you manage margins while catering to customer expectations.
    </p>
  </div>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>
          Can I offer free shipping only above a certain order value?
        </span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          Yes. Under custom shipping settings, you can offer free shipping for
          orders above a threshold (e.g., Free shipping on orders over ₹999).
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Why should I offer free shipping?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>Free shipping increases:</p>
        <ul>
          <li>Conversion rate</li>
          <li>Customer satisfaction</li>
          <li>Chances of winning the Buy Box</li>
          It also gives you an edge over competitors with high shipping charges.
        </ul>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          Can I charge different shipping rates for different regions?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes. Sellora allows region-based shipping rates. For example, you can
          charge ₹30 for metro cities and ₹70 for non-metro zones.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I change my shipping setting later?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes. You can switch between free and custom shipping at any time in
          your Fulfillment Settings.
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