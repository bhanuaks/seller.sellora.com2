"use client";
import { baseUrl, createFormData } from "@/Http/helper";
import Link from "next/link";
import React, { Suspense, useEffect, useRef, useState } from "react";
import RightSideBar from "../RightSideBar";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input"; 
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";


const RaiseTicket = () => {
  
  const router = useRouter();
  const phoneInputRef = useRef(null);
  const imageRef = useRef(null);
  const [activeTab, setActiveTab] = useState("email");
  const [isProccess, setIsProccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [imagePath, setImagePath] = useState("");

  const searchParams = useSearchParams();
  const description = searchParams.get("txt")

  

  const [data, setData] = useState({
    issueCategories : "Orders & Delivery",
    subject         : "",
    description     : "",
    screenshot      : "",
    contactMethod   : "email",
    mobile          : "",
    country_s_name  : "us",
    mobile_code     : "1",
    country         : "United States",
    ext             : "",
    email           : "",
  });


  useEffect(()=>{ 
      setData((preData)=>({
        ...preData,
        description:description
      }))

  },[description])
 
  
    useEffect(() => {
      const input = document.querySelector("#mobile_code");
  
      if (input) {
        const iti = intlTelInput(phoneInputRef.current, {
          initialCountry:
            data && data.country_s_name ? data.country_s_name : "us",
          separateDialCode: true,
          // utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js',
        });
  
        const onCountryChange = () => {
          const selectedCountryData = iti.getSelectedCountryData();
          setData((preData) => ({
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
    }, [setData, data?.country_s_name, data.contactMethod]);




  function hendleInput(e){

    const { name, value } = e.target;

    if(name == "mobile"){
      const numericValue = value.replace(/[^0-9]/g, "");
       setData((preData)=>({
        ...preData,
        [name]:numericValue
      }))
      if(data.contactMethod !== "email"){ 
        setErrors((preError)=>({...preError, [name]:numericValue?"":"Required"}))
      }
      return
    }

    setData((preData)=>({
        ...preData,
        [name]:value
      })) 
     if(data.contactMethod == "email" && name == "email"){ 
        setErrors((preError)=>({...preError, [name]:value?"":"Required"}))
      }else if(data.contactMethod !== "email" && name == "email"){ 
        setErrors((preError)=>({...preError, [name]:""}))
      }else{ 
        setErrors((preError)=>({...preError, [name]:value?"":"Required"}))
      }
  }
  

  
  function changeImage(e){

      const file = e.target.files[0];

        if(file){
            if (!file.type.startsWith("image/")) {
                // check image type
                alert("Only image files are allowed.");
                if (imageRef.current) {
                    imageRef.current.value = "";
                }
                return;
              }


              if (file.size > 10 * 1024 * 1024) {
                  //   check image size and alert 
                alert("Image size must be 10MB or smaller.");
                    if (imageRef.current) {
                        imageRef.current.value = "";
                    }
                    return;
                }

                setData((preData)=>({...preData, screenshot:file}))

                //    const reader = new FileReader();
                //     reader.onload = () => {
                //     const img = new Image()

                //     img.onload =()=>{ 
                //         // setImagePath(reader.result); 
                //         if (imageRef.current) {
                //             imageRef.current.value = "";   
                //         }
                       
                //     }
                //     img.onerror = () => {
                //         alert("Error loading image. Please select a valid image file.");
                //     };
        
                //     img.src = reader.result;
                // };
                // reader.readAsDataURL(file);
        }
  }

  async function hendleSubmit(e){ 
    e.preventDefault();

    setErrors({});
    setIsProccess(true)
    const formData = createFormData(data)
    const response =  await fetch('/api/seller/help/save-query',{
      method:"POST",
      body:formData
    });

    setIsProccess(false)
    const res = await response.json();
    if(response.ok){ 

        if(res.status){
          Swal.fire({
            text:"Your Ticket has been create successfully.",
            title:"Thank You",
            icon:"success",
          }).then(()=>{ 
            router.push("/dashboard/help/my-ticket/All")
          })
        }else if(res.data.status_code == 402){
          setErrors(res.data.errors)
        }

    }

  }

  return (
    <>
      <div className="notification_breadcomb_rts-navigation-area-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="notification_breadcomb">
                <ul>
                  <li>
                    <Link href="/dashboard/help">Help</Link>{" "}
                  </li>
                  <li>
                    <a href="#" className="active_002">
                      Still need help? Raise a ticket.
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sellora_045948">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="box_2349083_1">
                <div className="raise-a-ticket">
                  {/* <h2>
                <Link href={`${baseUrl}dashboard/help`}> Help </Link> / <span>Still need help? Raise a ticket.</span>
              </h2> */}
                  <h3 style={{ margin: 0, padding: 0 }}>
                    Fill out the form below
                  </h3>
                  <p style={{ margin: 0, padding: 0 }}>
                    And help us understand how we can support you.
                  </p>
                  <div className="form-container form-container2">
                    <form onSubmit={(e)=>hendleSubmit(e)}>
                      <label
                        htmlFor="category"
                        className="backgrund_with_position"
                      >
                        Issue Categories <span style={{ color: "red" }}>*</span>
                      </label>
                      <select id="category" required 
                        name="issueCategories"
                        value={data.issueCategories || ""}
                        onChange={(e)=>hendleInput(e)}
                      >
                        <option value={"Orders and Delivery"} >Orders &amp; Delivery</option>
                        <option value={"Listing and Catalog"} >Returns</option>
                        <option value={"Listing &amp; Catalog"} >Listing &amp; Catalog</option>
                        <option value={"Payments"} >Payments</option>
                        <option value={"Advertisements"} >Advertisements</option>
                        <option value={"Promotions"} >Promotions</option>
                        <option value={"Seller Perfomance"} >Seller Perfomance</option>
                        <option value={"Account"} >Account</option>
                      </select>
                      {errors?.issueCategories && ( 
                        <div className="error_message">{ errors.issueCategories }</div>
                      )}

                      <label
                        htmlFor="subject"
                        className="backgrund_with_position"
                      >
                        Subject <span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        placeholder="Label is not getting generated for my order(s)"
                        name="subject"
                        value={data.subject || ""}
                        onChange={(e)=>hendleInput(e)}
                      />
                      {errors?.subject && ( 
                        <div className="error_message">{ errors.subject }</div>
                      )}

                      <label htmlFor="description">
                        Provide with the description of issue{" "}
                        <span style={{ color: "red" }}>*</span>
                      </label>
                      <textarea id="description"  
                          name="description"
                          value={data.description || ""}
                          onChange={(e)=>hendleInput(e)}
                         />
                          {errors?.description && ( 
                        <div className="error_message">{ errors.description }</div>
                      )}

                      <label>Attach Error File or screenshot</label>
                      <label htmlFor="fileUpload" className="upload-box" style={{ cursor: "pointer" }}>
  <input
    type="file"
    style={{ display: "none" }}
    id="fileUpload"
    ref={imageRef}
    onChange={(e) => changeImage(e)}
  />

  <div style={{ marginBottom: 10 }}>
    <img
      src={`${baseUrl}front/assets/images/up_arrow.png`}
      alt="upload"
    />
  </div>

  <div style={{ color: "#ff5722", fontWeight: 600, marginBottom: 8 }}>
    {data.screenshot?"Change":"Upload" }
  </div>

  {data?.screenshot instanceof File && data.screenshot.size > 0 ? (
    <span className="filename">{data.screenshot.name}</span>
  ) : (
    <span className="filename text-muted">No file selected</span>
  )}
</label>


                      {/* <div className="upload-box">
                        <input
                          type="file"
                          style={{ display: "none" }}
                          id="fileUpload"
                          ref={imageRef}
                          onChange={(e)=>changeImage(e)}
                        />
                        <div style={{ marginBottom: 10 }}>
                          <img
                            src={`/front/assets/images/up_arrow.png`}
                            alt="upload"
                          />
                        </div>
                        <label
                          htmlFor="fileUpload"
                          style={{ color: "#ff5722", fontWeight: 600 }}
                        >
                          Upload
                        </label>

                         {data.screenshot instanceof File && data.screenshot.size > 0 ? (
                            <span className="filename">{data.screenshot.name}</span>
                          ) : (
                            <span className="filename text-muted">No file selected</span>
                          )}
                         

                      </div> */}

                      <label>Contact Method</label>
                      <div className="tabs">
                        <div
                          className={`tab ${
                            data.contactMethod === "email" ? "active" : ""
                          }`}
                          onClick={() => setData((prevData)=>({...prevData, contactMethod:"email"}))}
                        >
                          {/* <img src={`${baseUrl}front/assets/images/email.png`} alt="email" /> */}
                          <i className="far fa-envelope"></i>
                          &nbsp;Email
                        </div>
                        <div
                          className={`tab ${
                            data.contactMethod === "callback" ? "active" : ""
                          }`}
                           onClick={() => setData((prevData)=>({...prevData, contactMethod:"callback"}))}
                          
                        >
                          {/* <img src={`${baseUrl}front/assets/images/phone.png`} alt="callback" />  */}
                          <i className="far fa-phone"></i>
                          &nbsp; Call Back Request
                        </div>
                      </div>

                      {data.contactMethod === "email" && (
                        <div id="email" className="contact-section active">
                          <label>Your Email</label>
                          <input
                            type="email"
                            placeholder="email" 
                             name="email"
                            value={data.email || ""}
                            onChange={(e)=>hendleInput(e)}
                          />
                            {errors?.email && ( 
                        <div className="error_message">{ errors.email }</div>
                      )}
                          <label>
                            Your Number (Optional, if you would like a callback)
                          </label>
                          <div className="row">
                            <div className="col-lg-5">
                              <input type="text" placeholder="(xxx)xxx-xxxx" 
                               name="mobile"
                              value={data.mobile || ""}
                              onChange={(e)=>hendleInput(e)}
                               id="mobile_code"
                                ref={phoneInputRef}
                            />
                               {errors?.mobile && ( 
                                  <div className="error_message">{ errors.mobile }</div>
                                )}
                            </div>
                            <div className="col-lg-2">
                              <input type="text" placeholder="Ext."
                              name="ext"
                              value={data.ext || ""}
                              onChange={(e)=>hendleInput(e)}
                               />
                                {errors?.ext && ( 
                                  <div className="error_message">{ errors.ext }</div>
                                )}
                            </div>
                            <div className="col-lg-5">
                              <select name="country"
                                value={data.country || ""}
                                onChange={(e)=>hendleInput(e)}
                                >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>UK</option>
                              </select>
                               {errors?.country && ( 
                                  <div className="error_message">{ errors.country }</div>
                                )}
                            </div>
                          </div>
                        </div>
                      )}

                      {data.contactMethod === "callback" && (
                        <div id="callback" className="contact-section active">
                          <label>
                            Your Number <span style={{ color: "red" }}>*</span>
                          </label>
                          <div className="row">
                            <div className="col-lg-5">
                              <input
                                type="text"
                                placeholder="(xxx)xxx-xxxx"
                                name="mobile"
                                id="mobile_code"
                                ref={phoneInputRef}
                                value={data.mobile || ""}
                                onChange={(e)=>hendleInput(e)}
                              />
                               {errors?.mobile && ( 
                                  <div className="error_message">{ errors.mobile }</div>
                                )}
                            </div>
                            <div className="col-lg-2">
                              <input type="text" placeholder="Ext."
                                name="ext"
                                value={data.ext || ""}
                                onChange={(e)=>hendleInput(e)}
                                 />
                                  {errors?.ext && ( 
                                  <div className="error_message">{ errors.ext }</div>
                                )}
                            </div>
                            <div className="col-lg-5">
                              <select 
                                name="country"
                                value={data.country || ""}
                                onChange={(e)=>hendleInput(e)}
                                >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>UK</option>
                              </select>
                               {errors?.country && ( 
                                  <div className="error_message">{ errors.country }</div>
                                )}
                            </div>
                          </div>
                          <label>Your Email</label>
                          <input type="email" placeholder="email" 
                              name="email"
                                value={data.email || ""}
                                onChange={(e)=>hendleInput(e)}
                                />

                                  {errors?.email && ( 
                                  <div className="error_message">{ errors.email }</div>
                                )}
                        </div>
                      )}

                      <div className="button-group2">
                        <button type="submit" className="botton_435">
                          {isProccess?"Submiting...":"Submit"}
                        </button>
                        <button
                          type="reset"
                          className="botton_435"
                          onClick={()=>{
                            router.push("/dashboard/help/my-ticket/InProgress");
                          }}
                          style={{
                            border: "1px solid #ff5722",
                            color: "#ff5722",
                            background: "#fff",
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <RightSideBar />
          </div>
        </div>
      </div>
    </>
  );
};

function page(){
    return (
      <Suspense fallback={<>Loading..</>}>
        <RaiseTicket />
      </Suspense>
    )
}
export default page;
