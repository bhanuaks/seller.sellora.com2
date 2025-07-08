"use client"
import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

function Page() {

    const [basicSellerModal, setBasicSellerModal] = useState(false);
    const [RisingSeller, setRisingSeller] = useState(false);
    const [advancedSeller, setAdvancedSeller] = useState(false);
    const [premiumSeller, setPremiumSeller] = useState(false);


  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div
            className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb"
            style={{ float: "left" }}
          >
            <ul>
              <li>
                <a href="#">Your Seller Tier Details</a>{" "}
              </li>
            </ul>
          </div>
        </div>
       
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <div className="navigator-breadcrumb-wrapper text-center mb--20">
          <h3 className="animated fadeIn">
            Grow Your Sales with Sellora's Tier System{" "}
          </h3>
          <p style={{ marginBottom: 0 }}>
            Unlock exclusive benefits as you level up!{" "}
          </p>
          <p style={{ marginBottom: 0 }}>
            The more you sell, the more you earn! Sellora's tier system rewards
            high-performing sellers with lower fees, better visibility, and
            premium features
          </p>
        </div>
      </div>
    </div>
    <div className="tierSystemWrapper">
      <div className="rating-container giveratings d-flex align-items-center">
        <div className="rating-item">
          <div className="rating-circle bestSeller">B</div>
          <p>Basic Seller</p>
          <Link
            href="#"
            className="text-primary"
             onClick={(e)=>setBasicSellerModal(true)}
          >
            View Criteria
          </Link>
        </div>
        <div className="rating-item">
          <div className="rating-circle risingSeller">R</div>
          <p>Rising Seller</p>
          <Link
            href="#"
            className="text-primary"
             onClick={(e)=>setRisingSeller(true)}
          >
            View Criteria
          </Link>
        </div>
        <div className="rating-item">
          <div className="rating-circle adavncedSeller">A</div>
          <p>Advanced Seller</p>
          <Link
            href="#"
            className="text-primary"
             onClick={(e)=>setAdvancedSeller(true)}
          >
            View Criteria
          </Link>
        </div>
        <div className="rating-item">
          <div className="rating-circle premiumSeller">P</div>
          <p>Premium Seller</p>
          <Link
            href="#"
            className="text-primary"
             onClick={(e)=>setPremiumSeller(true)}
          >
            View Criteria
          </Link>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="discount_weowe4_box chartcontainer box-style2">
          <div className="tierSystemWrapper currentTier">
            <div className="rating-container giveratings d-flex gap-3">
              <div className="rating-item d-flex style2">
                <div className="rating-circle bestSeller">B</div>
              </div>
              <div className="mcontentn">
                <h2>You are in Basic Tier</h2>
                <div className="clear-fix" />
                <p>
                  (Based on your performance from 1 Oct 2024 to 31 Dec 2024.
                  Your benefits will be applicable until 4 Apr 2025)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <div className="discount_weowe4_box chartcontainer h-100 box-style2">
          <div className="tierSystemWrapper currentTier">
            <div className="rating-container giveratings d-flex gap-3">
              <div className="rating-item d-flex style2">
                <div className="rating-circle benefitmainicon">
                   
                  <Image src={`${baseUrl}front/assets/images/benefits.png`}
                    alt='icon'
                    width={0}
                    height={0}
                    sizes='100vw'  
                    style={{width:"auto", height:"auto"}} 
                    />  
                </div>
              </div>
              <div className="mcontentn">
                <h2>Your Current Benefits</h2>
                <ul className="normalList2">
                  <li> 
                    <Image src={`${baseUrl}front/assets/images/payouts.png`}
                    alt='icon'
                    width={0}
                    height={0}
                    sizes='100vw'  
                    style={{width:"auto", height:"auto"}} 
                    />  
                    Faster Payouts -
                    Get a larger portion of your balance paid out the next day
                    for better cash flow.{" "}
                  </li>
                  <li> 
                    <Image src={`${baseUrl}front/assets/images/shipping.png`}
                    alt='icon'
                    width={0}
                    height={0}
                    sizes='100vw'  
                    style={{width:"auto", height:"auto"}} 
                    />  
                    Discounted Shipping Labels - Enjoy up to 25% off on select
                    fast shipping services.{" "}
                  </li>
                  <li> 
                    <Image src={`${baseUrl}front/assets/images/increased.png`}
                    alt='icon'
                    width={0}
                    height={0}
                    sizes='100vw'  
                    style={{width:"auto", height:"auto"}} 
                    />  
                    Increased Visibility - Higher-ranking listings attract more
                    customers and boost sales.{" "}
                  </li>
                  <li> 
                    <Image src={`${baseUrl}front/assets/images/customer.png`}
                    alt='icon'
                    width={0}
                    height={0}
                    sizes='100vw'  
                    style={{width:"auto", height:"auto"}} 
                    />  
                    Better Customer Trust - Meeting quality standards enhances
                    your reputation and builds buyer
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-12" style={{ marginTop: 50 }}>
        <div className="navigator-breadcrumb-wrapper text-center mb--20">
          <h3 className="animated fadeIn">Your Performance</h3>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div>
      <div className="table-responsive performancetable">
        <table
          className="table table-bordered table-striped br-none"
          style={{ marginTop: 10 }}
        >
          <thead className="table__head">
            <tr className="winner__table">
              <th>Service Quality Score </th>
              <th>
                <div className="d-flex align-items-center justify-content-center gap-3">
                  <div className="">
                    Basic Seller <br />{" "}
                    <span className="text-primary">My Status </span>
                  </div>
                  <div className="color-primary">36/100 </div>
                </div>
              </th>
              <th>
                <div className="d-flex align-items-center justify-content-center gap-3">
                  <div className="">
                    Rising Seller <br /> Next Level Target
                  </div>
                  <div className="color-primary">45/100 </div>
                </div>
              </th>
              <th>
                <div className="d-flex align-items-center justify-content-center gap-3">
                  <div className="">
                    Advanced Seller <br />
                    Next Level Target
                  </div>
                </div>
              </th>
              <th>
                Premium Seller
                <br /> Next Level Target
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="winner__table tablenomargin">
              <td>Total Cancellation Rate </td>
              <td>
                0.32% | <span className="color-primary">7/16</span>
              </td>
              <td>0.25</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr className="winner__table tablenomargin">
              <td>Total Late Dispatch Rate </td>
              <td>
                0.71% | <span className="color-primary">7/16</span>
              </td>
              <td>0.25</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr className="winner__table tablenomargin">
              <td>Seller Controllable Return Rate </td>
              <td>
                3.47% | <span className="color-primary">7/16</span>
              </td>
              <td>0.25</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr className="winner__table tablenomargin">
              <td>Out of Stock Rate </td>
              <td>
                3.47% | <span className="color-primary">7/16</span>
              </td>
              <td>0.25</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr className="winner__table tablenomargin">
              <td>Product Listing Quality Score</td>
              <td>
                3.47% | <span className="color-primary">7/16</span>
              </td>
              <td>0.25</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  
{/* modal start */}
{basicSellerModal && (
<>
 
<div className="modal fade show d-block view_reasons" tabIndex={-1} role="dialog">
    <div className="modal-dialog modalsize2 modal-dialog-centered">
      <div className="modal-content">
      <span className="btnclosemodal2" onClick={() => setBasicSellerModal(false)}>
          <Image 
                           src={`${baseUrl}front/assets/images/close.png`} 
                           alt="ico" 
                           width={0} 
                           height={0} 
                           sizes="100vw" 
                           style={{ width: 'auto', height: 'auto' }} 
                         />
        </span>
        <div className="modalheader text-center">
          <div className="tierSystemWrapper " style={{ margin: 0 }}>
            <div className="rating-container giveratings d-flex align-items-center justify-content-center">
              <div className="rating-item">
                <div className="rating-circle bestSeller">B</div>
                <p>Basic Seller</p>
                <span style={{ color: "#f58620" }}>Criteria</span>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-body">
          <ul className="normalList2">
            <li>
              On-Time Delivery - Maintain 90%+ on-time delivery in the last 90
              days.
            </li>
            <li>
              Low Cancellation Rate - Keep cancellations at 2.5% or lower in the
              last 90 days.
            </li>
            <li>
              Fast Response Rate - Achieve a 90%+ response rate to customer
              inquiries in the last 30 days.
            </li>
            <li>
              Shipping Performance - Maintain a minimum 5% shipping score at the
              latest evaluation.
            </li>
            <li>
              Content Quality - Ensure a 65% or higher content quality score at
              the time of review.
            </li>
            <li>
              Competitive Pricing - Maintain at least 60% price competitiveness
              during evaluations.
            </li>
            <li>
              Consistent Sales - Process 100+ orders within the last 90 days.
            </li>
            <li>Active Seller - Be active on Sellora for at least 90 days.</li>
            <li>
              Trust &amp; Compliance - Have zero violations of Trust &amp;
              Safety or Performance Standards.
            </li>
          </ul>
          <h5 className="color-primary">Benefits</h5>
          <ul className="normalList2">
            <li>
              Faster Payouts - Get a larger portion of your balance paid out the
              next day for better cash flow.
            </li>
            <li>
              Discounted Shipping Labels - Enjoy up to 25% off on select fast
              shipping services.
            </li>
            <li>
              Increased Visibility - Higher-ranking listings attract more
              customers and boost sales.
            </li>
            <li>
              Better Customer Trust - Meeting quality standards enhances your
              reputation and builds buyer confidence.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
</>
)}

{RisingSeller && ( 
    <div className="modal fade show d-block view_reasons" tabIndex={-1} role="dialog">
    <div className="modal-dialog modalsize2 modal-dialog-centered">
      <div className="modal-content">
      <span className="btnclosemodal2" onClick={() => setRisingSeller(false)}>
          <Image 
                           src={`${baseUrl}front/assets/images/close.png`} 
                           alt="ico" 
                           width={0} 
                           height={0} 
                           sizes="100vw" 
                           style={{ width: 'auto', height: 'auto' }} 
                         />
        </span>
        <div className="modalheader text-center">
          <div className="tierSystemWrapper " style={{ margin: 0 }}>
            <div className="rating-container giveratings d-flex align-items-center justify-content-center">
              <div className="rating-item">
                <div className="rating-circle risingSeller">R</div>
                <p>Rising Seller</p>
                <span style={{ color: "#f58620" }}>Criteria</span>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-body">
          <ul className="normalList2">
            <li>
              On-Time Delivery Mastery - Ensure 90%+ of orders arrive on time over
              the past 90 days.
            </li>
            <li>
              Minimal Cancellations - Keep the cancellation rate at 2.5% or lower
              within the last 90 days.
            </li>
            <li>
              Responsive &amp; Reliable - Maintain a 90%+ response rate to
              customer inquiries over the past 30 days.
            </li>
            <li>
              Strong Shipping Performance - Achieve a minimum 5% shipping score at
              the latest evaluation.
            </li>
            <li>
              High-Quality Listings - Maintain a content quality score of 65% or
              higher at the time of review.
            </li>
            <li>
              Competitive Pricing - Ensure at least 60% price competitiveness when
              evaluated.
            </li>
            <li>
              Consistent Sales Activity - Process 200+ orders within the last 90
              days.
            </li>
            <li>
              Active &amp; Committed - Operate on Sellora for a minimum of 90
              days.
            </li>
            <li>
              Trust &amp; Compliance - Maintain a clean record with zero
              violations of Trust &amp; Safety or Performance Standards.
            </li>
          </ul>
          <h5 className="color-primary">Benefits</h5>
          <ul className="normalList2">
            <li>
              Faster Payouts - Receive a larger portion of your eligible balance
              paid out the next day for improved cash flow.
            </li>
            <li>
              Shipping Label Discounts - Enjoy up to 25% off on select fast
              shipping services at Rising Seller or higher tiers.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
)}

{advancedSeller && ( 
    <div className="modal fade show d-block view_reasons" tabIndex={-1} role="dialog">
    <div className="modal-dialog modalsize2 modal-dialog-centered">
      <div className="modal-content">
      <span className="btnclosemodal2" onClick={() => setAdvancedSeller(false)}>
          <Image 
                           src={`${baseUrl}front/assets/images/close.png`} 
                           alt="ico" 
                           width={0} 
                           height={0} 
                           sizes="100vw" 
                           style={{ width: 'auto', height: 'auto' }} 
                         />
        </span>
        <div className="modalheader text-center">
          <div className="tierSystemWrapper " style={{ margin: 0 }}>
            <div className="rating-container giveratings d-flex align-items-center justify-content-center">
              <div className="rating-item">
                <div className="rating-circle adavncedSeller">A</div>
                <p>Advanced Seller</p>
                <span style={{ color: "#f58620" }}>Criteria</span>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-body">
          <ul className="normalList2">
            <li>
              Reliable On-Time Delivery - Maintain an On-Time Delivery Rate of
              92.5% or higher in the last 90 days.
            </li>
            <li>
              Low Cancellation Rate - Keep cancellations at or below 2.0% within
              the last 90 days.
            </li>
            <li>
              Quick &amp; Effective Communication - Achieve a Seller Response Rate
              of 92.5% or higher over the past 30 days.
            </li>
            <li>
              Optimized Shipping Performance - Secure a minimum 25% Shipping Score
              at the latest refresh.
            </li>
            <li>
              High-Quality Listings - Maintain a Content Quality Score of 70% or
              higher at the time of review.
            </li>
            <li>
              Competitive Pricing - Ensure at least 60% Price Competitiveness
              during evaluations.
            </li>
            <li>
              Active Order Flow - Process a minimum of 500 orders in the last 90
              days.
            </li>
            <li>
              Consistent Marketplace Presence - Remain active on Sellora for at
              least 90 days.
            </li>
            <li>
              Compliance &amp; Trust - Maintain a clean record with no Trust &amp;
              Safety or Performance Standard violations.
            </li>
          </ul>
          <h5 className="color-primary">Benefits</h5>
          <ul className="normalList2">
            <li>
              Pro Listing Referral Fee Discounts - Get a 5% referral fee discount
              on Pro Listings that meet fast &amp; free shipping and competitive
              pricing requirements.
            </li>
            <li>
              Special Capital Rates &amp; Terms - Access exclusive financing
              offers with extended repayment periods through Capital by Walmart.
            </li>
            <li>
              Review Accelerator Credit - Receive a $50 monthly credit to boost
              your reviews and enhance your seller reputation.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  
)}


{premiumSeller && ( 
     <div className="modal fade show d-block view_reasons" tabIndex={-1} role="dialog">
     <div className="modal-dialog modalsize2 modal-dialog-centered">
       <div className="modal-content">
       <span className="btnclosemodal2" onClick={() => setPremiumSeller(false)}>
          <Image 
                           src={`${baseUrl}front/assets/images/close.png`} 
                           alt="ico" 
                           width={0} 
                           height={0} 
                           sizes="100vw" 
                           style={{ width: 'auto', height: 'auto' }} 
                         />
         </span>
         <div className="modalheader text-center">
           <div className="tierSystemWrapper " style={{ margin: 0 }}>
             <div className="rating-container giveratings d-flex align-items-center justify-content-center">
               <div className="rating-item">
                 <div className="rating-circle premiumSeller">P</div>
                 <p>Premium Seller </p>
                 <span style={{ color: "#f58620" }}>Criteria</span>
               </div>
             </div>
           </div>
         </div>
         <div className="modal-body">
           <ul className="normalList2">
             <li>
               Exceptional On-Time Delivery - Maintain an On-Time Delivery Rate of
               95% or higher in the last 90 days.
             </li>
             <li>
               Minimal Cancellations - Keep the cancellation rate at or below 1.5%
               over the past 90 days.
             </li>
             <li>
               Fast &amp; Reliable Responses - Achieve a Seller Response Rate of
               95% or higher within the last 30 days.
             </li>
             <li>
               Strong Shipping Performance - Secure a Shipping Score of at least
               50% at the latest refresh.
             </li>
             <li>
               High-Quality Listings - Maintain a Content Quality Score of 75% or
               higher at the time of review.
             </li>
             <li>
               Competitive Pricing - Ensure at least 60% Price Competitiveness when
               evaluated.
             </li>
             <li>
               Consistent Order Volume - Process a minimum of 1000 orders in the
               last 90 days.
             </li>
             <li>
               Active &amp; Engaged - Remain active on Sellora for at least 90
               days.
             </li>
             <li>
               Trust &amp; Compliance - Maintain a clean record with no violations
               of Trust &amp; Safety or Performance Standards.
             </li>
           </ul>
           <h5 className="color-primary">Benefits</h5>
           <ul className="normalList2">
             <li>
               Faster Payouts - Receive a larger portion of your eligible balance
               paid out the next day for improved cash flow.
             </li>
             <li>
               Shipping Label Discounts - Enjoy up to 25% off on select fast
               shipping services at Rising Seller or higher tiers.
             </li>
           </ul>
         </div>
       </div>
     </div>
   </div> 
  
)}

{basicSellerModal && <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>}
{RisingSeller && <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>}
{advancedSeller && <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>}
{premiumSeller && <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>}



</>

  )
}

export default Page