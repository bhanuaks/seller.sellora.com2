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
              <a href="#">Shipping &amp; fulfillment</a>{" "}
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
                Shipping &amp; fulfillment
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
  <h2>Shipping &amp; fulfillment</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>What is the policy?</li>
    <li>Additional guidelines</li>
    <li>Frequently Asked Questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      To ensure a consistent, reliable, and positive delivery experience for
      customers, all sellers on Sellora are required to adhere to a minimum set
      of shipping and fulfillment policy requirements. These policies help
      maintain trust, improve customer satisfaction, and support the efficiency
      of Sellora’s marketplace.
      <br />
      This guide outlines the{" "}
      <strong> core shipping and fulfillment requirements</strong>, including
      mandatory timelines, handling procedures, packaging standards, and
      additional best practices. Sellers are expected to comply with these
      standards at all times to avoid disruptions to their listings or account
      performance.
      <br />
      Key areas covered include:{" "}
    </p>
    <ul>
      <li>Order dispatch timelines and tracking obligations</li>
      <li>Approved shipping partners and service levels</li>
      <li>Packaging and labeling guidelines</li>
      <li>Handling returns and undelivered shipments</li>
    </ul>
    <p>
      Failure to comply with the shipping policy may result in penalties,
      listing restrictions, or account suspension as outlined in Sellora’s
      Seller Code of Conduct.
      <br />
      By following these policies, sellers contribute to a seamless delivery
      experience that helps build long-term customer loyalty on Sellora.
    </p>{" "}
    <p />
  </div>
  <p>
    <strong>What is the policy?&nbsp;</strong>
  </p>
  <p>
    The following table outlines the minimum requirements and restrictions
    sellers must follow under Sellora’s Shipping Policy. These standards are
    designed to ensure fast, reliable, and transparent delivery for every custom
  </p>
  <div className="table-container2">
    <table>
      <thead>
        <tr>
          <th width="33%">Required</th>
          <th width="33%">Prohibited</th>
          <th width="33%">Allowed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
              <li>
                You must support at least one valid shipping method to fulfill
                customer orders.
              </li>
              <li>
                You must select appropriate lag time, carrier, and service level
                to ensure delivery by the Expected Delivery Date (EDD).
              </li>
              <li>
                You must consistently meet the EDD as listed. Sellora reserves
                the right to adjust shipping dates to maintain accuracy and
                customer satisfaction.
              </li>
              <li>
                You must configure your operating schedule in the Seller Center
                for each active fulfillment center to define daily order cutoff
                times.
              </li>
              <li>
                You must support order processing until 11:00 AM (local time)
                for at least five days per week. Preferred operating days must
                be selected per fulfillment center.
              </li>
              <li>
                Use of Additional Days Off must be limited to exceptional cases
                only. Sellers may use up to 30 days off per fulfillment center
                per year. Excessive use may result in account penalties.
              </li>
              <li>
                Provide accurate and valid tracking numbers only after the
                package has been handed over to the carrier.
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                You may not engage in retail arbitrage by purchasing products
                from another retailer and having them ship directly to the
                customer.
              </li>
              <li>
                Do not ship orders in packaging that displays competitor
                branding.
              </li>
              <li>
                Do not include the name or branding of any third party (other
                than the manufacturer or seller) on packing slips, invoices, or
                external packaging—unless explicitly approved by Sellora.
              </li>
              <li>
                Do not include promotional materials, such as coupons, surveys,
                review requests, or advertisements in any customer shipment.
              </li>
              <li>
                Do not mark an order as "Shipped" unless it has been physically
                shipped. Violations may result in liability for associated costs
                and refunds.
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                {" "}
                You may use Multi-Channel Fulfillment (MCF), provided that
                shipments use neutral packaging and unbranded delivery vehicles
                with no external retailer branding or logos.
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="notes_11">
    <h3>Notes:</h3>
    <p></p>
    <ul>
      <li>
        All sellers are expected to follow these policies to maintain high
        shipping standards on Sellora.
      </li>
      <li>
        Non-compliance may lead to listing deactivation, account suspension, or
        removal from the platform.
      </li>
      <li>
        Refer to Sellora’s Packaging and Tracking policies for additional
        guidance.
      </li>
    </ul>
    <p />
  </div>
  <h3>Additional guidelines</h3>
  <p>
    <strong>Expected Delivery Date (EDD)</strong>
  </p>
  <p>
    The <strong> Expected Delivery Date (EDD)</strong> is the projected date an
    item is expected to be delivered to the customer. It is determined using a
    combination of factors you define for each listing, including:
  </p>
  <ul>
    <li>
      <strong>Order cutoff time</strong>
    </li>
    <li>
      <strong>Fulfillment lag time</strong>
    </li>
    <li>
      <strong>Operational days configured in your Seller Center</strong>
    </li>
    <li>
      <strong>Carrier transit time</strong>
    </li>
  </ul>
  <p>
    This EDD serves as a benchmark for fulfillment performance and ensures that
    your shipping operations align with customer expectations.
  </p>
  <p />
  <div className="notes_11">
    <h3>Notes:</h3>
    <p>
      {" "}
      The EDD used internally by Sellora may differ from the Estimated Delivery
      Date shown to customers, which is dynamically calculated using:
    </p>
    <ul>
      <li>
        Your <strong> historical On-Time Delivery Rate (OTD)</strong>
      </li>
      <li>
        <strong>Carrier performance data</strong>
      </li>
      <li>
        <strong>Sellora’s logistics intelligence and traffic trends</strong>
      </li>
    </ul>
    The Estimated Delivery Date directly influences your{" "}
    <strong> search visibility</strong> and <strong> product ranking</strong> on
    Sellora.com. Consistently meeting or exceeding your EDD improves your
    listing performance and customer trust.
    <p />
  </div>
  <h3>EDD Exceptions &amp; Terminal Shipments</h3>
  <p>
    When an item is{" "}
    <strong> five days past the Expected Delivery Date (EDD)</strong> and there
    has been{" "}
    <strong> no carrier movement for at least three consecutive days</strong>,
    the shipment is considered to be in a <strong> terminal state</strong>.
  </p>
  <p>
    In such cases,{" "}
    <strong>Sellora reserves the right to cancel the order</strong> if it has
    not been delivered within a reasonable time after the EDD. Determinations of
    timeliness are made solely at Sellora’s discretion.
  </p>
  <p>
    <strong> Important:</strong> Sellers are <strong>responsible for</strong>{" "}
    all costs associated with canceled or delayed orders due to EDD failures.
  </p>
  <h3>Repeated Violations</h3>
  <p>Repeated failure to meet the EDD may lead to:</p>
  <ul>
    <li>
      <strong>Restrictions on selling privileges</strong>
    </li>
    <li>
      <strong>Listing deactivation</strong>
    </li>
    <li>
      <strong>Account suspension</strong>
    </li>
  </ul>
  <p />
  <h3>Additional Notes</h3>
  <ul>
    <li>
      The <strong> EDD is calculated</strong> by adding the{" "}
      <strong> maximum transit time </strong>based on the selected shipping
      method and region.
    </li>
    <li>
      Sellora may <strong>analyze overdue orders daily</strong> to initiate{" "}
      <strong>automated customer refunds</strong> for orders that are past due
      and undelivered.
    </li>
  </ul>
  <h3>Fulfillment Lag Time</h3>
  <p>
    {" "}
    <strong>Fulfillment lag time</strong> refers to the number of{" "}
    <strong>operational days</strong> it takes for a seller to prepare and ship
    an item after receiving an order. This is an{" "}
    <strong> item-level attribute</strong> that plays a key role in determining
    both the <strong> Expected Delivery Date (EDD) </strong>and the customer
    delivery experience.
    <br />
    Sellora requires that orders be{" "}
    <strong> shipped within two operational days</strong> of receipt, unless the
    seller has submitted a <strong> lag time exemption request</strong> and
    received formal approval from Sellora.
    <br />
    <strong>Operational days</strong> are defined by the seller's fulfillment
    center settings in the Seller Center, defaulting to{" "}
    <strong> Monday through Friday</strong>, with options to customize preferred
    working days and apply <strong> Additional Days Off</strong> as needed.
  </p>
  <p>
    <strong>Important Notes</strong>
  </p>
  <ul>
    <li>
      {" "}
      <strong>Lag time exemptions</strong> are limited, subject to approval, and
      based on product type and fulfillment conditions.
    </li>
    <li>
      Approval is <strong> discretionary, revocable</strong>, and may be{" "}
      <strong> updated at any time</strong> by Sellora.
    </li>
    <li>
      Changes made to lag time settings may take up to{" "}
      <strong> 24 hours</strong> to reflect on Sellora.com.
    </li>
    <li>
      Lag time directly affects the <strong> shipping date displayed </strong>to
      customers. Sellers must ensure that the lag time selected accurately
      reflects their true fulfillment capacity to avoid delays, penalties, or
      reduced search ranking.
    </li>
  </ul>
  <h3>Expected Ship Date (ESD)</h3>
  <p>
    The <strong> Expected Ship Date (ESD)</strong> is the deadline by which you
    must <strong> mark an order as “Shipped”</strong> in the Seller Center or
    via API, along with providing a <strong> valid tracking number</strong>.
    Once this confirmation is submitted, Sellora automatically sends a{" "}
    <strong> shipment notification </strong>to the customer.
    <br />
    An order is considered <strong> shipped on time</strong> if it is marked as
    shipped with valid tracking <strong> on or before the ESD</strong>.
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
          <th width="33%">Fulfillment Lag Time</th>
          <th width="33%">Order Placed Before Cutoff</th>
          <th width="33%">Order Must Ship By</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
              <li>0 days.</li>
              <li>1 days</li>
              <li>2 days</li>
            </ul>
          </td>
          <td>
            <ul>
              <li> Same day</li>
              <li>Day of order + 1</li>
              <li>Day of order + 2.</li>
            </ul>
          </td>
          <td>
            <ul>
              <li> Same day</li>
              <li> Next day</li>
              <li> Day after next</li>
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
  <div className="notes_11">
    <h3>Notes:</h3>
    <p>
      {" "}
      If an order is placed after the order cutoff time, one extra day is added
      to the lag time.
    </p>
  </div>
  <h3>Performance Compliance</h3>
  <ul>
    <li>
      Sellers are required to maintain a{" "}
      <strong> Valid Tracking Rate (VTR) of 99% or higher</strong>.
    </li>
    <li>
      {" "}
      <strong> Repeated failures</strong> to meet the ESD will negatively affect
      your <strong>Seller Performance Metrics</strong> and may lead to account
      restrictions.
    </li>
  </ul>
  <h3>Transit Times</h3>
  <p>
    <strong> Transit time</strong> refers to the number of{" "}
    <strong>operational days</strong> it takes for a{" "}
    <strong> carrier to deliver an order </strong>to the customer{" "}
    <strong> after it has been shipped</strong>. This period directly impacts
    the <strong> Expected Delivery Date (EDD)</strong> shown to customers and is
    a key component of shipping performance. Transit time requirements are
    determined by:
  </p>
  <ul>
    <li>
      The <strong> shipping method</strong> selected (e.g., Standard, Expedited,
      Two-Day)
    </li>
    <li>
      The <strong> supported region or delivery zone</strong>
    </li>
  </ul>
  <p>
    Sellers are expected to set accurate transit times based on their carrier’s
    actual delivery performance for each shipping method and destination.
  </p>
  <p />
  <div className="notes_11">
    <h3>Notes:</h3>
    <p>
      {" "}
      Sellora <strong> does not require the use of specific carriers</strong> or
      service levels. However, it is the seller’s responsibility to{" "}
      <strong>
        ensure that the selected carrier and service meet the declared transit
        time
      </strong>{" "}
      .
    </p>
  </div>
  <h3>Why It Matters</h3>
  <p>Accurate transit times help:</p>
  <ul>
    <li>Set realistic delivery expectations for customers</li>
    <li>
      Ensure better <strong> search ranking and customer satisfaction</strong>
    </li>
    <li>Prevent order cancellations or late delivery penalties</li>
  </ul>
  <p />
  <h3>Order Late Dispatch Rate</h3>
  <p>
    Sellora requires all sellers to maintain an{" "}
    <strong> Order Late Dispatch Rate of 1.5% or lower</strong>. This means that{" "}
    <strong> no more than 1 out of every 100 orders</strong> should be
    dispatched <strong> after the expected ship-by date</strong>. Consistently
    exceeding this limit may impact your account health, visibility, and
    eligibility for seller benefits.
    <br />
    To avoid late dispatches, ensure timely order processing, accurate
    inventory, and proactive communication with buyers.
  </p>
  <p>
    <strong>
      If You Cross the 1.5% Limit:
      <br />
      First Violation or Minor Breach:
    </strong>
  </p>
  <ul>
    <li>
      <strong> Account Status</strong> : Temporary <strong> suspension</strong>
    </li>
    <li>
      <strong> Action Required:</strong> You may be asked to submit a{" "}
      <strong>Corrective Action Plan (CAP)</strong>{" "}
    </li>
    <li>Result: If approved, your account may be reactivated</li>
  </ul>
  <p />
  <h3>Repeated Violations or High Late Rate:</h3>
  <ul>
    <li>
      <strong>Account Status: Permanent block</strong>
    </li>
    <li>
      <strong>Consequence:</strong>
      <ul>
        <li>Loss of selling privileges</li>
        <li>Removal of all active listings</li>
        <li>Withholding of pending payouts (if any)</li>
        <li>Permanent restriction from creating new accounts on Sellora</li>
      </ul>
    </li>
  </ul>
  <p>
    <strong>How to Avoid This:</strong>
  </p>
  <ul>
    <li>Dispatch all orders within the committed timeline</li>
    <li>Use reliable shipping and fulfillment partners</li>
    <li>Set realistic handling and shipping times</li>
    <li>
      Regularly monitor your <strong> Seller Performance Dashboard</strong>
    </li>
  </ul>
  <div className="notes_11">
    <h3>Notes:</h3>
    <p> </p>
    <ul>
      <li>
        If your late dispatch rate exceeds 1%, your account may first be
        suspended.
      </li>
      <li>
        If not corrected or repeated again, your account may be permanently
        blocked.
      </li>
    </ul>
    <p />
  </div>
  <p>
    Order Cancellation Rate <br />
    Sellora expects all sellers to maintain an{" "}
    <strong> Order Cancellation Rate of 1% or lower</strong>. This means{" "}
    <strong> no more than 1 out of every 100 confirmed orders</strong> should be
    canceled by the seller.
    <br />
    Failure to meet this standard may result in{" "}
    <strong> account suspension or permanent blocking</strong>, depending on the
    severity and frequency of violations. Maintaining accurate inventory and
    promptly fulfilling orders is essential to preserving your seller privileges
    and ensuring customer trust.
  </p>
  <p>
    What is Order Cancellation Rate?
    <br />
    The Order Cancellation Rate is calculated based on the number of orders
    canceled by the <strong> seller</strong> after confirmation, regardless of
    the reason. Cancellations due to stockouts, pricing errors, incorrect
    listings, or fulfillment issues all contribute to this rate.{" "}
    <strong> Buyer-initiated cancellations do not impact this metric.</strong>
  </p>
  <ul>
    <li>
      First violation may result in a <strong> temporary suspension</strong> of
      your selling account.
    </li>
    <li>
      You will be required to submit a{" "}
      <strong> Corrective Action Plan (CAP)</strong> explaining the cause and
      prevention steps.
    </li>
  </ul>
  <p />
  <h3>Order Cancellation Penalty</h3>
  <p>
    To maintain trust and reliability in the marketplace, Sellora has a strict
    policy against seller-initiated order cancellations. Sellers are expected to
    fulfill every confirmed order promptly and accurately.
    <br />
    Penalty for Seller-Initiated Cancellations
    <br />
    If you cancel a confirmed order. Sellora will apply a penalty equal to 100%
    of the commission fee for that order. This means:
    <br />
    You will be charged the full commission fee even though the order was not
    fulfilled.
  </p>
  <h3>In Case of Repeated or Serious Violations:</h3>
  <ul>
    <li>
      Your account may be subject to a <strong> permanent block</strong>.
    </li>
    <li>
      All listings will be removed, and you may lose access to remaining funds.
    </li>
    <li>You will no longer be allowed to sell on Sellora.</li>
  </ul>
  <h3>How to Avoid Cancellations</h3>
  <p>To maintain compliance and protect your account:</p>
  <ul>
    <li>Keep your inventory synced and accurate</li>
    <li>Confirm product availability before listing</li>
    <li>Avoid manual errors in pricing and listing details</li>
    <li>Respond quickly to order updates and customer inquiries</li>
  </ul>
  <p />
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>What shipping carriers do Sellora support?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          Sellora supports a wide range of{" "}
          <strong> freight and parcel carriers</strong> to give sellers
          flexibility in fulfilling orders. While there is no restriction on
          which carriers you may use, it is highly recommended to choose{" "}
          <strong>reliable, well-established shipping providers </strong> to
          ensure timely delivery and tracking accuracy.
          <br />
          If you choose to work with{" "}
          <strong>smaller or regional carriers</strong> that are not integrated
          with Sellora's tracking system, you may risk falling short of the{" "}
          <strong> 99% Valid Tracking Rate (VTR)</strong> requirement. This can
          negatively affect your <strong>Seller Performance Metrics</strong> .
          <br />
          <strong>Recommendation</strong> : To maintain compliance and a
          positive customer experience, consider using{" "}
          <strong> national carriers with full tracking integration</strong>,
          especially for high-volume or time-sensitive orders.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          Can I Opt Out of Sellora Extending My Delivery Promise Times?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          No, you cannot opt out of Sellora extending your delivery promise
          times.
          <br />
          To ensure a{" "}
          <strong> consistent and accurate shipping experience</strong> for
          customers,{" "}
          <strong>
            {" "}
            Sellora reserves the right to update or extend delivery dates
          </strong>{" "}
          at its sole discretion. This includes, but is not limited to:
        </p>
        <ul>
          <li>
            <strong> Operational delays</strong> by the seller or carrier
          </li>
          <li>
            <strong>Severe weather events or logistical disruptions</strong>
          </li>
          <li>
            <strong> Performance-related adjustments</strong> to improve
            delivery accuracy
          </li>
        </ul>
        <p />
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          &nbsp;Will my account be permanently blocked if I continue to dispatch
          late?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes. <strong>Repeated or severe violations</strong> of the 1%
          threshold may result in a <strong> permanent block</strong> of your
          account, with no option for reinstatement.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          Will my account be permanently blocked immediately if I cross 1%?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Not always. Sellora typically issues warnings or suspensions first.
          However, if the issue is repeated or intentional (e.g., canceling due
          to pricing manipulation), a <strong> permanent block </strong>may
          occur without further warning.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What counts toward the cancellation rate?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>A: Any order canceled by the seller, including due to:</p>
        <ul>
          <li>Out-of-stock items</li>
          <li>Incorrect listing details</li>
          <li>Pricing errors</li>
          <li>Fraud prevention</li>
          <p> Buyer-initiated cancellations do not count against your rate.</p>
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