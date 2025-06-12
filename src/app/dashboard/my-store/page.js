"use client";
import { baseUrl, fetcher } from "@/Http/helper";
import Link from "next/link";
import React, { use, useEffect, useRef, useState } from "react";

import dynamic from "next/dynamic";
import { apiRequest } from "@/Http/apiHelper";
import useSWR, { mutate } from "swr";
const CkeditorContainer = dynamic(() => import("./CkeditorContainer"), {
  ssr: false,
});

const page = ({ params }) => {
  const {
    data: fetchingData,
    error,
    isLoading,
  } = useSWR(`${baseUrl}/api/seller/save-profile-business-details`, fetcher);

   const [openModal, setOpenModal] = useState(false);
  const fileInputRef = useRef(null);
  const sellerProfileDetails = fetchingData?.data.sellerProfile;
  const sellor_id = use(params).seller_id;
  const [isEdit, setEdit] = useState(false);
  const [bannerError, setBannerError] = useState("");
  // const [sellerProfileDetails, setSellerProfileDetails] = useState({})
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
    if (fetchingData?.status) {
      setData(fetchingData?.data.sellerProfile);
    }
  }, [fetchingData, isLoading]);

  async function saveBusinessDetails() {
    const response = await apiRequest(
      `${baseUrl}/api/seller/save-profile-business-details`,
      "POST",
      data
    );
    if (response.status) {
      mutate(`${baseUrl}/api/seller/save-profile-business-details`);
      setEdit(false)
    }
  }


  const handleEditClick = () => { 
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file upload dialog
    }
  };


    function changeBannerImage(e){
      const file = e.target.files[0];
      if(file){
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

      setData((preData)=>({
        ...preData,
        banner:file
      }))
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
        
    };
 

    async function saveImageFunction(e){
      e.preventDefault()
      const formData = new FormData();
      formData.append('banner', data.banner); 
      const response = await apiRequest(`${baseUrl}api/seller/save-profile-baaner-image`, "POST", formData)
      if(response.status){
        mutate(`${baseUrl}/api/seller/save-profile-business-details`);
        setOpenModal(false)
        setData((preData)=>({
          ...preData,
          banner:null
        }))
      }else{
        setBannerError(response.data)
      }
    }

  return (
    <>
    
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="banner-content-store position-relative" >
              {sellerProfileDetails?.banner ? ( 
              <img src={`${baseUrl}${sellerProfileDetails?.banner}`}  style={{minHeight:"100px"}}/>
              ):( 
                <img src={`${baseUrl}front/assets/images/blank_banner.jpg`}  alt="banner"  style={{minHeight:"100px"}} />
              )}
              <a className="view_all mt--20" onClick={() => setOpenModal(true)} 
                style={{position: 'absolute', right: '40px', bottom: '40px', cursor:"pointer"}}> 
                            Edit Image
                          </a>
            </div>
          </div>
        </div>
      </div>
      {/* ===============store-category=open===================== */}
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="store_logo">
              <img src={`${baseUrl}front/assets/images/store_logo.jpg`} />
            
            </div>
          
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcumb-wrap_asd">
                  <ul>
                    <li>
                      <a href="#">Business Overview</a>
                    </li>
                    {/* <li>
                      <a href="#what_our_customers_say.html">
                        What Our Customers Say
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-12"></div>
              <div className="col-lg-9 col-12 profile">
                <div className="row">   
                  {!isEdit && (
                    <div className="col-12 col-lg-12">
                        <div style={{ float: "right" }}>
                          <button
                            className="view_all mt--20"
                            onClick={() => setEdit(true)}
                          > 
                            Edit Profile
                          </button>
                        </div>
                      </div>
                  )}
                    
                  <div className="">
                    <h3>Business Overview</h3>
                  </div>
                  {isEdit && (
                    <div className="row">
                      <div className="col-12 col-lg-12">
                        <CkeditorContainer
                          data={data}
                          setData={setData}
                          nameAttr={"business_overview"}
                        />
                      </div>
                    </div>
                  )}
                  {!isEdit && (
                    <div>
                    <div className="ckeditor-content" dangerouslySetInnerHTML={{ __html: data?.business_overview }}></div>
                    </div>
                  )}
                  {isEdit && (
                    <div className="row">
                      <div className="col-lg-11">
                        <div className="business_pfofile pt--30">
                          <img
                            src={`${baseUrl}front/assets/images/djfdl_review.jpg`}
                          />{" "}
                          Business Profile
                        </div>
                      </div>
                      <div className="col-12 col-lg-12">
                        <CkeditorContainer
                          data={data}
                          setData={setData}
                          nameAttr={"business_profile"}
                        />
                      </div>

                      <div className="col-12 col-lg-12">
                        <div style={{ float: "right" }}>
                          <button
                            className="view_all mt--20"
                            onClick={() => saveBusinessDetails()}
                          >
                            {" "}
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="col-lg-11">
                    {!isEdit && (
                      <>
                        <div className="col-lg-11">
                          <div className="business_pfofile pt--30">
                            <img
                              src={`${baseUrl}front/assets/images/djfdl_review.jpg`}
                            />{" "}
                            Business Profile
                          </div>
                        </div>

                        <div className="table-responsive table-wrap">
                          <div className="table-block">
                          <span dangerouslySetInnerHTML={{ __html: data?.business_profile }}></span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  {/* <div className="col-lg-11">
                    <div className="customers-say">
                      <h2>What Our Customers Say</h2>
                    </div>
                    <div className="review_outer">
                      <div className="col-lg-9 offset-lg-1">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="rating-circle nine half">
                              <div className="rc-pie rc-spinner" />
                              <div className="rc-pie rc-filler" />
                              <div className="rc-mask" />
                              <div className="rc-count" />
                            </div>
                          </div>
                          <div className="col-lg-8 offset-lg-1">
                            <div className="rating_review">
                              <ul>
                                <li>
                                  <span>Vendor Support </span>
                                  <span className="colon_3">:</span>
                                  <div className="product-status2">
                                    <div className="rating-stars-group">
                                      <div className="rating-star">
                                        <i className="fas fa-star" />
                                      </div>
                                      <div className="rating-star">
                                        <i className="fas fa-star" />
                                      </div>
                                      <div className="rating-star">
                                        <i className="fas fa-star" />
                                      </div>
                                      <div className="rating-star">
                                        <i className="fas fa-star" />
                                      </div>
                                      <div className="rating-star">
                                        <i className="fas fa-star-half-alt" />
                                      </div>
                                      <span className="value_df">4.6</span>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <span>Timely Delivery </span>
                                  <span className="colon_3">:</span>
                                  <div className="product-status2">
                                    <div className="rating-stars-group">
                                      <div className="rating-star">
                                        <i className="fas fa-star" />
                                      </div>
                                      <div className="rating-star">
                                        <i className="fas fa-star" />
                                      </div>
                                      <div className="rating-star">
                                        <i className="fas fa-star" />
                                      </div>
                                      <div className="rating-star">
                                        <i className="fas fa-star" />
                                      </div>
                                      <div className="rating-star">
                                        <i className="fas fa-star-half-alt" />
                                      </div>
                                      <span className="value_df">4.5</span>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <span>Quality Assurance </span>
                                  <span className="colon_3">:</span>
                                  <div className="product-status2">
                                    <div className="rating-stars-group">
                                      <div className="rating-star">
                                        <i className="fas fa-star" />
                                      </div>
                                      <div className="rating-star">
                                        <i className="fas fa-star" />
                                      </div>
                                      <div className="rating-star">
                                        <i className="fas fa-star" />
                                      </div>
                                      <div className="rating-star">
                                        <i className="fas fa-star" />
                                      </div>
                                      <div className="rating-star">
                                        <i className="fas fa-star-half-alt" />
                                      </div>
                                      <span className="value_df">4.7</span>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <a
                              href="what_our_customers_say.html"
                              className="view_all mt--20"
                            >
                              View All Feedback
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      
{/* modal */}
{openModal && ( 
<div className="modal fade show d-block view_reasons" tabIndex={-1} role="dialog">
  {/* Modal content */}
  <div className="modal-content">
    <h2>Banner Image</h2>
    <span className="close-btn" onClick={() => setOpenModal(false)}>
 x</span>
    <div className="container">
      <div className="col-lg-12">
        <form>
          <div className="edit-listing_form">
            {/* <h1>Answer</h1> */}
            <div className="form-group mt--20">
              <div className="row align-items-center">
                <div className="col-lg-12">
                {sellerProfileDetails?.banner ? ( 
              <img src={`${baseUrl}${sellerProfileDetails?.banner}`} alt="banner"   id="imagePreview"/>
              ):(
              
                <img src={`${baseUrl}front/assets/images/blank_banner.jpg`} alt="banner"  id="imagePreview"/>
              )}

                  
                </div>
              </div>
            </div>
             <span className="text-danger"><strong>Note:</strong> Allowed file types: JPG, PNG. Maximum file size: 10MB. Required dimensions: 1400px (width) × 310px (height).</span>
            <div style={{color:'red'}} >{bannerError}</div>
            <div className="save_all" style={{display:'flex', justifyContent:'end', gap:'10px'}} >
            <a href="#" onClick={()=>handleEditClick()}>  
              <input type="file" hidden  ref={fileInputRef}  onChange={(e)=>changeBannerImage(e)} /> {data?.banner ? "Change Image" : "Upload new image"}
             </a>

             {data?.banner && (
               <a href="#" onClick={(e)=>saveImageFunction(e)}>Save</a>
             )}
             
            </div>
            
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
)}
{openModal && <div className="modal-backdrop fade show" onClick={() => setOpenModal(false)}></div>}

    </>
  );
};

export default page;
