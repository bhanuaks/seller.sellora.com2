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
              <a href="#"> Policies &amp; Standards </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Account
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
              <a href="#">Help </a>{" "}
            </li>
            <li>
              <a href="#"> Policies &amp; Standards </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Account
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
  <h2>Account</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>Account Registration &amp; Verification</li>
    <li>Compliance Obligations</li>
    <li>Account Use &amp; Conduct</li>
    <li>Account Performance Standards</li>
    <li>Account Suspension &amp; Termination</li>
    <li>Account Security</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Your Sellora seller account is your official identity on the platform and
      must be managed with integrity, transparency, and full compliance with our
      marketplace standards. All sellers are required to provide accurate
      business information, maintain up-to-date contact details, and adhere to
      Sellora’s operational and ethical guidelines. <br />
      Maintaining a healthy account includes fulfilling orders on time,
      providing excellent customer service, and avoiding policy violations such
      as counterfeit listings, misleading product descriptions, or manipulation
      of reviews. Regular performance evaluations are conducted, and repeated
      breaches may lead to penalties, including suspension or termination of the
      account.
    </p>
    <p> To ensure a smooth selling experience, sellers are expected to:</p>
    <ul>
      <li>Verify their identity and business documents.</li>
      <li>Maintain high fulfillment and cancellation standards.</li>
      <li>
        {" "}
        Comply with product listing rules and intellectual property laws.
      </li>
      <li>Cooperate during audits, investigations, or dispute resolutions.</li>
    </ul>
    <p />
    <p>
      By maintaining compliance with Sellora’s policies, you can enhance buyer
      trust, increase visibility, and unlock exclusive seller benefits.
    </p>
    <p />
  </div>
  <p>
    <strong>Account Registration &amp; Verification</strong>
  </p>
  <ul>
    <li>
      Sellers must provide
      <strong> complete, accurate, and verifiable information </strong> during
      registration.
    </li>
    <li>
      Only <strong> one active seller account</strong> is permitted per
      individual or business unless pre-approved by Sellora.
    </li>
  </ul>
  <p />
  <p>
    <strong>Compliance Obligations</strong> <br />
    Sellers are responsible for adhering to all{" "}
    <strong> local laws and regulations, </strong> including:
  </p>
  <ul>
    <li>Taxation and GST compliance</li>
    <li>Product quality and labeling standards</li>
    <li>Import/export regulations, if applicable</li>
  </ul>
  <p />
  <p>
    <strong>Account Use &amp; Conduct</strong>
  </p>
  <ul>
    <li>
      Sellers must use their<strong> account responsibly and ethically </strong>{" "}
      duriat all times.
    </li>
    <li>
      The following actions are strictly prohibited:
      <ul>
        <li>Submitting false business information</li>
        <li>Engaging in fraudulent transactions or fake orders</li>
        <li>Manipulating product reviews or ratings</li>
        <li>Listing prohibited or restricted products</li>
      </ul>
    </li>
  </ul>
  <p />
  <p>
    <strong>Account Performance Standards</strong> <br />
    To ensure customer satisfaction, sellers must meet Sellora’s minimum
    performance benchmarks:
  </p>
  <ul>
    <li>
      High <strong> order fulfillment rate</strong>&nbsp;
    </li>
    <li>
      low <strong> cancellation and return rates</strong>{" "}
    </li>
    <li>
      Consistent<strong> on-time dispatch</strong>
    </li>
    <li>
      {" "}
      Positive<strong>customer feedback</strong>
    </li>
  </ul>
  <p>
    Failure to meet performance expectations may result in{" "}
    <strong> warnings, restrictions, or account suspension.</strong>{" "}
  </p>
  <p />
  <p>
    <strong>Account Suspension &amp; Termination</strong>
  </p>
  <ul>
    <li>
      Sellora reserves the right to{" "}
      <strong> suspend or terminate any account </strong> found in violation of
      platform policies or exhibiting poor performance
    </li>
    <li>
      Sellers will receive notice with the{" "}
      <strong>reason for suspension </strong> and, when applicable,{" "}
      <strong> steps for reinstatement.</strong>
    </li>
    <li>
      Repeated or severe violations may lead to{" "}
      <strong>permanent termination</strong>of the account.
    </li>
  </ul>
  <p />
  <p />
  <p>
    <strong>Account Security</strong>
  </p>
  <ul>
    <li>
      Sellers are fully responsible for protecting their{" "}
      <strong> login credentials</strong>and access.
    </li>
    <li>
      Any suspicious activity must be reported immediately to{" "}
      <strong> Sellora Seller Support.</strong>{" "}
    </li>
    <li>
      Tax statements and downloadable reports are available in the{" "}
      <strong> Report &gt; Report centre</strong> section of your dashboard.
    </li>
  </ul>
  <p />
  <p>
    <strong>Need Help?</strong>
  </p>
  <p>
    For further clarification or assistance, please contact Sellora Seller
    Support or refer to the full <strong>Terms of Service.</strong>
  </p>
  <p />
  <p>
    {" "}
    <strong>Need Assistance?</strong> <br />
    If you have questions or notice discrepancies in your payment, contact{" "}
    <strong>Sellora Seller Support</strong> or raise a ticket through the{" "}
    <strong>Payments Help Center</strong> in your dashboard.
  </p>
  <div>
    <h3>Frequently Asked Questions</h3>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What documents are required for account verification?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          You may be asked to provide valid government-issued ID, business
          registration documents, GST certificate,Tax certificate and bank
          account proof to complete or update your verification.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          What happens if I submit false information during registration?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          Providing false, inaccurate, or misleading information is a violation
          of Sellora’s policies. It may result in immediate suspension or
          permanent termination of your account.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Will I be notified before my account is suspended?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes. In most cases, Sellora will issue a warning or notice outlining
          the reason for suspension and provide steps for resolution. Immediate
          suspensions may occur in cases of severe violations.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How can I reactivate a suspended account?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          You must follow the steps outlined in the suspension notice, which may
          include submitting documents, resolving pending issues, or appealing
          through the Seller Support portal.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          What should I do if I detect suspicious activity on my account?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Immediately change your password and contact Sellora Seller Support.
          Prompt action helps prevent unauthorized access or potential fraud.
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