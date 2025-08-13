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
              <a href="#">Help </a>{" "}
            </li>
            <li>
              <a href="#">Policies &amp; Standards </a>{" "}
            </li>
            <li>
              <a href="#">Selling on Sellora – Fee Schedule</a>{" "}
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
              <a href="#">Help </a>{" "}
            </li>
            <li>
              <a href="#">Policies &amp; Standards </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Selling on Sellora – Fee Schedule
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
              

             
  

<>
  <h2>Selling on Sellora – Fee Schedule</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>What is a Referral Fee?</li>
    <li>What is a product category?</li>
    <li>Where can I find my Referral Fee?</li>
    <li>Referral Fee schedule</li>
    <li>Order Cancellation Charge</li>
    <li>Order Return Charges</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      As a Marketplace seller on Sellora, you are required to pay a Referral Fee
      for every product sold. This fee is calculated based on the product
      category (also referred to as the product type) assigned to your item.
      Each product type has a specific referral fee percentage, which is applied
      to the total sales price paid by the customer, including the item price
      and any shipping or gift wrap charges.
      <br />
      Be sure to refer to the most recent Sellora Referral Fee Schedule to
      ensure accurate pricing and fee deductions for your listings. Properly
      categorizing your products helps ensure correct fee application and smooth
      processing of your sales.
    </p>
  </div>
  <h3>What Are Referral Fees?</h3>
  <p>
    A referral fee is a small percentage of the total selling price of a product
    that Sellora charges for connecting you with our vast customer base.
  </p>
  <h3>What Is a Product Category?</h3>
  <p>
    A product category (also known as a product type) refers to the
    classification assigned to a product based on what it is and how it is sold
    on the Sellora Marketplace. Since referral fees vary by category, it's
    important to know which contract category your items fall under. Each
    contract category has a specific referral fee rate, so assigning your
    product to the correct category ensures accurate fee calculations and helps
    improve listing visibility and compliance with marketplace standards.&nbsp;
  </p>
  <h3>Where Can I Find My Referral Fee?</h3>
  <p>
    To view your referral fee details, go to your{" "}
    <strong> Fees &amp; Commission</strong> page in the{" "}
    <strong> Sellora Seller Login Dashboard</strong>&nbsp;
  </p>
  <ul>
    <li>
      The <strong> Product Category</strong> column shows the assigned category
      for each of your products.
    </li>
    <li>
      The <strong> Commission Rate</strong> column displays the{" "}
      <strong>Referral Fee percentage </strong> applied to each item based on
      its Product category.
    </li>
  </ul>
  <h3>Referral Fee Schedule</h3>
  <p>
    The Sellora Marketplace Referral Fee schedule for Product categories is
    listed below.{" "}
  </p>
  <div className="table-container2">
    <table>
      <thead>
        <tr>
          <th width="33%">Product category</th>
          <th width="33%">Referral fee percentage</th>
          <th width="33%">Referral fee minimum amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
              {" "}
              <li>Apparel &amp; Accessories</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                10% for items with a total sales price of $15 or less 12.5% for
                items with a total sales price between $15 &gt; $20 15% for
                items with a total sales price greater than $20 12% for
                backpacks
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li>$0.30</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              {" "}
              <li>Beauty &amp; Personal care</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                7% for items with a total sales price of $10 or less 12% for
                items with a total sales price greater than $10
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li>$0.30</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              {" "}
              <li>Books</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>10%</li>
            </ul>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <ul>
              {" "}
              <li>Electronics Accessories</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                10% for the portion of the total sales price up to $100 7% for
                the portion of the total sales price greater than $100
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li>$0.30</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              {" "}
              <li>Furniture</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>12% on the first $200 10% on amounts over $200</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>$0.30</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              {" "}
              <li>Garden &amp; Outdoor</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>12%</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>$0.30</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              {" "}
              <li>Home &amp; Kitchen</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>12%</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>$0.30</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              {" "}
              <li>GIndustrial &amp; Professional</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>10%</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>$0.30</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              {" "}
              <li>Jewelry &amp; Shoes</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                15% for the portion of the total sales price up to $250 10% for
                the portion of the total sales price greater than $250
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li>$0.30</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              {" "}
              <li>Luxury</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>15%</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>$0.30</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              {" "}
              <li>Garden &amp; Outdoor</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                The standard rate is 12%, except it is 7% for Calculators and
                10% for Printer Cartridges
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li>$0.30</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              {" "}
              <li>Organic</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>10%</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>$0.30</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              {" "}
              <li>Toys &amp; Games</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>12%</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>$0.30</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="notes_11">
    <h3>Notes</h3>
    <p>
      <strong> 0% commission and fees for a limited time period.</strong>
    </p>
  </div>
  <h3>Order Cancellation Charge</h3>
  <p>
    Sellora enforces a strict Order Cancellation Charges policy to ensure a
    reliable and trustworthy experience for all customers. If a seller cancels
    an order—whether before it is confirmed or after confirmation—{" "}
    <strong>
      Sellora will charge a penalty equal to 100% of the commission fee
    </strong>{" "}
    that would have applied to that order. This means the full commission amount
    will be deducted from the seller, even if the order is not fulfilled.
  </p>
  <h3>Order Return Charges</h3>
  <p>
    Sellora charges a <strong>return fee equal to 25% of the commission</strong>{" "}
    when a buyer returns a product. This means that if an item is returned by
    the customer for any reason under Sellora’s return policy, the seller will
    be charged 25% of the original commission amount as a return handling fee.
    For example, if the commission on a particular order was $20, Sellora will
    deduct <strong>$5</strong> as a return charge from the seller’s
    account.&nbsp;
  </p>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>Can I Sell Items from Multiple Product Categories?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          <strong>Yes</strong>, you can list and sell products from{" "}
          <strong> multiple Product categories</strong> on the Sellora
          Marketplace. Each item will be assigned its appropriate Product
          category, and the corresponding
          <strong>referral fee</strong> will apply based on that category.
          <br />
          This allows you to diversify your product catalog and expand your
          business across different categories while managing all your listings
          from a single seller account.
        </p>
      </div>
    </div>
    
  </div>
</>








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