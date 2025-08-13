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
                <a href="#">Help</a>{" "}
              </li>
              <li>
                <a href="#">Catalog Management</a>{" "}
              </li>
              <li>
                <a href="#" className="active_002">
                  {" "}
                  Listing Management
                </a>{" "}
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
                      <a href="#">Help</a>{" "}
                    </li>
                    <li>
                      <a href="#"> Listing Set Up</a>{" "}
                    </li>
                    <li>
                      <a href="#"> Catalog Management</a>{" "}
                    </li>
                    <li>
                      <a href="#" className="active_002">
                        {" "}
                        Listing Management
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
              <h2>&nbsp;Listing Management</h2>
              <h3>In this guide</h3>
              <ul className="clean-decorative-list">
                <li>Overview</li>
                <li>How to Edit a Listing on Sellora</li>
                <li>How to Delete an Item in Sellora Seller Center</li>
                <li>How to Reactivate an Item in Sellora Seller Center</li>
                <li>Frequently asked questions</li>
              </ul>
              {/* ==============getting-started-section=open================ */}
              <div className="section-box ">
                <h3>Overview</h3>
                <p>
                  On Sellora.com, Listing Management is the centralized process
                  of creating, organizing, editing, and maintaining your product
                  listings to ensure accuracy, visibility, and sales performance
                  across the marketplace. This system empowers sellers to manage
                  their inventory efficiently, optimize product details, and
                  provide customers with up-to-date information for a seamless
                  shopping experience.
                </p>
              </div>
              <div className="ragister-brand-">
                <h4>How to Edit a Listing on Sellora</h4>
                <ul>
                  <li>
                    Go to the Seller Dashboard, then click on Listing → My
                    Listing.
                  </li>
                  <li>Find the product you want to edit.</li>
                  <li>
                    Click on the three dots (⋮) on the right side of the
                    listing.
                  </li>
                  <li>
                    From the dropdown menu, click on{" "}
                    <strong> Edit Catalogue.</strong>
                  </li>
                  <li>
                    Make the necessary changes to the listing (e.g., Title,
                    Description, Price, Images, etc.).
                  </li>
                  <li>
                    After making the changes, click on Submit and Publish to
                    save and update your listing
                  </li>
                </ul>
              </div>
              <div className="ragister-brand-">
                <strong style={{ color: "black" }}>
                  How to Delete an Item in Sellora Seller Center
                </strong>
                <p style={{ margin: "0px !important" }}>
                  Yes, you can delete a listing in Sellora Seller Center
                </p>
                <strong style={{ color: "black" }}>
                  Steps to Delete a Listing:
                </strong>
                <ul>
                  <li>
                    Go to <strong> Listing &gt; My Listings.</strong>
                  </li>
                  <li>Find the product you want to delete.</li>
                  <li>
                    Click on the <strong> three dots (⋮) </strong>on the right
                    side of the listing.
                  </li>
                  <li>
                    From the dropdown menu, click on{" "}
                    <strong> Delete Listing.</strong>
                  </li>
                  <li>
                    Confirm the action. Your listing will be permanently
                    deleted.
                  </li>
                  <p style={{ margin: "0px !important" }}>
                    Note: Once deleted, the product will no longer be visible to
                    buyers and cannot be restored. Make sure you want to
                    permanently remove it before confirming.
                  </p>
                </ul>
              </div>
              <div className="ragister-brand-">
                <strong style={{ color: "black" }}>
                  How to Unpublished listing in Sellora Seller Center
                </strong>
                <br />
                <strong style={{ color: "black" }}>
                  Steps to Unpublished a Listing:
                </strong>
                <ul>
                  <li>
                    Go to <strong> Listing &gt; My Listings.</strong>
                  </li>
                  <li>Find the product you want to delete.</li>
                  <li>
                    Click on the <strong> three dots (⋮) </strong>on the right
                    side of the listing.
                  </li>
                  <li>
                    From the dropdown menu, click on{" "}
                    <strong> Archive Listing.</strong>
                  </li>
                  <li>
                    Confirm the action. Your listing will be UnpublishedConfirm
                    the action. Your listing will be unpublished and no longer
                    visible to buyers.
                  </li>
                </ul>
              </div>
              <strong style={{ color: "black" }}>
                How to Reactivate an Item in Sellora Seller Center
              </strong>
              <br />
              <p>
                If you want to reactivate a previously deactivated listing,
                simply add stock to it
              </p>
              <div className="ragister-brand-">
                <strong style={{ color: "black" }}>
                  How to Edit Draft listing in Sellora Seller Center
                </strong>
                <ul>
                  <li>
                    Go to the Seller Dashboard → click on Listing → then click
                    on My Listing.li&gt;
                  </li>
                  <li>Click on Draft.</li>
                  <li>Find the draft item you want to update..</li>
                  <li>
                    Click on the three dots (⋮) next to the draft listing.li&gt;
                  </li>
                  <li>Select Edit from the dropdown menu..</li>
                  <li>
                    Update the necessary fields (e.g., Title, Description,
                    Images, Price, etc.).
                  </li>
                  <li>
                    After making changes, click Submit and Publish to make the
                    listing live.
                  </li>
                </ul>
              </div>
              <h3>Frequently asked questions</h3>
              <div className="faq-container">
                <div className="accordion-item">
                  <div className="accordion-header">
                    {" "}
                    <span>What is Listing Management on Sellora.com?</span>{" "}
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>{" "}
                  </div>
                  <div className="accordion-content">
                    <p>
                      Listing Management on Sellora.com refers to the process of
                      creating, editing, updating, and maintaining product
                      listings. It helps sellers keep their catalog accurate,
                      organized, and optimized for better visibility and sales
                      performance.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      What are the types of product listings available on
                      Sellora?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>Sellora offers two main types of listings:</p>
                    <ul>
                      <li>
                        <strong> Single Manual Listing:</strong> For adding
                        products one by one with full control over details.
                      </li>
                      <li>
                        <strong> Bulk Catalog Upload: </strong>For uploading
                        multiple products at once using category-specific Excel
                        templates.
                      </li>
                    </ul>
                    <p />
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      Can I edit my product listing after it’s been submitted?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      Yes, you can edit product details such as the title,
                      price, images, stock, and other attributes at any time
                      from the Seller Dashboard → My Listings by clicking on the
                      three-dot menu and selecting the Edit Catalogue section to
                      update.
                    </p>
                  </div>
                </div>
              </div>
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
