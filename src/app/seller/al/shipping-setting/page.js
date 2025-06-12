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
import '../../../../../public/front/error.css'
import '../../../../../public/front/loader.css'
import { ToastContainer, toast } from 'react-toastify';
import CompletePercentage from '../afterlogincomponent/completePercentage'

const page = () => {

  
  const { globalData, setGlobalData } = useContext(AppContext)

  const countryRef = useRef()
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [sellor, setSellor] = useState(null);
  const [shippingSetting, setShippingSetting] = useState({
    shipping_setting:1,
    shipping_rate:0
  })


  useEffect(() => {
    if (globalData.sellor) {
      $('.loaderouter').css('display', 'flex')
      fetch(`${baseUrl}api/seller/get-profile?user_id=${globalData.sellor._id}&with_data=shippingSetting`, {
        method: "GET",
      }).then((response) => {
        if (!response.ok) {
          $('.loaderouter').css('display', 'none')
          throw new Error('Network Error')
        }
        return response.json();
      }).then((res) => {
        $('.loaderouter').css('display', 'none')
        if (res.status) {
             // check complete step
             if(!res.data.data.complete_step || res.data.data.complete_step < 6){
              router.push('/seller/al/contact-details')
            }
          setSellor(res.data.data)
          if (res.data.referData) {
            setShippingSetting(res.data.referData)
          }
          setShippingSetting((preData) => ({
            ...preData,
            seller_id: res.data.data._id
          }))

        }
      })
    }

  }, [globalData.sellor]) 


  
const updateInputData= (e)=>{

  const {name, value } = e.target;
   
  setShippingSetting((previouseData)=>({
    ...previouseData,
    [name]:value
  })) 
    
   
  }


  function submitUpdateForm(e) {
    e.preventDefault();
    setErrors({});
    $('.loaderouter').css('display', 'flex'); 
    fetch(`${baseUrl}api/seller/update-profile?update=shippingSetting`, {
      method: "POST",
      body: JSON.stringify(shippingSetting)
    }).then((response) => {
      if (!response.ok) {
        $('.loaderouter').css('display', 'none')
        throw new Error('Network Error')
      }
      return response.json();
    }).then((res) => {
      $('.loaderouter').css('display', 'none')
      if (res.status) {
        toast.success('Success! Business Details Saved.');
        if(shippingSetting.shipping_setting==1){ 
          router.push('/seller/al/bank-account-information')
        }else{ 
          router.push('/seller/al/shipping-setting/creating-shipping-template')
        }
      } else if(res.data.status_code == 403) {
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
            <div className="loaderouter">
              <div className="loader"></div>
              </div>
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
        <form action={'#'} onSubmit={(e)=>submitUpdateForm(e)}>  
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div
                className="nnn_dform"
                style={{ paddingBottom: 0, marginBottom: 0 }}
              >
                <h2>Shipping Setting</h2>
                <div className="registration_form_single-input">
                  <div className="list_Fsdf">
                    <ul>
                      <li>
                        <label>
                          <input
                            type="radio"
                            name="shipping_setting"
                             value="1"
                            checked={shippingSetting.shipping_setting==1}
                            onChange={(e)=>updateInputData(e)}
                          />
                          Set free shipping on all orders
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="radio"
                            name="shipping_setting"
                            value="2"
                            checked={shippingSetting.shipping_setting==2}
                            onChange={(e)=>updateInputData(e)}
                          /> 
                          setting your own shipping rates
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <Link href="/seller/al/shipping-setting/creating-shipping-template"> */}
              <button className="save">{shippingSetting.shipping_setting==1?"Set Free Shipping":"Creating Shipping Template"}</button>
            {/* </Link> */}
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
  </div>
</div>

  )
}

export default page