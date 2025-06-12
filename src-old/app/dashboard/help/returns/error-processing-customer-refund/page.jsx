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
            <img src={`${baseUrl}front/assets/images/001.png`} />
            <Link href={`${baseUrl}dashboard/help/returns`}>Returns</Link> / <span>Error Processing Customer Refund</span>
          </h2>
          <div className="listi_content_390">
            <h3 className="light_bg">How do I issue a partial refund?</h3>
            <ul>
              <li>Go to the Return Dashboard in Sellora Seller Center.</li>
              <li>Enter Order Number, click Get Order.</li>
              <li>Select Issue Adjustment for the item.</li>
              <li>Choose Enter a custom amount under Refund Type.</li>
              <li>Specify dollar or percentage amount.</li>
              <li>Sellora adjusts tax/shipping automatically.</li>
              <li>Select Refund Reason from dropdown.</li>
              <li>Add comment for refund reason.</li>
              <li>Click Refund.</li>
            </ul>
            <h3 className="light_bg">
              {" "}
              I received an error when processing a customer refund. What should
              I do?
            </h3>
            <p>
              Clear browser cache/cookies and reopen Sellora Seller Center in
              incognito mode.
            </p>
            <h3 className="light_bg">How do I opt out of instant refunds?</h3>
            <p>You cannot opt out of instant refunds.</p>
            <h3 className="light_bg">
              How do I manage refunds and adjustments?
            </h3>
            <p>
              Go to the Return Dashboard in Sellora Seller Center.
              <br />
              Enter Order id # to view and expand order details.
            </p>
            <h3 className="light_bg">How do I issue a full refund?</h3>
            <ul>
              <li>Go to the Return Dashboard in Sellora Seller Center.</li>
              <li>Enter Order id #, click Get Order.</li>
              <li>Select Issue Adjustment for the item.</li>
              <li>Choose Refund the entire item under Refund Type.</li>
              <li>Select Refund Reason from dropdown.</li>
              <li>Add comment for refund reason.</li>
              <li>Click Refund.</li>
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