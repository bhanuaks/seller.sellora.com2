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
    const [sellor, setSellor] = useState(null);
    const phoneInputRef = useRef(null);
    const [addressData, setAddressData] = useState({
      
      country_s_name: "in",
      mobile_code: "91",
      name: "",
      email: "",
      mobile: "",
      
    });
    const [loadingPopup, setLoadingPopup] = useState(false);
    
    
    
    useEffect(() => {
        const input = document.querySelector("#mobile_code");
    
        if (input) {
          const iti = intlTelInput(phoneInputRef.current, {
            initialCountry:
              addressData && addressData.country_s_name
                ? addressData.country_s_name
                : "in",
            separateDialCode: true,
            // utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js',
          });
    
          const onCountryChange = () => {
            const selectedCountryData = iti.getSelectedCountryData();
            setAddressData((preData) => ({
              ...preData,
              mobile_code: selectedCountryData.dialCode,
              country_s_name: selectedCountryData.iso2,
            }));
          };
          phoneInputRef.current.addEventListener("countrychange", onCountryChange);
    
          return () => {
            iti.destroy();
          };
        }
      }, [setAddressData, addressData.country_s_name]);
    
  
    
  
    
  
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
      //console.log(globalData.sellor._id, addressData)
      //$(".loaderouter").css("display", "flex");
      setLoadingPopup(true)
      fetch(`${baseUrl}api/seller/user-management`, {
        method: "POST",
        body: JSON.stringify({
          seller_id:globalData.sellor._id,
          name:addressData.name,
          email:addressData.email,
          mobile:addressData.mobile,
          country_s_name:addressData.country_s_name,
          mobile_code:addressData.mobile_code
          
        }),
      })
        .then((response) => {
          if (!response.ok) {
            setLoadingPopup(false)
            $(".loaderouter").css("display", "none");
            throw new Error("Network Error");
          }
          return response.json();
        })
        .then((res) => {
          $(".loaderouter").css("display", "none");
          setLoadingPopup(false)
          if (res.status) {
            //console.log(res.seller)
            //setAddressData(addressData);
            //toast.success("Success! Return Address Saved.");
            const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('add-new-user-Modal'));
            modal.hide();
            router.push("/seller/profile/user-management-list");
            //$("#return-address-Modal").modal('hide')

            //$('#return-address-Modal').hide(true)
            //$('.modal-backdrop').remove();
            //$('body').removeClass('modal-open');
            //$('body').css('padding-right', '');

            

          } else if (res.data.status_code == 403) {
            setErrors(res.data.errors);
          }
          
        });
        
    }

  return (
    <>
  <div className="notification_breadcomb_rts-navigation-area-breadcrumb">
    {/* loader start */}
      <div className="loaderouter">
        <div className="loader"></div>
      </div>
      {/* loader end */}
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
                  User Management
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
        <div className="content_areya border__10_6 min_height">
          <div className="mlrtb">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-4">
                <button
                  className="add-replacement-rule mb-5"
                  data-bs-toggle="modal"
                  data-bs-target="#add-new-user-Modal"
                >
                  Add New Users
                </button>
              </div>
              <div className="clear" />
              <div className="col-lg-6">
                <p className="text-center">
                  Assign and Manage Roles and Permissions to a User Add a user,
                  Select Role and Grant Permissions to provide access
                </p>
              </div>
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
        <form action="#" onSubmit={(e) => submitUpdateForm(e)}>
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
            <label>Name<span className="required">*</span></label>
            <input
              type="text"
              name="name"
              placeholder=""
              className="form-control"
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
            <label>
              Email Id<span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email Id"
              className="form-control"
            value={addressData.email}
                                    onChange={(e) => updateInputData(e)}
                                  />
                                  {errors.email && errors.email != "" ? (
                                    <span
                                      id="name_error"
                                      className="input-error-tip"
                                      style={{ display: "inline-block" }}
                                    >
                                      {errors.email}
                                    </span>
                                  ) : (
                                    ""
                                  )}
            <label>
              Contact Number<span className="required">*</span>
            </label>
            <input
              type="text"
              id="mobile_code"
              name="mobile"
              ref={phoneInputRef}
              placeholder=""
              className="form-control"
            value={addressData.mobile}
                                    onChange={(e) => updateInputData(e)}
                                  />
                                  {errors.mobile && errors.mobile != "" ? (
                                    <span
                                      id="name_error"
                                      className="input-error-tip"
                                      style={{ display: "inline-block" }}
                                    >
                                      {errors.mobile}
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
            disabled={loadingPopup}
          >
            Cancel
          </button>
          <button className="orange-btn"
          disabled={loadingPopup}
          >
            {loadingPopup ? 'Please wait...' : 'Save'}
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
