"use client";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { AppContext } from "@/app/contaxtData/contextData";
import $ from "jquery";
import { baseUrl } from "@/Http/helper";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { citizenshipList } from "@/Http/citizenList"; 

function page() {
  
  const { globalData, setGlobalData } = useContext(AppContext);
    const countryRef = useRef();
    const router = useRouter();
    const [errors, setErrors] = useState({});
    const [errorsWin, setErrorsWin] = useState({});
    const [errorsRep, setErrorsRep] = useState({});
    const [sellor, setSellor] = useState(null);
    const phoneInputRef = useRef(null);
    const [addressData, setAddressData] = useState({
      
      
      name: "",
      address_line_1: "",
      address_line_2: "",
      city: "",
      state: "",
      zip_code: "",
      return_address: "",
    });
    const [addressDataShow, setAddressDataShow] = useState({
      
      
      name: "",
      address_line_1: "",
      address_line_2: "",
      city: "",
      state: "",
      zip_code: "",
      return_address: "",
    });
    const [replacementData, setReplacementData] = useState({
      
      
      replacement_department: "",
      enable:""
      
    });

    const [allCategory, setAllCategory] = useState([]);
     const [inputValues, setInputValues] = useState({});

    useEffect(() => {

      fetch(`${baseUrl}api/front/get-active-category`)
                .then((response)=>{
                    if(!response.ok){
                        throw new Error("Network Error");
                    }
                    return response.json();
                }).then((res)=>{
                    if(res.status){
                        //console.log(res.data);
                        setAllCategory(res.data || [])
                    }
                })

    }, [])

    
  
    useEffect(() => {
      if (globalData.sellor) {
        // $(".loaderouter").css("display", "flex");
        fetch(
          `${baseUrl}api/seller/get-profile?user_id=${globalData.sellor._id}&with_data=returnAddress`,
          {
            method: "GET",
          }
        )
          .then((response) => {
            if (!response.ok) {
              $(".loaderouter").css("display", "none");
              throw new Error("Network Error");
            }
            return response.json();
          })
          .then((res) => {
            $(".loaderouter").css("display", "none");
            if (res.status) {
              // check complete step
              //alert(res.data.data.complete_step)
              if (
                !res.data.data.complete_step ||
                res.data.data.complete_step < 3
              ) {
                router.push("/seller/al/contact-details");
              }
              setSellor(res.data.data);
              if (res.data.referData) {
                setAddressData(res.data.referData);
                setAddressDataShow(res.data.referData);
              }
            }
          });

          
          fetch(
          `${baseUrl}api/seller/update-profile/return-window?seller_id=${globalData.sellor._id}`,
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
              console.log('datatass',res.data.data)
              setInputValues(res.data.data);
              
            }
          });


      }
    }, [globalData.sellor]);
  
    
  
    const updateInputData = (e) => {
      const { name, value } = e.target;
  
      if(name=="zip_code"){
        let alphaNumericValue = value.replace(/[^a-zA-Z0-9]/g, '');
        if(alphaNumericValue && alphaNumericValue.length >8){
          alphaNumericValue = alphaNumericValue.slice(0,8)
        }
        setAddressData((preData)=>({
            ...preData,
            [name]:alphaNumericValue
          })) 
        return
      }
  
      if (name == "mobile") {
        const numericValue = value.replace(/[^0-9]/g, "");
        setAddressData((preData) => ({
          ...preData,
          [name]: numericValue,
        }));
        return;
      }
      setAddressData((preData) => ({
        ...preData,
        [name]: value,
      }));
    };
  
    function submitUpdateForm(e) {
      e.preventDefault();
      setErrors({});
  
      // $(".loaderouter").css("display", "flex");
      fetch(`${baseUrl}api/seller/update-profile?update=returnAddress`, {
        method: "POST",
        body: JSON.stringify({
          ...sellor,
          address: addressData,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            $(".loaderouter").css("display", "none");
            throw new Error("Network Error");
          }
          return response.json();
        })
        .then((res) => {
          $(".loaderouter").css("display", "none");
          if (res.status) {
            setAddressDataShow(addressData);
            toast.success("Success! Return Address Saved.");
            //router.push("/seller/profile/business-details");
            //$("#return-address-Modal").modal('hide')

            //$('#return-address-Modal').hide(true)
            //$('.modal-backdrop').remove();
            //$('body').removeClass('modal-open');
            //$('body').css('padding-right', '');

            const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('return-address-Modal'));
            modal.hide();

          } else if (res.data.status_code == 403) {
            setErrors(res.data.errors);
          }
        });
    }

     const handleInputChange = (index, value, minValue) => {
      
      if(value >= minValue){
      
      

      setErrorsWin(prev => ({
        ...prev,
        [index]: ''
      }));

    } else {
      setErrorsWin(prev => ({
        ...prev,
        [index]: 'This value not less than '+minValue+' days'
      }));

    }

    setInputValues(prev => ({
        ...prev,
        [index]: value
      }));


    };


    const submitUpdateReturnWindow = (e) => {
      e.preventDefault();
      //setErrorsWin({})
      //console.log(errorsWin);
      for (const [key, value] of Object.entries(errorsWin)) {
      if(value !=''){
        
      return;
      }
      }

    //console.log('yessssssss')
       fetch(`${baseUrl}api/seller/update-profile/return-window`, {
        method: "POST",
        body: JSON.stringify({
          seller_id:sellor._id,
          return_window: inputValues,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            $(".loaderouter").css("display", "none");
            throw new Error("Network Error");
          }
          return response.json();
        })
        .then((res) => {
          
          $(".loaderouter").css("display", "none");
          if (res.status) {
           //setAddressDataShow(addressData);
            toast.success("Success! Return Window Saved.");
            //router.push("/seller/profile/business-details");
            //$("#return-address-Modal").modal('hide')

            //$('#return-address-Modal').hide(true)
            //$('.modal-backdrop').remove();
            //$('body').removeClass('modal-open');
            //$('body').css('padding-right', '');

            const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('rules-by-department-Modal'));
            modal.hide();

          } else if (res.data.status_code == 403) {
            setErrorsWin(res.data.errors);
          }
        });
      
      //console.log(inputValues)


    }

    const submitUpdateReturnReplacement = (e) => {
      e.preventDefault();
      //setErrorsWin({})
     // console.log(replacementData);
      

    //console.log('yessssssss')
      /* fetch(`${baseUrl}api/seller/update-profile/return-window`, {
        method: "POST",
        body: JSON.stringify({
          seller_id:sellor._id,
          return_window: inputValues,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            $(".loaderouter").css("display", "none");
            throw new Error("Network Error");
          }
          return response.json();
        })
        .then((res) => {
          
          $(".loaderouter").css("display", "none");
          if (res.status) {
           //setAddressDataShow(addressData);
            toast.success("Success! Return Window Saved.");
            //router.push("/seller/profile/business-details");
            //$("#return-address-Modal").modal('hide')

            //$('#return-address-Modal').hide(true)
            //$('.modal-backdrop').remove();
            //$('body').removeClass('modal-open');
            //$('body').css('padding-right', '');

            const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('rules-by-department-Modal'));
            modal.hide();

          } else if (res.data.status_code == 403) {
            setErrorsWin(res.data.errors);
          }
        });
      */
      //console.log(inputValues)


    }

    const updateInputDataReplacement = (e) => {
      const { name, value, checked } = e.target;
      //console.log(name, value, checked)
      setReplacementData(prev => ({
        ...prev,
        [name]: value
      }));

    }
  
  
  return (
    <>
  <div className="notification_breadcomb_rts-navigation-area-breadcrumb">
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
                  Return Setting
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
        <div className="content_areya border__10_6">
          <div className="mb-5" style={{ marginLeft: 20 }}>
            <p>Seller Fulfilled Returns</p>
          </div>
          <div className="return_setting_outer">
            <div className="row">
              <div className="col-lg-4">
                <div className="return_0344">General Returns Settings</div>
              </div>
              <div className="col-lg-8">
                <div className="re_40540">
                  <h2>RMA (Return Merchandise Authorization) Rules</h2>
                  <p>
                    Sellora automatically approves all return requests based on
                    your predefined return settings and policies. For any
                    exceptions to these rules, customers will reach out to you
                    directly through buyer questions
                  </p>
                  <h4>Refunds</h4>
                  <label>
                    <input
                      type="checkbox"
                      disabled="disabled"
                      defaultChecked="checked"
                    />
                    I will manually issue all refunds within 48 hours of
                    receiving returned items
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="return_setting_outer">
            <div className="row">
              <div className="col-lg-4">
                <div className="return_0344">
                  Extended Holiday Return Window
                </div>
              </div>
              <div className="col-lg-8">
                <div className="re_40540">
                  <h2>Return window is extended for the holidays</h2>
                  <p>
                    Sellora's return window updates automatically, so sellers
                    need no action. Our industry-standard policy ensures shopper
                    peace of mind during holidays, building trust and loyalty
                    with your customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="return_setting_outer">
            <div className="row">
              <div className="col-lg-4">
                <div className="return_0344">Return Address (Required)</div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="second_heding">
                      <h2>Display Name</h2>
                      <p>{addressDataShow.name}</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="second_heding">
                      <h2>Street Address</h2>
                      <p>{addressDataShow.address_line_1}</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="second_heding">
                      <h2>City, State, Zip</h2>
                      <p>{addressDataShow.city}, {addressDataShow.state}, {addressDataShow.zip_code}</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="second_heding">
                      <h2>Actions</h2>
                      <div
                        className="edit_10_2"
                        data-bs-toggle="modal"
                        data-bs-target="#return-address-Modal"
                      >
                        {" "}
                        <i className="fa fa-pencil" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="return_setting_outer">
            <div className="row">
              <div className="col-lg-4">
                <div className="return_0344">Return Window</div>
                <p>Configure the return window</p>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="second_heding">
                      <h2>Rules by department</h2>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="second_heding">
                      <h2>Department</h2>
                      <p>All</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="second_heding">
                      <h2>Return Window</h2>
                      <p>30 Days</p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="second_heding">
                      <h2>Actions</h2>
                      <div
                        className="edit_10_2"
                        data-bs-toggle="modal"
                        data-bs-target="#rules-by-department-Modal"
                      >
                        {" "}
                        <i className="fa fa-pencil" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="return_setting_outer">
            <div className="row">
              <div className="col-lg-4">
                <div className="return_0344">Replacements by Department</div>
                <p>Enable or disable replacements in specific departments</p>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="second_heding">
                      <h2>Department</h2>
                      <p>All</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="second_heding">
                      <h2>Replacements Enabled ?</h2>
                      <p>No</p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="second_heding">
                      <h2>Actions</h2>
                      <div
                        className="edit_10_2"
                        data-bs-toggle="modal"
                        data-bs-target="#replacements-by-department-Modal"
                      >
                        {" "}
                        <i className="fa fa-pencil" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mlrtb">
            <div className="row">
              <div className="col-lg-3">
                <button className="add-replacement-rule">
                  Add Replacement Rule
                </button>
              </div>
              <div className="clear" />
              <div className="col-lg-9">
                <div className="input-group feedback">
                  <input type="text" className="form-control" />
                  <div className="input-group-append">
                    <button className="ask" type="button">
                      Feedback
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
      
    </div>
  </div>


  <div
    className="modal fade"
    id="return-address-Modal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <form action="#" onSubmit={(e) => submitUpdateForm(e)}>
        <div className="modal-header">
          <h5 className="modal-title title_request" id="exampleModalLabel">
            Edit Return Address
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
            <label>Display name<span className="mandatory_field">*</span></label>
            <input
              type="text"
              
              placeholder=""
              className="form-control"
              name="name"
                                    value={addressData.name}
                                    onChange={(e) => updateInputData(e)}
                                  />
                                  {errors.name && errors.name != "" ? (
                                    <span
                                      id="name_error"
                                      className="input-error-tip"
                                      style={{ display: "inline-block" }}
                                    >
                                      {errors.name}
                                    </span>
                                  ) : (
                                    ""
                                  )}
            
            <div className="printed">
              Printed on the 'To' field on the return label
            </div>
            <div className="printed">
              Printed as the second line on the return label
            </div>
            <label>Address Line 1<span className="mandatory_field">*</span></label>
            <input
              type="text"
              
              placeholder=""
              className="form-control"
              name="address_line_1"
                                    value={addressData.address_line_1}
                                    onChange={(e) => updateInputData(e)}
                                  />
                                  {errors.address_line_1 &&
                                  errors.address_line_1 != "" ? (
                                    <span
                                      id="name_error"
                                      className="input-error-tip"
                                      style={{ display: "inline-block" }}
                                    >
                                      {errors.address_line_1}
                                    </span>
                                  ) : (
                                    ""
                                  )}
            
            <label>Address Line 2 (Optional)</label>
            <input
              type="text"
              
              placeholder=""
              className="form-control"
              name="address_line_2"
                                    value={addressData.address_line_2}
                                    onChange={(e) => updateInputData(e)}
                                  />
                                  {errors.address_line_2 &&
                                  errors.address_line_2 != "" ? (
                                    <span
                                      id="name_error"
                                      className="input-error-tip"
                                      style={{ display: "inline-block" }}
                                    >
                                      {errors.address_line_2}
                                    </span>
                                  ) : (
                                    ""
                                  )}
            <div className="row">
              <div className="col-lg-4">
                <label>City<span className="mandatory_field">*</span></label>
                <input
                  type="text"
                  
                  placeholder="San Antonio"
                  className="form-control"
                  name="city"
                                        value={addressData.city}
                                        onChange={(e) => updateInputData(e)}
                                      />
                                      {errors.city && errors.city != "" ? (
                                        <span
                                          id="name_error"
                                          className="input-error-tip"
                                          style={{ display: "inline-block" }}
                                        >
                                          {errors.city}
                                        </span>
                                      ) : (
                                        ""
                                      )}
              </div>
              <div className="col-lg-4">
                <label>State</label>
                <input
                                        type="text"
                                        name="state"
                                        value={addressData.state}
                                        onChange={(e) => updateInputData(e)}
                                      />
                                      {errors.state && errors.state != "" ? (
                                        <span
                                          id="name_error"
                                          className="input-error-tip"
                                          style={{ display: "inline-block" }}
                                        >
                                          {errors.state}
                                        </span>
                                      ) : (
                                        ""
                                      )}
              </div>
              <div className="col-lg-4">
                <label>Zip Code<span className="mandatory_field">*</span></label>
                <input
                  type="text"
                  
                  placeholder=""
                  className="form-control"
                  name="zip_code"
                                        value={addressData.zip_code}
                                        onChange={(e) => updateInputData(e)}
                                      />
                                      {errors.zip_code &&
                                      errors.zip_code != "" ? (
                                        <span
                                          id="name_error"
                                          className="input-error-tip"
                                          style={{ display: "inline-block" }}
                                        >
                                          {errors.zip_code}
                                        </span>
                                      ) : (
                                        ""
                                      )}
              </div>
            </div>
            <label>Return Address (Not printed on the return label)</label>
            <input
              type="text"
              
              placeholder=""
              className="form-control"
              name="return_address"
                                        value={addressData.return_address}
                                        onChange={(e) => updateInputData(e)}
                                      />
                                      {errors.return_address &&
                                      errors.return_address != "" ? (
                                        <span
                                          id="name_error"
                                          className="input-error-tip"
                                          style={{ display: "inline-block" }}
                                        >
                                          {errors.return_address}
                                        </span>
                                      ) : (
                                        ""
                                      )}
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
          <button className="orange-btn">
            Save
          </button>
        </div>
        </form>
      </div>
    </div>
  </div>
  {/* popup-2-rules-by-department-Modal */}
  <div
    className="modal fade"
    id="rules-by-department-Modal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <form action="#" onSubmit={(e) => submitUpdateReturnWindow(e)}>
        <div className="modal-header">
          <h5 className="modal-title title_request" id="exampleModalLabel">
            Edit Department Rule
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
            <p>Please see the Marketplace Return’s Policy for return center.</p>
            
            
            <div className="table-responsive">
          <table
            className="table table-bordered user-man"
            style={{ marginTop: 20 }}
          >
            <thead className="table__head">
              <tr className="winner__table">
                <th width={210}>Category</th>
                <th width={100}></th>
                <th width={330}></th>
                
              </tr>
            </thead>
            <tbody>

              {allCategory && allCategory.map((categoryList, index) => {

                return (

                  <tr className="winner__table" key={`categoryList-${index}`}>
                <td>
                  <div className="name_348937">{categoryList.name}</div>
                </td>
                <td>{categoryList.min_return} Days</td>
                <td>
                  <div className="position-relateve">
                  <input
                    type="number"
                    min="1"
                    name="seller_return"
                    placeholder=""
                    className="form-control"
                    required
                    value={inputValues[categoryList._id]}
                  onChange={(e) => handleInputChange(categoryList._id, e.target.value, categoryList.min_return)}
                  />
                  <span className="days">Days</span>
                </div>
                {errorsWin[categoryList._id] &&
                                      errorsWin[categoryList._id] != "" ? (
                                        <span
                                          id="name_error"
                                          className="input-error-tip"
                                          style={{ display: "inline-block" }}
                                        >
                                          {errorsWin[categoryList._id]}
                                        </span>
                                      ) : (
                                        ""
                                      )}
                </td>
                
              </tr>

                )

              })
            }
              

            </tbody>
          </table>
        </div>
            
            
            
            { /* <label>Department </label>
            <input
              type="text"
              name=""
              placeholder="All"
              className="form-control"
            />
            <div className="printed">
              Printed on the 'To' field on the return label
            </div>
            <label>Return window</label>
            <div className="position-relateve">
              <input
                type="text"
                name=""
                placeholder={30}
                className="form-control"
              />
              <span className="days">Days</span>
            </div>
*/ }

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
          <button className="orange-btn">
            Save
          </button>
        </div>
        </form>
      </div>
    </div>
  </div>
  {/* popup-3-replacements-by-department-Modal */}
  <div
    className="modal fade"
    id="replacements-by-department-Modal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <form action="#" onSubmit={(e) => submitUpdateReturnReplacement(e)}>
        <div className="modal-header">
          <h5 className="modal-title title_request" id="exampleModalLabel">
            Edit Department Rule
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
            <p>Please see the Marketplace Return’s Policy for return center.</p>
            <label>Department </label>
            <input
              type="text"
              name="replacement_department"
              placeholder=""
              className="form-control"
              value={replacementData.replacement_department}
                                        onChange={(e) => updateInputDataReplacement(e)}
                                      />
                                      {errorsRep.replacement_department &&
                                      errorsRep.replacement_department != "" ? (
                                        <span
                                          id="name_error"
                                          className="input-error-tip"
                                          style={{ display: "inline-block" }}
                                        >
                                          {errorsRep.replacement_department}
                                        </span>
                                      ) : (
                                        ""
                                      )}
            <div className="printed">
              Printed on the 'To' field on the return label
            </div>
            <label>Replacements Enabled ?</label>
            <div className="container">
              <div className="radio">
                <input
                  id="radio-1"
                  name="enable"
                  type="radio"
                  defaultChecked=""
                  value="Yes"
                onChange={(e) => updateInputDataReplacement(e)}
                                      />
                                      {errorsRep.enable &&
                                      errorsRep.enable != "" ? (
                                        <span
                                          id="name_error"
                                          className="input-error-tip"
                                          style={{ display: "inline-block" }}
                                        >
                                          {errorsRep.enable}
                                        </span>
                                      ) : (
                                        ""
                                      )}
                <label htmlFor="radio-1" className="radio-label">
                  Yes{" "}
                </label>
              </div>
              <div className="radio">
                <input id="radio-2" name="enable" type="radio" value="No"
                onChange={(e) => updateInputDataReplacement(e)}
                />
                <label htmlFor="radio-2" className="radio-label">
                  No
                </label>
              </div>
              {/*  <div className="radio">
    <input id="radio-3" name="radio" type="radio" disabled>
    <label for="radio-3" className="radio-label">Disabled</label>
  </div> */}
            </div>
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
          <button className="orange-btn">
            Save
          </button>
        </div>
      </form>
      </div>
    </div>
  </div>

</>

  )
}

export default page
