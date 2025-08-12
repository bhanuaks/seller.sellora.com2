'use client'
import React, { useEffect, useState } from 'react'
import LeftSideBar from '../leftSideBar';
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
                Seller-fulfilled returns policy
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
                Seller-fulfilled returns policy
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
  <h2>Seller-fulfilled returns policy</h2>
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
      To ensure a smooth and consistent returns experience for customers, all
      seller-fulfilled orders must follow the Marketplace’s minimum return
      policy requirements. Sellers are required to provide a valid U.S. return
      address and offer a standard return window, typically at least 30 days.
      Certain items, such as perishable or customized products, may be
      non-returnable. These guidelines help maintain buyer trust and ensure a
      positive shopping experience.
    </p>
  </div>
  <h3>What is the policy?</h3>
  <p>
    <strong>1. Return centers</strong>
  </p>
  <p>
    Before accepting returns, you must set up your return setting in the Seller
    Center with a valid U.S. return address. Return addresses{" "}
    <strong>cannot</strong> be located in Hawaii, Alaska, or U.S. territories,
    including American Samoa, Guam, the Northern Mariana Islands, Puerto Rico,
    and the U.S. Virgin Islands. Additionally,{" "}
    <strong>P.O. boxes are not accepted</strong> as return addresses.
  </p>
  <p>
    You may set up multiple return addresses, but{" "}
    <strong>
      at least one valid return center must remain active at all times
    </strong>
    . By default, returns are routed to the return center closest to the
    customer unless you’ve specified otherwise through item-level return rules.
  </p>
  <h3>Important Notes:</h3>
  <ul>
    <li>
      Return Address display names must not include "Sellora" or any names
      associated with Sellora
    </li>
    <li>
      Sellora may audit and standardize return addresses to ensure compliance
      with carrier formatting.
    </li>
    <li>
      In the event of account termination, Sellora may redirect failed or
      undeliverable packages to its own return center.
    </li>
    <li>
      <strong>A failed delivery fee</strong> may apply if packages are rerouted
      to Sellora’s Las Vegas Return Center due to incomplete or invalid return
      address information.
    </li>
  </ul>
  <p>
    If your returns are mistakenly routed to Sellora’s Las Vegas Return Center,
    follow the appropriate process for handling returns via FedEx or USPS.
  </p>
  <h3>2. Return shipping carriers and labels</h3>
  <p>
    sellers are responsible for providing prepaid, trackable return shipping
    labels when a return is approved. Return labels must be issued using
    reliable carriers such as <strong>FedEx, UPS, or USPS</strong>, and must
    include accurate return center information.
  </p>
  <p>
    Return labels must be sent to the customer promptly to ensure a smooth
    return experience. The return shipping service must offer tracking and
    should be equal to or faster than the original delivery method.
  </p>
  <p>
    If a returnless refund is approved, no label is required. However, for all
    physical returns, it is the seller’s responsibility to cover the return
    shipping cost and ensure the customer can easily access the label and
    instructions.
  </p>
  <h3>Reminder:</h3>
  <p>
    {" "}
    Incorrect or incomplete shipping labels may result in delays or failed
    returns. Sellora reserves the right to review and audit return label
    compliance as part of its marketplace standards.
  </p>
  <h3>3. Return windows</h3>
  <p>
    All sellers must offer up to a 30-day <strong>return window</strong> from
    the date of delivery for most Marketplace items. This return period ensures
    customers have enough time to evaluate their purchases and request a return
    if needed.
  </p>
  <p>
    Certain categories may require <strong>longer return windows</strong> or
    have exceptions, such as perishable goods, personalized items, or digital
    products, which may be non-returnable. Return window requirements may also
    vary during promotional periods, such as holidays or special events.
  </p>
  <h3>Note:</h3>
  <p>
    Sellers are responsible for clearly displaying their return policy on the
    product detail page. Failure to meet Sellora’s minimum return window
    requirements may lead to enforcement actions, including suspension of
    listings or marketplace privileges.
  </p>
  <h3>4. Return policy exemptions</h3>
  <p>
    Certain product categories are exempt from the standard return policy due to
    their nature, condition, or safety concerns. Sellers must clearly disclose
    any return exemptions on the product detail page.
  </p>
  <p>
    <strong>Common return-exempt items include:</strong>
  </p>
  <ul>
    <li>Perishable goods (e.g., food, flowers, plants)</li>
    <li>Personalized or custom-made items</li>
    <li>Health and hygiene products if opened or used</li>
    <li>Digital downloads and software</li>
    <li>Hazardous materials or items with flammable liquids or gases</li>
  </ul>
  <p>
    While these products may be exempt from standard returns, sellers are still
    expected to honor returns for damaged, defective, or incorrect items in
    accordance with Sellora’s customer satisfaction standards.
  </p>
  <p>
    <strong>Important:</strong>
  </p>
  <p>
    All exemptions must comply with local laws and consumer protection
    regulations. Misuse of exemption policies may result in account warnings,
    listing removal, or other enforcement actions by Sellora.
  </p>
  <h3>5. Refunds</h3>
  <p>
    Sellers are required to issue <strong>timely and accurate refunds</strong>{" "}
    once a return is received or a resolution is approved. Refunds must be
    processed through the Seller Center and should reflect the appropriate
    amount based on the item’s condition, return reason, and any applicable
    deductions.
  </p>
  <h3>Key refund guidelines:</h3>
  <ul>
    <li>
      Refunds must be issued <strong>within 2 business days</strong> of
      receiving the returned item.
    </li>
    <li>
      For “Keep It” or returnless refunds, the refund should be processed
      promptly upon approval.
    </li>
    <li>
      If the returned item is damaged or missing parts, partial refunds may be
      issued with proper documentation and in compliance with Sellora policies.
    </li>
    <li>
      Shipping fees may only be deducted if clearly stated in the return policy
      and allowed under Sellora’s guidelines.
    </li>
  </ul>
  <h3>Reminder:</h3>
  <p>
    {" "}
    Delays or failure to issue refunds can result in customer complaints,
    claims, or enforcement actions against your seller account.
  </p>
  <h3>6. Return fees</h3>
  <p>
    <strong>Sellers are responsible for covering return shipping fees</strong>{" "}
    in most cases, especially when the return is due to the seller’s fault—such
    as damaged, defective, or incorrect items.
  </p>
  <h3>Return fee guidelines:</h3>
  <ul>
    <li>
      <strong>Seller-Fault Returns:</strong> If the item is defective, damaged,
      or not as described, the seller must cover 100% of the return shipping
      cost and issue a full refund.
    </li>
    <li>
      <strong>Customer-Fault Returns:</strong> If the customer returns the item
      for reasons such as "no longer needed" or "ordered by mistake," the seller
      may deduct return shipping fees only if clearly stated in the product
      listing’s return policy.
    </li>
    <li>
      <strong>Restocking Fees:</strong> Restocking fees are not allowed unless
      permitted by Sellora and clearly disclosed before purchase.
    </li>
  </ul>
  <p>
    <strong>Important:</strong>
  </p>
  <p>
    Hidden fees or improper fee deductions may lead to enforcement actions,
    including listing removal or account penalties. Sellers must follow all
    fee-related transparency guidelines as outlined by Sellora.com.
  </p>
  <h3>Additional guidelines</h3>
  <p>
    If a customer contacts you directly to initiate a return, you are required
    to provide a prepaid return shipping label and issue a full refund once the
    return is received or approved. Attempts to offer discounts or incentives to
    prevent the return are not allowed. If you provide any unauthorized offers,
    Sellora reserves the right to refund the customer on your behalf, and such
    transactions will not be eligible for dispute. Make sure to regularly verify
    and update your item-level return settings in the Seller Center to ensure
    compliance with Seller's return policy.
  </p>
  <div className="notes_11">
    <h3>Notes</h3>
    <p>
      The content provided in this policy, including any hyperlinks, is intended
      for <strong>general informational purposes only</strong> and does{" "}
      <strong>not constitute legal advice</strong>. Linked third-party content
      is not warranted, endorsed, or guaranteed by Sellora, and any reliance on
      such content is at your own discretion.
    </p>
  </div>
  <h2>Frequently asked questions</h2>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I cancel a customer-initiated return?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          <strong>No,</strong> sellers cannot cancel a return once it has been
          initiated by the customer. If the customer wishes to cancel their
          return request, they must{" "}
          <strong>contact Sellora Customer Care</strong> directly to proceed
          with the cancellation.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What items can’t be returned?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Certain items are considered <strong>non-returnable</strong> on
          Sellora.com due to safety, health, or product-specific restrictions.{" "}
          <strong>Sellora retains final authority</strong> to accept or decline
          any return request and will{" "}
          <strong>
            not accept returns for ineligible items under any circumstances.
          </strong>
        </p>
        <p>
          Sellora also reserves the right to <strong>refuse any return</strong>{" "}
          that may pose a{" "}
          <strong>risk to customers, associates, or facilities</strong>,
          including items that are damaged, contaminated, or hazardous.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What if a customer returns an item that requires assembly?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Items that require assembly—such as{" "}
          <strong>furniture, grills, bicycles, and similar products</strong>
          —must be <strong>fully disassembled and properly re-packaged</strong>{" "}
          before being returned to a store or handed over to an approved carrier
          (e.g., FedEx or USPS).
        </p>
        <p>
          Carriers <strong>may refuse to accept</strong> assembled or improperly
          packaged items for return. To avoid return delays or rejections,
          customers must follow all packaging and disassembly guidelines
          provided at the time of return initiation.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How will returned items affect my tax position?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Returned items may impact your tax reporting and obligations.{" "}
          <strong>Sellora recommends consulting your tax advisor</strong> to
          determine how returns—particularly <strong>in-store returns</strong>
          —may affect your tax position.
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