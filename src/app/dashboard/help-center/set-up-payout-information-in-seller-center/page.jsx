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
                  Set up Payout Information in Seller Center
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
                        Set up Payout Information in Seller Center
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
              <h2>Set up Payout Information in Seller Center</h2>
              <h3>In this guide</h3>
              <ul className="clean-decorative-list">
                <li>Overview</li>
                <li>Set up payout information</li>
                <li>Frequently asked questions</li>
              </ul>
              <div className="section-box">
                <h3>Overview</h3>
                <p>
                  If you have an administrator account in the Sellora Seller
                  Center, you can set up your Marketplace Wallet or link a
                  third-party payout processor to receive your payout funds.This
                  guide will walk you through the steps to set up your payout
                  information in Seller Center, ensuring timely and secure
                  payment processing.
                </p>
              </div>
              <h3>Set up payout information</h3>
              <ul>
                <li>
                  <strong>Step 1 – Get started</strong>
                  <ul>
                    <li>
                      Click on the <strong>Settings</strong> icon located at the
                      top-right corner of the dashboard
                    </li>
                    <li>
                      Select <strong>Bank Account Information</strong> from the
                      dropdown menu
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="notes_11">
                <h3>Notes</h3>
                <p>
                  Only users with an admin-level Sellora Seller Center account
                  have access to financial settings, including payout and
                  payment information.
                </p>
              </div>
              <h3>Step 2 – Setup Payout Information</h3>
              <ul>
                <li>
                  Enter your Bank Account details, including:
                  <ul>
                    <li>
                      <strong>Country</strong>
                    </li>
                    <li>
                      <strong>Account Holder's Name</strong>
                    </li>
                    <li>
                      <strong>Account Number</strong>
                    </li>
                    <li>
                      <strong>Bank Name</strong>
                    </li>
                    <li>
                      <strong>Bank Address</strong>
                    </li>
                    <strong>
                      <li>
                        <strong>State and Zip code</strong>
                      </li>
                    </strong>
                  </ul>
                  <strong></strong>
                </li>
                <strong>
                  <li>
                    Review your details for accuracy, then click{" "}
                    <strong>Update</strong> to update your payment information.
                  </li>
                </strong>
              </ul>
              <strong>
                <img src={`${baseUrl}front/assets/images/image-74.png`} />
                <h2>Frequently asked questions</h2>
                <div className="faq-container">
                  <div className="accordion-item">
                    <div className="accordion-header">
                      <span>
                        Are All Payout Processors Available to Every Seller?
                      </span>
                      <span className="accordion-arrow">
                        <i className="fas fa-chevron-right" />
                      </span>
                    </div>
                    <div className="accordion-content">
                      <p>
                        No, <strong>availability varies by location.</strong>
                      </p>
                      <p>
                        If you're located in the U.S. and are interested in
                        using the <strong>Marketplace Wallet</strong>, click the{" "}
                        <strong>Help</strong> button in the{" "}
                        <strong>Sellora Seller Center</strong> menu bar to
                        contact <strong>Support</strong> for more information.
                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header">
                      <span>How Do I Change My Payout Information?</span>
                      <span className="accordion-arrow">
                        <i className="fas fa-chevron-right" />
                      </span>
                    </div>
                    <div className="accordion-content">
                      <p>
                        To change your <strong>Payout information</strong> in{" "}
                        <strong>Sellora Seller Center</strong>, please{" "}
                        <strong>
                          follow all the steps mentioned above carefully
                        </strong>
                        . Once you’ve completed those steps, you’ll be able to
                        successfully update your{" "}
                        <strong>Payout information</strong>. If you face any
                        issues or need assistance, click the{" "}
                        <strong>Help</strong> button in the Seller Center menu
                        bar to contact <strong>Sellora Support</strong>.
                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header">
                      <span>
                        How is the Marketplace Wallet different from third-party
                        Payout processors?
                      </span>
                      <span className="accordion-arrow">
                        <i className="fas fa-chevron-right" />
                      </span>
                    </div>
                    <div className="accordion-content">
                      <p>
                        The Marketplace Wallet, powered by our trusted bank
                        provider, is directly integrated with the Sellora Seller
                        Center. This allows you to receive dedicated support and
                        manage Payment without leaving the platform.
                      </p>
                      <p>Key benefits of the Marketplace Wallet include:</p>
                      <ul>
                        <li>
                          FDIC-insured funds* up to $250,000 per depositor
                        </li>
                        <li>
                          <strong>No hidden fees</strong> for ACH transfers to
                          your linked bank account
                        </li>
                        <li>
                          Seamless Payment management within Seller Center
                        </li>
                        <li>
                          Faster resolution through Sellora’s integrated support
                          system
                        </li>
                      </ul>
                      <p>
                        *Marketplace Wallet is powered by{" "}
                        <strong>J.P. Morgan</strong> and is a deposit account
                        insured by the <strong>FDIC</strong> up to{" "}
                        <strong>$250,000</strong> per depositor at{" "}
                        <strong>JPMorgan</strong> <strong>Chase Bank</strong>,
                        N.A., for each account ownership category.
                      </p>
                      <p>
                        FDIC insurance protects against the failure of JPMorgan
                        Chase Bank, N.A., not of Sellora or its parent company.
                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header">
                      <span>
                        I Already Receive Payouts Through a Third-Party Payout
                        Processor — How Can I Switch to the Marketplace Wallet?
                      </span>
                      <span className="accordion-arrow">
                        <i className="fas fa-chevron-right" />
                      </span>
                    </div>
                    <div className="accordion-content">
                      <p>
                        You can terminate your relationship with your current
                        third-party payout processor and set up a Marketplace
                        Wallet instead.
                      </p>
                      <p>
                        Please note:- You cannot maintain both payout methods
                        simultaneously — you must close the third-party account
                        before enabling the Marketplace Wallet. If you're
                        interested in making the switch or need more
                        information, click the Help button in the Sellora Seller
                        Center menu bar to contact Sellora Support.
                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header">
                      <span>
                        I Am Using the Marketplace Wallet — Can I Link Multiple
                        Bank Accounts?
                      </span>
                      <span className="accordion-arrow">
                        <i className="fas fa-chevron-right" />
                      </span>
                    </div>
                    <div className="accordion-content">
                      <p>
                        No, you can only link one bank account to your
                        Marketplace Wallet at a time.
                      </p>
                      <p>
                        If you need to update or change your linked bank
                        account, click the Bank Account Information in the
                        Sellora Seller Center Setting icon.
                      </p>
                    </div>
                  </div>
                </div>
              </strong>
            </div>
            <strong></strong>
          </div>
          <strong>
            {/* ==============getting-started-section=open================ */}
          </strong>
        </div>
        
      </div>
     
    </div>
    
  </div>
  
</>

  )
}
 export default page