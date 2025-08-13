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
              <a href="#">Advertising</a>{" "}
            </li>
            <li>
              <a href="#">Smart Campaign</a>{" "}
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
              <a href="#"> Advertising </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Smart Campaign
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
  <h2>Smart Campaign</h2>
  <h3>In this guide</h3>
  <p>
    Overview <br />
    How to Launch a Smart Campaign
    <br />
    Frequently asked questions
  </p>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Smart Campaigns on Sellora are designed for sellers who want to automate
      their advertising with minimal effort. The system uses real-time data and
      AI to automatically select keywords, adjust bids, and place ads where
      they’re most likely to convert — helping you{" "}
      <strong>increase visibility and sales without manual work.</strong> <br />
      Ideal for beginners or busy sellers, Smart Campaigns optimize performance
      using Sellora’s ad intelligence system. Key Benefits:
    </p>
    <ul>
      <li>Zero keyword research required</li>
      <li>Auto-bidding based on conversion data</li>
      <li>Continuous optimization for better ROI</li>
      <li>Saves time while improving ad performance</li>
    </ul>
    <p />
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
    <strong>How to Launch a Smart Campaign:</strong>
  </p>
  <ul>
    <li>
      Go to the<strong> Advertising &gt; Sponsored Ads.</strong>&nbsp;
    </li>
    <li>
      Click on <strong> “Create Campaign.”</strong>&nbsp;
    </li>
    <li>
      Select <strong> “Smart Campaign.”</strong>&nbsp;
      <br />
      Enter Your <strong>Campaign Name.</strong>
    </li>
    <li>
      Choose the<strong> products </strong>&nbsp;you want to advertise.
    </li>
    <li>
      Fill in the campaign requirements:
      <ul>
        <li>
          <strong>Expected ROI</strong> (Choose a value between 1–15)
          <br />
          <strong>Budget Limit</strong> (Optional)
        </li>
        <li>
          <strong>Exclude Keywords</strong> (Optional)
        </li>
      </ul>
    </li>
    <li>
      Select the <strong>“Manual Budget” </strong> Daily Budget.
      <br /> Set the <strong>Time Frame</strong> for the campaign.
    </li>
  </ul>
  <div>
    <h3>Frequently Asked Questions</h3>
    <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What is a Smart Campaign?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          A Smart Campaign is an automated ad campaign where Sellora’s system
          manages keyword targeting and bidding based on real-time performance
          data.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Do I need to add keywords manually?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          No. Sellora automatically selects relevant, high-converting keywords
          based on your product title, description, and customer search
          behavior.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I edit or pause a Smart Campaign?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          Yes. You can pause, stop, or adjust your campaign settings (e.g.,
          budget, duration, product selection) anytime via Campaign Manager.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          Can I run both Manual and Automatic campaigns at the same time?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          Yes, many sellers use both together. Start with Automatic to discover
          high-performing keywords, then shift to Manual for tighter control and
          better optimization.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          How is a Manual Campaign different from an Automatic Campaign?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p> </p>
        <ul>
          <li>
            Manual Campaign: You manually select keywords and set bids. Best for
            sellers who want precise targeting.
          </li>
          <li>
            Automatic Campaign: Sellora’s system selects keywords for you based
            on your product listing. Best for beginners or broad targeting.
          </li>
        </ul>
        <p />
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