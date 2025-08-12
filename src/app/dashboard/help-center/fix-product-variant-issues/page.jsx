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
              <a href="#">Help</a>{" "}
            </li>
            <li>
              <a href="#">Listing Set Up </a>{" "}
            </li>
            <li>
              <a href="#">Variant Set Guide</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Fix Product Variant Issues{" "}
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
              <a href="#"> Variant Set Guide</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Fix Product Variant Issues
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
  <h2>&nbsp;Fix Product Variant Issues</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>Troubleshoot product variant errors</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      When making changes to your variant groups, you may get an error. This
      guide can help you troubleshoot and correct these errors. If you’re unsure
      of how to add or remove items from your variant groups and need guidance
    </p>
  </div>
  <div className="ragister-brand-">
    <h4>Troubleshoot product variant errors</h4>
    <ol>
      <li style={{ color: "black" }}>
        <strong style={{ color: "black" }}>
          &nbsp;I'm getting an error that says "Duplicate SKU." What does this
          mean in the context of variants?
        </strong>
        <p style={{ color: "black" }}>
          Each variant must have a unique SKU (Stock Keeping Unit), even if they
          belong to the same product group. For example, if you're selling a
          shirt in three sizes (S, M, L), each one should have a different SKU
          like SHIRT001-S, SHIRT001-M, and SHIRT001-L. Duplicate SKUs across
          variants will cause errors during upload or publishing.
        </p>
      </li>
      <li style={{ color: "black" }}>
        <strong>
          . Error: "Multiple items have the same values for their variant
          attributes. Please provide unique values or add more product
          variations to ensure your items are shown on site."&nbsp;
        </strong>
        <br />
        <strong style={{ color: "black" }}>What should I do?</strong>
        <p style={{ color: "black" }}>
          You have multiple products in a variant group that have similar
          values, such as Color or Size and there are two potential
          solutions:&nbsp;&nbsp;
        </p>
        <ol>
          <li style={{ color: "black" }}>
            Make the Product Variation values unique. For example, if two items
            currently vary by the same color (e.g., blue), change one of them to
            a different color (e.g., navy blue); or&nbsp;&nbsp;
          </li>
          <li style={{ color: "black" }}>
            Select additional Product Variations to make unique combinations of
            values. For example, if two items currently vary by the same color,
            add the Product Variation for Size so the combination of values is
            different—e.g., item A will be blue/small and item B will be
            blue/medium.
          </li>
        </ol>
        <p />
      </li>
    </ol>
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