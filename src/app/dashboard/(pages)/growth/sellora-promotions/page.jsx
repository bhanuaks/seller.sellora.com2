import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Page() {
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
            <h3>Sellora Promotions</h3>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <ul>
              {/* <li><a href="#"><i className="fa-solid fa-wallet"></i> Wallet</a> </li> */}
              <li>
                <a href="#">
                  
                  <Image src={`${baseUrl}front/assets/images/hand_shaking.png`}
                alt='influencer-marketing.jpg'
                width={0}
                height={0}
                sizes='100vw' 
                style={{width:"auto", height:"auto"}} 
                />
                Help
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="details_page_outer pt--20 pb--30">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <Link href={`${baseUrl}dashboard/growth/sale-events`}>
            <div className="sale_event">
              <h3>Sale Events</h3>
              <div className="sale_events_img"> 
                <Image src={`${baseUrl}front/assets/images/sale_event.jpg`}
                alt='influencer-marketing.jpg'
                width={0}
                height={0}
                sizes='100vw' 
                style={{width:"auto", height:"auto"}} 
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-6">
          <Link href={`${baseUrl}dashboard/growth/discount-coupon`}>
            <div className="sale_event">
              <h3>Discount Coupon</h3>
              <div className="sale_events_img"> 
                <Image src={`${baseUrl}front/assets/images/discount-coupon.jpg`}
                alt='influencer-marketing.jpg'
                width={0}
                height={0}
                sizes='100vw' 
                style={{width:"auto", height:"auto"}} 
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-6 offset-lg-3">
          <Link href={`${baseUrl}dashboard/marketing/influencer-marketing`}>
            <div className="sale_event">
              <h3>Influencer Marketing</h3>
              <div className="sale_events_img">
                <Image src={`${baseUrl}front/assets/images/influencer-marketing.jpg`}
                alt='influencer-marketing.jpg'
                width={0}
                height={0}
                sizes='100vw' 
                style={{width:"auto", height:"auto"}} 
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Page