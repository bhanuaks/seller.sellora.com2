"use client"
import { baseUrl, isEmpty } from '@/Http/helper';
import React, { useEffect, useRef, useState } from 'react'
 import '../../../../public/front/formValidate.css'
 import '../../../../public/front/error.css'
 import '../../../../public/front/loader.css'
 import $ from 'jquery'
import { ToastContainer, toast } from 'react-toastify';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';


import { useRouter } from 'next/navigation';

function page() {
    const phoneInputRef = useRef(null);  
  const [sellerData, setSellerData] = useState({
    name:'',
    mobile:'',
    email:'',
    password:'',
    otp:'',
    country_s_name:"us", 
    mobile_code:'1'
  }) 

  const route = useRouter();
  const [resandOtpTime, setResandOtpTime] = useState(-1)

  const [sendedOtp, setSendedOtp] = useState(false)
  const [errors, setErrors] =useState({})

  const [viewPassword, setViewPassword] = useState(false)

   useEffect(() => {
          const input = document.querySelector('#mobile_code');
      
          if (input) {
            const iti = intlTelInput(phoneInputRef.current, {
              initialCountry: sellerData && sellerData.country_s_name?sellerData.country_s_name:'us',
              separateDialCode: true,
              // utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js', 
            });
      
           
            const onCountryChange = () => {
              const selectedCountryData = iti.getSelectedCountryData();  
              setSellerData((preData)=>({
                  ...preData,
                  mobile_code:selectedCountryData.dialCode,
                  country_s_name:selectedCountryData.iso2,
              }))
            }; 
            phoneInputRef.current.addEventListener('countrychange', onCountryChange);
            
            return () => {
              iti.destroy();  
            };
          }
        }, [setSellerData, sellerData?.country_s_name, sendedOtp]);


  const updateSellerData=(e)=>{
 
    const {name, value} = e.target;
    if(value ==""){
        setErrors((preError)=>({
            ...preError,
            [name]:`${name} is required`
        }))
    }else{
      setErrors((preError)=>({
        ...preError,
        [name]:``
    }))
    }



    if(name == "mobile" || name == "otp" ){
        const numericValue =value.replace(/[^0-9]/g, '');
        setSellerData((preData)=>({
          ...preData,
          [name]:numericValue
        }))
    }else{
      setSellerData((preData)=>({
        ...preData,
        [name]:value
      }))
    }
  }


  

  const sendOtp=(e)=>{ 
    e.preventDefault()
    setErrors({}); 
    if(resandOtpTime>0){
      return
    }
      if(isEmpty(sellerData.email)){
          setErrors((preError)=>({
              ...preError,
              email:"please enter email"
          }))
          return
      }
    $('.loaderouter').css('display','flex')  
    fetch(`${baseUrl}api/front/seller-register-otp`,{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(sellerData)
    }).then((response)=>{

      if(!response.ok){
      $('.loaderouter').css('display','none')  
        throw new Error("Network Error")
      }
      return response.json()
    }).then((res)=>{
      $('.loaderouter').css('display','none')  
      if(res.status){
        setSendedOtp(true)
        setResandOtpTime(60)
        decreeseOtpTime()
      }else{
        if(res.data && res.data.errors)
        setErrors(res.data.errors); 
      }
    })
 
  }


 
  
  const decreeseOtpTime = () => {
    if (resandOtpTime > 0) {
      // Call setTimeout to decrement OTP time every 1000ms (1 second)
      setTimeout(() => {
        setResandOtpTime((prevTime) => {
          const newTime = prevTime - 1;  
          return newTime;  
        });
      }, 1000);
    }
  };

  useEffect(() => {
    if (resandOtpTime > 0) {
      decreeseOtpTime();  
    }
  }, [resandOtpTime]);
  


  function registerationSubmit(e){
    setErrors({}); 
    e.preventDefault();
    $('.loaderouter').css('display','flex')
      fetch(`${baseUrl}api/front/seller-register`,{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(sellerData)
      }).then((response)=>{ 
        if(!response.ok){
        $('.loaderouter').css('display','none') 
          throw new Error("Network Error")
        }
        return response.json()
      }).then((res)=>{
        $('.loaderouter').css('display','none')  
        if(res.status){
          toast.success('Success! Registration completed successful.'); 
          setTimeout(() => { 
            // route.push(`${baseUrl}seller/login`)
            window.location.href=`${baseUrl}seller/al/contact-details`
          }, 600);
        }else if(res.data.status_code==403){
          setErrors(res.data.errors)
        }
      })
  }

  return (
    <div className="selling_panel_outer">

<ToastContainer 
                position="top-center"
                autoClose={3000} // Toast disappears after 3 seconds
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

      <div className="candidate-ml">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="log-in-account_content_outer2">
                <h1>
                  Welcome to Sellora – Where Global Brands and Retailers Connect!
                </h1>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="custom-form">
                <form
                  action="/seller/login-otp"
                  className="registration-form job-apply-form candidate-login-inner"
                  onSubmit={(e)=>registerationSubmit(e)}
                >

                  <div className="input-wrapper job-input-wrapper">
                    <div className="row align-items-center">
                      <div className="col-lg-8">
                        <div className="lable2">

                          <input
                            type="text"
                            className="form-control"
                            name="name" 
                            placeholder=""
                            value={sellerData.name}
                            onChange={(e)=>updateSellerData(e)}
                          />
                          <label htmlFor="name">Name</label>
                        </div>
                        {errors.name && errors.name != ""? ( 
                            <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.name}</span>
                        ):''}
                           
                      </div>
                      <div className={`col-lg-${sendedOtp?"5":"6"} col-9 country_code_parent`}>
                       
                        <div className="lable">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id='email_id'
                            placeholder="Enter Email*"
                            value={sellerData.email}
                            onChange={(e)=>updateSellerData(e)}
                            disabled={sendedOtp}
                          />
                          <label htmlFor="email_id">Email Id</label>
                        </div>
                        {errors.email && errors.email != ""? ( 
                            <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.email}</span>
                        ):''}

                      </div>
                      <div className={`col-lg-${sendedOtp?"3":"2"} col-${sendedOtp?"3":"2"} p0 m0`}>
                        <div className="send_otp">
                            <a href="#" onClick={(e)=>sendOtp(e)} disabled>
                              {resandOtpTime==-1?"Send OTP":''}
                               {resandOtpTime== 0?"Resend OTP":''} 
                               {resandOtpTime > 0?`Resend OTP (${resandOtpTime})`:''}
                                </a>
                                </div></div>
                      {sendedOtp &&(
                       <>
                         <div className="col-lg-4">
                        <div className="lable">
                          <input
                            type="text"
                            className="form-control"
                            name="otp"
                            placeholder="Enter OTP"
                            value={sellerData.otp}
                            onChange={(e)=>updateSellerData(e)}
                            maxLength={6}
                            style={{marginTop: '-14px'}}
                          />
                        </div>
                        {errors.otp && errors.otp != ""? ( 
                            <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.otp}</span>
                        ):''}
                      </div>
                      <div className="col-lg-8">

                         <div className="lable"> 
                          <input
                            type="text"
                            className="form-control"
                            id='mobile_code'
                            ref={phoneInputRef}
                            name="mobile" 
                            placeholder=""
                            style={{ paddingRight: 100}}
                            value={sellerData.mobile} 
                            onChange={(e)=>updateSellerData(e)}
                          />
                          <label htmlFor="name">Enter Mobile Number</label> 
                        </div>
                        
                        {errors.mobile && errors.mobile != ""? ( 
                            <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.mobile}</span>
                        ):''}

                        
                      </div>
                      <div className="col-lg-8 mt--5">
                        <input
                          type={`${viewPassword?'text':"password"}`}
                          className="form-control"
                          placeholder="Password"
                          name='password'
                          value={sellerData.password}
                          onChange={(e)=>updateSellerData(e)}
                        />
                        <i className={`toggle-password fa fa-fw fa-eye${!viewPassword?'-slash':""}`} onClick={()=>setViewPassword(!viewPassword)}/>
                    

                      {errors.password && errors.password != ""? ( 
                            <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.password}</span>
                        ):''}
                          </div>
                        </>
                       )}
                     

                    </div>
                  </div>
                   
                   {sendedOtp  && (
                    <>
                    <div className="input-wrapper job-input-wrapper">
                    <div className="row align-items-center">
                      <div className="col-lg-8">
                        <label
                          style={{ color: "#000", fontSize: 14, marginBottom: 16 }}
                        >
                          Create your password strong
                        </label>
                        
                      </div>
                    </div>
                  </div>
                  <div className="input-wrapper job-input-wrapper">
                    <div className="row">
                      <div className="col-lg-8">
                        <button className="make-account">Create Account</button>
                      </div>
                    </div>
                  </div>
                    </>
                   )}
                  
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              
              <img src={`${baseUrl}front/assets/images/Global-Brands.jpg`} />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default page