'use client'
import { baseUrl } from '@/Http/helper';
import Link from 'next/link';
import React, { useState } from 'react'

function LeftMobileSideBarFaq({hide}) {

const [isVisible, setIsVisible] = useState(false);

  const toggleDiv = () => {
    
    setIsVisible(!isVisible);
  };

  


  return (
    <>
    <div className="d-lg-none d-md-block">
          <button onClick={toggleDiv} className="filter_outer">
            <i className="far fa-bars" aria-hidden="true" /> Menu
          </button>
         {isVisible && (
          <div id="myDiv" style={{display:'block'}}>
            <div className="sidebar_10_7">
              <div className="marketplace">
                <h1>Marketplace Learn</h1>
              </div>
              <h2>Guides</h2>
              {hide == 1 ? null :
              <ul className="menu_10_7">
  <li>
    <div className="menu-header_10_7 faq_menu active_sub">
      <a href="customer-support.html">Customer Support</a>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <a href="listing-set-up.html">Listing Set Up</a>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <a href="taxes-n-payments.html">Taxes &amp; Payments</a>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <a href="reporting.html">Reporting</a>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <a href="policies-n-standards.html">Policies &amp; Standards</a>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <a href="growth-opportunities.html">Growth Opportunities</a>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <a href="returns-n-refunds.html">Returns &amp; Refunds</a>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <a href="getting-started.html">Getting Started</a>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <a href="seller-fulfillment-services.html">Seller Fulfillment Services</a>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <a href="promotions-overview.html">Promotions Overview</a>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <a href="catalog-management.html">Catalog Management</a>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <a href="advertising-overview.html">Advertising Overview</a>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <a href="order-management.html">Order Management</a>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <a href="listing-optimization.html">Listing Optimization</a>
    </div>
  </li>
</ul>

}
 
            </div>
          </div>

         )}
        </div>
    </>
  )
}

export default LeftMobileSideBarFaq