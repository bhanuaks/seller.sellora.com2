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
              <a href="#">Help</a>{" "}
            </li>
            <li>
              <a href="#">Listing Set Up </a>{" "}
            </li>
            <li>
              <a href="#">Variant Set Guide</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Full Variant Group Guide
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
              <a href="#">Help</a>{" "}
            </li>
            <li>
              <a href="#"> Listing Set Up</a>{" "}
            </li>
            <li>
              <a href="#"> Variant Set Guide</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Full Variant Group Guide
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
  <h2>&nbsp;Full Variant Group Guide</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>Common scenarios</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Once you’ve created a variant group, you can manage it in several ways.
      You can edit the group, add or remove items, add new variant attributes
      and combine or separate groups. In this guide, you’ll learn how to manage
      a variant group in the Seller Center.
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
    <h4>How to create Product Variations</h4>
    <p>Sellers can create product variations in two ways:</p>
    <h6>Benefits for Registered Brand Owners</h6>
    <ol>
      <li>Through a new single manual listing</li>
      <li>Using the new bulk Excel template upload</li>
    </ol>
    <ul>
      <li>
        <strong>
          Create Product Variations Through a new single manual listing
        </strong>
      </li>
      <li>
        Go to your listing and click on <strong>Add Catalog.</strong>
      </li>
      <li>
        Click on <strong>Add a Single Listing,</strong> then select{" "}
        <strong>Create a New Catalog</strong>{" "}
      </li>
      <li>
        Select the <strong>Product Category,</strong> then click on{" "}
        <strong> Select Brand.</strong>
      </li>
      <li>
        Enter your brand name and click on <strong>Verify Brand.</strong>{" "}
      </li>
      <li>
        Click on <strong> Create New Listing</strong> and fill in the{" "}
        <strong> Product Information.</strong>
      </li>
      <li>
        After entering the product details, click{" "}
        <strong> Save and Next.</strong>
      </li>
      <li>
        Under the <strong> Variation Option,</strong> select{" "}
        <strong>Yes.</strong>{" "}
      </li>
      <li>
        Choose your <strong>Variation Type </strong> (e.g., Color, Size, etc.).
      </li>
      <li>
        Enter the <strong> Variation Name</strong> (e.g., Red, Blue, Small,
        Large).
      </li>
      <li>
        Click on <strong>Save Variation</strong> to add it manually.
      </li>
    </ul>
  </div>
  <div className="representive mt-5">
    <p>Your product variation will now be successfully added to the listing.</p>
    <ul>
      <li>
        <strong>
          create Product Variations Using the bulk Excel template upload
        </strong>
      </li>
      <li>
        Go to your Seller Dashboard and click on <strong>Add Catalog </strong> →
        then select <strong> Bulk Catalog Upload.</strong>
      </li>
      <li>
        Click on <strong>Download Templates</strong> Download Templates and
        download the Excel sheet for your product category.
      </li>
      <li>Fill in all the required product details in the Excel file</li>
      <li>
        Set the <strong>"Create Variation" </strong> option to{" "}
        <strong>Yes.</strong>{" "}
      </li>
      <li>
        Choose the <strong>Variation Type</strong> (e.g., Color, Size, etc.).
      </li>
      <li>
        Assign <strong> Group ID:</strong>
        <ul>
          <li>
            This is a unique identifier used to link multiple product variations
            under one parent product or variant set (e.g., Group A or Group 1).
          </li>
          <li>
            It tells the system that all these products (such as T-shirts in
            different sizes or colors) belong to the same variation group.
          </li>
        </ul>
      </li>
      <li>
        Paste the <strong>variation image link</strong> and complete all other
        required fields.
      </li>
      <li>
        Upload and <strong>submit the completed Excel file.</strong>{" "}
      </li>
      <li>
        After processing, your variation listings will go live on Sellora.com.
      </li>
    </ul>
  </div>
  <div className="representive mt-5">
    <p>Common Scenarios&nbsp;</p>
    <p>
      <strong>
        1. Add items in a variant group in Manually in Existing Listing.&nbsp;
      </strong>
    </p>
    <ul>
      <li>
        Go to the <strong> Seller Dashboard,</strong> then click on{" "}
        <strong> Listing → My Listings.</strong>
      </li>
      <li>
        Find the product you want to update and click on the{" "}
        <strong> three dots</strong> on the right side of the listing.
      </li>
      <li>
        Click on <strong>Image/Price/Inventory/Variation.</strong>{" "}
      </li>
      <li>
        Go to the <strong> Variation</strong> section and select{" "}
        <strong> Yes.</strong>
      </li>
      <li>
        Choose the <strong> Variation Type</strong> (e.g., Color, Size, etc.),
        then fill in the <strong> Variation Attributes.</strong>{" "}
      </li>
      <li>
        Click on <strong>Add Variation</strong> to save it
      </li>
    </ul>
    <div className="images d-flex justify-content-center">
      <img src={`${baseUrl}front/assets/images/add-items.png`} alt="" />
    </div>
    <p>
      <strong>
        2. Add items in a variant group through the Bulk Template sheet in
        Exiting Listing.&nbsp;
      </strong>
    </p>
    <ul>
      <li>
        Go to your Seller Dashboard and click on <strong> Add Catalog →</strong>{" "}
        Add Catalog → then select <strong> Bulk Catalog Upload.</strong>
      </li>
      <li>
        Click on <strong> Download Templates</strong> and download the Excel
        sheet for your product category.
      </li>
      <li>Fill in all the SKU ID &amp; Product ID in the Excel file.</li>
      <li>
        Set the <strong> "Create Variation" </strong>option to{" "}
        <strong>Yes.</strong>{" "}
      </li>
      <li>
        Choose the <strong> Variation Type</strong> (e.g., Color, Size, etc.).
      </li>
      <li>
        Assign a <strong> Group ID:</strong>
        <ul>
          <li>
            This is a unique identifier used to link multiple product variations
            under one parent product or variant set.
          </li>
          <li>
            It helps the system understand that all these products (like
            T-shirts of different sizes/colors) belong to the same group.
          </li>
        </ul>
      </li>
      <li>
        Paste the variation image link and complete all other required fields.
      </li>
      <li>
        Upload and <strong> submit the completed Excel file.</strong>
      </li>
      <li>
        After processing, your variation listings will go live on Sellora.com.
      </li>
    </ul>
  </div>
  <h2>Frequently asked questions</h2>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I Delete a Variant Group on Sellora?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          No, Sellora currently does not allow sellers to delete a variant group
          once it has been created and published. Can I Change SKU ID, Product
          ID, or Brand Name in a Listing?
          <br />
          No. Once a listing is approved and live, certain attributes cannot be
          changed, including:
        </p>
        <ul>
          <li>Brand Name</li>
          <li>Product ID</li>
          <li>SKU ID</li>
        </ul>
        <p>
          To update these attributes, you will need to create a new listing with
          the correct information.
        </p>
        <p />
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          What happens when some of my variant group items match existing items
          in a variant group created by Sellora?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          If you have 10 items varying in color and Sellora is selling five of
          those items in its own variant group, Sellora may merge the two groups
          to display on Sellora.com as a single group.&nbsp;
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I copy items on a template?  </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes. You can continue using the item setup template to create new
          items. If you want the new item to be a part of the variant group,
          make sure that the appropriate variant group ID and variant attributes
          are added to the file.  &nbsp;
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          Can I copy from an existing item that isn’t in a variant group yet?
             
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          No. Only the primary item in a variant group can be copied.  &nbsp;
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Why can’t I submit my item?  </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Resolve all red-highlighted errors. You can also select missing fields
          to display columns that require attention.&nbsp;
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