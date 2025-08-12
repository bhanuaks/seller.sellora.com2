'use client'
import React, { useEffect, useState } from 'react'
import SearchBox from '../SearchBox';
import { baseUrl } from '@/Http/helper';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { initAccordion } from '../menuListeners';
import LeftSideBarFaq from '../LeftSideBarFaq';
import LeftMobileSideBarFaq from '../LeftMobileSideBarFaq';


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
              <a href="#">Help</a>
            </li>
            <li>
              <Link href={`${baseUrl}dashboard/help-center/faq`}>FAQ</Link>
            </li>
            <li>
              <a href="#" className="active_002">
                Getting Started
              </a>
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
      
       <LeftSideBarFaq />
      
      <div className="col-lg-9">
        
        <div className="notification_breadcomb_rts-navigation-area-breadcrumb d-lg-block d-none">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="notification_breadcomb mb-6">
          <ul>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <Link href={`${baseUrl}dashboard/help-center/faq`}>FAQ</Link>
            </li>
            <li>
              <a href="#" className="active_002">
                Getting Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>







        {/* ==============mobile-menu-filter-open========================= */}
        <LeftMobileSideBarFaq />
        {/* ===================mobile-menu-filter-end==================== */}
        <div className="main-content_10-7">
          <SearchBox />



<>
  <div className="featured_10-7">
    <h2>Getting Started</h2>
  </div>
  <div className="new_content_11">
    <div className="faq-container">
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How can I start selling on Sellora?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            To start selling on Sellora, visit seller.sellora.com and click the
            "Start Selling” button, where you’ll register your business by
            providing basic information such as your name, email, phone number,
            and company details. Once registered, you must complete the
            onboarding process which includes verifying your tax information,
            setting up payment details, and listing your first product. Once
            approved, your store will be live and ready to receive customer
            orders.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What is a Seller Center and how do I use it?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            <strong>Seller Center</strong> is your central dashboard for
            managing your Sellora store. Everything from listing products and
            managing inventory to tracking orders, checking payout status,
            running ads, and updating account settings happens here. After
            logging into Seller Center, you can navigate using the side menu to
            access specific areas like{" "}
            <strong>
              Catalog, Inventory, Campaigns, Payouts, and Settings
            </strong>
            . It’s designed to make selling easy and efficient for businesses of
            all sizes.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What is the onboarding process for new sellers?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            The onboarding process ensures that your business is verified and
            ready to operate on Sellora. It includes:
          </p>
          <ul>
            <li>
              Submitting your <strong>TAX details</strong>
            </li>
            <li>
              Adding your <strong>bank account and tax information</strong>
            </li>
            <li>
              Setting up your{" "}
              <strong>store display name and contact information</strong>
            </li>
            <li>Listing at least one product (manually or via bulk upload)</li>
            <li>
              If applicable, applying for <strong>brand registry</strong>
            </li>
          </ul>
          <p>
            Once all details are submitted and verified, your account is
            activated for selling.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            Where can I find the referral fee schedule for my products?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Sellora charges a referral fee based on the product category. This
            fee is a percentage of the total order value. You can view a full
            breakdown of referral fees by category outside{" "}
            <strong>Seller Center</strong> under{" "}
            <strong>Fees &amp; Commission</strong>. Understanding these fees
            helps you set competitive and profitable prices for your products.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What should I do if I forget my Seller Center password?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Click <strong>“Forgot Password”</strong> on the Seller Center login
            page. Enter your registered email and follow the link sent to reset
            your password. If you don’t receive the email, check your spam
            folder or contact Seller Support.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>Can I upload multiple products at once?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Yes. Use the Bulk Upload feature in{" "}
            <strong>Seller Center &gt; Catalog</strong>. Download the product
            listing template, fill it with your product data, and upload it
            back. Bulk upload is ideal for sellers with large inventories.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What are Approved Partner Services Providers?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            These are third-party service providers that Sellora has vetted for
            services such as:
          </p>
          <ul>
            <li>Product photography</li>
            <li>Catalog management</li>
            <li>Advertising support</li>
            <li>Logistics and warehousing</li>
          </ul>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What advertising solutions are available on Sellora?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Sellora offers various advertising options to grow your sales:</p>
          <ul>
            <li>
              <strong>Manual Campaigns:</strong> Full control over your
              targeting and bidding
            </li>
            <li>
              <strong>Smart Campaigns:</strong> Automated ads based on
              performance data
            </li>
            <li>
              <strong>Image and Video Display Ads:</strong> Showcase your
              products visually
            </li>
            <li>
              <strong>Discount Coupons and Sale Events:</strong> Increase
              visibility during promotions
            </li>
            <li>
              <strong>Influencer Marketing:</strong> Partner with influencers to
              reach new audiences
            </li>
          </ul>
          <p>
            You can access and manage all ad tools from{" "}
            <strong>Seller Center &gt; Advertising.</strong>
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>Is TAX registration required to sell on Sellora?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Yes, <strong>TAX</strong> registration is mandatory for all sellers
            on Sellora, regardless of your business size. You must provide a
            valid TAX during onboarding. Without this, you will not be able to
            complete your registration or receive payouts. <strong>TAX</strong>{" "}
            compliance ensures transparency for buyers and legal security for
            sellers.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            Can I participate in festival or seasonal sale events on Sellora?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Yes! Sellora runs frequent promotional campaigns like festive sales,
            clearance events, and themed discount weeks. You can participate by
            going to <strong>Growth &gt; Sellora Promotions</strong> and opting
            in. Participating in sale events can significantly boost product
            visibility and sales during high-traffic periods.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How often will I receive payouts from Sellora?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Payouts are processed on a <strong>weekly cycle</strong>. Once an
            order is successfully delivered and the return window is closed, the
            payment is scheduled for transfer. You can track your earnings and
            settlement cycle in <strong>Seller Center &gt; Payments</strong>{" "}
            where each payout includes detailed breakdowns of commissions,
            taxes, and net earnings.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What should I do if my seller account is suspended?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            If your account is suspended, you’ll receive an email with the
            reason. Common causes include policy violations, poor performance,
            or fraud reports. To appeal, go to{" "}
            <strong>Help Center &gt; Account Suspension</strong> and submit all
            requested documentation. Our compliance team will review your case
            and respond within 5 business days.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How do I contact Sellora Seller Support?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            For any issues, log into the Seller Center and go to the Help Center
            &gt; Contact Us. You can:
          </p>
          <ul>
            <li>Chat with a live agent</li>
            <li>Raise a support ticket</li>
          </ul>
          <p>Request a callback</p>
          <p>
            Support is available daily 24 hours, and our team is ready to assist
            with technical, listing, payment, or policy queries.
          </p>
        </div>
      </div>
    </div>
  </div>
</>





          {/* ==============getting-started-section=open================ */}
        </div>
        
      </div>
    </div>
  </div>
</>

  )
}

export default page