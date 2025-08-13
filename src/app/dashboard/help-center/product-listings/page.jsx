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
              <a href="#">Policies &amp; Standards </a>{" "}
            </li>
            <li>
              <a href="#">Product listings</a>{" "}
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
              <a href="#">Policies &amp; Standards </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Product listings
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
  <h2>Product listings</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>Listing Requirements</li>
    <li>Policy Compliance</li>
    <li>Listing Accuracy</li>
    <li>Prohibited &amp; Restricted Products</li>
    <li>Image &amp; Content Standards</li>
    <li>Variations &amp; Catalog Management</li>
    <li>Category &amp; Attribute Selection</li>
    <li>Price Integrity</li>
    <li>Inventory Accuracy</li>
    <li>Product Compliance &amp; Certifications</li>
    <li>Listing Removal &amp; Penalties</li>
    <li>Ongoing Monitoring</li>
    <li>Frequently Asked Questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Creating accurate and high-quality product listings is essential for
      visibility, trust, and conversions on Sellora. All listings must follow
      Sellora’s content, image, and category-specific guidelines to ensure a
      consistent and compliant customer experience.
    </p>
  </div>
  <h3>Listing Requirements:</h3>
  <ul>
    <li>
      <strong> Product Title:</strong> Must be clear, descriptive, and follow
      Sellora’s formatting rules (e.g., Brand + Gender +Material + Product +
      Color + Size).
    </li>
    <li>
      <strong> Images:</strong> Upload high-resolution, original images showing
      the product clearly. Avoid watermarks, logos, or promotional text.
    </li>
    <li>
      <strong> Descriptions:</strong> Provide honest and detailed product
      information, including specifications, usage, and care instructions.
      Misleading claims or false attributes are strictly prohibited.
    </li>
    <li>
      <strong> Pricing &amp; Inventory:</strong> Maintain accurate pricing and
      stock levels. Price manipulation or fake discounting is not allowed.
    </li>
    <li>
      <strong> Categorization:</strong> Place your product in the correct
      category to ensure better searchability and customer relevance.
    </li>
    <li>
      <strong> Attributes &amp; Variations:</strong> Include all mandatory
      attributes. Variations (size, color, style) must be logically grouped and
      accurately described.
    </li>
  </ul>
  <p>
    <strong>Policy Compliance:</strong>
  </p>
  <ul>
    <li>
      Listings that violate intellectual property rights, promote prohibited
      items, or mislead buyers will be removed.
    </li>
    <li>
      Repeated violations may lead to penalties, listing removal, or permanent
      suspension.
    </li>
  </ul>
  Maintaining high-quality and policy-compliant listings improves your product
  visibility, reduces returns, and builds long-term customer trust.
  <p />
  <p>
    <strong>Listing Accuracy</strong>
  </p>
  <ul>
    <li>
      Product titles, descriptions, images, and specifications must be{" "}
      <strong> 100% accurate</strong> and clearly reflect the item being sold.
    </li>
    <li>
      Sellers must not include <strong> misleading claims</strong>, unrelated
      keywords, or unverifiable information.
    </li>
    <li>
      All listings must match the <strong> actual product</strong> shipped to
      the customer.
    </li>
  </ul>
  <p>
    <strong>Prohibited &amp; Restricted Products</strong>
  </p>
  <ul>
    <li>
      Listings must comply with Sellora’s{" "}
      <strong> Prohibited Product Policy</strong>. Any product found to be
      illegal, unsafe, counterfeit, or banned under local laws will be removed.
    </li>
    <li>
      Categories such as health, beauty, electronics, and food may have{" "}
      <strong> specific compliance requirements</strong> or require approval
      before listing.
    </li>
  </ul>
  <p>
    <strong>Image &amp; Content Standards</strong>
  </p>
  <ul>
    <li>
      Upload <strong> high-quality, clear images</strong> with a white or clean
      background. Watermarks, logos, or promotional text are not allowed on main
      images.
    </li>
    <li>
      Product descriptions must be original, well-structured, and free from
      grammatical errors.
    </li>
    <li>
      Do not include contact information, external URLs, or promotional content
      in the listing.
    </li>
    <li>Copyright, Design write images are not allows </li>
  </ul>
  <p>
    <strong>Variations &amp; Catalog Management</strong>
  </p>
  <ul>
    <li>
      Use product variations (size, color, style, etc.) appropriately under a
      single listing, if applicable.
    </li>
    <li>
      Ensure that each variation accurately reflects the corresponding product
      attributes.
    </li>
    <li>
      Duplicate listings for the same product are not{" "}
      <strong> permitted</strong>.
    </li>
  </ul>
  <p>
    <strong>Category &amp; Attribute Selection</strong>
  </p>
  <ul>
    <li>
      Select the <strong>most appropriate product category</strong> and fill in
      all required attributes.
    </li>
    <li>
      Providing accurate product attributes (e.g., material, dimensions, color)
      improves discoverability and customer trust.
    </li>
  </ul>
  <p>
    <strong>Price Integrity</strong>
  </p>
  <ul>
    <li>
      Prices listed must be{" "}
      <strong>inclusive of all applicable taxes and charges</strong> .
    </li>
    <li>
      Artificial inflation of prices to create false discount percentages is
      strictly prohibited and may lead to listing suspension.
    </li>
  </ul>
  <p>
    {" "}
    <strong>Inventory Accuracy</strong>
  </p>
  <ul>
    <li>
      Always keep inventory levels up to date. Products shown as “in stock” must
      be available for immediate dispatch.
    </li>
    <li>
      Listings with frequent stockouts or fulfillment failures may be penalized
      or removed.
    </li>
  </ul>
  <p>
    <strong>Product Compliance &amp; Certifications</strong>
  </p>
  <ul>
    <li>
      Products in regulated categories must be supported by relevant{" "}
      <strong> certifications, licenses, or safety standards</strong>.
    </li>
    <li>
      Uploading or selling uncertified goods in these categories can lead to
      legal action and permanent account deactivation.
    </li>
  </ul>
  <p>
    <strong>Listing Removal &amp; Penalties</strong>
  </p>
  <ul>
    <li>
      Sellora reserves the right to remove any product that violates listing
      guidelines, customer safety, or marketplace standards.
    </li>
    <li>
      Repeated violations may result in{" "}
      <strong>
        account warnings, restricted selling privileges, or suspension.
      </strong>{" "}
    </li>
  </ul>
  <p>
    <strong>Ongoing Monitoring</strong>
  </p>
  <ul>
    <li>All listings are subject to review by Sellora’s moderation team.</li>
    <li>
      Random checks, AI-based compliance scans, and customer reports are used to
      detect and remove non-compliant content.
    </li>
  </ul>
  <p>
    <strong>Need Help?</strong>
    <br />
    Visit <strong> Seller Center &gt; Listing Help Center </strong>or contact{" "}
    <strong> Sellora Seller Support</strong> if you need guidance on creating or
    managing listings.
  </p>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>Can I sell items from multiple contract categories?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>Yes.</p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I list the same product more than once?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          No. Duplicate listings for the same product are strictly prohibited.
          You should use the variation feature (e.g., size, color) instead of
          creating multiple listings.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What types of products are not allowed on Sellora?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Products that are illegal, unsafe, counterfeit, or fall under
          Sellora’s Prohibited Product Policy are not allowed. This includes:
        </p>
        <ul>
          <li>Expired or unapproved cosmetics</li>
          <li>Imitation or fake branded goods</li>
          <li>Weapons or restricted items</li>A full list is available in your
          Seller Center under Prohibited Items.
        </ul>
        <p />
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Are there image requirements for product listings?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>Yes. Product images must:</p>
        <ul>
          <li>Be high-resolution and professionally clear</li>
          <li>Have a plain white or clean background</li>
          <li>
            Not contain watermarks, logos, or promotional text on the main image
          </li>
          Additional lifestyle or usage images are allowed in secondary slots.
        </ul>
        <p />
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How do I list products with multiple sizes or colors?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          A: Use the “Variation” option within your product listing. This allows
          you to list all sizes, colors, or styles of a product under a single
          parent listing, improving customer experience and catalog structure.
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