"use client"
import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import HelpAndVideoTopSection from '../seller/HelpAndVideoTop'
import { AppContext } from '../contaxtData/contextData'
import TodaySalesSection from './dashboardComp/TodaySalesSection'
import ViewAllSalesInsights from './dashboardComp/ViewAllSalesInsights'

const page = () => {
    const {globalData} = useContext(AppContext)
    const [helpPopup, setHelpPopup] = useState(false)
  
  return (
    <div>
  <div className="rts-navigation-area-breadcrumb">
    <div className="container">
    <div className="row">
                <div className="col-lg-4 col-md-4 col-12 hub1">
                    <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
                      {globalData?.sellor?.selfActive == "Pending" && ( 
                        <Link href={`${baseUrl}seller/al/contact-details`}><i className="fa-solid fa-arrow-right"></i> Go to Onboarding Dashboard</Link>
                      )}
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-6">
                    <div className="navigator-breadcrumb-wrapper text-center">
                        <h3 className="animated fadeIn">Dashboard</h3>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-6">
                     <HelpAndVideoTopSection />
                </div>
            </div>
     
    </div>
  </div>
  <div className="mb--50">
    <div className="container">
      <div className="row">
        <TodaySalesSection />
        <ViewAllSalesInsights />
      </div>
    </div>
  </div>
  <div className="stay_informed">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="stay_informed_heding">Stay informed with updates through Alerts &amp; Notifications and Explore New
            Features.</div>
        </div>
        <div className="col-lg-3">
          <div className="boxs_1">
            <div className="heding_fl">
              <div><img src={`${baseUrl}front/assets/images/account_health.jpg`} /></div>
              <div>Account Health</div>
            </div>
            <p>Track and manage your account s
              performance with Account Health
              insights.</p>
            <div className="explore_button"><Link href="#">Explore Account Health</Link></div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="boxs_1">
            <div className="heding_fl">
              <div><img src={`${baseUrl}front/assets/images/Celebration-Offers.jpg`} /></div>
              <div>Celebration Offers</div>
            </div>
            <ul>
              <li>Festive offers</li>
              <li>Big Billion Days</li>
            </ul>
            <div className="explore_button"><Link href="#">Explore Offer</Link></div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="boxs_1">
            <div className="heding_fl">
              <div><img src={`${baseUrl}front/assets/images/new.jpg`} /></div>
              <div><Link href="#">What's New</Link></div>
            </div>
            <p>Check out our latest offers and
              exciting new deals</p>
            <div className="explore_button"><Link href="#">Explore What's New</Link></div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="boxs_1">
            <div className="heding_fl">
              <div><img src={`${baseUrl}front/assets/images/Speed-up.jpg`} /></div>
              <div>Speed up your growth</div>
            </div>
            <p>Grow your business with Sellora!
              Turn shoppers into customers with
              Sellora Sponsored Search ads.</p>
            <div className="explore_button"><Link href="#">Explore Review</Link></div>
          </div>
        </div>
        <div className="col-lg-12 text-center mt--20">
          <div className="send"><Link href="#">Send your Feedback</Link></div>
        </div>
      </div>
    </div>
  </div>

  {/* help popup */}

<div className="help-popup" id="helpPopup" style={{display:`${helpPopup?"block":"none"}`}} >
    <button className="close-btn"  onClick={()=>setHelpPopup(false)}>×</button>
    <Link href={`${baseUrl}dashboard/help`}>
      <div className="item"> 
      <img src={`${baseUrl}front/assets/images/bx_support.png`} /> 
      <div className="item-content">
        <h4>Contact support</h4>
        <p>Need Help? Contact Our Support Team.</p>
      </div>
     </div>
   </Link>

<a href="/dashboard/help/my-ticket/All">
    <div className="item">
      <img src={`${baseUrl}front/assets/images/flag.png`} />
      <div className="item-content">
        <h4>Your Tickets</h4>
        <p>Track and manage your support tickets.</p>
      </div>
    </div>
  </a>

<a href="/dashboard/help-center/featured-guides">
   <div className="item">
      <img src={`${baseUrl}front/assets/images/not_pad.png`} />
      <div className="item-content">
        <h4>Seller Help Center</h4>
        <p>Explore helpful articles and guides for using Seller Center effectively.</p>
      </div>
    </div>
</a>

  </div>

  <button className="help-button" onClick={()=>setHelpPopup(!helpPopup)}>
    <img src={`${baseUrl}front/assets/images/help_hand.png`} /> Help
  </button>

  {/* <script>
    function togglePopup() {
      const popup = document.getElementById('helpPopup');
      popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    }
  </script> */}


</div>
  )
}

export default page