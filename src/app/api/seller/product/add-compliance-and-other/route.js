import { deleteImageOne, uploadImageFun } from "@/app/api/uploadImage/route";
import { isEmpty, main_large_img_path, main_medium_img_path, main_thumb_img_path, product_large_img_path1, product_large_img_path2, product_large_img_path3, product_large_img_path4, product_medium_img_path1, product_medium_img_path2, product_medium_img_path3, product_medium_img_path4, product_thumb_img_path1, product_thumb_img_path2, product_thumb_img_path3, product_thumb_img_path4, responseFun, slugify, variant_large_img_path1 } from "@/Http/helper";
import {product_thumb_img_path5, product_medium_img_path5, product_large_img_path5}  from "@/Http/helper";
import {product_thumb_img_path6, product_medium_img_path6, product_large_img_path6}  from "@/Http/helper";
import {product_thumb_img_path7, product_medium_img_path7, product_large_img_path7}  from "@/Http/helper";

import { productModel, productOtherDetailModel } from "@/Http/Models/productModel";
import path from 'path'
import { connectDb } from "../../../../../../lib/dbConnect";
import mongoose from "mongoose";
import { checkFilePath, moveFile } from "@/app/api/ckeckFilePath/route";



export async function POST(request) {
    let errors = {}; 
    connectDb() 
    const {
        _id,
        category_id,
        subcategory_id,
        childcategory_id,
        brand_id, 
        product_id,
        
        dynamicField,
        save_as_draft,

        containsLiquidContents,
        liquidVolume,
        liquidVolumeUnit,
        isTheItemHeaSensitive,
        isTheItemHeaSensitiveInstructions,
        isTheLiquidProductDoubleSealed, 
        isTheLiquidProductDoubleSealedInstructions,
        dangerousGoodsRegulations,
        safetyWarning,
        hasWrittenWarranty,
        ProductIsOrContainsAnElectronicComponent,
        productIsOrContainsThisBatteryType, 
        areBatteriesIncluded,
        batteryCellComposition


    } = await request.json();

 

    const dynamicFields = dynamicField ? dynamicField : [];
    

   

    if (isEmpty(hasWrittenWarranty)) errors.hasWrittenWarranty = "This field is required"; 
    if (isEmpty(containsLiquidContents)) errors.containsLiquidContents = "required";  
    if(containsLiquidContents =="Yes"){
        if (isEmpty(liquidVolume)) errors.liquidVolume = "required";  
        if (isEmpty(liquidVolumeUnit)) errors.liquidVolumeUnit = "required"; 
    }

    if (isEmpty(isTheItemHeaSensitive)) errors.isTheItemHeaSensitive = "required";  
    if(isTheItemHeaSensitive =="Yes"){
        if (isEmpty(isTheItemHeaSensitiveInstructions)) errors.isTheItemHeaSensitiveInstructions = "required";   
    }

    if (isEmpty(isTheLiquidProductDoubleSealed)) errors.isTheLiquidProductDoubleSealed = "required";  
    if(isTheLiquidProductDoubleSealed =="Yes"){
        if (isEmpty(isTheLiquidProductDoubleSealedInstructions)) errors.isTheLiquidProductDoubleSealedInstructions = "required";   
    }

    if (isEmpty(isTheLiquidProductDoubleSealed)) errors.isTheLiquidProductDoubleSealed = "required";  
    if(isTheLiquidProductDoubleSealed =="Yes"){
        if (isEmpty(isTheLiquidProductDoubleSealedInstructions)) errors.isTheLiquidProductDoubleSealedInstructions = "required";   
    }
    if (isEmpty(safetyWarning)) errors.safetyWarning = "required"; 
    if (isEmpty(hasWrittenWarranty)) errors.hasWrittenWarranty = "required"; 

    if (isEmpty(productIsOrContainsThisBatteryType)) errors.productIsOrContainsThisBatteryType = "required";  
    if(productIsOrContainsThisBatteryType =="Yes"){
        if (isEmpty(areBatteriesIncluded)) errors.areBatteriesIncluded = "required";   

         if(areBatteriesIncluded =="Yes"){
            if (isEmpty(areBatteriesIncluded)) errors.areBatteriesIncluded = "required";    
            if(areBatteriesIncluded =="Yes"){
                if (isEmpty(batteryCellComposition)) errors.batteryCellComposition = "required";   
            }
        }
    }

 
 
    // validate dynamicField
    const dynamicFieldData = [];
    if (dynamicFields.length > 0) {
        dynamicFields.forEach((item) => {
            if (isEmpty(item.field_value) && item.required === "Yes") {
                errors[`${item.field_name.toLowerCase().replace(/ /g, '_')}_error`] = `${item.field_name} is required.`;
            }
            const data = {
                field_name: item.field_name,
                field_value: item.field_value || null
            }
            dynamicFieldData.push(data)
        });
    }

  


    if (Object.keys(errors).length > 0) {
        return responseFun(false, { errors, status_code: 400 }, 200)
    }
 
    let existProduct = null; 
    if (!product_id) {
        return responseFun(false, {message:"product id required", status_code: 404 }, 200)
    }  
    
    if (Object.keys(errors).length > 0) {
        return responseFun(false, { errors, status_code: 400 }, 200)
    }
    
    try { 
        
        
        existProduct = await productModel. findById(product_id)
         const product = await productModel.findByIdAndUpdate(product_id, { 
                dynamicFields: dynamicFieldData, 
                save_as_draft:existProduct.save_as_draft == 0 ? existProduct.save_as_draft : Number(save_as_draft)
            }) 

            if(_id){
                await productOtherDetailModel.findByIdAndUpdate(
                    _id,
                    {
                      product_id,
                      containsLiquidContents,
                      liquidVolume: containsLiquidContents== "Yes"?liquidVolume:"",
                      liquidVolumeUnit: containsLiquidContents== "Yes"?liquidVolumeUnit:"",
                      isTheItemHeaSensitive,
                      isTheItemHeaSensitiveInstructions: isTheItemHeaSensitive=="Yes"?isTheItemHeaSensitiveInstructions:"",
                      isTheLiquidProductDoubleSealed, 
                      isTheLiquidProductDoubleSealedInstructions:isTheLiquidProductDoubleSealed=="Yes"?isTheLiquidProductDoubleSealedInstructions:"",
                      dangerousGoodsRegulations,
                      safetyWarning,
                      hasWrittenWarranty,
                      ProductIsOrContainsAnElectronicComponent,
                      productIsOrContainsThisBatteryType, 
                      areBatteriesIncluded:productIsOrContainsThisBatteryType=="Yes"?areBatteriesIncluded:"No",
                      batteryCellComposition:productIsOrContainsThisBatteryType=="Yes" && areBatteriesIncluded =="Yes" ?batteryCellComposition:""
                    },
                    {
                      new: true,
                      upsert: true  
                    }
                  );
            }else{
                await productOtherDetailModel.create( 
                    {
                      product_id,
                      containsLiquidContents,
                      liquidVolume: containsLiquidContents== "Yes"?liquidVolume:"",
                      liquidVolumeUnit: containsLiquidContents== "Yes"?liquidVolumeUnit:"",
                      isTheItemHeaSensitive,
                      isTheItemHeaSensitiveInstructions: isTheItemHeaSensitive=="Yes"?isTheItemHeaSensitiveInstructions:"",
                      isTheLiquidProductDoubleSealed, 
                      isTheLiquidProductDoubleSealedInstructions:isTheLiquidProductDoubleSealed=="Yes"?isTheLiquidProductDoubleSealedInstructions:"",
                      dangerousGoodsRegulations,
                      safetyWarning,
                      hasWrittenWarranty,
                      ProductIsOrContainsAnElectronicComponent,
                      productIsOrContainsThisBatteryType, 
                      areBatteriesIncluded:productIsOrContainsThisBatteryType=="Yes"?areBatteriesIncluded:"No",
                      batteryCellComposition:productIsOrContainsThisBatteryType=="Yes" && areBatteriesIncluded =="Yes" ?batteryCellComposition:""
                    } 
                  );
            }
             
     

        return responseFun(true, { message:`${_id?"Update":"create"} Successfully`}, 200)

    } catch (error) {
        console.log(error);
        return responseFun(false, { data: error }, 200)
    }
}


