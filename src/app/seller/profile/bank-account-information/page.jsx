"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { AppContext } from "@/app/contaxtData/contextData";
import $ from "jquery";
import { baseUrl } from "@/Http/helper";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { citizenshipList } from "@/Http/citizenList";
import HelpAndVideoTopSection from "../../HelpAndVideoTop";
import RightNav from "../component/RightNav";

function Page() {
  const { globalData, setGlobalData } = useContext(AppContext);

  const countryRef = useRef();
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [sellor, setSellor] = useState(null);
  const phoneInputRef = useRef(null);
  const [bankDetails, setBankDetails] = useState({
    account_holder_name: "",
    bank_name: "",
    bank_address: "",
    state: "",
    country: "United States",
    zipcode: "",
    account_number: "",
    routing_number: "",
  });

  useEffect(() => {
    if (globalData.sellor) {
      $(".loaderouter").css("display", "flex");
      fetch(
        `${baseUrl}api/seller/get-profile?user_id=${globalData.sellor._id}&with_data=bankDetails`,
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
            if (
              !res.data.data.complete_step ||
              res.data.data.complete_step < 7
            ) {
              router.push("/seller/profile/contact-details");
            }

            setSellor(res.data.data);
            if (res.data.referData) {
              setBankDetails(res.data.referData);
            }
            setBankDetails((preData) => ({
              ...preData,
              seller_id: res.data.data._id,
            }));
          }
        });
    }
  }, [globalData.sellor]);

  const updateInputData = (e) => {
    const { name, value } = e.target;

    if(name=="zipcode"){
      let alphaNumericValue = value.replace(/[^a-zA-Z0-9]/g, '');
      if(alphaNumericValue && alphaNumericValue.length >8){
        alphaNumericValue = alphaNumericValue.slice(0,8)
      }
      setBankDetails((preData)=>({
          ...preData,
          [name]:alphaNumericValue
        })) 
      return
    }

    if (name == "account_number") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setBankDetails((preData) => ({
        ...preData,
        [name]: numericValue,
      }));

      if (numericValue == "") {
        setErrors((preError) => ({
          ...preError,
          [name]: `${name.replace("_", " ")} is required`,
        }));
      } else {
        setErrors((preError) => ({
          ...preError,
          [name]: ``,
        }));
      }

      return;
    }
    setBankDetails((preData) => ({
      ...preData,
      [name]: value,
    }));

    if (value == "") {
      setErrors((preError) => ({
        ...preError,
        [name]: `${name.replace("_", " ")} is required`,
      }));
    } else {
      setErrors((preError) => ({
        ...preError,
        [name]: ``,
      }));
    }
  };

  function submitUpdateForm(e) {
    e.preventDefault();
    setErrors({});

    $(".loaderouter").css("display", "flex");
    fetch(`${baseUrl}api/seller/update-profile?update=bankDetails`, {
      method: "POST",
      body: JSON.stringify(bankDetails),
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
          toast.success("Success! Account information saved successfully.");
          router.push("/seller/profile/payment-information");
        } else if (res.data.status_code == 403) {
          setErrors(res.data.errors);
        }
      });
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
      <div className="loaderouter">
        <div className="loader"></div>
      </div>
      {/* loader end */}

      <div className="notification_breadcomb_rts-navigation-area-breadcrumb">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="notification_breadcomb">
            <ul>
              <li>
                <a href="#">Dashboard</a>{" "}
              </li>
              <li>
                <a href="#" className="active_002">
                 Shipping Setting
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
            <div>
              <div className="form_outer">
                <div className="seller_edit_information">
                  <form action="#" onSubmit={(e) => submitUpdateForm(e)}>
                    <div className="row">
                      <div className="col-lg-12">
                        <h2>Bank Account Information</h2>
                        {/* <span className="edit_span">
                          <a href="#">Edit</a>
                        </span> */}
                      </div>
                      <div className="col-lg-10 offset-lg-1">
                        <div className="form_s2">
                          <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                              <div className="nnn_dform">

                              <div className="registration_form_single-input">
                                    <label htmlFor="f-name">
                                      Country
                                      <span className="mandatory_field">*</span>
                                    </label>
                                    <select
                                      name="country"
                                      value={bankDetails.country ?? ""}
                                      onChange={(e) => updateInputData(e)}
                                    >
                                      <option value={""}>select</option>
                                      {citizenshipList.map((country, index) => (
                                        <option value={country} key={index}>
                                          {country}
                                        </option>
                                      ))}
                                    </select>
                                    {errors.country && errors.country != "" ? (
                                      <span
                                        id="name_error"
                                        className="input-error-tip"
                                        style={{ display: "inline-block" }}
                                      >
                                        {errors.country}
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </div> 


                                <div className="registration_form_single-input">
                                  <label htmlFor="f-name">
                                    Account Holder's Name
                                    <span className="mandatory_field">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    name="account_holder_name"
                                    value={bankDetails.account_holder_name}
                                    onChange={(e) => updateInputData(e)}
                                    placeholder="Account Holder's Name"
                                  />
                                  {errors.account_holder_name &&
                                  errors.account_holder_name != "" ? (
                                    <span
                                      id="name_error"
                                      className="input-error-tip"
                                      style={{ display: "inline-block" }}
                                    >
                                      {errors.account_holder_name}
                                    </span>
                                  ) : (
                                    ""
                                  )}
                                </div>

                                {bankDetails.country == "India" && (

                                      <div className="registration_form_single-input">
                                        <label htmlFor="f-name">
                                        IFSC Code<span className="mandatory_field">*</span>
                                        </label>
                                        <input
                                          type="text"
                                          name="ifsc_code"
                                          value={bankDetails.ifsc_code}
                                          onChange={(e) => updateInputData(e)}
                                          placeholder="IFSC Code"
                                        />
                                        {errors.ifsc_code && errors.ifsc_code != "" ? (
                                          <span
                                            id="name_error"
                                            className="input-error-tip"
                                            style={{ display: "inline-block" }}
                                          >
                                            {errors.ifsc_code}
                                          </span>
                                        ) : (
                                          ""
                                        )}
                                      </div>

                                      )}

                                      {bankDetails.country == "United Kingdom" && (

                                      <div className="registration_form_single-input">
                                        <label htmlFor="f-name">
                                        Sort Code<span className="mandatory_field">*</span>
                                        </label>
                                        <input
                                          type="text"
                                          name="sort_code"
                                          value={bankDetails.sort_code || ""}
                                          onChange={(e) => updateInputData(e)}
                                          placeholder="Sort Code"
                                        />
                                        {errors.sort_code && errors.sort_code != "" ? (
                                          <span
                                            id="name_error"
                                            className="input-error-tip"
                                            style={{ display: "inline-block" }}
                                          >
                                            {errors.sort_code}
                                          </span>
                                        ) : (
                                          ""
                                        )}
                                      </div>

                                      )}

<div className="registration_form_single-input">
                                  <label htmlFor="f-name">
                                    Account Number
                                    <span className="mandatory_field">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    name="account_number"
                                    value={bankDetails.account_number}
                                    onChange={(e) => updateInputData(e)}
                                    placeholder="Account Number"
                                  />
                                  {errors.account_number &&
                                  errors.account_number != "" ? (
                                    <span
                                      id="name_error"
                                      className="input-error-tip"
                                      style={{ display: "inline-block" }}
                                    >
                                      {errors.account_number}
                                    </span>
                                  ) : (
                                    ""
                                  )}
                                </div>


                                <div className="registration_form_single-input">
                                  <label htmlFor="f-name">
                                    Bank Name
                                    <span className="mandatory_field">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    name="bank_name"
                                    value={bankDetails.bank_name}
                                    onChange={(e) => updateInputData(e)}
                                    placeholder="Bank Name"
                                  />
                                  {errors.bank_name &&
                                  errors.bank_name != "" ? (
                                    <span
                                      id="name_error"
                                      className="input-error-tip"
                                      style={{ display: "inline-block" }}
                                    >
                                      {errors.bank_name}
                                    </span>
                                  ) : (
                                    ""
                                  )}
                                </div>

                                
                                {/* <div className="registration_form_single-input">
                                  <label htmlFor="f-name">Routing Number</label>
                                  <input
                                    type="text"
                                    name="routing_number"
                                    value={bankDetails.routing_number || ""}
                                    onChange={(e) => updateInputData(e)}
                                    placeholder="Routing Number"
                                  />
                                 
                                </div> */}

                                <div className="registration_form_single-input row">
                                  <div className="col-lg-12">
                                    <label htmlFor="f-name">
                                      Bank Address
                                      <span className="mandatory_field">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      name="bank_address"
                                      value={bankDetails.bank_address || ""}
                                      onChange={(e) => updateInputData(e)}
                                      placeholder="address"
                                    />
                                    {errors.bank_address &&
                                      errors.bank_address != "" && (
                                        <span
                                          id="name_error"
                                          className="input-error-tip"
                                          style={{ display: "inline-block" }}
                                        >
                                          {errors.bank_address}
                                        </span>
                                      )}
                                  </div>

                                  
                                  <div className="col-lg-6">
                                    <label htmlFor="f-name">State</label>
                                    <input
                                      type="text"
                                      name="state"
                                      value={bankDetails.state || ""}
                                      onChange={(e) => updateInputData(e)}
                                      placeholder="state"
                                    />
                                    {/* {errors.state && errors.state != ""? ( 
                                                            <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.state}</span>
                                                        ):''} */}
                                  </div>

                                  <div className="col-lg-6">
                                    <label htmlFor="f-name">
                                      Zip code
                                      <span className="mandatory_field">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      name="zipcode"
                                      value={bankDetails.zipcode || ""}
                                      onChange={(e) => updateInputData(e)}
                                      placeholder="zipcode"
                                    />
                                    {errors.zipcode && errors.zipcode != "" ? (
                                      <span
                                        id="name_error"
                                        className="input-error-tip"
                                        style={{ display: "inline-block" }}
                                      >
                                        {errors.zipcode}
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-10 offset-lg-1">
                              <button className="save">Update</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <RightNav />
        </div>
      </div>
    </div>
  );
}

export default Page;
