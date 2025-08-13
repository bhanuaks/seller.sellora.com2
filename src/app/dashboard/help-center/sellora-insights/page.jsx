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
              <a href="#">Taxes &amp; Payments </a>{" "}
            </li>
            <li>
              <a href="#">Sellora Insights</a>{" "}
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
              <a href="#">Taxes &amp; Payments</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Sellora Insights
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
  <h2>Sellora Insights</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>Key Sections of Sellora Insights</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Sellora Insights are powerful tools that provide actionable data to help
      sellers optimize sales, manage inventory efficiently, and better
      understand customer behavior. By leveraging these insights, businesses can
      make informed, data-driven decisions that drive sustainable growth and
      success on Sellora.
    </p>
  </div>
  <h3>Key Sections of Sellora Insights</h3>
  <h3>Sales</h3>
  <p>
    Track your sales performance across different time periods, product
    categories, and regions. Understand what’s selling well and identify areas
    that need improvement.
  </p>
  <h3>Earn More</h3>
  <p>
    Discover opportunities to increase revenue by analyzing high-performing
    listings, pricing trends, and promotional effectiveness. Get recommendations
    to boost sales and improve product visibility.
  </p>
  <h3>Traffic Report</h3>
  <p>
    Monitor how many customers are viewing your products. Gain insight into page
    views, click-through rates (CTR), and traffic sources. Identify listings
    with high traffic but low conversion to improve their performance.
  </p>
  <h3>Customer Segments</h3>
  <p>
    Understand your buyers through demographic and behavioral segmentation.
    Learn about customer preferences, purchase frequency, and interests to
    tailor your marketing and product offerings more effectively.
  </p>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>Where can I access Sellora Insights?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          Go to <strong> Growth</strong> and then click on{" "}
          <strong> Sellora Insights.</strong>
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How can Sellora Insights help me grow my sales?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Insights help you identify your top-performing products, understand
          traffic sources, and discover customer preferences. Using this data,
          you can optimize listings, improve ads, and focus on strategies that
          boost sales.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What does the Traffic Report show?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          The Traffic Report displays data such as product page views, clicks,
          impressions, and click-through rates (CTR). It helps you understand
          which listings are attracting attention and which need improvement.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What are Customer Segments in Insights?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Customer Segments categorize buyers based on behavior, demographics,
          or purchase history. This helps you tailor promotions and product
          offerings to target specific customer groups effectively.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Is there any cost to use Sellora Insights?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          No, Sellora Insights is a free feature available to all active sellers
          on Sellora.
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