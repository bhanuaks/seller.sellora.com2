"use client"; 
import React, { useContext, useEffect, useRef, useState } from "react"; 
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { AppContext } from "@/app/contaxtData/contextData";
import $ from "jquery";
import { baseUrl } from "@/Http/helper";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { citizenshipList } from "@/Http/citizenList"; 
import Link from "next/link";

function Page() {
  const { globalData, setGlobalData } = useContext(AppContext);

  const countryRef = useRef();
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [sellor, setSellor] = useState(null);
  const [isProccess, setIsProccess] = useState(false);
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
    beneficiary_country: "",
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

    if(name=="zip_code" || name == "beneficiary_zip_code"){
      const alphaNumericValue = value.replace(/[^a-zA-Z0-9]/g, '');
      if(alphaNumericValue && alphaNumericValue.length >8){
        return
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
      name == "mobile" ||
      name == "zip_code" ||
      name == "beneficiary_zip_code"
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
    setErrors({});
   setIsProccess(true)
    const formData = createFormData(businessDetails);
    fetch(`${baseUrl}api/seller/update-profile?update=businessDetails`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        setIsProccess(false)
        if (!response.ok) { 
          throw new Error("Network Error");
        }
        return response.json();
      })
      .then((res) => { 
        if (res.status) {
          toast.success("Success! Business Details Saved.");
          // router.push("/seller/profile/tax-information");
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
                <Link href="/dashboard">Dashboard</Link>{" "}
              </li>
              <li>
                <a href="#" className="active_002">
                 Business Details
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
            <div>
              <div className="form_outer">
                <div className="seller_edit_information">
                  <form action={"#"} onSubmit={(e) => submitUpdateForm(e)}>
                    <div className="row">
                      <div className="col-lg-12">
                        <h2>Business Details</h2>
                        
                      </div>
                      <div className="col-lg-10 offset-lg-1">
                        <div className="form_s2">
                          <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                              <div className="nnn_dform">
                                <div className="registration_form_single-input">
                                  <label htmlFor="f-name">
                                    Registered Business Name<span className="mandatory_field">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    name="business_name"
                                    value={businessDetails.business_name}
                                    onChange={(e) => updateInputData(e)}
                                  />
                                  {errors.business_name &&
                                  errors.business_name != "" ? (
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
                                  <label htmlFor="f-name">Mobile Number<span className="mandatory_field">*</span></label>
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
                                <div className="registration_form_single-input">
                                  <label htmlFor="f-name">
                                    Registered Business Address<span className="mandatory_field">*</span>
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
                                      <label htmlFor="f-name">City<span className="mandatory_field">*</span></label>
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
                                      <label htmlFor="f-name">State</label>
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
                                      <label htmlFor="f-name">Zip Code<span className="mandatory_field">*</span></label>
                                      <input
                                        type="text"
                                        name="zip_code"
                                        value={businessDetails.zip_code}
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
                                        value={businessDetails.country}
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
                                <div className="col-lg-12">
                                  <h3 className="animated fadeIn">
                                    Personal Information of Beneficiary
                                  </h3>
                                </div>
                                <div className="registration_form_single-input">
                                  <label htmlFor="f-name">
                                    Are you a beneficiary of the business?
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
                                            placeholder="Designation*"
                                            name="beneficial_designation"
                                            value={
                                              businessDetails.beneficial_designation
                                            }
                                            onChange={(e) => updateInputData(e)}
                                          />
                                          {errors.beneficial_designation &&
                                          errors.beneficial_designation !=
                                            "" ? (
                                            <span
                                              id="name_error"
                                              className="input-error-tip"
                                              style={{
                                                display: "inline-block",
                                              }}
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
                                              onChange={(e) =>
                                                updateInputData(e)
                                              }
                                            />
                                            Yes
                                          </label>
                                          <label>
                                            <input
                                              type="radio"
                                              name="are_you_business_representative"
                                              value={"No"}
                                              onChange={(e) =>
                                                updateInputData(e)
                                              }
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
                                              placeholder="Designation*"
                                              name="representative_designation"
                                              value={
                                                businessDetails.representative_designation
                                              }
                                              onChange={(e) =>
                                                updateInputData(e)
                                              }
                                            />
                                            {errors.representative_designation &&
                                            errors.representative_designation !=
                                              "" ? (
                                              <span
                                                id="name_error"
                                                className="input-error-tip"
                                                style={{
                                                  display: "inline-block",
                                                }}
                                              >
                                                {
                                                  errors.representative_designation
                                                }
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
                                      <label htmlFor="f-name">First Name<span className="mandatory_field">*</span></label>
                                      <input
                                        type="text"
                                        name="beneficiary_first_name"
                                        value={
                                          businessDetails.beneficiary_first_name
                                        }
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
                                      <label htmlFor="f-name">Last Name<span className="mandatory_field">*</span></label>
                                      <input
                                        type="text"
                                        name="beneficiary_last_name"
                                        value={
                                          businessDetails.beneficiary_last_name
                                        }
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
                                  <label htmlFor="f-name">Date of Birth<span className="mandatory_field">*</span></label>
                                  <input
                                    type="date"
                                    name="beneficiary_date_of_birth"
                                    value={
                                      businessDetails.beneficiary_date_of_birth
                                    }
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
                                  <label htmlFor="f-name">Nationality<span className="mandatory_field">*</span></label>
                                  <select
                                    name="beneficiary_nationality"
                                    value={
                                      businessDetails.beneficiary_nationality
                                    }
                                    onChange={(e) => updateInputData(e)}
                                  >
                                    <option value={""}>select</option>
                                    {citizenshipList.map((item, index) => (
                                      <option value={item} key={index}>
                                        {item}
                                      </option>
                                    ))}
                                  </select>

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
                                    Proof of Identification<span className="mandatory_field">*</span>
                                  </label>
                                  <select
                                    name="proof_of_identification"
                                    value={
                                      businessDetails.proof_of_identification
                                    }
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
                                          : businessDetails
                                              ?.identification_proof_file?.name
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

                                <div className="registration_form_single-input">
                                  <label htmlFor="f-name">Address<span className="mandatory_field">*</span></label>
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
                                      <label htmlFor="f-name">City<span className="mandatory_field">*</span></label>
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
                                      <label htmlFor="f-name">State</label>
                                      <input
                                        type="text"
                                        name="beneficiary_state"
                                        value={
                                          businessDetails.beneficiary_state
                                        }
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
                                      <label htmlFor="f-name">Zip code<span className="mandatory_field">*</span></label>
                                      <input
                                        type="text"
                                        name="beneficiary_zip_code"
                                        value={
                                          businessDetails.beneficiary_zip_code
                                        }
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
                                      <label htmlFor="f-name">Country<span className="mandatory_field">*</span></label>
                                      <select
                                        name="beneficiary_country"
                                        value={
                                          businessDetails.beneficiary_country
                                        }
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
                                    Proof of Address<span className="mandatory_field">*</span>
                                  </label>
                                  <select
                                    name="proof_of_address"
                                    value={businessDetails.proof_of_address}
                                    onChange={(e) => updateInputData(e)}
                                  >
                                    <option value={""}>select</option>
                                    <option value={"Utility Bill"}>
                                      Utility Bill
                                    </option>
                                    <option value={"Bank Statement"}>
                                      {" "}
                                      Bank Statement
                                    </option>
                                    <option value={"Credit Card Statement"}>
                                      Credit Card Statement
                                    </option>
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
                                  <label htmlFor="f-name">Attach File<span className="mandatory_field">*</span></label>
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
                                  <span  style={{color:"#000"}}><strong>Note:</strong> Allowed file types: .jpg, .png, .pdf. Maximum file size: 10MB.</span>

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
                                <button className="save" disabled={isProccess}>{isProccess?"Please Wait..":"Update"}</button>
                                 
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
