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
                Add Bulk Catalog Upload
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
                Add Bulk Catalog Upload
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
  <h2>Add Bulk Catalog Upload</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>Upload Bulk Listing by template</li>
    <li>Frequently asked questions</li>
  </ul>
  <div className="section-box">
    <h3>Overview</h3>
    <p>
      The Add Bulk Catalog Upload feature on Sellora.com enables sellers to
      upload and manage a large number of products efficiently through a single
      spreadsheet or bulk file. This is especially useful for sellers with a
      wide inventory, saving time and streamlining the listing process. Using
      this method, sellers can fill in product data like item names, SKUs,
      prices, descriptions, images, and other attributes in a bulk upload
      template provided by Sellora. Once completed, the file can be uploaded
      through the seller dashboard to create multiple listings at once.
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
  <div className="ragister-brand- number-li">
    <h4>Upload Bulk Listing by template</h4>
    <h6>
      You can create a new bulk product listing by template entering all product
      details. Follow the steps below:
    </h6>
    <ol>
      <li>Go to the Seller Dashboard, then click on "Listing."</li>
      <li>
        Click on "Add Catalog," &amp; “ Add a single listing ”then click the
        "Download Templates"&nbsp; to get the Excel file format specific to that
        category.
      </li>
      <li>Fill in Product Details in the Template</li>
      <li>
        Open the Excel file and enter product information like:
        <ul className="list-style">
          <li>Product Name</li>
          <li>Brand</li>
          <li>Category</li>
          <li>SKU</li>
          <li>MRP and Selling Price</li>
          <li>Quantity</li>
          <li>Barcode&nbsp;</li>
          <li>Description &amp; Features</li>
          <li>Image URLs</li>
          <ol>
            <li className="style-none">Upload the Filled Template</li>
            <ul>
              <li>Go back to the "Bulk Upload" section.</li>
              <li>Click on “Choose File”, upload the filled Excel file.</li>
              <li>Then click "Submit".</li>
            </ul>
            <li className="style-none">
              After submission, check the upload status:
            </li>
            <ul style={{ margin: 0 }}>
              <li>Successful uploads will reflect in your product catalog.</li>
            </ul>
          </ol>
        </ul>
      </li>
    </ol>
  </div>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>
          I’ve entered the required information, but my template hasn't been
          downloaded yet. What should I do?
        </span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          It may take time to process your request, depending on the number of
          items and categories you’ve submitted.&nbsp;&nbsp;
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          After I updated my template, some of the information on my listing
          disappeared. What happened?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Make sure you include all the information you want to appear in the
          listing even if you're only making changes to some of the items. For
          example, if you upload new images without including the existing
          images you would like to keep, then all of the information may be
          overridden and you might lose your existing data.&nbsp;&nbsp;
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