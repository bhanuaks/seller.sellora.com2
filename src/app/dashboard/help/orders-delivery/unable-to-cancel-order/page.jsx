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
            <span>Unable to Cancel Order</span>
          </h2>
          <div className="listi_content_390">
            <h3 className="light_bg">How do I cancel an order?</h3>
            <ul>
              <li>
                Go to the Order Management Dashboard in the Sellora Seller
                Center.
              </li>
              <li>Select the orders you wish to cancel.</li>
              <li>
                Choose the appropriate cancellation reason from the list below:
              </li>
              <li>Customer Changed Mind</li>
              <li>Pricing Error</li>
              <li>Out of Stock</li>
              <li>Fraud – Stop Shipment</li>
              <li>Address is Not Serviceable</li>
              <li>Click Submit to confirm the cancellation.</li>
            </ul>
            <h3 className="light_bg">
              What do I do if a customer requests order cancellation?
            </h3>
            <ul>
              <li>If unshipped, cancel via Order Management Dashboard:</li>
              <li>Search by Order Id #.</li>
              <li>Click three dots, select Cancel.</li>
              <li>Choose Customer request for cancellation.</li>
              <li>Click cancel order.</li>
            </ul>
            <h3 className="light_bg">
              Will an auto-cancelled order impact my performance?
            </h3>
            <p>
              Yes, auto-cancelled orders negatively affect performance metrics
              and sellora will charge you cancellation charges.
            </p>
            <h3 className="light_bg"> Why was my order canceled?</h3>
            <p>
              Orders auto-cancel if valid tracking isn’t provided by the 3rd day
              after Expected Ship Date (ESD). Ship and add tracking by ESD to
              avoid this
            </p>
            <h3 className="light_bg">What is the expected ship date?</h3>
            <p>
              Expected Ship Date (ESD) refers to the date by which the seller
              must ship the order. For more details, please refer to our
              Shipping Methods &amp; Timing Policy.
            </p>
            <h3 className="light_bg">Can I reverse-cancel an order?</h3>
            <p>No, cancellations are final and cannot be reversed.</p>
            <h3 className="light_bg">
              Can a customer change their payment information?
            </h3>
            <p>
              No, payment info can’t be changed post-order. Customers should
              cancel and reorder.
            </p>
            <h3 className="light_bg">
              Can I cancel an order marked as shipped?
            </h3>
            <p>
              No, shipped orders cannot be canceled. If the order has not yet
              been shipped, you may cancel it, but cancellation charges will
              apply
            </p>
            <h3 className="light_bg">
              What if I get an auto-cancellation warning after shipping with
              valid tracking?
            </h3>
            <p>
              Contact Seller Support to report the issue with tracking details.
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