'use client'
import React, { useEffect, useState } from 'react'
import LeftSideBar from '../LeftSideBar';
import LeftMobileSideBar from '../LeftMobileSideBar';
import SearchBox from '../SearchBox';
import { usePathname } from 'next/navigation';
import { initAccordion } from '../menuListeners';

export default function page() {


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
                  Start Selling with Sellora
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
                        Start Selling with Sellora
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
              <h2>Start Selling with Sellora</h2>
              <h3>In this guide</h3>
              <ul className="clean-decorative-list">
                <li>Overview</li>
                <li>How does it work?</li>
                <li>Frequently asked questions</li>
              </ul>
              <div className="section-box">
                <h3>Overview</h3>
                <p>
                  Sellora’s <strong>New-Seller</strong> Savings program offers{" "}
                  <strong>incentives and benefits</strong>, including{" "}
                  <strong>0% commission on sales for a limited time</strong>, to
                  help you successfully launch and scale your business on
                  Sellora.com. This guide explains the program details and how
                  these savings can accelerate your growth on the Sellora
                  Marketplace.
                </p>
              </div>
              <h3>How does it work?</h3>
              <p>
                Once you sign up to sell on Sellora Marketplace, you’ll become
                eligible to receive savings*—based on your use of qualifying
                Sellora solutions. The table below outlines the specific offers
                available and the powerful Marketplace tools designed to help
                you scale your business while maximizing your savings.
              </p>
              <div className="table-container2">
                <table>
                  <thead>
                    <tr>
                      <th>Product category</th>
                      <th>Referral fee percentage</th>
                      <th style={{ minWidth: 250 }}>
                        Referral fee minimum amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Apparel &amp; Accessories</td>
                      <td>
                        5% for items with a total sales price of $15 or less
                        <br />
                        10% for items with a total sales price between $15–$20
                        <br />
                        10% for items with a total sales price greater than $20
                        <br />
                        12% for backpacks
                      </td>
                      <td>$0.30</td>
                    </tr>
                    <tr>
                      <td>Beauty &amp; Personal care</td>
                      <td>
                        7% for items with a total sales price of $10 or less
                        <br />
                        12% for items with a total sales price greater than $10
                      </td>
                      <td>$0.30</td>
                    </tr>
                    <tr>
                      <td>Books</td>
                      <td>10%</td>
                      <td>$0.30</td>
                    </tr>
                    <tr>
                      <td>Electronics Accessories</td>
                      <td>
                        10% for the portion of the total sales price up to $100
                        <br />
                        7% for the portion of the total sales price greater than
                        $100
                      </td>
                      <td>$0.30</td>
                    </tr>
                    <tr>
                      <td>Furniture</td>
                      <td>
                        12% on the first $200
                        <br />
                        10% on amounts over $200
                      </td>
                      <td>$0.30</td>
                    </tr>
                    <tr>
                      <td>Garden &amp; Outdoor</td>
                      <td>12%</td>
                      <td>$0.30</td>
                    </tr>
                    <tr>
                      <td>Home &amp; Kitchen</td>
                      <td>12%</td>
                      <td>$0.30</td>
                    </tr>
                    <tr>
                      <td>Industrial &amp; Professional</td>
                      <td>10%</td>
                      <td>$0.30</td>
                    </tr>
                    <tr>
                      <td>Jewelry &amp; Shoes</td>
                      <td>
                        15% for the portion of the total sales price up to $250
                        7% for the portion of the total sales price greater than
                        $250
                      </td>
                      <td>$0.30</td>
                    </tr>
                    <tr>
                      <td>Luxury</td>
                      <td>15%</td>
                      <td>$0.30</td>
                    </tr>
                    <tr>
                      <td>Office Product &amp; Stationery</td>
                      <td>
                        12% except 7% for Calculators and 10% for Printer
                        Cartridges
                      </td>
                      <td>$0.30</td>
                    </tr>
                    <tr>
                      <td>Organic</td>
                      <td>10%</td>
                      <td>$0.30</td>
                    </tr>
                    <tr>
                      <td>Toys &amp; Games</td>
                      <td>12%</td>
                      <td>$0.30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <strong>Note:</strong> 0% commission and fees for a limited time
                period.
              </p>
              <h2>Frequently asked questions</h2>
              <div className="faq-container">
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      What is the go-live date for participating sellers?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      To qualify for the New-Seller Savings program, all
                      eligible sellers must have their stores go live on or
                      after February 1, 2025.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>How do I enroll in this program?</span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      No action is required—eligible new sellers are
                      automatically enrolled in the New-Seller Savings program
                      for up to 12 months from their go-live date. The program
                      is available through January 31, 2026.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      I’m an international seller. Can I still join Sellora
                      Marketplace with New-Seller Savings?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      Yes. The U.S. Marketplace is open to sellers based in the
                      following countries: Canada, Chile, China, Germany, India,
                      Japan, Mexico, Singapore, South Korea, Thailand, Turkey,
                      United States, United Kingdom, and Vietnam.
                    </p>
                    <p>
                      If you're located in one of these countries, you may be
                      eligible for the New-Seller Savings program. When prompted
                      for a U.S. Business Tax ID, simply indicate that you don’t
                      have one—you’ll be able to submit an alternative form for
                      business verification.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      What are the minimum qualifications to join Sellora
                      Marketplace?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      To join Sellora Marketplace, you’ll need to meet the
                      following basic requirements:
                    </p>
                    <ul>
                      <li>Business Tax ID (EIN) or Business License Number.</li>
                      <li>
                        Supporting documents that verify your Business Name and
                        Address.
                      </li>
                      <li>
                        Have GTIN/UPC codes or GS1 Company Prefix identifiers.
                      </li>
                      <li>
                        Catalog that follows Sellora's Prohibited Products
                        Policy.
                      </li>
                      <li>
                        Sellora Fulfillment Services (SFS) or another
                        B2C&amp;B2C U.S. warehouse that supports returns and
                        meets our
                      </li>
                      <li>Seller Performance Standards.</li>
                    </ul>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      What are the benefits of advertising with Sellora Connect?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      Sellora Connect helps you grow your brand and drive sales
                      through targeted advertising. Key benefits include:
                    </p>
                    <ul>
                      <li>
                        <strong>Sponsored Product Ads:</strong> Boost product
                        visibility and reach high-intent shoppers across
                        Sellora’s platform.
                      </li>
                      <li>
                        <strong>Sales Growth:</strong> Increase product
                        discoverability and conversions with strategic ad
                        placement.
                      </li>
                      <li>
                        <strong>Campaign Optimization:</strong> Monitor ad
                        performance in real time and refine your strategy using
                        actionable insights.
                      </li>
                      <li>
                        <strong>Smart Keyword Targeting:</strong> Identify and
                        prioritize high-performing keywords to drive better ROI
                        and reduce unnecessary ad spend.
                      </li>
                    </ul>
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
