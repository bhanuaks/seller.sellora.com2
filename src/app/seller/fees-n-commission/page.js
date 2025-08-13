import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
    <div className="sellor_27_12">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-7">
        <div className="content_dashboar_6">
          <h2>Sell online to 268+ millions customers at </h2>
          <div className="orange">0% Commission</div>
          <p>
            Join Sellora Unlock Your Potential and Reach Millions of Customers!
          </p>
          <p className="orange33">
            Sign up to start selling in Sellora B2B &amp; B2C marketplace. No
            set up fees. No subscription
          </p>
          <p>
            Enjoy 0% Commission &amp; fees for a limited time when you join
            Sellora. Start selling without worrying about subscription or
            commission charges. <span>T&amp;C*</span>
          </p>
          <div className="button_6dsfsd mb--30">
            <Link href={`${baseUrl}seller/login`}>Start Selling</Link>
            <div className="clearfix" />
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="sell_online_img">
          <img src={`${baseUrl}front/assets/images/sell_online2.jpg`} />
        </div>
      </div>
    </div>
  </div>
</div>

    <div className="details_page_outer mt--100">
     
      <div className="payment_schedule">
        <div className="row">
          <div className="col-lg-12">
            <div className="shadow2 p50 mb--30">
              <h2 className="text-center">Payment Schedule</h2>
              <p className="text-center">
                It is settled in your registered bank account on a 7-day payment
                cycle from the date of order delivery. Any Sellora applicable fees
                will be deducted before payments deposit. You can track your
                current balance and upcoming payments easily by visiting the
                Sellora Supplier Panel.
              </p>
              <div className="secure_papyment mt--50">
                <span>
                  <img src={`${baseUrl}front/assets/images/shield.png`} />
                  7-day Secure payment
                </span>
              </div>
              <div className="clearfix" />
            </div>
          </div>
          {/* <div className="col-lg-9">
  
  <h3>Fulfillment by Sellora (FBS)</h3>
  <p>With this option, Sellora manages everything packaging, shipping, and delivery allowing you to focus solely on
  growing your business.</p>
  
  <h3>Seller-Managed Fulfillment (SMF)</h3>
  <p>In this option, you handle the packaging and shipping processes, offering more flexibility and control over your
  logistics.</p>
  
  <p>Each fulfillment type comes with its own fee structure based on the services provided.  Make sure to review the fees associated with your chosen option to manage costs effectively and maximize your profits as a seller on Sellora.</p>
  
  
  </div>
  <div className="col-lg-3">
    <div className="image_view">
  <img src="assets/images/fulfillment.jpg">
  </div>
  </div> */}
        </div>
      </div>
      <div className="conten_areia mt--0">
        <div className="row">
          <div className="col-lg-12">
            <h2>Sellora Marketplace Referral Fees</h2>
          </div>
          <div className="col-lg-12">
            <p className="text-center">
              At Sellora, we strive to provide a fair and transparent fee
              structure to help you grow your business with ease. As part of our
              commitment to sellers, we charge a referral fee on each item sold
              through our marketplace.
            </p>
            <h3>What Are Referral Fees?</h3>
            <p>
              A referral fee is a small percentage of the total selling price of a
              product that Sellora charges for connecting you with our vast
              customer base.
            </p>
          </div>
        </div>
      </div>
      <div className="conten_areia" style={{ marginBottom: 0 }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="shadow2">
              <div className="table-responsive" style={{ paddingTop: 40 }}>
                <table className="table table-bordered table-hover table_345">
                  <tbody>
                    <tr style={{ borderTop: "none !important" }}>
                      <td style={{ minWidth: 300 }}>
                        <div className="category_by">Product category </div>
                      </td>
                      <td style={{ minWidth: 300 }}>
                        <div className="category_by">
                          Referral fee percentage{" "}
                        </div>
                      </td>
                      <td style={{ minWidth: 300 }}>
                        <div className="category_by">
                          Referral fee minimum amount{" "}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Apparel &amp; Accessories</td>
                      <td>
                         10% for items with a total sales price of $15 or less
                        <br />
                        12.5% for items with a total sales price between $15 &gt; $20
                        <br />
                        15% for items with a total sales price greater than $20
                        <br />
                        12% for backpacks
                      </td>
                      <td className="text-center">$0.30</td>
                    </tr>
                    <tr>
                      <td>Beauty &amp; Personal care</td>
                      <td>
                         7% for items with a total sales price of $10 or less
                        <br />
                        12% for items with a total sales price greater than $10
                      </td>
                      <td className="text-center">$0.30</td>
                    </tr>
                    <tr>
                      <td>Books</td>
                      <td>10%</td>
                      <td className="text-center">$0.30</td>
                    </tr>
                    <tr>
                      <td>Electronics Accessories</td>
                      <td>
                         10% for the portion of the total sales price up to $100
                        <br />
                         7% for the portion of the total sales price greater than $100
                      </td>
                      <td className="text-center">$0.30</td>
                    </tr>
                    <tr>
                      <td>Furniture</td>
                      <td>
                        12% for item price &gt; $ 200
                        <br />
                         10% or item price &lt; $ 200
                      </td>
                      <td className="text-center">$0.30</td>
                    </tr>
                    <tr>
                      <td>Garden &amp; Outdoor</td>
                      <td>12%</td>
                      <td className="text-center">$0.30</td>
                    </tr>
                    <tr>
                      <td>Home &amp; Kitchen</td>
                      <td>12%</td>
                      <td className="text-center">$0.30</td>
                    </tr>
                    <tr>
                      <td>Industrial &amp; Professional</td>
                      <td>10%</td>
                      <td className="text-center">$0.30</td>
                    </tr>
                    <tr>
                      <td>Jewelry &amp; Shoes</td>
                      <td>
                        15% for the portion of the total sales price up to $250
                        <br />
                        10% for the portion of the total sales price greater than $250
                      </td>
                      <td className="text-center">$0.30</td>
                    </tr>
                    <tr>
                      <td>Luxury</td>
                      <td>15%</td>
                      <td className="text-center">$0.30</td>
                    </tr>
                    <tr>
                      <td>Office Product &amp; Stationery</td>
                      <td>
                         The standard rate is 12%, except it is 7% for Calculators and 10%
 for Printer Cartridges
                      </td>
                      <td className="text-center">$0.30</td>
                    </tr>
                    <tr>
                      <td>Organic</td>
                      <td>10%</td>
                      <td className="text-center">$0.30</td>
                    </tr>
                    <tr>
                      <td>Toys &amp; Games</td>
                      <td>12%</td>
                      <td className="text-center">$0.30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="note">
              <p>Note: 0% commission and fees for a limited time period.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid mb--50">
      <div className="row">
        <div className="col-lg-8">
          <div className="expan_mmmm">
            <p>
              Expand your wholesale business with Sellora connecting you with
              buyers and increases sales in both B2B and B2C markets
            </p>
            <div className="start_mmmm">
              <Link href={`${baseUrl}seller/login`}>Start Selling</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="wholesale">
            <img src={`${baseUrl}front/assets/images/wholesale_trolly.jpg`} />
          </div>
        </div>
      </div>
    </div>
  </>
  

  )
}

export default page