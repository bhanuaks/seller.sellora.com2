'use client'
import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React from 'react'

function RightNav() {

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
    <div className="help_single-filter-box">
          <div className="goody-s">
            <h3>Goody2’s</h3>
            <p>Merchant ID: US001</p>
          </div>
          <div className="filterbox-body">
            <div className="order-card2">
              <div className="order-header2">
                <Link href={`${baseUrl}/seller/profile/notification-setting`} className="title">
                  Notification Setting
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className="order-header2">
                <Link href={`${baseUrl}seller/profile/contact-details`} className="title">
                  Contact Details{" "}
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className="order-header2">
                <Link href={`${baseUrl}seller/profile/display-information`} className="title">
                  Display Information
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className="order-header2">
                <Link href={`${baseUrl}seller/profile/pickup-address`} className="title">
                  Pick up Address
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className="order-header2">
                <Link href={`${baseUrl}/seller/profile/return-setting`} className="title">
                  Return Setting
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className="order-header2">
                <Link href={`${baseUrl}seller/profile/business-details`} className="title">
                  Business Details
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className="order-header2">
                <Link href={`${baseUrl}seller/profile/tax-information`} className="title">
                  Tax Information
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className="order-header2">
                <Link href={`${baseUrl}seller/profile/shipping-setting`} className="title">
                  Shipping Setting
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className="order-header2">
                <Link
                  href={`${baseUrl}seller/profile/bank-account-information`}
                  className="title"
                >
                  Bank Account Information
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className="order-header2">
                <Link href={`${baseUrl}seller/profile/payment-information`} className="title">
                  Payment Information
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className="order-header2 active_1">
                <Link href={`${baseUrl}/seller/profile/user-management`} className="title">
                  User Management
                </Link>
              </div>
            </div>
            <div className="order-card2">
              <div className="order-header2">
                <Link href={`${baseUrl}/seller/profile/login-setting`} className="title">
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
    </>
  )
}

export default RightNav
