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
                Listing Optimization
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
                Listing Optimization
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
    <h2>Listing Optimization</h2>
  </div>
  <div className="new_content_11">
    <div className="faq-container">
      <div className="accordion-item">
        <div className="accordion-header">
          <span>
            What is listing optimization on Sellora, and why is it important?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Listing optimization refers to the process of improving your product
            listings to increase visibility, relevance, and conversions. This
            includes:
          </p>
          <ul>
            <li>Crafting clear, keyword-rich titles</li>
            <li>Providing detailed and accurate product descriptions</li>
            <li>Uploading high-resolution images</li>
            <li>Ensuring correct categorization and attributes</li>
            <li>Managing prices competitively</li>
          </ul>
          <p>
            A well-optimized listing is more likely to appear in top search
            results, win the Buy Box, and convert browsers into buyers.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <span>
            Where can I manage my listings and inventory in the Seller Center?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Go to <strong>Seller Center &gt;Listing &gt; My Listing</strong>.
            Here you can:
          </p>
          <ul>
            <li>Add or edit single product listings</li>
            <li>Upload inventory in bulk using catalog files</li>
            <li>Track stock availability for each SKU</li>
            <li>Update pricing and product information in real time</li>
          </ul>
          <p>
            Inventory accuracy is key to avoiding order cancellations and
            penalties.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <span>
            How do I update pricing or business pricing for my products?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>To manage pricing:</p>
          <ul>
            <li>Navigate to Manage Inventory</li>
            <li>Click Edit on the desired SKU</li>
            <li>
              Update:
              <ul>
                <li>
                  <strong>Retail Price</strong> (MSRP)
                </li>
                <li>
                  <strong>Selling Price</strong> (customer pays)
                </li>
                <li>
                  <strong>Business Price</strong> (for B2B buyers, optional)
                </li>
              </ul>
            </li>
            <li>Save changes</li>
            <p>
              You can also apply discounts, volume pricing, or set time-bound
              promotional rates.
            </p>
          </ul>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <span>Can I set different prices for B2B customers on Sellora?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Yes. Sellora supports Business Pricing, allowing you to:</p>
          <ul>
            <li>Offer wholesale rates</li>
            <li>Create volume-based discounts (e.g., 10% off on 10+ units)</li>
            <li>Attract corporate buyers</li>
          </ul>
          <p>
            Enable this via{" "}
            <strong>
              Seller Center &gt; Business Settings &gt; Business Pricing
            </strong>
            . It helps increase order value and build long-term B2B
            relationships.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <span>
            What is the Listing Quality Score, and how is it calculated?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Your <strong>Listing Quality Score measures</strong> how complete,
            accurate, and attractive your listings are. It’s calculated based
            on:
          </p>
          <ul>
            <li>Title length and keyword usage</li>
            <li>Quality and number of images</li>
            <li>
              Completeness of product attributes (brand, color, material, etc.)
            </li>
            <li>Category accuracy</li>
            <li>Product description and bullet points</li>
          </ul>
          <p>
            High-quality listings rank better in search, reduce return rates,
            and improve customer trust.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <span>How can I improve the quality of my listings?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>To improve listing quality:</p>
          <ul>
            <li>
              Use at least 4–6 high-resolution images with white background
            </li>
            <li>Add SEO-rich, clear product titles</li>
            <li>Provide a detailed description with product benefits</li>
            <li>Ensure correct attribute mapping (size, weight, category)</li>
            <li>Include FAQs and keywords customers search for</li>
          </ul>
          <p>
            Sellora may flag low-quality listings or limit visibility until
            improved.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <span>
            What happens if my listing is missing important information?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Incomplete listings may face:</p>
          <ul>
            <li>
              <strong>Lower ranking</strong> in search results
            </li>
            <li>
              <strong>Suppressed visibility</strong> or temporary unlisting
            </li>
            <li>
              <strong>Higher return rates</strong> due to missing expectations
            </li>
          </ul>
          <p>
            Fix issues through Listing Quality Report in Seller Center to avoid
            performance hits.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <span>Where can I see my reviews and ratings for each product?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Go to Seller{" "}
            <strong>Center &gt; Performance &gt; Ratings &amp; Reviews,</strong>{" "}
            or open the product page to view customer feedback. You'll find:
          </p>
          <ul>
            <li>Average star rating</li>
            <li>Individual customer reviews</li>
            <li>Review trends over time</li>
          </ul>
          <p>
            Use this data to understand customer sentiment and improve your
            offerings.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <span>Do product reviews affect my search ranking or sales?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Yes. Reviews significantly impact both ranking and conversion:</p>
          <ul>
            <li>Higher-rated products get better visibility</li>
            <li>Products with more positive reviews tend to convert better</li>
            <li>Negative reviews may reduce trust and click-through rate</li>
          </ul>
          <p>
            Encourage satisfied customers to leave feedback to build trust and
            authority.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <span>How do I remove a fake or inappropriate product review?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            If a review violates Sellora’s guidelines (e.g., abusive, spam,
            unrelated content):
          </p>
          <ul>
            <li>
              Go to the review and click <strong>“Report”</strong>
            </li>
            <li>Choose the reason (e.g., profanity, irrelevant content)</li>
            <li>Submit your request for moderation</li>
          </ul>
          <p>
            Sellora’s moderation team will review and may remove the review if
            it violates platform policies. Not all low-star reviews qualify for
            removal.
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