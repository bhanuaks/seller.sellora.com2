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
              <a href="#">Advertising &amp; Promotions Overview </a>{" "}
            </li>
            <li>
              <a href="#"> Display Ads</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Sponsored Image Ads
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
              <a href="#">Advertising &amp; Promotions Overview </a>{" "}
            </li>
            <li>
              <a href="#"> Display Ads</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Sponsored Image Ads
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
  <h2>Sponsored Image Ads</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How to Create Sponsored Image Ads</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      <strong>Sponsored Image Ads</strong> on Sellora help your products grab
      attention with high-quality, visually engaging banners that appear across
      strategic placements like category pages, search results, and product
      carousels. <br />
      These image-driven ads are ideal for:
    </p>
    <ul>
      <li>Launching new products</li>
      <li>Promoting seasonal deals</li>
      <li>Boosting visibility in competitive categories</li>
    </ul>
    <p>
      {" "}
      <strong>Note:</strong> Sponsored Image Ads are exclusively available to{" "}
      <strong>brand owners.</strong> Only sellers who have registered their
      brand with Sellora can create and run Sponsored Image Ads.
    </p>
    <p />
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
  <p>
    <strong>How to Create Sponsored Image Ads</strong>
  </p>
  <ul>
    <li>
      Go to the<strong> Advertising &gt; Display Ads.</strong>&nbsp;
    </li>
    <li>
      Click on <strong> “Get Started” </strong>and select{" "}
      <strong> “Sponsored Image Ads.”</strong>&nbsp;
    </li>
    <li>
      Enter Your <strong>Campaign Name.</strong>
    </li>
    <li>
      Click on<strong> “Select Budget Manually”</strong>and enter your{" "}
      <strong> Daily Budget.</strong>
    </li>
    <li>
      Add<strong>Targeting Categories.</strong>
    </li>
    <li>
      Choose your <strong>Creative Type:</strong>
      <ul>
        <li>
          <strong>Auto Creative: </strong> Automatically uses your product’s
          main image as the ad visual — no extra setup needed.
        </li>
        <li>
          <strong>Rich Creative:</strong> Upload a custom image with your
          branding, offers, or festive designs.
        </li>
      </ul>
    </li>
    <li>
      <strong>Ad Image Requirements</strong> <br />
      <ul>
        <li>Image size: 1100 x 576 px or large</li>
        <li>File size: 5MB or smaller</li>
        <li>7 File format: PNG or JPEG</li>
        <li>Content: No text, graphics, or logo added to the image</li>
      </ul>
    </li>
  </ul>
  <div>
    <h3>Frequently Asked Questions</h3>
    <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Where do Sponsored Image Ads appear?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          They appear on homepages, category pages, search results, and
          promotional carousels.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How are charges calculated?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          Based on cost-per-click (CPC) or impression-based (CPM) pricing —
          depending on your campaign setup.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I change the image in Auto Creative?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          No, Auto Creative only uses the main image from your product listing.
          To use a different image, switch to Rich Creative.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I A/B test different images?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          Yes, create multiple ad variations and track performance via the
          Sellora Ad Dashboard.
        </p>
      </div>
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