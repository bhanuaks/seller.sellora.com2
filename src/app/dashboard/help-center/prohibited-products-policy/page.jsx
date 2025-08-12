'use client'
import React, { useEffect, useState } from 'react'
import LeftSideBar from '../leftSideBar';
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
                Prohibited Products Policy
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
                Prohibited Products Policy
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
  <h2>Prohibited Products Policy</h2>
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
      To ensure a safe, legal, and trustworthy shopping experience for all
      users,{" "}
      <strong>
        all products listed on Sellora.com must comply with applicable local,
        state, and federal laws and regulations.
      </strong>
    </p>
    <p>
      This policy outlines the types of products that are{" "}
      <strong>strictly prohibited</strong> on the Sellora Marketplace. Sellers
      are responsible for ensuring that their product listings follow all
      relevant rules and standards. Non-compliance may result in the removal of
      listings, suspension of selling privileges, or other enforcement actions.
    </p>
  </div>
  <h3>What is the policy?</h3>
  <p>
    To maintain a compliant and secure marketplace, all products listed for sale
    on Sellora.com must adhere to the following requirements:
  </p>
  <p>
    <strong>1. Legal &amp; Regulatory Compliance</strong>
  </p>
  <ul>
    <li>
      Products must comply with all applicable local, state, and federal laws
      and regulations.
    </li>
    <li>
      Product labels, descriptions, and images:
      <ul>
        <li>Must be in English.</li>
        <li>Must not contain conflicting or misleading information.</li>
        <li>May include other languages only if English is also present.</li>
      </ul>
    </li>
    <li>
      Product information must align with the National Institute of Standards
      and Technology (NIST) Handbook 130 – Current Edition, IV. Uniform
      E-Commerce Regulation, where applicable.
    </li>
    <li>
      Shipping labels must meet all legal requirements and those of any relevant
      regulatory agencies.
    </li>
  </ul>
  <p>
    <strong>2. Prohibited Activities</strong>
  </p>
  <p>Sellora strictly prohibits the following:</p>
  <ul>
    <li>
      Selling stolen goods
      <br /> This is illegal and violates intellectual and property rights.
    </li>
    <li>
      Retail Arbitrage &amp; Unauthorized Fulfillment
      <ul>
        <li>
          You may not buy products from other online retailers (e.g., smart home
          devices or streaming players) to resell on Sellora.
        </li>
        <li>You may not use Sellora competitors to fulfill Sellora orders.</li>
      </ul>
    </li>
    <li>Unauthorized Resale of Branded Items</li>
  </ul>
  <p>
    You must legally own and have licensing rights to sell branded or
    trademarked products.
  </p>
  <h3>3. Enforcement &amp; Responsibility</h3>
  <ul>
    <li>
      Sellora may remove any listing that:
      <ul>
        <li>Violates laws, this policy, or other Sellora Seller Policies.</li>
        <li>Is deemed incompatible with Sellora’s brand values.</li>
      </ul>
    </li>
    <li>
      Corrective actions may include:
      <ul>
        <li>Listing removal</li>
        <li>Account suspension</li>
        <li>Marketplace account termination</li>
      </ul>
    </li>
  </ul>
  <p>
    Sellora reserves the right to update or remove product categories or
    territories in its Prohibited Products Policy at any time without notice.
  </p>
  <div className="notes_11">
    <h3>Notes</h3>
    <p>
      This policy, along with any related guidelines, is{" "}
      <strong>subject to change at any time without prior notice</strong>. As a
      seller on Sellora Marketplace, <strong>you are solely responsible</strong>{" "}
      for ensuring that your products and listings comply with the{" "}
      <strong>most current version</strong> of this policy, including any future
      updates or amendments.
    </p>
  </div>
  <h3>Additional guidelines</h3>
  <p>
    <strong>Prohibited products by territory</strong>
  </p>
  <p>
    Sellora Marketplace sellers must comply with all applicable federal laws,
    international trade regulations, and economic sanctions. Failure to meet
    these requirements may result in listing removal, account suspension, or
    termination of your Sellora Marketplace account.
  </p>
  <p>
    <strong>Territorial and Sanctions-Based Restrictions</strong>
  </p>
  <p>As a Sellora Marketplace seller, you must ensure the following:</p>
  <div className="compliance-section">
    <div className="compliance-box required_11">
      <h2>Required</h2>
      <p>
        Neither you, your company, your beneficial owners, nor any officer,
        director, employee, agent, or third-party representative acting on your
        behalf may be listed on any <strong>Restricted Party List</strong>,
        including but not limited to:
      </p>
      <ul>
        <li>
          <strong>Office of Foreign Assets Control (OFAC)</strong> Specially
          Designated Nationals (SDN) List
        </li>
        <li>Other U.S. or international sanctions or restriction lists</li>
      </ul>
      <p>
        All products and their{" "}
        <strong>raw materials, components, and ingredients</strong> must be{" "}
        <strong>legally admissible</strong> into the United States.
      </p>
    </div>
    <div className="compliance-box prohibited">
      <h2>Prohibited</h2>
      <p>
        Contain materials, components, or ingredients produced through the use
        of <strong>forced labor</strong>
      </p>
      <p>
        Involve production, sourcing, processing, or transportation through the
        following <strong>prohibited regions:</strong>
      </p>
      <ul className="sublist">
        <li>Iran</li>
        <li>Cuba</li>
        <li>North Korea</li>
        <li>Syria</li>
        <li>
          The following regions of <strong>Ukraine</strong>:{" "}
        </li>
        <li>
          <strong>Luhansk People’s Republic</strong>
        </li>
        <li>
          <strong>Donetsk People’s Republic</strong>
        </li>
        <li>
          <strong>Crimean Peninsula</strong>
        </li>
      </ul>
      <p>
        Are connected to <strong>sanctioned individuals or entities</strong>,
        even if outside the above territories
      </p>
      <p>
        Are produced in whole or part by any entity or region that would cause
        the product to be prohibited from U.S. entry under{" "}
        <strong>19 U.S.C. § 1307</strong>, or are subject to{" "}
        <strong>withhold release orders</strong> or other{" "}
        <strong>U.S. government trade restrictions</strong>
      </p>
    </div>
  </div>
  <h3>Additional Sanctions &amp; Territory-Specific Bans</h3>
  <ul>
    <li>
      Other sanctions may apply to products from territories not listed above.
    </li>
    <li>
      Sellora may notify you regarding restrictions or limitations on products
      as necessary based on current legal and regulatory guidance.
    </li>
  </ul>
  <h3>Prohibited products by category</h3>
  <p>
    To ensure the safety, legality, and integrity of the Sellora Marketplace,
    certain product categories are <strong>strictly prohibited</strong> or{" "}
    <strong>subject to additional restrictions</strong>. Each category may have
    unique compliance requirements, and failure to meet them may result in your
    item being <strong>automatically unpublished</strong> or your account being{" "}
    <strong>suspended or terminated</strong>.
  </p>
  <div className="box_11_7">
    <div className="column highlight">
      <ul>
        <li>Alcohol</li>
        <li>Animals</li>
        <li>Art</li>
        <li>Artifacts and Antiquities</li>
        <li>Auto and Motor Vehicles</li>
        <li>Autographs and Collectibles</li>
        <li>Baby Products</li>
        <li>Children’ Products</li>
        <li>Cosmetic Products</li>
        <li>Dietary Supplements</li>
        <li>Digital Goods</li>
        <li>Drugs and Drug Paraphernalia</li>
        <li>Electronics and Radio Frequency Devices</li>
        <li>Food Products</li>
        <li>Funeral Products</li>
        <li>Hazardous Items</li>
        <li>Home Goods</li>
        <li>Intellectual Property</li>
        <li>
          Jewellery, Watches, Precious Gemstones, Currency, Coins and Precious
          Metals (Covered Goods)
        </li>
        <li>Medical Devices</li>
        <li>Medical Foods</li>
        <li>Native American Products</li>
      </ul>
    </div>
    <div className="column">
      <ul>
        <li>Offensive Content</li>
        <li>Explicit/Adult Content</li>
        <ul>
          <li>Sex Toys &amp; Adult Novelty</li>
          <li>Inappropriate Content</li>
        </ul>
        <li>Intolerance</li>
        <li>Politics</li>
        <li>Violence and Tragedy</li>
        <li>Halloween Items</li>
        <li>Pet food, Supplements, Medicines and other Products</li>
        <li>PFAS Chemicals</li>
        <li>Plants and Seeds</li>
        <li>Plastic - Biodegradable</li>
        <li>Police and Law Enforcement Products</li>
        <li>Recalled Products</li>
        <li>Restricted / Illegal Products</li>
        <li>Software</li>
        <li>Textiles and Apparel</li>
        <li>Tickets</li>
        <li>Tobacco, E-Cigarettes and Vaping Products</li>
        <li>Weapons</li>
        <ul>
          <li>Air Powered Guns, BB Guns Toy Guns and Imitation Firearms</li>
          <li>Firearms</li>
          <li>Firearms Accessories</li>
          <li>Firearms Ammunition</li>
          <li>Firearm Ammunition</li>
          <li>Knives and other Melee Weapons.</li>
        </ul>
      </ul>
    </div>
  </div>
  <h3>Categories that require pre-approval</h3>
  <p>
    Items in the following categories require pre-approval from Sellora before
    you can offer them for sale. To apply for approval, select the Help button
    in the Seller Center menu bar to contact Support.
  </p>
  <ul>
    <li>Fragrance</li>
    <li>Luxury brands</li>
    <li>Software</li>
    <li>Cell phones and accessories</li>
    <li>Halloween and select seasonal products</li>
    <li>Custom content</li>
  </ul>
  <p>
    Jewelry, watches, precious gemstones, currency, coins and precious metals
    (subject to the Marketplace FinCEN Covered Goods Policy)
  </p>
  <p>
    <strong>Sellora’s handling of your Prohibited Products</strong>
  </p>
  <p>
    Sellora reserves the right to{" "}
    <strong>unpublish, remove, or take enforcement action against</strong> any
    product listings that violate our{" "}
  </p>
  <h3>Prohibited Products Policy.</h3>
  <h3>Inventory Management of Prohibited Items</h3>
  <p>
    If prohibited products are in Sellora’s possession—either through{" "}
    <strong>Sellora Fulfillment Services (SFS)</strong> or otherwise—Sellora may
    manage the inventory in the following ways:
  </p>
  <ul>
    <li>As required by law enforcement or regulatory agencies</li>
    <li>As determined appropriate at Sellora’s sole discretion</li>
  </ul>
  <p>
    We may attempt to contact you regarding the return of prohibited products.
    If you <strong>do not respond within five (5) calendar days</strong>,
    Sellora may:
  </p>
  <ul>
    <li>
      <strong>Return</strong> the products to you
    </li>
    <li>
      <strong>Destroy or dispose</strong> of the products
    </li>
    <li>
      <strong>Otherwise manage the items</strong> in a way deemed appropriate by
      Sellora
    </li>
  </ul>
  <div className="notes_11">
    <h3>Notes</h3>
    <p>
      The information provided in this policy and any linked content is intended
      for{" "}
      <strong>
        general informational purposes only and should not be considered legal
        advice.
      </strong>
    </p>
    <p>
      This policy may contain <strong>hyperlinks to third-party</strong>{" "}
      content. Sellora does{" "}
      <strong>not warrant, endorse, or accept liability</strong> for any
      third-party websites, materials, or information. Your access to and
      reliance on such content is entirely{" "}
      <strong>at your own discretion and risk</strong>.
    </p>
  </div>
  <h2>Frequently asked questions</h2>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          I found a prohibited product on Sellora.com. How can I report it?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Visit the Store and Company feedback page and choose Company Feedback
          and Questions from the drop-down menu. You can leave a comment along
          with your contact information.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How can I appeal a Trust and Safety violation?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          If you believe a violation was issued in error, you may submit an
          appeal. To begin the process:
        </p>
        <ul>
          <li>
            <strong>Review Sellora’s Trust and Safety Policy</strong> to
            understand the reason for the violation.
          </li>
          <li>
            Gather any <strong>supporting documentation</strong> or{" "}
            <strong>evidence</strong> that demonstrates compliance.
          </li>
          <li>
            Contact <strong>Sellora Support</strong> through the{" "}
            <strong>Seller Center Help menu</strong> and request a review of the
            violation.
          </li>
          <li>
            Submit your appeal along with relevant details and documentation.
          </li>
        </ul>
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