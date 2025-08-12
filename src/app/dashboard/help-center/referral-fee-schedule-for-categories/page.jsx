'use client'
import React, { useEffect, useState } from 'react'
import LeftSideBar from '../leftSideBar';
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
                  Referral Fee Schedule for Product Categories
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
                        Referral Fee Schedule for Product Categories
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
              <h2>Referral Fee Schedule for Product Categories</h2>
              <h3>In this guide</h3>
              <ul className="clean-decorative-list">
                <li>Overview</li>
                <li>What is a Referral Fee?</li>
                <li>What is a product category?</li>
                <li>Where can I find my Referral Fee?</li>
                <li>Referral Fee schedule</li>
                <li>Frequently asked questions</li>
              </ul>
              <div className="section-box">
                <h3>Overview</h3>
                <p>
                  As a Marketplace seller on Sellora, you are required to pay a
                  Referral Fee for every product sold. This fee is calculated
                  based on the product category (also referred to as the product
                  type) assigned to your item. Each product type has a specific
                  referral fee percentage, which is applied to the total sales
                  price paid by the customer, including the item price and any
                  shipping or gift wrap charges.
                </p>
                <p>
                  Be sure to refer to the most recent Sellora Referral Fee
                  Schedule to ensure accurate pricing and fee deductions for
                  your listings. Properly categorizing your products helps
                  ensure correct fee application and smooth processing of your
                  sales.
                </p>
              </div>
              <h3>What Are Referral Fees?</h3>
              <p>
                A referral fee is a small percentage of the total selling price
                of a product that Sellora charges for connecting you with our
                vast customer base.
              </p>
              <h3>What Is a Product Category?</h3>
              <p>
                A product category (also known as a product type) refers to the
                classification assigned to a product based on what it is and how
                it is sold on the Sellora Marketplace. Since referral fees vary
                by category, it's important to know which contract category your
                items fall under. Each contract category has a specific referral
                fee rate, so assigning your product to the correct category
                ensures accurate fee calculations and helps improve listing
                visibility and compliance with marketplace standards.
              </p>
              <h3>Where Can I Find My Referral Fee?</h3>
              <p>
                To view your referral fee details, go to your Fees &amp;
                Commission page in the Sellora Seller Login Dashboard
              </p>
              <ul>
                <li>
                  The Product Category column shows the assigned category for
                  each of your products.
                </li>
                <li>
                  The Commission Rate column displays the Referral Fee
                  percentage applied to each item based on its Product category.
                </li>
              </ul>
              <h3>Referral Fee Schedule</h3>
              <p>
                The Sellora Marketplace Referral Fee schedule for Product
                categories is listed below.
              </p>
              <div className="table-container2">
                <table>
                  <thead>
                    <tr>
                      <th width="50%">Product category</th>
                      <th width="50%">Referral Fee percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ul>
                          <li>Apparel &amp; Accessories</li>
                        </ul>
                      </td>
                      <td>
                        5% for items with a total sales price of $15 or less 10%
                        for items with a total sales price between $15 $20 10%
                        for items with a total sales price greater than $20 12%
                        for backpacks
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          <li>Beauty &amp; Personal care</li>
                        </ul>
                      </td>
                      <td>
                        7% for items with a total sales price of $10 or less 12%
                        for items with a total sales price greater than $10
                      </td>
                    </tr>
                    <tr>
                      <td>Books</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>Electronics Accessories</td>
                      <td>
                        10% for the portion of the total sales price up to $100
                        7% for the portion of the total sales price greater than
                        $100
                      </td>
                    </tr>
                    <tr>
                      <td>Furniture</td>
                      <td>12% on the first $200 10% on amounts over $200</td>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          <li>Garden &amp; Outdoor</li>
                        </ul>
                      </td>
                      <td>12%</td>
                    </tr>
                    <tr>
                      <td>Home &amp; Kitchen</td>
                      <td>12%</td>
                    </tr>
                    <tr>
                      <td>Industrial &amp; Professional</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>Jewelry &amp; Shoes</td>
                      <td>
                        15% for the portion of the total sales price up to $250
                        7% for the portion of the total sales price greater than
                        $250
                      </td>
                    </tr>
                    <tr>
                      <td>Luxury</td>
                      <td>15%</td>
                    </tr>
                    <tr>
                      <td>Office Product &amp; Stationery</td>
                      <td>
                        12% except 7% for Calculators and 10% for Printer
                        Cartridges
                      </td>
                    </tr>
                    <tr>
                      <td>Organic</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>Toys &amp; Games</td>
                      <td>12%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="notes_11">
                <h3>Notes</h3>
                <p>0% commission and fees for a limited time period.</p>
              </div>
              <h2>Frequently asked questions</h2>
              <div className="faq-container">
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      Can I Sell Items from Multiple Product Categories?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      Yes, you can list and sell products from{" "}
                      <strong>multiple Product categories</strong> on the
                      Sellora Marketplace. Each item will be assigned its
                      appropriate Product category, and the corresponding
                      referral fee will apply based on that category.
                    </p>
                    <p>
                      This allows you to diversify your product catalog and
                      expand your business across different categories while
                      managing all your listings from a single seller account.
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