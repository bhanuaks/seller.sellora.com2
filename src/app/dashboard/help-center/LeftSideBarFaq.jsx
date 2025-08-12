'use client'
import { baseUrl } from '@/Http/helper';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

function LeftSideBarFaq({hide}) {
//console.log(hide)
  
const pathname = usePathname();
    
//console.log(pathname)
  

  return (
    <>
    <div className="col-lg-3 d-lg-block d-none" style={{ paddingLeft: 0 }}>
        <div className="sticky_top sidebar2">
          <div className="sidebar_10_7">
            <div className="marketplace">
              <h1>Marketplace Learn</h1>
            </div>
            <h2>Guides</h2>
            {hide == 1 ? null:
            
            <ul className="menu_10_7">
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/customer-support' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/customer-support`}>Customer Support</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/listing-set-up' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/listing-set-up`}>Listing Set Up</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/taxes-n-payments' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/taxes-n-payments`}>Taxes &amp; Payments</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/reporting' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/reporting`}>Reporting</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/policies-n-standards' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/policies-n-standards`}>Policies &amp; Standards</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/growth-opportunities' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/growth-opportunities`}>Growth Opportunities</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/returns-n-refunds' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/returns-n-refunds`}>Returns &amp; Refunds</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/getting-started' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/getting-started`}>Getting Started</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/seller-fulfillment-services' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/seller-fulfillment-services`}>Seller Fulfillment Services</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/promotions-overview' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/promotions-overview`}>Promotions Overview</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/catalog-management' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/catalog-management`}>Catalog Management</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/advertising-overview' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/advertising-overview`}>Advertising Overview</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/order-management' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/order-management`}>Order Management</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/listing-optimization' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/listing-optimization`}>Listing Optimization</Link>
    </div>
  </li>
</ul>

}

 
          </div>
        </div>
      </div>
      
    </>
  )
}


export default LeftSideBarFaq