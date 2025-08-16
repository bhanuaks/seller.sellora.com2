"use client";
import {
  baseUrl,
  createFormData,
  discountPrice,
  getPrecentageAmount,
  getVariantAttribute,
  main_medium_img_path,
  variant_thumb_img_path1,
  variant_thumb_img_path2,
  variant_thumb_img_path3,
  variant_thumb_img_path4,
  variant_thumb_img_path5,
  variant_thumb_img_path6,
  variant_thumb_img_path7,
} from "@/Http/helper";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import $ from "jquery";
import "../../../../../public/front/loader.css";
import { ToastContainer, toast } from "react-toastify";
import { AppContext } from "@/app/contaxtData/contextData";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import UploadImageSection from "../uploadImageSection";
import VariantAddedListC from "../VariantAddedListC";
import Swal from "sweetalert2";
import ThresholdLevelsSection from "./thresholdLevelsSection";
import { Suspense } from "react";
import Link from "next/link";
import AddSingleListingSteper from "../AddSingleListingSteper";
// import Multiselect from "./Multiselect";

import dynamic from "next/dynamic";
const Multiselect = dynamic(() => import("./Multiselect"), { ssr: false });

const page = ({ params }) => {
  const AddVariantPage = ({ params }) => {
    const [thresholdData, setThresholdData] = useState([
      {
        unit: 0,
        discount: 0,
      },
    ]);
    const { globalData, setGlobalData } = useContext(AppContext);
    const router = useRouter();
    const pathname = usePathname();
    const [sellor, setSellor] = useState(null);
    const [category, setCategory] = useState(null);
    const [compliance, setCompliance] = useState(null);
    const [subcategory, setSubcategory] = useState(null);
    const [childcategory, setChildcategory] = useState(null);
    const [brand, setBrand] = useState(null);
    const searchParams = useSearchParams();
    const [selectedVariants, setSelectedVariants] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [variantPrevHistoryData, setVariantPrevHistoryData] = useState({});

    const category_id = searchParams.get("category");
    const subcategory_id = searchParams.get("subCategory");
    const childcategory_id = searchParams.get("childcategory");
    const product_id = searchParams.get("product_id");
    const brand_id = searchParams.get("brand");
    const copy_product_id = searchParams.get("copy_product_id") || "";
    const errorRedirctUtl = `${baseUrl}dashboard/categories`;
    const [productDetails, setProductDetails] = useState(null);
    const [showImage, setShowImage] = useState(false);
    const [errors, setErrors] = useState({});
    const [image, setImage] = useState([]);
    const [imagePath, setImagePath] = useState([]);
    const formRef = useRef();
    const [showWishlistMessage, setShowWishlistMessage] = useState(false);
    const [currentSection, setCurrentSection] = useState("Variant");

    const [variants, setVariants] = useState([]);
    const [saveProccess, setSaveProccess] = useState(false);

    const [variantData, setVariantData] = useState({
      product_id: product_id,
      category_id: category_id,
      sku: "",
      listingStatus: 1,
      msrp: "",
      consumerSalePrice: "",
      businessSalePrice: "",
      currency: "USD",
      taxCode: "",
      taxRate: "",
      fulfillmentBy: "Sellora",
      shippingProvider: "Merchant",
      stock: "",
      withImage: "No",
      customAttributes: {},
      discount_type: "percentage",
      manual_product_id: "",
      manual_product_id_type: "",
      conditionType: "New",
      expireDate: "",
    });
    const [newVariants, setNewVariants] = useState([]);

    const handleCheckboxChange = (e) => {
      const { name, checked } = e.target;
      setShowImage(e.target.checked);
      setVariantData((prevVariants) => ({
        ...prevVariants,
        withImage: checked ? "Yes" : "No",
      }));
    };

    const handleInputChange = (e, index, key) => {
      const { value, name } = e.target;

      if (name == "discount_type") {
        if (
          !confirm(
            "If you change the Quantity-Based Discount Type, your previous discount entry will be removed."
          )
        ) {
          return;
        }
        setVariantData((prevVariants) => ({ ...prevVariants, [name]: value }));
        setThresholdData([{ unit: 0, discount: 0 }]);
        return;
      }

      if (
        name == "msrp" ||
        name == "consumerSalePrice" ||
        name == "businessSalePrice"
      ) {
        const numericValue = value.replace(/[^0-9.]/g, "");
        setVariantData((prevVariants) => ({
          ...prevVariants,
          [name]: numericValue,
        }));
        return;
      }
      if (name == "stock") {
        const numericValue = value.replace(/[^0-9]/g, "");
        setVariantData((prevVariants) => ({
          ...prevVariants,
          [name]: numericValue,
        }));
        return;
      }
      setVariantData((prevVariants) => ({
        ...prevVariants,
        [name]: value,
      }));
    };

    const handleInputChangeDynamicValue = (e) => {
      const { value, name } = e.target;
      console.log({ value });
      setVariantData((prevVariants) => ({
        ...prevVariants,
        customAttributes: {
          ...prevVariants.customAttributes,
          [name]: value,
        },
      }));
    };

    function clickSaveVariant(action) {
      setErrors({});
      if (action == "next") {
        router.push(
          `${baseUrl}seller/product/compliance-and-key-attributes?${searchParams}`
        );
        return;
      }
     
      let filterVariantData = undefined
      if(variantData.customAttributes){
          filterVariantData = Object.fromEntries(
            Object.entries(variantData.customAttributes).filter(
              ([key, value]) => key && value && selectedVariants.includes(key)
            )
          );
      } 
      
      
       
      let variantError = {};
      if (selectedVariants.length > 0) {
        selectedVariants.map((variantItem, index) => {
          if (!filterVariantData[variantItem]) {
            if (index == 0) {
              $(`input[name="${variantItem}"]`).focus();
              $(`select[name="${variantItem}"]`).focus();
            }

            variantError = {
              ...variantError,
              [variantItem]: `${variantItem} is required`,
            };
          }
        });
      }
      if (Object.keys(variantError).length > 0) {
        setErrors(variantError);
        return false;
      }

      const bodyData = createFormData({
        ...variantData,
        threshold: thresholdData,
        variant: productDetails?.variant,
        seller_id: globalData?.sellor._id,
        customAttributes: filterVariantData,
      });

      const dynamicVariant = filterVariantData
        ? Object.keys(filterVariantData)
        : [];
      if (
        dynamicVariant.length == 0 &&
        variants.length > 0 &&
        productDetails?.variant == "Yes"
      ) {
        Swal.fire({
          icon: "error",
          timer: 5000,
          text: "please select atleast one variant",
          title: "Validation Message",
        });
        return;
      } else {
        let countVariantValidate = 0;
        dynamicVariant.forEach((data) => {
          if (variantData.customAttributes[data] != "") {
            countVariantValidate++;
          }
        });
        if (
          countVariantValidate == 0 &&
          variants.length > 0 &&
          productDetails?.variant == "Yes"
        ) {
          Swal.fire({
            icon: "error",
            timer: 5000,
            text: "please select atleast one variant",
            title: "Validation Message",
          });
          return;
        }
      }
      setErrors({});
      // $(".loaderouter").css("display", "flex");
      setSaveProccess(true)
      fetch(`${baseUrl}api/seller/product/add-variant`, {
        method: "POST",
        body: bodyData,
      })
        .then((response) => {
          setSaveProccess(false)
          if (!response.ok) {
            $(".loaderouter").css("display", "none");
            throw new Error("Network error");
          }
          return response.json();
        })
        .then((res) => {
          $(".loaderouter").css("display", "none");

          if (res.status) {
            setNewVariants(res.data.variantList);
            // empty variant data

            setThresholdData([
              {
                unit: "",
                discount: "",
              },
            ]);
            setVariantData({
              product_id: product_id,
              category_id: category_id,
              sku: "",
              listingStatus: 1,
              msrp: "",
              consumerSalePrice: "",
              businessSalePrice: "",
              currency: "USD",
              taxCode: "",
              taxRate: "",
              fulfillmentBy: "Sellora",
              shippingProvider: "Merchant",
              stock: "",
              withImage: "No",
              customAttributes: {},
              manual_product_id: "",
              manual_product_id_type: "",
              conditionType: "New",
              expireDate: "",
            });
            setImagePath([]);
            setImage([]);
            setShowImage(false);
            if (action == "save_and_next") {
              router.push(
                `${baseUrl}seller/product/compliance-and-key-attributes?${searchParams}`
              );
              // setCurrentSection("Threshold")
            }
          } else if (res.data.status_code && res.data.status_code == 400) {
            $(`input[name="${Object.keys(res.data.errors)[0]}"]`).focus();
            $(`select[name="${Object.keys(res.data.errors)[0]}"]`).focus();
            setErrors(res.data.errors);
          }
        });
    }

    useEffect(() => {
      if (!category_id || !brand_id) {
        router.push(errorRedirctUtl);
      }

      if (globalData.sellor) {
        // $(".loaderouter").css("display", "flex");
        fetch(`${baseUrl}api/seller/get-category-and-brand`, {
          method: "POST",
          body: JSON.stringify({
            seller_id: globalData.sellor._id,
            category_id,
            subcategory_id,
            childcategory_id,
            brand_id,
            seller: "yes",
            required_variant: "yes",
            product_id,
            withData: "Compliance",
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
              // if(res.data.brand.status != 1){
              //     router.push(errorRedirctUtl)
              // }
              // if(subcategory_id && !(res.data.subcategory)){
              //     router.push(errorRedirctUtl)
              // }
              // if(childcategory_id && !(res.data.childcategory)){
              //     router.push(errorRedirctUtl)
              // }

              // if(brand_id && !(res.data.brand)){
              //     router.push(errorRedirctUtl)
              // }

              // if( !(res.data.category)){
              //     router.push(errorRedirctUtl)
              // }
              setCompliance(res.data.compliance || null);
              setSellor(res.data.seller);
              setCategory(res.data.category);
              setSubcategory(res.data.subcategory);
              setChildcategory(res.data.childcategory);
              setBrand(res.data.brand);
              setNewVariants(res.data.variantList);
              setProductDetails(res.data.product);
              if (res.data.product && !res.data.product.variant) {
                setProductDetails((prevData) => ({
                  ...prevData,
                  variant: res.data.variantList.length > 0 ? "Yes" : "No",
                }));
              }

              if (res.data.category.category_variant) {
                setVariants(Object.entries(res.data.category.category_variant));

                if (
                  Object.entries(res.data.category.category_variant).length ==
                    0 ||
                  res.data.product.variant == "No"
                ) {
                  // category variant not when update direct variant
                  if (res.data.variantList && res.data.variantList.length > 0) {
                    editVariant(res.data.variantList[0]);
                  }
                }
              } else {
                if (res.data.variantList && res.data.variantList.length > 0) {
                  editVariant(res.data.variantList[0]);
                  console.log(res.data.variantList[0]);
                }
              }
            } else {
              // router.push(errorRedirctUtl)
            }
          });
      }
    }, [globalData.sellor, pathname]);

    const deleteVariant = (id) => {
      // $(".loaderouter").css("display", "flex");
      fetch(`${baseUrl}api/seller/product/add-variant`, {
        method: "DELETE",
        body: JSON.stringify({ _id: id }),
      })
        .then((response) => {
          if (!response.ok) {
            
            throw new Error("Network error");
          }
          return response.json();
        })
        .then((res) => {
          if (res.status) {
            const filterData = newVariants.filter((item) => item._id !== id);
            setNewVariants(filterData);
          }
          
        });
    };

    function editVariant(variantParam) {
      setVariantData({
        ...variantParam,
        conditionType: variantParam?.conditionType || "New",
        category_id: category_id,
        product_id: product_id,
        currency : variantParam.currency || "USD"
      });
      setThresholdData(variantParam.threshold);
      if (variantParam.customAttributes) {
        // select already exist variation in product varionat
        setSelectedVariants(Object.keys(variantParam.customAttributes));
        const optionsEdit = [];
        Object.keys(variantParam.customAttributes).map((item) => {
          optionsEdit.push({ value: item, label: item });
        });
        setSelectedOptions(optionsEdit);
      }
      const imgPath = [];
      const allImage = [];
      if (variantParam.image_1) {
        imgPath.push(
          `${baseUrl}${variant_thumb_img_path1}${variantParam.image_1}`
        );
        allImage.push(`${variantParam.image_1}`);
      }
      if (variantParam.image_2) {
        imgPath.push(
          `${baseUrl}${variant_thumb_img_path2}${variantParam.image_2}`
        );
        allImage.push(`${variantParam.image_2}`);
      }
      if (variantParam.image_3) {
        imgPath.push(
          `${baseUrl}${variant_thumb_img_path3}${variantParam.image_3}`
        );
        allImage.push(`${variantParam.image_3}`);
      }
      if (variantParam.image_4) {
        imgPath.push(
          `${baseUrl}${variant_thumb_img_path4}${variantParam.image_4}`
        );
        allImage.push(`${variantParam.image_4}`);
      }
      if (variantParam?.image_5) {
        imgPath.push(
          `${baseUrl}${variant_thumb_img_path5}${variantParam.image_5}`
        );
        allImage.push(`${variantParam.image_5}`);
      }
      if (variantParam?.image_6) {
        imgPath.push(
          `${baseUrl}${variant_thumb_img_path6}${variantParam.image_6}`
        );
        allImage.push(`${variantParam.image_6}`);
      }
      if (variantParam?.image_7) {
        imgPath.push(
          `${baseUrl}${variant_thumb_img_path7}${variantParam.image_7}`
        );
        allImage.push(`${variantParam.image_7}`);
      }
      setImagePath(imgPath);
      setImage(allImage);
    }

    useEffect(() => {
      setShowImage(variantData.withImage == "Yes");
    }, [variantData.withImage]);

    function updateThresholdData(key, e) {
      const { name, value } = e.target;

      const updatedthresholdData = thresholdData.map((prevData, i) =>
        i === key ? { ...prevData, [name]: value } : prevData
      );

      setThresholdData(updatedthresholdData);
    }

    function addMoreThreshold(e) {
      e.preventDefault();
      setThresholdData([...thresholdData, { unit: 0, discount: 0 }]);
    }

    function deleteThreshold(index) {
      const updatedthresholdData = thresholdData.filter((_, i) => i != index);
      setThresholdData(updatedthresholdData);
    }

    const handleVariantChange = (e) => {
      const value = e.target.value;
      if (e.target.checked) {
        if (selectedVariants.length < 2) {
          setSelectedVariants((prev) => [...prev, value]);
        } else {
          setShowWishlistMessage(true);
        }
      } else {
        setSelectedVariants((prev) => prev.filter((v) => v !== value));

        setVariantData((prevVariants) => ({
          ...prevVariants,
          customAttributes: {
            ...prevVariants.customAttributes,
            [value]: null,
          },
        }));
      }
    };

    const closeOverlay = () => {
      setShowWishlistMessage(false);
    };

    useEffect(() => {

      const timeId = setTimeout(() => {
        const variantSku = variantData.sku;
        fetch(`/api/seller/fetch-exist-variant`, {
          method: "POST",
          body: JSON.stringify({ sku: variantSku, category_id }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Internal issue");
            }
            return response.json();
          })
          .then((res) => {
            if (res.status && res.data.variant) {
              
             
              setVariantPrevHistoryData({
                variantData:variantData,
                thresholdData:thresholdData,
                selectedVariants: selectedVariants,
                selectedOptions :selectedOptions

              })
              editVariant(res.data.variant) 

            }else{
              if(variantPrevHistoryData?.variantData){
                setVariantData({...variantPrevHistoryData.variantData, sku:variantSku})
              }

               if(variantPrevHistoryData?.thresholdData){
                setThresholdData(variantPrevHistoryData.thresholdData)
              }
             
              if(variantPrevHistoryData?.selectedVariants){
                setSelectedVariants(variantPrevHistoryData.selectedVariants)
              }

               if(variantPrevHistoryData?.selectedOptions){
                setSelectedOptions(variantPrevHistoryData.selectedOptions)
              }
              // setVariantData((prevData)=>({
              //   ...prevData, 
              //    product_id: product_id,
              //     category_id: category_id,
              //     sku: variantSku,
              // }))

              // setThresholdData({
              //   unit: 0,
              //   discount: 0,
              // })
              //  setVariantData({
              //   ...variantData,
              //     product_id: product_id,
              //     category_id: category_id,
              //     sku: variantSku,
              //     listingStatus: 1,
              //     msrp: "",
              //     consumerSalePrice: "",
              //     businessSalePrice: "",
              //     currency: "USD",
              //     taxCode: "",
              //     taxRate: "",
              //     fulfillmentBy: "Sellora",
              //     shippingProvider: "Merchant",
              //     stock: "",
              //     withImage: "No",
              //     // customAttributes: {},
              //     discount_type: "percentage",
              //     // manual_product_id: "",
              //     // manual_product_id_type: "",
              //     conditionType: "New",
              //     expireDate: "",
              //   });

                // setSelectedOptions([]);
                // setSelectedVariants([]);
            }
          })
          .catch((error) => {
            console.log(error);
          });

      }, 300);
      return () => clearTimeout(timeId);
    }, [variantData.sku]);

    return (
      <>
        <div className="add-product-streep text-center">
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

          {/* Overlay Background */}
          {showWishlistMessage && (
            <div
              id="anywhere-home"
              className="anywere bgshow"
              onClick={closeOverlay}
            ></div>
          )}

          {showWishlistMessage && (
            <div
              className="successfully-addedin-wishlist"
              style={{ display: "flex" }}
            >
              <div
                className="d-flex"
                style={{ alignItems: "center", gap: "15px" }}
              >
                {/* <i className="fa-regular fa-check"></i> */}
                <p>You can select a maximum of two variations.</p>
              </div>
            </div>
          )}
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="add-product">Create Single Listing</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg33 pt-20">
          <div className="container">
            <AddSingleListingSteper
              searchParams={searchParams}
              productDetails={productDetails}
              compliance={compliance}
            />
          </div>
          <div className="container-fluid">
            <div className="form_outer mt">
              <div className="row">
                {productDetails && (
                  <div className="col-lg-12">
                    <div className="preview_box">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="preview">Preview</div>
                        </div>
                        <div className="col-lg-2">
                          <div>
                            <Image
                              src={`${baseUrl}${
                                productDetails
                                  ? main_medium_img_path +
                                    productDetails.main_image
                                  : ""
                              }`}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              alt="Product Image"
                              loading="lazy"
                              width={0}
                              height={0}
                              style={{
                                width: "auto",
                                height: "auto",
                                maxWidth: "100%",
                                maxHeight: "100%",
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="preview_text">
                            <p>
                              {productDetails
                                ? productDetails.product_name
                                : ""}
                            </p>
                            <div className="price_dfsdf">
                              {/* <span>$200</span> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="row" ref={formRef}>
                {currentSection == "Variant" && (
                  <div className="col-lg-12">
                    {/* ===================================form-1================================== */}
                    <div className="head_dfd">
                      <h3>Image/Price/Inventory/Variation</h3>
                    </div>
                    <div className="preview_box">
                      {/* <div style={{float:"right", width:"100%"}}>
                        <Link href={"/dashboard/listing"} style={{
                        float: 'right',
                        padding: '10px 16px',
                        background: '#00f665',
                        margin: '7px 0pc',
                        color: '#000',
                        borderRadius: '5px',
                        fontWeight: '600',
                        cursor:"pointer"
                      }}>Go to Listing</Link></div> */}
                      <div className="form-container">
                        <div className="form-group">
                          <div className="row align-items-center">
                            <div className=" ">
                              <div className="form-container">
                                <div
                                  className="form-group form-group2"
                                  id="appendVariant"
                                >
                                  <div className="row">
                                    {productDetails && variants.length > 0 &&  (
                                      productDetails.save_as_draft == 1 || productDetails?.variant == "No" ?(

                                     
                                      <div className="col-12 col-lg-12 mb-4 text-center">
                                        <br />
                                        <h3 className="mb-1">Variation</h3>
                                        <input
                                          type="radio"
                                          name="variant"
                                          value="Yes"
                                          checked={
                                            productDetails?.variant == "Yes"
                                              ? true
                                              : false
                                          }
                                          onChange={(e) => {
                                            setProductDetails((prevData) => ({
                                              ...prevData,
                                              variant: "Yes",
                                            }));
                                          }}
                                        />
                                        &nbsp;Yes &nbsp; &nbsp;
                                        <input
                                          type="radio"
                                          name="variant"
                                          value="No"
                                          checked={
                                            productDetails?.variant == "No"
                                              ? true
                                              : false
                                          }
                                          onChange={(e) => {
                                            setProductDetails((prevData) => ({
                                              ...prevData,
                                              variant: "No",
                                            }));
                                            setShowImage(false);
                                            setVariantData((prevVariants) => ({
                                              ...prevVariants,
                                              withImage: "No",
                                            }));
                                            Swal.fire({
                                              icon: "warning",
                                              title: "Warning",
                                              text: 'If you select "NO" then all added variants will be removed',
                                            });
                                          }}
                                        />{" "}
                                        &nbsp;No
                                      </div>

                                       ):null
                                    )}

                                    {productDetails &&
                                      variants.length > 0 &&
                                      productDetails.variant === "Yes" && (
                                        <div className="col-3">
                                          <Multiselect
                                            variant={variants}
                                            selectedVariants={selectedVariants}
                                            setSelectedVariants={
                                              setSelectedVariants
                                            }
                                            selectedOptions={selectedOptions}
                                            setSelectedOptions={
                                              setSelectedOptions
                                            }
                                          />
                                        </div>
                                      )}

                                    {productDetails &&
                                    variants.length &&
                                    productDetails.variant == "Yes"
                                      ? variants.map(
                                          (variantItem, index) =>
                                            selectedVariants.includes(
                                              variantItem[0]
                                            ) && (
                                              <div
                                                className="col-3"
                                                key={index}
                                              >
                                                <label htmlFor="sku">
                                                  {variantItem[0]}
                                                  <span></span>
                                                </label>
                                                {typeof variantItem[1] !==
                                                "string" ? (
                                                  <select
                                                    name={`${variantItem[0]}`}
                                                    value={
                                                      variantData
                                                        .customAttributes?.[
                                                        variantItem[0]
                                                      ] || ""
                                                    }
                                                    onChange={(e) =>
                                                      handleInputChangeDynamicValue(
                                                        e
                                                      )
                                                    }
                                                  >
                                                    <option value={""}>
                                                      select
                                                    </option>
                                                    {variantItem.length > 0 &&
                                                      variantItem[1].map(
                                                        (
                                                          variantValue,
                                                          value_key
                                                        ) => (
                                                          <option
                                                            key={`${value_key}`}
                                                            value={variantValue}
                                                          >
                                                            {variantValue}
                                                          </option>
                                                        )
                                                      )}
                                                  </select>
                                                ) : (
                                                  <input
                                                    type="text"
                                                    name={`${variantItem[0]}`}
                                                    value={
                                                      variantData
                                                        .customAttributes?.[
                                                        variantItem[0]
                                                      ] || ""
                                                    }
                                                    onChange={(e) =>
                                                      handleInputChangeDynamicValue(
                                                        e
                                                      )
                                                    }
                                                  />
                                                )}
                                                {errors[variantItem[0]] && (
                                                  <span className="error_message">
                                                    {errors[variantItem[0]]}
                                                  </span>
                                                )}
                                              </div>
                                            )
                                        )
                                      : ""}
                                    {/*  start fixed filed */}
                                    <div className="col-12 col-lg-12" />
                                    <h3 className="mb-1 text-center mt-5">
                                      Price/Inventory
                                    </h3>
                                    <div className="col-3">
                                      <label htmlFor="sku">
                                        Product Id<span></span>
                                      </label>
                                      <input
                                        type="text"
                                        name="manual_product_id"
                                        value={
                                          variantData.manual_product_id || ""
                                        }
                                        onChange={(e) =>
                                          handleInputChange(e, 0)
                                        }
                                      />
                                      {errors.manual_product_id && (
                                        <span className="error_message">
                                          {errors.manual_product_id}
                                        </span>
                                      )}
                                    </div>

                                    <div className="col-3">
                                      <label htmlFor="sku">
                                        Product Id Type<span></span>
                                      </label>
                                      <select
                                        type="text"
                                        name="manual_product_id_type"
                                        value={
                                          variantData.manual_product_id_type ||
                                          ""
                                        }
                                        onChange={(e) =>
                                          handleInputChange(e, 0)
                                        }
                                      >
                                        <option value={""}>select</option>
                                        <option value={"UPC"}>UPC</option>
                                        <option value={"EIN"}>EIN</option>
                                        <option value={"GTIN"}>GTIN</option>
                                        <option value={"ISBN"}>ISBN</option>
                                      </select>
                                      {errors.manual_product_id_type && (
                                        <span className="error_message">
                                          {errors.manual_product_id_type}
                                        </span>
                                      )}
                                    </div>

                                    <div className="col-3">
                                      <label htmlFor="sku">
                                        SKU<span>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        name="sku"
                                        value={variantData.sku}
                                        onChange={(e) =>
                                          handleInputChange(e, 0)
                                        }
                                      />
                                      {errors.sku && (
                                        <span className="error_message">
                                          {errors.sku}
                                        </span>
                                      )}
                                    </div>
                                    <div className="col-3">
                                      <label htmlFor="sku">
                                        Listing Status<span>*</span>
                                      </label>
                                      <select
                                        name="listingStatus"
                                        value={variantData.listingStatus || ""}
                                        onChange={(e) =>
                                          handleInputChange(e, 0)
                                        }
                                      >
                                        {/* <option value={""}>Select</option> */}
                                        <option value={1}>Active</option>
                                        <option value={0}>Inactive</option>
                                      </select>
                                      {errors.listingStatus && (
                                        <span className="error_message">
                                          {errors.listingStatus}
                                        </span>
                                      )}
                                    </div>

                                    <div className="col-3">
                                      <label htmlFor="sku">
                                        MSRP <span>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        name="msrp"
                                        value={variantData.msrp || ""}
                                        onChange={(e) =>
                                          handleInputChange(e, 0)
                                        }
                                      />
                                      {errors.msrp && (
                                        <span className="error_message">
                                          {errors.msrp}
                                        </span>
                                      )}
                                    </div>
                                    <div className="col-3">
                                      <label htmlFor="sku">
                                        Consumer Sale Price <span>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        name="consumerSalePrice"
                                        value={
                                          variantData.consumerSalePrice || ""
                                        }
                                        onChange={(e) =>
                                          handleInputChange(e, 0)
                                        }
                                      />
                                      {errors.consumerSalePrice && (
                                        <span className="error_message">
                                          {errors.consumerSalePrice}
                                        </span>
                                      )}
                                    </div>
                                    <div className="col-3">
                                      <label htmlFor="sku">
                                        Business Sale Price <span>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        name="businessSalePrice"
                                        value={variantData.businessSalePrice}
                                        onChange={(e) =>
                                          handleInputChange(e, 0)
                                        }
                                      />
                                      {errors.businessSalePrice && (
                                        <span className="error_message">
                                          {errors.businessSalePrice}
                                        </span>
                                      )}
                                    </div>

                                    <div className="col-3">
                                      <label htmlFor="sku">
                                        Stock<span>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        name="stock"
                                        value={variantData.stock}
                                        onChange={(e) =>
                                          handleInputChange(e, 0)
                                        }
                                      />
                                      {errors.stock && (
                                        <span className="error_message">
                                          {errors.stock}
                                        </span>
                                      )}
                                    </div>
                                    <div className="col-3">
                                      <label htmlFor="sku">
                                        Currency <span>*</span>
                                      </label>
                                      <select
                                        name="currency"
                                        value={variantData.currency}
                                        onChange={(e) => handleInputChange(e)}
                                      >
                                        <option value={"USD"}>USD</option>
                                      </select>

                                      {errors.currency && (
                                        <span className="error_message">
                                          {errors.currency}
                                        </span>
                                      )}
                                    </div>

                                    <div className="col-3">
                                      <label htmlFor="sku">
                                        Condition Type<span>*</span>
                                      </label>
                                      <select
                                        type="text"
                                        name="conditionType"
                                        value={variantData.conditionType}
                                        onChange={(e) =>
                                          handleInputChange(e, 0)
                                        }
                                      >
                                        <option value={"New"}>New</option>
                                      </select>
                                      {errors.conditionType && (
                                        <span className="error_message">
                                          {errors.conditionType}
                                        </span>
                                      )}
                                    </div>

                                    <div className="col-3">
                                      <label htmlFor="sku">Expire Date</label>
                                      <input
                                        className="form-control"
                                        type="date"
                                        name="expireDate"
                                        value={variantData.expireDate || ""}
                                        onChange={(e) =>
                                          handleInputChange(e, 0)
                                        }
                                      />
                                      {errors.expireDate && (
                                        <span className="error_message">
                                          {errors.expireDate}
                                        </span>
                                      )}
                                    </div>

                                    <div className="col-12 col-lg-12" />
                                    {productDetails &&
                                      variants.length > 0 &&
                                      productDetails.variant == "Yes" && (
                                        <div className="col-3">
                                          <label htmlFor="sku">&nbsp;</label>
                                          <input
                                            type="checkbox"
                                            name="with_image"
                                            onChange={handleCheckboxChange}
                                            value={"With Image"}
                                            checked={
                                              variantData.withImage == "Yes"
                                            }
                                          />
                                          &nbsp;Add Variant Image
                                        </div>
                                      )}

                                    <div className="col-4">
                                      <ul className="button_f">
                                        {/* <li><a href="#" className="delete3"><i className="far fa-trash"></i> Delete</a></li> */}
                                      </ul>
                                    </div>
                                  </div>
                                  {productDetails &&
                                  showImage &&
                                  productDetails.variant == "Yes" ? (
                                    <div className="mt-4">
                                      <UploadImageSection
                                        variantData={variantData}
                                        setVariantData={setVariantData}
                                        image={image}
                                        setImage={setImage}
                                        imagePath={imagePath}
                                        setImagePath={setImagePath}
                                        errors={errors}
                                      />
                                    </div>
                                  ) : (
                                    ""
                                  )}

                                  {/* threshold start */}

                                  <div className="form-group">
                                    <div className="row align-items-center">
                                      <div className="col-lg-8">
                                        <div className="quantity">
                                          Quantity Base Discount Type
                                        </div>
                                        <div className="discount-type">
                                          <label>
                                            <input
                                              type="radio"
                                              name="discount_type"
                                              value="percentage"
                                              checked={
                                                variantData.discount_type ==
                                                "percentage"
                                              }
                                              onChange={(e) =>
                                                handleInputChange(e, 0)
                                              }
                                            />
                                            &nbsp;% Off
                                          </label>
                                          <label>
                                            <input
                                              type="radio"
                                              name="discount_type"
                                              value="fixed"
                                              checked={
                                                variantData.discount_type ==
                                                "fixed"
                                              }
                                              onChange={(e) =>
                                                handleInputChange(e, 0)
                                              }
                                            />
                                            &nbsp;Fixed Price
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="threshold-container">
                                    <div className="row align-items-center">
                                      <div className="col-lg-8">
                                        <div className="form-group">
                                          <div className="row align-items-center">
                                            {thresholdData &&
                                              thresholdData.length > 0 &&
                                              thresholdData.map(
                                                (data, index) => (
                                                  <div
                                                    key={index}
                                                    className="row col-lg-12 col-12"
                                                  >
                                                    <div className="col-lg-3 col-3">
                                                      <label className="unit">
                                                        Unit
                                                      </label>
                                                      <input
                                                        type="number"
                                                        placeholder={""}
                                                        className="unit_input"
                                                        name="unit"
                                                        value={
                                                          thresholdData[index]
                                                            .unit == 0
                                                            ? ""
                                                            : thresholdData[
                                                                index
                                                              ].unit
                                                        }
                                                        onChange={(e) =>
                                                          updateThresholdData(
                                                            index,
                                                            e
                                                          )
                                                        }
                                                      />
                                                      {thresholdData[index]
                                                        .unit &&
                                                      thresholdData[index]
                                                        .unit > 0 ? (
                                                        <span>
                                                          {
                                                            thresholdData[index]
                                                              .unit
                                                          }{" "}
                                                          or above{" "}
                                                        </span>
                                                      ) : (
                                                        ""
                                                      )}
                                                    </div>
                                                    <div className="col-lg-3 col-4">
                                                      <label className="unit">
                                                        {variantData.discount_type ==
                                                        "percentage"
                                                          ? "% Off"
                                                          : "Off Amount"}
                                                      </label>
                                                      <input
                                                        type="number"
                                                        placeholder=""
                                                        className="unit_input"
                                                        name="discount"
                                                        value={
                                                          thresholdData[index]
                                                            .discount == 0
                                                            ? ""
                                                            : thresholdData[
                                                                index
                                                              ].discount
                                                        }
                                                        onChange={(e) =>
                                                          updateThresholdData(
                                                            index,
                                                            e
                                                          )
                                                        }
                                                      />
                                                    </div>
                                                    <div className="col-lg-1 col-1">
                                                      <span className="unit">
                                                        &nbsp;
                                                      </span>
                                                      <div className="equal">
                                                        =
                                                      </div>
                                                    </div>
                                                    <div className="col-lg-3 col-4">
                                                      <label className="unit">
                                                        Business Sale Price
                                                      </label>
                                                      <input
                                                        type="text"
                                                        placeholder=""
                                                        className="unit_input"
                                                        value={(() => {
                                                          if (
                                                            variantData.businessSalePrice &&
                                                            thresholdData[index]
                                                              .discount
                                                          ) {
                                                            const retAmount =
                                                              discountPrice(
                                                                variantData.businessSalePrice,
                                                                thresholdData[
                                                                  index
                                                                ].discount,
                                                                variantData.discount_type ==
                                                                  "percentage"
                                                                  ? "percentage"
                                                                  : "fixed"
                                                              );

                                                            return retAmount
                                                              ? Math.round(
                                                                  retAmount
                                                                )
                                                              : "";
                                                          } else {
                                                            return "";
                                                          }
                                                        })()}
                                                        readOnly={true}
                                                        onChange={(e) =>
                                                          console.log("")
                                                        }
                                                      />
                                                    </div>
                                                    <div className="col-lg-1 col-1">
                                                      <span className="unit">
                                                        &nbsp;
                                                      </span>
                                                      {index !== 0 ? (
                                                        <div
                                                          className="equal "
                                                          style={{
                                                            cursor: "pointer",
                                                          }}
                                                        >
                                                          <i
                                                            className="fa fa-trash"
                                                            onClick={() =>
                                                              deleteThreshold(
                                                                index
                                                              )
                                                            }
                                                          />
                                                        </div>
                                                      ) : (
                                                        ""
                                                      )}
                                                    </div>
                                                  </div>
                                                )
                                              )}

                                            <div className="col-lg-12">
                                              {thresholdData.length < 5 ? (
                                                <a
                                                  href="#"
                                                  className="add-threshold"
                                                  onClick={(e) =>
                                                    addMoreThreshold(e)
                                                  }
                                                >
                                                  Add Threshold Levels
                                                </a>
                                              ) : (
                                                ""
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* end threshold */}

                                  <div className="button_container">
                                    {variants.length > 0 &&
                                    productDetails?.variant == "Yes" ? (
                                      <button
                                        type="button"
                                        className=""
                                        onClick={() => clickSaveVariant("save")}
                                        disabled={saveProccess}
                                      >
                                        {" "}
                                        {saveProccess?"Please wait..":"Save Variation"}{" "}
                                      </button>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </div>
                              </div>
                              {variants.length > 0 &&
                              productDetails?.variant == "Yes" ? (
                                <VariantAddedListC
                                  newVariants={newVariants}
                                  deleteVariant={deleteVariant}
                                  handleInputChange={handleInputChange}
                                  editVariant={editVariant}
                                  formRef={formRef}
                                />
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                          <div className="button_container">
                            {/* {variants.length > 0 &&
                                    productDetails?.variant == "Yes" ? (
                                      <button
                                        type="button"
                                        className=""
                                        onClick={() => clickSaveVariant("save")}
                                      >
                                        {" "}
                                        Save Variation{" "}
                                      </button>
                                    ) : (
                                      ""
                                    )} */}

                            {(variants.length == 0 ||
                              productDetails?.variant !== "Yes") && (
                              <button
                                href="#"
                                className=" save_n_next_button ml-2"
                                onClick={() =>
                                  clickSaveVariant("save_and_next")
                                }
                                disabled ={saveProccess}
                              >
                               {saveProccess ? "Please wait.." : " Save and next"}
                              </button>
                            )}

                            {newVariants.length != 0 &&
                            productDetails?.variant == "Yes" &&
                            variants.length !== 0 ? (
                              <a
                                href="#"
                                className=" save_n_next_button ml-2"
                                onClick={(e) => {
                                  e.preventDefault();
                                  clickSaveVariant("next");
                                }}
                              >
                               {saveProccess ? "" : " Save and next"}
                              </a>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddVariantPage params={params} />
    </Suspense>
  );
};

export default page;
