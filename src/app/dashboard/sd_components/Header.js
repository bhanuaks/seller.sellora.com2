import { AppContext } from '@/app/contaxtData/contextData'
import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'

const Header = () => {

  const {globalData, setGlobalData} =  useContext(AppContext)
  const [businessData, setBusinessData] = useState(null)
  const [sellor, setSellor] = useState(null);
  

  useEffect(() => {
    if (globalData.sellor) {
      // $(".loaderouter").css("display", "none");
      fetch(
        `${baseUrl}api/seller/get-profile?user_id=${globalData.sellor._id}&with_data=businessDetails`,
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
            setSellor(res.data.data);
            setGlobalData((preData)=>({sellor:res.data.data}));
            if (res.data.referData) {
              setBusinessData(res.data.referData);
            }
            
          }
        });
    }
  }, []);


  const sellorLogout=(e)=>{ 
      e.preventDefault();
      fetch(`${baseUrl}api/seller/logout`,{
        method:"POST", 
      }).then((response)=>{
        if(!response.ok){
          throw new Error("Network Error")
        }
        return response.json()
      }).then((res)=>{
        
        if(res.status){
          window.location.reload()
        }
      })
    }


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
              
              <Link
                href={`${baseUrl}dashboard`}
                className="logo-area"
              > 
                <Image
                  src={`${baseUrl}front/assets/images/logo-01.png`}
                  alt="logo-main"
                  className="seller-page-logo"
                  width={0}
                  height={0}
                  sizes='100vw'
                  loading='lazy'
                  style={{width:"auto", height:"auto"}}
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
                        <Link href={`${baseUrl}dashboard/listing`}>My Listing</Link>
                      </li>
                      <li><Link href="#">Add Catalog </Link>
                      <ul className="child-submenu">
                      <li><Link href={`${baseUrl}dashboard/add-catalog?ref=single`}>Add a single listing</Link></li>
                      <li><Link href={`${baseUrl}dashboard/add-catalog?ref=bulk`}>Bulk Catalog Upload</Link></li>
                      </ul>
                      </li>
                       
                      {/* <li><a href="#">Image Editing Tracker</a></li> */}
                      <li>
                        <Link href={`${baseUrl}dashboard/track-approval-requests`}>
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
                        <Link href={`${baseUrl}dashboard/orders/Unshipped`}>Manage Orders</Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/returns/All`}>Returns</Link>
                      </li>
                      {/* <li>
                        <Link href="#">Cancellations</Link>
                      </li> */}
                    </ul>
                  </li>
                 
                  <li className="parent"> 
                    <Link href={`${baseUrl}dashboard/advertising/my-ads/All`}>Advertising</Link> 
                  </li>
                  <li className="parent"> 
                    <Link href={`${baseUrl}dashboard/my-store`}>Store</Link> 
                  </li>
                  <li className="parent has-dropdown">
                    <Link href="#">Growth</Link>
                    <ul className="submenu">
                      <li>
                        <Link href={`${baseUrl}dashboard/growth/sellora-insights`}>Sellora Insights</Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/growth/advertisment-recomendation`}>Advertising Recommendation</Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/growth/price-recomendation`}> Price Recommendations</Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/growth/sellora-promotions`}>Sellora Promotions</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="parent has-dropdown">
                    <a href="#">Performance</a>
                    <ul className="submenu">
                      <li>
                        <Link href={`${baseUrl}dashboard/performance/ratings-and-reviews/All`} >Ratings &amp; Reviews</Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/performance/questions`} >Questions</Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/performance/seller-feedback`} >Seller Feedback</Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/performance/product-quality`} >Product Quality</Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/performance/returns`} >Returns</Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/performance/cancellations`} > Cancellations</Link>
                      </li>
                      {/* <li>
                        <a href={`${baseUrl}dashboard/performance/sellora-promotions`} >Growth Central</a>
                      </li> */}
                      <li>
                        <Link href={`${baseUrl}dashboard/performance/your-seller-tier`} >Your Seller Tier</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="parent has-dropdown">
                    <a href="#">Report</a>
                    <ul className="submenu">
                      <li>
                        <Link href={`${baseUrl}dashboard/report/report-centre`}>Report centre</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="parent has-dropdown">
                    <a href="#">Payments</a>
                    <ul className="submenu">
                      <li>
                        <Link href={`${baseUrl}dashboard/payments/payments-overview`}>Payments Overview</Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/payments/transaction`} >Transaction</Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/payments/disbursements`} >Disbursements</Link>
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
                        <Link href={`${baseUrl}dashboard/partner-services/available-services`}>All service </Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/partner-services/my-service`}>My service</Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/partner-services/help`}>Help</Link>
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
                <Link href="#" onClick={(e)=>e.preventDefault()}><i className="fa-light fa-cog"></i>  </Link>
              </div>
              <div className="dropdown_login">
             
                <li className={`seller-login-profile  `}>
                  {/* <i className="fa fa-user user_bg" />  */}
                  {globalData?.sellor && globalData?.sellor.display_name ? globalData?.sellor?.display_name :globalData?.sellor?.name }
                  <i className="fa-regular fa-ellipsis-vertical doted_l" />
                  <div className="dropdown mr_10_login">
                    <div className="login_name">
                      <div className="loginname">  {globalData?.sellor && globalData?.sellor.display_name ? globalData?.sellor?.display_name :globalData?.sellor?.name }</div>
                      <div>Merchant ID: {globalData?.sellor?.merchant_id}</div>
                    </div>


                    {sellor?.selfActive == "Pending"  && (
                      <div className="seller_profile_link">
                      <Link
                          className="drop-link"
                          href={`${baseUrl}seller/al/contact-details`}
                        >
                         Onboarding Dashboard
                        </Link>

                        <a  onClick={(e)=>sellorLogout(e)}
                          className="drop-link"
                          href="#"
                        >
                          Logout
                        </a>
                        </div>
                    )}
                    {globalData?.sellor?.selfActive == "Active"  && (
                      <div className="seller_profile_link">
                   
                    <Link
                        className="drop-link"
                        href={`${baseUrl}/seller/profile/notification-setting`}
                      >
                        Notification Setting
                      </Link>
                    <Link
                        className="drop-link"
                        href={`${baseUrl}seller/profile/contact-details`}
                      >
                        Contact Details
                      </Link>
 
                      <Link
                        className="drop-link"
                        href={`${baseUrl}seller/profile/display-information`}
                      >
                        Display Information
                      </Link>
                      {/* <a className="drop-link" href={`${baseUrl}seller/al/display-information`}>
                        Login Details
                      </a> */}
                     
                      <Link
                        className="drop-link"
                        href={`${baseUrl}seller/profile/pickup-address`}
                      >
                        Pick up Address
                      </Link>
                      <Link
                        className="drop-link"
                        href={`${baseUrl}/seller/profile/return-setting`}
                      >
                        Return Setting
                      </Link>
                     
                      { /* <Link
                        className="drop-link"
                        href={`${baseUrl}seller/profile/return-address`}
                      >
                        Return Address
                      </Link>
                      */ }
                      <Link
                        className="drop-link"
                        href={`${baseUrl}seller/profile/business-details`}
                      >
                        Business Details
                      </Link>
                      <Link
                        className="drop-link"
                        href={`${baseUrl}seller/profile/tax-information`}
                      >
                        Tax Information
                      </Link>
                      <Link
                        className="drop-link"
                        href={`${baseUrl}seller/profile/shipping-setting`}
                      >
                        Shipping Setting
                      </Link>
                      <Link
                        className="drop-link"
                        href={`${baseUrl}seller/profile/bank-account-information`}
                      >
                        Bank Account Information
                      </Link>
                      <Link
                        className="drop-link"
                        href={`${baseUrl}seller/profile/payment-information`}
                      >
                        Payment Information
                      </Link>
 
                        <Link
                        className="drop-link"
                        href={`${baseUrl}/seller/profile/user-management`}
                      >
                        User Management
                      </Link>
 
                                              <Link
                        className="drop-link"
                        href={`${baseUrl}/seller/profile/login-setting`}
                      >
                        Login Setting
                      </Link>
 
                      <a  onClick={(e)=>sellorLogout(e)}
                          className="drop-link"
                          href="#"
                        >
                          Logout
                        </a>
                      {/* <Link
                        className="drop-link"
                        href="#"
                      >
                        Manage Sub User
                      </Link> */}
                    </div>
                    )}
                  </div>
                </li>
              </div>
            </div>
            {/* button-area end */}
          </div>
        </div>
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
                 <a href="#"><i className="fa-light fa-bell"></i></a> 
                <a href="#listing-notification.html"><i className="fa-light fa-cog"></i> </a> 
              </div>
 
              <div className="dropdown_login pt--7">
                <li className="seller-login-profile">
                  {/* <i className="fa fa-user user_bg" />   */}
                  {globalData?.sellor && sellor?.display_name ? globalData?.sellor?.display_name :globalData?.sellor?.name }
                  {/* <i className="fa-regular fa-ellipsis-vertical doted_l" /> */}
                  <div className="dropdown mr_10_login">
                    <div className="login_name">
                      <div className="loginname"> {globalData?.sellor && globalData?.sellor?.display_name ? globalData?.sellor?.display_name :globalData?.sellor?.name }</div>
                      <div></div>
                    </div>
                    {sellor?.selfActive == "Pending"  && (
                      <div className="seller_profile_link">
                      <Link
                          className="drop-link"
                          href={`${baseUrl}seller/al/contact-details`}
                        >
                         Onboarding Dashboard
                        </Link>

                        <a  onClick={(e)=>sellorLogout(e)}
                          className="drop-link"
                          href="#"
                        >
                          Logout
                        </a>
                        </div>
                    )}

                    {sellor?.selfActive == "Active"  && (
                    <div className="seller_profile_link">
                    <Link
                        className="drop-link"
                        href={`${baseUrl}seller/al/display-information`}
                      >
                        Display Information
                      </Link>
                     
                      <Link
                        className="drop-link"
                        href={`${baseUrl}seller/al/contact-details`}
                      >
                        Contact Details
                      </Link>
                      <Link
                        className="drop-link"
                        href={`${baseUrl}seller/al/pickup-address`}
                      >
                        Pick up Address
                      </Link>
                      <Link
                        className="drop-link"
                        href={`${baseUrl}seller/al/return-address`}
                      >
                        Return Address
                      </Link>
                      <Link
                        className="drop-link"
                        href={`${baseUrl}seller/al/business-details`}
                      >
                        Business Details
                      </Link>
                      <Link
                        className="drop-link"
                        href={`${baseUrl}seller/al/tax-information`}
                      >
                        Tax Information
                      </Link>
                      <Link
                        className="drop-link"
                        href={`${baseUrl}seller/al/shipping-setting`}
                      >
                        Shipping Setting
                      </Link>
                      <Link
                        className="drop-link"
                        href={`${baseUrl}seller/al/bank-account-information`}
                      >
                        Bank Account Information
                      </Link>
                      <Link
                        className="drop-link"
                        href={`${baseUrl}seller/al/payment-information`}
                      >
                        Payment Information
                      </Link>
                      <a  onClick={(e)=>sellorLogout(e)}
                          className="drop-link"
                          href="#"
                        >
                          Logout
                        </a>
                      
                    </div>
                    )}
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
                      <Link href={`${baseUrl}dashboard/listing`} className="mobile-menu-link">
                        My Listing
                      </Link>
                    </li>
                    <li>
                      <Link href={`${baseUrl}dashboard/add-catalog`} className="mobile-menu-link">
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
                      <Link href={`${baseUrl}dashboard/active-orders`} className="mobile-menu-link">
                        Active Orders
                      </Link>
                    </li>
                    <li>
                      <Link href={`${baseUrl}dashboard/returns`} className="mobile-menu-link">
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

  )
}

export default Header