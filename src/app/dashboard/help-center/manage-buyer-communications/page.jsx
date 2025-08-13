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
              <a href="#"> Order Management </a>{" "}
            </li>
            <li>
              <a href="#">Customer Support</a>
            </li>
            <li>
              <a href="#"> Manage Buyer Communications</a>{" "}
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
              <a href="#">Customer Support </a>
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Manage Buyer Communications
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
  <h2> Manage Buyer Communications</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How to Connect with a Buyer</li>
    <li>Frequently Asked Questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Effective communication with buyers is essential to building trust and
      delivering a great customer experience on Sellora. As a seller, you can
      receive and respond to buyer messages directly through the Seller Center.
      These messages may include product inquiries, order status questions, or
      post-delivery concerns. Timely and professional responses help reduce
      returns, increase ratings, and improve your seller performance metrics.
    </p>
  </div>
  <p>
    <strong>How to Connect with a Buyer</strong> <br />
    If you need to communicate with a buyer regarding their order, delivery, or
    any concerns, Sellora allows you to send a direct message through the Seller
    Center.
    <br />
    <strong>Steps to connect with a buyer:</strong>
  </p>
  <ul>
    <li>Log in to your Seller Center account on Seller.sellora.com.</li>
    <li>
      On the top right corner, click on <strong> "Buyer Questions".</strong>
    </li>
    <li>You will see a list of buyer inquiries.</li>
    <li>
      Select a question and click <strong> "Answer"</strong> to respond directly
      to the buyer.
    </li>
  </ul>
  <p>
    Once the report is ready, click <strong> Download Report</strong> to save it
    as a CSV or Excel file
  </p>
  <p />
  <div>
    <h3>Frequently Asked Questions</h3>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          Can I reply to customer queries directly through the Seller Center?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes, you can reply to all buyer messages directly from the Messages
          panel in the Seller Center. You can also attach files or share
          tracking details if needed.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What types of messages do buyers usually send?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p> Buyers may contact you regarding:</p>
        <ul>
          <li>Product details before purchase</li>
          <li>Order confirmation or delivery updates</li>
          <li>Issues with received items</li>
          <li>Return or refund requests</li>
        </ul>
        <p />
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I communicate with buyers outside Sellora?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          No, all communication must go through Sellora’s messaging system to
          ensure buyer protection and proper record keeping.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          What should I do if I have a query that’s not answered in the help
          section?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          If you have any other query or issue, you can raise a support ticket
          directly from your <strong> Seller Center.</strong>
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