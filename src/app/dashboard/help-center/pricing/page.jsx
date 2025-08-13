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
              <a href="#"> Listing Set Up </a>{" "}
            </li>
            <li>
              <a href="#"> Listing content, image</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Pricing
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
                Pricing
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
  <h2>Pricing</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>What is the policy?</li>
    <li>Frequently asked questions</li>
    <li>Helpful resources</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box mt-5">
    <h3 className=" ">Overview</h3>
    <p>
      At Sellora, we’ve enacted automated rules that identify and remove offers
      from Sellora.com that are so highly uncompetitive or unfairly priced they
      could potentially harm customers and impact the overall shopping
      experience. Failure to adhere to the pricing rules or other Sellora
      Marketplace retailer policies may result in account suspension and or
      termination. In this guide, you’ll learn more about these rules.
    </p>
  </div>
  <h3>What is the policy?</h3>
  <p>
    The Pricing Rule will automatically unpublish offers from Sellora
    Marketplace that are priced egregiously higher than prices currently or
    recently offered for the same item on Sellora.com,&nbsp; a competing website
    or priced at a level that could potentially be viewed as price gouging, or
    other unfair or abusive pricing practices. Sellora reviews the offer’s
    listing price and shipping fee to determine whether an offer is compliant
    with our Pricing Rule.&nbsp;
    <br />
    If any offers are flagged by this Pricing Rule, Sellora automatically
    unpublished the offer in question. If you’ve subscribed to Seller Center
    notifications,you’ll be notified via email and in the Seller Center.
    Alternatively, you can check the Unpublished Items dashboard or download an
    item report in Seller Center to identify which items have been affected. The
    reason code will be listed as Reasonable Price Not Satisfied in the report.
  </p>
  <h3>Buy Box Ineligibility</h3>
  <p>
    Sellora’s Buy Box features an offer based on factors like competitive
    pricing, shipping speed, shipping cost, inventory in-stock rates,
    high-quality listing content and post-purchase customer experience. In
    certain cases where the offer is priced substantially higher than prices
    currently or recently offered on Sellora.com or on competing sites, but not
    at a level requiring automatic unpublishing, we’ll remove the Add to Cart
    button, as well as the offer details such as price and shipping from the
    item page. Customers can still purchase the item via the More Seller
    Options transaction flow.&nbsp;&nbsp;&nbsp;
    <br />
    This policy protects customers and Marketplace sellers. If your item is
    flagged by this rule, you can generate an Item Reporting Seller Center to
    identify affected items or if you’ve subscribed toSeller Center
    notifications, you’ll be notified via email and in Seller Center. If an item
    is not eligible for Buy Box, the Buy Box eligible column will be displayed
    as “No” in the Item Report.&nbsp;
  </p>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>
          My offer was unpublished due to the Pricing Rule. How can I republish
          my offer?
        </span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          If prices change on Sellora.com or monitored competing websites and
          the item now adheres to the pricing rules, Sellora will automatically
          republish the offer, typically within 48 hours. You can also
          proactively update your price. If your offer remains unpublished after
          you've submitted a more competitive price, continue to adjust the
          price until your item no longer violates the Pricing Rule. For any
          unpublished item, you can also find a Reference price on the
          Unpublished Items dashboard. You may use this reference price to help
          you update your listing to a more competitive price and get your item
          republished. Sellora calculates the reference price for each item
          using multiple external signals, such as the match price from
          competitor websites, historical selling price, Buy Box winner price,
          average offer price and Sellora e-commerce and store price.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>
          My offer was unpublished due to a pricing error. What should I do?
        </span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          In certain cases, Sellora may automatically unpublish offers that have
          been priced too low, to protect you from unintended losses and
          customers from experiencing cancellations. The reason code listed for
          such items is Pricing Error. In such a case, use the Reference price
          or other provided price signals as a reasonable benchmark or reference
          to increase price until it no longer violates the Pricing Rule. When
          the price is adhering to the pricing rules, Sellora will automatically
          republish the offer, which typically takes up to 48 hours. If you
          intended to set a price that appears to be unintentionally low
          compared to the usual selling price, you may submit relevant
          documentation to demonstrate that the price is intentional and
          complies with Sellora’s Pricing Rules. To do this, select the Help
          button in the Seller Center menu bar to contact Support. Sellora will
          review such documentation at its sole discretion and may, but is not
          obligated to, reinstate the offer if it determines that the price does
          not violate its policies.&nbsp;&nbsp;
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>
          Can I include my shipping fee in the item price itself?
        </span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          While you’re allowed to include your shipping fee in the item price,
          including it may cause the price to become egregiously high compared
          to prices offered for the same item on Sellora.com or external
          competing websites. In such cases, your offer may be flagged as a
          violation of our Pricing Rules and, therefore, unpublished or
          ineligible for the Buy Box.&nbsp;Update the shipping fees in your
          Shipping Template for both your item price and the shipping fee to be
          competitive and avoid a Pricing Rule violation.
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