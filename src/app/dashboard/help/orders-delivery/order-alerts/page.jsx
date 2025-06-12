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
            <img src={`${baseUrl}front/assets/images/001.png`} /> <Link href={`${baseUrl}dashboard/help/orders-delivery`}> Orders &amp; Delivery </Link>/{" "}
            <span>Order alerts</span>
          </h2>
          <div className="listi_content_390">
            <h3 className="light_bg">How do I set up order notifications?</h3>
            <ul>
              <li>
                In Sellora Seller Center, select Notifications &gt; Settings.
              </li>
              <li>Choose notifications via Seller Center, email, or both.</li>
              <li>Check boxes for desired notification types.</li>
              <li>Greyed-out options cannot be modified.</li>
              <li>
                Click Save. Email notifications use your Sellora Seller Center
                login email.
              </li>
            </ul>
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