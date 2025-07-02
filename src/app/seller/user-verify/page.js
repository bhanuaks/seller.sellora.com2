'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { baseUrl, isEmpty } from '@/Http/helper';
 import '../../../../public/front/formValidate.css'
 import '../../../../public/front/error.css'
 import '../../../../public/front/loader.css'
 import $ from 'jquery'
import { ToastContainer, toast } from 'react-toastify';


function Page() {
  //const params = useParams();
    //const searchParams = useSearchParams()
  //const token = searchParams.get('token')
  const [token, setToken] = useState()

  
    const [loginData, setLoginData] = useState({
            name:'',
            password:'',
            confirm_password:''
          }) 
  
    const route = useRouter();
    const [errors, setErrors] =useState({})
  
    const [viewPassword, setViewPassword] = useState(false)

    useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tokenValue = params.get('token');
      setToken(tokenValue);
    }
  }, []);
    
    useEffect(() => {
      //console.log(token)
      if(token){
      fetch(
          `${baseUrl}api/get-user-detail?token=${token}`,
          {
            method: "GET",
          }
        )
          .then((response) => {
            
            return response.json();
          })
          .then((res) => {
            $(".loaderouter").css("display", "none");
            if (res.status) {
              // check complete step
              //alert(res.data.data.complete_step)
              //console.log('datatass',res.data.data)
              //setInputValues(res.data.data);
              //setLoginData(res.data.data)
              setLoginData((preData)=>({
                ...preData,
                name:res.data.data.name
              }))
              
            }
          });
        }

    },[token])
    
    const updateLoginData=(e)=>{
 
    const {name, value} = e.target;
    
      setLoginData((preData)=>({
          ...preData,
          [name]:value
        }))
    
  }


  function loginSubmit(e){
    setErrors({});
    e.preventDefault();
    $('.loaderouter').css('display','flex')

    const loginPayload = {
    ...loginData,
    token: token, // Add token into the request body
  }
  
      fetch(`${baseUrl}api/get-user-detail`,{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(loginPayload)
      }).then((response)=>{ 
        if(!response.ok){
        $('.loaderouter').css('display','none') 
          throw new Error("Network Error")
        }
        return response.json()
      }).then((res)=>{
        
        if(res.status){
          $('.loaderouter').css('display','none')
          toast.success(res.message); 
          setTimeout(() => {  
            //sessionStorage.setItem('loginData', JSON.stringify(res.seller));
            //sessionStorage.setItem('otpDataExpiration', res.expirationTime);
            route.push(`${baseUrl}seller/login`)
          }, 300);
          
        }else if(res.data.status_code==403){
          $('.loaderouter').css('display','none')  
          setErrors(res.data.errors)
        }else{
          $('.loaderouter').css('display','none')  
        }
      })
  }

  return (
    <>
      <div className="rts-register-area rts-section-gap login_outer">
            
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
      
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="login_logo">
                <img src={`${baseUrl}front/assets/images/logo_login.png`} />
              </div>
              <div className="margin_rl">
                <div className="registration-wrapper-1 mb--40">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="custom-form mt--20 mb--40">
                        <h3 className="log_in_account mb--20 animated fadeIn">
                          Verification User
                        </h3>
                        {/* checkout.html */}
                        <form className="registration-form"  onSubmit={(e)=>loginSubmit(e)}>
                          <div className="input-wrapper job-input-wrapper">
                            <div className="row align-items-center">
                              <div className="col-lg-12 pb_20">
                                <div className="">
                                  <label>
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="name" 
                                    placeholder=""
                                    value={loginData.name}
                                    readOnly
                                    
                                  />
                                  
                                </div>
                                
                                {errors.name && errors.name != ""? ( 
                                  <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.name}</span>
                              ):''}
                              </div>
                              <div className="col-lg-12 pb_20">
                                <label>
                                    Password
                                  </label>
                                <div className="">
                                  <input
                                    type={`${viewPassword?'text':"password"}`}
                                    className="form-control"
                                    placeholder="Password"
                                    name='password' 
                                    value={loginData.password}
                                    onChange={(e)=>updateLoginData(e)}
                                  />
                                    <i className={`toggle-password fa fa-fw fa-eye${!viewPassword?'-slash':""}`} onClick={()=>setViewPassword(!viewPassword)}/>
       
                                </div>
                                {errors.password && errors.password != ""? ( 
                                  <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.password}</span>
                              ):''}
                              </div>
                              <div className="col-lg-12 pb_20">
                                <label>
                                    Confirm Password
                                  </label>
                                
                                  <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                    name='confirm_password' 
                                    value={loginData.confirm_password}
                                    onChange={(e)=>updateLoginData(e)}
                                  />
                                    <i className={`toggle-password fa fa-fw fa-eye${!viewPassword?'-slash':""}`} onClick={()=>setViewPassword(!viewPassword)}/>
       
                                
                                {errors.confirm_password && errors.confirm_password != ""? ( 
                                  <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.confirm_password}</span>
                              ):''}
                              </div>
                              
                            </div>
                          </div>
                          <button className="rts-btn btn-primary">
                            Submit{/* Request OTP */}
                          </button>
                          
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
    </>
  );
}

export default Page;
