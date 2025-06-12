import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="navigator-breadcrumb-wrapper">
            <h3>Transaction</h3>
          </div>
        </div>
         
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="container">
          <div className="filter_form_33">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="breadcome-heading pb--10">
                  <div className="sr-input-func03 ">
                    <label>Order Id</label>
                    <input
                      type="text"
                      placeholder=""
                      className="form-control"
                    />
                    <a href="#">
                      <i className="far fa-search" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                <label>Transaction Type</label>
                <select className="">
                  <option>Sale</option>
                  <option>Refund</option>
                  <option>Dispute</option>
                  <option>Adjustment</option>
                  <option>Service Free</option>
                </select>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                <label>From</label>
                <input type="date" placeholder="" className="form-control" />
                <img
                  src={`${baseUrl}front/assets/images/calender.png`}
                  className="calender_0002"
                />
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                <label>To</label>
                <input type="date" placeholder="" className="form-control" />
                <img
                  src={`${baseUrl}front/assets/images/calender.png`}
                  className="calender_0002"
                />
              </div>
              <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12">
                <div className="filter-form">
                  <label>&nbsp;</label>
                  <button type="submit">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="table-responsive">
            <table
              className="table table-bordered table-striped br-none"
              style={{ marginTop: 10 }}
            >
              <thead className="table__head">
                <tr className="winner__table">
                  <th
                    width={150}
                    className="text-left"
                    style={{ background: "#d9d9d9 !important" }}
                  >
                    Date
                  </th>
                  <th
                    width={120}
                    className="text-left"
                    style={{ background: "#d9d9d9 !important" }}
                  >
                    Transaction type
                  </th>
                  <th
                    width={300}
                    className="text-left"
                    style={{ background: "#d9d9d9 !important" }}
                  >
                    Order ID
                  </th>
                  <th
                    width={150}
                    className="text-left"
                    style={{ background: "#d9d9d9 !important" }}
                  >
                    Product Details
                  </th>
                  <th
                    width={150}
                    className="text-left"
                    style={{ background: "#d9d9d9 !important" }}
                  >
                    Total product charges
                  </th>
                  <th
                    width={150}
                    className="text-left"
                    style={{ background: "#d9d9d9 !important" }}
                  >
                    Total promotional rebates
                  </th>
                  <th
                    width={150}
                    className="text-left"
                    style={{ background: "#d9d9d9 !important" }}
                  >
                    Sellora fees
                  </th>
                  <th
                    width={150}
                    className="text-left"
                    style={{ background: "#d9d9d9 !important" }}
                  >
                    Other
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="winner__table">
                  <td>20-02-2025</td>
                  <td>Sale</td>
                  <td>114-5384733-1321828</td>
                  <td>
                    <Link href={`${baseUrl}dashboard/payments/transaction-details`}>Lora's Choice ....</Link>
                  </td>
                  <td>$29.99</td>
                  <td>$0.00</td>
                  <td>-$2.9</td>
                  <td>$39.99</td>
                </tr>
                <tr className="winner__table">
                  <td>20-02-2025</td>
                  <td>Sale</td>
                  <td>114-5384733-1321828</td>
                  <td>
                    <Link href={`${baseUrl}dashboard/payments/transaction-details`}>Lora's Choice ....</Link>
                  </td>
                  <td>$29.99</td>
                  <td>$0.00</td>
                  <td>-$2.9</td>
                  <td>$39.99</td>
                </tr>
                <tr className="winner__table">
                  <td>20-02-2025</td>
                  <td>Sale</td>
                  <td>114-5384733-1321828</td>
                  <td>
                    <Link href={`${baseUrl}dashboard/payments/transaction-details`}>Lora's Choice ....</Link>
                  </td>
                  <td>$29.99</td>
                  <td>$0.00</td>
                  <td>-$2.9</td>
                  <td>$39.99</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="right_button">
            <ul>
              <li>
                <a href="#">Download</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default page