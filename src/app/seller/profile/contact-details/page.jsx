"use client";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AppContext } from "@/app/contaxtData/contextData";
import { baseUrl } from "@/Http/helper";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import $ from "jquery";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import HelpAndVideoTopSection from "../../HelpAndVideoTop";

function Page() {
  const { globalData, setGlobalData } = useContext(AppContext);
  const [sellor, setSellor] = useState(null);
  const router = useRouter();
  const phoneInputRef = useRef(null);
    const [errors, setErrors] = useState({});


  useEffect(() => {
    const input = document.querySelector("#mobile_code");

    if (input) {
      const iti = intlTelInput(phoneInputRef.current, {
        initialCountry:
          sellor && sellor.country_s_name ? sellor.country_s_name : "in",
        separateDialCode: true,
        // utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js',
      });

      const onCountryChange = () => {
        const selectedCountryData = iti.getSelectedCountryData();
        setSellor((preData) => ({
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
  }, [setSellor, sellor?.country_s_name]);
  useEffect(() => {
    if (globalData.sellor) {
      $(".loaderouter").css("display", "flex");
      fetch(
        `${baseUrl}api/seller/get-profile?user_id=${globalData.sellor._id}`,
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
            setSellor(res.data.data);
          }
        });
    }
  }, [globalData.sellor, ""]);

  const updateInputData = (e) => {
    const { name, value } = e.target;
    if (name == "mobile") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setSellor((preData) => ({
        ...preData,
        [name]: numericValue,
      }));
      return;
    }

    setSellor((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  function submitUpdateForm(e) {
    e.preventDefault();
    $(".loaderouter").css("display", "flex");
    fetch(`${baseUrl}api/seller/update-profile?update=contact_details`, {
      method: "POST",
      body: JSON.stringify(sellor),
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
          toast.success("Success! Contact Details Saved.");
          router.push("/seller/profile/display-information");
        }else if(res.data.status_code==403){
          setErrors(res.data.errors)
        }
      });
  }

  return (
    <div className="bg33">
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
      <div className="loaderouter">
        <div className="loader"></div>
      </div>
      {/* loader end */}

      <div className="rts-navigation-area-breadcrumb pb--10">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6"></div>
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
                  <form action="#" onSubmit={(e) => submitUpdateForm(e)}>
                    <div className="row">
                      <div className="col-lg-12">
                        <h2>Contact Details</h2>
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
                                  <label htmlFor="f-name">Name</label>
                                  <input
                                    type="text"
                                    required=""
                                    name="name"
                                    value={sellor ? sellor.name : ""}
                                    onChange={(e) => updateInputData(e)}
                                  />
                                  {errors.name && errors.name != ""? ( 
                                                    <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.name}</span>
                                                ):''}
                                </div>
                                <div className="registration_form_single-input">
                                  <label htmlFor="f-name">Mobile Number</label>
                                  <input
                                    type="text"
                                    id="mobile_code"
                                    ref={phoneInputRef}
                                    placeholder=" "
                                    name="mobile"
                                    value={sellor ? sellor.mobile : ""}
                                    onChange={(e) => updateInputData(e)}
                                  />
                                  {errors.mobile && errors.mobile != ""? ( 
                                                    <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.mobile}</span>
                                                ):''}
                                </div>
                                <div className="registration_form_single-input">
                                  <label htmlFor="f-name">Email address</label>
                                  <input
                                    type="email"
                                    required=""
                                    name="email"
                                    value={sellor ? sellor.email : ""}
                                    onChange={(e) => updateInputData(e)}
                                  />
                                   {errors.email && errors.email != ""? ( 
                                            <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.email}</span>
                                        ):''}
                                </div>
                                <button className="save">Update</button>
                              </div>
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
        </div>
      </div>
    </div>
  );
}

export default Page;
