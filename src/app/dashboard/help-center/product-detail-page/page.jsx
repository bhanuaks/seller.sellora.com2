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
              <a href="#"> Listing Set Up </a>{" "}
            </li>
            <li>
              <a href="#"> Listing content, image</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                &gt; Product detail page: Overview
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
              <a href="#"> Listing content, images </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Product detail page: Overview
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
  <h2>Product detail page: Overview</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How does it work?</li>
    <li>Frequently asked questions</li>
  </ul>
  <div className="section-box">
    <h3>Overview</h3>
    <p>
      In this guide, you’ll learn some best practices to optimize your product
      detail page on <u>Sellora.com</u>{" "}
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4>How does it work?</h4>
    <p>
      Your product’s title, description, key features, images and additional
      attributes help determine how your items appear in search and browse
      results on Sellora.com. The table below lists suggestions for accurately
      filling out the product title, description, key features and imagery for
      your product detail page.
    </p>
  </div>
  <div className="img-detail-pages">
    {" "}
    <img src={`${baseUrl}front/assets/images/detail-pages.png`} alt="" />
  </div>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>How do I update an item’s content?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          You may be able to suggest changes to your item’s content after you’ve
          finished setting up your item. However, because there may be multiple
          sellers providing content for the same item, you may not always be
          able to define which content will be displayed on sellora.com. sellora
          will determine the best available content for items unless it’s
          provided by a brand owner or authorized reseller. Items that can’t be
          updated will appear locked during the updating process.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How does Discoverability help my item’s performance?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Discoverability helps customers find the items they’re looking for.
          They can use the filter on the left–hand navigation or select Shop by
          category on Sellora.com .&nbsp;&nbsp; If the Discoverability field
          isn’t filled out or is filled out with a value not listed in the facet
          or shelving rule, the item is omitted from these results.&nbsp;&nbsp;
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