"use client";
import { baseUrl, createFormData } from "@/Http/helper";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import $ from "jquery";

import { ToastContainer, toast } from "react-toastify";
import { AppContext } from "@/app/contaxtData/contextData";
import { useRouter, useSearchParams } from "next/navigation";

import Link from "next/link";
import { Suspense } from "react";
import { batteryTypes } from "@/Http/citizenList";
import AddSingleListingSteper from "../AddSingleListingSteper";

const page = ({ params }) => {
  const AddProductPage = ({ params }) => {
    const { globalData } = useContext(AppContext);
    const router = useRouter();
    const [sellor, setSellor] = useState(null);
    const [category, setCategory] = useState(null);
    const [subcategory, setSubcategory] = useState(null);
    const [childcategory, setChildcategory] = useState(null);
    const [brand, setBrand] = useState(null);
    const [dynamicField, setDynamicField] = useState([]);

    const searchParams = useSearchParams();

    const category_id = searchParams.get("category");
    const subcategory_id = searchParams.get("subCategory");
    const childcategory_id = searchParams.get("childcategory");
    const brand_id = searchParams.get("brand");
    const product_id = searchParams.get("product_id") || "";
    const errorRedirctUtl = `${baseUrl}dashboard/categories`;
    const [errors, setErrors] = useState({});
    const [product, setProduct] = useState(null);

    const [productDetails, setProductDetails] = useState({
      category_id: category_id,
      subcategory_id: subcategory_id,
      childcategory_id: childcategory_id,
      brand_id: brand_id,
      containsLiquidContents: "Yes",
      liquidVolume: "",
      liquidContentsDescription: "",
      isTheItemHeaSensitive: "Yes",
      isTheLiquidProductDoubleSealed: "Yes",
      instructions: "",
      dangerousGoodsRegulations: "",
      safetyWarning: "Not Applicable",
      hasWrittenWarranty: "Not Applicable",
      ProductIsOrContainsAnElectronicComponent: "Not Applicable",
      ProductIsOrContainsThisBatteryType: "Not Applicable",
     
    });

    const [complianceData, setComplianceData] = useState({
      category_id: category_id,
      subcategory_id: subcategory_id,
      childcategory_id: childcategory_id,
      brand_id: brand_id,
      product_id: product_id,
      containsLiquidContents:"Yes",
      liquidVolume:"",
      liquidVolumeUnit:"",
      isTheItemHeaSensitive:"Yes",
      isTheItemHeaSensitiveInstructions:"",
      isTheLiquidProductDoubleSealed:"Yes", 
      isTheLiquidProductDoubleSealedInstructions:"",
      dangerousGoodsRegulations:"",
      safetyWarning:"",
      hasWrittenWarranty:"",
      ProductIsOrContainsAnElectronicComponent:"",
      productIsOrContainsThisBatteryType:"No", 
      areBatteriesIncluded:"Yes",
       batteryCellComposition:""
    });

    useEffect(() => {
      if (!category_id || !brand_id) {
        router.push(errorRedirctUtl);
      }

      if (globalData.sellor) {
        $(".loaderouter").css("display", "flex");
        fetch(`${baseUrl}api/seller/get-category-and-brand`, {
          method: "POST",
          body: JSON.stringify({
            seller_id: globalData.sellor._id,
            category_id,
            subcategory_id,
            childcategory_id,
            brand_id,
            seller: "yes",
            product_id: product_id,
            required_variant: "no",
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
              setProduct(res.data.product)
              if (res.data.brand.status != 1) {
                router.push(errorRedirctUtl);
              }

              if (brand_id && !res.data.brand) {
                router.push(errorRedirctUtl);
              }

              if (!res.data.category) {
                router.push(errorRedirctUtl);
              }

              setComplianceData((prevData) => ({
                ...prevData,
                seller_id: res.data.seller._id,
              }));

              setDynamicField(res.data.category.dynamicField);
              if (product_id) {
                const updateProd = res.data.product;

                // set dynamic field value start
                if (
                  updateProd.dynamicFields &&
                  updateProd.dynamicFields.length > 0
                ) {
                  let updatedValue = res.data.category.dynamicField;
                  updateProd.dynamicFields.forEach((element) => {
                    updatedValue = updatedValue.map((prevData) => {
                      if (prevData.field_name === element.field_name) {
                        return {
                          ...prevData,
                          field_value: element.field_value,
                        };
                      }
                      return prevData;
                    });
                  });
                  setDynamicField(updatedValue);
                }
                // set dynamic field value end
                // setProductDetails(updateProd);
                if (res.data.compliance) {
                  setComplianceData(res.data.compliance);
                }
              }
            } else {
              router.push(errorRedirctUtl);
            }
          })
          .catch((err) => {
            console.log(err);
            $(".loaderouter").css("display", "flex");
          });
      }
    }, [globalData.sellor]);

    function changeProductInfoInput(e) {
      const { name, value } = e.target;

      setComplianceData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    //   =======================================================

    function saveProductInforemationData(e, save_as_draft) {
      e.preventDefault();
      $(".loaderouter").css("display", "flex"); 
      setErrors({});
      fetch(`${baseUrl}api/seller/product/add-compliance-and-other`, {
        method: "POST",
        body: JSON.stringify({
          ...complianceData,
          dynamicField: dynamicField,
          save_as_draft,
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
            if(save_as_draft == 1){
                toast.success("Success! Compliance and Key attributes has saved.")
            }else{ 
              router.push(`${baseUrl}/dashboard/listing`);
            }
          } else if (res.data.status_code == 400) {
              setErrors(res.data.errors);
              $(`input[name="${Object.keys(res.data.errors)[0]}"]`).focus();
              $(`select[name="${Object.keys(res.data.errors)[0]}"]`).focus();
              $(".loaderouter").css("display", "none");
          }
        });
    }

    function changeDynamicFieldValue(key, e) {
      const { name, value } = e.target;

      const updatedValue = dynamicField.map((prevData, i) => {
        if (i === key) {
          return { ...prevData, [name]: value };
        }
        return prevData;
      });

      setDynamicField(updatedValue);
    }
    return (
      <div>
        <>
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
          <div className="add-product-streep text-center">
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
            <AddSingleListingSteper searchParams={searchParams} productDetails={product} compliance={complianceData} />
            </div>
            <div className="container-fluid">
              <div className="form_outer mt">
                <form
                  action={"#"}
                  onSubmit={(e) => saveProductInforemationData(e, 0)}
                >
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="head_dfd">
                        <h3>Compliance and Key attributes</h3>
                      </div>
                      <div className="preview_box">
                        <div className="form-container">
                          <div className="form-group">
                            <div className="row align-items-center">
                              <div className="col-lg-4">
                                <label htmlFor="sku">
                                  Contains Liquid Contents <span>*</span>
                                  <i
                                    className="fa fa-info color_bg"
                                    aria-hidden="true"
                                    data-tooltip="I’m the tooltip text."
                                  />
                                </label>
                              </div>
                              <div className="col-lg-8">
                                <input
                                  type="radio"
                                  name="containsLiquidContents"
                                  value={"Yes"}
                                  onChange={(e) => changeProductInfoInput(e)}
                                  checked={complianceData.containsLiquidContents == "Yes"}
                                />
                                &nbsp;Yes &nbsp; &nbsp;
                                <input
                                  type="radio"
                                  name="containsLiquidContents"
                                  value={"No"}
                                  onChange={(e) => changeProductInfoInput(e)}
                                  checked={
                                    complianceData.containsLiquidContents ==
                                    "No"
                                  }
                                /> 
                                No
                              </div>
                            </div>
                          </div>

                          {complianceData.containsLiquidContents == "Yes" && (
                            <>
                              <div className="form-group">
                                <div className="row align-items-center">
                                  <div className="col-lg-4">
                                    <label htmlFor="msrp">
                                      Liquid Volume <span>*</span>
                                      <i
                                        className="fa fa-info color_bg"
                                        aria-hidden="true"
                                        data-tooltip="I’m the tooltip text."
                                      />
                                    </label>
                                  </div>
                                  <div className="col-lg-8">
                                    <input
                                      type="text"
                                      name="liquidVolume"
                                      value={complianceData.liquidVolume || ""}
                                      onChange={(e) =>
                                        changeProductInfoInput(e)
                                      }
                                    />
                                    {errors.liquidVolume && (
                                      <span className="error_message">
                                        {errors.liquidVolume}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="row align-items-center">
                                  <div className="col-lg-4">
                                    <label htmlFor="msrp">
                                      Liquid Volume Unit <span>*</span>
                                      <i
                                        className="fa fa-info color_bg"
                                        aria-hidden="true"
                                        data-tooltip="I’m the tooltip text."
                                      />
                                    </label>
                                  </div>
                                  <div className="col-lg-8">
                                    <select
                                      type="text"
                                      name="liquidVolumeUnit"
                                      value={
                                        complianceData?.liquidVolumeUnit || ""
                                      }
                                      onChange={(e) =>
                                        changeProductInfoInput(e)
                                      }
                                    >
                                      <option value={""}>select</option>
                                      <option value={"Millilitres"}>
                                        Millilitres
                                      </option>
                                      <option value={"Gram"}>Gram</option>
                                      <option value={"OZ"}>OZ</option>
                                      <option value={"KG"}>KG</option>
                                    </select>
                                    {errors.liquidVolumeUnit && (
                                      <span className="error_message">
                                        {errors.liquidVolumeUnit}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          <div className="form-group">
                            <div className="row align-items-center">
                              <div className="col-lg-4">
                                <label htmlFor="msrp">
                                  Is the Item Heat Sensitive<span>*</span>
                                  <i
                                    className="fa fa-info color_bg"
                                    aria-hidden="true"
                                    data-tooltip="I’m the tooltip text."
                                  />
                                </label>
                              </div>
                              <div className="col-lg-8">
                                <input
                                  type="radio"
                                  name="isTheItemHeaSensitive"
                                  value={"Yes"}
                                  onChange={(e) => changeProductInfoInput(e)}
                                  checked={complianceData.isTheItemHeaSensitive =="Yes"}
                                />
                                &nbsp;Yes &nbsp; &nbsp;
                                <input
                                  type="radio"
                                  name="isTheItemHeaSensitive"
                                  value={"No"}
                                  onChange={(e) => changeProductInfoInput(e)}
                                  checked={
                                    complianceData.isTheItemHeaSensitive == "No"
                                  }
                                />
                                &nbsp; No
                              </div>
                            </div>
                          </div>

                          {complianceData.isTheItemHeaSensitive == "Yes" && (
                            <div className="form-group">
                              <div className="row align-items-center">
                                <div className="col-lg-4">
                                  <label htmlFor="listing-status">
                                    Instructions<span>*</span>
                                    <i
                                      className="fa fa-info color_bg"
                                      aria-hidden="true"
                                      data-tooltip="I’m the tooltip text."
                                    />
                                  </label>
                                </div>
                                <div className="col-lg-8">
                                  <input
                                    type="text"
                                    name="isTheItemHeaSensitiveInstructions"
                                    value={
                                      complianceData.isTheItemHeaSensitiveInstructions ||
                                      ""
                                    }
                                    onChange={(e) => changeProductInfoInput(e)}
                                  />
                                  {errors.isTheItemHeaSensitiveInstructions && (
                                    <span className="error_message">
                                      {errors.isTheItemHeaSensitiveInstructions}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}

                          <div className="form-group">
                            <div className="row align-items-center">
                              <div className="col-lg-4">
                                <label htmlFor="msrp">
                                  Is the liquid product double sealed?
                                  <span>*</span>
                                  <i
                                    className="fa fa-info color_bg"
                                    aria-hidden="true"
                                    data-tooltip="I’m the tooltip text."
                                  />
                                </label>
                              </div>
                              <div className="col-lg-8">
                                <input
                                  type="radio"
                                  name="isTheLiquidProductDoubleSealed"
                                  value={"Yes"}
                                  onChange={(e) => changeProductInfoInput(e)}
                                  checked={
                                    complianceData.isTheLiquidProductDoubleSealed ==
                                    "Yes"
                                  }
                                />
                                &nbsp;Yes &nbsp; &nbsp;
                                <input
                                  type="radio"
                                  name="isTheLiquidProductDoubleSealed"
                                  value={"No"}
                                  onChange={(e) => changeProductInfoInput(e)}
                                  checked={
                                    complianceData.isTheLiquidProductDoubleSealed ==
                                    "No"
                                  }
                                />{" "}
                                No
                              </div>
                            </div>
                          </div>

                          {complianceData.isTheLiquidProductDoubleSealed ==
                            "Yes" && (
                            <div className="form-group">
                              <div className="row align-items-center">
                                <div className="col-lg-4">
                                  <label htmlFor="listing-status">
                                    Instructions<span>*</span>
                                    <i
                                      className="fa fa-info color_bg"
                                      aria-hidden="true"
                                      data-tooltip="I’m the tooltip text."
                                    />
                                  </label>
                                </div>
                                <div className="col-lg-8">
                                  <input
                                    type="text"
                                    name="isTheLiquidProductDoubleSealedInstructions"
                                    value={
                                      complianceData.isTheLiquidProductDoubleSealedInstructions ||
                                      ""
                                    }
                                    onChange={(e) => changeProductInfoInput(e)}
                                  />
                                  {errors.isTheLiquidProductDoubleSealedInstructions && (
                                    <span className="error_message">
                                      {
                                        errors.isTheLiquidProductDoubleSealedInstructions
                                      }
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}

                          <div className="form-group">
                            <div className="row align-items-center">
                              <div className="col-lg-4">
                                <label htmlFor="listing-status">
                                  Dangerous Goods Regulations
                                  <i
                                    className="fa fa-info color_bg"
                                    aria-hidden="true"
                                    data-tooltip="I’m the tooltip text."
                                  />
                                </label>
                              </div>
                              <div className="col-lg-8">
                                <select
                                  name="dangerousGoodsRegulations"
                                  value={
                                    complianceData.dangerousGoodsRegulations ||
                                    ""
                                  }
                                  onChange={(e) => changeProductInfoInput(e)}
                                >
                                  <option value="">Select</option>
                                  <option value="GHS">GHS</option>
                                  <option value="Storage">Storage</option>
                                  <option value="Transportation">
                                    Transportation
                                  </option>
                                  <option value="Waste">Waste</option>
                                  <option value="Other">Other</option>
                                  <option value="Not Applicable">
                                    Not Applicable
                                  </option>
                                  <option value="Unknown">Unknown</option>
                                </select>
                                {errors.dangerousGoodsRegulations && (
                                  <span className="error_message">
                                    {errors.dangerousGoodsRegulations}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="row align-items-center">
                              <div className="col-lg-4">
                                <label htmlFor="listing-status">
                                  Safety Warning <span>*</span>
                                  <i
                                    className="fa fa-info color_bg"
                                    aria-hidden="true"
                                    data-tooltip="I’m the tooltip text."
                                  />
                                </label>
                              </div>
                              <div className="col-lg-8">
                                <input
                                  type="text"
                                  name="safetyWarning"
                                  value={complianceData.safetyWarning || ""}
                                  onChange={(e) => changeProductInfoInput(e)}
                                />

                                {errors.safetyWarning && (
                                  <span className="error_message">
                                    {errors.safetyWarning}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="row align-items-center">
                              <div className="col-lg-4">
                                <label htmlFor="listing-status">
                                  Has Written Warranty <span>*</span>
                                  <i
                                    className="fa fa-info color_bg"
                                    aria-hidden="true"
                                    data-tooltip="I’m the tooltip text."
                                  />
                                </label>
                              </div>
                              <div className="col-lg-8">
                                <input
                                  type="text"
                                  name="hasWrittenWarranty"
                                  value={
                                    complianceData.hasWrittenWarranty || ""
                                  }
                                  onChange={(e) => changeProductInfoInput(e)}
                                />

                                {errors.hasWrittenWarranty && (
                                  <span className="error_message">
                                    {errors.hasWrittenWarranty}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="row align-items-center">
                              <div className="col-lg-4">
                                <label htmlFor="listing-status">
                                  Product is or Contains an Electronic
                                  Component?
                                  <i
                                    className="fa fa-info color_bg"
                                    aria-hidden="true"
                                    data-tooltip="I’m the tooltip text."
                                  />
                                </label>
                              </div>
                              <div className="col-lg-8">
                                <input
                                  type="text"
                                  name="ProductIsOrContainsAnElectronicComponent"
                                  value={
                                    complianceData.ProductIsOrContainsAnElectronicComponent ||
                                    ""
                                  }
                                  onChange={(e) => changeProductInfoInput(e)}
                                />

                                {errors.ProductIsOrContainsAnElectronicComponent && (
                                  <span className="error_message">
                                    {
                                      errors.ProductIsOrContainsAnElectronicComponent
                                    }
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="row align-items-center">
                              <div className="col-lg-4">
                                <label htmlFor="msrp">
                                  Product is or Contains this Battery Type?
                                  <span>*</span>
                                  <i
                                    className="fa fa-info color_bg"
                                    aria-hidden="true"
                                    data-tooltip="I’m the tooltip text."
                                  />
                                </label>
                              </div>
                              <div className="col-lg-8">
                                <input
                                  type="radio"
                                  name="productIsOrContainsThisBatteryType"
                                  value={"Yes"}
                                  onChange={(e) => changeProductInfoInput(e)}
                                  checked={
                                    complianceData.productIsOrContainsThisBatteryType ==
                                    "Yes"
                                  }
                                />
                                &nbsp;Yes &nbsp; &nbsp;
                                <input
                                  type="radio"
                                  name="productIsOrContainsThisBatteryType"
                                  value={"No"}
                                  onChange={(e) => changeProductInfoInput(e)}
                                  checked={
                                    complianceData.productIsOrContainsThisBatteryType ==
                                    "No"
                                  }
                                />{" "}
                                No
                              </div>
                            </div>
                          </div>

                          {complianceData.productIsOrContainsThisBatteryType ==
                            "Yes" && (
                            <>
                              <div className="form-group">
                                <div className="row align-items-center">
                                  <div className="col-lg-4">
                                    <label htmlFor="msrp">
                                      Are batteries included?<span>*</span>
                                      <i
                                        className="fa fa-info color_bg"
                                        aria-hidden="true"
                                        data-tooltip="I’m the tooltip text."
                                      />
                                    </label>
                                  </div>
                                  <div className="col-lg-8">
                                    <input
                                      type="radio"
                                      name="areBatteriesIncluded"
                                      value={"Yes"}
                                      onChange={(e) =>
                                        changeProductInfoInput(e)
                                      }
                                      checked={
                                        complianceData?.areBatteriesIncluded ==
                                        "Yes"
                                      }
                                    />
                                    &nbsp;Yes &nbsp; &nbsp;
                                    <input
                                      type="radio"
                                      name="areBatteriesIncluded"
                                      value={"No"}
                                      onChange={(e) =>
                                        changeProductInfoInput(e)
                                      }
                                      checked={
                                        complianceData.areBatteriesIncluded ==
                                        "No"
                                      }
                                    />{" "}
                                    No
                                  </div>
                                </div>
                              </div>

                              {complianceData?.areBatteriesIncluded ==
                                "Yes" && (
                                <div className="form-group">
                                  <div className="row align-items-center">
                                    <div className="col-lg-4">
                                      <label htmlFor="business-price">
                                        Battery Cell Composition<span>*</span>
                                      </label>
                                    </div>
                                    <div className="col-lg-8">
                                      <select
                                        type="text"
                                        name="batteryCellComposition"
                                        value={
                                          complianceData.batteryCellComposition ||
                                          ""
                                        }
                                        onChange={(e) =>
                                          changeProductInfoInput(e)
                                        }
                                      >
                                        <option value={""}>Select</option>
                                        {batteryTypes?.map((type, idx) => (
                                          <option key={idx} value={type}>
                                            {type}
                                          </option>
                                        ))}
                                      </select>
                                      {errors.batteryCellComposition && (
                                        <span className="error_message">
                                          {errors.batteryCellComposition}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </div>

                      {/* ==================Other Attributes dyanamic field=============== */}
                      <div className="head_dfd">
                        {dynamicField.length > 0 ? (
                          <h3>Other Attributes</h3>
                        ) : (
                          ""
                        )}
                      </div>
                      {dynamicField.length > 0 ? (
                        <div className="preview_box">
                          <div className="form-container">
                            {dynamicField.length > 0
                              ? dynamicField.map((fieldData, index) => (
                                  <div className="form-group" key={index}>
                                    <div className="row align-items-center">
                                      <div className="col-lg-4">
                                        <label htmlFor="listing-status">
                                          {fieldData.field_name}
                                          {fieldData.required == "Yes" ? (
                                            <span>*</span>
                                          ) : (
                                            ""
                                          )}
                                          <i
                                            className="fa fa-info color_bg"
                                            aria-hidden="true"
                                            data-tooltip="I’m the tooltip text."
                                          />
                                        </label>
                                      </div>
                                      <div className="col-lg-8">
                                        {fieldData.field_type == "select" ? (
                                          <select
                                            name="field_value"
                                            value={fieldData.field_value || ""}
                                            onChange={(e) =>
                                              changeDynamicFieldValue(index, e)
                                            }
                                          >
                                            <option value="">Select</option>
                                            {fieldData.select_value.length
                                              ? fieldData.select_value.map(
                                                  (selectValue, selectKey) => (
                                                    <option
                                                      value={selectValue}
                                                      key={selectKey}
                                                    >
                                                      {selectValue}
                                                    </option>
                                                  )
                                                )
                                              : ""}
                                          </select>
                                        ) : (
                                          <input
                                            type="text"
                                            name="field_value"
                                            // placeholder={`Enter ${fieldData.field_name}`}
                                            value={fieldData.field_value || ""}
                                            onChange={(e) =>
                                              changeDynamicFieldValue(index, e)
                                            }
                                          />
                                        )}

                                        {errors[
                                          `${fieldData.field_name
                                            .toLowerCase()
                                            .replace(/ /g, "_")}_error`
                                        ] && (
                                          <span className="error_message">
                                            {
                                              errors[
                                                `${fieldData.field_name
                                                  .toLowerCase()
                                                  .replace(/ /g, "_")}_error`
                                              ]
                                            }
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ))
                              : ""}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {/* ========================form-3-end===================== */}
                    </div>

                    <div className="row align-items-center">
                      <div className="col-lg-8">
                        <div className="sub_mit_cat">
                          <ul>
                            {product?.save_as_draft == "1" && (
                                  <li className="orange_09">
                                  <button  type="button" onClick={(e) => saveProductInforemationData(e, 1)} >Save</button> 
                                </li>
                            )}
                     
                            <li className="orange_09">
                              <button>Submit and publish</button>
                            </li>
                            <li>
                              <Link href={`${baseUrl}dashboard/listing`}>
                                Cancel
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <div className="col-lg-4">
                        <Link
                          href="#"
                          className="save-as-draft"
                          onClick={(e) => saveProductInforemationData(e, 1)}
                        >
                          Save as Draft
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      </div>
    );
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddProductPage params={params} />
    </Suspense>
  );
};

export default page;
