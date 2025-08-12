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
              <a href="#">Help </a>{" "}
            </li>
            <li>
              <a href="#"> Listing Set Up </a>{" "}
            </li>
            <li>
              <a href="#"> Listing content, image</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                The Buy Box
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
              <a href="#">Help </a>{" "}
            </li>
            <li>
              <a href="#"> Listing Set Up </a>{" "}
            </li>
            <li>
              <a href="#"> Listing content, images </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                The Buy Box
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
  <h2>The Buy Box</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How does it work?</li>
    <li>Additional guidelines</li>
    <li>Frequently asked questions</li>
    <li>Helpful resources</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box mt-5">
    <h3 className=" ">Overview</h3>
    <p>
      On <strong>Sellora Marketplace, </strong> multiple sellers can list the
      same product under one product detail page. However, only
      <strong> one seller's offer </strong> is featured in the
      <strong> Buy Box:</strong>which is the section that includes the
      <strong>“Add to Cart</strong> and <strong>Buy Now”</strong> buttons.
      Winning the Buy Box significantly improves the visibility of your offer,
      <strong>increases the chances of customer purchases,</strong> and helps
      build <strong>buyer trust.</strong>{" "}
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4>How does it work?</h4>
    <p>
      The Buy Box winner is generally the listing that offers the best value to
      the customer, based on their geographic location. Seloora analyzes all
      attributes of your offer when determining the Buy Box winner including
      your offer’s price, shipping fee, delivery speed, your seller performance
      metrics and the customer’s experience. The Buy Box is located above the
      Add to cart button on the item page, where a majority of purchases occur.
      Below is an example.
    </p>
  </div>
  <div className="img">
    <img src={`${baseUrl}front/assets/images/the-buy-box.png`} alt="" />
  </div>
  <div className="aditional-guideline">
    <h4>Notes</h4>
    <p>
      In certain cases where the offer is priced substantially in excess of
      prices currently or recently offered on Sellora.com or on competing sites,
      but not at a level requiring automatic unpublishing, we’ll remove the Add
      to cart button, as well as the offer details such as price and shipping
      from the item page. Customers can still purchase the item via the more
      seller options transaction flow.&nbsp; For more information, visit Pricing
      rules.
    </p>
  </div>
  <div className="container">
    <h4>Additional guidelines</h4>
    <p>
      The following tools are available to help you learn more about your Buy
      Box offer:
    </p>
    <div className="table-container2">
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Learn more</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pricing insights dashboard</td>
            <td>
              <ul>
                <li>
                  Use the Pricing Insights dashboard to track your overall Buy
                  Box win rate or track it by item. Compare your item’s current
                  price with the price of the Buy Box winner to understand how
                  competitive your pricing is
                </li>
                <li>
                  {" "}
                  You can also view historical insights to analyze how you’ve
                  been winning the Buy Box over time.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Buy Box report</td>
            <td>
              <ul>
                <li>
                  The Buy Box report gives you an overview of your products that
                  have competed for the Buy Box including their SKUs, it shows
                  whether or not you won and more.
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</>






            </div>
          </div>

<>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>
          Why isn’t my Add to cart button showing on the item page?
        </span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          In certain cases, if your offer is not eligible to win the Buy Box,
          we’ll remove the Add to cart button, as well as the offer details such
          as price and shipping from the item page. Customers can still purchase
          the item via the more seller options transaction flow.
        </p>
      </div>
    </div>
  </div>
</>



          {/* ==============getting-started-section=open================ */}
        </div>
        
      </div>
    </div>
  </div>
</>

  )
}

export default page