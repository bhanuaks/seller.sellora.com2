"use client";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
 
import { AppContext } from "@/app/contaxtData/contextData";
import $ from "jquery";
import { baseUrl, slugify } from "@/Http/helper";
import { ToastContainer, toast } from "react-toastify";
 
import NiceSelect from "nice-select2";
import { useRouter, useSearchParams } from "next/navigation";
import SearchBrandSection from "./searchSection";
import HelpAndVideoTopSection from "@/app/seller/HelpAndVideoTop";
import { exportExcelSheet, exportExcelWithData, exportExcelWithData2 } from '@/Http/ExcelHelper'
import { apiRequest } from "@/Http/apiHelper";
import { colorList, materialType } from "@/Http/citizenList";
function DownloadExcelCompnents({category, subCategory, childcategory, selectedListing}) {

    const [downloadProcess, setDownloadProcess] = useState(false);
    
      
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
        e.preventDefault();
        setDownloadProcess(true)
        const response =  await apiRequest('/api/seller/get-category-and-brand', "POST", {
          // seller_id:globalData?.sellor?._id,
          category_id:  category,
          subcategory_id: subCategory || "",
          childcategory_id: childcategory || "",
          // brand_id:brandId,
          // product_id:"",
          required_variant:"",
        })
        setDownloadProcess(false)
    
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
          const listOfProduct = await getProductList();
 
           exportExcelSheet(variantData, dynamicFieldData, categoryValue, name, listOfProduct);
          // exportExcelWithData(downloadExcelDataWithTreshhold, name);
         //   setDownloadProcess(false) 
        }
        
       
      }



  async  function getProductList(){
    try {
   const response = await  fetch(`/api/seller/product/get-prod-export`,{
              method:"POST", 
              body:JSON.stringify({listing:selectedListing})
          });
          if(!response.ok){  
                  throw new Error("Network Error")
              }
            const res = await response.json();
            if(res.status){
                return res.data.list       
            } 
            return []; 
    } catch (error) {
        console.log(error);
        return []
    }
         
    }

  return (
    <div className="download_button">
                {downloadProcess ? (
                    <Link href="#" 
                      onClick={(e)=>e.preventDefault()} >Downloading..</Link> 
                ):(
                  <Link href="#" onClick={(e)=>downloadExcel(e)}
                      > Download Now </Link> 
                )}
                </div> 
                      
  )
}

export default DownloadExcelCompnents