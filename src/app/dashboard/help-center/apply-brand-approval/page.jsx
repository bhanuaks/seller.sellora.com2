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
              <a href="#">Help</a>{" "}
            </li>
            <li>
              <a href="#">Listing Set Up</a>{" "}
            </li>
            <li>
              <a href="#">Add Catalog Overview</a>{" "}
            </li>

            
            <li>
              <a href="#" className="active_002">
                Apply Brand Approval
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
              <a href="#">Help</a>{" "}
            </li>
            <li>
              <a href="#"> Listing Set Up</a>{" "}
            </li>
            <li>
              <a href="#"> Add Catalog Overview</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Apply Brand Approval
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
              

             
  <h2>Apply for Brand Approval</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>Who Can Register on the Sellora Brand Portal?</li>
    <li>How to Apply for Brand Approval </li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="Overview mt-5">
    <div className="section-box">
      <h3>Overview</h3>
      <p>
        You can register your brand through the Sellora Brand Portal to report
        legitimate claims of intellectual property infringement for products
        listed on Sellora.com—including issues related to copyright, trademark,
        patent, or counterfeit. Additionally, you can assign content ownership
        rights and update privileges to verified brand owners and authorized
        resellers.
      </p>
    </div>
    <h6>
      This guide will walk you through the eligibility requirements for brand
      registration on Sellora.com.
    </h6>
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
  <div className="ragister-brand-">
    <h4>Who Can Register on the Sellora Brand Portal?</h4>
    <p>
      Only a rights owner with a registered trademark—typically through the
      Intellectual Property Office (such as the USPTO for U.S. trademarks)—can
      submit a brand registration application and complete the verification
      process on the Sellora Brand Portal.
    </p>
    <h6>Benefits for Registered Brand Owners</h6>
    <ul>
      <li>
        Submit <span> intellectual property claims</span> for copyright,
        trademark, patent, or counterfeit violations
      </li>
      <li>
        Grant <span>content ownership rights</span> to themselves or authorized
        sellers
      </li>
      <li>
        Access<span> brand-specific advertising tools,</span> including
        Sponsored Brands, Sponsored Videos, Display Ads, and Brand Shop
      </li>
      <li>
        View detailed <span>analytics,</span> such as unpublished listings,
        non-compliant listings, unpublished rate, and content protection status
      </li>
    </ul>
  </div>
  <div className="representive">
    <h4>Authorized Representatives</h4>
    <p>
      If you’re an <span>authorized third-party brand protection agency</span>{" "}
      or an <span>authorized legal representative,</span>
      you should request the brand owner to add you to their{" "}
      <span> Brand Portfolio</span> on Sellora as an{" "}
      <span>authorized reseller.</span> This will allow you to access many of
      the same tools and protections available to brand owners.
    </p>
  </div>
  <div className="how-brand-approval">
    <h2>How to Apply for Brand Approval </h2>
    <div className="step1">
      <h4>Step 1 – Get started</h4>
      <ul>
        <li>
          Click on <span>Listing, </span> then select <span> Add Catalog.</span>
        </li>
        <li>
          Click <span>Add a Single Listing.</span>
        </li>
        <li>
          Enter your <span>brand name.</span>
        </li>
        <li>
          Click <span>Verify Brand.</span>
        </li>
        <li>
          Once verified, click <span>Apply Brand.</span>
        </li>
      </ul>
    </div>
    <div className="step1">
      <h4>Step 2 – Provide Essential Brand Information</h4>
      <p>
        To register your brand on Sellora.com, please fill out the following
        details:
      </p>
      <ul>
        <li>
          <span>Are you the brand owner? </span>
          <p> (Yes / No)</p>
        </li>
        <li>
          <span>Enter Brand Name</span>
        </li>
        <li>
          <span>Select the Document You Will Provide for Brand Approval</span>
          <p> (Choose one):</p>
          <ul className="ul-alfabets">
            <li>Trademark Certificate</li>
            <li>Brand Authorization Letter</li>
            <li>Invoice</li>
          </ul>
        </li>
        <li>
          <span>Attach Document for Approval</span>
          <p>
            {" "}
            [Upload field – attach supporting document in PDF, JPG, or PNG
            format]
          </p>
        </li>
        <li>
          <span>Are You Selling This Brand on Other Platforms?</span>
          <p> (Yes / No)</p>
          <p> If yes, please specify:</p>
          <p> [List platforms such as Amazon, Flipkart, Meesho, etc.]</p>
        </li>
      </ul>
    </div>
    <div className="step1">
      <h4>Step 3 – Update</h4>
      <p>
        After reviewing and confirming that all the information you’ve provided
        is accurate, click <span>Update.</span> The
        <span>Sellora team</span> will then review your application for brand
        approval.
      </p>
    </div>
    <div className="regiterd-img d-flex justify-content-center">
      <img src={`${baseUrl}front/assets/images/image-76.png`} />
    </div>
  </div>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>
          How Do I Submit Intellectual Property Claims Without a Sellora Brand
          Portal Account?
        </span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          If you do not have a Sellora Brand Portal account, you can still
          report suspected cases of{" "}
          <strong>intellectual property infringement</strong> using Sellora’s{" "}
          <strong>public IP claim form</strong>.
        </p>
        <p>This webform allows you to submit claims related to:</p>
        <ul>
          <li>Copyright infringement</li>
          <li>Trademark violations</li>
          <li>Counterfeit listings</li>
        </ul>
        <p>
          {" "}
          To access the form, visit the <strong>Sellora Help Center</strong> and
          navigate to the <strong>Intellectual Property Claims</strong> section.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          Is the Sellora Brand Portal Only Available in the United States?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          Yes, Sellora Brand Portal services are currently available{" "}
          <strong>only for the U.S. Marketplace.</strong>
        </p>
      </div>
    </div>
    
  </div>




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