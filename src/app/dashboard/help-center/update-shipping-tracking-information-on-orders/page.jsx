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
              <a href="#">Order Management </a>{" "}
            </li>
            <li>
              <a href="#">Update Shipping Tracking Information on Orders</a>{" "}
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
              <a href="#"> Order Management </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Update Shipping Tracking Information on Orders
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
  <h2> Update Shipping Tracking Information on Orders</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How to Update Tracking Information on order</li>
    <li>How to Correct Tracking Information on a Shipped Order </li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      Keeping tracking information up to date is a critical part of order
      fulfillment on Sellora. Once an order has been packed and handed over to
      the courier, sellers are responsible for entering accurate tracking
      details in the Seller Center. This includes selecting the correct courier
      service and adding the tracking number. Updating this information ensures
      that customers can follow their delivery in real time, reduces
      order-related inquiries, and helps build trust. Timely tracking updates
      also contribute to better seller performance metrics and fewer disputes.
    </p>
  </div>
  <p>
    <strong>How to Update Tracking Information on order</strong> <br />
    To update tracking information an order on Sellora, follow these steps:
  </p>
  <ul>
    <li>Log in to your Seller Center account at seller.sellora.com.</li>
    <li>
      Click on <strong>“Orders”</strong> from the main menu, then select{" "}
      <strong>“Manage Orders.”</strong>
    </li>
    <li>
      Go to the <strong>“Unshipped Orders”</strong> tab.
    </li>
    <li>
      Under the <strong> Action</strong> section on the right side, click the{" "}
      <strong> “Select”</strong> button.
    </li>
    <li>
      From the dropdown menu, choose <strong>“Confirm Order.”</strong>
    </li>
    <li>You will be redirected to the tracking page.</li>
    <li>
      Click on <strong>“Add Tracking,”</strong> enter the{" "}
      <strong>tracking number,</strong> and select the{" "}
      <strong>shipping carrier.</strong>
    </li>
    <li>
      Click <strong>“Save.”</strong>
    </li>
  </ul>
  <p />
  <div className="notes_11">
    <h3>Important Notes:</h3>
    <p />
    <ul>
      <li>Always enter correct tracking details to avoid customer disputes.</li>
      <li>
        Updating tracking promptly improves customer trust and delivery success.
      </li>
      <li>
        If you are using Sellora's shipping partners, tracking may be updated
        automatically.
      </li>
    </ul>
    <p />
  </div>
  <p>
    <strong>
      How to Correct Tracking Information on a Shipped Order&nbsp;
    </strong>{" "}
    <br />
  </p>
  <ul>
    <li>
      <strong>Log in</strong> to your Seller Center account at
      seller.sellora.com.
    </li>
    <li>
      From the main menu,click on <strong> “Orders”,</strong> then select{" "}
      <strong> “Manage Orders.”</strong>
    </li>
    <li>
      Navigate to the <strong>“Shipped Orders”</strong> tab.
    </li>
    <li>
      Locate and click on the relevant <strong>Order ID.</strong>
    </li>
    <li>
      You will be redirected to the order’s{" "}
      <strong> Tracking Information</strong> page.
    </li>
    <li>
      Click on <strong>“Edit Tracking”,</strong> update the{" "}
      <strong>correct tracking number,</strong> and select the appropriate{" "}
      <strong> shipping carrier</strong> from the dropdown list.
    </li>
    <li>
      Click <strong>“Save”</strong> to apply the changes
    </li>
  </ul>
  <p />
  <div>
    <h3>Frequently Asked Questions</h3>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I Update Tracking Information After Shipping the Order?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          No, tracking information can only be updated{" "}
          <strong> before the order is marked as shipped.</strong>
          <br />
          <i
            style={{ color: "rgb(219, 219, 22)" }}
            className="fa-solid fa-triangle-exclamation"
          />{" "}
          <strong> Important:</strong> <br />
          Providing incorrect or misleading tracking information may lead to
          account warnings or deactivation as it violates Sellora’s seller
          policies. Always ensure that the tracking number and courier details
          are accurate before confirming shipment.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>What happens if I don’t provide tracking information?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          To confirm and process an order on Sellora, it is{" "}
          <strong> mandatory to update the tracking information.</strong>
          If you fail to provide a valid tracking number and courier details,
          the order <strong>will not be confirmed</strong> and may be{" "}
          <strong>automatically cancelled</strong> by the system.
          <br />
          <i
            style={{ color: "rgb(219, 219, 22)" }}
            className="fa-solid fa-triangle-exclamation"
          />{" "}
          <strong> Note:</strong> <br />
          Repeated failure to update tracking information on time may negatively
          impact your seller performance and could lead to account warnings or
          deactivation as per Sellora’s policies
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Is Tracking Information Mandatory for All Shipping Methods?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          <strong> Yes,</strong> tracking information is{" "}
          <strong> mandatory</strong> for <strong>all shipping methods,</strong>{" "}
          including both <strong>Standard</strong> and{" "}
          <strong>Expedited</strong> shipping on Sellora. Providing a valid
          tracking number ensures:
        </p>
        <ul>
          <li>
            {" "}
            <i
              style={{ color: "rgb(19, 216, 19)" }}
              className="fa-sharp-duotone fa-solid fa-square-check"
            />{" "}
            Reliable and timely delivery
          </li>
          <li>
            {" "}
            <i
              style={{ color: "rgb(19, 216, 19)" }}
              className="fa-sharp-duotone fa-solid fa-square-check"
            />{" "}
            Transparency for buyers to monitor their shipment
          </li>
          <li>
            {" "}
            <i
              style={{ color: "rgb(19, 216, 19)" }}
              className="fa-sharp-duotone fa-solid fa-square-check"
            />{" "}
            Protection for sellers against delivery-related disputesy
          </li>
        </ul>
        <p>
          Failure to provide tracking details may result in order cancellations,
          delayed payments, or account performance issues.
        </p>
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