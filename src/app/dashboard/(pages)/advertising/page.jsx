import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12 hub1">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <Link href={`${baseUrl}dashboard`}>
              <i className="fa-solid fa-arrow-left" /> Go to Seller hub
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-6">
          <div className="navigator-breadcrumb-wrapper text-center">
            <h3>Advertising</h3>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-6">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <ul>
              <li>
                <Link href={`${baseUrl}dashboard/advertising/payment-wallet-summary`}>
                  <i className="fa-solid fa-wallet" /> Wallet
                </Link>
              </li>
              {/* <li>
                <a href="#">
                  <Image src={`${baseUrl}front/assets/images/hand_shaking.png`}
                    width={0}
                    height={0}
                    sizes={'100vw'}
                    style={{width:'auto', height:'auto'}}
                    alt='hand_shaking'
                  /> Help
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19 bg-bread">
    <div className="container">
      <div className="breadcrumb-inner">
        <div className="breadcrumb-inner-title">
          <p className="text-white">
            Accelerate Your Growth with Sellora <br /> Empowering Your Journey
            to Unstoppable Growth
          </p>
        </div>
        <div className="advertisingbtn">
          <ul>
            <li>
              
              <Link href={`${baseUrl}dashboard/advertising/start-advertising`}>Start Advertising</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="details_page_outer">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-md-7">
          <div className="adverconbox">
            <h4> Increase Your Orders &amp; Profits with Sellora Ads</h4>
            <div className="heding_fl heding_f2">
              <p></p>
              <div>
              <Image src={`${baseUrl}front/assets/images/adver-icon-img-01.png`}
                    width={0}
                    height={0}
                    sizes={'100vw'}
                    style={{width:'auto', height:'auto'}}
                    alt='hand_shaking'
                  />  
              </div>
              Increase the visibility of your catalogs by reaching the right
              customers.
              <p />
            </div>
            <div className="heding_fl heding_f2">
              <p></p>
              <div> 
                <Image src={`${baseUrl}front/assets/images/adver-icon-img-02.png`}
                    width={0}
                    height={0}
                    sizes={'100vw'}
                    style={{width:'auto', height:'auto'}}
                    alt='hand_shaking'
                  /> 
              </div>
              No upfront cost – only pay when customers interact with your ad!
              <p />
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-5">
          <div className="adverimg"> 
            <Image src={`${baseUrl}front/assets/images/advertising-img-02.jpg`}
                    width={0}
                    height={0}
                    sizes={'100vw'}
                    style={{width:'auto', height:'auto'}}
                    alt='hand_shaking'
                  /> 
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-5">
    <div className="details_page_outer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="stay_informed_heding ads_help_heading">
              How Ads Help Grow Your Orders:
            </div>
          </div>
          <div className="col-lg-4">
            <div className="boxs_1 adver_boxs">
              <div className="heding_fl">
                <div>
                   
                  <Image src={`${baseUrl}front/assets/images/adver-icon-01.jpg`}
                    width={0}
                    height={0}
                    sizes={'100vw'}
                    style={{width:'auto', height:'auto'}}
                    alt='img'
                  /> 
                </div>
                <div>Boost Visibility</div>
              </div>
              <p>
                Ads make your products more visible, even in competitive
                markets.
              </p>
              {/* <div className="explore_button"><a href="#">Explore Account Health</a></div> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="boxs_1 adver_boxs">
              <div className="heding_fl">
                <div> 
                  <Image src={`${baseUrl}front/assets/images/adver-icon-02.jpg`}
                    width={0}
                    height={0}
                    sizes={'100vw'}
                    style={{width:'auto', height:'auto'}}
                    alt='img'
                  /> 
                </div>
                <div>Target the Right Audience</div>
              </div>
              <p>
                Reach customers based on demographics, interests, and behavior.
              </p>
              {/* <ul>
            <li>Festive offers</li>
            <li>Big Billion Days</li>
          </ul>
          <div className="explore_button"><a href="#">Explore Offer</a></div> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="boxs_1 adver_boxs">
              <div className="heding_fl">
                <div> 
                  <Image src={`${baseUrl}front/assets/images/adver-icon-03.jpg`}
                    width={0}
                    height={0}
                    sizes={'100vw'}
                    style={{width:'auto', height:'auto'}}
                    alt='img'
                  /> 
                </div>
                <div>
                  <a href="#">Drive Traffic</a>
                </div>
              </div>
              <p>Ads attract more visitors to your listings or website.</p>
              {/* <div className="explore_button"><a href="#">Explore What's New</a></div> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="boxs_1 adver_boxs">
              <div className="heding_fl">
                <div> 
                  <Image src={`${baseUrl}front/assets/images/adver-icon-04.jpg`}
                    width={0}
                    height={0}
                    sizes={'100vw'}
                    style={{width:'auto', height:'auto'}}
                    alt='img'
                  /> 
                </div>
                <div>Gain Competitive Advantage</div>
              </div>
              <p>Stand out and win sales over competitors.</p>
              {/* <div className="explore_button"><a href="#">Explore Review</a></div> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="boxs_1 adver_boxs">
              <div className="heding_fl">
                <div> 
                  <Image src={`${baseUrl}front/assets/images/adver-icon-05.jpg`}
                    width={0}
                    height={0}
                    sizes={'100vw'}
                    style={{width:'auto', height:'auto'}}
                    alt='img'
                  /> 
                </div>
                <div>Promote Special Offers</div>
              </div>
              <p>Highlight discounts and new launches to draw more sales.</p>
              {/* <div className="explore_button"><a href="#">Explore Review</a></div> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="boxs_1 adver_boxs">
              <div className="heding_fl">
                <div> 
                  <Image src={`${baseUrl}front/assets/images/adver-icon-06.jpg`}
                    width={0}
                    height={0}
                    sizes={'100vw'}
                    style={{width:'auto', height:'auto'}}
                    alt='img'
                  /> 
                </div>
                <div>Optimize with Insights</div>
              </div>
              <p>Use ad data to refine strategies and improve results</p>
              {/* <div className="explore_button"><a href="#">Explore Review</a></div> */}
            </div>
          </div>
          {/* <div className="col-lg-12 text-center mt--20">
        <div className="send"><a href="#">Send your Feedback</a></div>
      </div> */}
        </div>
      </div>
    </div>
  </div>
  <div className="edu-breadcrumb-area breadcrumb-style-2 adver-bottom-img bg-image--19 bg-bread">
    <div className="container">
      <div className="breadcrumb-inner">
        <div className="adver-bottom-content">
          <h4>Start Your Advertising Journey: Reach More, Sell and Growth</h4>
          <p>
            Unlock the Power of Targeted Ads to Drive Growth and Boost Sales
          </p>
          {/* <p className="text-white">Start Your Advertising Journey: Reach More, Sell and Growth</p> */}
        </div>
        <div className="advertisingbtn adverbottombtn">
          <ul>
            <li>
              
              <Link href={`${baseUrl}dashboard/advertising/start-advertising`} >Start Advertising</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Page