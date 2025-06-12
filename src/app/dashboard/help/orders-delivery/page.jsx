import { baseUrl } from '@/Http/helper'
import React from 'react'
import RightSideBar from '../RightSideBar'
import Link from 'next/link'

function OrderDelivery() {
  return (
    <div className="sellora_045948">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="head_234">
          <h2>
            <img src={`${baseUrl}front/assets/images/diagram-1.png`} /> <Link href={`${baseUrl}dashboard/help`}> Help </Link> /{" "}
            <span>Orders &amp; Delivery</span>
          </h2>
          <div className="listi_content_390">
            <div className="card_34259">
              <ul>
                <li>
                  <Link href={`${baseUrl}dashboard/help/orders-delivery/order-alerts`}>
                    <span>Order Alerts</span>
                  </Link>
                </li>
                <li>
                  <Link href={`${baseUrl}dashboard/help/orders-delivery/unable-to-cancel-order`} >
                    <span>Unable to Cancel Order</span>
                  </Link>
                </li>
                <li>
                  <Link href={`${baseUrl}dashboard/help/orders-delivery/issue-acknowledging-new-orders`}  >
                    <span>Issue Acknowledging New Orders</span>
                  </Link>
                </li>
                <li>
                  <Link href={`${baseUrl}dashboard/help/orders-delivery/unable-to-update-tracking-information`} >
                    <span>Unable to update tracking information</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <RightSideBar />
    </div>
  </div>
</div>

  )
}

export default OrderDelivery