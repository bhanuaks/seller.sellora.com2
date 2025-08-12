"use client";
import { baseUrl, convertTo12Hour } from "@/Http/helper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Page() {
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState("All");
  const [couponList, setCouponList] = useState([]);
  useEffect(() => {
    const timeId = setTimeout(() => {
      fetch(`/api/seller/coupons?searchText=${searchText}&status=${status}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network Issue");
          }
          return response.json();
        })
        .then((res) => {
          if (res.status) {
            setCouponList(res.data.list);
          } else {
            Swal.fire({
              icon: "error",
              text: res.data.message,
              title: "Error",
            });
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            text: error.message,
            title: "Error",
          });
        });
    }, 500);
    return () => clearTimeout(timeId);
  }, [searchText, status]);

  return (
    <>
      <div className="rts-navigation-area-breadcrumb pb--10">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 hub1">
              <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
                {/* <a href="#"><i className="fa-solid fa-arrow-left"></i> Go to Seller hub</a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="navigator-breadcrumb-wrapper text-center">
                <h3>Discount Coupon</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
                <ul>
                  {/* <li><a href="#"><i className="fa-solid fa-wallet"></i> Wallet</a> </li> */}
                  {/* <li>
                <a href="#">
                  <Image src={`${baseUrl}front/assets/images/hand_shaking.png`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt=''
                  loading='lazy'
                  style={{width:"auto", height:"auto"}}
                  /> Help
                </a>{" "}
              </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="details_page_outer">
        <div className="container">

          <div className="offers-container_27">
        <div className="tabs_27">
          <div className={`tab_27  ${status == "All" ? "active" : ""}`} 
            onClick={() => {setStatus("All"); }} >All Offers</div>
          <div className={`tab_27  ${status == "Your" ? "active" : ""}`}
          onClick={() => {setStatus("Your"); }}
                                
                                >Your Offers</div>
        </div>
        <div className="search_27">
          <input type="text" placeholder="Search product by offer id"
           value={searchText}
           onChange={(e) => setSearchText(e.target.value)}
                               />
          <span className="search-icon_27">
            <i className="far fa-search" />
          </span>{" "}
        </div>
      </div>


          {/* <div className="table-responsive pb--50">
            <table
              className="table table-bordered table-bordered2 table-striped table-v-align-3"
              style={{ marginTop: 20 }}
            >
              <thead className="table__head">
                <tr className="winner__table">
                  <th colSpan={10}>
                    <div className="row align-items-center">
                      <div className="col-lg-3">
                        <div className="table_menu">
                          <ul>
                            <li>
                              <a
                                href="#"
                                className={status == "All" ? "active" : ""}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setStatus("All");
                                }}
                              >
                                All Offers
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className={status == "Your" ? "active" : ""}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setStatus("Your");
                                }}
                              >
                                Your Offers
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="searchCam position-relative">
                          <form
                            role="search"
                            className="sr-input-func col-lg-auto"
                          >
                            <a href="#">
                              <i className="fa fa-search" />
                            </a>
                            <input
                              type="text"
                              placeholder="Search product by offer id"
                              className="search-int form-control"
                              value={searchText}
                              onChange={(e) => setSearchText(e.target.value)}
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div> */}
          <div className="row">
            {couponList.length > 0 &&
              couponList.map((coupon, index) => (
                <div className="col-lg-4 col-6" key={index}>
                  <div className="offer-box">
                    <div className="offer-header">Ongoing</div>
                    <div className="clearfix" />
                    <div className="offer_c">
                      <div className="offer-title">
                        Extra {coupon.discount}% Off
                      </div>
                      <div className="offer-subtitle">
                        {coupon.discount}% off
                      </div>
                    </div>
                    <div className="clearfix" />
                    <div className="offer-id">
                      Offer ID: <span>{coupon?.offerId}</span>
                    </div>
                    <div className="offer-desc">{coupon.remark}</div>
                    <div className="offer-dates">
                      {" "}
                      <span>
                        <strong>Starts:</strong>{" "}
                        {coupon?.startDate &&
                          new Date(coupon.startDate).toLocaleDateString(
                            "en-Us",
                            {
                              weekday: "short",
                              year: "numeric",
                              month: "short",
                              day: "2-digit",
                            }
                          )}{" "}
                        <span className="time">
                          {coupon.startTime &&
                            convertTo12Hour(coupon.startTime)}
                        </span>
                      </span>
                      <br />
                      <span>
                        <strong>Ends:</strong>{" "}
                        {coupon?.endDate &&
                          new Date(coupon.endDate).toLocaleDateString("en-Us", {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                          })}{" "}
                        <span className="time">
                          {coupon.endTime && convertTo12Hour(coupon.endTime)}
                        </span>
                      </span>{" "}
                    </div>
                    <Link
                      href={`${baseUrl}dashboard/growth/discout-apply/${coupon.offerId}`}
                    >
                      <button className="apply-btn">
                        {coupon.appliedInfo ? "Edit" : "Apply"}
                      </button>
                    </Link>
                  </div>
                </div>

                //   <div className="col-lg-4" key={index}>
                //   <div className="ongoing_034">
                //     <span>Ongoing</span>
                //   </div>
                //   <div className="ongoing_outer">
                //     <div className="ongoing_header_dfdsf">
                //       <ul>
                //         <li>
                //           Extra {coupon.discount}% Off <span>{coupon.discount}% off</span>
                //         </li>
                //       </ul>
                //     </div>
                //     <div className="list_3488">
                //       <ul>
                //         <li>Offer ID: {coupon?.offerId}</li>
                //         <li>{coupon.remark}</li>
                //       </ul>
                //     </div>
                //     <div className="list_3488">
                //       <ul>
                //         <li>Starts on: {coupon?.startDate && new Date(coupon.startDate).toLocaleDateString("en-Us", {
                //           weekday:"short",
                //           year:"numeric",
                //           month:"short",
                //           day:"2-digit",
                //         })}
                //         &nbsp;({coupon.startTime && convertTo12Hour(coupon.startTime)})</li>
                //         <li>Ends on: {coupon?.endDate && new Date(coupon.endDate).toLocaleDateString("en-Us", {
                //           weekday:"short",
                //           year:"numeric",
                //           month:"short",
                //           day:"2-digit",
                //         })}
                //           &nbsp;({coupon.endTime && convertTo12Hour(coupon.endTime)})</li>
                //       </ul>
                //     </div>
                //     <div className="apply_e45428973893789">
                //       <Link href={`${baseUrl}dashboard/growth/discout-apply/${coupon.offerId}`}>{coupon.appliedInfo ?"Edit":"Apply"}</Link>
                //     </div>
                //     <div className="clearfix" />
                //   </div>
                // </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
