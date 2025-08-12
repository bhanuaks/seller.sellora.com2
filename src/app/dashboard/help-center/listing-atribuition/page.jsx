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
              <a href="#"> Listing Set Up </a>{" "}
            </li>
            <li>
              <a href="#"> Listing content, image</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Listing attribution &amp; categorization
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
                Listing attribution &amp; categorization
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
  <h2>Listing attribution &amp; categorization</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How does it work?</li>
    <li>Additional guidelines</li>
    <li>Frequently asked questions</li>
  </ul>
  <div className="section-box">
    <h3>Overview</h3>
    <p>
      Categorization and item attribution are integral to determining how your
      items will appear in search and browse results on Sellora.com and other
      search engines, like Google. <br />
      <strong> Listing Attribution: </strong>Add{" "}
      <strong> complete and correct product information</strong> — product
      title, clear description, brand, SKU, price, stock, images, and product
      codes (UPC/EAN). This makes your product show up in the right searches.
      <strong> Categorization:</strong> Put your product in the{" "}
      <strong> right category and subcategory </strong>(example: Home &amp;
      Kitchen &gt; Cookware &gt; Frying Pans). This helps buyers find it when
      they browse by type.
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4>How does it work?</h4>
    <p>
      When setting up a new item on Sellora Marketplace, whether in bulk or
      individually, you need to select the correct product category, product
      type group, and product type, as these determine which item attributes
      you’ll fill in. Choosing the right category is important because it
      affects how your product is displayed, filtered, and found by buyers.
      Listing attribution and categorization on Sellora.com means providing
      clear, complete product details — such as name, description, SKU, price,
      and product codes — and placing each item in the right category structure.
      This ensures your listings are organized correctly, making it easier for
      customers to find, filter, and purchase your products, which leads to
      better visibility and more sales.
    </p>
    <ul>
      <li>
        {" "}
        <strong>Prepare Your Product Info :</strong> Gather all required
        details: name, clear description, high-quality images, brand, SKU,
        price, stock count, and product codes.
      </li>
      <li>
        A <strong>Product Category</strong> is a grouping of items that may
        contain many products (example: animals).&nbsp;
      </li>
      <li>
        A <strong>Product Type Group</strong> is a collection of products that
        share similar properties (example: animal grooming).
      </li>
      <li>
        A <strong>Product Type</strong> is a specified item type with a specific
        set of attributes that define that product (example: animal shampoos).
      </li>
      <li>
        {" "}
        <strong>Add Required Attributes :</strong> Based on your selected
        product type, you’ll see specific fields to fill in (like size,
        material, color, scent, etc.). Fill these in accurately.
      </li>
      <li>
        {" "}
        <strong>Review &amp; Publish :</strong> Double-check that all details
        and categories are correct before you submit the listing.
      </li>
    </ul>
  </div>
  <div className="aditional-guideline">
    <h4>Additional guidelines </h4>
    <p>
      Attributes are features that describe an item–like color, material or
      size–and are required for every item sold on Sellora.com. Without
      attributes, customers will likely have a hard time finding your items on
      Sellora.com. During the item setup process, you'll have the chance to add
      attributes and you can use the same attributes in your product title,
      description and key features. High-quality attributes can also lead to
      better product discoverability and visibility, not only on Sellora.com but
      on other search engines as well. For information on item attribution best
      practices, review Product detail page: Overview.
    </p>
  </div>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>
          After I’ve added new items to my catalog, where can I view the product
          type information?
        </span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          You can view the product type in your Catalog in the Seller Center.
          Select the Columns button and toggle on Product type.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          Why is my item’s product type different from what I chose during
          setup?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Your selected product type may not match the Sellora classified
          product type. The product type assignment is determined by Sellora
          classification.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          Are there specific attributes I should use for different product
          categories?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes. Depending on your product type, there will be specific attributes
          tailored to your product.
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