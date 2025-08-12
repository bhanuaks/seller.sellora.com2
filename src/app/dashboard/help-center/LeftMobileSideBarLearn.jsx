'use client'
import { baseUrl } from '@/Http/helper';
import Link from 'next/link';
import React, { useState } from 'react'

function LeftMobileSideBarLearn({hide}) {

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
      <Link href={`${baseUrl}dashboard/help-center/get-start`}>Get Started</Link>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <Link href={`${baseUrl}dashboard/help-center/brand-approval-body`}>Brand Approval</Link>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <Link href={`${baseUrl}dashboard/help-center/single-product-listing`}>Single Product Listing</Link>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <Link href={`${baseUrl}dashboard/help-center/list-products-in-bulk`}>List Products In Bulk</Link>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <Link href={`${baseUrl}dashboard/help-center/manual-campaign-body`}>Manual Campaign</Link>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <Link href={`${baseUrl}dashboard/help-center/smart-campaign-body`}>Smart Campaign</Link>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <Link href={`${baseUrl}dashboard/help-center/image-display-ads`}>Image Display Ads</Link>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <Link href={`${baseUrl}dashboard/help-center/video-display-ads`}>Video Display Ads</Link>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <Link href={`${baseUrl}dashboard/help-center/sale-event-body`}>Sale Event</Link>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <Link href={`${baseUrl}dashboard/help-center/discount-coupon`}>Discount Coupon</Link>
    </div>
  </li>
  <li>
    <div className="menu-header_10_7 faq_menu">
      <Link href={`${baseUrl}dashboard/help-center/influencers-marketing`}>Influencers Marketing</Link>
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

export default LeftMobileSideBarLearn