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
                  Reset Seller Center password
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
                        Reset Seller Center password
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
              <h2>Reset Seller Center password</h2>
              <h3>In this guide</h3>
              <ul className="clean-decorative-list">
                <li>Overview</li>
                <li>Reset Your Passoword</li>
                <li>Frequently asked questions</li>
              </ul>
              <div className="section-box">
                <h3>Overview</h3>
                <p>
                  Forgot your <strong>Sellora Seller Center</strong> password?
                  No worries — just follow the steps below to securely reset
                  your password and regain access to your account.
                </p>
              </div>
              <h3>Reset your password</h3>
              <p>Step 1 – Get started</p>
              <ul>
                <li>
                  Go to the <strong>Sellora.com</strong> login page.
                </li>
                <li>
                  Click on <strong>Forgot Password</strong>.
                </li>
                <li>
                  Enter your <strong>seller account email ID</strong>.
                </li>
                <li>
                  Click <strong>Send OTP</strong> and check your email for the
                  OTP.
                </li>
                <li>
                  Enter the <strong>OTP</strong> to confirm your identity.
                </li>
                <li>
                  Set your <strong>new password</strong> and confirm it.
                </li>
              </ul>
              <div className="notes_11">
                <h3>Notes</h3>
                <p>
                  Each Sellora Seller Center user must have their own individual
                  account and password.For security reasons, account credentials
                  should be kept confidential — users should never share their
                  account or password with others.
                </p>
              </div>
              <h2>Frequently asked questions</h2>
              <div className="faq-container">
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      I know my password, but I’d like to change it; how do I do
                      that?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      You can change your password in the{" "}
                      <strong>Sellora Seller Center</strong>. Click on setting
                      icon going to <strong>Login Setting</strong> and selecting
                      the <strong>Change Password</strong> option.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      I’m Getting an Error Message That Says My Password Is
                      Insecure — What Should I Do?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      This message usually means your current password has been{" "}
                      <strong>compromised</strong> in an online data breach. To
                      protect your account, you'll need to create a{" "}
                      <strong>new, secure password</strong> that you haven’t
                      used before in <strong>Sellora Seller Center</strong>.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      My Account Is Locked for Security Reasons — How Do I Reset
                      My Password?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      If you're seeing a message that your account has been
                      locked for security reasons, you'll need to{" "}
                      <strong>reset your password</strong> to regain
                      access.Follow the steps outlined in this guide to securely
                      reset your <strong>Sellora Seller Center password</strong>
                      .
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
