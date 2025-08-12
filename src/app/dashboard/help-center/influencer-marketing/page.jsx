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
              <a href="#">Advertising &amp; Promotions Overview </a>{" "}
            </li>
            <li>
              <a href="#">Promotions Overview</a>{" "}
            </li>
            <li>
              <a href="#">Influencer Marketing</a>
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
              <a href="#">Promotions Overview </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Influencer Marketing
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
  <h2>Influencer Marketing</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How can I participate in influencer marketing on Sellora?</li>
    <li>How does influencer marketing work on the Sellora platform?</li>
    <li>
      What are the charges or costs associated with influencer marketing on
      Sellora?
    </li>
    <li>Frequently Asked Questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Sellora enables collaboration with influencers or affiliate partners to
      promote your products. Through this channel, influencers feature your
      items in content, sharing affiliate-based links or discount codes that
      help drive traffic and sales.
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
    <strong>
      How can I participate in influencer marketing on Sellora?&nbsp;
    </strong>
  </p>
  <ul>
    <li>
      Go to the<strong> “Growth” </strong>&nbsp; tab on your dashboard.
    </li>
    <li>
      Click on <strong>“Sellora Promotions”</strong>&nbsp; from the menu.
    </li>
    <li>
      Select the <strong> “Influencer Marketing”</strong>&nbsp; section.
    </li>
    <li>
      Click on <strong>“Participate Now.”</strong>&nbsp;
    </li>
    <li>
      <p>Fill in the required details:</p>
      <ul>
        <li>
          {" "}
          <strong>Campaign Name</strong>
        </li>
        <li>
          <strong> Daily Budget</strong>
        </li>
        <li>
          <strong>Time Frame </strong>(Minimum duration is 30 days)
        </li>
        <li>
          <strong>Select Products </strong>you want to promote by searching
        </li>
        <li>
          <strong>Enter Cost Per Order</strong>
        </li>
      </ul>
    </li>
  </ul>
  <p />
  <div>
    <p>
      <strong>
        {" "}
        How does influencer marketing work on the Sellora platform?
      </strong>{" "}
      <br />
      Influencer marketing on Sellora allows sellers to collaborate with
      influencers to promote their products. Sellers can choose influencers
      based on category, audience reach, and engagement metrics. Once a
      partnership is formed, influencers create content showcasing the product,
      which helps drive traffic and sales. Performance is tracked directly
      through the Sellora dashboard. <br />
      <strong>
        What are the charges or costs associated with influencer marketing on
        Sellora?
      </strong>{" "}
      <br />
      Sellora charges a minimum commission of 7% on the total sales generated
      through influencer marketing campaigns. Additional costs may apply based
      on the influencer’s reach, content type, and campaign duration. Sellers
      can also set a daily budget, with a suggested minimum of $100 to ensure
      better visibility and results.
    </p>
  </div>
  <div>
    <h3>Frequently Asked Questions</h3>
    <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How does influencer marketing work on the Sellora platform?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          Influencer marketing on Sellora allows sellers to collaborate with
          influencers to promote their products. Sellers can select influencers
          based on category, audience size, and engagement rate. Once a
          partnership is confirmed, influencers create content to showcase the
          product, helping increase traffic and sales. All campaign performance
          is tracked through the Sellora dashboard.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Where can I see the results of my influencer campaign?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          Campaign performance can be tracked in the Sellora Dashboard under
          Influencer Marketing. You can monitor:
        </p>
        <ul>
          <li>Clicks</li>
          <li>Views</li>
          <li>Orders</li>
          <li>Total sales generated</li>
        </ul>
        <p />
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          What happens if the influencer does not deliver the content?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          Influencers on Sellora are pre-vetted and rated, but if an influencer
          fails to deliver as agreed:
        </p>
        <ul>
          <li>You can report the issue via the dashboard</li>
          <li>Sellora’s team will review the case</li>
          <li>
            In cases of non-compliance, campaigns can be paused and refunds
            adjusted
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