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
                  Enable 2-step verification in Seller Center
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
                        Enable 2-step verification in Seller Center
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
              <h2>Enable 2-step verification in Seller Center</h2>
              <h3>In this guide</h3>
              <ul className="clean-decorative-list">
                <li>Overview</li>
                <li>What is multi-factor verification?</li>
                <li>Enable 2-step verification</li>
                <li>Frequently asked questions</li>
                <li>Helpful Resources</li>
              </ul>
              <div className="section-box">
                <h3>Overview</h3>
                <p>
                  One of the most effective ways to protect your Sellora Seller
                  Center account is by enabling an extra layer of security.
                  2-step verification (also known as multi-factor
                  authentication) significantly reduces the risk of unauthorized
                  access to your account. In this guide, we'll walk you through
                  how to enable 2-step verification for all users associated
                  with your Seller Center account.
                </p>
              </div>
              <h3>What is multi-factor verification?</h3>
              <p>
                Multi-factor verification adds an extra layer of security to
                your Sellora Seller Center account by requiring more than just a
                password to log in or add a new user.
              </p>
              <p>
                When enabled, users must verify their identity using a
                temporary, one-time code, which can be sent via email, SMS, or
                an authenticator app.
              </p>
              <p>
                Once activated, all users on your account will be required to
                complete this verification step each time they log in or attempt
                to add a new user.
              </p>
              <h3>Enable 2-step verification</h3>
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
              <h3>Step 2 – Set up your authentication method</h3>
              <ul>
                <li>
                  Each user on your <strong>Sellora Seller Center</strong>{" "}
                  account must set up their{" "}
                  <strong>preferred authentication method</strong> individually.
                </li>
                <li>
                  Once <strong>2-step verification</strong> is enabled, all
                  users will be prompted to select an authentication method the
                  next time they log in.
                </li>
                <li>
                  Available options include:
                  <ul>
                    <li>
                      <strong>Email</strong>
                    </li>
                    <li>
                      <strong>Text message (SMS)</strong>
                    </li>
                  </ul>
                </li>
              </ul>
              <p>
                This ensures secure access for each user based on their chosen
                verification channel.
              </p>
              <h3>Step 3 – Enter Email &amp; Primary Mobile Number</h3>
              <p>To complete your 2-step verification setup:</p>
              <p>1- Enter your email address and primary mobile number</p>
              <p>2- Click Done.</p>
              <p>
                Once submitted, your 2-step verification setup will be complete.{" "}
              </p>
              <img src={`${baseUrl}front/assets/images/image-75.png`} />
              <h3>Frequently asked questions</h3>
              <div className="faq-container">
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      I Forgot My Seller Center Password — How Do I Reset It?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      You can reset your password directly from the{" "}
                      <strong>Sellora Seller Center</strong> login page. For
                      detailed instructions, refer to the guide:{" "}
                      <strong>Reset Seller Center Password</strong>.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      I'm Locked Out of the Seller Center — What Should I Do?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      If you enter the wrong password five times, your Sellora
                      Seller Center account will be locked for 24 hours as a
                      security measure. After the 24-hour lockout period, you
                      can regain access by resetting your password. For
                      step-by-step instructions, refer to the Reset Seller
                      Center Password guide.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      I'm Having Trouble Finding the One-Time Verification Code
                      in My Email — What Should I Do?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      First, <strong>check your spam or junk folder</strong> to
                      see if the verification email was filtered there. If you
                      still don’t see it, return to the{" "}
                      <strong>Sellora Seller Center</strong> login screen and
                      click <strong>Resend Code</strong> to generate a new
                      one-time verification code.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      The One-Time Verification Code via Email Isn’t Working —
                      What Should I Do?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      The verification code is <strong>temporary</strong> and is
                      only valid for <strong>10 minutes</strong> after it's sent
                      to your email inbox. If more than 10 minutes have passed,
                      return to the <strong>Sellora Seller Center</strong> login
                      or authentication screen and click{" "}
                      <strong>Resend Code</strong> to receive a new one. If
                      you're still experiencing issues, click the{" "}
                      <strong>Help</strong> button in the Seller Center menu bar
                      to contact <strong>Sellora Support</strong> for further
                      assistance.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      I Already Set Up 2-Step Verification But Want to Change My
                      Preferences — How Do I Do This?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      You can change your 2-Step Verification in the{" "}
                      <strong>Sellora Seller</strong> Center by going to{" "}
                      <strong>Login Setting</strong> and selecting the{" "}
                      <strong>2-Step Verification</strong> option.
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
