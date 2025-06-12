import { baseUrl } from '@/Http/helper'
import React from 'react'

function page() {
  return (
   <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="navigator-breadcrumb-wrapper">
            <h3>Disbursements</h3>
          </div>
        </div>
        {/*  <div className="col-lg-6 col-md-6">
            <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
                <ul>
                <li><a href="#"><img src="../assets/images/hand_shaking.png">Help</a> </li>
                
                </ul>
            </div>
            </div> */}
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="container">
          <div className="filter_form_33">
            <div className="row">
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
          <div className="row">
            <div className="col-lg-12 mt--20">
              <div className="transaction_23">
                <p>Electronic Transactions (Credit Card/Net Banking/GC)</p>
                <p>Cash On Delivery Transactions and Non-Transactional Fees</p>
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
                  <th width={150} className="text-left">
                    3/21/2025 – 4/4/2025
                  </th>
                  <th width={120} className="text-left">
                    Standard Order
                  </th>
                  <th width={300} className="text-left">
                    Transaction ID{" "}
                  </th>
                  <th width={150} className="text-left">
                    Payment Amount
                  </th>
                  <th width={150} className="text-center">
                    Payout Status:{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="winner__table">
                  <td>20-02-2025</td>
                  <td>Sale</td>
                  <td>24560556752</td>
                  <td>24560556752</td>
                  <td className="text-center done">Done</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default page