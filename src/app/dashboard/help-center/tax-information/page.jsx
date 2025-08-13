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
              <a href="#">Taxes &amp; payments </a>{" "}
            </li>
            <li>
              <a href="#">Tax information</a>{" "}
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
              <a href="#">Taxes &amp; payments</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Tax information
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
  <h2>Tax information</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>Update your tax information</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      If you need to update your tax classification, Employer Identification
      Number (EIN), legal business name, or business address, you can do so by
      editing your Tax Profile in the Seller Center. Please note that only users
      with an administrator account have permission to make these changes. This
      guide will walk you through the steps to update your information in the
      Seller Center.
    </p>
  </div>
  <h3>Update your tax information</h3>
  <p>
    <strong>Step 1 – Get started&nbsp;</strong>
  </p>
  <ul>
    <li>
      Click on the <strong> Settings</strong> icon located at the top-right
      corner of the dashboard&nbsp;
    </li>
    <li>
      Select <strong> Tax Information </strong>from the dropdown menu
    </li>
  </ul>
  <p />
  <p>
    <strong>Step 2 – Update info&nbsp;</strong>
  </p>
  <p>
    To add or update your information, fill in the required fields, including
    your legal name, business address, and Tax ID.
  </p>
  <div className="notes_11">
    <h3>Notes:-</h3>
    <p>
      {" "}
      If you’ve recently submitted changes that are still under review, you
      won’t be able to make additional updates. To proceed, you must provide the
      required documentation. Submitting incorrect or incomplete information may
      delay the processing of your request.
    </p>
  </div>
  <p>
    <strong>Step 3 – Update</strong>
  </p>
  <p>
    In some cases, you may be required to provide additional details, such as
    the reason for the change and supporting documentation. Once you've entered
    the necessary information, click the Update button.
    <br />
    Sellora reviews all business information changes thoroughly, following our
    verification and compliance procedures. During the review process, you may
    receive a message indicating that a previous update is still under review.
    In such cases, you will not be able to make further updates until the
    current review is complete.
    <br />
    If your submission is approved, the changes will take effect immediately,
    and no further action is required on your part.
  </p>
  <div className="notes_11">
    <h3>Notes:-</h3>
    <p>
      {" "}
      The information provided in this guide and any linked content is for
      general informational purposes only and does not constitute legal advice.
      This policy may include links to third-party websites or content that
      Sellora does not endorse, warrant, or assume responsibility for. Your
      reliance on such content is at your own discretion. If you have questions
      regarding the applicability of the information in this policy, please
      consult your legal counsel.
    </p>
  </div>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>Which tax classification should I choose?&nbsp;</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          Your tax classification is automatically determined based on the
          information you provide during setup. For more information on tax
          classifications and the required documentation, please refer to the{" "}
          <strong> Tax Classifications and Required Documentation</strong> page.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          What should I do if my submitted changes are denied?&nbsp;&nbsp;
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          If Sellora denies your submission, the changes will not take effect.
          To resolve the issue, click the Help button in the Seller Center menu
          bar to contact Support. Once the review process is complete, you’ll
          receive an email notification. If needed, you can then make additional
          edits to the relevant fields.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How long does the review process take?&nbsp;</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          The review process typically takes five to seven business days. Once
          approved, your submitted changes take effect immediately, and no
          further action is required. To view the date and time of your last
          update, check the timestamp in the alert displayed above your Tax
          Profile details.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          How can international sellers set up Tax Information?&nbsp;&nbsp;
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          If you're an international seller, you can set up your Tax Profile in
          the Seller Center by following the steps outlined in this guide.
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