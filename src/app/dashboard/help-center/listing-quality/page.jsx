'use client'
import React, { useEffect, useState } from 'react'
import LeftSideBar from '../LeftSideBar';
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
              <a href="#">Help </a>{" "}
            </li>
            <li>
              <a href="#"> Listing optimization </a>{" "}
            </li>
            <li>
              <a href="#">Listing Quality</a>{" "}
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
              <a href="#">Help </a>{" "}
            </li>
            <li>
              <a href="#">Listing optimization</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Listing Quality
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
  <h2>Listing Quality</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>Why Listing Quality Matters</li>
    <li>Key Components of a High-Quality Listing</li>
    <li>Listing Quality Score (If Applicable)</li>
    <li>Common Listing Mistakes to Avoid</li>
    <li>How to Improve Listing Quality</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      <strong>Listing Quality </strong> refers to how complete, accurate, and
      optimized your product listing is on Sellora.com. High-quality listings
      improve your product’s visibility in search, help win the{" "}
      <strong> Buy Box</strong>, and increase the chances of customer
      conversion. Poor listings can result in low traffic, poor sales, or even
      rejection by Sellora’s listing system.
    </p>
  </div>
  <h3>Why Listing Quality Matters</h3>
  <ul style={{ paddingLeft: 20 }}>
    <li>Boosts product discoverability in search results</li>
    <li>Enhances customer trust and decision-making</li>
    <li>Increases conversions and reduces returns</li>
    <li>Helps qualify for marketing programs and Buy Box</li>
    <li>Supports positive reviews and ratings</li>
  </ul>
  <h3 className="">Key Components of a High-Quality Listing</h3>
  <div className="table-container2 col-12 col-md-12 col-lg-12 col-xl-10 col-xxl-8 mt-4 ">
    <table>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Section</th>
          <th style={{ width: "40%" }}>Best Practices</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Title</td>
          <td>
            Use relevant keywords, brand name, product type, variant (e.g.,
            color, size). Example: “Sellora Men’s Cotton Shirt – Navy, Size M”
          </td>
        </tr>
        <tr>
          <td>Images</td>
          <td>
            Upload minimum 3–5 high-resolution images. Include main image (white
            background), side view, close-up, lifestyle shot, and size guide.
          </td>
        </tr>
        <tr>
          <td>Bullet Points</td>
          <td>
            Add 3–5 short, clear features/benefits. Focus on material,
            usability, fit, style, or key selling points.
          </td>
        </tr>
        <tr>
          <td>Description</td>
          <td>
            Write a complete product overview using clear, SEO-friendly
            language. Mention unique features, care instructions, and who it’s
            best for.
          </td>
        </tr>
        <tr>
          <td>Keywords</td>
          <td>
            Add backend search keywords (not visible to customers). Use terms
            buyers might search for.
          </td>
        </tr>
        <tr>
          <td>Category Mapping</td>
          <td>
            Ensure the product is listed in the correct category for maximum
            visibility.
          </td>
        </tr>
        <tr>
          <td>Attributes</td>
          <td>
            Fill in all required fields (color, size, material, type, gender,
            etc.) correctly and completely.
          </td>
        </tr>
        <tr>
          <td>Pricing</td>
          <td>
            Enter correct MSRP, Selling Price, and Business Price (if
            applicable).
          </td>
        </tr>
        <tr>
          <td>Inventory</td>
          <td>
            Keep stock levels updated. Zero stock leads to listing deactivation.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <h3>Listing Quality Score (If Applicable)</h3>
  <p>
    Sellora may assign a <strong> Listing Quality Score</strong> based on:
  </p>
  <ul style={{ paddingLeft: 10 }}>
    <li>Completeness of information</li>
    <li>Accuracy and relevance of data</li>
    <li>Compliance with Sellora's image and content guidelines</li>
    <li>Competitive pricing and fulfillment performance</li>
  </ul>
  <p>A higher score = higher visibility and customer trust.</p>
  <h3>Common Listing Mistakes to Avoid</h3>
  <ul style={{ paddingLeft: 10 }}>
    <li>Using low-resolution or irrelevant images</li>
    <li>Incomplete or missing product details</li>
    <li>Using keyword stuffing or misleading titles</li>
    <li>Incorrect category or variant mapping</li>
    <li>Overpricing (Selling Price &gt; MRP)</li>
    <li>Spelling errors or inconsistent formatting</li>
    <li>Missing backend tags or attributes</li>
  </ul>
  <h3>How to Improve Listing Quality</h3>
  <ul style={{ paddingLeft: 10 }}>
    <li>Audit your listings using the Sellora Seller Dashboard.</li>
    <li>Use the Listing Quality Analyzer&nbsp;</li>
    <li>Update all required fields and follow Sellora content guidelines.</li>
    <li>Optimize for SEO using relevant and specific keywords.</li>
    <li>
      Add professional-quality images with good lighting and clean backgrounds.
    </li>
    <li>Update prices and stock regularly to stay competitive.</li>
  </ul>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>Can I check the quality score of my listing?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          Sellora may provide quality insights under "Performance" or a separate
          “Product Quality” tab. Review and act on suggestions provided.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How do I choose the correct product category?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          When listing manually, select the most relevant category that matches
          the product type. Incorrect category mapping leads to low visibility
          or rejection.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can low-quality listings affect my seller rating?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Indirectly, yes. Poor listings often lead to returns, negative
          reviews, or cancellations, all of which hurt your seller performance
          score.
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