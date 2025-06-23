"use client";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import Sidebar from "../afterlogincomponent/Sidebar";
import TopButton from "../afterlogincomponent/TopButton";
import { AppContext } from "@/app/contaxtData/contextData";
import { baseUrl } from "@/Http/helper";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import $ from "jquery";
import "../../../../../public/front/loader.css";
import CompletePercentage from "../afterlogincomponent/completePercentage";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";

function page() {
  const { globalData, setGlobalData } = useContext(AppContext);
  const [sellor, setSellor] = useState(null);
  const router = useRouter();
  const phoneInputRef = useRef(null);

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
      // $(".loaderouter").css("display", "flex");
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
    // $(".loaderouter").css("display", "flex");
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
          router.push("/seller/al/display-information");
        }
      });
  }

  return (
    <div className="seller_panel_mmmm">
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

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3" />
          <div className="col-lg-6">
            <div className="onboarding_form">
              <h3>Onboarding Dashboard</h3>
            </div>
          </div>
          <div className="col-lg-3">
            <TopButton />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="left_side_panel">
            
              <div className="card-6-inner">
                <p>Your onboarding completion status</p>
                <div className="meter orange nostripes">
                  <CompletePercentage sellor={sellor} />
                </div>
              </div>
              <Sidebar sellor={sellor} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mm_rts-cart-list-area2">
              <form action="#" onSubmit={(e) => submitUpdateForm(e)}>
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <div className="nnn_dform">
                      <h2>Contact Details</h2>
                      <div className="registration_form_single-input">
                        <label htmlFor="f-name">
                          Name<span className="mandatory_field">*</span>
                        </label>
                        <input
                          type="text"
                          required=""
                          name="name"
                          value={sellor ? sellor.name : ""}
                          onChange={(e) => updateInputData(e)}
                        />
                      </div>
                      <div className="registration_form_single-input">
                        <label htmlFor="f-name">
                          Mobile Number
                          <span className="mandatory_field">*</span>
                        </label>
                        <div className="country_code_outer">
                          <input
                            type="text"
                            id="mobile_code"
                            ref={phoneInputRef}
                            placeholder=" "
                            name="mobile"
                            value={sellor ? sellor.mobile : ""}
                            onChange={(e) => updateInputData(e)}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="registration_form_single-input">
                        <label htmlFor="f-name">
                          Email address
                          <span className="mandatory_field">*</span>
                        </label>
                        <input
                          type="email"
                          required=""
                          name="email"
                          value={sellor ? sellor.email : ""}
                          onChange={(e) => updateInputData(e)}
                          disabled
                        />
                      </div>
                      <button className="save">Save</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="breadcrumb_dashboard_right_box">
              <div className="need-help">
                <i className="far fa-question-circle" aria-hidden="true" /> Need
                help?
              </div>
              <p>
                Our expert team is here to guide you through setting up your
                shop on Sellora.
              </p>
              <div className="send_request_for_call">
                <Link href="#">Send request for call</Link>
              </div>
            </div>
            <div className="breadcrumb_dashboard_right_box">
              <div className="need-help">Frequently Asked Questions</div>
              <div className="faq_outer">
                <div className="accordion" id="accordionExample">
                  {/*    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           How do you plan to utilize this data in your business strategy?
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
        </div>
      </div> */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        How do you plan to utilize this data in your business
                        strategy?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading-0">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-0"
                        aria-expanded="false"
                        aria-controls="collapse-0"
                      >
                        Where will this information be used?
                      </button>
                    </h2>
                    <div
                      id="collapse-0"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading-0"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading-3">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-3"
                        aria-expanded="false"
                        aria-controls="collapse-3"
                      >
                        In which sections of your research paper will you
                        incorporate this information?
                      </button>
                    </h2>
                    <div
                      id="collapse-3"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading-3"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="send_request_for_call">
                <Link href="#">More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
