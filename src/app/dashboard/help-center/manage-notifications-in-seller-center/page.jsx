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
                  Manage notifications in Seller Center
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
                        Manage notifications in Seller Center
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
              <h2>Manage notifications in Seller Center</h2>
              <h3>In this guide</h3>
              <ul className="clean-decorative-list">
                <li>Overview</li>
                <li>Manage notification Settings</li>
                <li>Frequently asked questions</li>
                <li>Helpful Resorces</li>
              </ul>
              <div className="section-box">
                <h3>Overview</h3>
                <p>
                  The <strong>Notifications</strong> panel in the{" "}
                  <strong>Sellora Seller Center</strong> is a centralized
                  location where you can view important updates that may require
                  your immediate attention. These may include business-critical
                  alerts or time-sensitive notifications related to changes in
                  your product catalog.
                </p>
                <p>
                  This guide will walk you through the steps to enable and
                  manage notifications effectively.
                </p>
              </div>
              <h3>Manage notification settings</h3>
              <ul>
                <li>
                  <strong>Step 1 – Get started</strong>
                  <ul>
                    <li>
                      Click on the <strong>Settings</strong> icon located at the
                      top-right corner of the dashboard
                    </li>
                    <li>
                      Select <strong>Notification Settings</strong> from the
                      dropdown menu
                    </li>
                  </ul>
                </li>
              </ul>
              <h3>Step 2 – Choose Your Preferred Notifications</h3>
              <p>
                Select the types of notifications you want to receive based on
                your preferences.
              </p>
              <p>
                <strong>Note:</strong> Important account-related notifications
                will always be sent to you, regardless of your selected
                preferences.
              </p>
              <h3>Step 3 –Choose Returns &amp; Refunds Notifications</h3>
              <p>
                You can choose to receive notifications about returns and
                refunds either within the <strong>Sellora Seller Center</strong>{" "}
                or via email.
              </p>
              <p>
                If an option is greyed out, it means it cannot be modified at
                this time. Once you've made your selections, click Save in the
                right Side
              </p>
              <h3>
                Step 4 – Choose Growth Opportunities &amp; Report Notifications
              </h3>
              <p>
                You can choose to receive notifications about{" "}
                <strong>growth opportunities</strong> either within the{" "}
                <strong>Sellora Seller Center</strong> or via email.
              </p>
              <p>
                If an option is greyed out, it means it cannot be modified at
                this time. Once you've made your selections, click{" "}
                <strong>Save</strong> on the right side.
              </p>
              <h3>Step 5 – Choose Emergency Notification</h3>
              <p>
                Add your <strong>emergency email address</strong> and{" "}
                <strong>phone number</strong> so the{" "}
                <strong>Sellora Support Team</strong> can contact you in case of
                urgent or critical situations.
              </p>
              <h2>Frequently asked questions</h2>
              <div className="faq-container">
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>How do I address a notification?</span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      To see more information and/or address a notification,
                      just select it from the list to be redirected to the
                      appropriate dashboard within Seller Center.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>Are notifications automatically enabled?</span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      To view more details or take action on a notification,
                      simply select it from the list. You will be redirected to
                      the relevant dashboard within the{" "}
                      <strong>Sellora Seller Center</strong> to address the
                      issue
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      Are the notification types listed in Seller Center
                      exhaustive?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      No. You may receive additional notifications depending on
                      the <strong>Sellora tools or programs</strong> you have
                      enabled.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>Can I access old notifications?</span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      Yes, you can access notifications from the past{" "}
                      <strong>15 days</strong>. Use the{" "}
                      <strong>Read status filter</strong> to view previously
                      acknowledged notifications in the{" "}
                      <strong>Sellora Seller Center</strong>.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      Can I set up notifications for newly generated orders?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      Yes, you can enable notifications for newly generated
                      orders to stay updated in real time through{" "}
                      <strong>email</strong> or the{" "}
                      <strong>Sellora Seller Center</strong>.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      How can I send notifications to a new user or a user
                      without a Seller Center account?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      If you’re an admin user, you can add the new user through
                      the <strong>Sellora Seller Center</strong>. Once added,
                      they can subscribe to the relevant notifications
                      themselves.
                    </p>
                    <p>
                      To send notifications to someone{" "}
                      <strong>without a Seller Center account</strong>, follow
                      the steps outlined in the official guide.
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