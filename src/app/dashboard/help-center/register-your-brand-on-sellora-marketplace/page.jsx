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
                <a href="#">Help</a>{" "}
              </li>
              <li>
                <a href="#">Getting Started</a>{" "}
              </li>
              <li>
                <a href="#" className="active_002">
                  Register your brand on Sellora Marketplace
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
                      <a href="#">Getting Started</a>{" "}
                    </li>
                    <li>
                      <a href="#" className="active_002">
                        Register your brand on Sellora Marketplace
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
              <h2>Register your brand on Sellora Marketplace</h2>
              <h3>In this guide</h3>
              <ul className="clean-decorative-list">
                <li>Overview</li>
                <li>Register your brand</li>
                <li>Frequently asked questions</li>
              </ul>
              <div className="section-box">
                <h3>Overview</h3>
                <p>
                  Sellora.com makes it easy for brand owners to protect their{" "}
                  <strong>intellectual property</strong> and manage their brand
                  presence on the platform.
                </p>
                <p>
                  In this guide, you’ll learn how to use the{" "}
                  <strong>Sellora Brand Portal</strong> to:
                </p>
                <ul>
                  <li>Register and manage your brands</li>
                  <li>
                    Submit various types of{" "}
                    <strong>intellectual property claims</strong>
                  </li>
                  <li>Track the status of your claims in real-time</li>
                </ul>
                <p>
                  This centralized system helps ensure your brand is represented
                  accurately and protected across the marketplace.
                </p>
              </div>
              <h3>Register your brand</h3>
              <h3>Step 1 – Get started</h3>
              <ul>
                <li>
                  Click on <strong>Listing</strong>, then select{" "}
                  <strong>Add Catalog</strong>.
                </li>
                <li>
                  Click <strong>Add a Single Listing</strong>.
                </li>
                <li>
                  Select the appropriate <strong>product categories</strong>.
                </li>
                <li>
                  Enter your <strong>brand name</strong>.
                </li>
                <li>
                  Click <strong>Verify Brand</strong>.
                </li>
                <li>
                  Once verified, click <strong>Apply Brand</strong>.
                </li>
              </ul>
              <h2>Step 2 – Provide Essential Brand Information</h2>
              <p>
                To register your brand on Sellora.com, please fill out the
                following details:
              </p>
              <ul>
                <li>
                  <strong>Are you the brand owner?</strong>
                  <br />
                  (Yes/No)
                </li>
                <li>
                  <strong>Enter Brand Name</strong>
                </li>
                <li>
                  <strong>
                    Select the Document You Will Provide for Brand Approval
                  </strong>
                  <ul>
                    <span>(Choose one):</span>
                    <li>Trademark Certificate</li>
                    <li>Brand Authorization Letter</li>
                    <li>Invoice</li>
                  </ul>
                </li>
                <li>
                  <strong>Attach Document for Approval</strong>
                  <br />
                  [Upload field – attach supporting document in PDF, JPG, or PNG
                  format]
                </li>
                <li>
                  <strong>
                    Are You Selling This Brand on Other Platforms?
                  </strong>
                  <br />
                  (Yes / No)
                  <br /> If yes, please specify:
                  <br />
                  [List platforms such as Amazon, Flipkart, Meesho, etc.]
                </li>
              </ul>
              <h3>Step 3 – Update</h3>
              <p>
                After reviewing and confirming that all the information you’ve
                provided is accurate, click <strong>Update</strong>. The{" "}
                <strong>Sellora team</strong> will then review your application
                for brand approval.
              </p>
              <img src={`${baseUrl}front/assets/images/image-76.png`} />
              <h3>Frequently asked questions</h3>
              <div className="faq-container">
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      Is the Sellora Brand Portal Only Available in the United
                      States?
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
                <div className="accordion-item">
                  <div className="accordion-header">
                    {" "}
                    <span>
                      How Do I Submit Intellectual Property Claims Without a
                      Sellora Brand Portal Account?
                    </span>{" "}
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>{" "}
                  </div>
                  <div className="accordion-content">
                    <p>
                      If you do not have a Sellora Brand Portal account, you can
                      still report suspected cases of{" "}
                      <strong>intellectual property infringement</strong> using
                      Sellora’s <strong>public IP claim form</strong>.
                    </p>
                    <p>This webform allows you to submit claims related to:</p>
                    <ul>
                      <li>Copyright infringement</li>
                      <li>Trademark violations</li>
                      <li>Counterfeit listings</li>
                    </ul>
                    <p>
                      {" "}
                      To access the form, visit the{" "}
                      <strong>Sellora Help Center</strong> and navigate to the{" "}
                      <strong>Intellectual Property Claims</strong> section.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    {" "}
                    <span>
                      How Do I Report Unauthorized Sellers on Sellora.com?
                    </span>{" "}
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>{" "}
                  </div>
                  <div className="accordion-content">
                    <p>
                      Sellora operates on a <strong>unified catalog</strong>{" "}
                      system, which means multiple sellers can list and sell the
                      same product. As a result,{" "}
                      <strong>resellers may appear on your listing</strong>,
                      whether or not they are authorized.
                    </p>
                    <p>
                      <strong>Sellora does not intervene</strong> in disputes
                      between brand owners and resellers, and does not enforce
                      or mediate <strong>contractual agreements</strong> between
                      third-party sellers and suppliers.
                    </p>
                    <h3>What You Can Do:</h3>
                    <ul>
                      <li>
                        We encourage you to{" "}
                        <strong>contact the seller directly</strong> to resolve
                        any concerns.
                      </li>
                      <li>
                        To find their contact details,{" "}
                        <strong>scroll down</strong> the product listing page
                        and click on the <strong>seller’s name</strong>.
                      </li>
                    </ul>
                    <p>
                      If you believe the seller is infringing on your{" "}
                      <strong>intellectual property</strong>, you may file a
                      formal claim through the{" "}
                      <strong>Sellora Brand Portal</strong> or the{" "}
                      <strong>public IP claim form.</strong>
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    {" "}
                    <span>
                      Can I Link My Previously Registered Trademarks with My
                      Sellora Marketplace Account?
                    </span>{" "}
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>{" "}
                  </div>
                  <div className="accordion-content">
                    <p>
                      <strong>Yes</strong>, you can link trademarks previously
                      registered with <strong>Supplier One</strong> to your{" "}
                      <strong>Sellora Marketplace</strong> account.
                    </p>
                    <h3>Here's how it works:</h3>
                    <ul>
                      <li>
                        <strong>Same Email Address:</strong>
                        <br />
                        If you’re using the <strong>
                          same email address
                        </strong>{" "}
                        for both your <strong>Supplier</strong> One and{" "}
                        <strong>Sellora Marketplace</strong> accounts, you’ll
                        see an option to <strong>connect the accounts </strong>
                        automatically when you log into the{" "}
                        <strong>Sellora Brand Portal</strong>.
                      </li>
                      <li>
                        <strong>Different Email Addresses:</strong>
                        <br />
                        If you used <strong>different email addresses</strong>,
                        you’ll need to <strong>invite the email address</strong>{" "}
                        associated with your <strong>Supplier One</strong>{" "}
                        account as an <strong>administrator</strong> from within
                        the Brand Portal.
                      </li>
                    </ul>
                    <p>
                      {" "}
                      This will trigger the connection between your Supplier and
                      Marketplace accounts on your next login.
                    </p>
                    <p>
                      Once connected, your updates will be recognized with{" "}
                      <strong>brand owner privileges</strong>, and you’ll be
                      able to manage your trademarks across both{" "}
                      <strong>Supplier</strong> and{" "}
                      <strong>Marketplace tools</strong>.
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
