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
              <a href="#">Policies &amp; Standards </a>{" "}
            </li>
            <li>
              <a href="#">Performance</a>{" "}
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
                Performance
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
  <h2>Performance</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>Performance Monitoring</li>
    <li>Consequences of Poor Performance</li>
    <li>Performance Recovery &amp; Support</li>
    <li>Seller Tier Impact</li>
    <li>Maintain Excellence on Sellora</li>
    <li>Frequently Asked Questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Your performance as a seller on Sellora is crucial to ensuring a
      high-quality shopping experience for customers. Sellora evaluates your
      performance regularly based on key operational metrics that reflect
      service quality, order fulfillment, and customer satisfaction.
      <br />
      Sellers must consistently meet the following core performance standards:
    </p>
    <ul>
      <li>
        <strong> Order Fulfillment Rate:</strong> Timely shipping of orders with
        valid tracking details. Late or unshipped orders may impact account
        health.
      </li>
      <li>
        <strong>Cancellation Rate:</strong> Maintain a low cancellation rate.
        Avoid canceling orders due to stockouts or pricing errors.
      </li>
      <li>
        <strong>Return Rate:</strong> Keep return rates low by offering quality
        products, accurate listings, and proper packaging.
      </li>
      <li>
        <strong>Customer Rating:</strong> Deliver exceptional customer service.
        High ratings improve visibility and buyer trust.
      </li>
      <li>
        <strong>Response Time: </strong> Timely response to buyer queries and
        support tickets is mandatory.
      </li>
    </ul>
    Sellora monitors seller performance through dashboards and issues alerts for
    any deviations. Repeated violations or failure to meet performance standards
    may result in account penalties, restrictions, or suspension. Maintaining
    excellent performance not only helps avoid disruptions but also enhances
    your reputation, increases product visibility, and unlocks access to premium
    features and promotional tools.
    <p />
  </div>
  <h3>Performance Monitoring</h3>
  <p>
    Sellora continuously monitors seller performance. Metrics are evaluated
    based on recent order activity and may influence:
  </p>
  <ul>
    <li>Product visibility in search and promotions</li>
    <li>Eligibility for sales events and ad tools</li>
    <li>Seller Tier status</li>
    <li>Overall account health</li>
  </ul>
  <h3>Consequences of Poor Performance</h3>
  <p>Failure to meet the required standards may result in:</p>
  <ul>
    <li>
      <strong>Account warnings or notifications</strong>
    </li>
    <li>
      Temporary restrictions on product listings, advertising, or order
      processing
    </li>
    <li>
      <strong> Suspension or termination of the seller account</strong> in
      severe or repeated cases
    </li>
  </ul>
  <p />
  <h3>Performance Recovery &amp; Support</h3>
  <p>If your account falls below expected performance levels:</p>
  <ul>
    <li>
      You will be notified by Sellora with the specific reasons for the
      performance decline
    </li>
    <li>You may be asked to submit a Performance Improvement Plan (PIP)</li>
    <li>
      Sellora Support may provide guidance and resources to help recover your
      account status
    </li>
  </ul>
  <p />
  <h3>Seller Tier Impact</h3>
  <p>
    Performance directly affects your Seller Tier. Sellers with strong
    performance gain access to exclusive benefits, including:
  </p>
  <ul>
    <li>Lower commission rates</li>
    <li>Increased exposure in search and recommendation placements</li>
    <li>Early access to promotions and beta tools</li>
  </ul>
  <p />
  <h3>Performance Criteria for Seller</h3>
  <ul>
    <li>
      <p>
        <strong>Exceptional On-Time Delivery</strong>
      </p>
      Maintain an <strong> On-Time Delivery Rate of 95% or higher</strong> over
      the last <strong>90 days</strong> to ensure reliable and timely service to
      customers.
    </li>
    <li>
      <p>
        <strong>Minimal Cancellations</strong>
      </p>
      Keep the <strong> cancellation rate at or below 1.5%</strong> over the
      past <strong> 90 days</strong>, demonstrating fulfillment reliability and
      commitment to customer satisfaction.
    </li>
    <li>
      <p>
        <strong>Fast &amp; Reliable Responses</strong>
      </p>
      Achieve a <strong> Seller Response Rate of 95%</strong> or higher within
      the last <strong>30 days</strong> , ensuring prompt and professional
      communication with customers.
    </li>
    <li>
      <p>
        <strong>Strong Shipping Performance</strong>
      </p>
      Secure a <strong> Shipping Score of at least 90%</strong> based on the
      most recent performance refresh, indicating consistent and efficient order
      handling.
    </li>
    <li>
      <p>
        <strong>High-Quality Listings</strong>
      </p>
      Maintain a <strong> Content Quality Score of 75%</strong> or higher at the
      time of review to provide accurate, clear, and compelling product
      listings.
    </li>
    <li>
      <p>
        <strong>Competitive Pricing</strong>
      </p>
      Ensure at least <strong>60% Price Competitiveness</strong> , offering
      attractive and market-aligned pricing during evaluations.
    </li>
    <li>
      <p>
        <strong>Consistent Order Volume</strong>
      </p>
      Successfully processed a minimum of{" "}
      <strong> 1,000 orders in the last 90 days</strong>, reflecting sustained
      operational capability and customer demand.
    </li>
    <li>
      <p>
        <strong>Active &amp; Engaged Seller</strong>
      </p>
      Remain active on Sellora for a minimum of <strong>90 days</strong> ,
      showing long-term engagement and platform commitment.
    </li>
    <li>
      <p>
        <strong>Trust &amp; Compliance</strong>
      </p>
      Maintain a clean record with{" "}
      <strong>
        {" "}
        no violations of Trust &amp; Safety or Performance Standards
      </strong>
      , ensuring adherence to Sellora's policies and customer trust.
    </li>
  </ul>
  <h3>Late Dispatch &amp; Delivery</h3>
  <p>
    Timely order processing and delivery are essential to maintaining a
    high-quality customer experience on Sellora. Sellers are expected to
    dispatch orders within the promised handling time and ensure that deliveries
    reach customers within the estimated delivery window.
    <strong>Late dispatch</strong> occurs when an order is not shipped by the
    expected ship-by date, while <strong> late delivery </strong>refers to
    orders arriving after the promised delivery timeline. Both issues can
    negatively affect seller performance metrics, reduce visibility in search
    results, and may lead to penalties, including account suspension.
    <br />
    To meet Sellora’s performance standards, sellers must proactively manage
    order fulfillment, use reliable logistics services, and communicate clearly
    with customers in case of delays. Consistent adherence to shipping timelines
    is crucial to building trust and long-term success on the Sellora platform.
  </p>
  <h3>Restricted Products</h3>
  <p>
    Sellora is committed to providing a safe, legal, and trustworthy
    marketplace. To achieve this, certain products are restricted or completely
    prohibited from being listed or sold on the platform. Sellers are
    responsible for ensuring that their listings comply with all applicable
    laws, regulations, and Sellora’s policies.
    <br />
    Restricted products include items that pose safety risks, are illegal,
    require special licenses, or violate intellectual property or content
    standards. Listing restricted or prohibited products may lead to account
    suspension, legal action, and permanent removal from the Sellora
    marketplace.
  </p>
  <h3>Product Listing Limits</h3>
  <p>
    To maintain listing quality and ensure a smooth onboarding experience,
    Sellora may impose limits on the number or type of products a seller can
    list. These product listing limits are determined by factors such as seller
    verification status, performance history, product category, and account age.
    <br />
    Listing limits help prevent spam, counterfeit listings, and unauthorized
    product uploads. As you build a strong track record on Sellora, your limits
    may be increased based on your performance and compliance.
  </p>
  <h3>Maintain Excellence on Sellora</h3>
  <p>
    Your consistent performance helps build buyer trust and contributes to your
    long-term success on the platform. To review your live performance metrics,
    log in to the <strong> Seller Center &gt; Performance Dashboard</strong>.
    <br />
    For more details or assistance, contact{" "}
    <strong> Sellora Seller Support</strong>.
  </p>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>Why is performance important on Sellora?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          {" "}
          <strong>
            Performance is directly linked to customer satisfaction and seller
            success
          </strong>
          . Strong performance builds buyer trust, improves search visibility,
          and helps you qualify for promotions, advertising tools, and higher
          Seller Tier levels.p&gt;
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How does Sellora notify me about performance issues?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          You will receive alerts directly in your{" "}
          <strong> Seller Center dashboard</strong>. The notification will
          include specific metrics that need improvement and, where applicable,
          a deadline for corrective action.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can my account be suspended due to performance?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes. Repeated failure to meet minimum standards or a significant drop
          in service quality may result in:
        </p>
        <ul>
          <li>
            {" "}
            <strong>Temporary restrictions</strong> (ads, listings, campaigns)
          </li>
          <li>
            <strong>Suspension</strong> of your selling privileges
          </li>
          <li>
            <strong>Permanent termination</strong> in serious or unresolved
            cases
          </li>
        </ul>
        <p />
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Will Sellora support me in improving performance?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes. Sellora provides tools, insights, and training resources in your
          Seller Center. You may also receive guidance through personalized
          alerts or by contacting <strong> Sellora Seller Support</strong>.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What types of products are restricted or prohibited?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>Examples include, but are not limited to:</p>
        <ul>
          <li>Alcohol, tobacco, and vaping products</li>
          <li>Have a plain white or clean background</li>
          <li>Prescription drugs and medical devices</li>
          <li>Weapons, firearms, ammunition, and explosives</li>
          <li>Hazardous chemicals and materials</li>
          <li>Adult content and obscene materials</li>
          <li>Counterfeit, fake, or pirated goods</li>
          <li>Products infringing on intellectual property</li>
          <li>Wildlife products and endangered species</li>
          <li>Government-issued documents or replicas</li>
        </ul>
        <p />
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I sell a restricted product if I have a license?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          In some cases, yes. Certain restricted items (like supplements or
          electronics) may be listed if you have valid licenses, certifications,
          or prior approval from Sellora. Unauthorized listings will be removed.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What happens if I list a restricted or prohibited product?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>Sellora may take the following actions:</p>
        <ul>
          <li>Remove the product listing</li>
          <li>Issue a warning or penalty</li>
          <li>Suspend or permanently ban your account</li>
          <li>Report the violation to legal authorities if applicable</li>
        </ul>
        <p />
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Why do I have a limit on my account?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>Limits are applied based on your:</p>
        <ul>
          <li>Account verification status</li>
          <li>Sales history and performance metrics</li>
          <li>Product category (some are more restricted than others)</li>
          <li>Risk and compliance evaluation</li>
        </ul>
        <p />
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