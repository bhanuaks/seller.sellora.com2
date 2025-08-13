'use client'
import React, { useEffect, useState } from 'react'
import LeftSideBar from '../LeftSideBar';
import LeftMobileSideBar from '../LeftMobileSideBar';
import SearchBox from '../SearchBox';
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
                <a href="#">Getting Started</a>{" "}
              </li>
              <li>
                <a href="#" className="active_002">
                  Your Guide to Selling on Sellora
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
                      <a href="#">Getting Started</a>{" "}
                    </li>
                    <li>
                      <a href="#" className="active_002">
                        Your Guide to Selling on Sellora
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
              <h2>Your Guide to Selling on Sellora</h2>
              <h3>In this guide</h3>
              <ul className="clean-decorative-list">
                <li>Overview</li>
                <li>How does it work?</li>
                <li>Frequently asked questions</li>
              </ul>
              <div className="section-box">
                <h3>Overview</h3>
                <p>
                  To sell on the Sellora Marketplace, your business must meet
                  specific eligibility criteria and provide the required legal
                  documentation. This guide outlines the essential requirements
                  and steps to help you get started as a Marketplace seller.
                </p>
              </div>
              <h3>How does it work?</h3>
              <p>
                Signing up to become a <strong>Sellora Marketplace</strong>{" "}
                seller is completely free—there are no upfront fees. Instead,
                you pay a <strong>referral fee</strong> on each item you sell,
                based on the product category.
              </p>
              <h3>1. Sellora Marketplace application requirements</h3>
              <ul>
                <li>Business Tax ID (EIN) or Business License Number.</li>
                <li>
                  Supporting documents that verify your Business Name and
                  Address.
                </li>
                <li>Have GTIN/UPC codes or GS1 Company Prefix identifiers.</li>
                <li>
                  Catalog that follows Sellora's Prohibited Products Policy.
                </li>
                <li>
                  Sellora Fulfillment Services (SFS) or another B2C&amp;B2C U.S.
                  warehouse that supports returns and meets our Seller
                  Performance Standards.
                </li>
              </ul>
              <h3>2. Apply and create your account</h3>
              <p>
                Once you’ve met the eligibility requirements, you’re ready to
                apply and set up your Sellora Marketplace seller account. During
                the onboarding process, you’ll:
              </p>
              <ul>
                <li>Provide your business and tax information</li>
                <li>Set up payment and bank account details</li>
                <li>Choose your fulfillment preferences (self-fulfillment)</li>
                <li>
                  Configure your shipping, return, and customer service policies
                </li>
                <li>
                  After completing onboarding and receiving approval, you can
                  start listing your products and begin selling on Sellora
                  Marketplace.
                </li>
              </ul>
              <h3>3. Explore Marketplace offerings</h3>
              <p>
                <strong>Register Your Brand:</strong> If you are the legal
                rights holder of a registered trademark, Sellora’s Brand
                Registry helps you protect and manage your brand. Through an
                intuitive interface, you can register your brand, manage your
                intellectual property, report potential infringements, and track
                the status of claims—all in one place.
              </p>
              <p>
                <strong>
                  Ship and fulfill items through Sellora Fulfillment Services
                  (SFS):
                </strong>{" "}
                Simplify your logistics with Sellora Fulfillment Services. When
                a customer places an order, Sellora will pick, pack, and deliver
                the product directly to the customer. SFS also handles customer
                service and returns, giving you more time to focus on growing
                your business.
              </p>
              <p>
                <strong>Boost Visibility with Advertising Solutions:</strong>{" "}
                Promote your products and increase sales with Sellora Ads. Take
                advantage of Sponsored Listings, Onsite Banners, Brand Pages,
                and Search Ads to get your brand in front of more potential
                buyers on Sellora.com and the Sellora app.
              </p>
              <p>
                <strong>Sell Globally:</strong> Sellora Marketplace supports
                international expansion. Once you’ve completed the necessary
                onboarding for each market, you may be eligible to list and sell
                products in countries such as the UAE, Saudi Arabia, and
                more—helping you grow your brand beyond borders.
              </p>
              <h2>Frequently asked questions</h2>
              <div className="faq-container">
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      What Business Types Are Not Allowed to Sell on the U.S.
                      Marketplace?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      The following business types are not eligible to sell on
                      the Sellora U.S. Marketplace:
                    </p>
                    <ul>
                      <li>Non-profit organizations</li>
                      <li>
                        Sole proprietorships (except those registered in India)
                      </li>
                      <li>Hindu Undivided Family (HUF) entities</li>
                    </ul>
                    <p>
                      Only legally registered businesses such as corporations,
                      LLCs, partnerships, and approved sole proprietorships
                      (India only) are permitted to operate as Marketplace
                      sellers.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      What Happens If I Don’t Meet the Sellora Marketplace
                      Minimum Requirements?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      If your business does{" "}
                      <strong>not meet the minimum requirements</strong>, you
                      will <strong>not be approved to sell</strong> on the{" "}
                      <strong>Sellora Marketplace</strong>.To protect the
                      integrity and quality of the platform, only businesses
                      that meet all eligibility, documentation, and compliance
                      standards can be onboarded as sellers. You may reapply
                      once you fulfill the necessary criteria.We recommend
                      reviewing the <strong>Seller Requirements</strong>{" "}
                      <strong>Checklist</strong> before submitting your
                      application to ensure a smooth approval process.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      What policies and standards do I need to adhere to?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      At <strong>Sellora Marketplace</strong>, we are committed
                      to maintaining a fair, transparent, and trustworthy
                      environment for both sellers and customers. As a seller,
                      you are expected to{" "}
                      <strong>
                        comply with all Marketplace policies, rules, and
                        guidelines
                      </strong>{" "}
                      at all times.
                    </p>
                    <p>
                      This includes—but is not limited to—adherence to the
                      following:
                    </p>
                    <ul>
                      <li>Sellora Seller Code of Conduct.</li>
                      <li>Product Listing Guidelines.</li>
                      <li>Pricing, Shipping, and Return Policies.</li>
                      <li>Customer Service Standards.</li>
                      <li>Prohibited Products Policy.</li>
                    </ul>
                    <p>
                      Failure to comply with these standards may result in{" "}
                      <strong>
                        warnings, account suspension, or permanent removal
                      </strong>{" "}
                      from the Sellora Marketplace. We encourage all sellers to
                      regularly review our <strong>Seller Policy</strong> Center
                      to stay up to date on the latest requirements and best
                      practices.
                    </p>
                  </div>
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