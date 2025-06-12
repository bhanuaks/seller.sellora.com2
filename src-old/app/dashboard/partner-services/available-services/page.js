import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
  <div className="banner_1_service">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2>
            Unlock new growth opportunities with Sellora’s Partner Services.
          </h2>
          <p> Connect with verified, trusted partners today.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="_outer_0000">
          <div className="tabs_00021">
            <div className="tab_0021">
              Verified
              <br />
              Partners
            </div>
            <div className="tab_0021">Sellers</div>
            <div className="tab_0021">
              Request
              <br />
              Fulfilled
            </div>
          </div>
          <h2>Available Services</h2>
          <div className="services">
            <div className="card_21">
              <Link href={`${baseUrl}dashboard/partner-services/account-management`}>
                <h3>
                  <img src={`${baseUrl}front/assets/images/Account_Management.png`} />
                  Account
                  <br />
                  Management
                </h3>
              </Link>
              <p>Complete Account Management</p>
              <p>Brand Protection</p>
              <p className="more">+1 More</p>
            </div>
            <div className="card_21">
              <h3>
                <img src={`${baseUrl}front/assets/images/cataloging.png`} />
                Cataloging
              </h3>
              <p>Basic Cataloging</p>
              <p>Detailed Cataloging</p>
              <p className="more">+7 More</p>
            </div>
            <div className="card_21">
              <h3>
                <img src={`${baseUrl}front/assets/images/taxaction.png`} />
                Taxation
              </h3>
              <p>FSSAI Licensing</p>
              <p>GSTIN registration</p>
              <p className="more">+7 More</p>
            </div>
            <div className="card_21">
              <h3>
                <img src={`${baseUrl}front/assets/images/advertising.png`} />
                Advertising
              </h3>
              <p>Basic Advertising</p>
              <p>Advanced Advertising</p>
            </div>
            <div className="card_21">
              <h3>
                <img src={`${baseUrl}front/assets/images/imaging.png`} />
                Imaging
              </h3>
              <p>Image Editing</p>
              <p>Product Shoot</p>
              <p className="more">+4 More</p>
            </div>
            <div className="card_21">
              <h3>
                <img src={`${baseUrl}front/assets/images/Seller-Training.png`} />
                Seller Training
              </h3>
              <p>Basic Training</p>
              <p>Advanced Training</p>
            </div>
          </div>
          <div className="how-it-works3">
            <h3>Featured Partners: How it works?</h3>
            <div className="steps_21">
              <div className="step_21">
                <div className="item_21_5">
                  <img src={`${baseUrl}front/assets/images/Explore-Services.png`} />
                </div>
                <div>
                  <h3>Explore Services</h3>
                  <p>Choose the services based on your business need</p>
                </div>
              </div>
              <div className="step_21">
                <div className="item_21_5">
                  <img src={`${baseUrl}front/assets/images/Connect-with-a-Partner.png`} />
                </div>
                <div>
                  <h3>Connect with a Partner</h3>
                  <p>Select a partner that matches your budget and need</p>
                </div>
              </div>
              <div className="step_21">
                <div className="item_21_5">
                  <img src={`${baseUrl}front/assets/images/Grow-your-Business.png`} />
                </div>
                <div>
                  <h3>Grow your Business</h3>
                  <p>Get the best professional help for your business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default page