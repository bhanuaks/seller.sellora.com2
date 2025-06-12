import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React from 'react'

function SellorFooter() {
  return (
    <>
  <div className="rts-footer-area pt--50 bg_blue-footer">
    <div className="container-fluid">
      <div className="footer-main-content-wrapper">
        <div className="row">
          <div className="col-lg-3">
            <div className="single-footer-wized">
              {/* <h3 className="footer-title">About</h3> */}
              <div className="footer-logo">
                <img src={`${baseUrl}front/assets/images/logo-footer.png`} />
              </div>
              <div className="connect_footer">
                <p>
                  Connect with millions of global B2B &amp; B2C buyers
                  offortlessly and unlock endless opportunities
                </p>
              </div>
              <div className="start_mmmm2">
                
                <Link href={`${baseUrl}seller/sell-online`}>
                  Start Selling
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1">
            <div className="single-footer-wized">
              <h3 className="footer-title2">Solutions</h3>
              <div className="seller_footer-nav">
                <ul>
                  <li>
                    <Link href="#">B2B B2C ecommerce</Link>
                  </li>
                  <li>
                    <Link href="#">Wholesale ecommerce</Link>
                  </li>
                  <li>
                    <Link href="#">Success stories</Link>
                  </li>
                  <li>
                    <Link href="#">Services</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="single-footer-wized">
              <h3 className="footer-title2">Sell on Sellora</h3>
              <div className="seller_footer-nav">
                <ul>
                  <li>
                    <Link href={`${baseUrl}seller/sell-online`}>Sell Online</Link>
                  </li>
                  <li>
                    <Link href={`${baseUrl}seller/fees-n-commission`}>Fees &amp; Commission</Link>
                  </li>
                  <li>
                    <Link href={`${baseUrl}seller/grow`}>Grow</Link>
                  </li>
                  <li>
                    <Link href={`${baseUrl}seller/learn`}>Learn</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2" style={{ float: "right" }}>
            <div className="single-footer-wized">
              <h3 className="footer-title2">Contact Us</h3>
              <div className="seller_footer-nav">
                <ul>
                  <li>
                    <Link href="mailto:sell@sellora.com">sell@sellora.com</Link>
                  </li>
                </ul>
              </div>
              <div className="social-one-wrapper2 mt--30">
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-youtube" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-whatsapp" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="seller_social-and-payment-area-wrapper d-lg-flex justify-content-lg-between">
      <div className="col-lg-4">
        
        <Link href="#" className="playstore-app-area2">
          
          <span>Download App</span>
          <img src={`${baseUrl}front/assets/images/payment/02.png`} alt="" />
          <img src={`${baseUrl}front/assets/images/payment/03.png`} alt="" />
        </Link>
      </div>
      <div className="col-lg-4">
        <div className="payment-access2">
          
          Copyright 2024 <span>© Sellora</span> | All rights reserved.
        </div>
      </div>
      <div className="col-lg-4">
        <div className="term_n_condition">
          <ul>
            <li>
              <Link href="#">Term &amp; Services</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* rts footer one area end */}
  {/*  */}
</>


  )
}

export default SellorFooter