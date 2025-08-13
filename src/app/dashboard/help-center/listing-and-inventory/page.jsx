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
              <a href="#"> Listing optimization </a>{" "}
            </li>
            <li>
              <a href="#"> Listing and inventory</a>{" "}
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
        <div class="notification_breadcomb_rts-navigation-area-breadcrumb d-lg-block d-none">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="notification_breadcomb mb-6">
                <ul>
                  <li><a href="#">Help </a> </li>
            <li><a href="#"  >Listing optimization</a> </li>
             <li><a href="#"  class="active_002"> Listing and inventory</a> </li>
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
  <h2>Listing and inventory</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>What Is Listing Optimization</li>
    <li>Listing Optimization on Sellora</li>
    <li>Inventory Management</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      On Sellora.com, an optimized product listing and efficient inventory
      management are essential to increase product visibility, win the Buy Box,
      improve customer trust, and boost sales. This guide covers how to properly
      manage your listings and inventory and how to optimize them for better
      performance.
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>What Is Listing Optimization</h4>
    <p style={{ margin: "0px !important" }}>
      Listing Optimization means enhancing your product detail page to rank
      better in search, attract more clicks, and convert visitors into buyers.
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>Key Elements to Optimize:</h4>
    <ul style={{ paddingLeft: 20 }}>
      <li>
        {" "}
        <strong>Title:</strong>
        <ul>
          <li>
            Use relevant keywords (e.g., brand, product type, color, size).
          </li>
          <li>Keep it concise and readable.</li>
          <li>
            Example: “Sellora Women’s Cotton Floral Maxi Dress – Blue, Size M
          </li>
        </ul>
      </li>
      <li>
        <strong>Images:</strong>
        <ul>
          <li>Use high-resolution images (min 1600 x 1600 px).</li>
          <li>
            Include main image (white background), lifestyle images, close-ups,
            and size chart if needed.
          </li>
          <li>Show all product angles and important features.</li>
        </ul>
      </li>
      <li>
        <strong>Bullet Points:</strong>
        <ul>
          <li>
            Highlight top features, benefits, and use cases (5 points max).
          </li>
          <li>
            Example: Soft breathable cotton | Elegant floral print | Machine
            washable | Ideal for daily wear | Available in multiple sizes
          </li>
        </ul>
      </li>
      <li>
        <strong>Description:</strong>
        <ul>
          <li>
            Include detailed info about the product, use strong keywords
            naturally.
          </li>
          <li>Add care instructions, styling tips, and warranty (if any).</li>
        </ul>
      </li>
      <li>
        <strong>Keywords (Search Tags):</strong>
        <ul>
          <li>
            Add backend keywords like “casual dress”, “blue maxi”, “floral
            summer outfit” etc., in the keyword fields during listing.
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>
      Listing Optimization on Sellora
    </h4>
    <h4 style={{ margin: "0px !important" }}>Edit a Listing:</h4>
    <ul style={{ paddingLeft: 20 }}>
      <li>
        Go to <strong> Seller Dashboard → Listing → My Listings.</strong>
      </li>
      <li>
        Select listing To <strong> Optimization a listing</strong>, click the{" "}
        <strong>three-dot</strong> menu next to the product, then select{" "}
        <strong>Edit Catalogue</strong> .
      </li>
      <li>Update fields like title, price, inventory, description, etc.</li>
      <li>
        Then click <strong>Submit and publish</strong>{" "}
      </li>
    </ul>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>Inventory Management</h4>
    <h4 style={{ margin: "0px !important" }}>
      Why Inventory Management Matters:
    </h4>
    <p style={{ margin: "0px !important" }}>
      Proper stock updates prevent overselling, win customer trust, and improve
      Buy Box chances.
    </p>
    <ul style={{ paddingLeft: 20 }}>
      <li>
        Go to <strong> Seller Dashboard → Listing → My Listings.</strong>
      </li>
      <li>Update stock level per SKU manually or via bulk Excel upload.</li>
      <li>Update fields like title, price, inventory, description, etc.</li>
      <li>
        Use the <strong>“Merchant Fulfillment Inventory”</strong> section to
        handle stock for self-fulfilled orders.
      </li>
    </ul>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>Tips:</h4>
    <ul style={{ paddingLeft: 20 }}>
      <li>Regularly check low-stock items.</li>
      <li>Set stock alerts.li&gt;</li>
      <li>
        Avoid stockouts to retain Buy Box and maintain good seller ratings.
      </li>
    </ul>
  </div>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>How often should I update my listings?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          Regularly—especially when changing prices, images, or product details.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I pause a listing instead of deleting it?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes. Just set the inventory to zero; the listing will be inactive.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How to fix listing errors or missing information?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Use the “Listing Error Troubleshooter” in the Seller Center to correct
          issues.
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