"use client";
import { baseUrl, fetcher } from "@/Http/helper";
import Link from "next/link";
import React, { use, useEffect, useRef, useState } from "react";

import dynamic from "next/dynamic";
import { apiRequest } from "@/Http/apiHelper";
import useSWR, { mutate } from "swr";
import { useRouter } from "next/navigation";
import WhatOurCustomersSay from "./WhatOurCustomersSay";

 

const page = ({ params }) => {
  const {
    data: fetchingData,
    error,
    isLoading,
  } = useSWR(`${baseUrl}/api/seller/save-profile-business-details`, fetcher);

  
  const router = useRouter();
  const [brandOwner, setBrandOwner] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const fileInputRef = useRef(null);
  const logoRef = useRef(null);
  const sellerProfileDetails = fetchingData?.data.sellerProfile;
  const sellor_id = use(params).seller_id;
  const [isEdit, setEdit] = useState(false);
  const [bannerError, setBannerError] = useState(""); 
  const [data, setData] = useState({
    banner: "",
    business_overview: "",
    business_profile: "",
  });

  useEffect(() => {
    fetch(`${baseUrl}api/seller-details?seller_id=${sellor_id}`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Error");
        }
        return response.json();
      })
      .then((res) => {
        console.log(res);
      });
  }, [sellor_id]);

  useEffect(() => {
    if (fetchingData?.status && fetchingData?.data.sellerProfile) {
      setData(fetchingData?.data.sellerProfile);
    }
  }, [fetchingData, isLoading]);

  async function publishProfile() {
    const response = await apiRequest(
      `${baseUrl}/api/seller/publish-profile`,
      "POST", 
    );
    if (response.status) {
      mutate(`${baseUrl}/api/seller/save-profile-business-details`);
      setEdit(false);
    }
  }

  const handleEditClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file upload dialog
    }
  };

  function changeBannerImage(e) {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Only image files are allowed.");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        return;
      }
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("Image size must be 10MB or smaller.");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return;
    }

    setData((preData) => ({
      ...preData,
      banner: file,
    }));
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        console.log("Image loaded successfully!");
        document.getElementById("imagePreview").src = img.src;
      };
    };

    reader.readAsDataURL(file);
  }

  async function saveImageFunction(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("banner", data.banner);
    const response = await apiRequest(
      `${baseUrl}api/seller/save-profile-baaner-image`,
      "POST",
      formData
    );
    if (response.status) {
      mutate(`${baseUrl}/api/seller/save-profile-business-details`);
      setOpenModal(false);
      setData((preData) => ({
        ...preData,
        banner: null,
      }));
    } else {
      setBannerError(response.data);
    }
  }


  async function changeBrandLogo(e){ 

     const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Only image files are allowed.");
        if (logoRef.current) {
          logoRef.current.value = "";
        }
        return;
      }
    }
 
    if (file.size > 10 * 1024 * 1024) {
      alert("Image size must be 10MB or smaller.");
      if (logoRef.current) {
        logoRef.current.value = "";
      }
      return;
    }


    const formData = new FormData();
    formData.append("profileLogo", file);
    const response = await apiRequest(
      `${baseUrl}api/seller/update-bussness-profile-logo`,
      "POST",
      formData
    );
    if (response.status) {
      mutate(`${baseUrl}/api/seller/save-profile-business-details`); 
      setData((preData) => ({
        ...preData,
        banner: null,
      }));
    } else {
      setBannerError(response.data);
    } 
  }



  // check brand owner
  useEffect(()=>{

      fetch('/api/seller/ads/check-brand-owner',{
            method:"POST"
          }).then((response)=>{
            if(!response.ok){
              throw new Error("Internal Issue");
            }
            return response.json();
          }).then((res)=>{
            if(res.status){
                setBrandOwner(true)
            } 
          }).catch((err)=>{ 
            console.log(err);
          })
        },[])
  return (
    <>
    {brandOwner && (


      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-content-store position-relative">
              {sellerProfileDetails?.banner ? (
                <img
                  src={`${baseUrl}${sellerProfileDetails?.banner}`}
                  style={{ minHeight: "100px" }}
                />
              ) : (
                <img
                  src={`${baseUrl}front/assets/images/blank_banner.jpg`}
                  alt="banner"
                  style={{ minHeight: "100px" }}
                />
              )}
              <a
                className="view_all mt--20"
                onClick={() => setOpenModal(true)}
                style={{
                  position: "absolute",
                  right: "40px",
                  bottom: "40px",
                  cursor: "pointer",
                }}
              >
                Edit Image
              </a>
            </div>
          </div>
        </div>
      </div>
          )}
      {/* ===============store-category=open===================== */}
        {brandOwner && (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="store_logo"  >
              {data?.profileLogo && (

              <img src={`/${data.profileLogo}`} /> 
              )}
              <br></br>
              <div  >
                <input type="file" id="profile_logo" hidden 
                ref={logoRef}
                onChange={(e)=>changeBrandLogo(e)}
                />
               <label className="mt-5" htmlFor="profile_logo" style={{cursor:"pointer", color:'#ff6e35'}}>
                <i className="fa fa-edit" /> Update Brand Logo
              </label>
              </div>
            </div>
            
          </div>
        </div>
      </div>
        )}

      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcumb-wrap_asd">
                  <ul>
                      {brandOwner && (
                    <li>
                      <Link href="/dashboard/my-store">Business Overview</Link>
                    </li>
                      )}
                    <li>
                      <Link href="/dashboard/my-store/review-rating">
                        What Our Customers Say
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              {/* <div className="col-lg-3 col-12"></div> */}
              <div className="col-lg-12 col-12 profile">
                <div className="row">
                   {brandOwner && (
                  <div className="col-12 col-lg-12">
                    <div style={{ float: "right", display:'flex', gap:'10px' }}>
                      <button
                        className="view_all mt--20"
                        onClick={() =>
                          router.push("/dashboard/my-store-update")
                        }
                      >
                        Edit Profile
                      </button>
                        {data && data?.Published != 1 && (

                          <button
                            className="view_all mt--20"
                            onClick={publishProfile}
                          >
                            Publish
                          </button>

                        )}
                      
                    </div>
                  </div>
                   )}
              {brandOwner && (
                  <div className="">
                    <h3>Business Overview</h3>
                  </div>
              )}
              {brandOwner && (
                  <div>
                    <div
                      className="ckeditor-content"
                      dangerouslySetInnerHTML={{
                        __html: data?.business_overview,
                      }}
                    ></div>
                  </div>
                  )}


                  {brandOwner && (
                  <div className="col-lg-12">
                    <>
                      <div className="col-lg-11">
                        <div className="business_pfofile pt--30">
                          {/* <img
                            src={`${baseUrl}front/assets/images/djfdl_review.jpg`}
                          />  */}
                          Business Profile
                        </div>
                      </div>

                      <div className="table-responsive table-wrap">
                        <div className="table-block">
                          <table>
                            <tbody>
                              <tr>
                                {data?.TypeOfEnterprise && (
                                  <td className="border-right">
                                    {" "}
                                    <span>Type of Enterprise:</span> {data?.TypeOfEnterprise}
                                  </td>
                                )}
                                
                                {data?.YearFounded && (
                                   <td>
                                      {" "}
                                      <span>Year Founded:</span> {data?.YearFounded}
                                    </td>
                                )}
                               
                              </tr>
                              <tr>
                                {data?.ProductLine && (
                                  <td className="border-right">
                                    {" "}
                                    <span>Product Line:</span>  {data?.ProductLine}
                                  </td>
                                )}
                                
                                {data?.Headquarters && (
                                    <td>
                                  {" "}
                                  <span>Headquarters:</span>  {data?.Headquarters}
                                </td>
                                )}
                              
                              </tr>
                              <tr>
                                {data?.EmployeeCount && (
                                  <td className="border-right">
                                  {" "}
                                  <span> Employee Count:</span>  {data?.EmployeeCount}
                                </td>
                                )}
                                
                                {data?.BrandRegistration && (
                                   <td>
                                      {" "}
                                      <span>Brand Registration:</span> {data?.BrandRegistration}
                                    </td>
                                )}
                               
                              </tr>
                              <tr>
                                {data?.QualityCertifications && (
                                  <td className="border-right">
                                  {" "}
                                  <span> Quality Certifications:</span>  {data?.QualityCertifications}
                                </td>
                                )}
                                
                                {data?.ProductComplianceCertifications && (
                                   <td>
                                  {" "}
                                  <span>
                                    Product Compliance Certifications:
                                  </span> {data?.ProductComplianceCertifications}
                                </td>
                                )}
                               
                              </tr>
                              <tr>
                                {data?.PatentStatus && (
                                   <td className="border-right">
                                  {" "}
                                  <span> Patent Status:</span>  {data?.PatentStatus}
                                </td>
                                )}
                               
                               {data?.RevenueRange && (
                                 <td>
                                  {" "}
                                  <span>Revenue Range:</span>  {data?.RevenueRange}
                                </td>
                               )}
                               
                              </tr>
                              <tr>
                                <td className="border-right">
                                  <table>
                                    <tbody>
                                        {data?.TargetMarkets && (
                                        <tr> 
                                          <td style={{verticalAlign:'top', paddingLeft: '0'}}>
                                            <span> Target Markets:</span>
                                          </td>
                                          <td>
                                          {data?.TargetMarkets}
                                          </td>
                                        </tr>
                                        )}
                                    </tbody>
                                  </table>
                                </td>

                                <td>
                                  <table>
                                    <tbody>
                                      {data?.SustainabilityPractices && ( 
                                      <tr>
                                        <td style={{verticalAlign:'top', paddingLeft: '0', width: 'auto'}}>
                                          {" "}
                                          <span>Sustainability Practices:</span>
                                        </td>
                                        <td>
                                         {data?.SustainabilityPractices}
                                        </td>
                                      </tr>
                                      
                                      )}
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          
                        </div>
                      </div>
                    </>
                  </div>
                  )}
                  <div className="col-lg-12">
                    <div className="customers-say">
                      <h2>What Our Customers Say</h2>
                    </div>
                    <WhatOurCustomersSay />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      {openModal && (
        <div
          className="modal fade show d-block view_reasons"
          tabIndex={-1}
          role="dialog"
        >
          {/* Modal content */}
          <div className="modal-content">
            <h2>Banner Image</h2>
            <span className="close-btn" onClick={() => setOpenModal(false)}>
              x
            </span>
            <div className="container">
              <div className="col-lg-12">
                <form>
                  <div className="edit-listing_form">
                    {/* <h1>Answer</h1> */}
                    <div className="form-group mt--20">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          {sellerProfileDetails?.banner ? (
                            <img
                              src={`${baseUrl}${sellerProfileDetails?.banner}`}
                              alt="banner"
                              id="imagePreview"
                            />
                          ) : (
                            <img
                              src={`${baseUrl}front/assets/images/blank_banner.jpg`}
                              alt="banner"
                              id="imagePreview"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <span className="text-danger">
                      <strong>Note:</strong> Allowed file types: JPG, PNG.
                      Maximum file size: 10MB. Required dimensions: 1400px
                      (width) × 310px (height).
                    </span>
                    <div style={{ color: "red" }}>{bannerError}</div>
                    <div
                      className="save_all"
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        gap: "10px",
                      }}
                    >
                      <a href="#" onClick={() => handleEditClick()}>
                        <input
                          type="file"
                          hidden
                          ref={fileInputRef}
                          onChange={(e) => changeBannerImage(e)}
                        />{" "}
                        {data?.banner ? "Change Image" : "Upload new image"}
                      </a>

                      {data?.banner && (
                        <a href="#" onClick={(e) => saveImageFunction(e)}>
                          Save
                        </a>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {openModal && (
        <div
          className="modal-backdrop fade show"
          onClick={() => setOpenModal(false)}
        ></div>
      )}
    </>
  );
};

export default page;
