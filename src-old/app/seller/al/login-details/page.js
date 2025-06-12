"use client"
import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../afterlogincomponent/Sidebar'
import Link from 'next/link'
import TopButton from '../afterlogincomponent/TopButton'
import { AppContext } from '@/app/contaxtData/contextData'
import { baseUrl } from '@/Http/helper'
import CompletePercentage from '../afterlogincomponent/completePercentage'

function page() {




  
    const {globalData, setGlobalData} = useContext(AppContext)
    const [sellor, setSellor] = useState(null)
    useEffect(()=>{ 
      if(globalData.sellor){
        fetch(`${baseUrl}api/seller/get-profile?user_id=${globalData.sellor._id}`,{
          method:"GET", 
        }).then((response)=>{
            if(!response.ok){
              throw new Error('Network Error') 
            }
            return response.json();
        }).then((res)=>{
            if(res.status){
              setSellor(res.data.data)
            }
        })
      }
  
    },[globalData.sellor])
  
  const updateInputData= (e)=>{
  
    const {name, value} = e.target;
      if(name=="mobile"){
          const numericValue = value.replace(/[^0-9]/g, '');
          setSellor((preData)=>({
            ...preData,
            [name]:numericValue
          })) 
        return
      }
  
      setSellor((preData)=>({
        ...preData,
        [name]:value
      }))
  }
  
  function submitUpdateForm(e){
    e.preventDefault(); 

    fetch(`${baseUrl}api/seller/update-profile?update=contact_details1`,{
      method:"POST",
      body:JSON.stringify(sellor)
    }).then((response)=>{
        if(!response.ok){
          throw new Error('Network Error') 
        }
        return response.json();
    }).then((res)=>{
        if(res.status){
           
        }
    })
  
  
  }

  return (
    <div className="seller_panel_mmmm">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-3" />
      <div className="col-lg-6">
        <div className="onboarding_form">
          <h3>Onboarding Dashboard</h3>
        </div>
      </div>
      <div className="col-lg-3">
      <TopButton/>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3">
      <div className="left_side_panel">
          {/*  <div className="meter orange nostripes">
    <span style="width: 15%"></span>
  </div> */}
          <div className="card-6-inner">
            <p>Your onboarding completion status</p>
            <div className="meter orange nostripes">
              {" "}
              <CompletePercentage sellor={sellor}/>

            </div>
          </div>
            <Sidebar sellor={sellor}/>
       
        </div>
      </div>
      <div className="col-lg-6">
        <div className="mm_rts-cart-list-area2">
          <form action="#" onSubmit={(e)=>submitUpdateForm(e)} >
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="nnn_dform">
                <h2>Login Details</h2>
                <div className="registration_form_single-input">
                  <label htmlFor="f-name">Display Name</label>
                  <input type="text"
                  name='display_name' 
                  value={sellor?sellor.display_name:''} 
                  onChange={(e)=>updateInputData(e)}
                  />
                </div>
                <div className="registration_form_single-input">
                  <label htmlFor="f-name">Your Mobile Number</label>
                  <div className="country_code_outer">
                    <input
                      type="text"
                      id="mobile_code"
                      placeholder=" " 
                      name='mobile' 
                      value={sellor?sellor.mobile:''} 
                      onChange={(e)=>updateInputData(e)}
                    />
                  </div>
                </div>
                <div className="registration_form_single-input">
                  <label htmlFor="f-name">Your Email address</label>
                  <input type="text" 
                   name='email' 
                   value={sellor?sellor.email:''}
                   onChange={(e)=>updateInputData(e)}
                   />
                </div>
                <div className="registration_form_single-input">
                  <label htmlFor="f-name">Password</label>

                  <input type="text" 
                   name='password'
                   value={sellor?sellor.show_password:''}
                   onChange={(e)=>updateInputData(e)}
                   />

                </div>
                <button className="save">Save</button>
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="breadcrumb_dashboard_right_box">
          <div className="need-help">
            {" "}
            <i className="far fa-question-circle" aria-hidden="true" /> Need
            help?{" "}
          </div>
          <p>
            Our expert team is here to guide you through setting up your shop on
            Sellora.
          </p>
          <div className="send_request_for_call">
            {" "}
            <Link href="#">Send request for call</Link>{" "}
          </div>
        </div>
        <div className="breadcrumb_dashboard_right_box">
          <div className="need-help">Frequently Asked Questions</div>
          <div className="faq_outer">
            <div className="accordion" id="accordionExample">
         
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    {" "}
                    How do you plan to utilize this data in your business
                    strategy?{" "}
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-0">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-0"
                    aria-expanded="false"
                    aria-controls="collapse-0"
                  >
                    {" "}
                    Where will this information be used?{" "}
                  </button>
                </h2>
                <div
                  id="collapse-0"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-0"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    {" "}
                    In which sections of your research paper will you
                    incorporate this information?{" "}
                  </button>
                </h2>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-3"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
          <div className="send_request_for_call">
            {" "}
            <Link href="#">More</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default page