'use client'
import React, { useEffect, useState } from 'react'
import LeftSideBar from '../leftSideBar';
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
              <a href="#">Growth Opportunities</a>{" "}
            </li>
            <li>
              <a href="#">Your Seller Tier</a>{" "}
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
              <a href="#">Growth Opportunities </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Your Seller Tier
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
  <h2>Your Seller Tier</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>Why Seller Tier Matters</li>
    <li>Seller Tiers</li>
    <li>See Your Performance on sellora</li>
    <li>How to Check Your Seller Tier</li>
    <li>How to Improve Your Seller Tier</li>
    <li>Frequently Asked Questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      The more you sell, the more you earn! Sellora’s tier system is designed to
      recognize and reward high-performing sellers. As you move up the tiers,
      you gain access to lower fees, increased visibility, and premium tools
      that help you scale your business faster.
    </p>
  </div>
  <p>
    <strong>Key Features&nbsp;</strong>
  </p>
  <ul>
    <li>
      <strong>Better Exposure</strong>&nbsp;
      <p>
        {" "}
        Higher-tier sellers appear more prominently in search results and deal
        placements.
      </p>
    </li>
    <li>
      <strong>Lower Fees</strong>&nbsp;
      <p>
        {" "}
        Top sellers enjoy reduced commission rates and special fee waivers.
      </p>
    </li>
    <li>
      <strong>Advanced Tools &amp; Features</strong>&nbsp;
      <p>
        {" "}
        Unlock early access to new features, advanced analytics, and marketing
        tools.
      </p>
    </li>
    <li>
      <strong>Priority Support</strong>&nbsp;
      <p> Get faster response times and dedicated account assistance.</p>
    </li>
  </ul>
  <p />
  <p style={{ margin: 0 }}>
    <strong>Seller Tiers</strong>
  </p>
  <p style={{ margin: 0 }}>
    <strong>Basic Seller</strong>
  </p>
  <p>
    New or underperforming sellers. Limited access to certain features.
    Recommendations provided to help move up the tiers
  </p>
  <div className="table-container2">
    <table>
      <thead>
        <tr>
          <th width="50%">Criteria</th>
          <th width="50%">Benefits</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
              <li>
                BenefitsOn-Time Delivery - Maintain 90%+ on-time delivery in the
                last 90 days.
              </li>
              <li>
                Low Cancellation Rate - Keep cancellations at 2.5% or lower in
                the last 90 days.
              </li>
              <li>
                Fast Response Rate - Achieve a 90%+ response rate to customer
                inquiries in the last 30 days.
              </li>
              <li>
                Shipping Performance - Maintain a minimum 5% shipping score at
                the latest evaluation.
              </li>
              <li>
                Content Quality - Ensure a 65% or higher content quality score
                at the time of review.
              </li>
              <li>
                Competitive Pricing - Maintain at least 60% price
                competitiveness during evaluations.
              </li>
              <li>
                Consistent Sales - Process 100+ orders within the last 90 days.
              </li>
              <li>
                Active Seller - Be active on Sellora for at least 90 days.
              </li>
              <li>
                Trust &amp; Compliance - Have zero violations of Trust &amp;
                Safety or Performance Standards.
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                Faster Payouts - Get a larger portion of your balance paid out
                the next day for better cash flow.
              </li>
              <li>
                Discounted Shipping Labels - Enjoy up to 25% off on select fast
                shipping services.
              </li>
              <li>
                Increased Visibility - Higher-ranking listings attract more
                customers and boost sales.
              </li>
              <li>
                Better Customer Trust - Meeting quality standards enhances your
                reputation and builds buyer confidence.
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <h3>Rising Seller</h3>
  <p>
    Growing sellers who meet the basic performance standards. Get support to
    improve and grow your sales
  </p>
  <div className="table-container2">
    <table>
      <thead>
        <tr>
          <th width="50%">Criteria</th>
          <th width="50%">Benefits</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
              <li>
                On-Time Delivery Mastery - Ensure 90%+ of orders arrive on time
                over the past 90 days.
              </li>
              <li>
                Minimal Cancellations - Keep the cancellation rate at 2.5% or
                lower within the last 90 days.Responsive &amp; Reliable -
                Maintain a 90%+{" "}
              </li>
              <li>
                response rate to customer inquiries over the past 30 days.
              </li>
              <li>
                Strong Shipping Performance - Achieve a minimum 5% shipping
                score at the latest evaluation.
              </li>
              <li>
                High-Quality Listings - Maintain a content quality score of 65%
                or higher at the time of review.
              </li>
              <li>
                Competitive Pricing - Ensure at least 60% price competitiveness
                when evaluated..Consistent Sales Activity - Process 200+ orders
                within the last 90 days.
              </li>
              <li>
                Active &amp; Committed - Operate on Sellora for a minimum of 90
                days.
              </li>
              <li>
                Trust &amp; Compliance - Maintain a clean record with zero
                violations of Trust &amp; Safety or Performance Standards.
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li />
              <li>
                Discounted Shipping Labels - Enjoy up to 25% off on select fast
                shipping services.
              </li>
              <li>
                Shipping Label Discounts - Enjoy up to 25% off on select fast
                shipping services at Rising Seller or higher tiers.
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <h3>Advanced Seller</h3>
  <p>
    Strong performers who meet most metrics and deliver a reliable customer
    experience. Gain priority in promotions and early access to new tools.
  </p>
  <div className="table-container2">
    <table>
      <thead>
        <tr>
          <th width="50%">Criteria</th>
          <th width="50%">Benefits</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
              <li>
                Reliable On-Time Delivery - Maintain an On-Time Delivery Rate of
                92.5% or higher in the last 90 days.
              </li>
              <li>
                Low Cancellation Rate - Keep cancellations at or below 2.0%
                within the last 90 days.
              </li>
              <li>
                Quick &amp; Effective Communication - Achieve a Seller Response
                Rate of 92.5% or higher over the past 30 days.
              </li>
              <li>
                Optimized Shipping Performance - Secure a minimum 25% Shipping
                Score at the latest refresh.
              </li>
              <li>
                High-Quality Listings - Maintain a Content Quality Score of 70%
                or higher at the time of review.
              </li>
              <li>
                Competitive Pricing - Ensure at least 60% Price Competitiveness
                during evaluations.
              </li>
              <li>
                Active Order Flow - Process a minimum of 500 orders in the last
                90 days.
              </li>
              <li>
                Consistent Marketplace Presence - Remain active on Sellora for
                at least 90 days.
              </li>
              <li>
                Compliance &amp; Trust - Maintain a clean record with no Trust
                &amp; Safety or Performance Standard violations.
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li />
              <li>
                Pro Listing Referral Fee Discounts - Get a 5% referral fee
                discount on Pro Listings that meet fast &amp; free shipping and
                competitive pricing requirements.
              </li>
              <li>
                Special Capital Rates &amp; Terms - Access exclusive financing
                offers with extended repayment periods through Capital by
                Sellora.
              </li>
              <li>
                Review Accelerator Credit - Receive a $50 monthly credit to
                boost your reviews and enhance your seller reputation.
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <h3>Platinum Seller</h3>
  <p>
    Top-performing sellers with consistent high sales, excellent service, and
    low return rates. Enjoy maximum visibility, premium support, and exclusive
    benefits.
  </p>
  <div className="table-container2">
    <table>
      <thead>
        <tr>
          <th width="50%">Criteria</th>
          <th width="50%">Benefits</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
              <li>
                Exceptional On-Time Delivery - Maintain an On-Time Delivery Rate
                of 95% or higher in the last 90 days.
              </li>
              <li>
                Minimal Cancellations - Keep the cancellation rate at or below
                1.5% over the past 90 days.
              </li>
              <li>
                Fast &amp; Reliable Responses - Achieve a Seller Response Rate
                of 95% or higher within the last 30 days.
              </li>
              <li>
                Strong Shipping Performance - Secure a Shipping Score of at
                least 50% at the latest refresh.
              </li>
              <li>
                High-Quality Listings - Maintain a Content Quality Score of 75%
                or higher at the time of review.
              </li>
              <li>
                Competitive Pricing - Ensure at least 60% Price Competitiveness
                when evaluated.
              </li>
              <li>
                Consistent Order Volume - Process a minimum of 1000 orders in
                the last 90 days.
              </li>
              <li>
                Active &amp; Engaged - Remain active on Sellora for at least 90
                days.
              </li>
              <li>
                Trust &amp; Compliance - Maintain a clean record with no
                violations of Trust &amp; Safety or Performance Standards.
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li />
              <li>
                Faster Payouts - Receive a larger portion of your eligible
                balance paid out the next day for improved cash flow.
              </li>
              <li>
                Shipping Label Discounts - Enjoy up to 25% off on select fast
                shipping services at Rising Seller or higher tiers.
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <h3>See Your Performance on sellora</h3>
  <div className="table-container2">
    <table>
      <thead>
        <tr>
          <th width="20%">Service Quality Score</th>
          <th width="20%">Basic Seller My Status</th>
          <th width="20%">Rising Seller Next Level Target</th>
          <th width="20%">Advanced Seller Next Level Target</th>
          <th width="20%">Premium Seller Next Level Target</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
              <li>Total Cancellation Rate</li>
            </ul>
          </td>
          <td>
            <ul>
              <li />
              <li>0.32% | 7/16</li>
            </ul>
          </td>
          <td>
            <ul>
              <li />
              <li>0.25</li>
            </ul>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>Total Late Dispatch Rate</li>
            </ul>
          </td>
          <td>
            <ul>
              <li />
              <li>0.71% | 7/16</li>
            </ul>
          </td>
          <td>
            <ul>
              <li />
              <li>0.25</li>
            </ul>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>Seller Controllable Return Rate</li>
            </ul>
          </td>
          <td>
            <ul>
              <li />
              <li>3.47% | 7/16</li>
            </ul>
          </td>
          <td>
            <ul>
              <li />
              <li>0.25</li>
            </ul>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>Out of Stock Rate</li>
            </ul>
          </td>
          <td>
            <ul>
              <li />
              <li>3.47% | 7/16</li>
            </ul>
          </td>
          <td>
            <ul>
              <li />
              <li>0.25</li>
            </ul>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>Product Listing Quality Score</li>
            </ul>
          </td>
          <td>
            <ul>
              <li />
              <li>3.47% | 7/16</li>
            </ul>
          </td>
          <td>
            <ul>
              <li />
              <li>0.25</li>
            </ul>
          </td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
  <p>How to Check Your Seller Tier</p>
  <ol>
    <li>Go to Performance &gt; Your Seller Tier</li>
    <li>
      View your current tier, performance metrics, and suggested actions to
      improve
    </li>
  </ol>
  <p>How to Improve Your Seller Tier</p>
  <ul>
    <li>Ship orders on time and reduce late dispatches</li>
    <li>Maintain low return and cancellation rates</li>
    <li>Provide accurate product listings and excellent customer service</li>
    <li>Increase your positive customer ratings</li>
    <li>Follow pricing and inventory best practices</li>
  </ul>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>What is Sellora’s Tier System?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          Sellora’s Tier System is a performance-based ranking system that
          rewards sellers for consistent quality, sales volume, and service
          excellence. Higher tiers unlock exclusive benefits like lower fees,
          increased visibility, and advanced tools.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How is my seller tier calculated?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>Your tier is based on multiple performance metrics, including:</p>
        <ul>
          <li>Order volume</li>
          <li>On-time shipping rate</li>
          <li>Return and cancellation rate</li>
          <li>Customer ratings and feedback</li>
          <li>Policy compliance</li>
        </ul>
        <p />
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>&nbsp;How often is the tier status updated?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Seller tiers are reviewed and updated monthly, based on your
          performance over the previous 30 days.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What are the benefits of higher tiers?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>As you move up, you unlock:</p>
        <ul>
          <li>Lower commission and service fees</li>
          <li>Higher visibility in search and deals</li>
          <li>Access to advanced tools and insights</li>
          <li>Priority customer and seller support</li>
        </ul>
        <p />
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can my tier go down?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes. If your performance drops or you violate Sellora’s policies, your
          tier may be downgraded in the next review cycle.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Is the tier system available for all sellers?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes, all active sellers on Sellora are automatically enrolled in the
          tier system and can track their current tier and progress from the{" "}
          <strong>
            {" "}
            Seller Center &gt; Performance&gt; Your Seller Tier section
          </strong>
          .
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