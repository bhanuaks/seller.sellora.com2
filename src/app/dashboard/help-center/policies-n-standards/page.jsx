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
                Policies &amp; Standards
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
                Policies &amp; Standards
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
    <h2>Policies &amp; Standards</h2>
  </div>
  <div className="new_content_11">
    <div className="faq-container">
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What should I do if my offers are unpublished due to “Reasonable
            Price Not Satisfied” under Sellora's Pricing Rules?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            If your product listings are unpublished due to violating Sellora’s
            pricing rules—specifically the “Reasonable Price Not Satisfied”
            condition—it means your current offer price is considered
            uncompetitive based on pricing trends and market benchmarks.
          </p>
          <p>
            Sellora continuously monitors prices across various marketplaces. If
            your product pricing becomes competitive again, the system will
            automatically republish your offer, typically within 48 hours. To
            speed up the process, you can proactively update your price to match
            or beat the suggested competitive rate.
          </p>
          <p>
            You can also refer to the{" "}
            <strong>Unpublished Listings Dashboard</strong>, where a{" "}
            <strong>Reference Price</strong> will be shown. This is based on
            multiple market indicators such as:
          </p>
          <ul>
            <li>Average selling prices from other platforms</li>
            <li>Historical price trends</li>
            <li>Buy Box prices</li>
            <li>Similar listings on Sellora</li>
            <li>External competitor pricing</li>
          </ul>
          <p>
            Use this reference price as a guide to update your product listing
            to a more competitive rate.
          </p>
          <p>
            If your listing is still unpublished <strong>after 48 hours</strong>{" "}
            of submitting a new price, you should take the following steps:
          </p>
          <ul>
            <li>Recheck your pricing against the reference.</li>
            <li>Make further adjustments if needed.</li>
            <li>
              If the issue persists, click on the <strong>Help</strong> option
              in the <strong>Seller Dashboard</strong> to raise a support
              ticket.
            </li>
          </ul>
          <p>
            Once you provide the revised price and any relevant documentation,
            the Sellora support team will review the case. If your updated
            pricing adheres to our rules, the offer will be republished.
          </p>
          <p>
            Sellora’s pricing policies are in place to maintain a healthy,
            competitive marketplace that benefits both sellers and buyers.
            Always ensure that your pricing stays within the guidelines to avoid
            disruptions in your listings.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What is the Sellora Marketplace return policy?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            All sellers on Sellora Marketplace are required to follow a standard
            return policy to ensure a consistent and fair experience for buyers.
            As a seller, you must accept returns in line with{" "}
            <strong>Sellora’s return guidelines</strong>, which include minimum
            service levels and timelines.
          </p>
          <p>
            {" "}
            Buyers may request a return for eligible items within the return
            window, and sellers are expected to process these returns promptly
            and professionally.
          </p>
          <p>
            {" "}
            For full details on return timelines, eligible products, and
            processing steps, please refer to the{" "}
            <strong>Orders &amp; Returns</strong> section
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What are the account policies every seller must follow on Sellora?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Sellora expects sellers to:</p>
          <ul>
            <li>Maintain an active TAX</li>
            <li>Submit accurate identity and tax documentation</li>
            <li>Update contact and bank details as needed</li>
            <li>Respond to support tickets and buyer inquiries on time</li>
            <li>Follow all local and platform-wide compliance regulations</li>
          </ul>
          <p>
            Violation of account policies may result in temporary or permanent
            suspension.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>Are there limits on how many products I can list?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Yes, <strong>item limits</strong> are applied to new sellers or
            specific categories. These limits ensure quality control and may
            include:
          </p>
          <ul>
            <li>Maximum number of listings (SKU count)</li>
            <li>Category-specific restrictions (e.g., electronics, beauty)</li>
            <li>Brand-level limitations (for unapproved brands)</li>
          </ul>
          <p>
            A full list is maintained in Seller Center &gt; Seller Help Center
            &gt; Selling and item limits.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What items or brands are prohibited from selling on Sellora?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Prohibited products include (but are not limited to):</p>
          <ul>
            <li>Counterfeit or replica goods</li>
            <li>Alcohol, tobacco, or vaping products</li>
            <li>Weapons or explosives</li>
            <li>Expired or recalled goods</li>
            <li>Products infringing trademarks or copyrights</li>
            <li>Medicines or cosmetics not approved by regulatory bodies</li>
          </ul>
          <p>
            A full list is maintained in{" "}
            <strong>
              Seller Center &gt; Seller Help Center &gt; Prohibited Products
            </strong>
            . Violations may lead to listing removals or permanent bans.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What rules must I follow when creating product listings?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>All product listings must:</p>
          <ul>
            <li>Be factually accurate and relevant</li>
            <li>Avoid exaggerated claims or prohibited keywords</li>
            <li>Have high-quality, clear images</li>
            <li>Use correct product titles, attributes, and variant mapping</li>
            <li>
              Comply with category-specific content rules (e.g., fashion sizing,
              electronics specs)
            </li>
          </ul>
          <p>
            Listings are reviewed regularly. Incorrect or misleading content may
            result in suppression.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What are the shipping and fulfillment requirements for sellers?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Sellers must:</p>
          <ul>
            <li>Use approved carriers or Sellora’s logistics</li>
            <li>Ship orders within the committed handling time</li>
            <li>Upload tracking information and mark as dispatched</li>
            <li>Use secure packaging and follow weight/dimension guidelines</li>
            <li>Avoid late shipments and delivery SLA breaches</li>
          </ul>
          <p>
            Sellers who consistently fail fulfillment requirements may lose
            privileges or face penalties.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            How are returns and order disputes handled under Sellora policies?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Sellora offers a return-friendly policy, and sellers must:</p>
          <ul>
            <li>Accept returns as per the listed return window</li>
            <li>Process refunds quickly once items are received</li>
            <li>
              Maintain accurate product descriptions to reduce false returns
            </li>
            <li>
              Use <strong>Returns Insights Report</strong> to monitor return
              trends
            </li>
          </ul>
          <p>
            Disputes can be raised via{" "}
            <strong>Support &gt; Returns Dispute Portal</strong> if a seller
            believes a return is unjustified.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What performance standards does Sellora expect from sellers?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Core seller metrics monitored by Sellora include:</p>
          <ul>
            <li>
              <strong>Order Defect Rate (ODR)</strong>
            </li>
            <li>
              <strong>Late Dispatch Rate</strong>
            </li>
            <li>
              <strong>Pre-shipment Cancellation Rate</strong>
            </li>
            <li>
              <strong>Return Rate</strong>
            </li>
            <li>
              <strong>Response Time to Buyers</strong>
            </li>
          </ul>
          <p>
            Consistently low performance can result in suppressed listings,
            reduced visibility, or account review.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>Where can I find Sellora’s full Fee Schedule?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Log in to Seller Center and navigate to:</p>
          <h6>
            Settings &gt; Seller Help Center &gt; Policies &amp; Standards &gt;
            Selling on Sellora – Fee Schedule
          </h6>
          <p>
            Here you'll find category-wise referral fees, weight-wise shipping
            fees, and applicable penalties or promotional costs. The fee
            schedule is updated periodically and sellers are notified via
            dashboard announcements.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What is Sellora’s Intellectual Property Rights (IPR) Policy?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Sellora protects brand and content ownership rights through a strict
            IPR policy. Sellers must:
          </p>
          <ul>
            <li>Only sell original, authentic products</li>
            <li>Not use copyrighted images or content without permission</li>
            <li>
              Register their own brand via <strong>Brand Registry</strong>
            </li>
            <li>Respect takedown notices and cooperate in disputes</li>
          </ul>
          <p>
            Repeated IPR violations may result in permanent bans and legal
            action. If you're a brand owner, you can file an IPR infringement
            report via <strong> Policies &gt; Report Infringement</strong> in
            Seller Center.
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