"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import $ from 'jquery'
import { ToastContainer, toast } from 'react-toastify';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input'; 
import { useRouter } from 'next/navigation'
import { AppContext } from '@/app/contaxtData/contextData'
import HelpAndVideoTopSection from '../../HelpAndVideoTop'



function Page() {

  const {globalData, setGlobalData} = useContext(AppContext)
      const [errors, setErrors] = useState({});
    
    const [sellor, setSellor] = useState(null)
    const router = useRouter()
    useEffect(()=>{ 
      if(globalData.sellor){
        $('.loaderouter').css('display','flex') 
        fetch(`${baseUrl}api/seller/get-profile?user_id=${globalData.sellor._id}`,{
          method:"GET", 
        }).then((response)=>{
            if(!response.ok){
              $('.loaderouter').css('display','none') 
              throw new Error('Network Error') 
            }
            return response.json();
        }).then((res)=>{
            $('.loaderouter').css('display','none') 
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
    $('.loaderouter').css('display','flex');
    fetch(`${baseUrl}api/seller/update-profile?update=display_information`,{
      method:"POST",
      body:JSON.stringify(sellor)
    }).then((response)=>{
        if(!response.ok){
          $('.loaderouter').css('display','none')
          throw new Error('Network Error') 
        }
        return response.json();
    }).then((res)=>{
      $('.loaderouter').css('display','none') 
        if(res.status){
          toast.success('Success! Display information saved.');
          window.location.href=`${baseUrl}seller/profile/pickup-address`
          // router.push('/seller/profile/pickup-address')
        }else if(res.data.status_code==403){
          setErrors(res.data.errors)
        }
    }) 
  
  } 

  return (
    <div className="bg33">
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
      

  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6"> 
        </div>
        <div className="col-lg-6 col-md-6">
          <HelpAndVideoTopSection />
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <div>
         
          <div className="form_outer">
            <div className="seller_edit_information">
              <div className="row">
                <div className="col-lg-12">
                  <h2>Display Information</h2>
                  {/* <span className="edit_span">
                    <a href="#">Edit</a>
                  </span> */}
                </div>
                <div className="col-lg-10 offset-lg-1">
                  <div className="form_s2">
                  <form action="#" onSubmit={(e)=>submitUpdateForm(e)}> 
                    <div className="row">
                      <div className="col-lg-8 offset-lg-2">
                        <div className="nnn_dform">
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">Display Name<span className="mandatory_field">*</span></label>
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
                            <label htmlFor="f-name">Business Description<span className="mandatory_field">*</span></label>
                            <textarea 
                              name='business_description'
                              value={sellor?.business_description || ''}
                              onChange={(e)=>updateInputData(e)}
                              />
                              {errors.business_description && errors.business_description != ""? ( 
                                      <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.business_description}</span>
                                  ):''}
                          </div>
                          <button type='submit' className="save">Update</button>
                        </div>
                      </div>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Page