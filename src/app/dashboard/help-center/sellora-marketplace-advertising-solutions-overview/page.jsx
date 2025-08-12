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
                  Sellora Marketplace advertising solutions: Overview
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
                        Sellora Marketplace advertising solutions: Overview
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
              <h2>Sellora Marketplace advertising solutions: Overview</h2>
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
                  As a Sellora Marketplace seller, you have access to a variety
                  of advertising tools designed to increase your product
                  visibility and reach more potential customers.
                </p>
                <p>
                  In this guide, you’ll learn about the different types of
                  advertising solutions available on Sellora, how they work, and
                  how to get started with promoting your brand and products
                  effectively across the platform.
                </p>
              </div>
              <h3>How does it work?</h3>
              <p>
                Each advertising solution on <strong>Sellora.com</strong>{" "}
                functions differently, giving you multiple ways to boost
                visibility and sales.
              </p>
              <p>
                With <strong>Sellora Advertising Solutions</strong>, you can
                access exclusive ad placements such as:
              </p>
              <ul>
                <li>
                  <strong>Sponsored Search</strong> – Appear at the top of
                  search results on Sellora.com
                </li>
                <li>
                  <strong>Display Ads</strong> – Promote your products across
                  high-traffic pages
                </li>
              </ul>
              <div className="table-container2">
                <table>
                  <thead>
                    <tr>
                      <th width="50%">Advertising solution</th>
                      <th width="50%">Learn more</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sponsored Search</td>
                      <td>
                        Reach customers who are actively searching for products
                        like yours on <strong>Sellora.com.</strong> Sponsored
                        Search ads appear prominently in search results, helping
                        increase visibility, clicks, and conversions.
                      </td>
                    </tr>
                    <tr>
                      <td>Display</td>
                      <td>
                        Engage shoppers with{" "}
                        <strong>personalized display ads</strong> at every stage
                        of their buying journey on <strong>Sellora.com.</strong>{" "}
                        These ads appear across high-traffic areas of the site,
                        helping you build brand awareness and influence purchase
                        decisions.
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
                      Can I Use All Sellora Advertising Solutions at the Same
                      Time?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      Yes. If you meet the eligibility requirements, you can use
                      any combination of Sellora advertising solutions
                      simultaneously. This allows you to maximize your brand
                      visibility and drive sales by targeting customers across
                      multiple touchpoints—search results, product pages, and
                      beyond.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    {" "}
                    <span>
                      What’s the difference between Seller Center and Walmart
                      Connect Ad Center?
                    </span>{" "}
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>{" "}
                  </div>
                  <div className="accordion-content">
                    <p>
                      Seller Center is the primary platform you use to{" "}
                      <strong>manage your Sellora Marketplace account</strong>,
                      including your product listings, inventory, orders, and{" "}
                      <strong>self-service advertising tools</strong> such as{" "}
                      <strong>Search Engine Marketing (SEM)</strong> and{" "}
                      <strong>Sales Rewards &amp; Attribution</strong>.
                    </p>
                    <p>
                      The <strong>Sellora Ad Center</strong>, on the other hand,
                      is a specialized platform for launching and managing{" "}
                      <strong>Sellora advertising campaigns</strong>, including:
                    </p>
                    <ul>
                      <li>
                        <strong>Sponsored Search</strong>
                      </li>
                      <li>
                        <strong>Onsite Display Ads</strong>
                      </li>
                    </ul>
                    <p>
                      While basic advertising options are accessible through
                      Seller Center, the <strong>Sellora Ad Center</strong>{" "}
                      offers more advanced tools and insights to help you get
                      the most out of your advertising efforts.
                    </p>
                    <p>
                      For full details, visit the <strong>Advertising</strong>{" "}
                      section in your Seller Center dashboard
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
