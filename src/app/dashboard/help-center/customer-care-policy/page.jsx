'use client'
import React, { useEffect, useState } from 'react'
import LeftSideBar from '../LeftSideBar';
import LeftMobileSideBar from '../LeftMobileSideBar';
import SearchBox from '../SearchBox';
import { baseUrl } from '@/Http/helper';
import Link from 'next/link';
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
              <Link href={`${baseUrl}dashboard/help-center/featured-guides`}>  Feautured Guides </Link>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Customer Care Policy
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
              <Link href={`${baseUrl}dashboard/help-center/featured-guides`}>  Feautured Guides </Link>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Customer Care Policy
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
  <h2>Customer Care Policy</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>What is the Policy?</li>
    <li>Additional Guidelines</li>
    <li>Frequently asked questions</li>
  </ul>
  <div className="section-box">
    <h3>Overview</h3>
    <p>
      As a Sellora Marketplace sell er, you are responsible for responding
      promptly and professionally to all order-related inquiries from customers
      and Sellora Customer Care. Before replying to any inquiries, we strongly
      recommend reviewing this Customer Care Policy to ensure your responses
      align with Sellora Marketplace standards. This includes meeting response
      time requirements, maintaining a helpful and respectful tone, and
      resolving customer issues in a timely manner. Failure to comply with this
      policy—or any other Sellora Marketplace retailer guidelines—may result in
      account warnings, suspension, or permanent removal from the platform.
      Always prioritize customer satisfaction and follow Sellora’s service
      standards to maintain your account in good standing.
    </p>
  </div>
  <h3>What is the policy?</h3>
  <p>
    As a Sellora Marketplace seller, you are required to respond to all customer
    and Sellora Customer Care inquiries—received via email, phone, or your
    Seller Center buyer question—within <strong>24 hours of receipt</strong>,
    including weekends and any Additional Days Off or Operational Outages.
  </p>
  <p>
    In cases where you receive a <strong>Better Business Bureau (BBB)</strong>{" "}
    or <strong>Attorney General complaint</strong>, a{" "}
    <strong>high-quality response is required within 1 hour of receipt.</strong>
  </p>
  <p>
    <strong>Pro Tip: Maintain a High Seller Response Rate</strong>
  </p>
  <ul>
    <li>
      Your <strong>Seller Response Rate</strong> is the percentage of inquiries
      you respond to within 24 hours.
    </li>
    <li>
      You must maintain a{" "}
      <strong>Seller Response Rate of over 95% at all times</strong>.
    </li>
  </ul>
  <p>
    <strong>Consequences for Non-Compliance</strong>
  </p>
  <p>
    Failure to meet the 24-hour response requirement may result in the following
    actions by Sellora:
  </p>
  <ul>
    <li>
      <strong>Cancellation</strong> of unshipped orders
    </li>
    <li>
      <strong>Refunds</strong> issued on shipped orders to satisfy the customer
    </li>
    <li>
      <strong>Category-level restrictions</strong> imposed on your seller
      account
    </li>
    <li>
      <strong>Suspension</strong> or <strong>termination</strong> of your
      Marketplace account
    </li>
  </ul>
  <div className="notes_11">
    <h3>Important Notes</h3>
    <ul>
      <li>
        <strong>You cannot dispute order cancellations or refunds</strong>{" "}
        resulting from failure to respond within 24 hours.
      </li>
      <li>
        All responses must be clear, professional, and aim to resolve the
        customer's issue promptly.
      </li>
    </ul>
  </div>
  <h3>Additional guidelines</h3>
  <div className="compliance-section">
    <div className="compliance-box required_11">
      <h2>Required</h2>
      <ul>
        <li>
          Customer support for U.S. transactions must{" "}
          <strong>be provided in English</strong>.
        </li>
        <li>
          <strong>Voicemail</strong> must be available if a live agent is
          unavailable.
        </li>
        <li>
          <strong>A greeting</strong> must be played before placing customers in
          a call queue.
        </li>
        <li>
          If calls are <strong>monitored or recorded</strong>, notify the
          customer accordingly.
        </li>
        <li>
          Clearly represent yourself as a{" "}
          <strong>separate entity from Sellora.com</strong>.
        </li>
        <li>
          Provide <strong>accurate and up-to-date contact information.</strong>
        </li>
        <li>
          Regularly{" "}
          <strong>check spam folders and whitelist Sellora emails</strong> to
          ensure you receive all customer messages.
        </li>
      </ul>
    </div>
    <div className="compliance-box prohibited">
      <h2>Prohibited</h2>
      <ul className="sublist">
        <li>
          Including{" "}
          <strong>marketing or promotional materials, or links</strong> to
          external websites (non-Sellora.com).
        </li>
        <li>
          Providing{" "}
          <strong>inaccurate or misleading contact information</strong>,
          including redirecting to unrelated businesses.
        </li>
        <li>
          Using <strong>automated responses</strong> that require multiple
          follow-ups.
        </li>
        <li>
          Making <strong>misleading claims</strong> or{" "}
          <strong>overpromising</strong> in communications.
        </li>
        <li>
          <strong>Initiating contact</strong> with customers outside of your{" "}
          <strong>Sellora Center Inbox</strong>. (Responding via phone is
          allowed if the customer initiates the call.)
        </li>
        <li>
          Including <strong>advertisements</strong> in voicemail greetings or
          hold messages.
        </li>
        <li>
          Using <strong>Google Voice</strong>, other{" "}
          <strong>internet-based phone numbers</strong>, or{" "}
          <strong>private residential numbers</strong> for customer support.
        </li>
        <li>
          Sending <strong>unsolicited messages</strong>, including texts, calls,
          or emails, especially for marketing purposes.
        </li>
        <li>
          Using <strong>abusive or threatening language</strong> toward
          customers, Sellora, or other sellers.
        </li>
        <li>
          Using{" "}
          <strong>"Sellora" in your customer service email address</strong>.
        </li>
      </ul>
    </div>
  </div>
  <h3>Pro tip</h3>
  <p>
    Sellora automatically updates customers about their order status at each
    stage.{" "}
    <strong>You do not need to send additional order or product updates</strong>{" "}
    unless the customer contacts you directly.
  </p>
  <div className="notes_11">
    <h3>Notes</h3>
    <p>
      The information in this policy and related links is for general
      informational purposes only and does not constitute legal advice; Sellora
      does not endorse or assume responsibility for any third-party content
      linked, and your use of such content is at your own discretion.
    </p>
  </div>
  <h2>Frequently asked questions</h2>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          What should I do if a customer reaches out to me before they’ve made a
          purchase?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          You are allowed to respond to customer inquiries about a product both
          before and after a sale. If a customer reaches out with questions
          prior to purchasing, provide accurate, helpful, and professional
          information to assist their buying decision.You may also receive
          messages forwarded by Sellora Customer Care.For detailed steps on how
          to manage these messages, refer to Respond to Customer Messages in
          Seller Center.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          I am unable to cancel or refund a customer order. What should I do?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          If you're unable to cancel or refund a customer order, you are still
          required to respond to the customer inquiry promptly. Clearly and
          professionally explain the reason the cancellation or refund cannot be
          processed, and provide any relevant order details or next steps.
          Maintaining clear communication helps ensure a positive customer
          experience, even if the request cannot be fulfilled.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          Can I use an automated answering system to respond to customers?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          While you are required to offer toll-free telephone support for
          Sellora orders, Sellora prefers that live agents are available to
          assist customers with Marketplace-related inquiries. Automated
          answering systems may be used for basic routing or after-hours
          support, but they should not replace live agent availability during
          business hours.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          Why did Sellora Customer Care provide a resolution to the customer?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Sellora Customer Care may, at its sole discretion, take customer
          service actions in the best interest of the customer. This can
          include, but is not limited to, canceling orders, issuing refunds,
          processing returns, or making other service adjustments to ensure a
          positive customer experience.
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