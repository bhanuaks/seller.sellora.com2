'use client'
import { baseUrl } from '@/Http/helper';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

function LeftSideBarLearn({hide}) {
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
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/get-start' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/get-start`}>Get Started</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/brand-approval-body' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/brand-approval-body`}>Brand Approval</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/single-product-listing' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/single-product-listing`}>Single Product Listing</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/list-products-in-bulk' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/list-products-in-bulk`}>List Products In Bulk</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/manual-campaign-body' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/manual-campaign-body`}>Manual Campaign</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/smart-campaign-body' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/smart-campaign-body`}>Smart Campaign</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/image-display-ads' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/image-display-ads`}>Image Display Ads</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/video-display-ads' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/video-display-ads`}>Video Display Ads</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/sale-Event-body' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/sale-event-body`}>Sale Event</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/discount-coupon' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/discount-coupon`}>Discount Coupon</Link>
    </div>
  </li>
  <li>
    <div className={`menu-header_10_7 faq_menu ${pathname === '/dashboard/help-center/influencers-marketing' ? 'active_sub':''}`}>
      <Link href={`${baseUrl}dashboard/help-center/influencers-marketing`}>Influencers Marketing</Link>
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


export default LeftSideBarLearn