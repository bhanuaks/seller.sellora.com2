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
              <a href="#">Advertising Recommendation</a>{" "}
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
                Advertising Recommendation
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
  <h2>Advertising Recommendation</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>Key Features</li>
    <li>How to Access</li>
    <li>Benefits</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      {" "}
      <strong>
        These high-conversion listings have strong potential. Increasing their
        visibility can drive revenue growth
      </strong>
      . Sellora’s Advertising Recommendation tool identifies your
      best-performing listings and suggests targeted advertising strategies to
      help boost their reach and sales performance.Sellora’s{" "}
      <strong> Advertising Recommendation</strong>
      tool helps sellers improve ad performance by providing personalized
      suggestions based on real-time sales, traffic, and customer behavior data.
    </p>
  </div>
  <p>
    <strong>Key Features&nbsp;</strong>
  </p>
  <ul>
    <li>
      <strong>High-Potential Products</strong>&nbsp;
      <p>
        {" "}
        Automatically highlights listings with high conversion rates and sales
        momentum.
      </p>
    </li>
    <li>
      <strong>Visibility Boost Suggestions</strong>&nbsp;
      <p>
        {" "}
        Recommends increasing visibility through advertising for products with
        proven performance.
      </p>
    </li>
    <li>
      <strong>Smart Bidding Tips</strong>&nbsp;
      <p>
        {" "}
        Provides optimal bid ranges to maximize ad effectiveness without
        overspending.
      </p>
    </li>
    <li>
      <strong>Ad Campaign Integration</strong>&nbsp;
      <p>
        {" "}
        Directly apply recommendations to existing or new Sponsored Product
        campaigns with one click.
      </p>
    </li>
  </ul>
  <p />
  <p>
    <strong>How to Access</strong>
  </p>
  <ul>
    <li>
      Navigate to Growth &gt; <strong> Advertising Recommendation</strong>.
    </li>
    <li>
      Review recommended listings and apply suggestions to your campaigns.
      <ul>
        <li>Sponsored Ads</li>
        <li>Create Campaign</li>
      </ul>
    </li>
  </ul>
  <p>
    <strong>Benefits</strong>
  </p>
  <ul>
    <li>improve ad efficiency and reduce wasteful spend</li>
    <li>Increase product visibility and sales</li>
    <li>Save time with auto-apply recommendations</li>
    <li>Adjust campaigns based on real data and trends</li>
  </ul>
  <p />
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>
          What is the Advertising Recommendation feature in Sellora
          Insights?&nbsp;
        </span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          Advertising Recommendation highlights high-conversion listings with
          strong sales potential and suggests boosting their visibility through
          targeted ads. It helps sellers increase revenue by focusing on what’s
          already working.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How are these recommendations generated?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Recommendations are based on real-time sales data, conversion rates,
          and product performance trends. Sellora identifies listings with
          strong potential that can benefit from increased visibility.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I apply the recommendations directly to my ads?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes. You can apply the suggestions to your active Sponsored Product
          campaigns with just one click, or create a new campaign based on the
          recommended listing.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Will this help improve my ad performance?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes. By focusing your budget on high-performing listings and using
          smart bid suggestions, you can improve your ad efficiency, reach more
          customers, and increase sales.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Is there any additional cost to use this feature?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          No, Advertising Recommendation is a free tool available to all
          sellers. However, applying recommendations may result in ad spend as
          part of your campaign budget.
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