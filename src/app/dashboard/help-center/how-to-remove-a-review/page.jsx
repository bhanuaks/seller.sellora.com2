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
              <a href="#"> Listing optimization </a>{" "}
            </li>
            <li>
              <a href="#">How to Remove a Review</a>{" "}
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
              <a href="#">Listing optimization</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                How to Remove a Review
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
  <h2>How to Remove a Review</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>Eligibility Criteria for Review Removal – Sellora</li>
    <li>What Should I Do?</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      If you come across an{" "}
      <strong> irrelevant, inappropriate, or policy-violating review</strong> on
      one of your <strong> Sellora Marketplace listings</strong>, you may be
      eligible to request its removal. While Sellora
      <strong>
        does not allow sellers to edit or delete reviews directly
      </strong>{" "}
      , reviews that meet specific
      <strong> removal criteria</strong> can be takendown after moderation.
      <br />
      In this guide, you'll learn:
    </p>
    <ul>
      <li>The types of reviews that qualify for removal</li>
      <li>Situations when a review may be reported</li>
      <li>
        The step-by-step process to submit a removal request through the Seller
        Center
      </li>
    </ul>
    <p>
      Understanding and managing your reviews properly can help protect your
      brand reputation, improve listing performance, and maintain customer
      trust.
    </p>
  </div>
  <h3>Eligibility Criteria for Review Removal – Sellora</h3>
  <p style={{ margin: 0 }}>
    To request the removal of a review on Sellora.com,
    <strong> at least one</strong> of the following conditions must be met:
  </p>
  <h3>1. Incorrect Star Rating</h3>
  <p style={{ margin: 0 }}>
    The star rating does <strong> not match the sentiment</strong> of the
    review.
  </p>
  <p style={{ margin: 0 }}>
    {" "}
    Example: The customer writes a positive comment like “Great product and fast
    delivery” but gives a <strong> 1 or 2-star rating.</strong>
  </p>
  <h3>2. Inappropriate Feedback</h3>
  <p style={{ margin: 0 }}>
    The review includes <strong> offensive or inappropriate content</strong>,
    such as:
  </p>
  <ul>
    <li>Profanity</li>
    <li>Hate speech</li>
    <li>Slander</li>
    <li>Harassment</li>
    <li>Irrelevant or promotional content</li>
  </ul>
  <h3>3. Platform-Related Issue (Sellora Fault)</h3>
  <p style={{ margin: 0 }}>If you believe a review qualifies for removal:</p>
  <ol style={{ paddingLeft: 20 }}>
    <li style={{ color: "black" }}>
      Go to the Seller <strong> Center</strong>.
    </li>
    <li style={{ color: "black" }}>
      Click the Help <strong> button </strong>in the menu bar.
    </li>
    <li style={{ color: "black" }}>
      Contact <strong> Seller Support </strong>and provide:
      <ul>
        <li>The product name or SKU</li>
        <li>A copy or screenshot of the review</li>
        <li>The reason for removal (as per eligibility criteria)</li>
        <li>Any supporting documentation if applicable</li>
      </ul>
    </li>
  </ol>
  <p style={{ margin: "opx" }}>
    Sellora’s moderation team will review your request and inform you of the
    outcome.
  </p>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>
          How long will it take to receive a response on my removal request?
        </span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          You can expect a response from Seller Support within five to seven
          business days. If you have questions, select the Help button in the
          Seller Center menu bar to contact Support.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          The review that I want to remove is old. Can I still request that it
          be removed?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Sellora can't remove a review that’s older than 90 Days, unless the
          content within the review is offensive, such as profanity or
          slander.&nbsp;
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          The review I received is damaging to my business. Can it be removed?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Sellora will never remove a review solely because you perceive it as
          negative. Your request must fall within one of the criteria outlined
          above.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          Can Sellora remove a review that was added through review syndication?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          No. Sellora can only remove reviews that were originally posted
          natively on Sellora.com.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          I submitted a request for review removal but my request was denied.
          Why?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          There are several reasons your request may be denied. For instance,
          Sellora cannot remove reviews due to misuse of the product or
          incorrect information given unless there is associated risk of injury
          or liability. Additionally, sellora can't remove any content if the
          requester is not directly affiliated with the impacted client site,
          for instance a brand requesting the removal of a native retailer
          review. For specific details on why your request was denied, consult
          the correspondence you received from Seller Support. If you have
          questions, select the Help button in the Seller Center menu bar to
          contact Support.
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