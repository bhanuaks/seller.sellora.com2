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
                Add Single Manual Listing
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
                Add Single Manual Listing
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
  <h2>Add Single Manual Listing</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How to Add Single Listing</li>
    <li>Frequently asked questions</li>
  </ul>
  <div className="section-box">
    <h3>Overview</h3>
    <p>
      The Add Single Manual Listing feature on Sellora.com allows sellers to
      manually list a single product in the catalog, offering full control over
      each product detail. This method is ideal for sellers who want to list
      products individually, especially for unique, limited, or custom items.
      With this feature, sellers can input product information like title,
      description, images, pricing, inventory, and other attributes one by one.
      This is the most straightforward way to get started with selling on
      Sellora, especially if you’re managing a small inventory.
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
    <h4>How to Add a Single Listing</h4>
    <h6>
      You can create a new single product listing by manually entering all
      product details. Follow the steps below:
    </h6>
    <ol>
      <li>Go to the Seller Dashboard, then click on "Listing."</li>
      <li>
        Click on "Add Catalog," &amp; “ Add a single listing ” then click the
        "Create New Catalog" button to start the product listing process.
      </li>
      <li>Select the most relevant product category.</li>
      <li>
        Enter your Brand Name, click on "Verify Brand", and then click on
        "Create New Listing."
      </li>
      <li>
        Enter the Product Details, including:
        <ul className="list-style">
          <li>Product Name</li>
          <li>Product Description</li>
          <li>MRP and Selling Price</li>
          <li>SKU&nbsp;</li>
          <li>Available Quantity</li>
          <li>Key Features / Bullet Points</li>
          <li>Barcode (EAN/UPC/ISBN) – if available</li>
        </ul>
      </li>
      <li>
        Add high-quality product images that meet Sellora's image guidelines
        (white background, 1600x1600 px resolution, etc.).
      </li>
      <li>
        Define package dimensions (length, width, height), weight, and shipping
        method.
      </li>
      <li>
        Ensure all required fields are completed accurately and without errors.
      </li>
      <li>Click "Submit and Publish" to make your listing live on Sellora.</li>
    </ol>
  </div>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>
          What information is required to create a Single listing?
        </span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          You’ll need product name, brand, category, price, SKU, quantity,
          description, Key features, images, and barcode (if available)
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          Can I save my Single listing as a draft and complete it later?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes, you can save your listing as a draft and return to complete it
          before submitting.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What kind of images should I upload for a manual listing?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Upload clear, high-resolution images on a white background that meet
          Sellora’s image guidelines.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I manually list product variations like size and color?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes, you can add product variations such as size, color, or material
          using the variant options during manual listing.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I delete or unpublish a Single listing later?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes, you can unpublish or delete your listing from the catalog at any
          time.
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