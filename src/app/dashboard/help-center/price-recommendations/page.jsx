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
              <a href="#">Growth Opportunities</a>{" "}
            </li>
            <li>
              <a href="#"> Price Recommendations</a>{" "}
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
              <a href="#">Growth Opportunities </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Price Recommendations
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
  <h2>Price Recommendation</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>Key Features</li>
    <li>How to Use</li>
    <li>Frequently Asked Questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      {" "}
      <strong>
        {" "}
        High traffic but low conversions? Optimize content and pricing to boost
        sales!
      </strong>{" "}
      <br />
      Sellora’s <strong> Price Recommendation </strong>tool helps you identify
      pricing opportunities to convert traffic into actual sales. By analyzing
      real-time market data and competitor trends, you get smart pricing
      suggestions to stay competitive and improve your conversion rate.
    </p>
  </div>
  <p>
    <strong>Key Features&nbsp;</strong>
  </p>
  <ul>
    <li>
      <strong>Traffic-Conversion Gap Alerts</strong>&nbsp;
      <p>
        {" "}
        Identify listings with high page views but low sales, and receive
        pricing suggestions to improve performance.
      </p>
    </li>
    <li>
      <strong>Smart Price Range</strong>&nbsp;
      <p>
        {" "}
        View recommended price bands based on product demand, competitor
        pricing, and customer interest.
      </p>
    </li>
    <li>
      <strong>Instant Action</strong>&nbsp;
      <p> Apply or adjust recommended prices directly from the dashboard.</p>
    </li>
    <li>
      <strong>Margin Control</strong>&nbsp;
      <p>
        {" "}
        Set your minimum and maximum pricing limits to protect your
        profitability.
      </p>
    </li>
  </ul>
  <p />
  <p>
    <strong>How to Use</strong>
  </p>
  <ul>
    <li>
      Go to <strong> Growth &gt; Price Recommendation</strong>.
    </li>
    <li>
      Review products with pricing suggestions based on traffic and conversion
      performance.
    </li>
    <li>
      Click <strong> Apply </strong>next to the suggested price.
    </li>
    <li>
      A popup message will appear: <br /> “Are you sure you want to apply the
      impact price? After applying it, the sale price will be replaced by the
      impact price. Please confirm.”
    </li>
    <li>
      Click <strong> Confirm</strong>.
    </li>
    <li>
      A success message will appear: <br /> “Impact price applied successfully!”
    </li>
  </ul>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>What are Price Recommendations?&nbsp;</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          Price Recommendations suggest the ideal price range for your product
          based on live data such as market trends, competitor pricing, and
          demand.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How often are price recommendations updated?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          They are updated regularly, based on changes in market pricing, sales
          trends, and customer activity.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          Will updating my price as per the recommendation increase sales?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes. Competitive pricing often improves your chances of winning the
          Buy Box and increases your conversion rate.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Do I have to follow all price recommendations?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          No. These are suggestions based on market insights. You can review,
          edit, or skip them as needed.
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