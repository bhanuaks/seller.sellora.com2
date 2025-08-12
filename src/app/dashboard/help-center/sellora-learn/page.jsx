'use client'
import React, { useEffect, useState } from 'react'
import SearchBox from '../SearchBox';
import { baseUrl } from '@/Http/helper';
import LeftMobileSideBarLearn from '../LeftMobileSideBarLearn';
import LeftSideBarLearn from '../LeftSideBarLearn';
import Link from 'next/link';
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
                <a href="#" className="active_002">
                  Learn
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
      
       <LeftSideBarLearn hide="1" />
      
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
              <a href="#" className="active_002">
                Learn
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>




        {/* ==============mobile-menu-filter-open========================= */}
        <LeftMobileSideBarLearn hide="1" />
        {/* ===================mobile-menu-filter-end==================== */}
        <div className="main-content_10-7">
          <SearchBox />
          <div className="featured_10-7">
            <div className="new_content_11">
              

             
  

<div className="cards_10-7 max-w">
  <div className="new-card-7">
    <Link href={`${baseUrl}dashboard/help-center/get-start`}>
      <img src={`${baseUrl}front/assets/images/image-1new.png`} alt="" />
    </Link>
  </div>
  <div className="new-card-7">
    <Link href={`${baseUrl}dashboard/help-center/brand-approval-body`}>
      <img src={`${baseUrl}front/assets/images/image-2new.png`} alt="" />
    </Link>
  </div>
  <div className="new-card-7">
    <Link href={`${baseUrl}dashboard/help-center/single-product-listing`}>
      <img src={`${baseUrl}front/assets/images/image-3new.png`} alt="" />
    </Link>
  </div>
  <div className="new-card-7">
    <Link href={`${baseUrl}dashboard/help-center/list-products-in-bulk`}>
      <img src={`${baseUrl}front/assets/images/image-4new.png`} alt="" />
    </Link>
  </div>
  <div className="new-card-7">
    <Link href={`${baseUrl}dashboard/help-center/manual-campaign-body`}>
      <img src={`${baseUrl}front/assets/images/image-5new.png`} alt="" />
    </Link>
  </div>
  <div className="new-card-7">
    <Link href={`${baseUrl}dashboard/help-center/smart-campaign-body`}>
      <img src={`${baseUrl}front/assets/images/image-6new.png`} alt="" />
    </Link>
  </div>
  <div className="new-card-7">
    <Link href={`${baseUrl}dashboard/help-center/image-display-ads`}>
      <img src={`${baseUrl}front/assets/images/image-7new.png`} alt="" />
    </Link>
  </div>
  <div className="new-card-7">
    <Link href={`${baseUrl}dashboard/help-center/video-display-ads`}>
      <img src={`${baseUrl}front/assets/images/image-8new.png`} alt="" />
    </Link>
  </div>
  <div className="new-card-7">
    <Link href={`${baseUrl}dashboard/help-center/sale-event-body`}>
      <img src={`${baseUrl}front/assets/images/image-9new.png`} alt="" />
    </Link>
  </div>
  <div className="new-card-7">
    <Link href={`${baseUrl}dashboard/help-center/discount-coupon`}>
      <img src={`${baseUrl}front/assets/images/image-10new.png`} alt="" />
    </Link>
  </div>
  <div className="new-card-7">
    <Link href={`${baseUrl}dashboard/help-center/influencers-marketing`}>
      <img src={`${baseUrl}front/assets/images/image-11new.png`} alt="" />
    </Link>
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