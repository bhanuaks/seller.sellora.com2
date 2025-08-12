"use client";
import { baseUrl, fetcher } from "@/Http/helper";
import { fileBasePath } from "@/Http/urlHelper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";

function page() {
  const {
    data: fetchingData,
    error,
    isLoading,
  } = useSWR(`/api/seller/save-profile-business-details`, fetcher);

  const router = useRouter();
  const [brandOwner, setBrandOwner] = useState(false);
  const [feeddback, setFeeddback] = useState(null);
  const [reviewData, setReviewData] = useState(null);
  const [reviewProduct, setReviewProduct] = useState([]);

  const [viewTypeList, setViewTypeList] = useState("Reviews");

  const [data, setData] = useState({
    banner: "",
    business_overview: "",
    business_profile: "",
  });

  useEffect(() => {
    if (fetchingData?.status) {
      setData(fetchingData?.data.sellerProfile);
    }
  }, [fetchingData, isLoading]);

  // check brand owner
  useEffect(() => {
    fetch("/api/seller/ads/check-brand-owner", {
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Internal Issue");
        }
        return response.json();
      })
      .then((res) => {
        if (res.status) {
          setBrandOwner(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch("/api/seller/review-and-feedback")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Issue");
        }
        return response.json();
      })
      .then((res) => {
        if (res.status) {
          setReviewData(res.data.review);
          setFeeddback(res.data.feedback);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch(`/api/seller/review-products?type=${viewTypeList}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Issue");
        }
        return response.json();
      })
      .then((res) => {
        if (res.status) {
          setReviewProduct(res.data.reviewProducts);
          // setFeeddback(res.data.feedback);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [viewTypeList]);

  const circleRef = useRef();
  const inputValueRef = useRef();
  const valueLabelRef = useRef();
  function updateProgress(val) {
    val = Math.max(0, Math.min(5, parseFloat(val) || 0));
    const angle = (val / 5) * 360;
    circleRef.current.style.background = `conic-gradient(#ff6e35 ${angle}deg, #e0e0e0 0deg)`;
    valueLabelRef.current.textContent = val.toFixed(1);
  }

  useEffect(() => {
    const input = inputValueRef.current;

    if (input) {
      const handler = (e) => updateProgress(e.target.value);
      input.addEventListener("input", handler);

      // Initial set
      updateProgress(input.value);

      return () => {
        input.removeEventListener("input", handler);
      };
    }
  }, [feeddback, reviewData]);

  return (
    <>
      {/* {brandOwner && (

          <div className="container">
        <div className="row">
          <div className="col-lg-12 ">
            <div className="banner-content-store">
              {data?.banner && (
                <img src={`/${data?.banner}`} style={{ minHeight: "100px" }} />
              )}
            </div>
          </div>
        </div>
      </div>

    )} */}
      {brandOwner && (
        <div class="my-store">
          <div class="banner-content-store_seller">
            {data?.banner ? (
              <img src={`${baseUrl}${data?.banner}`} />
            ) : (
              <img
                src={`${baseUrl}front/assets/images/blank_banner.jpg`}
                alt="banner"
              />
            )}
          </div>
        </div>
      )}

     

      <div className={`${brandOwner ? "store_editor_outer" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">


              {brandOwner && (
                             
                            <div className="profile-header">
                               {data?.profileLogo && ( 
                            <img src={`/${data.profileLogo}`}  alt="Store Logo" /> 
                            )}
                              {/* <img src="assets/images/store_logo.jpg" alt="Store Logo" /> */}
                              <div>
                                <h1>{data?.storeName}</h1>
                                <div className="header-buttons">  
                                </div>
                              </div>
                            </div>
                            )}
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 offset-lg-1 ">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="breadcumb-wrap_asd">
                          <ul>
                            {brandOwner && (
                              <li>
                                <Link href="/dashboard/my-store">
                                  Business Overview
                                </Link>
                              </li>
                            )}
                            <li>
                              <Link href="/dashboard/my-store/review-rating">
                                What Our Customers Say
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      {/* <div className="col-lg-3 col-12"> </div> */}
                      <div className="col-lg-12 col-12 profile">
                        <div className="row">
                          <div className="col-lg-11">
                            <h3 style={{ textAlign: "left" }}>
                              View Review &amp; Feedback
                            </h3>
                          </div>
                          <div className="col-lg-12">
                            <div className="review_outer mb_50">
                              <div className="col-lg-12">
                                <div className="row align-items-center">
                                  <div className="col-lg-3">
                                    {" "}
                                    {/* <img src="assets/images/4-five.jpg"> */}
                                    {/* <div className="rating-circle nine half">
                          <div className="rc-pie rc-spinner" />
                          <div className="rc-pie rc-filler" />
                          <div className="rc-mask" ></div>
                          <div className="rc-count" />
                        </div> */}
                                    <div className="circle-wrapper">
                                      <div
                                        className="circle-progress"
                                        id="circle"
                                        ref={circleRef}
                                      >
                                        <div
                                          className="value"
                                          id="value"
                                          ref={valueLabelRef}
                                        >
                                          0
                                        </div>
                                      </div>
                                      <input
                                        type="number"
                                        id="inputValue"
                                        min="0"
                                        max="5"
                                        step="0.1"
                                        value={(() => {
                                          if (feeddback && reviewData) {
                                            const totalBothStart =
                                              feeddback.totalReview +
                                              reviewData.totalReview;
                                            const totalCount =
                                              feeddback.count +
                                              reviewData.count;
                                            const avgrage =
                                              totalBothStart / totalCount;
                                            return avgrage;
                                          } else {
                                            return 0;
                                          }
                                        })()}
                                        ref={inputValueRef}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-8 offset-lg-1">
                                    <div className="rating_review">
                                      <ul>
                                        <li
                                          onClick={() =>
                                            setViewTypeList("Vendor Feedback")
                                          }
                                          style={{ cursor: "pointer" }}
                                        >
                                          <span>Vendor Support </span>
                                          <span className="colon_3">:</span>
                                          <div className="progress2">
                                            <div
                                              className="progress-bar"
                                              style={{
                                                width: `${
                                                  (feeddback?.avgStar || 0) * 20
                                                }%`,
                                              }}
                                            >
                                              {" "}
                                            </div>
                                          </div>
                                          <span className="value_df">
                                            {feeddback?.avgStar?.toFixed(1)}
                                          </span>
                                        </li>
                                        <li
                                          onClick={() =>
                                            setViewTypeList("Reviews")
                                          }
                                          style={{ cursor: "pointer" }}
                                        >
                                          <span>Product Reviews </span>
                                          <span className="colon_3">:</span>
                                          <div className="progress2">
                                            <div
                                              className="progress-bar progress-orange"
                                              style={{
                                                width: `${
                                                  (reviewData?.avgStar || 0) *
                                                  20
                                                }%`,
                                              }}
                                            />
                                          </div>
                                          <span className="value_df">
                                            {reviewData?.avgStar?.toFixed(1)}
                                          </span>
                                        </li>
                                        {/* <li>
                              <span>Quality Assurance </span>
                              <span className="colon_3">:</span>
                              <div className="progress2">
                                <div
                                  className="progress-bar progress-orange"
                                  style={{ width: "98%" }}
                                />
                              </div>
                              <span className="value_df">4.7</span>
                              
                            </li> */}
                                      </ul>
                                    </div>
                                    {/*  <a href="what_our_customers_say.html" class="view_all">View All Feedback</a>  */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <h4>{viewTypeList}</h4>
                    </div>
                    <div className="row">
                      {/* <div className="col-lg-2" /> */}
                      <div className="col-lg-12">
                        {reviewProduct &&
                          reviewProduct.length > 0 &&
                          reviewProduct.map((product, index) => (
                            <div className="testimonial_outer" key={index}>
                              <div className="row">
                                <div className="col-lg-2">
                                  <div className="_testi_img">
                                    {" "}
                                    <img
                                      src={`${fileBasePath}/${product.mainImage}`}
                                    />{" "}
                                  </div>
                                </div>
                                <div className="col-lg-10">
                                  <div className="testimonial_content_2">
                                    <p>{product.productName}</p>

                                    <div className="product-status3">
                                      <div className="rating-stars-group_sdf">
                                        <div className="rating-star_02">
                                          <i
                                            className={`fa-star${
                                              product?.avgStar > 0 &&
                                              product?.avgStar < 1
                                                ? "-half-alt fa-solid selected"
                                                : ""
                                            }  ${
                                              product?.avgStar >= 1
                                                ? "fa-solid selected"
                                                : "fa-light"
                                            }`}
                                          />
                                        </div>
                                        <div className="rating-star_02">
                                          <i
                                            className={`fa-star${
                                              product?.avgStar > 1 &&
                                              product?.avgStar < 2
                                                ? "-half-alt fa-solid selected"
                                                : ""
                                            } ${
                                              product?.avgStar >= 2
                                                ? "fa-solid selected"
                                                : "fa-light"
                                            }`}
                                          />
                                        </div>
                                        <div className="rating-star_02">
                                          <i
                                            className={`fa-star${
                                              product?.avgStar > 2 &&
                                              product?.avgStar < 3
                                                ? "-half-alt fa-solid selected"
                                                : ""
                                            } ${
                                              product?.avgStar >= 3
                                                ? "fa-solid selected"
                                                : "fa-light"
                                            }`}
                                          />
                                        </div>
                                        <div className="rating-star_02">
                                          <i
                                            className={`fa-star${
                                              product?.avgStar > 3 &&
                                              product?.avgStar < 4
                                                ? "-half-alt fa-solid selected"
                                                : ""
                                            } ${
                                              product?.avgStar >= 4
                                                ? "fa-solid selected"
                                                : "fa-light"
                                            }`}
                                          />
                                        </div>
                                        <div className="rating-star_02">
                                          <i
                                            className={`fa-star${
                                              product?.avgStar > 4 &&
                                              product?.avgStar < 5
                                                ? "-half-alt fa-solid selected"
                                                : ""
                                            } ${
                                              product?.avgStar >= 5
                                                ? "fa-solid selected"
                                                : "fa-light"
                                            }`}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row align-items-center">
                                      {/* <div className="col-lg-1 col-2">
                                <div className="thumb_img">
                                  <img src="/front/assets/images/sohore_img.jpg" />
                                </div>
                              </div> */}
                                      <div className="col-lg-5 col-8">
                                        <div className="testimonial_content_3">
                                          {product.title} <br />
                                          {product.message}
                                        </div>
                                      </div>
                                      {/* <div className="col-lg-1 col-2">
                                <div className="customer_love">
                                  <i className="fa fa-heart" />
                                </div>
                              </div> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
