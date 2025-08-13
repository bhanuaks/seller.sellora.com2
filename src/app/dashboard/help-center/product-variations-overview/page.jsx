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
              <a href="#">Listing Set Up</a>{" "}
            </li>
            <li>
              <a href="#">Variant Set Guide</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Product Variations Overview
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
                Product Variations Overview
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
  <h2>&nbsp;Product Variations Overview</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How does it work?</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      A product variant group is a group of individual items that differ by
      attributes such as a T-shirt that comes in different sizes and colors. You
      can create and manage variant groups in Seller Center or using Sellora. In
      this guide, you'll learn how to manage product variant groups in the
      Seller Center.
    </p>
  </div>
  <div className="representive">
    <h4>How does it work?</h4>
    <p>
      A product variant group is a group of individual items that differ by
      attributes such as a T-shirt that comes in different sizes and colors. You
      can create and manage variant groups in Seller Center or using Sellora. In
      this guide, you'll learn how to manage product variant groups in the
      Seller Center.
    </p>
  </div>
  <div className="table-container2 col-12 ">
    <table>
      <thead>
        <tr>
          <th style={{ width: "50%" }}>Methods</th>
          <th style={{ width: "50%" }}>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Full Variant Group Guide&nbsp;</td>
          <td>
            Once you've created a variant group, you can edit, add or remove
            items from the group, combine it with another group, separate it
            into two groups or add new variant attributes to the group. Visit
          </td>
        </tr>
        <tr>
          <td>Fix Product Variant Issues&nbsp;</td>
          <td>
            When making changes to a variant group, you may need to address an
            error before the changes can be saved. Visit
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>
          Why are product variant groups important for my listings?
        </span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          Product variants give customers more options to choose from and help
          with searchability, so it’s important to create and manage them
          properly.
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