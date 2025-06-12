"use client";
import { baseUrl, createFormData, currencyCode, isEmpty, main_thumb_img_path } from "@/Http/helper";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SearchLoader from "@/app/SearchLoader";
import { fileBasePath } from "@/Http/urlHelper";
import UploadAdImageSection from "./UploadAdImageSection";
import UploadVideoSection from "./UploadVideoSection";
import Swal from "sweetalert2"; 
import ImageAdsViewFormat from "./ImageAdsViewFormat";
import VideoAdsViewFormat from "./VideoAdsViewFormat";

function DisplayAds() {

    const searchParams = useSearchParams();
    const updateId = searchParams.get("update") || null;
    const [minDate, setMinDate] = useState(new Date().toISOString().split("T")[0]);
  const router = useRouter();
  const pathname = usePathname();
  const [campaign, setCampaign] = useState({
    adsType: "Display",
    adFormat: "Image", 
    campaignName: "",
    defaultBid: "",
    dailyBudget: "",
    startDate: "",
    endDate: "",
    previewType: "Auto Creative",
  });

  const [errors, setErrors] = useState({});
  const fileRef = useRef(null);
  const [submitCampaignLoading, setSubmitCampaignLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [isCategoryLoading, setIsCategoryLoading] = useState(false);
  const [savedCategories, setSavedCategories] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchCategoryText, setSearchCategoryText] = useState("");
  const [productList, setProductList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
   const [adProduct, setAdProduct] = useState({})


  useEffect(()=>{
            fetch('/api/seller/ads/check-brand-owner',{
                  method:"POST"
                }).then((response)=>{
                  if(!response.ok){
                    throw new Error("Internal Issue");
                  }
                  return response.json();
                }).then((res)=>{
                  if(!res.status){
                      Swal.fire({
                      title:"Error",
                      icon:"error",
                      title:"Validation Error",
                      text:res.data?.message,
                      confirmButtonText:"Okay"
                    }).then((confirmData)=>{
                      // router.push("/dashboard/advertising/my-ads/All")
                    })
                  } 
                }).catch((err)=>{
                  Swal.fire({
                    title:"Error",
                    icon:"error",
                    title:"Error",
                    text:err.message
                  })
                  console.log(err);
                })
  },[pathname])



  function hendleInputChangeInput(e) {
    const { name, value, checked, files } = e.target;

    //============================== upload image =========================================
    if (campaign.adFormat == "Image" && name === "fileUrl") {
      const file = files[0];
      if (!file) return;
      
      if (!file.type.startsWith("image/")) {
        alert("Only image files are allowed.");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("Image size must be 5MB or smaller.");
        if (fileRef.current) {
          fileRef.current.value = "";
        }
        return;
      }

      const reader = new FileReader();

      reader.onload = () => {
        const img = new window.Image();

        img.onload = () => {
          setCampaign((prevData) => ({
            ...prevData,
            fileUrl: file,
            fileUrlPath: reader.result,
          }));

          if (fileRef.current) {
            fileRef.current.value = "";
          }
        };

        img.onerror = () => {
          alert("Error loading image. Please select a valid image file.");
        };

        img.src = reader.result;
      };

      reader.readAsDataURL(file);
    }

 

    //====================================================== upload video start =====================================
    if (campaign.adFormat == "Video" && name === "fileUrl") {
        const file = files[0];
        if (!file) return;
 
        if (!file.type.startsWith("video/")) {
          alert("Only video file are allowed.");
          return;
        }
 
        if (file.size > 200 * 1024 * 1024) {
          alert("Video size must be 200MB or smaller.");
          if (fileRef.current) {
            fileRef.current.value = "";
          }
          return;
        }

        const reader = new FileReader();

        reader.onload = () => {
          setCampaign((prevData) => ({
            ...prevData,
            fileUrl: file,
            fileUrlPath: reader.result,  
          }));

          if (fileRef.current) {
            fileRef.current.value = "";
          }
        }; 
        reader.readAsDataURL(file);  
      }
  //============================= end upload video ==================================================

    if (name == "dailyBudget" || name == "defaultBid") {
      const numericValue = value.replace(/[^0-9.]/g, "");
      setCampaign((prevData) => ({ ...prevData, [name]: numericValue }));
      setErrors((preErrs) => ({
        ...preErrs,
        [name]: !numericValue ? `required` : "",
      }));
      return;
    }
    if (name == "expectedROI") {
      let numericValue = value.replace(/[^0-9.]/g, "");
      if (numericValue && numericValue <= 0) {
        numericValue = "";
      }
      setCampaign((prevData) => ({ ...prevData, [name]: numericValue }));
      setErrors((preErrs) => ({
        ...preErrs,
        [name]: !numericValue ? `required` : "",
      }));
      return;
    }

    if (name == "budgetLimit") {
      let numericValue = value.replace(/[^0-9.]/g, "");
      if (numericValue && numericValue <= 0) {
        numericValue = "";
      }
      setCampaign((prevData) => ({ ...prevData, [name]: numericValue }));
      return;
    }

    if (name == "budgetManually") {
      setCampaign((prevData) => ({
        ...prevData,
        [name]: checked ? value : "",
      }));
      return;
    }
    setCampaign((prevData) => ({ ...prevData, [name]: value }));
    setErrors((preErrs) => ({ ...preErrs, [name]: !value ? `required` : "" }));
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchLoading(true);
      fetch(`/api/seller/ads/product-listing?searchText=${searchText}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setSearchLoading(false);
          if (data.status) {
            setProductList(data.data?.products);
          }
        })
        .catch((error) => {
          setSearchLoading(false);
          console.error("Error:", error);
        });
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchText]);

  // select product function
  function selectProduct(product) {
    const exitItem = selectedProduct.filter((item) => {
      return (
        item._id === product._id && item.variant?._id === product.variant?._id
      );
    });
    if (exitItem.length > 0) {
      const filterList = selectedProduct.filter((item) => {
        return (
          item._id !== product._id && item.variant?._id !== product.variant?._id
        );
      });
      setSelectedProduct(filterList);
    } else {
      setSelectedProduct((preArr) => [...preArr, product]);
    }
  }

  // Remove products
  function removeProduct(product) {
    const filterList = selectedProduct.filter((item) => {
      return (
        item._id !== product._id && item.variant?._id !== product.variant?._id
      );
    });
    setSelectedProduct(filterList);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsCategoryLoading(true);
      fetch(`/api/seller/ads/search-category`, {
        method: "Post",
        body: JSON.stringify({ searchText: searchCategoryText }),
      })
        .then((res) => res.json())
        .then((data) => {
          setIsCategoryLoading(false);
          if (data.status) {
            setCategoryList(data.data?.list);
          }
        })
        .catch((error) => {
          setIsCategoryLoading(false);
          console.error("Error:", error);
        });
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchCategoryText]);

  function AddCategory(e, category, clear = 0) {
    e.preventDefault();
    if (category) {
      const existAlready = selectedCategory.filter(
        (item) => item.name == category.name
      );
      if (existAlready.length > 0) {
        alert("This Category already Added");
        return;
      }
      setSelectedCategory([
        {
          ...category,
          bid: "",
        },
        ...selectedCategory,
      ]);
      setSavedCategories(false);
    }
  }

  async function saveSelectedCategory(e) {
    e.preventDefault();
    setSavedCategories(true);
  }



  
  
  async function submitCampaign(e){
    e.preventDefault();
  
    setErrors({});
    const newErrors = {};
    if(!(campaign.endDate)){
      newErrors.endDate="required.";
     $('input[name="endDate"]').focus();
    }
     if(!(campaign.startDate)){
       newErrors.startDate = "required.";
       $('input[name="startDate"]').focus();
    }
   
       if(campaign.budgetManually !== "Yes"){
         newErrors.budgetManually = "required.";
       $('input[name="dailyBudget"]').focus();
    }
     if(campaign.budgetManually == "Yes" && !(campaign.dailyBudget)){
         newErrors.dailyBudget = "Daily Budget is required.";
       $('input[name="dailyBudget"]').focus();
    }
  
     
      if(isEmpty(campaign.campaignName)){
         newErrors.campaignName = "Campaign name is required.";
        $('input[name="campaignName"]').focus();
      }
    
     
  
      if(Object.keys(newErrors).length > 0){
         setErrors(newErrors)
          return
      }
  
    
    if(selectedProduct.length <= 0){
      Swal.fire({
        text:"Please select a product",
        icon:"error",
        title:"Error"
      })
      return
    }
  
      if(selectedCategory.length <= 0){
        // this condition only for "Manual" Campaign
      Swal.fire({
        text:"Please add minmum one Category.",
        icon:"error",
        title:"Error"
      })
      return
    }
  
   
      if(!savedCategories){
        // this condition only for "Manual" Campaign
        Swal.fire({
          text:"Categories has not saved.",
          icon:"error",
          title:"Error"
        })
        return
      }
  
    const produDoc = selectedProduct.map(prod => ({
                  ...prod,
                  product_id: prod._id,
                  variant_id: prod.variant?._id
              }));
  
    const formDataField = {
      ...campaign,
      fileUrlPath:"",
      selectedProduct:produDoc,
      selectedCategory, 
      adProduct:adProduct
    }
   
    const formData = createFormData(formDataField)
    setSubmitCampaignLoading(true)
    fetch('/api/seller/ads/create-display-ads',{
      method:"POST", 
      body:formData
    }).then( async (response)=>{
     if (!response.ok) { 
      throw new Error("Internal Error");
    }
      return response.json()
    }).then((res)=>{
      setSubmitCampaignLoading(false)
      if(res.status){

        Swal.fire({
          title:"Success",
          icon:"success", 
          text:res.data.message,
          confirmButtonText:"Okay"
        });
        
  
  
        
        // reset all data after create
          setCampaign({
              adsType: "Display",
              adFormat: "Image", 
              campaignName: "",
              defaultBid: "",
              dailyBudget: "",
              startDate: "",
              endDate: "",
              previewType: "Auto Creative",
          }) 
        setSelectedCategory([]) 
        setSelectedProduct([])
        // redirect ads list page
        router.push('/dashboard/advertising/my-ads/All');
      }else{
        throw new Error(res.data?.message || "Something went wrong")
      }
    }).catch((error)=>{
      setSubmitCampaignLoading(false) 
       Swal.fire({
          title:"Error",
          icon:"error", 
          text:error.message,
          confirmButtonText:"Okay"
        });
      console.log(error);
    }) 
  }



  
  useEffect(()=>{
  
    fetch(`/api/seller/ads/display-ad?updateId=${updateId}`)
    .then((response)=>{
      return response.json()
    }).then((res)=>{ 
      if(res.status){
       setCampaign({
        ...res.data.campaign,
        fileUrlPath:res.data.campaign.fileUrl?`${baseUrl}${res.data.campaign.fileUrl}`:undefined,
        startDate:res.data.campaign.startDate.split("T")[0],
        endDate:res.data.campaign.endDate.split("T")[0],
       })
       setSelectedProduct(res.data.adProduct)
       setSelectedCategory(res.data.adsCategory) 
       if(res.data.campaign.startDate.split("T")[0] < minDate){ 
         setMinDate(res.data.campaign.startDate.split("T")[0])
       }
      }
    }).catch((error)=>{ 
      console.log(error);
    }) 
  
  }, [updateId])

  


  return (
    <>
      <div className="rts-navigation-area-breadcrumb pb--10">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12 hub1">
              <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
                <Link href={`${baseUrl}dashboard`}>
                  <i className="fa-solid fa-arrow-left" /> Go to Seller hub
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-6">
              <div className="navigator-breadcrumb-wrapper text-center">
                <h3>Ad format</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-6">
              <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
                <ul>
                  <li>
                    <Link
                      href={`${baseUrl}dashboard/advertising/payment-wallet-summary`}
                    >
                      <i className="fa-solid fa-wallet" /> Wallet
                    </Link>{" "}
                  </li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="details_page_outer">
        <div className="mt-5">
          <div className="container">
            <div className="row pb--50 para1">
              <div
                className="col-lg-4 offset-lg-2"
               onClick={() => {setCampaign((prevData)=>({...prevData, adFormat:"Image", fileUrl:"", fileUrlPath:""}))}}
              >
                <div className={`adfor_boxs ${campaign.adFormat== "Image"?"campaign_box2":""}`}>
                  <div className="row g-4">
                    <div className="col-lg-6 col-12">
                      <div className="box1 text-center">
                        <img
                          src={`${baseUrl}front/assets/images/t-shirt.png`}
                          alt=""
                        />

                        <ul className="review1">
                          <li>
                            <i className="fa-solid fa-star" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="box1 py-5">
                        <i className="fa-solid fa-images" />
                      </div>
                      <p className="pp100" />
                      <p className="pp50" />
                    </div>
                  </div>
                </div>
                <p className="px-5 mt--30 fw-bold">
                  Promote your product with an optional image to captivate your
                  audience and enhance engagement
                </p>
              </div>
              {/* =================================================== */}
              <div
                className="col-lg-4 mt-5 pt-2 pt-md-0 mt-md-0"
                onClick={() => {setCampaign((prevData)=>({...prevData, adFormat:"Video", fileUrl:"", fileUrlPath:""}))}}
              >
                <div className={`adfor_boxs ${campaign.adFormat== "Video"?"campaign_box2":""}`}>
                  <div className="box1  video">
                    <i className="fa-solid fa-play" />
                  </div>
                  <div className="progress1">
                    <p className="pp25" />
                    <p className="pp75" />
                  </div>
                </div>
                <p className="px-5 mt--30 fw-bold">
                  Feature your product or brand with an eye-catching autoplaying
                  video ad, designed to captivate your audience instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt--30">
            <div className="col-lg-6">
              <div className="nnn_dform">
                <div className="registration_form_single-input">
                  <label htmlFor="f-name">Campaign Name</label>
                  <input
                    type="text"
                    name="campaignName"
                    value={campaign.campaignName}
                    onChange={(e) => hendleInputChangeInput(e)}
                  />
                  {errors.campaignName && (
                    <div className="error_message">{errors.campaignName}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="compaign-bot-sec pt-3">
          <div className="container">
            <div className="row">
              <div>
                <p className="compaign-bot-content">Add Daily Budget</p>
              </div>
              <div className="col-lg-12">
                <div className="nnn_dform mt-3">
                  <div className="row align-items-center">
                    <div className="col-lg-3">
                      <div className="registration_form_single-input">
                        <label htmlFor="f-name">
                          {" "}
                          <input
                            id="cb1"
                            type="checkbox"
                            checked={campaign.budgetManually == "Yes"}
                            name="budgetManually"
                            value="Yes"
                            onChange={(e) => hendleInputChangeInput(e)}
                          />{" "}
                           {errors.budgetManually && (
                              <div className="error_message">{errors.budgetManually}</div>
                            )}
                          Select budget manually
                        </label>
                        {/* <input type="text"> */}
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="registration_form_single-input">
                        {campaign.budgetManually == "Yes" && (
                          <>
                            <input
                              type="text"
                              name="dailyBudget"
                              value={campaign.dailyBudget}
                              onChange={(e) => hendleInputChangeInput(e)}
                            />
                            {errors.dailyBudget && (
                              <div className="error_message">
                                {errors.dailyBudget}
                              </div>
                            )}
                        </>

                        )}
                      
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-lg-3">
                      <div className="registration_form_single-input">
                        <label htmlFor="f-name">Set Timeframe</label>
                        {/* <input type="text"> */}
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="registration_form_single-input">
                        {/* <label for="f-name">Campaign Name</label> */}
                        <input
                          type="date"
                          placeholder="Start Date"
                          name="startDate"
                          value={campaign.startDate}
                          onChange={(e) => hendleInputChangeInput(e)}
                        />
                        {errors.startDate && (
                          <div className="error_message">
                            {errors.startDate}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="registration_form_single-input">
                        {/* <label for="f-name">Campaign Name</label> */}
                        <input
                          type="date"
                          placeholder="End Date"
                          name="endDate"
                          value={campaign.endDate}
                          onChange={(e) => hendleInputChangeInput(e)}
                        />
                        {errors.endDate && (
                          <div className="error_message">{errors.endDate}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-6 pe-0">
                <div
                  className="manual-compaign-table1"
                  style={{
                    borderLeft: "1px solid #f3ebeb",
                    borderRight: "1px solid #f3ebeb",
                    borderTop: "1px solid #f3ebeb",
                    borderBottom: "1px solid #f3ebeb",
                    borderRadius: "3px",
                  }}
                >
                  {/* search start */}
                  <div
                    className="registration_form_single-input"
                    style={{ padding: "10px" }}
                  >
                    {/* <label htmlFor="f-name">Select Catalog</label> */}
                    <div className="">
                      <form role="search" className="sr-input-func">
                        <input
                          placeholder="Search your product by title"
                          className="search-int form-control"
                          type="text"
                          value={searchText}
                          onChange={(e) => setSearchText(e.target.value)}
                          name="search"
                        />
                        <a href="#">
                          <i className="far fa-search"></i>
                        </a>
                      </form>
                    </div>
                  </div>
                  {/* end search section */}

                  <div className="manual-compaign-table">
                    <div className="table-responsive">
                      <div className="rightselect">
                        <h5> &nbsp;</h5>
                      </div>
                      {searchLoading && (
                        <div>
                          <SearchLoader />
                        </div>
                      )}
                      <table className="table table-bordered table-striped br-none compaign-table">
                        <tbody>
                          {productList.length > 0 &&
                            productList.map((prod, index) => (
                              <tr
                                className="winner__table"
                                style={{ borderTop: "none" }}
                                key={index}
                              >
                                <td className="text-center check-bg">
                                  <input
                                    id="cb1"
                                    className="checkbox"
                                    type="checkbox"
                                    checked={
                                      selectedProduct.length > 0 &&
                                      selectedProduct.some(
                                        (p) =>
                                          p._id === prod._id &&
                                          p.variant?._id === prod.variant?._id
                                      )
                                    }
                                    onChange={() => selectProduct(prod)}
                                    disabled={selectedProduct.length > 0}
                                  />
                                </td>
                                <td style={{ minWidth: 80 }}>
                                  <img
                                    src={`${fileBasePath}/${main_thumb_img_path}/${prod?.main_image}`}
                                    alt=""
                                    className="manual-campaign-img"
                                  />
                                </td>
                                <td>
                                  <div className="product_details_content mamual_product_details_content">
                                    <p>{prod.product_name}</p>
                                    <ul>
                                      <li className="mamuallist">
                                        <span>SIN:</span> {prod.variant?.sin}
                                      </li>
                                      <li>
                                        <span>SKU:</span> {prod.variant?.sku}{" "}
                                      </li>
                                      <br></br>
                                      <li className="mamuallist">
                                        <span>Price: </span>{" "}
                                        {currencyCode(
                                          prod.variant?.currency || "USD"
                                        )}
                                        {prod.variant?.consumerSalePrice}{" "}
                                      </li>
                                      <li>
                                        <span>Stock: </span>{" "}
                                        {prod.variant?.stock}
                                      </li>
                                    </ul>
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                    {!searchLoading && productList.length == 0 && (
                      <div
                        style={{
                          width: "100%",
                          height: "40vh",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontWeight: 800,
                        }}
                      >
                        Product Not Found!
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 ps-0 mt-5 mt-md-0">
                <div className="manual-compaign-table2">
                  <div className="rightselect d-flex justify-content-between align-items-center mb-3">
                    <h5> Product Selected ({selectedProduct.length})</h5>
                  </div>
                  <div className="table-responsive table-responsive-overflow">
                    <div className="rightselect d-flex justify-content-between align-items-center"></div>
                    <table className="table table-bordered table-striped br-none2 compaign-table ">
                      <tbody>
                        {selectedProduct.length > 0 &&
                          selectedProduct.map((prod, index) => (
                            <tr
                              className="winner__table rightselect3"
                              key={index}
                            >
                              <td style={{ minWidth: 80 }}>
                                <img
                                  src={`${fileBasePath}/${main_thumb_img_path}/${prod?.main_image}`}
                                  alt=""
                                  className="manual-campaign-img"
                                />
                              </td>
                              <td>
                                <div className="product_details_content mamual_product_details_content">
                                  <p>{prod.product_name}</p>
                                  <ul>
                                    <li className="mamuallist">
                                      <span>SIN:</span>
                                      {prod.variant?.sin}
                                    </li>
                                    <li>
                                      <span>SKU:</span> {prod.variant?.sku}
                                    </li>
                                    <br />
                                    <li className="mamuallist">
                                      <span>Price: </span>{" "}
                                      {currencyCode(
                                        prod.variant?.currency || "USD"
                                      )}
                                      {prod.variant?.consumerSalePrice}
                                    </li>
                                    <li>
                                      <span>Stock: </span> {prod.variant?.stock}
                                    </li>
                                  </ul>
                                  <div
                                    className="close_002"
                                    onClick={() => removeProduct(prod)}
                                  >
                                    <i className="fa-solid fa-times pe-4" />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    {selectedProduct.length == 0 && (
                      <div
                        style={{
                          width: "100%",
                          height: "40vh",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontWeight: 800,
                        }}
                      >
                        No Selected Products
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


         {/* ===============================================Upload Video Section========================================================== */}
       
        {campaign.adFormat == "Video" && (
          <UploadVideoSection 
           fileRef={fileRef}
            hendleInputChangeInput={hendleInputChangeInput} 
            campaign={campaign} 
           />
        )}

        <div className="container pt-80">
          <div className="row g-4">
            <div className="col-12">
              <div className="outerhead1">
                <h2>Targeting</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="compaign-1-outer h-100">
                {/* <div className="row g-4">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="select1">
                  <select>
                    <option >Brand</option>
                    <option value={1}>....</option>
                    <option value={2}>.....</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <div className="breadcome-heading pb--10">
                  <form role="search" className="sr-input-func sr-input-func3">
                    <input
                      type="text"
                      placeholder="Search keywords"
                      className="search-int search-int3 form-control"
                    />
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                  </form>
                </div>
              </div>
            </div> */}

                {/* search start */}
                <div
                  className="registration_form_single-input"
                  style={{ padding: "10px" }}
                >
                  {/* <label htmlFor="f-name">Select Catalog</label> */}
                  <div className="">
                    <form role="search" className="sr-input-func">
                      <input
                        placeholder="Search category by category name"
                        className="search-int form-control"
                        type="text"
                        value={searchCategoryText}
                        onChange={(e) => setSearchCategoryText(e.target.value)}
                        name="search"
                      />
                      <a href="#">
                        <i className="far fa-search"></i>
                      </a>
                    </form>
                  </div>
                </div>
                {/* end search section */}

                <style>
                  {`

                  .fixTableHead {
                      overflow-y: auto;
                      height: 400px;
                  }

                  .fixTableHead thead th {
                        position: sticky;
                        top: 0;
                        background:rgb(134, 180, 113);
                        // border: 1px solid #000;
                    }
                  `}
                </style>
                <div className="table-responsive ad3 target1 fixTableHead">
                  {/* {isCategoryLoading && ( 
                <div >
                  <SearchLoader />
                </div>
                  
              )} */}
                  <table
                    className="table table-striped compaign-1-table "
                    style={{ marginTop: 10 }}
                  >
                    <thead className="table__head">
                      <tr>
                        <th>Categories</th>
                        <th>Sugg. bid</th>
                        <th className="text-center"> &nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categoryList.length > 0 &&
                        categoryList.map((item, index) => (
                          <React.Fragment key={index}>
                            <tr>
                              <td className="">
                                <a href="#" className="Toothpaste_bg">
                                  {item.name}
                                </a>
                              </td>
                              <td>
                                <div className="targeting_list">
                                  <ul>
                                    {/* <li>$1.34</li>
                          <br /> */}
                                    <li>{item.suggBid}</li>
                                  </ul>
                                </div>
                              </td>
                              <td className="text-center">
                                <a
                                  href="#"
                                  className="edit add1"
                                  onClick={(e) => AddCategory(e, item)}
                                >
                                  {" "}
                                  Add
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp; </td>
                            </tr>
                          </React.Fragment>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form action={"#"} onSubmit={(e) => saveSelectedCategory(e)}>
                <div className="compaign-1-outer h-100">
                  <div className="table-responsive ad3 target1 fixTableHead">
                    <table
                      className="table table-striped compaign-1-table"
                      style={{ marginTop: 10 }}
                    >
                      <thead className="table__head">
                        <tr className="winner__table">
                          <th colSpan={15}> </th>
                        </tr>
                        <tr className="winner__table">
                          <th>Categories</th>
                          <th>Sugg. bid</th>
                          <th width={100}>Bid</th>
                          <th className="small-size">
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                setSelectedCategory([]);
                              }}
                            >
                              Remove all
                            </a>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedCategory.length > 0 &&
                          selectedCategory.map((selCategory, index2) => (
                            <tr key={index2}>
                              <td className="">
                                <span
                                  href="#"
                                  className="toothpaste_bg_bg_color"
                                >
                                  {selCategory.name}
                                </span>
                              </td>
                              <td>
                                <div className="targeting_list">
                                  <ul>
                                    {/* <li>$1.34</li>
                          <br /> */}
                                    <li> {selCategory.suggBid}</li>
                                  </ul>
                                </div>
                              </td>
                              <td className="text-center">
                                <input
                                  type="text"
                                  className="add_input"
                                  required
                                  value={selCategory.bid}
                                  disabled={savedCategories}
                                  onChange={(e) => {
                                    const value = e.target.value;

                                    const numberValue = value.replace(
                                      /[^0-9.]/g,
                                      ""
                                    );
                                    const updateData = selectedCategory.map(
                                      (itemData, i) =>
                                        index2 == i
                                          ? { ...itemData, bid: numberValue }
                                          : itemData
                                    );
                                    setSelectedCategory(updateData);
                                  }}
                                />
                              </td>
                              <td>
                                <ul className="match_type text-center">
                                  <li>
                                    <i
                                      className="fa-solid fa-times"
                                      style={{ cursor: "pointer" }}
                                      onClick={(e) => {
                                        const dataAfterDelete =
                                          selectedCategory.filter(
                                            (dataItem, i) => i != index2
                                          );
                                        setSelectedCategory(dataAfterDelete);
                                      }}
                                    />
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  {!savedCategories && selectedCategory.length > 0 && (
                    <ul className="butereio">
                      <li>
                        <button href="#" type="submit">
                          Save
                        </button>{" "}
                      </li>
                    </ul>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
     
      
      {/* ===============================================Upload Video Section========================================================== */}
       
        {/* {campaign.adFormat == "Video" && (
          <UploadVideoSection 
           fileRef={fileRef}
            hendleInputChangeInput={hendleInputChangeInput} 
            campaign={campaign} 
           />
        )} */}
     

        {campaign.adFormat =="Image" && (
             <div className="container pt-80">
          <div className="row"> 
            <div className="col-lg-6 col-12">
              <div className="row adverCheck">
                <div className="col-md-3 col-6">
                  <div className="d-flex align-items-center">
                    <input id="auto-creative" className="checkbox cb21" type="radio" 
                      checked={campaign.previewType == "Auto Creative"}
                      onChange={(e)=>{setCampaign((preData)=>({...preData, previewType:"Auto Creative"}))}}/>
                    <span className="ps-3"><label htmlFor="auto-creative"> Auto Creative</label></span>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="d-flex align-items-center">
                    <input
                      id="rich-creative"
                      className="checkbox cb21"
                      type="radio"
                      checked={campaign.previewType == "Rich Creative"}
                      onChange={(e)=>{setCampaign((preData)=>({...preData, previewType:"Rich Creative"}))}}
                    />
                    <span className="ps-3"><label htmlFor="rich-creative">Rich Creative</label> </span>
                  </div>
                </div>
              </div>
            </div>

          {/* ================================================Upload Image====================================================== */}
              
                  {campaign.adFormat == "Image" && campaign.previewType == "Rich Creative" && (
                      <UploadAdImageSection 
                              fileRef={fileRef}
                              hendleInputChangeInput={hendleInputChangeInput} 
                              campaign={campaign} 
                            />
                    )}
          {/* ================================================Upload Image====================================================== */}

            
            {selectedProduct.length > 0 && ( 
                    <ImageAdsViewFormat product={selectedProduct[0]}  campaign={campaign} adProduct={adProduct} setAdProduct={setAdProduct} 
                    submitCampaign={submitCampaign} 
                    />
                  )}
                
                </div>
              </div>
              )}

          {campaign.adFormat =="Video" && selectedProduct.length > 0 && (
            <VideoAdsViewFormat  product={selectedProduct[0]}  
            campaign={campaign} 
            adProduct={adProduct} 
            setAdProduct={setAdProduct}  
             />
          )}
        
         <div className="col-12 perviewS sponsor">
          <div className="right_button">
                <ul>
                  <li>
                    {submitCampaignLoading ? ( 
                      <a href={`#`} onClick={(e)=>e.preventDefault()}>Submiting..</a>
                    ):(
                      <a href={`#`} onClick={(e)=>submitCampaign(e)}>Submit Campaign</a> 
                    )}
                  </li>
                </ul>
              </div>
         </div>
       
      </div>
    </>
  );
}

function Page() {
  return (
    <Suspense fallback={<>Loading..</>}> 
      <DisplayAds />
    </Suspense>
  )
}

export default Page;
