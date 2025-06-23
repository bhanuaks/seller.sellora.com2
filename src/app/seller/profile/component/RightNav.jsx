'use client'
import { AppContext } from '@/app/contaxtData/contextData'
import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext } from 'react'

function RightNav() {

  const pathname = usePathname();
 const {globalData} =  useContext(AppContext)

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
  
    <div className="col-lg-3 rts-sticky-column-item2">
        <div className='sticky-box2'> 
    <div className="help_single-filter-box ">
          <div className="goody-s">
            <h3>{globalData?.sellor && globalData?.sellor?.display_name ? globalData?.sellor?.display_name :globalData?.sellor?.name }</h3>
             
            <p>Merchant ID: {globalData?.sellor?.merchant_id}</p>
          </div>
          <div className="filterbox-body">
            <div className="order-card2">
              <div className={`order-header2 ${pathname =="/seller/profile/notification-setting"?"active_1":""}`} >
                <Link href={`/seller/profile/notification-setting`} className="title">
                  Notification Setting
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className={`order-header2 ${pathname =="/seller/profile/contact-details"?"active_1":""}`} >
                <Link href={`/seller/profile/contact-details`} className="title">
                  Contact Details{" "}
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className={`order-header2 ${pathname =="/seller/profile/display-information"?"active_1":""}`} >
                <Link href={`/seller/profile/display-information`} className="title">
                  Display Information
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className={`order-header2 ${pathname =="/seller/profile/pickup-address"?"active_1":""}`} >
                <Link href={`/seller/profile/pickup-address`} className="title">
                  Pick up Address
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className={`order-header2 ${pathname =="/seller/profile/return-setting"?"active_1":""}`} >
                <Link href={`/seller/profile/return-setting`} className="title">
                  Return Setting
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className={`order-header2 ${pathname =="/seller/profile/business-details"?"active_1":""}`} >
                <Link href={`/seller/profile/business-details`} className="title">
                  Business Details
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className={`order-header2 ${pathname =="/seller/profile/tax-information"?"active_1":""}`} >
                <Link href={`/seller/profile/tax-information`} className="title">
                  Tax Information
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className={`order-header2 ${pathname =="/seller/profile/shipping-setting"?"active_1":""}`}>
                <Link href={`/seller/profile/shipping-setting`} className="title">
                  Shipping Setting
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className={`order-header2 ${pathname =="/seller/profile/bank-account-information"?"active_1":""}`}>
                <Link
                  href={`/seller/profile/bank-account-information`}
                  className="title"
                >
                  Bank Account Information
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className={`order-header2 ${pathname =="/seller/profile/payment-information"?"active_1":""}`}>
                <Link href={`/seller/profile/payment-information`} className="title">
                  Payment Information
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className={`order-header2 ${pathname =="/seller/profile/user-management"?"active_1":""}`}>
                <Link href={`/seller/profile/user-management`} className="title">
                  User Management
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className={`order-header2 ${pathname =="/seller/profile/login-setting"?"active_1":""}`}>
                <Link href={`/seller/profile/login-setting`} className="title">
                  Login Setting
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className="order-header2">
                <a href="#" className="title" onClick={(e)=>sellorLogout(e)}>
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
   
  )
}

export default RightNav
