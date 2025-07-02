"use client"
import React, { Suspense, useContext, useEffect, useRef, useState } from 'react' 
import { AppContext } from '@/app/contaxtData/contextData';
import { lazy } from 'react';
import { toast, Toaster } from 'sonner';

const NumberSection = lazy(() => import('./numberSection'));
 


function page() {

  const {globalData, setGlobalData} = useContext(AppContext) 
    const [editData, setEditData] = useState(null)
    const [edit, setEdit] = useState(null) 
    const [errors, setErrors] = useState({})
    const [isProccess, setIsProccess] = useState(false)
    const [passwordData, setPasswordData] = useState({
      current_password : "",
      new_password : "",
      confirm_password : ""
    })
  
     const [mobileData, setMobileData] = useState({
      country_s_name:"us",
      mobile_code:"1",
      mobile:""
     });


     useEffect(() => { 
              loadData() 
       }, []);

function loadData(){
   fetch(
             `/api/seller/get-profile`,
             {
               method: "GET",
             }
           )
             .then((response) => {
               if (!response.ok) { 
                 throw new Error("Network Error");
               }
               return response.json();
             })
             .then((res) => { 
               if (res.status) {
                //  setSellor(res.data.data);
                 setGlobalData((preData) => ({ sellor: res.data.data })); 
               }
             });
}
     
  
      function saveFormData(e){
      e.preventDefault();

      setErrors({})
      let submitData = {
        edit,
        data:editData
      }
      if(edit == "mobile"){
          submitData = {
            ...mobileData,
            edit
          }
      }

      setIsProccess(true)
      fetch(`/api/seller/update-login-setting`, {
        method:"POST",
        body:JSON.stringify(submitData)
      })
      .then((response)=>{
        setIsProccess(false)
        if(!response.ok){
            throw new Error("Network Issue");
        }
        return response.json()
      })
      .then((res)=>{
        if(res.status){
          loadData()
          setEdit(null)
          toast.success(res.data.message)
        }else{
          setErrors({[edit]:res.data.message})
        }
      })
      .catch((error)=>{
        console.log(error.message);
      })


     }
       
     
     function changePasswordData(e){
      const { name, value } = e.target
      const trimValue = value?.trim();
      setPasswordData((preData)=>({
        ...preData,
        [name] : trimValue
      }))

     }

     function updatePasswordFun(e){
      e.preventDefault()

setIsProccess(true)
      fetch('/api/seller/update-password',{
        method:"POST",
        body:JSON.stringify(passwordData)
      })
      .then((response)=>{
        setIsProccess(false)
        if(!response.ok){
          throw new Error("Network Error")
        }
        return response.json();
      })
      .then((res)=>{
        if(res.status){
           loadData()
          setEdit(null)
          toast.success("Your password has been change successfully.")
          window.location.reload();
        }else if(res.data?.status_code == 401){
          setErrors(res.data.errors)
        }
      })
      .catch((error)=>{
        console.log(error.message);
      })
     }

     if(!globalData?.sellor){
      return <></>
     }

  return (
    <>
  <div className="notification_breadcomb_rts-navigation-area-breadcrumb">
    <Toaster richColors position="bottom-center" />
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="notification_breadcomb">
            <ul>
              <li>
                <a href="/dashboard">Dashboard</a>{" "}
              </li>
              <li>
                <a href="#" className="active_002">
                  Login Setting{" "}
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <div className="content_areya">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="login_setting">
                <div className={`form_field_outer ${edit=="name"?"edit-mode":""}`}>
                  <div>
                    <div className="name_heading">Name</div>
                    <div className="name">
                        
                        <div style={{height:`${edit == "name"?"auto":"0px"}`, overflow:'hidden'}}>
                      <input type='text' 
                       value={editData || "" } 
                       onChange={(e)=>setEditData(e.target.value)}
                      />
                      {errors.name && (
                        <span className='error_message'>{errors.name}</span>
                      )}
                       <button onClick={(e)=>saveFormData(e)}>{isProccess?"Please wait..":"Update"}</button>
                       </div>
                       {edit !== "name" && globalData?.sellor?.name} 
                        </div>
                  </div>
                  <div>
                    {" "}
                    {edit !== "name" && (  
                      <span className="edit3" onClick={(e)=>
                        {
                          setEditData(globalData?.sellor?.name)
                          setEdit("name")
                        }
                      
                      } >Edit</span> 
                    )}
                  </div>
                </div>
                <div className={`form_field_outer ${edit=="email"?"edit-mode":""}`}>
                  <div>
                    <div className="name_heading">E-Mail</div>
                    <div className="name">
                   
                        <div style={{height:`${edit == "email"?"auto":"0px"}`, overflow:'hidden'}}>
                      <input type='text' 
                       value={editData || "" } 
                       onChange={(e)=>setEditData(e.target.value)}
                      />
                       {errors.email && (
                        <span className='error_message'>{errors.email}</span>
                      )}
                       <button  onClick={(e)=>saveFormData(e)} >{isProccess?"Please wait..":"Update"}</button>
                       </div>
                           {edit !== "email" && globalData?.sellor?.email} 
                      </div>
                  </div>
                  <div>
                    {" "}
                    {edit !== "email" && (  
                      <span className="edit3" onClick={(e)=>
                        {
                          setEditData(globalData?.sellor?.email)
                          setEdit("email")
                        }
                      
                      } >Edit</span> 
                    )}
                  </div>
                </div>
                <div className={`form_field_outer ${edit=="mobile"?"edit-mode":""}`}>
                  <div>
                    <div className="name_heading">Primary mobile number:</div>
                    <div className="name" >
                      
                        <div  style={{height:`${edit == "mobile"?"auto":"0px"}`, overflow:'hidden'}}>
                        <Suspense fallback={<></>}> 
                          <NumberSection mobileData={mobileData} setMobileData={setMobileData}  />
                        </Suspense>
                         {errors.mobile && (
                        <span className='error_message'>{errors.mobile}</span>
                      )}
                       <button className='mt-3'  onClick={(e)=>saveFormData(e)}>{isProccess?"Please wait..":"Update"}</button>
                       </div>
                    {edit !== "mobile" && ( 
                          <span>
                          <strong>+{globalData?.sellor?.mobile_code}</strong> {globalData?.sellor?.mobile}
                        </span>
                       )} 

                      
                      <p>
                        Quickly sign in, easily recover passwords, and receive
                        security notifications with this mobile number.
                      </p>
                    </div>
                  </div>
                  <div>
                    {" "}
                    {edit !== "mobile" && (  
                      <span className="edit3" onClick={(e)=>
                        {
                          setMobileData((preData)=>({
                            ...preData, 
                            country_s_name:globalData?.sellor?.country_s_name,
                            mobile_code:globalData?.sellor?.mobile_code,
                            mobile:globalData?.sellor?.mobile
                          }))
                          setEdit("mobile")
                        }
                      
                      } >Edit</span> 
                    )}
                  </div>
                </div>
                <div className={`form_field_outer  ${edit == "password"?"edit-mode":""}`}>
                  <div>
                    {edit !== "password" && (
                      <>
                        <div className="name_heading">Password</div>
                        <div className="name">*********</div>
                      </>
                    )}
                   
                 
                     <div className="name" style={{height:`${edit == "password"?"auto":"0px"}`, overflow:'hidden'}}>
                      <form onSubmit={(e)=>updatePasswordFun(e)}>
                       <div className="name_heading">Current Password</div>
                       <input type='password' name="current_password" 
                        value={passwordData.current_password || ""}
                        onChange={(e)=>changePasswordData(e)} 
                        placeholder='Current password'
                       /> 
                       {errors.current_password && (
                        <span className='error_message'>{errors.current_password}</span>
                        )}
                       <div className="name_heading">New Password</div>
                       <input type='password' 
                       name='new_password'
                        value={passwordData.new_password || ""}
                        onChange={(e)=>changePasswordData(e)} 
                        placeholder='New password'
                       /> 
                       {errors.new_password && (
                        <span className='error_message'>{errors.new_password}</span>
                        )}
                       <div className="name_heading">Confirm Password</div>
                       <input type='password'
                          value={passwordData.confirm_password || ""}
                          name='confirm_password'
                          onChange={(e)=>changePasswordData(e)} 
                          placeholder='Confirm password'
                        />  
                        {errors.confirm_password && (
                          <span className='error_message'>{errors.confirm_password}</span>
                        )}

                       <button type='submit' disabled={isProccess}>{isProccess?"Please wait..":"Change Password"}</button>
                       </form>
                    </div>
                    
                    
                  </div>
                  <div>
                    {" "}
                   {edit !== "password" && (  
                      <span className="edit3" onClick={(e)=>
                        {
                          setEditData(null)
                          setEdit("password")
                        }
                      
                      } >Change</span> 
                    )}
                  </div>
                </div>
                <div className="form_field_outer">
                  <div>
                    <div className="name_heading">2-step verification</div>
                    <div className="name">
                      <span>{globalData?.sellor?.email}</span>
                      <span>+{globalData?.sellor?.mobile_code} {globalData?.sellor?.mobile}</span>
                      <p>
                        Enter a code sent to your verification method, in
                        addition to your password, to sign in securely.
                      </p>
                    </div>
                  </div>
                  <div>
                    {" "}
                    {/* <span className="edit3">Edit</span>{" "} */}
                  </div>
                </div>
              </div>
              <button className="add-replacement-rule mb-5">Done</button>
            </div>
          </div>
        </div>
      </div>
     
       
    </div>
  </div>
  {/* popup-1-add-new-user-Modal */}
  <div
    className="modal fade"
    id="add-new-user-Modal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title title_request" id="exampleModalLabel">
            Add New User
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <div className="request_form">
            <label>Name</label>
            <input
              type="text"
              name=""
              placeholder="Name"
              className="form-control"
            />
            <label>
              Email Id<span className="required">*</span>
            </label>
            <input
              type="text"
              name=""
              placeholder="Email Id"
              className="form-control"
            />
            <label>
              Contact Number<span className="required">*</span>
            </label>
            <input
              type="text"
              name=""
              placeholder="Contact Number"
              className="form-control"
            />
          </div>
        </div>
        <div className="modal_button">
          <button
            type="button"
            className="orange-btn cancel"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="button" className="orange-btn">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default page
