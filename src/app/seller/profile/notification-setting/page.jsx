"use client"
import React, { useEffect, useState } from 'react'
import RightNav from '../component/RightNav'
import { isValidEmail, testEmail } from '@/Http/helper';
import Swal from 'sweetalert2';
import { toast } from 'sonner';
import { Toaster } from 'sonner';

function page() {




  const [formData, setFormData] = useState({
    ListingCreation : true,
    ListingCreationEmail : "",

    ComplianceRequirements : true,
    ComplianceRequirementsEmail : "",

    ListingRecommendations : true,
    ListingRecommendationsEmail : "",

    NewOrder  : true,
    NewOrderEmail : "",

     NewOrderCancellationRisk  : true,
    NewOrderCancellationRiskEmail : "",

     NewReturnRequest : true,
    NewReturnRequestEmail : "",

     ReturnDelivered : true,
    ReturnDeliveredEmail : "",

     RefundIssued : true,
    RefundIssuedEmail : "",

    AdvertisementRecommendation : true,
    AdvertisementRecommendationEmail: "",
 
    PriceRecommendation     : true,
    PriceRecommendationEmail: "", 
    
     SelloraPromotions    : true,
    SelloraPromotionsEmail: "", 

    ReportStatus          : true,
    ReportStatusEmail     : "", 

     EmergencyNotificationEmail : "",
    EmergencyNotificationNumber : "",
  });

  const [updateField, setUpdateField] = useState("")
  const [editEmergency, setEditEmergency] = useState(false)


  useEffect(()=>{
    
    
  fetch(`/api/seller/notifiaction/save-setting`)
  .then((response)=>{
    if(!response.ok){
      throw new Error("Network Error")
    }
    return response.json();
  })
  .then((res)=>{
    if(res.status){
      if(res.data.settings){

        setFormData(res.data.settings)
      }
    }
  })
  .catch((error)=>{
    console.log(error);
  })

  },[])

  async function hendleChangecheckBox(e){
    const { name, checked} = e.target;

     const toastId = toast.loading("Loading..."); 
    try {
      const response = await fetch(`/api/seller/notifiaction/save-setting`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data:{[name]:checked?true:false} }),
      }); 

      if (!response.ok) {
        throw new Error("Network Error");
      } 
      const res = await response.json();

      if (res.status) { 
          setFormData((preData)=>({
            ...preData,
            [name]:checked?true:false
          })) 
        toast.success("success!", { id: toastId });
      } else {
        toast.error("Something went wrong.", { id: toastId });
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to save email.", { id: toastId });
    }



      
  }

    function hendleChangeInput(e){
    const { name, value} = e.target;
       setFormData((preData)=>({
        ...preData,
        [name]:value
       }))
  }
 



  async function saveEmails(name) {

    const data = {
    [name]: formData?.[name] || false,
    [`${name}Email`]: formData?.[`${name}Email`] || ''
  };
  
  if(!(formData?.[`${name}Email`]) || !isValidEmail(formData?.[`${name}Email`])){
    alert("Please Enter valid Email")
    return
  } 
    // Show loading toast
    const toastId = toast.loading("Saving email..."); 
    try {
      const response = await fetch(`/api/seller/notifiaction/save-setting`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      if (!response.ok) {
        throw new Error("Network Error");
      }

      const res = await response.json();

      if (res.status) {
         setUpdateField("");
        toast.success("saved successfully!", { id: toastId });
      } else {
        toast.error("Something went wrong.", { id: toastId });
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to save email.", { id: toastId });
    }
  }


  // ===============================================================
  async function saveEmergencyInfo(e) {
    e.preventDefault()

      if(!(formData.EmergencyNotificationEmail) || !isValidEmail(formData.EmergencyNotificationEmail)){
    alert("Please Enter valid Emergency  Email")
    return
  } 
    if(!(formData.EmergencyNotificationNumber) ){
    alert("Please Enter valid Emergency phone number")
    return
  } 

   const data = { 
      EmergencyNotificationNumber: formData.EmergencyNotificationNumber,
      EmergencyNotificationEmail: formData.EmergencyNotificationEmail
    };
  

    const toastId = toast.loading("Saving Info..."); 
    try {
      const response = await fetch(`/api/seller/notifiaction/save-setting`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      if (!response.ok) {
        throw new Error("Network Error");
      }

      const res = await response.json();

      if (res.status) {
         setEditEmergency(false);
        toast.success("saved successfully!", { id: toastId });
      } else {
        toast.error("Something went wrong.", { id: toastId });
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to save email.", { id: toastId });
    }


  }

  return (
    <>
  <div className="notification_breadcomb_rts-navigation-area-breadcrumb">
     <Toaster position="bottom-center" richColors />
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
                  Notification
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
      <div className="col-lg-9">
        <div className="content_areya">
          <div className="mb-5">
            <p>
              Choose which notifications you receive. We’ll always send you
              important notifications related to your account. (Not all options
              are available at this time)
            </p>
          </div>
          <div className="container_box">
            <h2>Listing Notification</h2>
            <div className="listing-notification_outer">
              <div className="row_outer">
                <div className="label2">Listing Creation</div>
                <div className="checkbox">
                  <input type="checkbox" 
                  name='ListingCreation'
                  checked = {formData?.ListingCreation || false}
                  onChange={(e)=>hendleChangecheckBox(e)} 
                  />
                </div>
                <div className="input-container">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email" 
                    name='ListingCreationEmail'
                    value={formData?.ListingCreationEmail || ""}
                    onChange={(e)=>hendleChangeInput(e)}
                      disabled = {updateField  !== "ListingCreation"}
                  />
                </div>
                <div className="edit-icon">
                  {updateField == "ListingCreation" ? (
                    <a onClick={(e)=>saveEmails("ListingCreation")}>Save</a>
                  ):(

                  <i className="fa fa-pencil" onClick={(e)=>setUpdateField("ListingCreation")}/> 
                  )}
                </div>
              </div>
              <div className="row_outer">
                <div className="label2">
                  Compliance requirements apply to this listing
                </div>
                <div className="checkbox">
                  <input type="checkbox" 
                   name='ComplianceRequirements'
                  checked = {formData?.ComplianceRequirements || false}
                  onChange={(e)=>hendleChangecheckBox(e)}
                  
                  />
                </div>
                <div className="input-container">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                     name='ComplianceRequirementsEmail'
                    value={formData.ComplianceRequirementsEmail || ""}
                    onChange={(e)=>hendleChangeInput(e)}
                     disabled = {updateField  !== "ComplianceRequirements"}
                  />
                </div>
                <div className="edit-icon"> 
                  {updateField == "ComplianceRequirements" ? (
                    <a onClick={(e)=>saveEmails("ComplianceRequirements")}>Save</a>
                  ):(

                  <i className="fa fa-pencil" onClick={(e)=>setUpdateField("ComplianceRequirements")}/> 
                  )}
                </div>
              </div>
              <div className="row_outer">
                <div className="label2">Listing recommendations</div>
                <div className="checkbox">
                  <input type="checkbox" 
                   name='ListingRecommendations'
                  checked = {formData?.ListingRecommendations || false}
                  onChange={(e)=>hendleChangecheckBox(e)}
                  />
                </div>
                <div className="input-container">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                     name='ListingRecommendationsEmail'
                    value={formData.ListingRecommendationsEmail || ""}
                    onChange={(e)=>hendleChangeInput(e)}
                      disabled = {updateField  !== "ListingRecommendations"}
                  />
                </div>
                <div className="edit-icon">
                  {updateField == "ListingRecommendations" ? (
                    <a onClick={(e)=>saveEmails("ListingRecommendations")}>Save</a>
                  ):(

                  <i className="fa fa-pencil" onClick={(e)=>setUpdateField("ListingRecommendations")}/> 
                  )}
                </div>
              </div>
            </div>
            {/* =============devider====end============================= */}
            {/* =============devider====open============================= */}
            <h2>Order Notification</h2>
            <div className="listing-notification_outer">
              <div className="row_outer">
                <div className="label2">New Order (Solid. Ship)</div>
                <div className="checkbox">
                  <input type="checkbox" 
                   name='NewOrder'
                  checked = {formData?.NewOrder || false}
                  onChange={(e)=>hendleChangecheckBox(e)}
                  />
                </div>
                <div className="input-container">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                     name='NewOrderEmail'
                    value={formData.NewOrderEmail || ""}
                    onChange={(e)=>hendleChangeInput(e)}
                      disabled = {updateField  !== "NewOrder"}
                  />
                </div>
                <div className="edit-icon">
                  {updateField == "NewOrder" ? (
                    <a onClick={(e)=>saveEmails("NewOrder")}>Save</a>
                  ):(

                  <i className="fa fa-pencil" onClick={(e)=>setUpdateField("NewOrder")}/> 
                  )}
                </div>
              </div>
              <div className="row_outer">
                <div className="label2">New Order Cancellation Risk</div>
                <div className="checkbox">
                  <input type="checkbox" 
                   name='NewOrderCancellationRisk'
                  checked = {formData?.NewOrderCancellationRisk || false}
                  onChange={(e)=>hendleChangecheckBox(e)}
                  />
                </div>
                <div className="input-container">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                     name='NewOrderCancellationRiskEmail'
                    value={formData.NewOrderCancellationRiskEmail || ""}
                    onChange={(e)=>hendleChangeInput(e)}
                      disabled = {updateField  !== "NewOrderCancellationRisk"}
                  />
                </div>
                <div className="edit-icon">
                  {updateField == "NewOrderCancellationRisk" ? (
                    <a onClick={(e)=>saveEmails("NewOrderCancellationRisk")}>Save</a>
                  ):(

                  <i className="fa fa-pencil" onClick={(e)=>setUpdateField("NewOrderCancellationRisk")}/> 
                  )}
                </div>
              </div>
            </div>
            {/* =============devider====end============================= */}
            {/* =============devider=open================================ */}
            <h2>Returns &amp; Refunds</h2>
            <div className="listing-notification_outer">
              <div className="row_outer">
                <div className="label2">New Return Request</div>
                <div className="checkbox">
                  <input type="checkbox" 
                   name='NewReturnRequest'
                  checked = {formData?.NewReturnRequest || false}
                  onChange={(e)=>hendleChangecheckBox(e)}
                  />
                </div>
                <div className="input-container">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                     name='NewReturnRequestEmail'
                    value={formData.NewReturnRequestEmail || ""}
                    onChange={(e)=>hendleChangeInput(e)}
                      disabled = {updateField  !== "NewReturnRequest"}
                  />
                </div>
                <div className="edit-icon">
                  {updateField == "NewReturnRequest" ? (
                    <a onClick={(e)=>saveEmails("NewReturnRequest")}>Save</a>
                  ):(

                  <i className="fa fa-pencil" onClick={(e)=>setUpdateField("NewReturnRequest")}/> 
                  )}
                </div>
              </div>
              <div className="row_outer">
                <div className="label2">Return Delivered</div>
                <div className="checkbox">
                  <input type="checkbox" 
                   name='ReturnDelivered'
                  checked = {formData?.ReturnDelivered || false}
                  onChange={(e)=>hendleChangecheckBox(e)}
                  />
                </div>
                <div className="input-container">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                     name='ReturnDeliveredEmail'
                    value={formData.ReturnDeliveredEmail || ""}
                    onChange={(e)=>hendleChangeInput(e)}
                      disabled = {updateField  !== "ReturnDelivered"}
                  />
                </div>
                <div className="edit-icon">
                  {updateField == "ReturnDelivered" ? (
                    <a onClick={(e)=>saveEmails("ReturnDelivered")}>Save</a>
                  ):(

                  <i className="fa fa-pencil" onClick={(e)=>setUpdateField("ReturnDelivered")}/> 
                  )}
                </div>
              </div>
              <div className="row_outer">
                <div className="label2">Refund Issued</div>
                <div className="checkbox">
                  <input type="checkbox" 
                   name='RefundIssued'
                  checked = {formData?.RefundIssued  || false}
                  onChange={(e)=>hendleChangecheckBox(e)}
                  />
                </div>
                <div className="input-container">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                     name='RefundIssuedEmail'
                    value={formData.RefundIssuedEmail || ""}
                    onChange={(e)=>hendleChangeInput(e)}
                      disabled = {updateField  !== "RefundIssued"}
                  />
                </div>
                <div className="edit-icon">
                  {updateField == "RefundIssued" ? (
                    <a onClick={(e)=>saveEmails("RefundIssued")}>Save</a>
                  ):(

                  <i className="fa fa-pencil" onClick={(e)=>setUpdateField("RefundIssued")}/> 
                  )}
                </div>
              </div>
            </div>
            {/* =============devider====end============================= */}
            {/* =============devider=open================================ */}
            <h2>Growth Opportunities</h2>
            <div className="listing-notification_outer">
              <div className="row_outer">
                <div className="label2">Advertisement Recommendation</div>
                <div className="checkbox">
                  <input type="checkbox" 
                   name='AdvertisementRecommendation'
                  checked = {formData?.AdvertisementRecommendation  || false}
                  onChange={(e)=>hendleChangecheckBox(e)}
                  />
                </div>
                <div className="input-container">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                     name='AdvertisementRecommendationEmail'
                    value={formData.AdvertisementRecommendationEmail || ""}
                    onChange={(e)=>hendleChangeInput(e)}
                      disabled = {updateField  !== "AdvertisementRecommendation"}
                  />
                </div>
                <div className="edit-icon">
                   {updateField == "AdvertisementRecommendation" ? (
                    <a onClick={(e)=>saveEmails("AdvertisementRecommendation")}>Save</a>
                  ):(

                  <i className="fa fa-pencil" onClick={(e)=>setUpdateField("AdvertisementRecommendation")}/> 
                  )}
                </div>
              </div>
              <div className="row_outer">
                <div className="label2">Price Recommendation</div>
                <div className="checkbox">
                  <input type="checkbox" 
                   name='PriceRecommendation'
                  checked = {formData?.PriceRecommendation  || false}
                  onChange={(e)=>hendleChangecheckBox(e)}
                  />
                </div>
                <div className="input-container">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    name='PriceRecommendationEmail'
                    value={formData.PriceRecommendationEmail || ""}
                    onChange={(e)=>hendleChangeInput(e)}
                      disabled = {updateField  !== "PriceRecommendation"}
                  />
                </div>
                <div className="edit-icon">
                  {updateField == "PriceRecommendation" ? (
                    <a onClick={(e)=>saveEmails("PriceRecommendation")}>Save</a>
                  ):(

                  <i className="fa fa-pencil" onClick={(e)=>setUpdateField("PriceRecommendation")}/> 
                  )}
                </div>
              </div>
              <div className="row_outer">
                <div className="label2">
                  Sellora Promotions (Sales Event, Discount Coupon)
                </div>
                <div className="checkbox">
                  <input type="checkbox" 
                   name='SelloraPromotions'
                  checked = {formData?.SelloraPromotions || false}
                  onChange={(e)=>hendleChangecheckBox(e)}
                  />
                </div>
                <div className="input-container">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                     name='SelloraPromotionsEmail'
                    value={formData.SelloraPromotionsEmail || ""}
                    onChange={(e)=>hendleChangeInput(e)}
                      disabled = {updateField  !== "SelloraPromotions"}
                  />
                </div>
                <div className="edit-icon">
                  {updateField == "SelloraPromotions" ? (
                    <a onClick={(e)=>saveEmails("SelloraPromotions")}>Save</a>
                  ):(

                  <i className="fa fa-pencil" onClick={(e)=>setUpdateField("SelloraPromotions")}/> 
                  )}
                </div>
              </div>
            </div>
            {/* =============devider====end============================= */}
            {/* =============devider=open================================ */}
            <h2>Report</h2>
            <div className="listing-notification_outer">
              <div className="row_outer">
                <div className="label2">Report Status</div>
                <div className="checkbox">
                  <input type="checkbox" 
                   name='ReportStatus'
                  checked = {formData?.ReportStatus || false}
                  onChange={(e)=>hendleChangecheckBox(e)}
                  />
                </div>
                <div className="input-container">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    name='ReportStatusEmail'
                    value={formData.ReportStatusEmail || ""}
                    onChange={(e)=>hendleChangeInput(e)}
                      disabled = {updateField  !== "ReportStatus"}
                  />
                </div>
                <div className="edit-icon">
                   {updateField == "ReportStatus" ? (
                    <a onClick={(e)=>saveEmails("ReportStatus")}>Save</a>
                  ):(

                  <i className="fa fa-pencil" onClick={(e)=>setUpdateField("ReportStatus")}/> 
                  )}
                </div>
              </div>
            </div>
            {/* =============devider====end============================= */}
            <div className="ewr0_footer_text4290">
              <div className="row">
              {!editEmergency && (
                  <div className='col-lg-12 ' style={{display:"flex", justifyContent:"right"}}>
                    <div className='edit-icon'> 
                    <i className="fa fa-pencil" onClick={(e)=>setEditEmergency(true)}/> 
                    </div>
                  </div>
                )}
                
                <div className="col-lg-5">
                  <div className="noti">
                    <strong>Emergency Notification</strong>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="d-flex mb-2">
                    <div className="email_459804">Email</div>
                    <div className=" input-container">
                       {editEmergency ?(
                       <input type='email'  
                        placeholder="Email"
                      value={formData?.EmergencyNotificationEmail || ""} 
                      onChange={(e)=>{
                        setFormData((preData)=>({
                          ...preData,
                          EmergencyNotificationEmail: e.target.value
                        }))
                      }}
                      />

                      ):formData?.EmergencyNotificationEmail }

                      
                    </div>
                  </div>
                  <div className="d-flex mb-2">
                    <div className="email_459804 ">Phone Number</div>
                    <div className=" input-container">
                      {editEmergency ?(
                        <input type='text' 
                     value={formData?.EmergencyNotificationNumber || ""} 
                       placeholder="Phone Number"
                      onChange={(e)=>{
                        const value = e.target.value;
                        const numericValue = value.replace(/[^0-9]/g, "");
                        setFormData((preData)=>({
                          ...preData,
                          EmergencyNotificationNumber: numericValue
                        }))
                      }}/>

                      ):formData?.EmergencyNotificationNumber}
                      
                      </div> 
                  </div> 
                </div>
                {editEmergency && ( 
                <div className='col-lg-12 ' style={{display:"flex", justifyContent:"right"}}>
                  <div className='edit-icon'> 
                   <a href='#' onClick={(e)=>saveEmergencyInfo(e)}>save</a> 
                  </div>
                </div>

                )}
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <RightNav />
         
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
          <a
            type="a"
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
        <div className="modal_a">
          <a
            type="a"
            className="orange-btn cancel"
            data-bs-dismiss="modal"
          >
            Cancel
          </a>
          <a type="a" className="orange-btn">
            Save
          </a>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default page
