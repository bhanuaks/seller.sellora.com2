"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import Sidebar from '../afterlogincomponent/Sidebar'
import Link from 'next/link'
import TopButton from '../afterlogincomponent/TopButton'
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import { AppContext } from '@/app/contaxtData/contextData'
import $ from 'jquery'
import { baseUrl } from '@/Http/helper'
import { useRouter } from 'next/navigation'
import  '../../../../../public/front/error.css'
import  '../../../../../public/front/loader.css'
import { ToastContainer, toast } from 'react-toastify';
import CompletePercentage from '../afterlogincomponent/completePercentage'

function page() {

  
  const {globalData, setGlobalData} = useContext(AppContext)
    const [errors, setErrors] = useState({});
    const [isSubmiting, setIsSubmiting] = useState(false);

  const [sellor, setSellor] = useState(null)
  const router = useRouter()
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
             // check complete step
          if(!res.data.data.complete_step || res.data.data.complete_step < 1){
            router.push('/seller/al/contact-details')
          }
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
  setErrors({})
  setIsSubmiting(true)
  fetch(`${baseUrl}api/seller/update-profile?update=display_information`,{
    method:"POST",
    body:JSON.stringify(sellor)
  }).then((response)=>{
    setIsSubmiting(false)
      if(!response.ok){
        throw new Error('Network Error') 
      }
      return response.json();
  }).then((res)=>{ 
      if(res.status){
        toast.success('Success! Display information saved.');
         window.location.href=`${baseUrl}seller/al/pickup-address`
        // router.push('/seller/al/pickup-address')
      }else if(res.data.status_code==403){
        setErrors(res.data.errors)
      }
  })


}




  return (
    <div className="seller_panel_mmmm">

        <ToastContainer 
                            position="top-center"
                            autoClose={3000} 
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />
                          {/* loader start */} 
                     <div className="loaderouter"><div className="loader"></div></div> 
                    {/* loader end */}


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
    <form action="#" onSubmit={(e)=>submitUpdateForm(e)}> 
    <div className="row">
      <div className="col-lg-3">
      <div className="left_side_panel">
          {/*  <div className="meter orange nostripes">
    <span style="width: 15%"></span>
  </div> */}
          <div className="card-6-inner">
            <p>Your onboarding completion status</p>
            <div className="meter orange nostripes">
              
              <CompletePercentage sellor={sellor}/>
            </div>
          </div>
            <Sidebar sellor={sellor}/>
       
        </div>
      </div>
      <div className="col-lg-6">
        <div className="mm_rts-cart-list-area2">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="nnn_dform">
                <h2>Display information</h2>
                <div className="registration_form_single-input">
                  <label htmlFor="f-name">Display Name<span className='mandatory_field'>*</span></label>
                  <input type="text" 
                    name='display_name'
                    value={sellor && sellor.display_name?sellor.display_name:''}
                    onChange={(e)=>updateInputData(e)}
                    />
                    {errors.display_name && errors.display_name != ""? ( 
                          <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.display_name}</span>
                      ):''}
                </div>
                <div className="registration_form_single-input">
                  <label htmlFor="f-name">Business Description<span className='mandatory_field'>*</span></label>
                  <textarea 
                   name='business_description'
                   value={sellor?.business_description || ''}
                   onChange={(e)=>updateInputData(e)}
                   />
                   {errors.business_description && errors.business_description != ""? ( 
                          <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.business_description}</span>
                      ):''}
                </div>
                <button className="save" disabled={isSubmiting}>{isSubmiting?"Please wait..":"Save"}</button>
              </div>
            </div>
          </div>
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
              {/*    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           How do you plan to utilize this data in your business strategy?
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
        </div>
      </div> */}
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
    </form>
  </div>
</div>

  )
}

export default page