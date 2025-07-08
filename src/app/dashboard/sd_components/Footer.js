"use client";
import { baseUrl } from '@/Http/helper';
import Link from 'next/link'
import React, { useState } from 'react'

const Footer = () => {
      const [helpPopup, setHelpPopup] = useState(false)
  
  return (
    <>

    
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

<Link href="/dashboard/help/my-ticket/All">
    <div className="item">
      <img src={`${baseUrl}front/assets/images/flag.png`} />
      <div className="item-content">
        <h4>Your Tickets</h4>
        <p>Track and manage your support tickets.</p>
      </div>
    </div>
  </Link>

<a href="#">
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

  {/* rts footer one area end */}
  <div className="rts-footer-area pt--50 pb--90">
    <div className="container-fluid">
      <div className="container">
        <div className="col-lg-10 offset-lg-1">

          {/* <div className="footer_link">
            <ul>
              <li>
                <Link href="#">About Sellora</Link>
              </li>
              <li>
                <Link href="#">Community</Link>
              </li>
              <li>
                <Link href="#">Announcements</Link>
              </li>
              <li>
                <Link href="#">Seller Information Center</Link>
              </li>
              <li>
                <Link href="#">Policies</Link>
              </li>
              <li>
                <Link href="#">Help &amp; Connect</Link>
              </li>
            </ul>
          </div> */}
          
          <div className="second_footer_link">
            <p>
              Copyright © 2024-2025 Sellora, LLC. All Rights Reserved. 
            </p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  
</>

  )
}

export default Footer