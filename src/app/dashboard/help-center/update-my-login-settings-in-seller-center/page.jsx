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
                  Update Login settings in Seller Center
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
                        Update Login settings in Seller Center
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
              <h2>Update Login settings in Seller Center</h2>
              <h3>In this guide</h3>
              <ul className="clean-decorative-list">
                <li>Overview</li>
                <li>Access my profile settings</li>
                <li>Frequently asked questions</li>
              </ul>
              <div className="section-box">
                <h3>Overview</h3>
                <p>
                  This guide will help you update your personal information
                  within the <strong>Login Setting</strong> section of the{" "}
                  <strong>Sellora Seller Center</strong>. You’ll learn how to
                  modify details such as your Name, Email, and Password to keep
                  your account information accurate and secure.
                </p>
              </div>
              <h3>Access my profile settings</h3>
              <p>
                <strong>Step 1 – Get started</strong>
              </p>
              <ul>
                <li>
                  Click on the <strong>Settings</strong> icon located at the
                  top-right corner of the dashboard
                </li>
                <li>
                  Select <strong>Login Setting</strong> from the dropdown menu
                </li>
              </ul>
              <p>
                <strong>Step 2 – Make updates</strong>
              </p>
              <p>
                You can change your profile’s email address, password or your
                name. Once your changes have been applied, select Done.
              </p>
              <img src={`${baseUrl}front/assets/images/image-69.png`} />
              <h2>Frequently asked questions</h2>
              <div className="faq-container">
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>How do I change my email address?</span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      To change your registered email address on Sellora, follow
                      these steps:
                    </p>
                    <ul>
                      <li>
                        Click on the <strong>Settings</strong> icon located at
                        the top-right corner.
                      </li>
                      <li>
                        Select <strong>Login Settings</strong> from the dropdown
                        menu.
                      </li>
                      <li>
                        Enter and update your new <strong>email address</strong>{" "}
                        in the provided field.
                      </li>
                      <li>
                        Save the changes to update your registered email
                        successfully.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>How soon are changes reflected on my profile?</span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      Once you click <strong>Save Changes</strong>, your profile
                      updates are applied <strong>immediately</strong> and will
                      be visible across your Seller Center account without
                      delay.
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