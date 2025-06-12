
"use client"
import { baseUrl, convertTo12Hour } from '@/Http/helper'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import CouponProductSection from './CouponProductSection'

function Page() {

  const params = useParams();
  const offerId = params.offerId
  const [selectedProduct, setSelectedProduct] = useState([]) 
  const [coupon, setCoupon] = useState(null)
  
  useEffect(()=>{

    if(!offerId) return  

    fetch('/api/seller/coupons', {
      method:"POST",
      body:JSON.stringify({offerId})
    })
    .then((response)=>{
      if(!response.ok){
        throw new Error("Server Error")
      }
      return response.json();
    })
    .then((res)=>{
      if(res){ 
        setCoupon(res.data.coupon)
        setSelectedProduct(res.data.selectedProduct)
      }else{
         setCoupon(null)
          Swal.fire({
          title:"Error",
          icon:"error",
          text:res.data.message
        })
      }
    })
    .catch((error)=>{
        console.log(error);
        Swal.fire({
          title:"Error",
          icon:"error",
          text:error.message
        })
    })

  },[offerId])

  if(!coupon){
    return (
      <div style={{height:'300px'}}></div>
    )
  }

  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 hub1">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            {/* <a href="#"><i className="fa-solid fa-arrow-left"></i> Go to Seller hub</a> */}
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="navigator-breadcrumb-wrapper text-center">
            <h3>Discount Coupon</h3>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <ul>
              {/* <li><a href="#"><i className="fa-solid fa-wallet"></i> Wallet</a> </li> */}
              {/* <li>
                <a href="#">
                <Image src={`${baseUrl}front/assets/images/hand_shaking.png`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt=''
                  loading='lazy'
                  style={{width:"auto", height:"auto"}}
                  />
                   Help
                </a>{" "}
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="pt--20 pb--30">
    <div className="container">
      <div className="col-lg-10 offset-lg-1">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="discount_weowe4_box">
              <div className="listing234_e4">
                <ul>
                  <li>
                    Extra {coupon?.discount || 0}% off <span>{coupon?.discount || 0}% off</span>
                  </li>
                  <li>Offer ID: {coupon?.offerId || 0}</li>
                  <li>{coupon?.remark || 0}</li>
                  <li>Starts on: {coupon?.startDate && new Date(coupon.startDate).toLocaleDateString("en-Us", {
                  weekday:"short",
                  year:"numeric",
                  month:"short",
                  day:"2-digit",
                })}  ({coupon?.startTime && convertTo12Hour(coupon.startTime)})</li>
                  <li>Ends on: {coupon?.endDate && new Date(coupon.endDate).toLocaleDateString("en-Us", {
                  weekday:"short",
                  year:"numeric",
                  month:"short",
                  day:"2-digit",
                })}  ({coupon?.endTime && convertTo12Hour(coupon.endTime)})</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CouponProductSection coupon={coupon} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
  
</>

  )
}

export default Page