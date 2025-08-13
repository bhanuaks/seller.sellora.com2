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
              <a href="">Order Management</a>
            </li>
            <li>
              <a href="#">Returns &amp; Refunds</a>{" "}
            </li>
            <li>
              <a href="#">Manage Return Settings</a>{" "}
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
              <a href="#">Order Management</a>{" "}
            </li>
            <li>
              <a href="#">Returns &amp; Refunds </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Manage Return Settings
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
  <h2>Manage Return Settings</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How to Access and Manage Return Settings</li>
    <li>Options Available in Return Settings</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Sellora allows sellers to define how returns are handled for their
      products through the <strong> Return Settings</strong> section in the{" "}
      <strong> Seller Center</strong>. Managing your return preferences properly
      ensures a smooth post-purchase experience for both you and the buyer.
    </p>
  </div>
  <h3>How to Access and Manage Return Settings</h3>
  <ul>
    <li>
      <strong>Log</strong> in to your <strong>Seller Center</strong> on{" "}
      <strong> Seller.sellora.com</strong>.
    </li>
    <li>
      Go to the<strong> Settings</strong> tab from the top menu.
    </li>
    <li>
      Select <strong>Return Settings </strong>from the dropdown list.
    </li>
  </ul>
  <h3>Options Available in Return Settings</h3>
  <p>
    <strong>General Returns Settings</strong>
  </p>
  <ul>
    <li>
      <strong>RMA (Return Merchandise Authorization) Rules</strong>
      <ul>
        <li>
          Sellora automatically approves all return requests based on your
          predefined return settings and policies. For any exceptions to these
          rules, customers will reach out to you directly through buyer
          questions.
        </li>
      </ul>
    </li>
    <li>
      <strong>Refunds</strong>
      <ul>
        <li>
          I will manually issue all refunds within 48 hours of receiving
          returned items.
        </li>
      </ul>
    </li>
  </ul>
  <h3>Extended Holiday Return Window</h3>
  <p>
    <strong>Return window is extended for the holidays.</strong>
  </p>
  <ul>
    <li>
      Sellora's return window updates automatically, so sellers need no action.
      Our industry-standard policy ensures shopper peace of mind during
      holidays, building trust and loyalty with your customers
    </li>
  </ul>
  <p />
  <p>
    <strong>Return Address</strong>
  </p>
  <ul>
    <li>
      Set or update the address where returned items should be sent. Ensure this
      address is accurate to avoid lost or delayed returns.
    </li>
  </ul>
  <p>
    <strong>Return Window</strong>
  </p>
  <ul>
    <li>
      Define the number of days a buyer can initiate a return after delivery
      (e.g., 7, 10, or 15 days). The return window may vary by product category.
    </li>
  </ul>
  <p>
    <strong>Replacements by Department</strong>
  </p>
  <ul>
    <li>
      Sellora allows sellers to manage product replacements based on the product{" "}
      <strong> category or department</strong>. This helps streamline the return
      and replacement process for different types of items.
    </li>
  </ul>
  <p>
    <strong>How to Manage Replacement Settings by Department</strong>
  </p>
  <ul>
    <li>
      Navigate to <strong> Settings &gt; Return Settings</strong>.
    </li>
    <li>
      Scroll to the <strong> Replacements by Department</strong> section.
    </li>
    <li>
      Select the departments (e.g., Electronics, Apparel, Home Appliances) where
      you want to allow replacements.
    </li>
    <li>
      Choose one of the following options per department:
      <ul>
        <li>
          <strong>Allow Replacements</strong>
        </li>
        <li>
          <strong>Allow Replacements with Conditions</strong> (e.g., only if the
          product is defective or damaged)
        </li>
        <li>
          <strong>Do Not Allow Replacements</strong>
        </li>
      </ul>
    </li>
    <li>Click Save to apply your preferences.</li>
  </ul>
  <p>
    <strong>Common Department Examples:</strong>
  </p>
  <div className="table-container2">
    <table>
      <thead>
        <tr>
          <th width="33%">Department</th>
          <th width="33%">Replacement Allowed</th>
          <th width="33%">Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
              {" "}
              <li>Electronics</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>Yes (Defects only)</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>Must include product verification</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              {" "}
              <li>Fashion &amp; Apparel</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>Yes</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>Must include product verification</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              {" "}
              <li>Beauty &amp; Personal Care</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>No</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>Due to hygiene and safety concerns</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              {" "}
              <li>Home Appliances</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>Conditional</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>Requires service center inspection</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="notes_11">
    <h3>Important Notes:</h3>
    <p></p>
    <ul>
      <li>
        Departments with restricted replacement options will notify the buyer at
        checkout.
      </li>
      <li>
        Ensure that replacement policies are aligned with Sellora’s{" "}
        <strong> Return &amp; Replacement Policy</strong> to maintain account
        health.
      </li>
      <li>
        Misuse or rejection of valid replacement requests may result in
        penalties.
      </li>
    </ul>
    <p>
      If you have further questions, you can raise a ticket through your{" "}
      <strong>Seller Center &gt; Help &amp; Support</strong> section.
    </p>
    <p />
  </div>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>How do I update my return settings?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>&nbsp;To update your return settings:</p>
        <ul>
          <li>Log in to your Seller Center on Sellora.com.</li>
          <li>Go to Settings &gt; Return Settings.</li>
          <li>
            Adjust your return window, shipping method, and return address.
          </li>
          <li>Click Save to confirm changes.</li>
        </ul>
        <p />
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>What is the default return window for buyers?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          The default return window is 10 days from the delivery date. You can
          modify this based on your business needs, but it must comply with
          Sellora’s return policy.{" "}
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>
          Can I set different return policies for different product categories?
        </span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          Yes. You can enable or disable replacements and customize return
          options by category under Return Settings.{" "}
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>Who is responsible for return shipping costs?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>&nbsp;As a seller, you can choose:</p>
        <ul>
          <li>Seller-paid returns (you provide a prepaid label), or</li>
          <li>Buyer-paid returns (the buyer handles shipping).</li>
        </ul>
        <p> You must specify your preference in the return settings.</p>
        <p />
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>Are there any items that cannot be returned?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          Yes. Certain categories like perishable items, personal care products,
          and custom-made goods may be marked non-returnable. Always review
          Sellora's non-returnable item guidelines.
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