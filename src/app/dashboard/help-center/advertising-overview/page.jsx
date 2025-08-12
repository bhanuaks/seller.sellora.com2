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
                Advertising Overview
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
                Advertising Overview
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
    <h2>Advertising Overview</h2>
    <h3>Sponsored Ads</h3>
  </div>
  <div className="new_content_11">
    <div className="faq-container">
      <div className="accordion-item">
        <div className="accordion-header">
          <span>What are Sponsored Ads on Sellora?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Sponsored Ads are paid advertisements that increase your product
            visibility on Sellora through:
          </p>
          <ul>
            <li>Search results</li>
            <li>Category pages</li>
            <li>Product detail pages</li>
          </ul>
          <p>
            You pay only when a customer clicks your ad (CPC – Cost Per Click
            model). These ads help boost impressions, clicks, and ultimately
            conversions.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What is the difference between Smart Campaigns and Manual Campaigns?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <div className="table-container2">
            <table>
              <thead>
                <tr>
                  <th width="33%">Feature</th>
                  <th width="33%">Smart Campaign</th>
                  <th width="33%">Manual Campaign</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Setup Time</td>
                  <td>Minimal (auto setup)</td>
                  <td>More detailed (manual selection)</td>
                </tr>
                <tr>
                  <td>Keyword Targeting</td>
                  <td>Automated by Sellora AI</td>
                  <td>Manually selected keywords</td>
                </tr>
                <tr>
                  <td>Budget Control</td>
                  <td>Set daily budget, auto-distributed</td>
                  <td>Set daily and keyword-specific budgets</td>
                </tr>
                <tr>
                  <td>Optimization</td>
                  <td>Automated by system algorithms</td>
                  <td>Seller-managed</td>
                </tr>
                <tr>
                  <td>Best For</td>
                  <td>New/inexperienced sellers,quick launch</td>
                  <td>Experienced sellers, custom strategy</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Both campaigns are accessible via:{" "}
            <strong>Seller Center &gt; Advertising &gt; Sponsored Ads</strong>
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How do I launch a Smart Campaign on Sellora?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>To launch a Smart Campaign:</p>
          <ul>
            <li>Go to Seller Center &gt; Advertising &gt; Smart Campaign</li>
            <li>Select the products you want to promote</li>
            <li>Set your daily budget (min100$/day recommended)</li>
            <li>Choose campaign duration (or let it run continuously)</li>
            <li>Click “Launch”</li>
          </ul>
          <p>
            <strong>Sellora’s system will automatically:</strong>
          </p>
          <ul>
            <li>Pick high-converting keywords</li>
            <li>Set bids based on market conditions</li>
            <li>Optimize placements</li>
          </ul>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How do I create a Manual Campaign?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            To run a <strong>Manual Campaign:</strong>
          </p>
          <ul>
            <li>
              Go to{" "}
              <strong>
                Seller Center &gt; Advertising &gt; Manual Campaign
              </strong>
            </li>
            <li>Choose your products</li>
            <li>Add target keywords (broad, phrase, or exact match)</li>
            <li>Set individual bids per keyword</li>
            <li>Define daily and total campaign budgets</li>
            <li>Schedule the campaign duration</li>
            <li>Launch the ad</li>
          </ul>
          <p>
            Manual campaigns allow advanced targeting and performance control.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How is cost determined for Sponsored Ads?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            You pay using a <strong>Cost Per Click (CPC)</strong> model. This
            means:
          </p>
          <ul>
            <li>No charge for impressions</li>
            <li>
              You are only billed when someonea <strong>clicks</strong> your ad
            </li>
            <li>CPC varies by category, competition, and keyword strength</li>
          </ul>
          <p>Your daily budget limits your maximum spend for the day.</p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>Where are Sponsored Ads displayed on Sellora?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Sponsored Ads may appear on:</p>
          <ul>
            <li>Top search result pages</li>
            <li>Category and subcategory pages</li>
            <li>Other sellers’ product pages (cross-promotion)</li>
            <li>Homepage sections (in select campaigns)</li>
          </ul>
          <p>More visibility increases your chance of customer engagement.</p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How can I track performance of my campaigns?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Use the <strong>Advertising Dashboard</strong> in Seller Center to
            monitor:
          </p>
          <ul>
            <li>Clicks</li>
            <li>Impressions</li>
            <li>Conversion rate</li>
            <li>Ad-attributed sales</li>
            <li>ROAS (Return on Ad Spend)</li>
            <li>Keyword performance (for manual campaigns)</li>
          </ul>
          <p>Daily reports and visual charts help refine your strategy.</p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What is a good daily budget to start with?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <ul>
            <li>
              For Smart Campaigns: Minimum 100$–300$/day recommended for 2–5
              products
            </li>
            <li>
              For Manual Campaigns: Allocate 20$–40$ per keyword for better
              reach
            </li>
          </ul>
          <p>Start with a modest budget and increase based on ROI.</p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            Can I run both Smart and Manual campaigns at the same time?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            Yes. You can run both types of campaigns for the same or different
            products.
          </p>
          <p>
            Many sellers run Smart Campaigns for new products and Manual
            Campaigns for bestsellers with targeted strategies.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>Do Sponsored Ads impact my organic ranking?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Yes. Successful Sponsored Ads can improve:</p>
          <ul>
            <li>Product visibility</li>
            <li>Conversion rates</li>
            <li>Sales velocity</li>
          </ul>
          <p>
            This, in turn, positively influences your product’s organic ranking
            on Sellora’s search results and recommendation engine.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            Display Ads
            <br />
            What are Display Ads on Sellora?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            <strong>Display Ads</strong> are visually rich advertisements—either{" "}
            <strong>image-based or video-based</strong>— that appear across
            various sections of Sellora’s platform. They are designed to:
          </p>
          <ul>
            <li>Grab buyer attention</li>
            <li>Build brand/product recall</li>
            <li>Drive high-intent traffic to product pages</li>
          </ul>
          <p>Improve sales conversions and brand visibility</p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>Where do Display Ads appear on Sellora?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Display Ads can appear across multiple placements such as:</p>
          <ul>
            <li>Sellora homepage</li>
            <li>Category landing pages</li>
            <li>Product detail pages</li>
            <li>Search result pages</li>
            <li>Mobile app banners</li>
          </ul>
          <p>
            This premium positioning helps sellers reach a wide audience
            quickly.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What are Sponsored Image Ads?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            <strong>Sponsored Image Ads</strong> are static or carousel image
            banners that highlight your product or brand visually.
          </p>
          <p>Features include:</p>
          <ul>
            <li>High-quality banners with custom messaging</li>
            <li>
              Clickable CTAs redirecting to your product page or brand store
            </li>
            <li>Placement on homepage, deals pages, or category highlights</li>
          </ul>
          <p>
            Ideal for seasonal promotions, new product launches, or top-selling
            SKUs.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How do I create a Sponsored Image Ad?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>To launch an Image Ad campaign:</p>
          <p>Features include:</p>
          <ul>
            <li>
              Go to{" "}
              <strong>
                Seller Center &gt; Advertising &gt; Create Campaign &gt; Display
                Ads &gt; Image Display Ads
              </strong>
            </li>
            <li>Select ad type (static or carousel)</li>
            <li>
              Upload banner images (JPG/PNG, recommended size 1100 x 576 px)
            </li>
            <li>Add headline, Choose campaign duration and budget</li>
            <li>Submit for approval by Sellora’s ad review team</li>
          </ul>
          <p>Approved campaigns usually go live within 24–48 hours.</p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>What are Sponsored Video Ads?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>
            <strong>Sponsored Video Ads</strong> are short video advertisements
            that autoplay (muted) on key Sellora surfaces.
          </p>
          <p>Benefits include:</p>
          <ul>
            <li>Higher engagement rates</li>
            <li>Storytelling for product features</li>
            <li>Better retention and conversion</li>
          </ul>
          <p>
            Videos can highlight product usage, unboxing, brand story, or
            customer testimonials.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How to set up a Sponsored Video Ad?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>To set up a video ad campaign:</p>
          <ul>
            <li>
              Go to{" "}
              <strong>
                Seller Center &gt; Advertising &gt; Create Campaign &gt; Display
                Ads &gt; Video Display Ads
              </strong>
            </li>
            <li>Upload your video (MP4 format, max 6-45 sec, Max 200MB)</li>
            <li>Provide video title, subtitle (optional), and CTA</li>
            <li>Choose target product or brand link</li>
            <li>Set budget and schedule</li>
            <li>Submit for moderation</li>
          </ul>
          <p>
            Make sure videos follow Sellora’s{" "}
            <strong>Ad Content Guidelines</strong> for fast approval.
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>
            What are the technical requirements for image and video ads?
          </span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Image Ads:</p>
          <ul>
            <li>Format: JPG or PNG</li>
            <li>Size: 1100 x 576 px (landscape)</li>
            <li>File size: 5MB or smaller</li>
            <li>Text: Max 20% of image recommended</li>
          </ul>
          <p>Video Ads:</p>
          <ul>
            <li>Format: MP4</li>
            <li>Duration: 6 – 45 seconds</li>
            <li>File size: Up to 200MB</li>
            <li>Aspect ratio: 16:9 (landscape)</li>
            <li>Resolution: At least 720p</li>
          </ul>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How are Display Ads charged?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Display Ads are charged on either:</p>
          <ul>
            <li>
              <strong>CPM (Cost per 1,000 Impressions)</strong> – Ideal for
              branding
            </li>
            <li>
              <strong>CPC (Cost per Click)</strong> – Ideal for performance
              campaigns
            </li>
          </ul>
          <p>
            You can set daily or campaign-wide budget caps. Payment is deducted
            from your ad wallet.{" "}
          </p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>How to track performance of image and video ads?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <p>Use the Advertising Dashboard in Seller Center to monitor:</p>
          <ul>
            <li>Impressions</li>
            <li>Click-through rate (CTR)</li>
            <li>Views (for video ads)</li>
            <li>Engagement rate</li>
            <li>Sales attributed to ads</li>
            <li>Return on Ad Spend (ROAS)</li>
          </ul>
          <p>Detailed analytics help refine your creatives and targeting.</p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          {" "}
          <span>When should I use Display Ads vs Sponsored Ads?</span>{" "}
          <span className="accordion-arrow">
            <i className="fas fa-chevron-right" />
          </span>{" "}
        </div>
        <div className="accordion-content">
          <div className="table-container2">
            <table>
              <thead>
                <tr>
                  <th width="33%">Objective</th>
                  <th width="33%">Use Sponsored Ads</th>
                  <th width="33%">Use Display Ads</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Boost sales directly</td>
                  <td>
                    <span className="checkbox">
                      <i className="fa fa-check" />
                    </span>
                  </td>
                  <td>
                    <span className="checkbox">
                      <i className="fa fa-check" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Launch new product</td>
                  <td>
                    <span className="checkbox">
                      <i className="fa fa-check" />
                    </span>
                  </td>
                  <td>
                    <span className="checkbox">
                      <i className="fa fa-check" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Increase brand awareness</td>
                  <td>
                    <span className="close_590">
                      <i className="fa fa-close" />
                    </span>
                  </td>
                  <td>
                    <span className="checkbox">
                      <i className="fa fa-check" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Target specific keywords</td>
                  <td>
                    <span className="checkbox">
                      <i className="fa fa-check" />
                    </span>{" "}
                    (Manual campaigns)
                  </td>
                  <td>
                    <span className="close_590">
                      <i className="fa fa-close" />
                    </span>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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