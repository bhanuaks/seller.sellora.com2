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
              <a href="#">Catalog Management</a>{" "}
            </li>
            <li>
              <a href="#">Price Set Up</a>{" "}
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
                Price Set Up
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
  <h2>Price Setup</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>What is MSRP?</li>
    <li>What is the Consumer Sale Price?</li>
    <li>What is the Business Sale Price?</li>
    <li>How to Edit MSRP, Consumer Sale Price, and Business Sale Price</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Setting up the correct pricing for your product is essential to stay
      competitive and ensure visibility on Sellora. You must enter the MRP
      (Maximum Retail Price) and Selling Price accurately. The Selling Price
      should always be equal to or less than the MRP. in the sellora mai 3 type
      ki pricing hai MSRP, Consumer Sale Price, Business Sale PriceOn Sellora,
      setting the correct pricing is essential to ensure your products are
      competitive and visible to both retail and business buyers. Sellora
      requires sellers to enter three types of prices for each product: MSRP
      (Manufacturer’s Suggested Retail Price), Consumer Sale Price, and Business
      Sale Price.
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>What is MSRP?</h4>
    <p style={{ margin: "0px !important" }}>
      MSRP stands for Manufacturer’s Suggested Retail Price. It is the price
      that the manufacturer recommends a product should be sold for in retail
      stores or online marketplaces like Sellora.
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>
      What is the Consumer Sale Price?
    </h4>
    <p style={{ margin: "0px !important" }}>
      Consumer Sale Price is the actual price at which a product is sold to
      regular retail customers on Sellora. It is the publicly visible price on
      the product detail page, and what an individual buyer will pay to purchase
      the item.
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>
      What is the Business Sale Price?
    </h4>
    <p style={{ margin: "0px !important" }}>
      Business Sale Price is a special discounted price offered exclusively to
      business buyers on Sellora. This price is designed to encourage bulk
      purchases or repeat orders from B2B (business-to-business) customers.
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>
      To update or correct the pricing of your listed product on Sellora, follow
      the steps below:
      <p />
    </h4>
    <h4 style={{ margin: "0px !important" }}>Step 1. Go to “My Listings”</h4>
    <ul>
      <li>
        From the <strong> Seller Dashboard</strong>, click on the{" "}
        <strong> “Listing”</strong> tab.
      </li>
      <li>
        Select <strong>“My Listings”</strong> to view all your active products
      </li>
    </ul>
    <h4 style={{ margin: "0px !important" }}>Step 2. Select the Product</h4>
    <ul>
      <li>Find the product whose pricing you want to edit.</li>
      <li>
        Click on the <strong> three dots (⋮)</strong> located on the right side
        of the product listing.
      </li>
    </ul>
    <h4 style={{ margin: "0px !important" }}>
      Step 3. Click on “Image / Price / Inventory / Variation”
    </h4>
    <ul>
      <li>
        choose “Image / Price / Inventory / Variation” to open the editable
        fields.
      </li>
    </ul>
    <h4 style={{ margin: "0px !important" }}>
      Step 4. Locate the Price Section
    </h4>
    <p style={{ margin: "0px !important" }}>
      Scroll down to the <strong>Price section</strong> , where you will find
      three fields:
    </p>
    <ul>
      <li>
        <strong>MSRP (Manufacturer’s Suggested Retail Price)</strong>
      </li>
      <li>
        <strong>Consumer Sale Price</strong>
      </li>
      <li>
        <strong>Business Sale Price</strong>
      </li>
    </ul>
    <h4 style={{ margin: "0px !important" }}>Step 5. Edit the Prices</h4>
    <p style={{ margin: "0px !important" }}>Update the values as required:</p>
    <ul>
      <li>
        <strong>MSRP</strong> – Should be the highest value.
      </li>
      <li>
        <strong>Consumer Sale Price</strong> – Must be{" "}
        <strong> equal to or less than the MSRP.</strong>
      </li>
      <li>
        {" "}
        <strong>Business Sale Price</strong> – Typically{" "}
        <strong> lower than the Consumer Sale Price</strong>, and always{" "}
        <strong>less than or equal to MSRP.</strong>{" "}
      </li>
    </ul>
    <h4 style={{ margin: "0px !important" }}>Step 6. Save the Changes</h4>
    <ul>
      <li>
        After updating all price fields, scroll to the bottom and click on the{" "}
        <strong> “Save and Next”</strong> button.
      </li>
      <li>
        Again scroll to the bottom and click on the{" "}
        <strong> “Submit and publish”</strong> button.
      </li>
      <li> Your listing will be updated with the new prices.</li>
    </ul>
  </div>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>
          Where can I edit the MSRP, Consumer Sale Price, and Business Sale
          Price on Sellora?
        </span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          You can edit all three prices by going to the{" "}
          <strong> Seller Dashboard → Listing → My Listings</strong>, clicking
          on the three dots (⋮) next to the product, and selecting{" "}
          <strong> "Image / Price / Inventory / Variation"</strong>. In the
          price section, you can update the MSRP, Consumer Sale Price, and
          Business Sale Price.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I update pricing after the product is already live?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes, you can edit the pricing of any active listing at any time by
          following the steps in the Seller Center.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          How often can I change the pricing of my products on Sellora?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          You can update your product pricing{" "}
          <strong> at any time and as often as needed</strong>. However,
          frequent changes may affect buyer trust, so it's recommended to adjust
          prices strategically based on market trends or stock clearance.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Is it mandatory to offer a Business Sale Price?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          While it's not strictly mandatory, Sellora{" "}
          <strong> strongly recommends </strong> offering a competitive{" "}
          <strong> Business Sale Price</strong> to attract bulk and B2B buyers.
          It increases your product's visibility to business accounts.
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