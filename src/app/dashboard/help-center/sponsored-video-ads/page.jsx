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
              <a href="#">Advertising &amp; Promotions Overview </a>{" "}
            </li>
            <li>
              <a href="#">Display Ads</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Sponsored Video Ads
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
              <a href="#">Advertising &amp; Promotions Overview </a>{" "}
            </li>
            <li>
              <a href="#">Display Ads</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Sponsored Video Ads
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
  <h2>Sponsored Video Ads</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>Video</li>
    <li>How to Create a Sponsored Video Ad</li>
    <li>See video guideline</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Sponsored Video Ads on Sellora help sellers engage customers with short,
      high-impact videos. These ads auto-play within search results, product
      pages, and promotional carousels, grabbing attention and driving higher
      conversions. <br />
      <strong>Note:</strong>Note: Sponsored Video Ads are exclusively available
      to <strong>brand owners.</strong> Only sellers who have registered their
      brand with Sellora can create and run Sponsored Image Ads.
    </p>
  </div>
  <div className="video-container">
    <iframe
      src="https://www.youtube.com/embed/hYiOM4Nwlnw?si=_XNzZlgZVKFHdcmR"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen=""
    />
  </div>
  <p>
    <strong>How to Create a Sponsored Video Ad&nbsp;</strong>
  </p>
  <ul>
    <li>
      Go to the<strong> Advertising &gt; Display Ads</strong>&nbsp;
    </li>
    <li>
      Click on <strong>“Get Started</strong>&nbsp; and select{" "}
      <strong> “Sponsored Video Ads.”</strong>
      from the menu.
    </li>
    <li>
      Enter your <strong>Campaign Name.</strong>&nbsp;
    </li>
    <li>
      Click on <strong> “Select Budget Manually”</strong>&nbsp; and enter{" "}
      <strong>Daily Budget</strong>
    </li>
    <li>
      Set the <strong>Time Frame</strong> for your campaign.
    </li>
    <li>
      Select the <strong>Products</strong> you want to advertise.
    </li>
    <li>
      {" "}
      <strong>Upload your video</strong> to customize the ad.
    </li>
    <li>
      Add <strong>Targeting Categories.</strong>
    </li>
    <li>
      Click on <strong>“Submit Campaign.”</strong>
    </li>
    <p>
      <strong>See video guideline</strong>
    </p>
    <ul>
      <p>
        <strong>Video</strong>
      </p>
      <li> Aspect Ratio: 16:9</li>
      <li>Resolution: 1920x1080 (min)</li>
      <li>Length: 6-45 sec</li>
      <li>File Size: Max 200MB</li>
      <li>Format: H.264, MPEG-2, MPEG-4</li>
      <li>Frame Rate: 23.976, 24, 25, 29.97, 29.98, 30 fps</li>
      <li>Bitrate: 1 Mbps (min)</li>
    </ul>
    <ul>
      <p>
        <strong>Audio</strong>
      </p>
      <li> Language: Matches ad locale</li>
      <li>Sample Rate: 44.1kHz or 48kHz</li>
      <li>Codec: PCM or AAC</li>
      <li>Bitrate: 96 kbps (min)</li>
      <li>Format: Stereo or mono</li>
    </ul>
  </ul>
  <p />
  <div>
    <h3>Frequently Asked Questions</h3>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What are Sponsored Video Ads on Sellora?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          Sponsored Video Ads are short, auto-playing video advertisements that
          showcase your product on key placements like search results, category
          pages, and promotional sections.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Where do Sponsored Video Ads appear?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          They appear on Sellora’s search results pages across desktop, mobile,
          and the Sellora shopping app.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Where do shoppers go after clicking the video ad?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          They are redirected to the product detail page of the advertised item.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I pause or edit my video ad after launch?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes, you can pause, edit, or stop your campaign anytime from the
          Campaign Manager section.
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