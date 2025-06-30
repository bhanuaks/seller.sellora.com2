"use client";
import React, { useEffect, useRef, useState } from "react";
import RightSideBar from "../RightSideBar";
import {
  CancellationsPerfomanceFaq,
  ProductQuailityFaq,
  QuestionssFAQ,
  RatingsAndReviewsFAQ,
  returnPerfomanceFaq,
  SellerFeedbackFaq,
  YourSellerTierFaq,
} from "@/Http/PageData/sellerPerfomanceFaq";
import Link from "next/link";

function SellerPerFormancePage() {
  // Track active index for each section separately
  const [activeSections, setActiveSections] = useState({});

  // refs for all sections
  const refs = useRef({});

  const toggle = (sectionName, index) => {
    setActiveSections((prev) => ({
      ...prev,
      [sectionName]: prev[sectionName] === index ? null : index,
    }));
  };

  useEffect(() => {
    Object.entries(refs.current).forEach(([key, el]) => {
      const [sectionName, indexStr] = key.split("-");
      const index = parseInt(indexStr, 10);
      const isActive = activeSections[sectionName] === index;

      if (el) {
        el.style.maxHeight = isActive ? `${el.scrollHeight}px` : "0px";
      }
    });
  }, [activeSections]);

  const renderFAQ = (title, data, sectionName) => (
    <>
      <h4>{title}</h4>
      {data.map((item, index) => (
        <div key={index} className="faq_outer_23">
          <div
            className={`question ${
              activeSections[sectionName] === index ? "active" : ""
            }`}
            onClick={() => toggle(sectionName, index)}
          >
            {item.question}
          </div>
          <div className="answercont"  ref={(el) => {
                refs.current[`${sectionName}-${index}`] = el;
              }}>
            <div
             
              className="answer"
              style={{
                overflow: "hidden",
                // maxHeight: "0px",
                transition: "max-height 0.3s ease",
              }}
            >
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <>
      <div className="notification_breadcomb_rts-navigation-area-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="notification_breadcomb">
                <ul>
                  <li>
                     <Link href="/dashboard/help">Help</Link>
                  </li>
                  <li>
                    <a href="#" className="active_002">
                     Seller Performance
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sellora_045948">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="head_234">
                <h3 className="light_bg animated fadeIn">Seller Performance</h3>
              </div>

              {renderFAQ(
                "Ratings & Reviews",
                RatingsAndReviewsFAQ,
                "ratingsAndReviews"
              )}
              {renderFAQ("Questions", QuestionssFAQ, "questions")}
              {renderFAQ("Seller Feedback", SellerFeedbackFaq, "sellerFeedback")}
              {renderFAQ("Product Quality", ProductQuailityFaq, "productQuality")}
              {renderFAQ("Returns", returnPerfomanceFaq, "returns")}
              {renderFAQ(
                "Cancellations",
                CancellationsPerfomanceFaq,
                "cancellations"
              )}
              {renderFAQ(
                "Your Seller Tier",
                YourSellerTierFaq,
                "yourSellerTier"
              )}
            </div>
            <RightSideBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerPerFormancePage;
