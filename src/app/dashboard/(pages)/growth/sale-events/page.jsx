"use client"
import EventSkelton from '@/app/skeleton_loader/EventSkelton'
import { baseUrl, checkDiscountApplyTime, websiteUrl } from '@/Http/helper'
import { fileBasePath } from '@/Http/urlHelper'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

function Page() {


  const [status, setStatus] = useState("Upcoming")
  const [eventList, setEventList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(()=>{

    setIsLoading(true)
    fetch(`/api/seller/events?status=${status}`)
    .then((response)=>{
      if(!response.ok){
        throw new Error("Internal Server Error");
      }
      return response.json();
    })
    .then((res)=>{ 
      if(res.status){
        setEventList(res.data.events);
      }
    })
    .catch((error)=>{
      Swal.fire(error.message)
    }).finally(()=>{
      setIsLoading(false)
    })

  },[status])


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
            <h3>Sale Events</h3>
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
                  style={{width:"auto", height:"auto"}} /> 
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
      <div className="row">
        <div className="col-lg-12">
          <div className="sale_tab">
            <ul>
              <li>
                <Link href={`${baseUrl}dashboard/growth/sale-events`} className={status=="Upcoming"?"active22":""} 
                onClick={(e)=>{
                  e.preventDefault();
                  setStatus("Upcoming")
                }}>
                  Upcoming
                </Link>
              </li>
              <li>
                <Link href="#" className={status=="Active"?"active22":""} 
                 onClick={(e)=>{
                  e.preventDefault();
                  setStatus("Active")
                }}
                >Active</Link>
              </li>
              <li>
                <Link href="#" className={status=="Expired"?"active22":""} 
                 onClick={(e)=>{
                  e.preventDefault();
                  setStatus("Expired")
                }}
                >Expired</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        {!isLoading && eventList.length == 0 && (
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100px'}}>
            <h6 style={{ 
                  border: '1px solid #d7bebe',
                  padding: '15px',
                  fontSize: '15px',
                  borderRadius: '5px'
                }}
    >{status} Event Not Found!</h6>
          </div>
        )}
        {isLoading && (
        <div className='row'> 
            <EventSkelton />
            <EventSkelton />
            <EventSkelton />
            <EventSkelton />
            <EventSkelton />
            <EventSkelton />
        </div>
        )}
        
        {eventList.length>0 && eventList.map((event, index)=>(

          <div className="col-lg-4" key={index}>
          <div className="upcoming_event" >
            <div className="d-flex align-items-center"  style={{ opacity:`${status=="Expired"?"0.4":"1"}`}}>
              {/* black_friday christmas_sale */}
              <div className="_immg_934">
              <img src={`${websiteUrl}${event.image}`} 
                  alt=''
                  />  
              </div>
              <div className="_wier_heading_df">
                <h2>{event.eventName}</h2>
                <p>Open for participation Last day: {new Date(event.applyBeforDate).toLocaleDateString('en-US', {
                  day:"2-digit",
                  month:"long"
                })}
                </p>
              </div>
            </div>
            <div className="list_34847" style={{ opacity:`${status=="Expired"?"0.4":"1"}`}}>
              <ul>
                <li>
                <img src={`/front/assets/images/cart_01.jpg`} 
                  alt=''  />   
                  More Orders
                </li>
                <li>
                <img src={`/front/assets/images/visibility.jpg`} 
                  alt=''  />   
                  More Visibility
                </li>
                <li>
                <img src={`/front/assets/images/shoppers.jpg`} 
                  alt='' />   
                  More Shoppers
                </li>
              </ul>
              <div className="clearfix" />
            </div>
            <div className="apply_button_e4437983">
               {status=="Expired"? ( 
                    <span href={`/dashboard/growth/event/${event.slug}`} aria-disabled={true} >Expired</span> 
               ):(() => {
                // if(checkDiscountApplyTime(event.startDate, event.closeDate, event.startTime, event.closeTime)){
                  return (
                    <Link href={`/dashboard/growth/event/${event.slug}`}>
                      {event.appliedInfo ? "Edit" : "Apply"}
                    </Link>  
                  )
                // }else{
                //   return (
                //       <span >
                //       Expired 
                //       </span>  
                //     )
                   
                // }
                 
                })()} 
            </div>
          </div>
        </div>

        ))}
        
      </div>
    </div>
  </div>
</>

  )
}

export default Page