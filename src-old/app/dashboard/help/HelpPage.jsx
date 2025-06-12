import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React from 'react'

function HelpPage() {
  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="navigator-breadcrumb-wrapper text-center">
            <h3>Help</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="ticket-container">
      <div className="row">
        <div className="col-lg-10">
          <div className="textarea-container">
            <textarea
              maxLength={200}
              placeholder="What do you need help with?"
              defaultValue={""}
            />
            <div className="char-counter">0/200</div>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="button-group">
            <Link href={`${baseUrl}dashboard/help/raise-a-ticket`} className="btn btn-primary">
              Raise a Ticket
            </Link>
            <Link href={`${baseUrl}dashboard/help/my-ticket/All`} className="btn btn-secondary">
              My Tickets
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <h2>Select Issue Category</h2>
      </div>
      <div className="col-lg-4">
        <div className="category_search2">
          <span className="far fa-search form-control-feedback2" />
          <input
            type="text"
            className="form-control"
            placeholder="Search for issue or question"
          />
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <h3>
            <img src={`${baseUrl}front/assets/images/order3.png`} /> Orders &amp; Delivery
          </h3>
          <ul>
            <li>
              <Link href={`${baseUrl}dashboard/help/orders-delivery/order-alerts`}>Order Alerts</Link>
            </li>
            <li>
              <Link href={`${baseUrl}dashboard/help/orders-delivery/unable-to-cancel-order`}>Unable to Cancel Order</Link>
            </li>
            <li>
              <Link href={`${baseUrl}dashboard/help/orders-delivery/issue-acknowledging-new-orders`}>
                Issue Acknowledging New Orders
              </Link>
            </li>
          </ul>
          <div className="view-all">
            <Link href={`${baseUrl}dashboard/help/orders-delivery`}>View All</Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <h3>
            <img src={`${baseUrl}front/assets/images/return2.png`} /> Returns
          </h3>
          <ul>
            <li>
              <Link href={`${baseUrl}dashboard/help/returns/return-policy-concerns-or-suggestions`}>
                Return Policy Concerns or Suggestions?
              </Link>
            </li>
            <li>
              <Link href={`${baseUrl}dashboard/help/returns/error-processing-customer-refund`} >
                Error Processing Customer Refund
              </Link>
            </li>
          </ul>
          <div className="view-all">
            <Link href={`${baseUrl}dashboard/help/returns`}>View All</Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <h3>
            <img src={`${baseUrl}front/assets/images/listing1.png`} /> Listing &amp; Catalog
          </h3>
          <ul>
            <li>
              <a href="#my-uploaded-file-is-not-live-yet.html">
                My uploaded file is not live yet
              </a>
            </li>
            <li>
              <a href="#i-want-to-edit-catalog-details.html">
                I want to edit catalog details
              </a>
            </li>
            <li>
              <a href="#i-want-catalog-upload-training.thml">
                I want catalog upload training
              </a>
            </li>
          </ul>
          <div className="view-all">
            <Link href={`${baseUrl}dashboard/help/listing-catalog`}>View All</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <div className="bottom-links">
          <div className="bottom-link">
            <Link href={`${baseUrl}dashboard/help/payments`}>
              <img src={`${baseUrl}front/assets/images/payment.png`} />
              Payments
            </Link>
          </div>
          <div className="bottom-link">
            <Link href={`${baseUrl}dashboard/help/advertisements`}>
              <img src={`${baseUrl}front/assets/images/advertisment.png`} />
              Advertisements
            </Link>
          </div>
          <div className="bottom-link">
            <Link href={`${baseUrl}dashboard/help/promotions`}>
              <img src={`${baseUrl}front/assets/images/permotion.png`} />
              Promotions
            </Link>
          </div>
          <div className="bottom-link">
            <Link href={`${baseUrl}dashboard/help/seller-perfomance`}>
              <img src={`${baseUrl}front/assets/images/sellora-perfomance.png`} />
              Seller Performance
            </Link>
          </div>
          <div className="bottom-link">
            <Link href={`${baseUrl}dashboard/help/account`}>
              <img src={`${baseUrl}front/assets/images/account.png`} />
              Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default HelpPage