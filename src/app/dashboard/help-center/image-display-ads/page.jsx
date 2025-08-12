'use client'
import React, { useEffect, useState } from 'react'
import SearchBox from '../SearchBox';
import { baseUrl } from '@/Http/helper';
import LeftMobileSideBarLearn from '../LeftMobileSideBarLearn';
import LeftSideBarLearn from '../LeftSideBarLearn';
import { usePathname } from 'next/navigation';
import { initAccordion } from '../menuListeners';
import Link from 'next/link';


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
                <a href="#"> Help</a>{" "}
              </li>
              <li>
                <Link href={`${baseUrl}dashboard/help-center/sellora-learn`}> Learn</Link>{" "}
              </li>
              
              <li>
                <a href="#" className="active_002">
                  Image Display Ads
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
      
       <LeftSideBarLearn />
      
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
              <Link href={`${baseUrl}dashboard/help-center/sellora-learn`}>Learn </Link>{" "}
            </li>
            
            <li>
              <a href="#" className="active_002">
                 Image Display Ads
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>



        {/* ==============mobile-menu-filter-open========================= */}
        <LeftMobileSideBarLearn />
        {/* ===================mobile-menu-filter-end==================== */}
        <div className="main-content_10-7">
          <SearchBox />
          <div className="featured_10-7">
            <div className="new_content_11">
              

             
  

<>
  <p>
    <strong>Image Display Ads</strong>
  </p>
  <div className="video-container">
    <iframe
      width={560}
      height={315}
      src="https://www.youtube.com/embed/lIb1zkEZd8M?si=ar98xvzmvjqlaqNQ"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen=""
    />
  </div>
  <p>
    <strong>Introduction</strong>
  </p>
  <p>
    Learn how to design and launch image display ads that boost product
    visibility.
  </p>
  <p>
    <strong>What You'll Learn in This Video</strong>
  </p>
  <ul>
    <li>What Image Display Ads.</li>
    <li>Create Image Display Ads step-by-step.&nbsp;</li>
    <li>Upload custom creative images.&nbsp;</li>
    <li>Improve visibility and increase sales with image display ads.</li>
  </ul>
  <p />
  <div className="container">
    <div className="ic-box py-5 ">
      <h3 className="pb-3" style={{ textAlign: "center" }}>
        Tell us what you think
      </h3>
      <div className="ic">
        <i className="fa-regular like fa-thumbs-up" />
        <i className="fa-regular dislike fa-thumbs-down" />
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