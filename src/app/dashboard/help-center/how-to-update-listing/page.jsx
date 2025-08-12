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
                  How to update listing
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
                        How to update listing
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
              <h2>How to update listing</h2>
              <h3>In this guide</h3>
              <ul className="clean-decorative-list">
                <li>Overview</li>
                <li>How does it work?</li>
                <li>Frequently asked questions</li>
              </ul>
              <div className="section-box">
                <h3>Overview</h3>
                <p>
                  Keeping your Listing on Sellora.com up to date with accurate,
                  relevant, and engaging product content is essential for
                  delivering a seamless shopping experience. Whether you need to
                  update an item’s description, images, or other product
                  details, Sellora provides multiple ways to manage and edit
                  your listings easily.
                </p>
                <p>
                  This guide provides an overview of the different methods
                  available to update your product content effectively on
                  Sellora.com.
                </p>
              </div>
              <h3>How It Works on Sellora.com</h3>
              <p>
                On Sellora.com, multiple sellers may offer the same product. In
                such cases, the platform uses an algorithm to determine the most
                accurate and high-quality content to display. This ensures
                customers see the best possible product information.
              </p>
              <p>
                If you're a brand owner or an authorized reseller, your content
                will generally take priority. However, for items where content
                is controlled by the platform or a verified brand source, you
                may notice that certain fields are locked during the update
                process. These locked fields cannot be edited unless you have
                the appropriate content ownership rights.
              </p>
              <div className="table-container2">
                <table>
                  <thead>
                    <tr>
                      <th width="50%">Method</th>
                      <th width="50%">Use case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ul>
                          <li>Single Item Update method</li>
                        </ul>
                      </td>
                      <td>
                        If you need to make quick updates to just a few
                        products, you can easily update content directly from
                        your <strong>Catalog</strong> in the{" "}
                        <strong>Sellora Seller Center</strong>. This method is
                        ideal for minor edits like adjusting a product title,
                        description, or image.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          <li>Bulk Update method</li>
                        </ul>
                      </td>
                      <td>
                        To update multiple products at once, use one of the{" "}
                        <strong>bulk update</strong> options available in the{" "}
                        <strong>Sellora Seller Center</strong>. This method is
                        efficient for editing content like titles, descriptions,
                        images, or attributes across a large number of listings.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3>Frequently asked questions</h3>
              <div className="faq-container">
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      If I am a brand owner, how can I claim ownership of my
                      brand content?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      If you are a brand owner, you can request content
                      ownership for your approved branded items. If you have an
                      account manager, please contact them directly. If you do
                      not have an account manager, click the{" "}
                      <strong>Help</strong> button in the Seller Center menu bar
                      to reach out to Support.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      Why Can’t I Submit Changes to My Item’s Content?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      On Sellora.com, if multiple sellers provide content for
                      the same product, you may not always have control over
                      which content appears on the product page.
                    </p>
                    <p>
                      The platform automatically selects the highest-quality and
                      most relevant content, unless the content comes directly
                      from a brand owner or authorized reseller, which is given
                      priority.
                    </p>
                    <p>
                      If a product is locked during the update process, it means
                      the content cannot be edited—either due to platform
                      restrictions or existing ownership rights.
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