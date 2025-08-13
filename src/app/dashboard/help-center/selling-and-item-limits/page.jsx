'use client'
import React, { useEffect, useState } from 'react'
import LeftSideBar from '../LeftSideBar';
import LeftMobileSideBar from '../LeftMobileSideBar';
import SearchBox from '../SearchBox';
import { baseUrl } from '@/Http/helper';
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
              <a href="#">Help</a>{" "}
            </li>
            <li>
              <Link href={`${baseUrl}dashboard/help-center/featured-guides`}>Feautured Guides</Link>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Selling and item limits
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
              <a href="#">Help</a>{" "}
            </li>
            <li>
              <Link href={`${baseUrl}dashboard/help-center/featured-guides`}>Feautured Guides</Link>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Selling and item limits
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
  <h2>Selling and item limits </h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>What is the policy?</li>
    <li>Additional Guidelines</li>
    <li>Frequently asked questions</li>
  </ul>
  <div className="section-box">
    <h3>Overview</h3>
    <p>
      Once your application is vetted and approved to join the Sellora
      Marketplace, your account will be assigned specific selling and item
      limits. These limits define the number of items you are allowed to list
      and sell at a given time.
    </p>
    <p>
      Sellora regularly reviews and adjusts these limits based on several key
      factors, including:
    </p>
    <ul>
      <li>Your overall sales volume</li>
      <li>
        Performance metrics (such as order defect rate, late shipment rate,
        etc.)
      </li>
      <li>Customer satisfaction and feedback</li>
    </ul>
    <p>
      As your account gains trust and demonstrates consistent, high-quality
      performance, you may become eligible for higher selling limits.
      Conversely, poor performance or negative feedback may result in reduced
      limits or additional account reviews.
    </p>
  </div>
  <h3>What is the policy?</h3>
  <p>
    When you sell items on Sellora.com, you agree to comply with the selling and
    item limits assigned to your account. These limits include:
  </p>
  <ul>
    <li>The maximum number of items you can list in your catalog</li>
    <li>
      Conditions related to your compliance with Sellora Marketplace policies
    </li>
  </ul>
  <p>
    Your initial limits are determined based on the information you provide
    during the setup of your Marketplace account.
  </p>
  <p>
    Once your account is approved, you’ll receive a notification in the{" "}
    <strong>Seller Center</strong>, along with an email detailing your specific
    limits. We strongly recommend enabling email notifications in your account
    settings to ensure you are alerted whenever your selling limits are updated.
  </p>
  <p>
    For details on managing notifications, visit the{" "}
    <strong>Manage Notifications</strong> section in the Seller Center.
  </p>
  <div className="notes_11">
    <h3>Notes</h3>
    <p>
      Sellora continuously monitors your account activity and performance. If
      you are approaching your assigned selling or item limits, Sellora will
      notify you in advance.
    </p>
    <p>
      If you reach or exceed a limit, your account may be temporarily paused
      while Sellora reviews your account to determine whether your limits should
      be adjusted.
    </p>
    <p>
      During this review period, you may not be able to list new items or
      process additional sales until a decision is made.
    </p>
  </div>
  <h3>Additional guidelines</h3>
  <p>
    If your selling performance is strong, your sales metrics are consistently
    positive, and you maintain a solid track record with customers while
    following the <strong>Marketplace Seller Code of Conduct</strong>, you may
    be eligible for a selling limit increase.
  </p>
  <h3>Eligibility Requirements for a Limit Increase Request:</h3>
  <p>
    You can request a selling limit increase only if your account is in good
    standing and meets at least one of the following conditions:
  </p>
  <ul>
    <li>
      At least <strong>90 days have passed</strong> since your first transaction
    </li>
    <li>
      At least <strong>30 days have passed</strong> since your last limit
      evaluation
    </li>
  </ul>
  <div className="notes_11">
    <h3>Notes</h3>
    <p>
      Any restrictions on your account must be resolved before submitting a
      request. Sellora will not consider limit increase requests while your
      account is restricted. You must restore full selling privileges before
      making an appeal.
    </p>
  </div>
  <h2>Frequently asked questions</h2>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Why are selling and item limits important?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Selling and item limits are essential for maintaining a safe and
          trustworthy Marketplace environment. These limits help:
        </p>
        <ul>
          <li>
            <strong>Protect the Marketplace community</strong> from fraud,
            abuse, and low-quality experiences
          </li>
          <li>
            <strong>Ensure new sellers grow responsibly</strong> by building a
            strong track record before scaling their business
          </li>
          <li>
            <strong>Maintain high standards</strong> for customer satisfaction,
            product quality, and seller performance
          </li>
        </ul>
        <p>
          By placing reasonable limits, Sellora can better support seller
          success while safeguarding the integrity of the platform for all
          users.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How is my item count calculated?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Your item count on Sellora is based on the total number of offers in
          your catalog.
        </p>
        <p>
          <strong>Included in the item count:</strong>
        </p>
        <ul>
          <li>
            <strong>Catalog Statuses:</strong> All, Drafts, Unpublished, Error,
            Published, Processing
          </li>
        </ul>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          How can I add new items if my catalog is already at its item limit?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          If your catalog has reached its item limit, you won’t be able to add
          new items unless space is made available. To stay within your limit,
          you can:
        </p>
        <ul>
          <li>
            <strong>Delete existing items</strong> from your catalog that are no
            longer active or needed
          </li>
          <li>
            <strong>Then add new items</strong> once space becomes available
          </li>
        </ul>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What happens if my item count exceeds my item limit?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          It's important to stay within your assigned catalog item limit. If
          your item count exceeds the limit:
        </p>
        <ul>
          <li>
            <strong>Your entire catalog submission will be rejected</strong>
          </li>
          <li>
            <strong>You will not be able to add new items</strong> to your
            catalog
          </li>
          <li>
            <strong>You will also be unable to make content updates</strong> to
            existing seller-fulfilled or Sellora-fulfilled listings
          </li>
        </ul>
        <p>
          To avoid disruption, regularly monitor your item count and manage your
          catalog to ensure it remains within the allowed limits.
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