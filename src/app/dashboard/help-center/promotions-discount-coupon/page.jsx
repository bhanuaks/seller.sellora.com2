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
              <a href="#">Advertising &amp; Promotions Overview</a>{" "}
            </li>
            <li>
              <a href="#">Promotions Overview</a>{" "}
            </li>
            <li>
              <a href="#">Discount Coupon</a>{" "}
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
              <a href="#"> Promotions Overview</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Discount Coupon
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
  <h2>Discount Coupon</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>Video</li>
    <li>How do I create a discount coupon on Sellora?</li>
    <li>Frequently Asked Questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Discount Coupons allow you to offer direct savings to customers, helping
      increase product visibility, improve conversions, and boost sales. These
      coupons appear on your product listings and can be applied at checkout.
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
  <p>
    <strong>How do I create a discount coupon on Sellora?</strong> <br />
    <strong>To create a discount coupon on Sellora:</strong>
  </p>
  <ol>
    <li>
      Go to the<strong> “Growth”</strong>&nbsp;tab on your dashboard.
    </li>
    <li>
      Click on <strong>“Sellora Promotions”</strong>from the menu.
    </li>
    <li>
      Select the <strong> “Discount Coupon” </strong> section.
    </li>
    <li>
      Click<strong> “ %Off Coupon”</strong>and{" "}
      <strong> Select product.&nbsp;</strong>
    </li>
    <li>
      Click <strong> “Add Product to Sale”</strong> to activate your coupon.
    </li>
  </ol>
  <p />
  <p>
    {" "}
    <strong>Where Customers See Coupons:</strong>
  </p>
  <ul>
    <li>Product detail pages</li>
    <li>Checkout page</li>
    <li>During promotional events</li>
    <li>On Deal or Offers section (if applicable)</li>
  </ul>
  <p />
  <p>
    {" "}
    <strong>Important Notes:</strong>
  </p>
  <ul>
    <li>Coupons can be paused or edited before the start date.</li>
    <li>
      Discounts are applied only if the customer meets the eligibility criteria.
    </li>
    <li>
      Coupon value is borne by the seller and will be reflected in the order
      summary.
    </li>
  </ul>
  <p />
  <div>
    <h3>Frequently Asked Questions</h3>
    <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          What is the minimum discount required for creating a discount coupon
          on Sellora?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          The minimum discount you must set when creating a discount coupon on
          Sellora is 5%. This aligns with Sellora’s policy that requires any
          coupon to offer at least a 5% reduction off the current product Sales
          price
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What is a Discount Coupon?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          A Discount Coupon is a promotional tool that offers a fixed or
          percentage-based discount to customers at checkout.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I choose which products to apply the coupon to?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          Yes. During creation, you can select one or multiple SKUs the coupon
          should apply to.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I run multiple coupons at once?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          Yes, but only one coupon can apply per product at a time. You can
          create different coupons for different SKUs.
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