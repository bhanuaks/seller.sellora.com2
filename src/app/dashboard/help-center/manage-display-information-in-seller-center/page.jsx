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
                <a href="#">Getting Started</a>{" "}
              </li>
              <li>
                <a href="#" className="active_002">
                  Manage Display Information in Seller Center
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
                        Manage Display Information in Seller Center
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
              <h2>Manage Display Information in Seller Center</h2>
              <h3>In this guide</h3>
              <ul className="clean-decorative-list">
                <li>Overview</li>
                <li>How to manage Display information</li>
                <li>Frequently asked questions</li>
              </ul>
              <div className="section-box">
                <h3>Overview</h3>
                <p>
                  You must provide accurate, up‑to‑date Display information for
                  customers and Sellora Marketplace. This information is
                  displayed on your Sellora.com listings. In this guide, we’ll
                  show you how to manage your display name and company
                  description in Seller Center
                </p>
              </div>
              <h3>How to manage Display Information</h3>
              <p>
                <strong>Step 1 – Get started</strong>
              </p>
              <ul>
                <li>
                  Click on the <strong>Settings icon</strong> located at the
                  top-right corner of the dashboard
                </li>
                <li>
                  Select <strong>Display Information</strong> from the dropdown
                  menu
                </li>
              </ul>
              <p>
                <strong>Step 2 – Complete details</strong>
              </p>
              <p>There are Two entry boxes to input your Business details.</p>
              <ul>
                <li>
                  <strong>Display Name:</strong> You are responsible for
                  selecting your display name, which represents your business on
                  Sellora.com. This name will be publicly visible to customers.
                </li>
                <li>
                  <strong>Business Description:</strong> Provide a brief
                  overview of your business to help customers learn more about
                  who you are and what you offer.
                </li>
              </ul>
              <h3>Step 3 – Confirm and Update</h3>
              <p>Once you've completed those sections, then choose Update.</p>
              <img src={`${baseUrl}front/assets/images/image-70.png`} />
              <h2>Frequently asked questions</h2>
              <div className="faq-container">
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      Can I make changes to my Display Information after
                      selecting "Update"?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      Yes, you can make changes anytime. Just repeat the steps
                      above to update your information
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      Why aren't the changes to my uploaded Display Information
                      visible?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      Changes to your Display Information may take a few minutes
                      to reflect. If the updates still aren’t visible after some
                      time, try refreshing the page or clearing your browser
                      cache. If the issue persists, contact{" "}
                      <strong>Sellora Support</strong>.
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