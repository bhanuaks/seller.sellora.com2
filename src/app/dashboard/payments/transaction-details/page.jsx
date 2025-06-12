import React from 'react'

function page() {
  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="navigator-breadcrumb-wrapper text-center">
            <h3>Transaction Details</h3>
            <p>
              Order Payment for Order 113-5297790-5857813{" "}
              <span>(view details of this order)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-12 mt--20">
        <div className="transaction_23">
          <p>
            Transaction date: <strong>Mar 24, 2025</strong>
          </p>
          <p>Item in this transaction</p>
        </div>
      </div>
      <div className="col-lg-12">
        {/* Product Charges */}
        <div className="section_13_5">
          <div className="section-title">Product charges</div>
          <div className="item-details">
            <div className="description">
              Organic Beet &amp; Lamb Boost Powder for Dogs | Pasture-Raised
              Lamb | Natural Supergreens | No Corn, Soy, or Fillers | Holistic
              Nutrition Enhancer
            </div>
            <div className="qty-price">
              <span>Qty: 1</span>
              <span className="label">$34.99</span>
            </div>
          </div>
        </div>
        {/* Promo Rebates */}
        <div className="section_13_5">
          <div className="section-title">Promo rebates</div>
          <div className="item-details">
            <div className="description">
              Organic Beet &amp; Lamb Boost Powder for Dogs | Pasture-Raised
              Lamb | Natural Supergreens | No Corn, Soy, or Fillers | Holistic
              Nutrition Enhancer
            </div>
            <div className="qty-price">
              <span>Qty: 1</span>
              <span className="label">$0.00</span>
            </div>
          </div>
        </div>
        {/* Other Charges */}
        <div className="section_13_5">
          <div className="section-title">Other</div>
          <div className="item-details">
            <div className="description">Product Tax</div>
            <div className="label">$2.10</div>
          </div>
        </div>
        {/* Sales Proceeds */}
        <div className="section_13_5">
          <div className="item-details">
            <div className="description">
              <strong>Sales Proceeds</strong>
            </div>
            <div className="label">$37.09</div>
          </div>
        </div>
        {/* Other Charges */}
        <div className="section_13_5">
          <div className="section-title">Marketplace Withheld Tax</div>
          <div className="item-details">
            <div className="description">
              MarketplaceFacilitatorTax-Principal
            </div>
            <div className="label">-$2.10 ?</div>
          </div>
        </div>
        {/* Other Charges */}
        <div className="section_13_5">
          <div className="item-details">
            <div className="description">
              <strong>Sellora Fees</strong>
            </div>
            <div className="label">-$3.90</div>
          </div>
        </div>
        {/* Other Charges */}
        <div className="section_13_5">
          <div className="item-details">
            <div className="description">
              <strong>Account Balance</strong>
            </div>
            <div className="label">-$31.09</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default page