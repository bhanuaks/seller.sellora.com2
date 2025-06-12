import React from 'react'
import RightSideBar from '../../RightSideBar'
import { baseUrl } from '@/Http/helper'
import Link from 'next/link'

function page() {
  return (
    <div className="sellora_045948">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="head_234">
          <h2>
            <img src={`${baseUrl}front/assets/images/001.png`} />  <Link href={`${baseUrl}dashboard/help/orders-delivery`}> Orders &amp; Delivery </Link>/{" "}
            <span>Issue acknowledge New orders</span>
          </h2>
          <div className="listi_content_390">
            <h3 className="light_bg">Why was my delivery service rejected?</h3>
            <p>
              To ensure smooth tracking and delivery, please use one of the
              preferred carriers listed in our 'Provide Valid Tracking Numbers'
              policy—FedEx, UPS, USPS, DHL, OnTrac, or Lasership. If you're
              using a non-preferred carrier, select 'OtherCarrier' in the
              Sellora Seller Center when entering tracking information.
            </p>
            <h3 className="light_bg">
              How do I update the shipping address on my order?
            </h3>
            <p>
              Shipping address changes are not allowed. Cancel the order and
              instruct the customer to reorder.
            </p>
            <h3 className="light_bg">
              What does an "Acknowledge" status mean?
            </h3>
            <p>
              Acknowledged status means you’ve confirmed receipt of the order in
              Sellora Seller Center.
            </p>
          </div>
        </div>
      </div>
       <RightSideBar />
    </div>
  </div>
</div>

  )
}

export default page