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
              <a href="#">Catalog Management</a>{" "}
            </li>
            <li>
              <a href="#"> Listing Error Troubleshooter</a>{" "}
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
              <a href="#"> Catalog Management</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Listing Error Troubleshooter
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
  <div className="featured_10-7">
    <h2>Listing Error Troubleshooter</h2>
  </div>
  {/* ==============getting-started-section=open================ */}
  <div className="Overview mt-5">
    <div className="cards_10-">
      <div className="card_10 mb-5">
        <span className="tags ">Overview</span>
        <p>
          If your item has been unpublished from Sellora.com for not meeting
          Marketplace standards, you can use the Unpublished Items dashboard in
          Seller Center or generate an Item Report to check which items have
          been impacted. This guide will help you troubleshoot every unpublished
          reason you may encounter so you can make an update and get your
          listing republished.
        </p>
      </div>
    </div>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>Listing issues&nbsp;</h4>
    <p style={{ margin: "0px !important" }}>
      All Listing Issues can be resolved from the errors dashboard.&nbsp;
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>
      Error Message: Primary image missing
    </h4>
    <p style={{ margin: "0px !important" }}>
      Update the item with a new Primary Image. Since there may be multiple
      sellers providing content for the same item, you may not always be able to
      define which content will be displayed on Walmart.com. Walmart will
      determine the best available content for items unless it’s provided by a
      brand owner or authorized reseller. Items that can't be updated will
      appear locked during the updating process. If you’re having trouble,
      contact support in the Seller <u> Center</u>.
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>
      Error Message: Price missing&nbsp;
    </h4>
    <p style={{ margin: "0px !important" }}>What should I do?</p>
    <p style={{ margin: "0px !important" }}>Update your List Price.</p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>
      Error Message: Egregious shipping cost
    </h4>
    <p style={{ margin: "0px !important" }}>What should I do?</p>
    <p style={{ margin: "0px !important" }}>
      Update the shipping fee listed in your<u> Shipping Template</u> to be more
      competitive with market conditions. Your offer is measured by shipping
      price relative to item price. When the shipping fee for an unpublished
      offer falls back within an acceptable range, Sellora will automatically
      republish the offer, which typically takes up to 48 hours. For more
      information, review <u>Pricing rules.</u>
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>
      Error Message: Regulatory compliance&nbsp;&nbsp;
    </h4>
    <p style={{ margin: "0px !important" }}>What should I do?</p>
    <p style={{ margin: "0px !important" }}>
      Review the <u> Prohibited Products Policy</u>. If you believe your item
      was unpublished incorrectly, you can appeal the decision.
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>
      Error Message: Intellectual property&nbsp;&nbsp;
    </h4>
    <p style={{ margin: "0px !important" }}>What should I do?</p>
    <p style={{ margin: "0px !important" }}>
      If you believe your item was an error or unpublished incorrectly, you can
      appeal the decision. If you’re a brand owner, consider{" "}
      <u> registering your brand</u> on sellora Marketplace.&nbsp;
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>
      Error Message: Offensive product&nbsp;&nbsp;&nbsp;
    </h4>
    <p style={{ margin: "0px !important" }}>What should I do?</p>
    <p style={{ margin: "0px !important" }}>
      Review the <u>Prohibited Products Policy</u>. If you believe your item was
      unpublished incorrectly, you can appeal the decision.&nbsp;
    </p>
  </div>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>What is the Listing Error Troubleshooter on Sellora?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          The Listing Error Troubleshooter is a feature in the Sellora Seller
          Center that helps you identify and fix problems in your product
          listings. It shows you specific errors and suggests solutions so your
          products can be successfully published on the marketplace.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Why is my image not uploading?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Common reasons include incorrect format or low resolution. Ensure your
          image is in JPG or PNG format and at least
          <strong> 1600x1600 pixels</strong> in size with a clear, white
          background.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What does “Invalid Variant” error mean?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          This error appears when your variation values (like color, size) are
          incorrect or not formatted properly. Go to the three-dot menu →{" "}
          <strong>Image/Price/Inventory/Variation</strong> , and review the
          variation setup.
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