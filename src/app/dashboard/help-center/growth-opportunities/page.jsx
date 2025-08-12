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
                Growth opportunities
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
                Growth opportunities
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
    <h2>Growth opportunities</h2>
  </div>
  <div className="new_content_11">
    <div className="faq-container">
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What are Growth Opportunities on Sellora?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Growth Opportunities refer to tools, insights, and recommendations
            Sellora provides to help sellers:
          </p>
          <ul>
            <li>Improve sales performance</li>
            <li>Optimize listings and pricing</li>
            <li>Reduce return rates</li>
            <li>Boost discoverability and conversion</li>
            <li>Access promotional programs</li>
          </ul>
          <p>
            These insights are available in{" "}
            <strong>Seller Center &gt; Growth Tools</strong> and updated weekly
            based on your store’s data.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What is ‘Sellora Insights’ and how can it help my business?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Sellora Insights is an analytics dashboard that helps you monitor
            and grow your business. It includes:
          </p>
          <ul>
            <li>Real-time sales performance</li>
            <li>Product-level views and conversions</li>
            <li>Return &amp; cancellation trends</li>
            <li>Pricing competitiveness</li>
            <li>Stock-out risks and inventory alerts</li>
          </ul>
          <p>
            These insights help you make informed decisions about catalog
            planning, pricing strategy, and campaign investment.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            Where can I find Sellora’s Advertising Recommendations?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Advertising recommendations are available in:</p>
          <h6>Seller Center &gt; Growth &gt; Advertising Recommendation</h6>
          <p>This includes:</p>
          <ul>
            <li>Suggested SKUs to advertise based on popularity</li>
            <li>Recommended bid values for sponsored products</li>
            <li>Campaign goals (e.g., visibility vs conversion)</li>
            <li>Budget allocation tips</li>
          </ul>
          <p>
            Using these can help you run efficient campaigns and improve return
            on ad spend (ROAS).
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How do Price Recommendations work on Sellora?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Sellora compares your product price with similar listings on:</p>
          <ul>
            <li>Sellora marketplace</li>
            <li>Competing platforms (if available)</li>
            <li>Historical performance</li>
          </ul>
          <p>
            You’ll receive price suggestions that help balance{" "}
            <strong>competitive pricing and healthy margins.</strong>
          </p>
          <p>
            Navigate to:{" "}
            <strong>
              Seller Center &gt; Growth &gt; Pricing Recommendations
            </strong>{" "}
            to see product-level guidance.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What is the ‘Seller Tier’ system on Sellora?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Sellora ranks all sellers into different tiers based on performance,
            such as:
          </p>
          <ul>
            <li>Basic</li>
            <li>Rising</li>
            <li>Advanced</li>
            <li>Platinum</li>
          </ul>
          <p>Your tier depends on metrics like:</p>
          <ul>
            <li>Order defect rate</li>
            <li>Cancellation and return rates</li>
            <li>Buyer response time</li>
            <li>Order volume and fulfillment efficiency</li>
            <li>Customer ratings</li>
          </ul>
          <p>Higher tiers unlock benefits like:</p>
          <ul>
            <li>Priority support</li>
            <li>Access to exclusive campaigns</li>
            <li>Faster disbursements</li>
            <li>Brand visibility programs</li>
          </ul>
          <p>
            Check your current tier in{" "}
            <strong>
              Seller Center &gt; Performance &gt; Your Seller Tier
            </strong>
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How can I improve my Seller Tier?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>To upgrade your tier:</p>
          <ul>
            <li>Maintain &lt;1% order defect and late dispatch rate</li>
            <li>Improve product content and avoid return triggers</li>
            <li>Run ad campaigns to increase order volume</li>
            <li>Engage in promotional events</li>
            <li>Follow Sellora’s packaging, pricing, and service guidelines</li>
          </ul>
          <p>Sellora reviews performance monthly to adjust tiers.</p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How often are insights and recommendations updated?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            All insights—including pricing, ad, and listing suggestions—are
            updated <strong>weekly</strong> or in real time depending on the
            category and data volume.
          </p>
          <p>
            Notifications for new recommendations appear in your{" "}
            <strong>
              Seller Center Dashboard &gt; Growth &gt; Sellora Insights
            </strong>{" "}
            section.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            Is there a cost to use Sellora Growth Tools or Insights?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            No, these tools are provided <strong>free of charge</strong> to
            active sellers. Only advertising spend is chargeable when you run
            campaigns.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How do I act on insights or recommendations?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Sellora makes it simple to apply suggestions:</p>
          <ul>
            <li>Use the “Apply All” button for bulk price changes</li>
            <li>Click “Create Campaign” next to ad recommendations</li>
            <li>Use the “Fix Now” tag on listing errors or content issues</li>
          </ul>
          <p>
            You can choose which recommendations to implement. However, applying
            these regularly can significantly improve performance and
            discoverability.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>Can I get custom growth reports from Sellora?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            No, Sellora does not provide custom growth reports. However, you can
            access key insights through growth, including:
          </p>
          <ul>
            <li>
              <strong>Sellora Insights</strong>
            </li>
            <li>
              <strong>Advertising Recommendations</strong>
            </li>
            <li>
              <strong>Price Recommendations</strong>
            </li>
            <li>
              <strong>Sellora Promotions Offers</strong>
            </li>
          </ul>
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