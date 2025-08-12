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
              <Link href={`${baseUrl}dashboard/help-center/faq`}>Faq</Link>
            </li>
            <li>
              <a href="#" className="active_002">
                Customer Support
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
              <Link href={`${baseUrl}dashboard/help-center/faq`}>Faq</Link>
            </li>
            <li>
              <a href="#" className="active_002">
                Customer Support
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
    <h2>Customer Support</h2>
  </div>
  <div className="new_content_11">
    <div className="faq-container">
      <div className="accordion-item">
        <div className="accordion-header">
          <span>What is Sellora’s Customer Care Policy for Sellers?</span>
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>
        </div>
        <div className="accordion-content">
          <p>
            Sellora expects sellers to deliver a professional, helpful, and
            timely customer experience. The{" "}
            <strong>Customer Care Policy</strong> includes:
          </p>
          <ul>
            <li>
              Responding to buyer queries within <strong>24 hours</strong>
            </li>
            <li>Handling complaints with clarity and respect</li>
            <li>Providing accurate product information</li>
            <li>
              Supporting returns, refunds, and replacements according to
              platform policies
            </li>
            <li>
              Ensuring communication is free from misleading or offensive
              content
            </li>
            <li>
              Failure to follow these standards may result in warnings,
              penalties, or account suspension.
            </li>
          </ul>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <span>Where can I view and manage buyer messages?</span>
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>
        </div>
        <div className="accordion-content">
          <p>
            You can manage buyer communications directly through the{" "}
            <strong>Seller Center</strong>:
          </p>
          <ul>
            <li>
              Navigate to <strong>“Buyer Questions”</strong> in the dashboard
            </li>
            <li>Filter by unread, replied, or flagged messages</li>
            <li>
              Use the message thread to respond to product queries, order
              issues, or feedback
            </li>
          </ul>
          <p>
            Buyers may message you regarding product details, shipping delays,
            or complaints—timely response is essential.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <span>How soon should I reply to a buyer’s message?</span>
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>
        </div>
        <div className="accordion-content">
          <p>
            Sellers are required to respond to buyer messages within{" "}
            <strong>24 hours</strong> of receiving them.
          </p>
          <p>
            Quick responses improve your{" "}
            <strong>Customer Responsiveness Score</strong>, which directly
            impacts your seller performance and buyer trust.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <span>Can I use templates or auto-replies for buyer queries?</span>
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>
        </div>
        <div className="accordion-content">
          <p>
            No, Sellora does not allow automated or template-based replies for
            buyer queries.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What types of messages are not allowed in buyer communication?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Prohibited communication includes:</p>
          <ul>
            <li>
              Sharing external contact details (phone numbers, email, WhatsApp,
              etc.)
            </li>
            <li>Asking buyers to cancel or alter orders unnecessarily</li>
            <li>Promoting products outside Sellora</li>
            <li>Abusive, offensive, or misleading language</li>
          </ul>
          <p>
            Violating these terms may lead to{" "}
            <strong>communication restrictions or suspension.</strong>
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            Can I contact a buyer after a return or cancellation?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            You may respond to post-order messages regarding returns or issues,
            but <strong>unsolicited follow-ups</strong> are discouraged.
          </p>
          <p>
            For escalated issues (e.g., wrong item received), use the Seller
            Support escalation route instead of contacting the buyer repeatedly.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            How do I handle negative feedback or reviews from buyers?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>To address poor feedback:</p>
          <ul>
            <li>
              <strong>Check for order issues</strong> (e.g., delayed delivery,
              wrong product, etc.)
            </li>
            <li>
              Reply politely via the message panel if clarification is needed
            </li>
            <li>Offer a resolution—refund, replacement, or explanation</li>
            <li>
              If the review violates guidelines (e.g., abusive or false), you
              can <strong>report</strong> it to Sellora for removal
            </li>
          </ul>
          <p>
            Do not pressure the buyer to change reviews in exchange for
            compensation—this violates Sellora policy.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            How do I report abusive or fraudulent buyer behavior?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            If a buyer sends threatening, misleading, or inappropriate messages,
            you can:
          </p>
          <ul>
            <li>
              Click <strong>“Report Buyer”</strong> in the communication thread
            </li>
            <li>Provide screenshots and order reference</li>
            <li>
              Sellora’s compliance team will investigate and take appropriate
              action
            </li>
          </ul>
          <p>
            Maintaining respectful communication on both sides is crucial for
            platform integrity.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How can I improve my customer response performance?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>To enhance your communication score:</p>
          <ul>
            <li>Check messages twice daily</li>
            <li>Use response templates for speed</li>
            <li>Assign a dedicated support agent if handling high volume</li>
            <li>
              Avoid unnecessary delays—even “Acknowledged, will follow up soon”
              helps maintain response SLAs
            </li>
          </ul>
          <p>
            Sellora ranks sellers partly on responsiveness, which can influence
            visibility and promotion eligibility.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            Where can I see my customer support performance metrics?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Visit{" "}
            <strong>Seller Center &gt; Performance &gt; Seller Feedback</strong>
            . Metrics include:
          </p>
          <ul>
            <li>Average response time</li>
            <li>% of messages responded to within 24 hrs</li>
            <li>Customer complaints or disputes</li>
            <li>Negative feedback ratio</li>
          </ul>
          <p>
            Maintaining strong communication scores helps unlock growth
            programs, better exposure, and campaign access.
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