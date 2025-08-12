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
              <a href="#">Advertising &amp; Promotions Overview</a>{" "}
            </li>
            <li>
              <a href="#"> Advertising  </a>{" "}
            </li>
            <li>
              <a href="#">Manual Campaign</a>{" "}
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
              <a href="#"> Advertising  </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Manual Campaign
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
  <h2>Manual Campaign</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How to Create a Manual Campaign</li>
    <li>Frequently Asked Questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Manual Campaigns on Sellora give you full control over your advertising
      strategy. Unlike automatic campaigns, where the system chooses keywords
      for you, manual campaigns let you select your own keywords, set individual
      bids, and target customers more precisely.
    </p>
    <p>This campaign type is ideal for sellers who want to:</p>
    <ul>
      <li>Fine-tune their ad performance</li>
      <li>Focus on high-converting keywords</li>
      <li>Optimize their advertising budget</li>
    </ul>
    <p>
      {" "}
      With real-time performance data, you can continuously adjust bids, pause
      underperforming keywords, and boost visibility where it matters most.
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
    <strong>How to Create a Manual Campaign</strong>
  </p>
  <ul>
    <li>
      Go to <strong> Advertising &gt; Sponsored Ads. </strong>&nbsp;
    </li>
    <li>
      Click on <strong> “Create Campaign.”</strong>&nbsp;
    </li>
    <li>
      Select the <strong> “Influencer Marketing”</strong>&nbsp;
    </li>
    <li>
      Enter Your<strong>Campaign Name.</strong>&nbsp;
    </li>
    <li>
      Choose the <strong>products</strong> you want to advertise.
    </li>
    <li>
      <p>
        <strong>Add Keywords</strong> manually or use the suggested keywords:
      </p>
      <ul>
        <li>
          {" "}
          <strong>Phrase Match</strong>
        </li>
        <li>
          <strong> Exact Matcht</strong>
        </li>
      </ul>
    </li>
    <li>
      Set <strong>bid amounts</strong> for each keyword &amp; chick on the{" "}
      <strong>Save </strong>button.
    </li>
    <li>
      select budget manually and enter your <strong>Daily Budget.</strong>
    </li>
    <li>
      Set the <strong>Time Frame</strong> for the campaign.
    </li>
    <li>
      Click <strong>“Submit Campaign.”</strong>
    </li>
  </ul>
  <p />
  <div>
    <h3>Frequently Asked Questions</h3>
    <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What is a Manual Campaign on Sellora?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          A Manual Campaign allows you to choose your own keywords and set
          custom bids for each keyword. It gives you more control over your ad
          targeting, budget, and overall campaign performance.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What are the types of keyword matches available?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p></p>
        <ul>
          <li>
            Phrase Match: Shows when the search contains your exact keyword
            phrase
          </li>
          <li>Exact Match: Shows only when the exact keyword is searched</li>
        </ul>
        <p />
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What is a good daily budget for a Manual Campaign?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          Sellora recommends starting with a minimum daily budget of 10$ to 20$,
          depending on your category and competition. You can adjust it anytime
          based on performance.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What happens if my keywords don’t perform well?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p> If keywords have low impressions or clicks:</p>
        <ul>
          <li>Try increasing the bid amount</li>
          <li>Use broader match types</li>
          <li>
            Replace them with new, more relevant keywords <br /> Regularly
            review performance and optimize accordingly.
          </li>
        </ul>
        <p />
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          Will my ads show immediately after launching a Manual Campaign?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Ads usually start showing within 30 minutes to 2 hours after launch,
          depending on keyword competitiveness and bid amount. For new sellers,
          approval may take slightly longer.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How often should I monitor or update my manual campaign?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p> It’s recommended to check your ad performance:</p>
        <ul>
          <li>Every 2–3 days during the initial phase</li>
          <li>Adjust bids weekly based on ROI</li>
          <li>
            Remove underperforming keywords regularly to improve efficiency
          </li>
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