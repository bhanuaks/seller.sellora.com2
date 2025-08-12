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
                <a href="#">Help</a>{" "}
              </li>
              <li>
                <a href="#">Getting Started</a>{" "}
              </li>
              <li>
                <a href="#" className="active_002">
                  Choose an Approved Partner Services Provider
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
                        Choose an Approved Partner Services Provider
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
              <h2>Choose an Approved Partner Services Provider</h2>
              <h3>In this guide</h3>
              <ul className="clean-decorative-list">
                <li>Overview</li>
                <li>How does it work?</li>
                <li>Additional guidelines</li>
                <li>Frequently asked questions</li>
              </ul>
              <div className="section-box">
                <h3>Overview</h3>
                <p>
                  An Approved Partner Services Provider is a third-party company
                  listed in the Sellora Marketplace that offers specialized
                  services to support and enhance your eCommerce business
                  operations. Collaborating with a Solution Provider approved by
                  Sellora can improve your business efficiency and help optimize
                  your online sales performance.
                </p>
              </div>
              <div className="notes_11">
                <h3>Notes</h3>
                <p>
                  If you already work with an Approved Partner Services Provider
                  and just need help generating their API Credentials, You’re
                  not permitted to share your Sellora API keys with a Partner
                  Services Provider who hasn’t been approved by Sellora
                </p>
              </div>
              <h3>How does it work?</h3>
              <p>
                Approved Partner Services Providers can manage and synchronize
                your eCommerce data with the Sellora Marketplace using data
                feeds. Some providers offer full-service integration, while
                others focus on specific functions. Each integration is
                customized to meet your unique business needs. To learn more
                about costs, features, and capabilities, contact the Approved
                Partner Services Provider of your choice directly.
              </p>
              <div className="table-container2">
                <table>
                  <thead>
                    <tr>
                      <th width="50%">Type</th>
                      <th width="50%">Services</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ul>
                          <li>All Service Types</li>
                        </ul>
                      </td>
                      <td>
                        Our Approved Partner Services Providers offer a wide
                        range of services including listing setup and
                        management, inventory control, order fulfillment,
                        pricing strategy, and more to support your eCommerce
                        business needs.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          <li>Brand Protection</li>
                        </ul>
                      </td>
                      <td>
                        Services designed to safeguard your brand’s reputation
                        and intellectual property by monitoring for counterfeit
                        products, unauthorized sellers, and trademark
                        infringements in the marketplace.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          <li>Complete Account management</li>
                        </ul>
                      </td>
                      <td>
                        Comprehensive services that handle all aspects of your
                        seller account, including performance monitoring,
                        compliance, customer communication, and strategy
                        development to maximize your business growth on Sellora.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          <li>Performance management</li>
                        </ul>
                      </td>
                      <td>
                        Complete Account Management is a comprehensive service
                        that helps you efficiently run your Sellora.com seller
                        account. This includes managing your product listings,
                        inventory, orders, customer communication, and
                        performance metrics to maximize sales and maintain a
                        positive seller reputation. With expert support, you can
                        focus on growing your business while ensuring day-to-day
                        operations run smoothly.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="notes_11">
                <h3>Notes</h3>
                <p>
                  All Approved Partner Services Providers are subject to change
                  without prior notice.
                </p>
              </div>
              <h3>Additional guidelines</h3>
              <p>
                After selecting your Approved Solution Provider on the Partner
                Services platform, you can add or update your provider through
                the following method:
              </p>
              <ul>
                <li>
                  <strong>Partner Services Provider on Seller Center:</strong>{" "}
                  Use Seller Center to easily authenticate and authorize your
                  Approved Solution Providers. To update your provider, navigate
                  to the <strong>Connect</strong> section under Partner Services
                  in the Seller Center.
                </li>
              </ul>
              <h3>Pro tip</h3>
              <p>
                Consider reviewing your inventory of Approved Partner Services
                Providers once a year and revoke access for any Approved Partner
                Services Providers who should no longer have access to your
                data.
              </p>
              <h3>Frequently asked questions</h3>
              <div className="faq-container">
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      Do I need to choose an Approved Partner Services Provider?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      Yes, you must use an Approved Partner Services Provider to
                      access certain specialized services. However, if you
                      prefer, you can manage your Marketplace account on your
                      own without using a provider.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      I'm not sure if I want to use an Approved Partner Services
                      Provider. When do I need to decide?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      We recommend making your decision as soon as possible to
                      help get your items live on Sellora Marketplace quickly.
                      However, using an Approved Partner Services Provider is
                      optional—if you are comfortable managing your daily
                      operational tasks, you can choose to proceed without one
                      once your account is live.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      Do I have to pay an Approved Partner Services Provider to
                      help me manage my account? How much does it cost?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      Each Approved Partner Services Provider has its own
                      pricing structure and contract terms. Please contact the
                      provider directly to get detailed information about their
                      fees and services.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      Which Approved Partner Services Provider is right for me
                      and my business?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      We do not provide specific recommendations or advice on
                      which Approved Partner Services Provider is the best fit
                      for your business. Please evaluate your business needs and
                      goals carefully, and select the provider that aligns best
                      with your requirements.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      What if I want to use a specific Partner Services Provider
                      that isn't on your list. Should I wait to integrate with
                      Sellora?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      If you want to work with a Partner Services Provider that
                      isn’t currently listed, they can apply for approval. Their
                      application will be reviewed, and once approved, they will
                      be able to support your account. You do not need to wait
                      to integrate with Walmart while this process is underway.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      What if I want to use a specific Partner Services Provider
                      that isn't on your list. Should I wait to integrate with
                      Sellora?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      If you want to work with a Partner Services Provider that
                      isn’t currently listed, they can apply for approval. Their
                      application will be reviewed, and once approved, they will
                      be able to support your account. You do not need to wait
                      to integrate with Walmart while this process is underway.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      Can I use more than one Approved Partner Services
                      Provider? For example, can I choose to use specific
                      Approved Solution Providers for specific services?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      Yes, you can use multiple Approved Partner Services
                      Providers to manage different aspects of your Sellora
                      Marketplace account. For instance, you might choose one
                      provider to handle shipping integration and another to
                      manage inventory.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      If I don't like the Approved Partner Services Provider
                      I've chosen, can I switch to a different provider? Would
                      those changes affect my account?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      Yes, you can switch to another Approved Partner Services
                      Provider or opt to use our direct integration method at
                      any time. Making this change will not affect the status of
                      your account. Be sure to revoke access for your previous
                      provider to ensure they no longer have access to your
                      data.
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
