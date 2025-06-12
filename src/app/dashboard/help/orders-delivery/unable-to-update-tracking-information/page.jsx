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
            <img src={`${baseUrl}front/assets/images/001.png`} />  <Link href={`${baseUrl}dashboard/help/orders-delivery`}> Orders &amp; Delivery </Link> /{" "}
            <span>Unable to update tracking information</span>
          </h2>
          <div className="listi_content_390">
            <h3 className="light_bg">How do I update tracking information?</h3>
            <ul>
              <li>Go to the Orders Dashboard in the Sellora Seller Center.</li>
              <li>Click on the Unshipped Orders tab or search by Order ID.</li>
              <li>
                Select the relevant Unshipped Order ID to view order details.
              </li>
              <li>Click Confirm Order under the "Actions" section.</li>
              <li>Enter the Shipping Details.</li>
              <li>Update the Shipping Carrier and Tracking Number.</li>
              <li>Click Save to complete the process.</li>
            </ul>
            <h3 className="light_bg">
              Why can’t I use the tracking number I provided?
            </h3>
            <p>
              The tracking number may be invalid. Verify it meets Sellora’s
              requirements. Contact Seller Support if issues persist.
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