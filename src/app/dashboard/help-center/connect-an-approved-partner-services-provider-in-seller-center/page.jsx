'use client'
import React, { useEffect, useState } from 'react'
import LeftSideBar from '../LeftSideBar';
import LeftMobileSideBar from '../LeftMobileSideBar';
import SearchBox from '../SearchBox';
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
                  Connect an approved Partner Services Provider in Seller Center
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
                        Connect an approved Partner Services Provider in Seller
                        Center
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
              <h2>
                Connect an approved Partner Services Provider in Seller Center
              </h2>
              <h3>In this guide</h3>
              <ul className="clean-decorative-list">
                <li>Overview</li>
                <li>Connect an approved Solution Provider</li>
                <li>Frequently asked questions</li>
              </ul>
              <div className="section-box">
                <h3>Overview</h3>
                <p>
                  If you work with an approved Partner Services Provider to
                  manage your Sellora Marketplace business, you can set up your
                  approved Partner Services Provider integration through the App
                  Store in Seller Center. In this guide, we’ll show you how to
                  connect an approved Partner Services Provider.
                </p>
              </div>
              <h3>Connect an approved Partner Services Provider</h3>
              <h3>Step 1 – Get started</h3>
              <ul>
                <li>
                  Click on the Partner Services tab in your Seller Center
                  dashboard.
                  <ul>
                    <li>
                      Browse the available service categories such as:
                      <ul>
                        <li>Account Management</li>
                        <li>Cataloging</li>
                        <li>Taxation</li>
                        <li>Advertising</li>
                        <li>Imaging</li>
                        <li>Seller Training</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <p>Click on the category of the service you need.</p>
              <p>
                Then, select a Service Provider based on your requirement and
                start the engagement process.
              </p>
              <div className="notes_11">
                <h3>Notes</h3>
                <p>
                  Not all approved Solution Providers can be connected via the
                  App Store at this time.
                </p>
              </div>
              <h3>
                Step 2 – Submitting a Request to a Partner Services Provider
              </h3>
              <p>
                Once you’ve selected an{" "}
                <strong>approved Partner Services Provider</strong> on{" "}
                <strong>Sellora.com</strong>, follow these steps to submit your
                request:
              </p>
              <ul>
                <li>
                  Click <strong>Request a Quote</strong> next to the selected
                  provider.
                </li>
                <li>
                  Select your <strong>Service Requirement</strong> from the
                  dropdown (e.g., Cataloging, Advertising, etc.).
                </li>
                <li>
                  In the <strong>Description field</strong>, clearly describe
                  your service needs.
                </li>
                <li>
                  Enter your <strong>Email ID</strong> and{" "}
                  <strong>Mobile Number</strong>.
                </li>
                <li>
                  Click <strong>Save</strong> to submit your request.
                </li>
              </ul>
              <p>
                Your request will be sent directly to the{" "}
                <strong>Partner Services Provider</strong>, who will review your
                details and reach out to you shortly.
              </p>
              <h3>Frequently asked questions</h3>
              <div className="faq-container">
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      Can I disconnect an approved Partner Services Provider
                      using the App Store in the Seller Center?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      Yes, you can disconnect an approved Partner Services
                      Provider through the Seller Center. To do this, navigate
                      to the Partner Services section in your Seller Center
                      account, select the provider you want to disconnect, and
                      follow the prompts to remove or disconnect the service. If
                      you encounter any issues or need assistance, you can
                      contact Seller Support for help.
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
