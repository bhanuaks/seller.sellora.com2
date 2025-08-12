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
                Returns &amp; Refunds
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
                Returns &amp; Refunds
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
    <h2>Returns &amp; Refunds</h2>
  </div>
  <div className="new_content_11">
    <div className="faq-container">
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How do returns work on Sellora?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Sellora allows buyers to return items based on category-specific
            return windows and reasons such as:
          </p>
          <ul>
            <li>Wrong product delivered</li>
            <li>Item defective/damaged</li>
            <li>Not as described</li>
            <li>Size or fit issues (for fashion categories)</li>
          </ul>
          <p>
            Returns may be either <strong>platform-fulfilled</strong> (logistics
            handled by Sellora) or <strong>seller-fulfilled</strong> (logistics
            handled by the seller). Each return must be processed promptly to
            maintain your performance metrics.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>Where can I manage my return settings?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Navigate to Seller Center &gt; Setting &gt; Return Setting. From
            here, you can:
          </p>
          <ul>
            <li>Set return pickup addresses</li>
            <li>Define restocking policies</li>
            <li>Opt in/out of auto-approvals for certain categories</li>
            <li>Set product-specific return eligibility</li>
          </ul>
          <p>
            You can apply different rules for fragile, non-returnable, or
            high-value items—within Sellora’s allowed policy limits.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What is the return window on Sellora?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Return windows vary by category but are typically:</p>
          <ul>
            <li>
              <strong>7 to 10 days</strong> for fashion and footwear
            </li>
            <li>
              <strong>10 to 15 days</strong> for electronics and appliances
            </li>
            <li>
              <strong>No returns</strong> on perishables, customized, or
              intimate products (unless damaged/defective)
            </li>
          </ul>
          <p>
            Check your category-specific rules in the{" "}
            <strong>Referral Fee &amp; Policy Guide</strong> on Seller Center.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What is Sellora’s seller-fulfilled return policy?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>If you handle your own returns, you are responsible for:</p>
          <ul>
            <li>Providing a clear return pickup or shipping address</li>
            <li>Accepting eligible return requests</li>
            <li>Coordinating reverse logistics with the buyer</li>
            <li>
              Issuing a refund or replacement within 5–7 business days of
              receiving the returned product
            </li>
          </ul>
          <p>
            Make sure your policy is aligned with Sellora’s buyer protection
            policy to avoid penalties.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            Can I set different return rules for different products?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Yes. From <strong>Product Listing &gt; Return Settings</strong>, you
            can apply specific policies like:
          </p>
          <ul>
            <li>Return not accepted (if allowed for that category)</li>
            <li>Return accepted only if damaged</li>
            <li>Replacement only, no refund</li>
          </ul>
          <p>
            However, Sellora may override this if your policy is inconsistent
            with platform standards for that category.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How are refunds handled?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Refunds are initiated once the returned item is received and
            inspected (if required). You can process the refund:
          </p>
          <ul>
            <li>
              Directly from the<strong>Return Management Dashboard</strong>
            </li>
            <li>Within 2–3 business days of receiving the product</li>
          </ul>
          <p>
            For prepaid orders, refunds go to the customer’s original payment
            method. For COD, Sellora credits the buyer’s wallet or bank account
            (based on buyer preferences).
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What happens if I reject a return?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>You may reject a return only in cases where:</p>
          <ul>
            <li>The product is not in the return window</li>
            <li>
              The item has been used, damaged by the buyer, or is not the one
              originally sold
            </li>
          </ul>
          <p>
            However, you must provide photo/video evidence when rejecting.
            Unjustified rejections may lead to claims against you, and your
            seller rating may be impacted.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            Can I deduct restocking fees or handling charges from refunds?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Sellora allows limited deductions (e.g., shipping fees or
            restocking) only if:
          </p>
          <ul>
            <li>Clearly mentioned in your product listing and return policy</li>
            <li>
              The item is returned without valid reason (e.g., buyer remorse)
            </li>
          </ul>
          <p>
            Unauthorized deductions may result in refund reversals or buyer
            disputes.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>Where can I view return trends and insights?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Visit Seller Center &gt; Performance &gt; Returns. This dashboard
            provides:
          </p>
          <ul>
            <li>Return rates by category</li>
            <li>Common return reasons</li>
            <li>Refund timelines</li>
            <li>Buyer feedback on returns</li>
            <li>
              Insights to reduce returns (e.g., improving size charts, image
              clarity)
            </li>
          </ul>
          <p>
            Use this data to identify problem SKUs and take corrective action to
            improve buyer satisfaction and reduce return losses.
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