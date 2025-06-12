"use client"
import { AppContext } from '@/app/contaxtData/contextData'
import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'

function afterLoginHeader() {

  
  const [businessData, setBusinessData] = useState(null)
  const [sellor, setSellor] = useState(null);

  const {globalData, setGlobalData} = useContext(AppContext)
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

    
   
    
    useEffect(() => {
      if (globalData.sellor) {
        $(".loaderouter").css("display", "none");
        fetch(
          `${baseUrl}api/seller/get-profile?user_id=${globalData.sellor._id}&with_data=businessDetails`,
          {
            method: "GET",
          }
        )
          .then((response) => {
            if (!response.ok) {
              $(".loaderouter").css("display", "none");
              throw new Error("Network Error");
            }
            return response.json();
          })
          .then((res) => {
            $(".loaderouter").css("display", "none");
            if (res.status) { 
              setSellor(res.data.data);
              if (res.data.referData) {
                setBusinessData(res.data.referData);
              }
              
            }
          });
      }
    }, [globalData.sellor]);
  



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
                  
                  <img
                    src={`${baseUrl}front/assets/images/logo-01.png`}
                    alt="logo-main"
                    className="logo"
                  />
                </Link>
              </div>
              <div className="right-btn-area header-five">
                {globalData.sellor && (
                  <div className="after_login_seller">
                  <i className="fa fa-user" />
                  {sellor && sellor.display_name ? sellor.display_name :sellor?.name }
                </div>
                )}
                
                <Link href="#" className="start-selling" onClick={(e)=>sellorLogout(e)}>
                  Log Out
                </Link>
                <Link href="#" className="help">
                  Help
                </Link>
              </div>
              {/* button-area end */}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="logo-search-category-wrapper after-md-device-header header-mid-five-call">
              
              <Link href="/" className="logo-area">
                
                <img
                  src={`${baseUrl}front/assets/images/logo-01.png`}
                  alt="logo-main"
                  className="logo"
                />
              </Link>
              <div className="main-wrapper-action-2 d-flex">
                <div className="accont-wishlist-cart-area-header">
                  <div className="after_login_seller">
                    <i className="fa fa-user" />
                    {sellor && sellor.display_name ? sellor.display_name :sellor?.name }
                  </div>
                </div>
                <div className="actions-area">
                  {/* <div className="search-btn" id="search"> <svg width="17" height="16" viewBox="0 0 17 16"
                                      fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M15.75 14.7188L11.5625 10.5312C12.4688 9.4375 12.9688 8.03125 12.9688 6.5C12.9688 2.9375 10.0312 0 6.46875 0C2.875 0 0 2.9375 0 6.5C0 10.0938 2.90625 13 6.46875 13C7.96875 13 9.375 12.5 10.5 11.5938L14.6875 15.7812C14.8438 15.9375 15.0312 16 15.25 16C15.4375 16 15.625 15.9375 15.75 15.7812C16.0625 15.5 16.0625 15.0312 15.75 14.7188ZM1.5 6.5C1.5 3.75 3.71875 1.5 6.5 1.5C9.25 1.5 11.5 3.75 11.5 6.5C11.5 9.28125 9.25 11.5 6.5 11.5C3.71875 11.5 1.5 9.28125 1.5 6.5Z"
                                          fill="#1F1F25"></path>
                                  </svg> </div> */}
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

  <div id="side-bar" className="side-bar header-two">
    <button className="close-icon-menu">
      <i className="far fa-times" />
    </button>
    <div className="mobile-menu-nav-area tab-nav-btn mt--20">
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
                <li className="parent">
                  
                  <Link href="#"   onClick={(e)=>sellorLogout(e)}>
                  Log Out
                </Link>
                </li>
                <li className="parent">
                  <Link href="#">Help</Link>
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

export default afterLoginHeader