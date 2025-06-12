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
            <h3>Payments Overview</h3>
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
      <div className="col-lg-9">
        <div className="list_0589">
          <div className="range_0e890">
            <select>
              <option>25 Apr 25 → 7 May 25</option>
              <option>25 Apr 25 → 7 May 25</option>
              <option>25 Apr 25 → 7 May 25</option>
              <option>25 Apr 25 → 7 May 25</option>
              <option>25 Apr 25 → 7 May 25</option>
            </select>
          </div>
        </div>
        <div className="indexing_outer">
          {" "}
          Opening balance <span>$ 0.00</span>{" "}
        </div>
        <div className="indexing_outer2">
          <h2>Sales</h2>
          <div className="indexing_348">
            <div className="index_title_item-titl">Product price</div>
            <div className="price_12_5">$ 59.97</div>
          </div>
          <div className="indexing_348">
            <div className="index_title_item-titl">Shipping</div>
            <div className="price_12_5">$ 0.00</div>
          </div>
          <div className="indexing_348">
            <div className="index_title_item-titl">Net tax collected</div>
            <div className="price_12_5">$ 4.83</div>
          </div>
          <div className="indexing_348">
            <div className="index_title_item-titl">Commission savings</div>
            <div className="price_12_5">$ 0.00</div>
          </div>
          <div className="indexing_348">
            <div className="index_title_item-titl">Commission</div>
            <div className="price_12_5">− $ 9.00</div>
          </div>
          <div className="indexing_348">
            <div className="index_title_item-titl">Net tax withheld</div>
            <div className="price_12_5">− $ 4.83</div>
          </div>
          <div className="indexing_348">
            <div className="index_title_item-titl">
              Total Sellora funded savings
            </div>
            <div className="price_12_5">$ 0.00</div>
          </div>
          <div className="indexing_348">
            <div className="index_title_item-titl bold">Total:</div>
            <div className="price_12_5 bold">$ 50.97</div>
          </div>
        </div>
        <div className="indexing_outer2">
          <h2>Refunds</h2>
          <div className="indexing_348">
            <div className="index_title_item-titl">Product price</div>
            <div className="price_12_5">$ 0.00</div>
          </div>
          <div className="indexing_348">
            <div className="index_title_item-titl">Shipping</div>
            <div className="price_12_5">$ 0.00</div>
          </div>
          <div className="indexing_348">
            <div className="index_title_item-titl">Net tax collected</div>
            <div className="price_12_5">$ 0.00</div>
          </div>
          <div className="indexing_348">
            <div className="index_title_item-titl">Commission</div>
            <div className="price_12_5">$ 0.00</div>
          </div>
          <div className="indexing_348">
            <div className="index_title_item-titl">Commission</div>
            <div className="price_12_5">− $ 0.00</div>
          </div>
          <div className="indexing_348">
            <div className="index_title_item-titl">Net tax withheld</div>
            <div className="price_12_5">− $ 0.00</div>
          </div>
          <div className="indexing_348">
            <div className="index_title_item-titl">
              Total Sellora funded savings
            </div>
            <div className="price_12_5">$ 0.00</div>
          </div>
          <div className="indexing_348">
            <div className="index_title_item-titl bold">Total:</div>
            <div className="price_12_5 bold">$ 0.00</div>
          </div>
        </div>
        <div className="indexing_outer">
          {" "}
          Expenses <span>$ 0.00</span>{" "}
        </div>
        <div className="indexing_outer">
          {" "}
          Paid to you <span>$ 0.00</span>{" "}
        </div>
        <div className="indexing_outer">
          {" "}
          Reserve <span>$ 50.97</span>{" "}
        </div>
      </div>
      <div className="col-lg-3">
        <div className="payment-info">
          <div className="section-title">Payment Information</div>
          <div className="payment-detail">
            <li>
              Status
              <span>To Be Paid</span>
            </li>
          </div>
          <div className="payment-detail">
            <li>
              Payout date
              <span>Apr 22, 2025 PDT</span>
            </li>
          </div>
          <div className="payment-detail">
            <li>
              Payout cycle
              <span>Bi-weekly</span>
            </li>
          </div>
          <div className="payment-detail">
            <li>
              Payment method
              <span>
                <img src={`${baseUrl}front/assets/images/payoneer-logo.png`} />
              </span>
            </li>
          </div>
          <div className="payment-detail">
            <li>
              Amount to be Paid
              <span>$ 25.49</span>
            </li>
          </div>
          <div className="payment-detail">
            <li>
              Amount on Hold
              <span>$ 25.48</span>
            </li>
          </div>
          <div className="payment-detail">
            <li>
              Hold Period
              <span>Apr 25, 2025 to May 07, 2025</span>
            </li>
          </div>
          <div className="hold-notice">
            Held due to new Seller Payment hold has been set on your account.
          </div>
        </div>
        <div className="buttons_04938590489">
          <button className="btn_45940">
            <span>View Transactions</span>
          </button>
          <button className="btn_45940">
            <span>Print</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default page