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
                  How to update seller-fulfilled inventory: Overview
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
                        How to update seller-fulfilled inventory: Overview
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
              <h2>How to update seller-fulfilled inventory: Overview</h2>
              <h3>In this guide</h3>
              <ul className="clean-decorative-list">
                <li>Overview</li>
                <li>How does it work?</li>
                <li>Frequently asked questions</li>
                <li>Helpful resources</li>
              </ul>
              <div className="section-box">
                <h3>Overview</h3>
                <p>
                  Keeping your inventory up to date is essential to ensure your
                  products remain available for purchase on{" "}
                  <strong>Sellora.com</strong> and do not go out of stock.
                  Accurate inventory management helps improve customer
                  satisfaction and boost sales.
                </p>
                <p>
                  In this guide, we’ll provide an overview of{" "}
                  <strong>four different methods</strong> you can use to update
                  your inventory effectively through the{" "}
                  <strong>Sellora Seller Center</strong>.
                </p>
              </div>
              <h3>How It Works on Sellora.com</h3>
              <p>
                When your inventory levels start to run low, it's important to{" "}
                <strong>update your inventory counts</strong> in the{" "}
                <strong>Sellora Seller Center</strong>.
              </p>
              <p>
                Keeping accurate inventory data ensures your products remain
                active and available for purchase, helping you avoid missed
                sales and stockouts.
              </p>
              <h3>Step 1 – Get started</h3>
              <ul>
                <li>
                  Click on <strong>Listing</strong>, then select{" "}
                  <strong>My Listing</strong>.
                </li>
                <li>
                  Click <strong>Edit Listing</strong> for the item you want to
                  update.
                </li>
                <li>
                  Enter the updated <strong>stock quantity</strong>.
                </li>
                <li>
                  Click <strong>Save All</strong> to apply and update your
                  stock.
                </li>
              </ul>
              <h3>Frequently asked questions</h3>
              <div className="faq-container">
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      Why Is My Item Showing as Out of Stock on Sellora.com?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      If your item is appearing as out of stock, it could be due
                      to one of the following reasons:
                    </p>
                    <ul>
                      <li>
                        Stock Not Updated: Your on-hand inventory quantity may
                        be set to zero or has not been updated.
                      </li>
                      <li>
                        To fix this, go to <strong>My Listing</strong>, update
                        your stock quantity, and click <strong>Save All</strong>
                        . Allow a short time for the changes to appear.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      Why Is My Item Still Showing as In Stock After Setting On
                      Hand Inventory to Zero?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      If you’ve recently updated your own inventory to zero, it
                      may take up to four hours for the change to reflect on
                      Sellora.com. This brief delay is due to system processing
                      time. Please allow a few hours before verifying the update
                      on your product listing.
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
