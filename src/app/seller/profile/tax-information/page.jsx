"use client";
import React, { useContext, useEffect, useRef, useState } from "react"; 
import Link from "next/link";
import "intl-tel-input/build/css/intlTelInput.css"; 
import { AppContext } from "@/app/contaxtData/contextData";
import $ from "jquery";
import { baseUrl } from "@/Http/helper";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify"; 
import ResidentOfUSNo from "../../al/tax-information/ResidentOfUSNo";
import ResidentOfUSYes from "../../al/tax-information/ResidentOfUSYes";
import { countriesList } from "@/Http/citizenList"; 

function Page() {
  const { globalData, setGlobalData } = useContext(AppContext);

  const countryRef = useRef();
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [sellor, setSellor] = useState(null);
  const [taxInformation, setTaxInformation] = useState({
    tax_classication: "Individual",
    u_s_resident: "Yes",
    federal_tax_classication: "",
    llc_type: "",
    employer_identification_number: "Employer Identification Number",
    full_name: "",
    trade_name: "",
    tin_number: "",
    image: null,
    country: "",
    address_line_1: "",
    city: "",
    address_line_2: "",
    state: "",
    zip_code: "",
  });

  useEffect(() => {
    if (globalData.sellor) {
      // $(".loaderouter").css("display", "flex");
      fetch(
        `${baseUrl}api/seller/get-profile?user_id=${globalData.sellor._id}&with_data=taxInformation`,
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
              res.data.data.complete_step < 5
            ) {
              router.push("/seller/al/contact-details");
            }
            setSellor(res.data.data);
            if (res.data.referData) {
              setTaxInformation(res.data.referData);
            }
            setTaxInformation((preData) => ({
              ...preData,
              seller_id: res.data.data._id,
            }));
          }
        });
    }
  }, [globalData.sellor]);

  const updateInputData = (e) => {
    const { name, value, checked, files } = e.target;

    if(name=="zip_code"){
      let alphaNumericValue = value.replace(/[^a-zA-Z0-9]/g, '');
      if(alphaNumericValue && alphaNumericValue.length >8){
        alphaNumericValue = alphaNumericValue.slice(0,8)
      }
      setTaxInformation((preData)=>({
          ...preData,
          [name]:alphaNumericValue
        })) 
      return
    }

    if (name == "image") {
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
      
      setTaxInformation((preData) => ({
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

    if (name == "tin_number") {
      let numericValue = value.replace(/\D/g, "");
      let formattedData = numericValue.slice(0, 9);
      let formattedValue = formattedData.replace(/(\d{2})(\d{7})/, "$1-$2");
      setTaxInformation((preData) => ({
        ...preData,
        [name]: formattedValue,
      }));
      return;
    }

    setTaxInformation((preData) => ({
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
    // $(".loaderouter").css("display", "flex");
    const formData = createFormData(taxInformation);
    fetch(`${baseUrl}api/seller/update-profile?update=taxInformation`, {
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
          router.push("/seller/profile/shipping-setting");
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
                 Tax Information
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
                        <h2>Tax Information </h2>
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
                                    What is your tax classication?
                                    <span className="mandatory_field">*</span>
                                  </label>
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div
                                        className={`button_33 mt--20 ${
                                          taxInformation.tax_classication ==
                                          "Individual"
                                            ? "select"
                                            : ""
                                        }`}
                                      >
                                        <Link
                                          href="#"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setTaxInformation((preData) => ({
                                              ...preData,
                                              tax_classication: "Individual",
                                            }));
                                          }}
                                        >
                                          Individual
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div
                                        className={`button_33 mt--20 ${
                                          taxInformation.tax_classication ==
                                          "Business"
                                            ? "select"
                                            : ""
                                        }`}
                                      >
                                        <Link
                                          href="#"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setTaxInformation((preData) => ({
                                              ...preData,
                                              tax_classication: "Business",
                                            }));
                                          }}
                                        >
                                          Business
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="individual_p">
                                    <p>
                                      "Individual" includes Sole Proprietors or
                                      Disregarded Entity where the owner is an
                                      individual
                                    </p>
                                  </div>
                                </div>
                                <div className="registration_form_single-input">
                                  <label htmlFor="f-name">
                                    Are you a U.S. resident entity?
                                    <span className="mandatory_field">*</span>
                                  </label>
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div
                                        className={`button_33 mt--20 ${
                                          taxInformation.u_s_resident == "Yes"
                                            ? "select"
                                            : ""
                                        }`}
                                      >
                                        <Link
                                          href="#"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setTaxInformation((preData) => ({
                                              ...preData,
                                              u_s_resident: "Yes",
                                            }));
                                          }}
                                        >
                                          Yes
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div
                                        className={`button_33 mt--20 ${
                                          taxInformation.u_s_resident == "No"
                                            ? "select"
                                            : ""
                                        }`}
                                      >
                                        <Link
                                          href="#"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setTaxInformation((preData) => ({
                                              ...preData,
                                              u_s_resident: "No",
                                            }));
                                          }}
                                        >
                                          No
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {taxInformation.u_s_resident == "Yes" ? (
                                 <ResidentOfUSYes taxInformation={taxInformation} updateInputData={updateInputData} errors={errors}/>
                                ) : 
                                (  
                                <ResidentOfUSNo taxInformation={taxInformation} updateInputData={updateInputData} errors={errors}/>
                                )}
                              </div>
                            </div>
                            <div className="col-lg-10 offset-lg-1">
                              <div className="nnn_dform">
                                {/* {taxInformation.u_s_resident == "Yes" ? ( */}
                                  <>
                                    <div className="col-lg-12">
                                      <h3 className="text-center">Address</h3>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div className="registration_form_single-input">
                                          <label htmlFor="f-name">
                                            Country
                                            <span className="mandatory_field">
                                              *
                                            </span>
                                          </label>
                                          {/* <input type="text" placeholder="United States" /> */}
                                          <select
                                            name="country"
                                            value={taxInformation.country}
                                            onChange={(e) => updateInputData(e)}
                                          >
                                            <option value="">
                                              Select Country
                                            </option>
                                             {countriesList.map((country, index)=>(
                                                  <option value={country} key={index}>{country}</option> 
                                                  ))}
                                          </select>

                                          {errors.country &&
                                          errors.country != "" ? (
                                            <span
                                              id="name_error"
                                              className="input-error-tip"
                                              style={{
                                                display: "inline-block",
                                              }}
                                            >
                                              {errors.country}
                                            </span>
                                          ) : (
                                            ""
                                          )}
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="registration_form_single-input">
                                          <label htmlFor="f-name">
                                            Address line 1
                                            <span className="mandatory_field">
                                              *
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            placeholder="980 Kuhio Place"
                                            name="address_line_1"
                                            value={
                                              taxInformation.address_line_1
                                            }
                                            onChange={(e) => updateInputData(e)}
                                          />
                                          {errors.address_line_1 &&
                                          errors.address_line_1 != "" ? (
                                            <span
                                              id="name_error"
                                              className="input-error-tip"
                                              style={{
                                                display: "inline-block",
                                              }}
                                            >
                                              {errors.address_line_1}
                                            </span>
                                          ) : (
                                            ""
                                          )}
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="registration_form_single-input">
                                          <label htmlFor="f-name">
                                            City
                                            <span className="mandatory_field">
                                              *
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            placeholder="WAILUKU"
                                            name="city"
                                            value={taxInformation.city}
                                            onChange={(e) => updateInputData(e)}
                                          />
                                          {errors.city && errors.city != "" ? (
                                            <span
                                              id="name_error"
                                              className="input-error-tip"
                                              style={{
                                                display: "inline-block",
                                              }}
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
                                            Address line 2 (Optional)
                                          </label>
                                          <input
                                            type="text"
                                            placeholder="Apartment, suite, unit, building, oor etc."
                                            name="address_line_2"
                                            value={
                                              taxInformation.address_line_2
                                            }
                                            onChange={(e) => updateInputData(e)}
                                          />
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="registration_form_single-input">
                                          <label htmlFor="f-name">
                                            State / Province / Region
                                            <span className="mandatory_field">
                                              *
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            placeholder="Hawaii"
                                            name="state"
                                            value={taxInformation.state}
                                            onChange={(e) => updateInputData(e)}
                                          />
                                          {errors.state &&
                                          errors.state != "" ? (
                                            <span
                                              id="name_error"
                                              className="input-error-tip"
                                              style={{
                                                display: "inline-block",
                                              }}
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
                                            Zip / Postal code
                                            <span className="mandatory_field">
                                              *
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            placeholder={96793}
                                            name="zip_code"
                                            value={taxInformation.zip_code}
                                            onChange={(e) => updateInputData(e)}
                                          />
                                          {errors.zip_code &&
                                          errors.zip_code != "" ? (
                                            <span
                                              id="name_error"
                                              className="input-error-tip"
                                              style={{
                                                display: "inline-block",
                                              }}
                                            >
                                              {errors.zip_code}
                                            </span>
                                          ) : (
                                            ""
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                {/* ) : null} */}
                              </div>
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
        </div>
      </div>
    </div>
  );
}

export default Page;
