 
 
"use client"
import React, { useContext, useEffect, useRef, useState } from 'react' 
import 'intl-tel-input/build/css/intlTelInput.css'; 
import { AppContext } from '@/app/contaxtData/contextData'
import $ from 'jquery'
import { baseUrl, decryptText } from '@/Http/helper'
import { useRouter } from 'next/navigation' 
import { ToastContainer, toast } from 'react-toastify';  
import Link from 'next/link';


function Page() {


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
                          router.push('/seller/profile/contact-details')
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
                  // router.push('/seller/profile/listing')
                  setEditFrom(false)
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


      <div className="notification_breadcomb_rts-navigation-area-breadcrumb">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="notification_breadcomb">
            <ul>
              <li>
                <Link href="/dashboard">Dashboard</Link>{" "}
              </li>
              <li>
                <a href="#" className="active_002">
                 Payment Information
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

      <div className="container">
      <form action="#" onSubmit={(e) => submitUpdateForm(e)}>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div>
              <div className="form_outer">
                <div className="seller_edit_information">
                  <div className="row">
                    <div className="col-lg-12">
                      <h2>Payment Information</h2>
                      <span className="edit_span">
                        <a href="#"   onClick={() => setEditFrom(true)}>Edit</a>
                      </span>
                    </div>
                    <div className="col-lg-10 offset-lg-1">
                      <div className="form_s2">
                        <div className="row">
                          <div className="col-lg-12">
                            <h2>Charge method</h2>
                          </div>
                          <div className="col-lg-8 offset-lg-2">
                            <div className="nnn_dform">
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
                        <label htmlFor="f-name">
                          Name on card<span className="mandatory_field">*</span>
                        </label>
                        <input
                          type="text"
                          name="name_of_card"
                          value={bankDetails.name_of_card}
                          onChange={(e) => updateInputData(e)}
                          disabled={!editFrom}
                        />
                        {errors.name_of_card && errors.name_of_card != "" ? (
                          <span
                            id="name_error"
                            className="input-error-tip"
                            style={{ display: "inline-block" }}
                          >
                            {errors.name_of_card}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="registration_form_single-input">
                        <label htmlFor="f-name">
                          Card Number<span className="mandatory_field">*</span>
                        </label>
                        <input
                          type="text"
                          maxLength={19}
                          name="card_number"
                          value={
                            !editFrom && bankDetails?.card_number
                              ? `xxxx xxxx xxxx ${
                                  bankDetails?.card_number &&
                                  bankDetails?.card_number.length >= 4
                                    ? bankDetails?.card_number.slice(-4)
                                    : ""
                                }`
                              : bankDetails?.card_number || ""
                          }
                          onChange={(e) => updateInputData(e)}
                          disabled={!editFrom}
                        />
                        {errors.card_number && errors.card_number != "" ? (
                          <span
                            id="name_error"
                            className="input-error-tip"
                            style={{ display: "inline-block" }}
                          >
                            {errors.card_number}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="registration_form_single-input">
                                    <label htmlFor="f-name">
                                      Expiration Date<span className="mandatory_field">*</span>
                                    </label>
                                    <select
                              name="expire_month"
                              value={bankDetails.expire_month}
                              disabled={!editFrom}
                              onChange={(e) => updateInputData(e)}
                            >
                              <option value={""}>Month</option>
                              {Array.from({ length: 12 }, (_, i) => (
                                <option
                                  value={(i + 1).toString().padStart(2, "0")}
                                  key={i}
                                >
                                  {" "}
                                  {(i + 1).toString().padStart(2, "0")}
                                </option>
                              ))}
                            </select>
                            {errors.expire_month &&
                            errors.expire_month != "" ? (
                              <span
                                id="name_error"
                                className="input-error-tip"
                                style={{ display: "inline-block" }}
                              >
                                {errors.expire_month}
                              </span>
                            ) : (
                              ""
                            )}
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="registration_form_single-input">
                                    <label htmlFor="f-name">
                                      Expiration Year<span className="mandatory_field">*</span>
                                    </label>
                                    <select
                              name="expire_year"
                              value={bankDetails.expire_year}
                              onChange={(e) => updateInputData(e)}
                              disabled={!editFrom}
                            >
                              <option value={""}>Year</option>

                              {Array.from({ length: 25 }, (_, i) => (
                                <option
                                  value={new Date().getFullYear() + i}
                                  key={i}
                                >
                                  {" "}
                                  {new Date().getFullYear() + i}
                                </option>
                              ))}
                            </select>
                            {errors.expire_year && errors.expire_year != "" ? (
                              <span
                                id="name_error"
                                className="input-error-tip"
                                style={{ display: "inline-block" }}
                              >
                                {errors.expire_year}
                              </span>
                            ) : (
                              ""
                            )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="registration_form_single-input">
                              <label htmlFor="f-name">Security Code<span className="mandatory_field">*</span></label> 
                              <input
                          type="text"
                          name="security_code"
                          value={
                            !editFrom && bankDetails.security_code
                              ? "xxx"
                              : bankDetails.security_code
                          }
                          onChange={(e) => updateInputData(e)}
                          disabled={!editFrom}
                        />
                        {errors.security_code && errors.security_code != "" ? (
                          <span
                            id="name_error"
                            className="input-error-tip"
                            style={{ display: "inline-block" }}
                          >
                            {errors.security_code}
                          </span>
                        ) : (
                          ""
                        )}
                            </div>
                            <div className="registration_form_single-input">
                              <label htmlFor="f-name">Billing Address<span className="mandatory_field">*</span></label>
                              <input
                          type="text"
                          name="billing_address"
                          value={bankDetails.billing_address}
                          onChange={(e) => updateInputData(e)}
                          disabled={!editFrom}
                        />
                        {errors.billing_address &&
                        errors.billing_address != "" ? (
                          <span
                            id="name_error"
                            className="input-error-tip"
                            style={{ display: "inline-block" }}
                          >
                            {errors.billing_address}
                          </span>
                        ) : (
                          ""
                        )}
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-10 offset-lg-1">
                        {editFrom && <button className="save">Save</button>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
