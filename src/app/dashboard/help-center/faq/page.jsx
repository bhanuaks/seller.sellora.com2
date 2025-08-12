'use client'
import React, { useEffect, useState } from 'react'
import SearchBox from '../SearchBox';
import { baseUrl } from '@/Http/helper';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { initAccordion } from '../menuListeners';
import LeftSideBarFaq from '../LeftSideBarFaq';
import LeftMobileSideBarFaq from '../LeftMobileSideBarFaq';


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
              <a href="#" className="active_002">
                FAQ
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
      
       <LeftSideBarFaq hide="1" />
      
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
              <a href="#" className="active_002">
                Faq
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>





        {/* ==============mobile-menu-filter-open========================= */}
        <LeftMobileSideBarFaq hide="1" />
        {/* ===================mobile-menu-filter-end==================== */}
        <div className="main-content_10-7">
          <SearchBox />
          <div className="featured_10-7">
            <div className="new_content_11">
              

             
  
<div className="grid-container">
  <div className="grid-item">
    <Link href={`${baseUrl}dashboard/help-center/customer-support`}>Customer Support</Link>
  </div>
  <div className="grid-item">
    <Link href={`${baseUrl}dashboard/help-center/listing-set-up`}>Listing Set Up</Link>
  </div>
  <div className="grid-item">
    <Link href={`${baseUrl}dashboard/help-center/taxes-n-payments`}>Taxes &amp; Payments</Link>
  </div>
  <div className="grid-item">
    <Link href={`${baseUrl}dashboard/help-center/reporting`}>Reporting</Link>
  </div>
  <div className="grid-item">
    <Link href={`${baseUrl}dashboard/help-center/policies-n-standards`}>Policies &amp; Standards</Link>
  </div>
  <div className="grid-item">
    <Link href={`${baseUrl}dashboard/help-center/growth-opportunities`}>Growth Opportunities</Link>
  </div>
  <div className="grid-item">
    <Link href={`${baseUrl}dashboard/help-center/returns-n-refunds`}>Returns &amp; Refunds</Link>
  </div>
  <div className="grid-item">
    <Link href={`${baseUrl}dashboard/help-center/getting-started`}>Getting Started</Link>
  </div>
  <div className="grid-item">
    <Link href={`${baseUrl}dashboard/help-center/seller-fulfillment-services`}>Seller Fulfillment Services</Link>
  </div>
  <div className="grid-item">
    <Link href={`${baseUrl}dashboard/help-center/promotions-overview`}>Promotions Overview</Link>
  </div>
  <div className="grid-item">
    <Link href={`${baseUrl}dashboard/help-center/catalog-management`}>Catalog Management</Link>
  </div>
  <div className="grid-item">
    <Link href={`${baseUrl}dashboard/help-center/advertising-overview`}>Advertising Overview</Link>
  </div>
  <div className="grid-item">
    <Link href={`${baseUrl}dashboard/help-center/order-management`}>Order Management</Link>
  </div>
  <div className="grid-item">
    <Link href={`${baseUrl}dashboard/help-center/listing-optimization`}>Listing Optimization</Link>
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