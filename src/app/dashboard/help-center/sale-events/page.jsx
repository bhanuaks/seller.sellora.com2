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
              <a href="#">Advertising &amp; Promotions Overview </a>{" "}
            </li>
            <li>
              <a href="#"> Promotions Overview</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Sale Events
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
              <a href="#"> Promotions Overview</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Sale Events
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
  <h2>Sale Events</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How can I opt-in to participate in a Sellora sale event?</li>
    <li>
      What are the benefits of participating in a Sellora sales event promotion?{" "}
    </li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Sellora hosts regular <strong>Sale Events </strong>that give sellers the
      opportunity to reach a wider audience through platform-wide promotions,
      seasonal campaigns, and category-specific deals. Participating in these
      events can significantly increase your traffic, conversion rates, and
      overall sales performance.
    </p>
    <ul>
      <li>Launching new products</li>
      <li>Promoting seasonal deals</li>
      <li>Boosting visibility in competitive categories</li>
    </ul>
    <p>
      <strong>Note:</strong> Sponsored Image Ads are exclusively available to{" "}
      <strong>brand owners.</strong> Only sellers who have registered their
      brand with Sellora can create and run Sponsored Image Ads.
    </p>
    <p />
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
    <strong>How can I opt-in to participate in a Sellora sale event?</strong>{" "}
  </p>
  <p>To opt-in to a Sellora sale event:</p>
  <ol>
    <p> </p>
    <li>
      Go to the<strong> “Growth”</strong>&nbsp;tab on your dashboard.
    </li>
    <p />
    <li>
      Click on <strong>“Sellora Promotions”</strong>from the menu.
    </li>
    <li>
      Select the <strong>“Sale Events” </strong> section.
    </li>
    <li>
      Show <strong> Running Sale Events,</strong> click the{" "}
      <strong> “Apply”</strong>button for the event you want to join.
    </li>
  </ol>
  <p>
    {" "}
    <strong>
      What are the benefits of participating in a Sellora sales event promotion?
    </strong>
  </p>
  <p>
    Participating in a Sellora sales event promotion offers several key
    benefits:
  </p>
  <ol>
    <li>
      <strong>Increased Visibility:</strong>Your products are featured in
      high-traffic event pages, attracting more shoppers.
    </li>
    <li>
      <strong>Higher Sales Potential:</strong>Sales events drive more customer
      interest and urgency, boosting conversion rates.
    </li>
    <li>
      <strong>Marketing Support:</strong>Sellora promotes sale events through
      banners, emails, and social media—giving your products wider reach.
    </li>
    <li>
      <strong>Improved Seller Performance:</strong>Higher sales during events
      can improve your seller metrics and tier status. <br />
      Competitive Advantage: Participation helps you stay ahead of competitors
      not involved in the promotion. <br />
      Participating in a Sellora sales event promotion provides several
      advantages:
    </li>
  </ol>
  <p />
  <ol>
    <li>
      <strong>Increased Product Visibility:</strong> Your listings are
      highlighted on event pages, attracting more traffic.
    </li>
    <li>
      <strong>Boost in Sales:</strong>Limited-time offers create urgency and
      encourage faster purchase decisions
    </li>
    <li>
      <strong>Sellora Marketing Support:</strong>Your products benefit from
      Sellora’s promotional efforts, including banners, emails, and social
      media.
    </li>
    <li>
      <strong>Better Seller Metrics: </strong> More sales can help improve your
      performance metrics and seller tier status.
    </li>
    <li>
      <strong>Competitive Advantage:</strong>Being part of the promotion gives
      you an edge over sellers who are not participating, helping you stand out
      in the marketplace.
    </li>
  </ol>
  <div>
    <h3>Frequently Asked Questions</h3>
    <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What are Sellora Sale Events?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          These are platform-wide or category-specific campaigns run by Sellora
          during special occasions, festivals, or themed weeks to drive traffic
          and boost seller sales.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How do I join a Sale Event?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Go to Seller Center &gt; Promotions &gt; Sale Events, choose an active
          or upcoming event, select products, set offers, and submit for
          approval.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What is a Smart Campaign?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          A Smart Campaign is an automated ad campaign where Sellora’s system
          manages keyword targeting and bidding based on real-time performance
          data.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Are there any fees to participate?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          There is no separate fee to join, but your participation may be
          subject to minimum discount thresholds or deal criteria set for each
          event.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What types of sale events does Sellora host?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>Common types include:</p>
        <ul>
          <li>
            Festive Sales (Black Friday, Cyber Monday, Back to school Sales,
            Labour Day and Christmas, etc.)
          </li>
          <li>Payday &amp; End-of-Month Sales</li>
          <li>Flash Deals &amp; Limited-Time Offers</li>
          <li>Category Days (e.g., Electronics Week, Fashion Days)</li>
        </ul>
        <p />
      </div>
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