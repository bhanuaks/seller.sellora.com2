'use client'
import React, { useEffect, useState } from 'react'
import LeftSideBar from '../LeftSideBar';
import LeftMobileSideBar from '../LeftMobileSideBar';
import SearchBox from '../SearchBox';
import { baseUrl } from '@/Http/helper';
import { usePathname } from 'next/navigation';
import { initAccordion } from '../menuListeners';

export default function page() {

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
                  Manage Contact Information in Seller Center
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
                        Manage Contact Information in Seller Center
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
              <h2>Manage Contact Information in Seller Center</h2>
              <h3>In this guide</h3>
              <ul className="clean-decorative-list">
                <li>Overview</li>
                <li>Manage contact information</li>
                <li>Frequently asked questions</li>
              </ul>
              <div className="section-box">
                <h3>Overview</h3>
                <p>
                  In the Manage Contacts Details section of Seller Center, you
                  can update your contact details. This guide will walk you
                  through the process.
                </p>
              </div>
              <h3>Manage contact Details</h3>
              <p>
                <strong>Step 1 – Get Started</strong>
              </p>
              <ul>
                <li>
                  Click on the <strong>Settings</strong> icon located at the
                  top-right corner of the dashboard
                </li>
                <li>
                  Select <strong>Contact Details</strong> from the dropdown menu
                </li>
              </ul>
              <p>
                <strong>Step 2 – Add Contact Details</strong>
              </p>
              <p>There are Two entry boxes to input your Business details.</p>
              <ul>
                <li>Name</li>
                <li>Mobile Number</li>
                <li>Email address</li>
              </ul>
              <h3>Step 3 – Confirm and Update</h3>
              <p>Once you've completed those sections, then choose Update.</p>
              <img src={`${baseUrl}front/assets/images/image-71.png`} />
              <h2>Frequently asked questions</h2>
              <div className="faq-container">
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>How do I delete contact Details?</span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>You cannot delete the contact Details.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      Can I assign a contact to multiple contact types?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      <strong>No.</strong> A single contact can only be assigned
                      to one contact type.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      Are there any policies that I need to follow when creating
                      an email for my customer service contact?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      <strong>Yes.</strong> The email address you provide for
                      your customer service contact is customer-facing and{" "}
                      <strong>must not include the term “Sellora.”</strong>
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
