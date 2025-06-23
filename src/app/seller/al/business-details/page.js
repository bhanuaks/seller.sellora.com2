"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Sidebar from "../afterlogincomponent/Sidebar";
import Link from "next/link";
import TopButton from "../afterlogincomponent/TopButton";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { AppContext } from "@/app/contaxtData/contextData";
import $ from "jquery";
import { baseUrl } from "@/Http/helper";
import { useRouter } from "next/navigation";
import "../../../../../public/front/error.css";
import "../../../../../public/front/loader.css";
import { ToastContainer, toast } from "react-toastify";
import CompletePercentage from "../afterlogincomponent/completePercentage";
import { citizenshipList } from "@/Http/citizenList";

function page() {
  const { globalData, setGlobalData } = useContext(AppContext);

  const countryRef = useRef();
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [sellor, setSellor] = useState(null);
  const phoneInputRef = useRef(null);
  const [businessDetails, setBusinessDetails] = useState({
    country_s_name: "us",
    mobile_code: "1",
    mobile: "",
    business_name: "",
    business_address: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
    are_you_beneficial_for_business: "No",
    are_you_business_representative: "No",
    beneficiary_first_name: "",
    beneficiary_last_name: "",
    beneficiary_date_of_birth: "",
    beneficiary_nationality: "",
    proof_of_identification: "United States",
    identification_proof_file: "",
    beneficiary_address: "",
    beneficiary_city: "",
    beneficiary_state: "",
    beneficiary_zip_code: "",
    beneficiary_country: "United States",
    proof_of_address: "",
    proof_of_address_file: "",
  });

  useEffect(() => {
    if (globalData.sellor) {
      // $(".loaderouter").css("display", "flex");
      fetch(
        `${baseUrl}api/seller/get-profile?user_id=${globalData.sellor._id}&with_data=businessDetails`,
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
              res.data.data.complete_step < 4
            ) {
              router.push("/seller/al/contact-details");
            }
            setSellor(res.data.data);
            if (res.data.referData) {
              setBusinessDetails(res.data.referData);
            }
            setBusinessDetails((preData) => ({
              ...preData,
              seller_id: res.data.data._id,
            }));
          }
        });
    }
  }, [globalData.sellor]);

  useEffect(() => {
    const input = document.querySelector("#mobile_code");

    if (input) {
      const iti = intlTelInput(phoneInputRef.current, {
        initialCountry:
          businessDetails && businessDetails.country_s_name
            ? businessDetails.country_s_name
            : "us",
        separateDialCode: true,
        // utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js',
      });

      const onCountryChange = () => {
        const selectedCountryData = iti.getSelectedCountryData();
        setBusinessDetails((preData) => ({
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
  }, [setBusinessDetails, businessDetails.country_s_name]);

  const updateInputData = (e) => {
    const { name, value, checked, files } = e.target;

    if( name == "zip_code" || name == "beneficiary_zip_code"){
      let alphaNumericValue = value.replace(/[^a-zA-Z0-9]/g, '');
      if(alphaNumericValue && alphaNumericValue.length >8){
        alphaNumericValue = alphaNumericValue.slice(0,8)
      }
          setBusinessDetails((preData)=>({
              ...preData,
              [name]:alphaNumericValue
            })) 
          return
      }


    if (
      name == "identification_proof_file" ||
      name == "proof_of_address_file"
    ) {

      const file = files?.[0] || null;
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];
      if (!allowedTypes.includes(file.type)) {
        alert("Only JPG, PNG, and PDF files are allowed.");
        return;
      }
      const maxSize = 10 * 1024 * 1024;
      if (file.size >= maxSize) {
        alert("File size must be less than 10MB.");
        return;
      }

      setBusinessDetails((preData) => ({
        ...preData,
        [name]: file,
      }));
      
      const fileName = file ? file.name : "Select file";
      setTimeout(() => {
        const fileLabel = document.getElementById(`${name}_name`); 
        if (fileLabel) fileLabel.textContent = fileName;
      }, 300);
     

      // =============================
      if (value == "") {
        setErrors((preError) => ({
          ...preError,
          [name]: `${name} is required`,
        }));
      } else {
        setErrors((preError) => ({
          ...preError,
          [name]: ``,
        }));
      }

      return;
    }

    if (
      name == "mobile"  
    ) {
      const numericValue = value.replace(/[^0-9]/g, "");
      setBusinessDetails((preData) => ({
        ...preData,
        [name]: numericValue,
      }));

      // ==============================
      if (numericValue == "") {
        setErrors((preError) => ({
          ...preError,
          [name]: `${name} is required`,
        }));
      } else {
        setErrors((preError) => ({
          ...preError,
          [name]: ``,
        }));
      }
      return;
    }
    setBusinessDetails((preData) => ({
      ...preData,
      [name]: value,
    }));

    if (value == "") {
      setErrors((preError) => ({
        ...preError,
        [name]: `${name} is required`,
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
    // $(".loaderouter").css("display", "flex");
    const formData = createFormData(businessDetails);
    fetch(`${baseUrl}api/seller/update-profile?update=businessDetails`, {
      method: "POST",
      body: formData,
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
          toast.success("Success! Business Details Saved.");
          router.push("/seller/al/tax-information");
        } else if (res.data.status_code == 403) {
          setErrors(res.data.errors);
        }
      });
  }

  const createFormData = (data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(key, value);
      } else if (typeof value === "object" && value !== null) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value);
      }
    });

    return formData;
  };

  return (
    <div className="seller_panel_mmmm">
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
              {/*  <div className="meter orange nostripes">
    <span style="width: 15%"></span>
  </div> */}
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
              <form action={"#"} onSubmit={(e) => submitUpdateForm(e)}>
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <div className="nnn_dform">
                      <h2>Business Details</h2>
                      <div className="registration_form_single-input">
                        <label htmlFor="f-name">
                          Registered Business Name
                          <span className="mandatory_field">*</span>
                        </label>
                        <input
                          type="text"
                          name="business_name"
                          value={businessDetails.business_name}
                          onChange={(e) => updateInputData(e)}
                        />
                        {errors.business_name && errors.business_name != "" ? (
                          <span
                            id="name_error"
                            className="input-error-tip"
                            style={{ display: "inline-block" }}
                          >
                            {errors.business_name}
                          </span>
                        ) : (
                          ""
                        )}
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
                            placeholder=" "
                            name="mobile"
                            value={businessDetails.mobile}
                            ref={phoneInputRef}
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
                      <div className="registration_form_single-input">
                        <label htmlFor="f-name">
                          Registered Business Address
                          <span className="mandatory_field">*</span>
                        </label>
                        <input
                          type="text"
                          name="business_address"
                          value={businessDetails.business_address}
                          onChange={(e) => updateInputData(e)}
                        />
                        {errors.business_address &&
                        errors.business_address != "" ? (
                          <span
                            id="name_error"
                            className="input-error-tip"
                            style={{ display: "inline-block" }}
                          >
                            {errors.business_address}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">
                              City<span className="mandatory_field">*</span>
                            </label>
                            <input
                              type="text"
                              name="city"
                              value={businessDetails.city}
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
                            <label htmlFor="f-name">
                              State<span className="mandatory_field">*</span>
                            </label>
                            <input
                              type="text"
                              name="state"
                              value={businessDetails.state}
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
                            <label htmlFor="f-name">
                              Zip code<span className="mandatory_field">*</span>
                            </label>
                            <input
                              type="text"
                              name="zip_code"
                              value={businessDetails.zip_code}
                              onChange={(e) => updateInputData(e)}
                            />
                            {errors.zip_code && errors.zip_code != "" ? (
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
                            <label htmlFor="f-name">
                              Country<span className="mandatory_field">*</span>
                            </label>
                            {/* <input type="text" 
                        name='country'
                        value={businessDetails.country}
                        onChange={(e)=>updateInputData(e)} 
                      /> */}
                            <select
                              name="country"
                              value={businessDetails.country}
                              onChange={(e) => updateInputData(e)}
                            >
                              <option value="">Select Country</option>
                              <option value="Afghanistan">Afghanistan</option>
                              <option value="Albania">Albania</option>
                              <option value="Algeria">Algeria</option>
                              <option value="American Samoa">
                                American Samoa
                              </option>
                              <option value="Andorra">Andorra</option>
                              <option value="Angola">Angola</option>
                              <option value="Anguilla">Anguilla</option>
                              <option value="Antarctica">Antarctica</option>
                              <option value="Antigua and Barbuda">
                                Antigua and Barbuda
                              </option>
                              <option value="Argentina">Argentina</option>
                              <option value="Armenia">Armenia</option>
                              <option value="Australia">Australia</option>
                              <option value="Austria">Austria</option>
                              <option value="Azerbaijan">Azerbaijan</option>
                              <option value="Bahamas">Bahamas</option>
                              <option value="Bahrain">Bahrain</option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Barbados">Barbados</option>
                              <option value="Belarus">Belarus</option>
                              <option value="Belgium">Belgium</option>
                              <option value="Belize">Belize</option>
                              <option value="Benin">Benin</option>
                              <option value="Bermuda">Bermuda</option>
                              <option value="Bhutan">Bhutan</option>
                              <option value="Bolivia">Bolivia</option>
                              <option value="Bosnia and Herzegovina">
                                Bosnia and Herzegovina
                              </option>
                              <option value="Botswana">Botswana</option>
                              <option value="Brazil">Brazil</option>
                              <option value="Brunei">Brunei</option>
                              <option value="Bulgaria">Bulgaria</option>
                              <option value="Burkina Faso">Burkina Faso</option>
                              <option value="Burundi">Burundi</option>
                              <option value="Cambodia">Cambodia</option>
                              <option value="Cameroon">Cameroon</option>
                              <option value="Canada">Canada</option>
                              <option value="Cape Verde">Cape Verde</option>
                              <option value="Central African Republic">
                                Central African Republic
                              </option>
                              <option value="Chad">Chad</option>
                              <option value="Chile">Chile</option>
                              <option value="China">China</option>
                              <option value="Colombia">Colombia</option>
                              <option value="Comoros">Comoros</option>
                              <option value="Congo">Congo</option>
                              <option value="Costa Rica">Costa Rica</option>
                              <option value="Croatia">Croatia</option>
                              <option value="Cuba">Cuba</option>
                              <option value="Cyprus">Cyprus</option>
                              <option value="Czech Republic">
                                Czech Republic
                              </option>
                              <option value="Denmark">Denmark</option>
                              <option value="Djibouti">Djibouti</option>
                              <option value="Dominica">Dominica</option>
                              <option value="Dominican Republic">
                                Dominican Republic
                              </option>
                              <option value="Ecuador">Ecuador</option>
                              <option value="Egypt">Egypt</option>
                              <option value="El Salvador">El Salvador</option>
                              <option value="Equatorial Guinea">
                                Equatorial Guinea
                              </option>
                              <option value="Eritrea">Eritrea</option>
                              <option value="Estonia">Estonia</option>
                              <option value="Ethiopia">Ethiopia</option>
                              <option value="Fiji">Fiji</option>
                              <option value="Finland">Finland</option>
                              <option value="France">France</option>
                              <option value="Gabon">Gabon</option>
                              <option value="Gambia">Gambia</option>
                              <option value="Georgia">Georgia</option>
                              <option value="Germany">Germany</option>
                              <option value="Ghana">Ghana</option>
                              <option value="Greece">Greece</option>
                              <option value="Grenada">Grenada</option>
                              <option value="Guatemala">Guatemala</option>
                              <option value="Guinea">Guinea</option>
                              <option value="Guyana">Guyana</option>
                              <option value="Haiti">Haiti</option>
                              <option value="Honduras">Honduras</option>
                              <option value="Hungary">Hungary</option>
                              <option value="Iceland">Iceland</option>
                              <option value="India">India</option>
                              <option value="Indonesia">Indonesia</option>
                              <option value="Iran">Iran</option>
                              <option value="Iraq">Iraq</option>
                              <option value="Ireland">Ireland</option>
                              <option value="Israel">Israel</option>
                              <option value="Italy">Italy</option>
                              <option value="Jamaica">Jamaica</option>
                              <option value="Japan">Japan</option>
                              <option value="Jordan">Jordan</option>
                              <option value="Kazakhstan">Kazakhstan</option>
                              <option value="Kenya">Kenya</option>
                              <option value="Kuwait">Kuwait</option>
                              <option value="Kyrgyzstan">Kyrgyzstan</option>
                              <option value="Laos">Laos</option>
                              <option value="Latvia">Latvia</option>
                              <option value="Lebanon">Lebanon</option>
                              <option value="Lesotho">Lesotho</option>
                              <option value="Liberia">Liberia</option>
                              <option value="Libya">Libya</option>
                              <option value="Lithuania">Lithuania</option>
                              <option value="Luxembourg">Luxembourg</option>
                              <option value="Madagascar">Madagascar</option>
                              <option value="Malawi">Malawi</option>
                              <option value="Malaysia">Malaysia</option>
                              <option value="Maldives">Maldives</option>
                              <option value="Mali">Mali</option>
                              <option value="Malta">Malta</option>
                              <option value="Mauritius">Mauritius</option>
                              <option value="Mexico">Mexico</option>
                              <option value="Mongolia">Mongolia</option>
                              <option value="Morocco">Morocco</option>
                              <option value="Nepal">Nepal</option>
                              <option value="Netherlands">Netherlands</option>
                              <option value="New Zealand">New Zealand</option>
                              <option value="Nigeria">Nigeria</option>
                              <option value="Norway">Norway</option>
                              <option value="Oman">Oman</option>
                              <option value="Pakistan">Pakistan</option>
                              <option value="Panama">Panama</option>
                              <option value="Peru">Peru</option>
                              <option value="Philippines">Philippines</option>
                              <option value="Poland">Poland</option>
                              <option value="Portugal">Portugal</option>
                              <option value="Qatar">Qatar</option>
                              <option value="Romania">Romania</option>
                              <option value="Russia">Russia</option>
                              <option value="Saudi Arabia">Saudi Arabia</option>
                              <option value="South Africa">South Africa</option>
                              <option value="Spain">Spain</option>
                              <option value="Sweden">Sweden</option>
                              <option value="Switzerland">Switzerland</option>
                              <option value="Thailand">Thailand</option>
                              <option value="Turkey">Turkey</option>
                              <option value="Ukraine">Ukraine</option>
                              <option value="United Arab Emirates">
                                United Arab Emirates
                              </option>
                              <option value="United Kingdom">
                                United Kingdom
                              </option>
                              <option value="United States">
                                United States
                              </option>
                              <option value="Vietnam">Vietnam</option>
                              <option value="Zambia">Zambia</option>
                              <option value="Zimbabwe">Zimbabwe</option>
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
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <h3>Personal Information of a Beneficiary</h3>
                      </div>
                      <div className="registration_form_single-input">
                        <label htmlFor="f-name">
                          Are you Beneficiary for business?
                          <span className="mandatory_field">*</span>
                        </label>
                        <div className="row align-items-center">
                          <div className="col-lg-5">
                            <div className="business-type">
                              <label>
                                <input
                                  type="radio"
                                  name="are_you_beneficial_for_business"
                                  value="Yes"
                                  checked={
                                    businessDetails.are_you_beneficial_for_business ==
                                    "Yes"
                                      ? true
                                      : false
                                  }
                                  onChange={(e) => updateInputData(e)}
                                />
                                Yes
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="are_you_beneficial_for_business"
                                  value="No"
                                  onChange={(e) => updateInputData(e)}
                                  checked={
                                    businessDetails.are_you_beneficial_for_business ==
                                    "No"
                                      ? true
                                      : false
                                  }
                                />
                                No
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-7">
                            {businessDetails.are_you_beneficial_for_business ==
                              "Yes" && (
                              <>
                                <input
                                  type="text"
                                  placeholder="Designation"
                                  name="beneficial_designation"
                                  value={businessDetails.beneficial_designation}
                                  onChange={(e) => updateInputData(e)}
                                />
                                {errors.beneficial_designation &&
                                errors.beneficial_designation != "" ? (
                                  <span
                                    id="name_error"
                                    className="input-error-tip"
                                    style={{ display: "inline-block" }}
                                  >
                                    {errors.beneficial_designation}
                                  </span>
                                ) : (
                                  ""
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {businessDetails.are_you_beneficial_for_business !==
                        "Yes" && (
                        <div className="registration_form_single-input">
                          <label htmlFor="f-name">
                            Are you business-representative?
                            <span className="mandatory_field">*</span>
                          </label>
                          <div className="row align-items-center">
                            <div className="col-lg-5">
                              <div className="business-type">
                                <label>
                                  <input
                                    type="radio"
                                    name="are_you_business_representative"
                                    value={"Yes"}
                                    checked={
                                      businessDetails.are_you_business_representative ==
                                      "Yes"
                                        ? true
                                        : false
                                    }
                                    onChange={(e) => updateInputData(e)}
                                  />
                                  Yes
                                </label>
                                <label>
                                  <input
                                    type="radio"
                                    name="are_you_business_representative"
                                    value={"No"}
                                    onChange={(e) => updateInputData(e)}
                                    checked={
                                      businessDetails.are_you_business_representative ==
                                      "No"
                                        ? true
                                        : false
                                    }
                                  />
                                  No
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-7">
                              {businessDetails.are_you_business_representative ==
                                "Yes" && (
                                <>
                                  <input
                                    type="text"
                                    placeholder="Designation"
                                    name="representative_designation"
                                    value={
                                      businessDetails.representative_designation
                                    }
                                    onChange={(e) => updateInputData(e)}
                                  />
                                  {errors.representative_designation &&
                                  errors.representative_designation != "" ? (
                                    <span
                                      id="name_error"
                                      className="input-error-tip"
                                      style={{ display: "inline-block" }}
                                    >
                                      {errors.representative_designation}
                                    </span>
                                  ) : (
                                    ""
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="row">
                        <div className="col-lg-6">
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">
                              First Name
                              <span className="mandatory_field">*</span>
                            </label>
                            <input
                              type="text"
                              name="beneficiary_first_name"
                              value={businessDetails.beneficiary_first_name}
                              onChange={(e) => updateInputData(e)}
                            />

                            {errors.beneficiary_first_name &&
                            errors.beneficiary_first_name != "" ? (
                              <span
                                id="name_error"
                                className="input-error-tip"
                                style={{ display: "inline-block" }}
                              >
                                {errors.beneficiary_first_name}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">
                              Last Name
                              <span className="mandatory_field">*</span>
                            </label>
                            <input
                              type="text"
                              name="beneficiary_last_name"
                              value={businessDetails.beneficiary_last_name}
                              onChange={(e) => updateInputData(e)}
                            />
                            {errors.beneficiary_last_name &&
                            errors.beneficiary_last_name != "" ? (
                              <span
                                id="name_error"
                                className="input-error-tip"
                                style={{ display: "inline-block" }}
                              >
                                {errors.beneficiary_last_name}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="registration_form_single-input">
                        <label htmlFor="f-name">
                          Date of Birth
                          <span className="mandatory_field">*</span>
                        </label>
                        <input
                          type="date"
                          name="beneficiary_date_of_birth"
                          value={businessDetails.beneficiary_date_of_birth}
                          onChange={(e) => updateInputData(e)}
                          max={
                            new Date(
                              new Date().setFullYear(
                                new Date().getFullYear() - 18
                              )
                            )
                              .toISOString()
                              .split("T")[0]
                          }
                          
                        />
                        <div className="col-lg-12"></div>

                        {errors.beneficiary_date_of_birth &&
                        errors.beneficiary_date_of_birth != "" ? (
                          <span
                            id="name_error"
                            className="input-error-tip"
                            style={{ display: "inline-block" }}
                          >
                            {errors.beneficiary_date_of_birth}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="registration_form_single-input">
                        <label htmlFor="f-name">
                        Citizenship<span className="mandatory_field">*</span>
                        </label>
                        <select name="beneficiary_nationality"
                         value={businessDetails.beneficiary_nationality}
                         onChange={(e) => updateInputData(e)}
                         >
                          <option value={""}>select</option>
                          {citizenshipList.map((item, index)=>(
                            <option value={item} key={index}>{item}</option>
                          ))}
                        </select>
                        {/* <input
                          type="text"
                          name="beneficiary_nationality"
                          value={businessDetails.beneficiary_nationality}
                          onChange={(e) => updateInputData(e)}
                        /> */}
                        {errors.beneficiary_nationality &&
                        errors.beneficiary_nationality != "" ? (
                          <span
                            id="name_error"
                            className="input-error-tip"
                            style={{ display: "inline-block" }}
                          >
                            {errors.beneficiary_nationality}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="registration_form_single-input">
                        <label htmlFor="f-name">
                          Proof of Identification
                          <span className="mandatory_field">*</span>
                        </label>
                        <select
                          name="proof_of_identification"
                          value={businessDetails.proof_of_identification}
                          onChange={(e) => updateInputData(e)}
                        >
                          <option value={""}>select</option>
                          <option>Passport</option>
                          <option>Driving Licence</option>
                          <option>National Identity</option>
                        </select>
                        {errors.proof_of_identification &&
                        errors.proof_of_identification != "" ? (
                          <span
                            id="name_error"
                            className="input-error-tip"
                            style={{ display: "inline-block" }}
                          >
                            {errors.proof_of_identification}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="registration_form_single-input">
                        <label htmlFor="f-name">
                          Attach File <span className="mandatory_field">*</span>
                        </label>
                        <div className="file-placeholder">
                          <label />
                          <input
                            type="file"
                            className="fileUpload"
                            name="identification_proof_file"
                            onChange={(e) => updateInputData(e)}
                          />
                          <div className="file-browse">
                            <span
                              className="file-browse-txt"
                              id="identification_proof_file_name"
                            >
                              {businessDetails.identification_proof_file &&
                              typeof businessDetails.identification_proof_file ==
                                "string"
                                ? businessDetails.identification_proof_file.split(
                                    "/"
                                  ).length == 3
                                  ? businessDetails.identification_proof_file.split(
                                      "/"
                                    )[2]
                                  : businessDetails?.identification_proof_file?.name
                                : "Select file"}
                            </span>
                             
                            <span className="browse">Upload</span>
                          </div>
                          <span style={{color:"#000"}}><strong>Note:</strong> Allowed file types: .jpg, .png, .pdf. Maximum file size: 10MB.</span>

                        </div>
                        {businessDetails.identification_proof_file &&
                        typeof businessDetails.identification_proof_file ==
                          "string" ? (
                          <a
                            target="_blank"
                            className="view_image"
                            href={`${baseUrl}${businessDetails.identification_proof_file}`}
                          >
                            View File
                          </a>
                        ) : null}

                        {errors.identification_proof_file &&
                        errors.identification_proof_file != "" ? (
                          <span
                            id="name_error"
                            className="input-error-tip"
                            style={{ display: "inline-block" }}
                          >
                            {errors.identification_proof_file}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="registration_form_single-input">
                        <label htmlFor="f-name">
                          Address<span className="mandatory_field">*</span>
                        </label>
                        <input
                          type="text"
                          name="beneficiary_address"
                          value={businessDetails.beneficiary_address}
                          onChange={(e) => updateInputData(e)}
                        />
                        {errors.beneficiary_address &&
                        errors.beneficiary_address != "" ? (
                          <span
                            id="name_error"
                            className="input-error-tip"
                            style={{ display: "inline-block" }}
                          >
                            {errors.beneficiary_address}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">
                              City<span className="mandatory_field">*</span>
                            </label>
                            <input
                              type="text"
                              name="beneficiary_city"
                              value={businessDetails.beneficiary_city}
                              onChange={(e) => updateInputData(e)}
                            />
                            {errors.beneficiary_city &&
                            errors.beneficiary_city != "" ? (
                              <span
                                id="name_error"
                                className="input-error-tip"
                                style={{ display: "inline-block" }}
                              >
                                {errors.beneficiary_city}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">
                              State<span className="mandatory_field">*</span>
                            </label>
                            <input
                              type="text"
                              name="beneficiary_state"
                              value={businessDetails.beneficiary_state}
                              onChange={(e) => updateInputData(e)}
                            />
                            {errors.beneficiary_state &&
                            errors.beneficiary_state != "" ? (
                              <span
                                id="name_error"
                                className="input-error-tip"
                                style={{ display: "inline-block" }}
                              >
                                {errors.beneficiary_state}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">
                              Zip code<span className="mandatory_field">*</span>
                            </label>
                            <input
                              type="text"
                              name="beneficiary_zip_code"
                              value={businessDetails.beneficiary_zip_code}
                              onChange={(e) => updateInputData(e)}
                            />

                            {errors.beneficiary_zip_code &&
                            errors.beneficiary_zip_code != "" ? (
                              <span
                                id="name_error"
                                className="input-error-tip"
                                style={{ display: "inline-block" }}
                              >
                                {errors.beneficiary_zip_code}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">
                              Country<span className="mandatory_field">*</span>
                            </label>
                            {/* <input type="text" 
                      name='beneficiary_country'
                      value={businessDetails.beneficiary_country}
                        onChange={(e)=>updateInputData(e)} 
                        /> */}

                            <select
                              name="beneficiary_country"
                              value={businessDetails.beneficiary_country}
                              onChange={(e) => updateInputData(e)}
                            >
                              <option value="">Select Country</option>
                              <option value="Afghanistan">Afghanistan</option>
                              <option value="Albania">Albania</option>
                              <option value="Algeria">Algeria</option>
                              <option value="American Samoa">
                                American Samoa
                              </option>
                              <option value="Andorra">Andorra</option>
                              <option value="Angola">Angola</option>
                              <option value="Anguilla">Anguilla</option>
                              <option value="Antarctica">Antarctica</option>
                              <option value="Antigua and Barbuda">
                                Antigua and Barbuda
                              </option>
                              <option value="Argentina">Argentina</option>
                              <option value="Armenia">Armenia</option>
                              <option value="Australia">Australia</option>
                              <option value="Austria">Austria</option>
                              <option value="Azerbaijan">Azerbaijan</option>
                              <option value="Bahamas">Bahamas</option>
                              <option value="Bahrain">Bahrain</option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Barbados">Barbados</option>
                              <option value="Belarus">Belarus</option>
                              <option value="Belgium">Belgium</option>
                              <option value="Belize">Belize</option>
                              <option value="Benin">Benin</option>
                              <option value="Bermuda">Bermuda</option>
                              <option value="Bhutan">Bhutan</option>
                              <option value="Bolivia">Bolivia</option>
                              <option value="Bosnia and Herzegovina">
                                Bosnia and Herzegovina
                              </option>
                              <option value="Botswana">Botswana</option>
                              <option value="Brazil">Brazil</option>
                              <option value="Brunei">Brunei</option>
                              <option value="Bulgaria">Bulgaria</option>
                              <option value="Burkina Faso">Burkina Faso</option>
                              <option value="Burundi">Burundi</option>
                              <option value="Cambodia">Cambodia</option>
                              <option value="Cameroon">Cameroon</option>
                              <option value="Canada">Canada</option>
                              <option value="Cape Verde">Cape Verde</option>
                              <option value="Central African Republic">
                                Central African Republic
                              </option>
                              <option value="Chad">Chad</option>
                              <option value="Chile">Chile</option>
                              <option value="China">China</option>
                              <option value="Colombia">Colombia</option>
                              <option value="Comoros">Comoros</option>
                              <option value="Congo">Congo</option>
                              <option value="Costa Rica">Costa Rica</option>
                              <option value="Croatia">Croatia</option>
                              <option value="Cuba">Cuba</option>
                              <option value="Cyprus">Cyprus</option>
                              <option value="Czech Republic">
                                Czech Republic
                              </option>
                              <option value="Denmark">Denmark</option>
                              <option value="Djibouti">Djibouti</option>
                              <option value="Dominica">Dominica</option>
                              <option value="Dominican Republic">
                                Dominican Republic
                              </option>
                              <option value="Ecuador">Ecuador</option>
                              <option value="Egypt">Egypt</option>
                              <option value="El Salvador">El Salvador</option>
                              <option value="Equatorial Guinea">
                                Equatorial Guinea
                              </option>
                              <option value="Eritrea">Eritrea</option>
                              <option value="Estonia">Estonia</option>
                              <option value="Ethiopia">Ethiopia</option>
                              <option value="Fiji">Fiji</option>
                              <option value="Finland">Finland</option>
                              <option value="France">France</option>
                              <option value="Gabon">Gabon</option>
                              <option value="Gambia">Gambia</option>
                              <option value="Georgia">Georgia</option>
                              <option value="Germany">Germany</option>
                              <option value="Ghana">Ghana</option>
                              <option value="Greece">Greece</option>
                              <option value="Grenada">Grenada</option>
                              <option value="Guatemala">Guatemala</option>
                              <option value="Guinea">Guinea</option>
                              <option value="Guyana">Guyana</option>
                              <option value="Haiti">Haiti</option>
                              <option value="Honduras">Honduras</option>
                              <option value="Hungary">Hungary</option>
                              <option value="Iceland">Iceland</option>
                              <option value="India">India</option>
                              <option value="Indonesia">Indonesia</option>
                              <option value="Iran">Iran</option>
                              <option value="Iraq">Iraq</option>
                              <option value="Ireland">Ireland</option>
                              <option value="Israel">Israel</option>
                              <option value="Italy">Italy</option>
                              <option value="Jamaica">Jamaica</option>
                              <option value="Japan">Japan</option>
                              <option value="Jordan">Jordan</option>
                              <option value="Kazakhstan">Kazakhstan</option>
                              <option value="Kenya">Kenya</option>
                              <option value="Kuwait">Kuwait</option>
                              <option value="Kyrgyzstan">Kyrgyzstan</option>
                              <option value="Laos">Laos</option>
                              <option value="Latvia">Latvia</option>
                              <option value="Lebanon">Lebanon</option>
                              <option value="Lesotho">Lesotho</option>
                              <option value="Liberia">Liberia</option>
                              <option value="Libya">Libya</option>
                              <option value="Lithuania">Lithuania</option>
                              <option value="Luxembourg">Luxembourg</option>
                              <option value="Madagascar">Madagascar</option>
                              <option value="Malawi">Malawi</option>
                              <option value="Malaysia">Malaysia</option>
                              <option value="Maldives">Maldives</option>
                              <option value="Mali">Mali</option>
                              <option value="Malta">Malta</option>
                              <option value="Mauritius">Mauritius</option>
                              <option value="Mexico">Mexico</option>
                              <option value="Mongolia">Mongolia</option>
                              <option value="Morocco">Morocco</option>
                              <option value="Nepal">Nepal</option>
                              <option value="Netherlands">Netherlands</option>
                              <option value="New Zealand">New Zealand</option>
                              <option value="Nigeria">Nigeria</option>
                              <option value="Norway">Norway</option>
                              <option value="Oman">Oman</option>
                              <option value="Pakistan">Pakistan</option>
                              <option value="Panama">Panama</option>
                              <option value="Peru">Peru</option>
                              <option value="Philippines">Philippines</option>
                              <option value="Poland">Poland</option>
                              <option value="Portugal">Portugal</option>
                              <option value="Qatar">Qatar</option>
                              <option value="Romania">Romania</option>
                              <option value="Russia">Russia</option>
                              <option value="Saudi Arabia">Saudi Arabia</option>
                              <option value="South Africa">South Africa</option>
                              <option value="Spain">Spain</option>
                              <option value="Sweden">Sweden</option>
                              <option value="Switzerland">Switzerland</option>
                              <option value="Thailand">Thailand</option>
                              <option value="Turkey">Turkey</option>
                              <option value="Ukraine">Ukraine</option>
                              <option value="United Arab Emirates">
                                United Arab Emirates
                              </option>
                              <option value="United Kingdom">
                                United Kingdom
                              </option>
                              <option value="United States">
                                United States
                              </option>
                              <option value="Vietnam">Vietnam</option>
                              <option value="Zambia">Zambia</option>
                              <option value="Zimbabwe">Zimbabwe</option>
                            </select>

                            {errors.beneficiary_country &&
                            errors.beneficiary_country != "" ? (
                              <span
                                id="name_error"
                                className="input-error-tip"
                                style={{ display: "inline-block" }}
                              >
                                {errors.beneficiary_country}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="registration_form_single-input">
                        <label htmlFor="f-name">
                          Proof of Address
                          <span className="mandatory_field">*</span>
                        </label>
                        <select
                          name="proof_of_address"
                          value={businessDetails.proof_of_address}
                          onChange={(e) => updateInputData(e)}
                        >
                          <option value={""}>select</option>
                          <option value={"Utility Bill"}>Utility Bill</option>
                          <option value={"Bank Statement"}> Bank Statement</option>
                          <option value={"Credit Card Statement"}>Credit Card Statement</option>
                        </select>

                        {errors.proof_of_address &&
                        errors.proof_of_address != "" ? (
                          <span
                            id="name_error"
                            className="input-error-tip"
                            style={{ display: "inline-block" }}
                          >
                            {errors.proof_of_address}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="registration_form_single-input">
                        {/* <option>{businessDetails.proof_of_address}</option> */}
                        <label htmlFor="f-name">Attach File</label>
                        <div className="file-placeholder">
                          <label />
                          <input
                            type="file"
                            className="fileUpload"
                            name="proof_of_address_file"
                            onChange={(e) => updateInputData(e)}
                          />
                          <div className="file-browse">
                            <span
                              className="file-browse-txt"
                              id="proof_of_address_file_name"
                            >
                              {businessDetails.proof_of_address_file &&
                              typeof businessDetails.proof_of_address_file ==
                                "string"
                                ? businessDetails.proof_of_address_file.split(
                                    "/"
                                  ).length == 3
                                  ? businessDetails.proof_of_address_file.split(
                                      "/"
                                    )[2]
                                  : "selcect file"
                                : "select file"}{" "}
                            </span>

                            <span className="browse">Upload</span>
                          </div>
                          <span style={{color:"#000"}}><strong>Note:</strong> Allowed file types: .jpg, .png, .pdf. Maximum file size: 10MB.</span>

                        </div>
                        {businessDetails.proof_of_address_file &&
                        typeof businessDetails.proof_of_address_file ==
                          "string" ? (
                          <a
                            target="_blank"
                            className="view_image"
                            href={`${baseUrl}${businessDetails.proof_of_address_file}`}
                          >
                            View File
                          </a>
                        ) : null}

                        {errors.proof_of_address_file &&
                        errors.proof_of_address_file != "" ? (
                          <span
                            id="name_error"
                            className="input-error-tip"
                            style={{ display: "inline-block" }}
                          >
                            {errors.proof_of_address_file}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <button className="save">Save</button>
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
