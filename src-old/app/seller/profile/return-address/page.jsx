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
import HelpAndVideoTopSection from "../../HelpAndVideoTop";

function Page() {
  const { globalData, setGlobalData } = useContext(AppContext);
  const countryRef = useRef();
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [sellor, setSellor] = useState(null);
  const phoneInputRef = useRef(null);
  const [addressData, setAddressData] = useState({
    country_s_name: "in",
    mobile_code: "91",
    mobile: "",
    name: "",
    address_line_1: "",
    address_line_2: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
  });

  useEffect(() => {
    if (globalData.sellor) {
      $(".loaderouter").css("display", "flex");
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
            if (
              !res.data.data.complete_step ||
              res.data.data.complete_step < 3
            ) {
              router.push("/seller/al/contact-details");
            }
            setSellor(res.data.data);
            if (res.data.referData) {
              setAddressData(res.data.referData);
            }
          }
        });
    }
  }, [globalData.sellor]);

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

    $(".loaderouter").css("display", "flex");
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
          toast.success("Success! Pickup Address Saved.");
          router.push("/seller/profile/business-details");
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

      <div className="rts-navigation-area-breadcrumb pb--10">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              {/*  <div className="navigator-breadcrumb-wrapper">
    <h3>Bulk Catalog Upload</h3>
  </div> */}
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
                      <h2>Return Address</h2>
                      {/* <span className="edit_span">
                        <a href="#">Edit</a>
                      </span> */}
                    </div>
                    <div className="col-lg-10 offset-lg-1">
                      <div className="form_s2">
                        <form action="#" onSubmit={(e) => submitUpdateForm(e)}>
                          <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                              <div className="nnn_dform">
                                <div className="registration_form_single-input">
                                  <label htmlFor="f-name">Name<span className="mandatory_field">*</span></label>
                                  <input
                                    type="text"
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
                                </div>
                                <div className="registration_form_single-input">
                                  <label htmlFor="f-name">Address Line 1<span className="mandatory_field">*</span></label>
                                  <input
                                    type="text"
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
                                </div>
                                <div className="registration_form_single-input">
                                  <label htmlFor="f-name">Address Line 2</label>
                                  <input
                                    type="text"
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
                                </div>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="registration_form_single-input">
                                      <label htmlFor="f-name">City<span className="mandatory_field">*</span></label>
                                      <input
                                        type="text"
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
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="registration_form_single-input">
                                      <label htmlFor="f-name">State</label>
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
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="registration_form_single-input">
                                      <label htmlFor="f-name">Zip Code<span className="mandatory_field">*</span></label>
                                      <input
                                        type="text"
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
                                  <div className="col-lg-6">
                                    <div className="registration_form_single-input">
                                      <label htmlFor="f-name">Country<span className="mandatory_field">*</span></label>
                                      <select
                                        name="country"
                                        value={addressData.country}
                                        onChange={(e) => updateInputData(e)}
                                      >
                                        <option value="">Select Country</option>
                                        {citizenshipList.length > 0 &&
                                          citizenshipList.map(
                                            (country, index) => (
                                              <option
                                                value={country}
                                                key={index}
                                              >
                                                {country}
                                              </option>
                                            )
                                          )}
                                      </select>

                                      {errors.country &&
                                      errors.country != "" ? (
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
                                  </div>
                                </div>
                                <div className="registration_form_single-input">
                                  <label htmlFor="f-name">Mobile Number<span className="mandatory_field">*</span></label>
                                  <input
                                    type="text"
                                    id="mobile_code"
                                    placeholder="Mobile number"
                                    ref={phoneInputRef}
                                    name="mobile"
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
                                <button className="save">Update</button>
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
  );
}

export default Page;
