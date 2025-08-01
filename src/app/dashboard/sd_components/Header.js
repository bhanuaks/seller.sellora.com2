import { AppContext } from "@/app/contaxtData/contextData";
import { baseUrl } from "@/Http/helper";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const Header = () => {
  const { globalData, setGlobalData } = useContext(AppContext);
  const [businessData, setBusinessData] = useState(null);
  const [sellor, setSellor] = useState(null);
  const pathname = usePathname();
  const [sellerCount, setSellerCount] = useState(0)

  useEffect(() => {
    // if (globalData.sellor) {
      // $(".loaderouter").css("display", "none");
      fetch(
        `${baseUrl}api/seller/get-profile?with_data=businessDetails`,
        {
          method: "GET",
        }
      )
        .then((response) => {
          if (!response.ok) {
            // $(".loaderouter").css("display", "none");
            throw new Error("Network Error");
          }
          return response.json();
        })
        .then((res) => {
          // $(".loaderouter").css("display", "none");
          if (res.status) {
            
            
            setSellerCount(res.data.sellerCount)
            setSellor(res.data.data);
            setGlobalData((preData) => ({ sellor: res.data.data }));
            if (res.data.referData) {
              setBusinessData(res.data.referData);
            }
          }
        });
    // }
  }, []);

  const sellorLogout = (e) => {
    e.preventDefault();
    fetch(`/api/seller/logout`, {
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Error");
        }
        return response.json();
      })
      .then((res) => {
        if (res.status) {
          window.location.reload();
        }
      });
  };

  return (
    <>
      {/* rts header area start */}
      <div className="rts-header-one-area-one career-header">
        <div className="rts-header-nav-area-one header--sticky careerheader-sticky">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="nav-and-btn-wrapper">
                  <div className="nav-area-bottom-left-header-four career-head">
                    <Link href={`${baseUrl}dashboard`} className="logo-area">
                      <Image
                        src={`${baseUrl}front/assets/images/logo-01.png`}
                        alt="logo-main"
                        className="seller-page-logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        loading="lazy"
                        style={{ width: "auto", height: "auto" }}
                      />
                    </Link>
                  </div>
                  <div className="nav-area dash_board_top_menu">
                    <nav>
                      <ul>
                        {/* <li className="parent"> <a href={`${baseUrl}dashboard`}>Home</a> </li> */}
                        <li className="parent has-dropdown">
                          <a href="#">Listing</a>
                          <ul className="submenu">
                            <li>
                              <Link href={`${baseUrl}dashboard/listing`}>
                                My Listing
                              </Link>
                            </li>
                            <li>
                              <Link href="#">Add Catalog </Link>
                              <ul className="child-submenu">
                                <li>
                                  <Link
                                    href={`${baseUrl}dashboard/add-catalog?ref=single`}
                                  >
                                    Add a single listing
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href={`${baseUrl}dashboard/add-catalog?ref=bulk`}
                                  >
                                    Bulk Catalog Upload
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            {/* <li><a href="#">Image Editing Tracker</a></li> */}
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/track-approval-requests`}
                              >
                                Track Approval Requests
                              </Link>
                            </li>
                            <li>
                              <Link href="#">Fulfilment by Sellora</Link>
                            </li>
                            <li>
                              <Link href="#">Sell Globally</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="parent has-dropdown">
                          <a href="#">Orders</a>
                          <ul className="submenu">
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/orders/Unshipped`}
                              >
                                Manage Orders
                              </Link>
                            </li>
                            <li>
                              <Link href={`${baseUrl}dashboard/returns/All`}>
                                Returns
                              </Link>
                            </li>
                            {/* <li>
                        <Link href="#">Cancellations</Link>
                      </li> */}
                          </ul>
                        </li>

                        <li className="parent">
                          <Link
                            href={`${baseUrl}dashboard/advertising/my-ads/All`}
                          >
                            Advertising
                          </Link>
                        </li>
                        <li className="parent">
                          <Link href={`${baseUrl}dashboard/my-store`}>
                            Store
                          </Link>
                        </li>
                        <li className="parent has-dropdown">
                          <Link href="#">Growth</Link>
                          <ul className="submenu">
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/growth/sellora-insights`}
                              >
                                Sellora Insights
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/growth/advertisment-recomendation`}
                              >
                                Advertising Recommendation
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/growth/price-recomendation`}
                              >
                                {" "}
                                Price Recommendations
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/growth/sellora-promotions`}
                              >
                                Sellora Promotions
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="parent has-dropdown">
                          <a href="#">Performance</a>
                          <ul className="submenu">
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/performance/ratings-and-reviews/All`}
                              >
                                Ratings &amp; Reviews
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/performance/questions`}
                              >
                                Questions
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/performance/seller-feedback/All`}
                              >
                                Seller Feedback
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/performance/product-quality`}
                              >
                                Product Quality
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/performance/returns`}
                              >
                                Returns
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/performance/cancellations`}
                              >
                                {" "}
                                Cancellations
                              </Link>
                            </li>
                            {/* <li>
                        <a href={`${baseUrl}dashboard/performance/sellora-promotions`} >Growth Central</a>
                      </li> */}
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/performance/your-seller-tier`}
                              >
                                Your Seller Tier
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="parent has-dropdown">
                          <a href="#">Report</a>
                          <ul className="submenu">
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/report/report-centre`}
                              >
                                Report centre
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="parent has-dropdown">
                          <a href="#">Payments</a>
                          <ul className="submenu">
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/payments/payments-overview`}
                              >
                                Payments Overview
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/payments/transaction`}
                              >
                                Transaction
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/payments/disbursements`}
                              >
                                Disbursements
                              </Link>
                            </li>
                            {/* <li>
                        <Link href="#">Invoices</Link>
                      </li>
                      <li>
                        <Link href="#">Statements</Link>
                      </li> */}
                          </ul>
                        </li>
                        <li className="parent has-dropdown">
                          <a href="#">Partner Services</a>
                          <ul className="submenu">
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/partner-services/available-services`}
                              >
                                All service{" "}
                              </Link>
                            </li>
                            {/* <li>
                              <Link
                                href={`${baseUrl}dashboard/partner-services/my-service`}
                              >
                                My service
                              </Link>
                            </li> */}
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/partner-services/help`}
                              >
                                Help
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="right-btn-area right-btn-area2 header-five">
                    {/* <div className="dropdown_login border_1">
                <li>
                  <i className="country_flag">
                    <img src={`${baseUrl}front/assets/images/united_state.png`} />
                  </i>
                  United States <i className="fa-solid fa-angle-down" />
                  <div className="dropdown">
                    
                    <a className="drop-link" href="#">
                      <i className="country_flag">
                        <img src={`${baseUrl}front/assets/images/united_state.png`} />
                      </i>
                      United States
                    </a>
                    <a className="drop-link" href="#">
                      <i className="country_flag">
                        <img src={`${baseUrl}front/assets/images/india_flag.png`} />
                      </i>
                      India
                    </a>
                  </div>
                </li>
              </div> */}
                    <div className="menu_right2">
                      {/* <a href="#">United States</a>  */}
                      <a href="#">
                        Buyer Questions <i className="fa-light fa-bell" />
                      </a>
                    </div>

                    <div className="dropdown_login">
                      <li className="seller-login-profile">
                        <a href="#">
                          <i className="fa-light fa-cog"></i>{" "}
                        </a>
                        <div className="dropdown mr_10_login">
                          <div className="help_single-filter-box">
                            <div className="goody-s">
                              <h3 className="animated fadeIn">
                                {" "}
                                {globalData?.sellor &&
                                globalData?.sellor.display_name
                                  ? globalData?.sellor?.display_name
                                  : globalData?.sellor?.name}
                              </h3>
                              <p>
                                Merchant ID:{" "}
                                <strong>
                                  {globalData?.sellor?.merchant_id}
                                </strong>
                              </p>
                            </div>

                            {sellor?.selfActive == "Pending" && (
                              <div className="filterbox-body">
                                <div className="order-card2">
                                  <div className="order-header2">
                                    <Link
                                      href={`${baseUrl}seller/al/contact-details`}
                                      className="title"
                                    >
                                      Onboarding Dashboard
                                    </Link>
                                  </div>
                                </div>

                                <div className="order-card2">
                                  <div className="order-header2">
                                    <button
                                       
                                      className="title"
                                      onClick={(e) => sellorLogout(e)}
                                    >
                                      Logout
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}

                            {globalData?.sellor?.selfActive == "Active" && (
                              <div className="filterbox-body">
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/notification-setting"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/notification-setting`}
                                      className="title"
                                    >
                                      Notification Setting
                                    </Link>
                                  </div>
                                </div>
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/contact-details"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/contact-details`}
                                      className="title"
                                    >
                                      Contact Details{" "}
                                    </Link>
                                  </div>
                                </div>
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/display-information"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/display-information`}
                                      className="title"
                                    >
                                      Display Information
                                    </Link>
                                  </div>
                                </div>
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/pickup-address"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/pickup-address`}
                                      className="title"
                                    >
                                      Pick up Address
                                    </Link>
                                  </div>
                                </div>
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/return-setting"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/return-setting`}
                                      className="title"
                                    >
                                      Return Setting
                                    </Link>
                                  </div>
                                </div>
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/business-details"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/business-details`}
                                      className="title"
                                    >
                                      Business Details
                                    </Link>
                                  </div>
                                </div>
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/tax-information"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/tax-information`}
                                      className="title"
                                    >
                                      Tax Information
                                    </Link>
                                  </div>
                                </div>
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/shipping-setting"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/shipping-setting`}
                                      className="title"
                                    >
                                      Shipping Setting
                                    </Link>
                                  </div>
                                </div>
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/bank-account-information"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/bank-account-information`}
                                      className="title"
                                    >
                                      Bank Account Information
                                    </Link>
                                  </div>
                                </div>
                                {/* <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/payment-information"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/payment-information`}
                                      className="title"
                                    >
                                      Payment Information
                                    </Link>
                                  </div>
                                </div> */}
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/user-management"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    {sellerCount > 0 ?
                                    <Link
                                      href={`/seller/profile/user-management-list`}
                                      className="title"
                                    >
                                      User Management
                                    </Link>
                                    :
                                    <Link
                                      href={`/seller/profile/user-management`}
                                      className="title"
                                    >
                                      User Management
                                    </Link>
                                    }
                                  </div>
                                </div>
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/login-setting"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/login-setting`}
                                      className="title"
                                    >
                                      Login Setting
                                    </Link>
                                  </div>
                                </div>
                                <div className="order-card2">
                                  <div className="order-header2">
                                    <button
                                     
                                      className="title"
                                      onClick={(e) => sellorLogout(e)}
                                    >
                                      Logout
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </li>
                    </div>

                    <div className="dropdown_login">
                      <li className="seller-login-profile">
                        {globalData?.sellor && globalData?.sellor.display_name
                          ? globalData?.sellor?.display_name
                          : globalData?.sellor?.name}
                      </li>
                    </div>
                  </div>
                  {/* button-area end */}
                </div>
              </div>

              {/* =================== seller profile menu for mobile ============================*/}
              <div className="col-lg-12">
                <div className="logo-search-category-wrapper after-md-device-header header-mid-five-call">
                  <a href={`${baseUrl}`} className="logo-area">
                    <img
                      src={`${baseUrl}front/assets/images/logo-01.png`}
                      alt="logo-main"
                      className="seller-page-logo"
                    />
                  </a>
                  <div className="main-wrapper-action-2 d-flex">
                    <div className="menu_right2 pt--5">
                      <a href="#">
                        <i className="fa-light fa-bell"></i>
                      </a>
                    </div>

                    <div className="dropdown_login pt--7">
                      <li className="seller-login-profile">
                        <i className="fa-light fa-cog"></i>
                        <div className="dropdown mr_10_login">
                          <div className="help_single-filter-box">
                            <div className="goody-s">
                              <h3 className="animated fadeIn">
                                {" "}
                                {globalData?.sellor &&
                                globalData?.sellor.display_name
                                  ? globalData?.sellor?.display_name
                                  : globalData?.sellor?.name}
                              </h3>
                              <p>
                                Merchant ID:{" "}
                                <strong>
                                  {globalData?.sellor?.merchant_id}
                                </strong>
                              </p>
                            </div>

                            {globalData?.sellor?.selfActive == "Pending" && (
                              <div className="filterbox-body">
                                <div className="order-card2">
                                  <div className="order-header2">
                                    <Link
                                      href={`${baseUrl}seller/al/contact-details`}
                                      className="title"
                                    >
                                      Onboarding Dashboard
                                    </Link>
                                  </div>
                                </div>
                                <div className="order-card2">
                                  <div className="order-header2">
                                    <button
                                     
                                      className="title"
                                      onClick={(e) => sellorLogout(e)}
                                    >
                                      Logout
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                            {globalData?.sellor?.selfActive == "Active" && (
                              <div className="filterbox-body">
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/notification-setting"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/notification-setting`}
                                      className="title"
                                    >
                                      Notification Setting
                                    </Link>
                                  </div>
                                </div>
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/contact-details"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/contact-details`}
                                      className="title"
                                    >
                                      Contact Details{" "}
                                    </Link>
                                  </div>
                                </div>
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/display-information"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/display-information`}
                                      className="title"
                                    >
                                      Display Information
                                    </Link>
                                  </div>
                                </div>
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/pickup-address"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/pickup-address`}
                                      className="title"
                                    >
                                      Pick up Address
                                    </Link>
                                  </div>
                                </div>
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/return-setting"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/return-setting`}
                                      className="title"
                                    >
                                      Return Setting
                                    </Link>
                                  </div>
                                </div>
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/business-details"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/business-details`}
                                      className="title"
                                    >
                                      Business Details
                                    </Link>
                                  </div>
                                </div>
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/tax-information"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/tax-information`}
                                      className="title"
                                    >
                                      Tax Information
                                    </Link>
                                  </div>
                                </div>
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/shipping-setting"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/shipping-setting`}
                                      className="title"
                                    >
                                      Shipping Setting
                                    </Link>
                                  </div>
                                </div>
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/bank-account-information"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/bank-account-information`}
                                      className="title"
                                    >
                                      Bank Account Information
                                    </Link>
                                  </div>
                                </div>
                                {/* <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/payment-information"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/payment-information`}
                                      className="title"
                                    >
                                      Payment Information
                                    </Link>
                                  </div>
                                </div> */}
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/user-management"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    {sellerCount > 0 ?
                                    <Link
                                      href={`/seller/profile/user-management-list`}
                                      className="title"
                                    >
                                      User Management
                                    </Link>
                                    :
                                    <Link
                                      href={`/seller/profile/user-management`}
                                      className="title"
                                    >
                                      User Management
                                    </Link>  
                                    }


                                  </div>
                                </div>
                                <div className="order-card2">
                                  <div
                                    className={`order-header2 ${
                                      pathname ==
                                      "/seller/profile/login-setting"
                                        ? "active_1"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={`/seller/profile/login-setting`}
                                      className="title"
                                    >
                                      Login Setting
                                    </Link>
                                  </div>
                                </div>
                                <div className="order-card2">
                                  <div className="order-header2">
                                    <a
                                      href="#"
                                      className="title"
                                      onClick={(e) => sellorLogout(e)}
                                    >
                                      Logout
                                    </a>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </li>
                    </div>

                    <div className="actions-area">
                      <div className="menu-btn" id="menu-btn">
                        <svg
                          width={20}
                          height={16}
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect y={14} width={20} height={2} fill="#1F1F25" />
                          <rect y={7} width={20} height={2} fill="#1F1F25" />
                          <rect width={20} height={2} fill="#1F1F25" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* rts header area end */}
      {/* rts header area start */}
      {/* header style two */}
      <div id="side-bar" className="side-bar header-two">
        <button className="close-icon-menu">
          <i className="far fa-times" />
        </button>
        <div className="mobile-menu-nav-area tab-nav-btn mt--20">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              {/* <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Menu</button> */}
              {/* <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Demo</button> */}
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabIndex={0}
            >
              <div className="mobile-menu-main">
                <nav className="nav-main mainmenu-nav mt--30">
                  <ul className="mainmenu metismenu" id="mobile-menu-active">
                    <li>
                      <Link href={`${baseUrl}dashboard`} className="main">
                        Home
                      </Link>
                    </li>
                    <li className="has-droupdown">
                      <Link href="#" className="main" aria-expanded="false">
                        Listing
                      </Link>
                      <ul className="submenu mm-collapse">
                        <li>
                          <Link
                            href={`${baseUrl}dashboard/listing`}
                            className="mobile-menu-link"
                          >
                            My Listing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`${baseUrl}dashboard/add-catalog`}
                            className="mobile-menu-link"
                          >
                            Add Catalog
                          </Link>
                        </li>
                        {/* <li><Link href="#" className="mobile-menu-link">Image Editing Tracker</Link></li> */}
                        <li>
                          <Link
                            href={`${baseUrl}dashboard/track-approval-requests`}
                            className="mobile-menu-link"
                          >
                            Track Approval Requests
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Fulfilment by Sellora
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Sell Globally
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-droupdown">
                      <Link href="#" className="main" aria-expanded="false">
                        Orders
                      </Link>
                      <ul className="submenu mm-collapse">
                        <li>
                          <Link
                            href={`${baseUrl}dashboard/active-orders`}
                            className="mobile-menu-link"
                          >
                            Active Orders
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`${baseUrl}dashboard/returns`}
                            className="mobile-menu-link"
                          >
                            Returns
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Cancellations
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-droupdown">
                      <Link href="#" className="main" aria-expanded="false">
                        Advertising
                      </Link>
                      <ul className="submenu mm-collapse">
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Promotion
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Campaign
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#" className="main">
                        Store
                      </Link>
                    </li>
                    <li className="has-dropdown">
                      <Link href="#" className="main" aria-expanded="false">
                        Growth
                      </Link>
                      <ul className="submenu mm-collapse">
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Sellora Insights
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Advertising Recommendation
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Price Recommendations
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Sellora Promotions
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link href="#" className="main" aria-expanded="false">
                        Performance
                      </Link>
                      <ul className="submenu mm-collapse">
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Ratings &amp; Reviews
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Product Quality
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Returns
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Cancellations
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Growth Central
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Your Seller Tier
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-droupdown">
                      <Link href="#" className="main" aria-expanded="false">
                        Report
                      </Link>
                      <ul className="submenu mm-collapse">
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Report centre
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-droupdown">
                      <Link href="#" className="main" aria-expanded="false">
                        Payments
                      </Link>
                      <ul className="submenu mm-collapse">
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Payments Overview
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Previous Overview
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Search Order Settlements
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Invoices
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Statements
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-droupdown">
                      <Link href="#" className="main" aria-expanded="false">
                        Partner Services
                      </Link>
                      <ul className="submenu mm-collapse">
                        <li>
                          <Link href="#">All service </Link>
                        </li>
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            My service
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="mobile-menu-link">
                            Help
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
