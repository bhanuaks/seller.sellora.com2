
"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import Sidebar from '../afterlogincomponent/Sidebar'
import Link from 'next/link'
import TopButton from '../afterlogincomponent/TopButton'
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import { AppContext } from '@/app/contaxtData/contextData'
import $ from 'jquery'
import { baseUrl, decryptText } from '@/Http/helper'
import { useRouter } from 'next/navigation'
import  '../../../../../public/front/error.css'
import  '../../../../../public/front/loader.css'
import { ToastContainer, toast } from 'react-toastify';
import CompletePercentage from '../afterlogincomponent/completePercentage'


const page = () => { 

          const {globalData, setGlobalData} = useContext(AppContext) 
          const countryRef = useRef() 
          const router = useRouter();
          const [errors, setErrors] = useState({});
          const [sellor, setSellor] = useState(null);
          const [editFrom, setEditFrom] = useState(false);
          const phoneInputRef = useRef(null); 
          const [bankDetails, setBankDetails] = useState({
            card_holder_name:'',
            name_of_card:'',
            card_number:'',
            expire_month:'',
            expire_year:'', 
            security_code:'', 
            billing_address:'', 
          })
          

          useEffect(()=>{ 
            if(globalData.sellor){
              $('.loaderouter').css('display','flex') 
              fetch(`${baseUrl}api/seller/get-profile?user_id=${globalData.sellor._id}&with_data=cardDetails`,{
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
                      if(!res.data.data.complete_step || res.data.data.complete_step < 8){
                        router.push('/seller/al/contact-details')
                      }
                    setSellor(res.data.data)
                    if(res.data.referData){
                      const dbData = res.data.referData;

                      setBankDetails((preData)=>({
                        ...preData,
                        _id:dbData._id,
                        seller_id:dbData.seller_id,
                        card_holder_name:dbData.card_holder_name,
                        name_of_card:dbData.name_of_card,
                        card_number: decryptText({data:dbData.card_number,iv:dbData.card_number_iv}).replace(/\s+/g, "").replace(/(\d{4})/g, "$1 ").trim(),
                        expire_month: decryptText({data:dbData.expire_month,iv:dbData.expire_month_iv}), 
                        expire_year: decryptText({data:dbData.expire_year, iv:dbData.expire_year_iv}),
                        security_code: decryptText({data:dbData.security_code, iv:dbData.security_code_iv}),
                        billing_address:dbData.billing_address,
                      }))
                    }
                    setBankDetails((preData) => ({
                      ...preData,
                      seller_id: res.data.data._id
                    }))
                  }
              })
            }

          },[globalData.sellor])

        

          
        const updateInputData= (e)=>{

          const {name, value} = e.target; 
          if(name=="expire_date" || name=="expire_year"){
            const numericValue = value.replace(/[^0-9]/g, '')
            setBankDetails((preData)=>({
              ...preData,
              [name]:numericValue
            })) 
            if (numericValue == "") {
              setErrors((preError) => ({
                ...preError,
                [name]: `${name.replace('_', ' ')} is required`
              }))
            } else {
              setErrors((preError) => ({
                ...preError,
                [name]: ``
              }))
            } 
            return
          }

          if(name=="card_number" ){
            let numericValue = value.replace(/[^0-9]/g, '')
            numericValue = numericValue.replace(/\s+/g, ""); 
            numericValue = numericValue.replace(/(\d{4})/g, "$1 ").trim();  
           
            setBankDetails((preData)=>({
              ...preData,
              [name]:numericValue
            })) 
            if (numericValue == "") {
              setErrors((preError) => ({
                ...preError,
                [name]: `${name.replace('_', ' ')} is required`
              }))
            } else {
              setErrors((preError) => ({
                ...preError,
                [name]: ``
              }))
            } 
            return
          }
            setBankDetails((preData)=>({
              ...preData,
              [name]:value
            }))
            if (value == "") {
              setErrors((preError) => ({
                ...preError,
                [name]: `${name.replace('_', ' ')} is required`
              }))
            } else {
              setErrors((preError) => ({
                ...preError,
                [name]: ``
              }))
            }
          
          }



        function submitUpdateForm(e){
          e.preventDefault();
          setErrors({}); 
          $('.loaderouter').css('display','flex');
          fetch(`${baseUrl}api/seller/update-profile?update=cardDetails`,{
            method:"POST",
            body:JSON.stringify(bankDetails)
          }).then((response)=>{
              if(!response.ok){
                $('.loaderouter').css('display','none')
                throw new Error('Network Error') 
              }
              return response.json();
          }).then((res)=>{
            $('.loaderouter').css('display','none') 
              if(res.status){
                toast.success('Success! Payment Information saved successfully.');
                router.push('/seller/al/listing')
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
        <form action="#" onSubmit={(e)=>submitUpdateForm(e)}>  
          <div className="row">
            {!editFrom && (
              <div>
                <div className="edit_button" style={{ float: "right" }} 
                onClick={()=>setEditFrom(true)}>Edit Details</div>
              </div>
            )}
            
            <div className="col-lg-8 offset-lg-2">
              <div className="nnn_dform">
                
                <h2>Payment Information</h2>
                
                <h3 className="text-center">Charge method</h3>
               
                {/* <div className="registration_form_single-input">
                  <label htmlFor="f-name">Card Holder Name<span className='mandatory_field'>*</span></label>
                  <input type="text" 
                   name='card_holder_name' 
                   value={bankDetails.card_holder_name}
                   onChange={(e)=>updateInputData(e)}
                   />
                    {errors.card_holder_name && errors.card_holder_name != ""? ( 
                            <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.card_holder_name}</span>
                        ):''}
                </div> */}
                <div className="registration_form_single-input">
                  <label htmlFor="f-name">Name on card<span className='mandatory_field'>*</span></label>
                  <input type="text" 
                   name='name_of_card' 
                   value={bankDetails.name_of_card}
                   onChange={(e)=>updateInputData(e)}
                   disabled={!editFrom}
                   />
                    {errors.name_of_card && errors.name_of_card != ""? ( 
                            <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.name_of_card}</span>
                        ):''}
                </div>
                <div className="registration_form_single-input">
                  <label htmlFor="f-name">Card Number<span className='mandatory_field'>*</span></label>
                  <input type="text" 
                  maxLength={19}
                   name='card_number' 
                   value={!editFrom && bankDetails?.card_number
                    ? `xxxx xxxx xxxx ${bankDetails?.card_number && bankDetails?.card_number.length >= 4 
                        ? bankDetails?.card_number.slice(-4) 
                        : ""}` 
                    : bankDetails?.card_number || ""}  
                   onChange={(e)=>updateInputData(e)}
                   disabled={!editFrom}
                   />
                    {errors.card_number && errors.card_number != ""? ( 
                            <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.card_number}</span>
                        ):''}
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="registration_form_single-input">
                      <label htmlFor="f-name">Expiration Month<span className='mandatory_field'>*</span></label>
                      <select  name='expire_month' 
                       value={bankDetails.expire_month}
                       disabled={!editFrom}
                       onChange={(e)=>updateInputData(e)}
                       >

                        <option value={""}>Month</option>
                        {Array.from({length:12},(_,i)=>(
                          <option value={(i+1).toString().padStart(2,"0")} key={i}> {(i+1).toString().padStart(2,"0")}</option>
                        ))}
                        

                      </select>
                      {/* <input type="text" 
                      maxLength={2}
                       name='expire_date' 
                       value={bankDetails.expire_date}
                       onChange={(e)=>updateInputData(e)}
                       /> */}
                        {errors.expire_month && errors.expire_month != ""? ( 
                            <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.expire_month}</span>
                        ):''}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="registration_form_single-input">
                      <label htmlFor="f-name">Expiration Year<span className='mandatory_field'>*</span></label>

                      <select name='expire_year' 
                       value={bankDetails.expire_year}
                       onChange={(e)=>updateInputData(e)}
                       disabled={!editFrom}>

                        <option value={""}>Year</option>

                        {Array.from({length:25},(_, i)=>( 
                        <option value={new Date().getFullYear()+i}  key={i}> {new Date().getFullYear()+i}</option>
                        ))}
                      </select>
                      {/* <input type="text" 
                      maxLength={4}
                       name='expire_year' 
                       value={bankDetails.expire_year}
                       onChange={(e)=>updateInputData(e)}
                       /> */}
                        {errors.expire_year && errors.expire_year != ""? ( 
                            <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.expire_year}</span>
                        ):''}
                    </div>
                  </div>
                </div>
                <div className="registration_form_single-input">
                  <label htmlFor="f-name">Security Code<span className='mandatory_field'>*</span></label>
                  <input type="text" 
                   name='security_code' 
                   value={!editFrom && bankDetails.security_code ?"xxx":bankDetails.security_code}
                   onChange={(e)=>updateInputData(e)}
                   disabled={!editFrom}
                   />
                    {errors.security_code && errors.security_code != ""? ( 
                            <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.security_code}</span>
                        ):''}
                </div>
                <div className="registration_form_single-input">
                  <label htmlFor="f-name">Billing Address<span className='mandatory_field'>*</span></label>
                  <input type="text" 
                    name='billing_address'
                    value={bankDetails.billing_address}
                    onChange={(e)=>updateInputData(e)}
                    disabled={!editFrom}
                   />
                    {errors.billing_address && errors.billing_address != ""? ( 
                            <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.billing_address}</span>
                        ):''}
                </div>
                {editFrom && ( 
                    <button className="save">Save</button>
                )}
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