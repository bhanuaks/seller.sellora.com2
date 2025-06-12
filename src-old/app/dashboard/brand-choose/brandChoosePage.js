"use client";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import "../../../../public/front/loader.css";
// import '../../../../public/front/error.css'
import { AppContext } from "@/app/contaxtData/contextData";
import $ from "jquery";
import { baseUrl, slugify } from "@/Http/helper";
import { ToastContainer, toast } from "react-toastify";
// import 'nice-select2/dist/css/nice-select2.css';
import NiceSelect from "nice-select2";
import { useRouter, useSearchParams } from "next/navigation";
import SearchBrandSection from "./searchSection";
import HelpAndVideoTopSection from "@/app/seller/HelpAndVideoTop";
import { exportExcelSheet, exportExcelWithData, exportExcelWithData2 } from '@/Http/ExcelHelper'
import { apiRequest } from "@/Http/apiHelper";
import { colorList, materialType } from "@/Http/citizenList";



const BrandChoosePage = () => {
  
  const [downloadProcess, setDownloadProcess] = useState(false);
  const { globalData, setGlobalData } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sellor, setSellor] = useState(null);
  const [brandStatus, setBrandStatus] = useState(null);
  const [productAddLink, setProductAddLink] = useState(null);
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const searchRef = useRef();
  const searchParams = useSearchParams();
  const [brandList, setBrandList] = useState([]);
  const [brandListData, setBrandListData] = useState([]);
  const [brandId, setBrandId] = useState(null);
  const [brand, setBrand] = useState({
    seller_id: "",
    name: "",
  });


  
  const [data, setData] = useState([
    { 
      Category: '',
      SubCategory: '',
      ChildCategory: '',
      BrandName: '',
      ProductName: '',
      ProductDescription: '',
      KeyFeatures: '',
      SearchKeywords: '',
      TargetGender: ["Male", "Female", "Unisex"],
      AgeRangeDescription: ["Kid", "Teen", "Adult"],
      Color: colorList,
      Size: '',
      NumberOfItem: '',
      Material: materialType,
      Style: '',
      Pattern: '',
      UnitCount: '',
      UnitCountType: '',
      ItemTypeName: '',
      RecommendedUse: '',
      ModelName: '',
      ModelNumber: '',
      ManufacturePartNumber: '',
      CountryOfOrigin: '',
      Manufacturer: '',
      PackerContactInformation: '',
      ImporterDetails: '',
      TaxCode: '',
      TaxRate: '',
      FullfilmentBy: ['Seller'],
      ShippingProvider: ['Merchant'],
      ProductLength: '',
      ProductLengthUnit: ['Centimetres', 'Metres', 'Inches', "Feet","Yards"],
      ProductWidth: '',
      ProductWidthUnit: ['Centimetres', 'Metres', 'Inches', "Feet","Yards"],

      ProductHeight: '',
      ProductHeightUnit: ['Centimetres', 'Metres', 'Inches', "Feet","Yards"],

      ProductWeight: '',
      ProductWeightUnit: ['Milligrams', 'Grams', 'Kilograms', "Ounces", "Pounds"],

      PackageLength: '',
      PackageLengthUnit: ['Centimetres', 'Metres', 'Inches', "Feet","Yards"],

      PackageWidth: '',
      PackageWidthUnit: ['Centimetres', 'Metres', 'Inches', "Feet","Yards"],

      PackageHeight: '',
      PackageHeightUnit: ['Centimetres', 'Metres', 'Inches', "Feet","Yards"],

      PackageWeight: '',
      PackageWeightUnit: ['Milligrams', 'Grams', 'Kilograms', "Ounces", "Pounds"],

      main_image:"",
      Image_1:"",
      Image_2:"",
      Image_3:"",
      Image_4:"",
      Image_5:"",
      Image_6:"",
      Image_7:"",


      // variant Fields 
      ProductId:"",
      ProductIdType:"",
      SKU:"",
      ListingStatus:['Active', 'Inactive'],
      MSRP:"",
      ConsumerSalePrice:"",
      BusinessSalePrice:"",
      Stock:"",
      Currency:"",
      ConditionType:"",
      ExpireDate:"",
      ConditionType:"",  
      variantImage:['Yes', 'No'], 
      variant_image_1:"",
      variant_image_2:"",
      variant_image_3:"",
      variant_image_4:"",
      variant_image_5:"",
      variant_image_6:"",
      variant_image_7:"",

   },
    
  ]);



  const complianceData = {
    ContainsLiquidContents:"",
    LiquidVolume:"",
    LiquidVolumeUnit:["Millilitres", "Gram", "OZ", "KG"],

    IsTheItemHeatSensitive:["Yes", "No"],
    HeatSensitiveInstructions:"",
    IsTheLiquidProductDoubleSealed:["Yes", "No"],
    ProductDoubleSealedInstructions:"",

    DangerousGoodsRegulations:["GHS", "Storage", "Transportation", "Waste", "Other", "Not Applicable", "Unknown"],
    SafetyWarning:"",
    HasWrittenWarranty:"",
    ProductIsOrContainsAnElectronicComponent:"",
    ProductIsOrContainsThisBatteryType:["Yes", "No"],
    AreBatteriesIncluded:["Yes", "No"],
    BatteryCellComposition:""
  }

  const thresholdData = {
    QuantityBaseDiscountType:["percentage", "fixed"],
    ThresholdLevels1Unit:"",
    ThresholdLevels1Discount:"",

    ThresholdLeve2s1Unit:"",
    ThresholdLeve2s1Discount:"",

    ThresholdLeve2s1Unit:"",
    ThresholdLeve2s1Discount:"",

    ThresholdLeve4s1Unit:"",
    ThresholdLeve4s1Discount:"",

    ThresholdLevels5Unit:"",
    ThresholdLevels5Discount:"", 
  }


  async function downloadExcel(e){

    setDownloadProcess(true)
    const response =  await apiRequest('/api/seller/get-category-and-brand', "POST", {
      // seller_id:globalData?.sellor?._id,
      category_id: searchParams.get("category"),
      subcategory_id: searchParams.get("subCategory"),
      childcategory_id: searchParams.get("childcategory"),
      // brand_id:brandId,
      // product_id:"",
      required_variant:"",
    })

    if(response.status){
      const variants = response.data?.category?.category_variant || "";
      const dynamicField = response.data?.category?.dynamicField || [];
      setData((prevData)=>([{
        ...prevData[0],
        ...variants
      }]))

      const categoryValue= {
         'category': response.data?.category?[response.data?.category?.name]:[],
        'sub-category': response.data?.subcategory?[response.data?.subcategory?.subCategoryName]:[],
       'child-category': response.data?.childcategory?[response.data?.childcategory?.childCategoryName]:[],
      }
      let  downloadExcelData = [{ ...data[0], ...variants, ...complianceData,
        Category: response.data?.category?[response.data?.category?.name]:[],
        SubCategory: response.data?.subcategory?[response.data?.subcategory?.subCategoryName]:[],
        ChildCategory: response.data?.childcategory?[response.data?.childcategory?.childCategoryName]:[],
      }];
       
       const dynamicFieldValueArr = {}

        let dynamicFieldDataType = [];
      let dynamicFieldExample = [];
      let dynamicFieldDetails = [];


      const dynamicFieldArray = [];
      if (dynamicField.length > 0) {
        dynamicField.forEach((item) => { 
          
             
          if(item.required == "Yes"){
            dynamicFieldDetails.push("Mandatory*"); 
          }else{
            dynamicFieldDetails.push("Optional");  
          }
          if(item.field_type != "input"){
            // add select options
            dynamicFieldValueArr[slugify(item.field_name)] = item.select_value
              dynamicFieldDataType.push("Select value from dropdown"); 
          }else{
            dynamicFieldDataType.push("Text");
          }

          dynamicFieldExample.push("");
          downloadExcelData[0][item.field_name] = 
            item.field_type === "select" ? item.select_value : "";
            dynamicFieldArray.push(item.field_name);
        });
      }
      

      const downloadExcelDataWithTreshhold = [{ ...downloadExcelData[0], ...thresholdData}];
      const name = `${response.data?.category?.name}-${new Date().toISOString().slice(0, 10)}.xlsx`

      const variantArray = Object.keys(variants)

      let varDataType = [];
      let varExample = [];
      let varDetails = [];
      const variantValueArr = {}
     

      variantArray.forEach((item)=>{
        if(variants[item] != "input"){ 
          // add variant select option 
          variantValueArr[slugify(item)] = variants[item]
           varDataType.push("Select value from dropdown");
        }else{ 
          varDataType.push("Text");
        }
          varExample.push("Optional");
          varDetails.push("");
      })

      const variantData = {
        variant:variantArray, 
        varDataType,
        varExample,
        varDetails,
        variantValueArr
      }

      //  let dynamicFieldDataType = [];
      // let dynamicFieldExample = [];
      // let dynamicFieldDetails = [];
      // dynamicFieldArray.forEach((item)=>{
      //   console.log({item, itemValue: dynamicFieldValueArr[slugify(item)]});
      //     dynamicFieldDataType.push("Text");
      //     dynamicFieldExample.push("");
      //     dynamicFieldDetails.push("");
      // })


       const dynamicFieldData = {
        dynamicField:dynamicFieldArray, 
        dynamicFieldDataType,
        dynamicFieldExample,
        dynamicFieldDetails,
        dynamicFieldValueArr
      }
      
      // console.log({dynamicFieldValueArr});
       exportExcelSheet(variantData, dynamicFieldData, categoryValue, name);
      // exportExcelWithData(downloadExcelDataWithTreshhold, name);
      setDownloadProcess(false) 
    }
    
   
  }

  const entryType = searchParams.get("ref") || 'gingle';
  function handleChangeInput(e) {
    const { name, value } = e.target;
    setBrand((predata) => ({
      ...predata,
      [name]: value,
    }));
  }

  useEffect(() => {
    const searchRefNiceSelect = searchRef.current
      ? new NiceSelect(searchRef.current, {
          searchable: true,
          placeholder: brand.name ? brand.name : "choose a Brand",
        })
      : null;

    return () => {
      // Cleanup each instance of NiceSelect
      searchRefNiceSelect?.destroy();
    };
  }, [brandList.length]);

  useEffect(() => {
    if (globalData.sellor) {
      $(".loaderouter").css("display", "flex");
      fetch(
        `${baseUrl}api/seller/get-profile?user_id=${globalData.sellor._id}&with_data=brands`,
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
            setBrand((predata) => ({
              ...predata,
              seller_id: res.data.data._id,
            }));
            setBrandList(res.data.referData.map((item) => item.name));
            setBrandListData(res.data.referData);
          }
        });
    }
  }, [globalData.sellor]);

  function submitVerify(e) {
    e.preventDefault();
    setErrors({});
    setBrandStatus(null);
    $(".loaderouter").css("display", "flex");
    fetch(`${baseUrl}api/seller/verify-brand`, {
      method: "POST",
      body: JSON.stringify({ ...brand, name: searchTerm }),
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
          setBrandStatus("verify");
          const selectedBrand = brandListData.filter(
            (item) => item.name == searchTerm
          );
          setProductAddLink(
            `${baseUrl}seller/product/add-product?${searchParams}&brand=${
              selectedBrand.length > 0 ? selectedBrand[0]._id : ""
            }`
          );
          setBrandId(selectedBrand.length > 0 ? selectedBrand[0]._id : "")
          // router.push(`${baseUrl}seller/product/add-product?${searchParams}&brand=${selectedBrand.length>0 ? selectedBrand[0]._id:''}`)
        } else if (res.data.status_code && res.data.status_code == 403) {
          if (res.data.errors.name == "invalid brand") {
            setBrandStatus("not_found");
          } else {
            setErrors(res.data.errors);
          }
        }
      });
  }




 



  async function downloadExcel2(e){

    setDownloadProcess(true)
    const response =  await apiRequest('/api/seller/get-category-and-brand', "POST", {
      // seller_id:globalData?.sellor?._id,
      category_id: searchParams.get("category"),
      subcategory_id: searchParams.get("subCategory"),
      childcategory_id: searchParams.get("childcategory"),
      // brand_id:brandId,
      // product_id:"",
      required_variant:"",
    })

    if(response.status){
      const variants = response.data?.category?.category_variant || "";
      const dynamicField = response.data?.category?.dynamicField || [];
      setData((prevData)=>([{
        ...prevData[0],
        ...variants
      }]))

      let  downloadExcelData = [{
              "Seller SKU ID": "PB-XS-Black",
              "Listing Status": ["Active", "Inactive"],  
              "MRP (INR)": 21,
              "Your selling price (INR)": 17,
              "Fulfillment by": ["Seller", "Flipkart"], 
              "Procurement": "instock",
              
            }];
      
      // if (dynamicField.length > 0) {
      //   dynamicField.forEach((item) => {
      //     downloadExcelData[0][item.field_name] = 
      //       item.field_type === "select" ? item.select_value : "";
      //   });
      // }
     
      // const downloadExcelDataWithTreshhold = [{ ...downloadExcelData[0], ...thresholdData}];
      const name = "product-templete1111.xlsx"
      exportExcelSheet();
      setDownloadProcess(false) 
    }
    
   
  }


  


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
      <div className="rts-navigation-area-breadcrumb pb--10">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="navigator-breadcrumb-wrapper">
                <h3>
                {entryType == "bulk" && "Bulk Catalog Upload"}
                {entryType == "single" && "Add a single listing"}
                </h3>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <HelpAndVideoTopSection />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="margin-50">
              <ol className="steps">
                <li className="step is-active" data-step={1}>
                  <span>Categories</span>
                </li>
                <li className="step is-active" data-step={2}>
                  <span>Brand</span>
                </li>
                <li className="step is-active" data-step={3}>
                  <span>
                  {entryType == "bulk" && "Download"}
                  {entryType == "single" && "Create New Listing"}

                  </span>
                </li>
              </ol>
              <div className="form_outer">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <div className="form_s">
                      <h2>Make sure the brand you want to sell</h2>
                      <form action={"#"} onSubmit={(e) => submitVerify(e)}>
                        <div className="col-lg-12">
                          <div className="lable">
                           
                            <SearchBrandSection
                              brandList={brandList}
                              searchTerm={searchTerm}
                              setSearchTerm={setSearchTerm}
                            />

                           
                            {errors.name && errors.name != "" ? (
                              <>
                                <span
                                  id="name_error"
                                  className="input-error-tip mb-2"
                                  style={{
                                    display: "inline-block",
                                    color: "red",
                                  }}
                                >
                                  {errors.name}{" "}
                                </span>
                              </>
                            ) : (
                              ""
                            )}
                          </div>

                          <Link
                            href={`${baseUrl}dashboard/add-catalog`}
                            target="_blank"
                          >
                            <button
                              type="submit"
                              className="rts-btn btn-primary mb-10"
                            >
                              Verify Brand
                            </button>
                          </Link>
                          {brandStatus && (
                            <div className="show_brand_status">
                              {brandStatus == "verify" ? (
                                <p>
                                  This brand has been verified successfully.
                                </p>
                              ) : (
                                ""
                              )}

                              {brandStatus == "not_found" ? (
                                <p>
                                  {searchTerm} brand not exist in your brand
                                  list
                                </p>
                              ) : (
                                ""
                              )}

                              <div className="brand_button_container">
                                {brandStatus == "verify" && entryType == "single"? (
                                  <Link
                                    href={productAddLink}
                                    className="create_listing_btn"
                                  >
                                    Create New Listing
                                  </Link>
                                ) : (
                                  ""
                                )}
                                {brandStatus == "not_found" ? (
                                  <Link
                                    href={`${baseUrl}dashboard/brand-aproval-page?brandName=${searchTerm}`}
                                    className="create_listing_btn"
                                  >
                                    Apply {searchTerm} Brand
                                  </Link>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          )}

                          {/* <Link href="/dashboard/brand-aproval-page">
                      <div className="register_for_new">Apply for Brand Approval</div>
                    </Link> */}



                            {brandStatus == "not_found" && (
                              <div className="notification">
                                  <h4>Basic brand name guidelines to follow</h4>
                                  <ul>
                                    <li>Check the correct spelling</li>
                                    <li>Use full forms</li>
                                  </ul>
                                </div>
                            ) }

                          {brandStatus == "verify" && entryType == "bulk" && (
                            <button
                              type="button"
                              className="rts-btn btn-primary mb-10 download_templates" 
                              onClick={(e)=>downloadExcel(e)}
                              style={{opacity:`${downloadProcess?"0.8":"1"}`}}
                            >
                              {downloadProcess?"Downloading...":"Download template"}
                            </button>
                          ) }
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandChoosePage;
