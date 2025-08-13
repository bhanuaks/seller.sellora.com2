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
              <a href="#">Reviews &amp; Rating</a>{" "}
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
              <a href="#">Listing optimization</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Reviews &amp; Rating
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
  <h2>Reviews &amp; Rating</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>What Are Reviews &amp; Ratings?</li>
    <li>Types of Ratings on Sellora</li>
    <li>How to View Reviews &amp; Ratings on Sellora</li>
    <li>Why Reviews &amp; Ratings Matter</li>
    <li>How to Get More Reviews on Sellora</li>
    <li>What Not to Do</li>
    <li>How to Manage Reviews</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      On <strong>Sellora.com</strong> , customer{" "}
      <strong> reviews and ratings </strong>are critical for building trust,
      improving search visibility, increasing conversions, and winning the{" "}
      <strong> Buy Box</strong>. Both product and seller reviews help future
      buyers make informed decisions and influence your reputation on the
      platform.
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>
      What Are Reviews &amp; Ratings?
    </h4>
    <h4 style={{ margin: "0px !important" }}>Ratings:</h4>
    <p style={{ margin: "0px !important" }}>
      Customers can rate a product or seller using a 1–5 star scale:
    </p>
    <ul className="">
      <li>
        <i
          style={{ color: "rgba(226, 226, 21, 0.605)", fontSize: 16 }}
          className="fa-solid fa-star"
        />
        <i
          style={{ color: "rgba(226, 226, 21, 0.605)", fontSize: 16 }}
          className="fa-solid fa-star"
        />
        <i
          style={{ color: "rgba(226, 226, 21, 0.605)", fontSize: 16 }}
          className="fa-solid fa-star"
        />
        <i
          style={{ color: "rgba(226, 226, 21, 0.605)", fontSize: 16 }}
          className="fa-solid fa-star"
        />
        <i
          style={{ color: "rgba(226, 226, 21, 0.605)", fontSize: 16 }}
          className="fa-solid fa-star"
        />
        = Excellent
      </li>
      <li>
        <i
          style={{ color: "rgba(226, 226, 21, 0.605)", fontSize: 16 }}
          className="fa-solid fa-star"
        />
        <i
          style={{ color: "rgba(226, 226, 21, 0.605)", fontSize: 16 }}
          className="fa-solid fa-star"
        />
        <i
          style={{ color: "rgba(226, 226, 21, 0.605)", fontSize: 16 }}
          className="fa-solid fa-star"
        />
        <i
          style={{ color: "rgba(226, 226, 21, 0.605)", fontSize: 16 }}
          className="fa-solid fa-star"
        />
        = Good
      </li>
      <li>
        <i
          style={{ color: "rgba(226, 226, 21, 0.605)", fontSize: 16 }}
          className="fa-solid fa-star"
        />
        <i
          style={{ color: "rgba(226, 226, 21, 0.605)", fontSize: 16 }}
          className="fa-solid fa-star"
        />
        <i
          style={{ color: "rgba(226, 226, 21, 0.605)", fontSize: 16 }}
          className="fa-solid fa-star"
        />
        = Average
      </li>
      <li>
        <i
          style={{ color: "rgba(226, 226, 21, 0.605)", fontSize: 16 }}
          className="fa-solid fa-star"
        />
        <i
          style={{ color: "rgba(226, 226, 21, 0.605)", fontSize: 16 }}
          className="fa-solid fa-star"
        />
        = Poor
      </li>
      <li>
        <i
          style={{ color: "rgba(226, 226, 21, 0.605)", fontSize: 16 }}
          className="fa-solid fa-star"
        />
        = Vetry Poor
      </li>
    </ul>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>Reviews:</h4>
    <p style={{ margin: "0px !important" }}>
      Optional written feedback where customers share their experience with the
      product quality, delivery, packaging, or seller service.
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>
      &nbsp;Types of Ratings on Sellora
    </h4>
    <ol>
      <li>
        {" "}
        <strong>Product Rating:</strong>
        <p style={{ margin: "0px !important" }} /> Based on the customer’s
        satisfaction with the product (quality, accuracy, etc.).
        <p />
      </li>
      <li>
        <strong> Seller Rating:</strong>
        <p style={{ margin: "0px !important" }} /> Based on delivery speed,
        packaging, customer service, and communication.
        <p />
      </li>
    </ol>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>
      &nbsp;How to View Reviews &amp; Ratings on Sellora
    </h4>
    <p style={{ margin: "0px !important" }}>&nbsp;Follow these steps:</p>
    <ul style={{ paddingLeft: 10 }}>
      <li>
        Go to the <strong>Performance </strong> section on your Seller
        Dashboard.
      </li>
      <li>
        Click on <strong> Reviews &amp; Ratings.</strong>
      </li>
      <li>All your product reviews and ratings will be displayed there.</li>
    </ul>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>
      Why Reviews &amp; Ratings Matter
    </h4>
    <ul style={{ paddingLeft: 10 }}>
      <li>
        {" "}
        <strong>Higher Ratings = More Sales</strong>
        <p style={{ margin: "0px !important" }} /> Customers trust well-reviewed
        products and sellers.
        <p />
      </li>
      <li>
        <strong> Affect Search Ranking</strong>
        <p style={{ margin: "0px !important" }} /> Highly-rated listings appear
        higher in Sellora search results.
        <p />
      </li>
      <li>
        <strong> Win Buy Box </strong>
        <p style={{ margin: "0px !important" }} /> Better reviews increase your
        chance of winning the Buy Box spot.
        <p />
      </li>
      <li>
        <strong>Build Brand Credibility</strong>
        <p style={{ margin: "0px !important" }} /> Positive reviews improve
        customer confidence.
        <p />
      </li>
    </ul>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>
      How to Get More Reviews on Sellora
    </h4>
    <ul style={{ paddingLeft: 10 }}>
      <li>Ensure high product quality and accurate descriptions.</li>
      <li>Deliver orders on time with proper packaging.</li>
      <li>
        Follow up politely with buyers via Sellora's messaging system after
        delivery.
      </li>
      <li>
        Encourage reviews by adding a thank-you card inside packaging (no
        incentives allowed).
      </li>
    </ul>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>What Not to Do</h4>
    <ul style={{ paddingLeft: 10 }}>
      <li>
        <i
          style={{ color: "red", fontSize: 18, marginRight: 2 }}
          className="fa-solid fa-xmark"
        />
        Don’t offer rewards, cashback, or gifts in exchange for reviews.
      </li>
      <li>
        <i
          style={{ color: "red", fontSize: 18, marginRight: 2 }}
          className="fa-solid fa-xmark"
        />{" "}
        Don’t write fake reviews or ask family/friends to submit reviews.
      </li>
      <li>
        <i
          style={{ color: "red", fontSize: 18, marginRight: 2 }}
          className="fa-solid fa-xmark"
        />
        Don’t pressure buyers or manipulate feedback.
      </li>
    </ul>
    <p style={{ margin: "0px !important" }}>
      Violating review policies can result in{" "}
      <strong> account suspension or listing removal.</strong>
    </p>
  </div>
  <div className="ragister-brand- number-li">
    <h4 style={{ margin: "0px !important" }}>How to Manage Reviews</h4>
    <ul style={{ paddingLeft: "0px 0px 0px 10px" }}>
      <li>You cannot delete or edit a customer’s review.</li>
      <li>
        If a review violates Sellora’s policy (abuse, spam, or irrelevant
        content), report it via:
        <ul style={{ marginBottom: "0px !important" }}>
          <li>
            <strong>Seller Dashboard → Support → Report a Review</strong>
          </li>
        </ul>
      </li>
      <li>Monitor reviews regularly and improve products based on feedback.</li>
    </ul>
  </div>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>How soon after purchase can a buyer leave a review?</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>Usually within 1–7 days after the item is marked delivered.</p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can business buyers leave ratings too?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes. B2B buyers can leave ratings for both the product and the seller.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Do reviews affect visibility?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes, product reviews and ratings are factored into Sellora’s search
          and Buy Box algorithm.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Can I respond to a customer review?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>Yes, Sellora may allow seller responses to reviews.&nbsp;</p>
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