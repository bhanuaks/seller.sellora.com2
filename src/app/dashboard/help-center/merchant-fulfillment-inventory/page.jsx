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
              <a href="#"> Merchant Fulfillment Inventory</a>{" "}
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
                Merchant Fulfillment Inventory
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
  <h2>Merchant Fulfillment Inventory</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How does it work on Sellora?</li>
    <li>Why Choose Merchant Fulfillment on Sellora?</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Merchant Fulfillment Inventory refers to the stock managed and fulfilled
      directly by the seller instead of Sellora or any third-party logistics
      partner. When sellers choose merchant fulfillment, they are responsible
      for storing, packing, and shipping orders to customers. On Sellora,
      sellers using this method must regularly update stock quantities, manage
      order timelines, and ensure timely dispatch to maintain good performance
      ratings.
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>How does it work on Sellora?</h4>
    <p style={{ margin: "0px !important" }}>
      How does it work on Sellora?In your <strong>Seller Dashboard</strong>,
      under the <strong>nventory</strong>I or Listing →{" "}
      <strong>My Listings </strong> section, you can view and manage the stock
      levels of each product. For merchant-fulfilled products, Sellora does not
      intervene in the storage or delivery process. It is crucial that sellers
      maintain accurate inventory levels to avoid order cancellations and
      penalties. If a product is out of stock, you must update the stock to zero
      manually to temporarily remove it from customer view.
    </p>
    <h4 style={{ margin: "0px !important" }}>Key Features:</h4>
    <ul>
      <li>Full control over inventory and shipping operations.</li>
      <li>Ability to update stock in real-time</li>
      <li>Direct communication with customers for delivery update</li>
      <li>Flexible packaging and branding options</li>
    </ul>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>
      Why Choose Merchant Fulfillment on Sellora?
    </h4>
    <p style={{ margin: "0px !important" }}>
      Merchant fulfillment is ideal for sellers who already have a warehousing
      and delivery setup or want more control over their product packaging and
      shipping experience. It’s also suitable for those offering niche or custom
      products that require special handling.
    </p>
    <h4 style={{ margin: "0px !important" }}>Important Tips:</h4>
    <ul>
      <li>Full control over inventory and shipping operations.</li>
      <li>Keep stock levels updated to avoid overselling.</li>
      <li>Use reliable courier partners for timely delivery.</li>
      <li>
        Track all shipments and mark orders as dispatched to avoid penalties.
      </li>
    </ul>
  </div>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>What is Merchant Fulfillment Inventory on Sellora?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          Merchant Fulfillment Inventory refers to the stock that is stored,
          packed, and shipped by the seller directly, not by Sellora. The seller
          is fully responsible for order processing and delivery to the
          customer.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What happens if a product goes out of stock?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          A: If a product is out of stock, you should update its stock quantity
          to zero to make it unavailable for purchase. Sellora does not allow
          permanent deletion of listings, so setting stock to zero is the way to
          deactivate a product temporarily.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I use my own packaging and courier service?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          A: Yes. With merchant fulfillment, sellers can use their own branded
          packaging and preferred courier services, giving full control over the
          shipping experience.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What are the risks of merchant fulfillment?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          A: If you fail to dispatch on time, deliver late, or have frequent
          stockouts, it may affect your performance metrics on Sellora. This can
          reduce visibility and customer trust.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How do I reactivate a product that went out of stock?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          A: To reactivate a product, simply go to My Listings, find the
          product, and update the stock quantity to a non-zero value. The
          product will be visible to customers again.
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