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
              <a href="#"> Order Management </a>{" "}
            </li>
            <li>
              <a href="#"> Pause sales &amp; order operations</a>{" "}
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
              <a href="#"> Order Management </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Pause sales &amp; order operations
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
  <h2> Pause sales &amp; order operations</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>3 days to pause Marketplace orders</li>
    <li>Frequently Asked Questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      There may be times when you need to temporarily pause the processing of
      new orders—such as during a vacation, holiday, or unexpected operational
      outage. Activating Vacation Mode in the Seller Center allows you to stop
      receiving new orders without deactivating your entire account. In this
      guide, we’ll walk you through how to temporarily pause your order
      operations in the Seller Center, ensuring a smooth transition before and
      after the break.
    </p>
  </div>
  <p>
    <strong>3 ways to pause Marketplace orders&nbsp;&nbsp;</strong> <br />
    Set your inventory to zero&nbsp;
    <br />
    <strong>Steps to connect with a buyer:</strong>
  </p>
  <p>
    When you update your inventory to zero for all items, it prevents customers
    from placing orders. This change takes effect as soon as the feed is
    processed. Navigate to your Catalog page in the Seller Center. Locate the
    inventory column to set the inventory to zero.&nbsp;
  </p>
  <p />
  <p>
    <strong>Why use this option?</strong> <br />
  </p>
  <p>
    It gives you the flexibility to stop and resume sales quickly at your
    convenience. It’s also the fastest way to pause operations while preventing
    order cancellations and customer frustration.
  </p>
  <p />
  <p>
    <strong>Adjust shipping options for office closures&nbsp;</strong> <br />
  </p>
  <p>
    You can select specific days of the year on which you won’t be processing
    orders. Offers will still be visible to customers on Sellora.com and new
    orders will continue to be sent to your account on these dates, but your
    fulfillment dates will shift. To adjust your settings, navigate to the
    Account settings gear in the Seller Center and select Shipping info. Then,
    locate the Additional Days Off section to select any days you won’t be
    processing new orders.&nbsp;
  </p>
  <p />
  <p>
    <strong>Why use this option?</strong> <br />
  </p>
  <p>
    Setting additional days off allows you to continue to receive new orders
    even while you’re out. While we don’t recommend this solution if you’re
    experiencing extended or unexpected operational delays, it’s a convenient
    way to pause fulfillment until you’re back. Check out the Fulfillment center
    operating schedule to learn more.
  </p>
  <p />
  <p>
    <strong>Temporary deactivation</strong> <br />
  </p>
  <p>
    If you need to temporarily deactivate your account until you’re ready to
    resume normal operations, you can select the Help button in the Seller
    Center menu bar to contact Support and request temporary deactivation.
  </p>
  <p />
  <p>
    <strong>Why use this option?</strong> <br />
  </p>
  <p>
    We don’t recommend temporary deactivation, but this option is available in
    extreme circumstances if you need it. To resume business as usual, you’ll
    need to select the Help button in the Seller Center menu bar to contact
    Support.
  </p>
  <p />
  <div>
    <h3>Frequently Asked Questions</h3>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Will my Seller Performance metrics be affected?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          If you cancel orders received at the beginning of an unexpected
          disruption, it will affect your Seller Performance metrics. However,
          you can select the Help button in the Seller Center menu bar to
          contact Support and avoid being penalized. If approved, the impacted
          purchase orders (POs) won’t be considered in your performance metric
          calculation.
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