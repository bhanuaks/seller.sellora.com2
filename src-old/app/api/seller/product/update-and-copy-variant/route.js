import { isEmpty, rand, responseFun, variant_large_img_path5, variant_large_img_path6, variant_large_img_path7, variant_medium_img_path5, variant_medium_img_path6, variant_medium_img_path7, variant_thumb_img_path5, variant_thumb_img_path6, variant_thumb_img_path7 } from "@/Http/helper";
import { productVariantModel, variantThresholdSchemaModal } from "@/Http/Models/productModel";
import mongoose from "mongoose";
const fs = require("fs");
const path = require("path");

import { variant_large_img_path1, variant_large_img_path2, variant_large_img_path3, variant_large_img_path4 } from '@/Http/helper'
import { variant_medium_img_path1, variant_medium_img_path2, variant_medium_img_path3, variant_medium_img_path4 } from '@/Http/helper'
import { variant_thumb_img_path1, variant_thumb_img_path2, variant_thumb_img_path3, variant_thumb_img_path4 } from '@/Http/helper'


export async function POST(request) {
    
    const {
        _id, 
        product_id,
        seller_id,
        sku, 
        listingStatus,
        msrp,
        consumerSalePrice,
        businessSalePrice,
        taxCode,
        taxRate,
        fulfillmentBy,
        shippingProvider,
        stock,
        customAttributes,
        threshold,
        discount_type,
        stock_status,
        opration,

        manual_product_id,
        manual_product_id_type,
        conditionType,
        expireDate,
        currency,
        
    } = await request.json();

     const errors = {}; 
                if(isEmpty(product_id))errors.product_id = `product_id is required.`;
                if(isEmpty(sku))errors.sku = `sku is required.`;
                if(isEmpty(currency))errors.currency = `required.`;
                if(isEmpty(conditionType))errors.conditionType = `required.`;
                
                if(!msrp ||  msrp== "null" )errors.msrp = `msrp is required.`;
                if(!consumerSalePrice || consumerSalePrice == "null")errors.consumerSalePrice = `this field is required.`;
                if(!businessSalePrice || businessSalePrice == 'null')errors.businessSalePrice = `this field is required.`;
                // if(isEmpty(taxCode))errors.taxCode = `taxCode is required.`;
                // if(!taxRate || taxRate == "null")errors.taxRate = `taxRate is required.`;
                if(!stock || stock == "null")errors.stock = `stock is required.`;  
                
               
                // check SKU
                let checkSku = null ;
                if(product_id && sku){
                    if(opration == "copy"){
                         checkSku = await productVariantModel.findOne({
                            product_id: new mongoose.Types.ObjectId(product_id),
                            sku:sku
                        })

                    }else{
                         checkSku = await productVariantModel.findOne({
                            product_id: new mongoose.Types.ObjectId(product_id),
                            sku:sku,
                            ...(!!_id && { _id: { $ne: _id } })
                        })
                    }
                    
    
                    if(checkSku){
                       errors.sku = `This SKU already exists.`;
                    }
                }
               
                

                if(Object.keys(errors).length>0){
                    return responseFun(false, {errors, status_code:400},200)
                }
    try{
        let variant =null
       
        if(opration == "copy"){ 
            const sinId = await newSinNumber();
            const copyFromVarinat = await productVariantModel.findById(_id);
            const imagePaths = {
                image_1: [variant_large_img_path1, variant_thumb_img_path1, variant_medium_img_path1],
                image_2: [variant_large_img_path2, variant_thumb_img_path2, variant_medium_img_path2],
                image_3: [variant_large_img_path3, variant_thumb_img_path3, variant_medium_img_path3],
                image_4: [variant_large_img_path4, variant_thumb_img_path4, variant_medium_img_path4],
                image_5: [variant_large_img_path5, variant_thumb_img_path5, variant_medium_img_path5],
                image_6: [variant_large_img_path6, variant_thumb_img_path6, variant_medium_img_path6],
                image_7: [variant_large_img_path7, variant_thumb_img_path7, variant_medium_img_path7],
              };
              
              const imageOutputPaths = {}; 
                for (let key in imagePaths) {
                    const originalImage = copyFromVarinat[key];
                    if (originalImage) {
                    const paths = imagePaths[key];
                    const sourcePath = `${paths[0]}${originalImage}`;
                    const fileExten = path.extname(sourcePath);
                    const baseName = path.basename(sourcePath, fileExten);
                    const randNum = rand(1, 990);
                    const newFileName = `${baseName}_copy${randNum}${fileExten}`;
                
                    await Promise.all(
                        paths.map(async (prefix) => {
                        const src = `${prefix}${originalImage}`;
                        const dest = `${prefix}${newFileName}`;
                        await copyImageFile(src, dest);
                        })
                    );
                
                    imageOutputPaths[`${key}_path`] = newFileName;
                    }
                }
                
                const {
                    image_1_path,
                    image_2_path,
                    image_3_path,
                    image_4_path,
                    image_5_path,
                    image_6_path,
                    image_7_path,

                } = imageOutputPaths;


             variant = await productVariantModel.create({ 
                product_id,
                seller_id,
                sku,
                sin:sinId,
                listingStatus,
                msrp,
                consumerSalePrice, 
                businessSalePrice,
                taxCode,
                taxRate,
                fulfillmentBy,
                shippingProvider,
                stock,
                customAttributes:customAttributes,
                discount_type,

                currency:copyFromVarinat.currency,
                withImage:copyFromVarinat.withImage,
                image_1:image_1_path || null,
                image_2:image_2_path || null,
                image_3:image_3_path || null,
                image_4:image_4_path || null,
                image_5:image_5_path || null,
                image_6:image_6_path || null,
                image_7:image_7_path || null,
                stock_status,

                manual_product_id,
                manual_product_id_type,
                conditionType,
                expireDate,
                currency,

            }) 
            if(threshold && threshold.length>0){
                threshold.forEach(async (element) => {
                    await variantThresholdSchemaModal.create({
                        product_id:product_id,
                        variant_id:variant._id,
                        seller_id:seller_id,
                        unit:element['unit'],
                        discount:element['discount'],
                    })
                });
            }


        }else{
             variant = await productVariantModel.findByIdAndUpdate(_id, { 
                product_id,
                sku, 
                listingStatus,
                msrp,
                consumerSalePrice, 
                taxCode,
                taxRate,
                fulfillmentBy,
                shippingProvider,
                businessSalePrice,
                stock,
                customAttributes:customAttributes,
                discount_type,
                stock_status,

                manual_product_id,
                manual_product_id_type,
                conditionType,
                expireDate,
                currency,
            })

            await variantThresholdSchemaModal.deleteMany({
                variant_id:new mongoose.Types.ObjectId(variant)
            })
            if(threshold && threshold.length>0){
                threshold.forEach(async (element) => {
                    await variantThresholdSchemaModal.create({
                        product_id:product_id,
                        variant_id:variant._id,
                        seller_id:seller_id,
                        unit:element['unit'],
                        discount:element['discount'],
                    })
                });
            }


        }
       

        
        return responseFun(true, {message: "Data has been saved successfully."}, 200)

    }catch(error){
        console.log(error);
        return responseFun(false, {error}, 200)
    }
}

async function copyImageFile(sourcePath, destinationPath) {
    
    fs.copyFile(`public/${sourcePath}`, `public/${destinationPath}`, (error)=>{
        if(error){
            console.log(`Error copying the image: ${error}`);
            return false;
        }else{
            console.log(`image copy success: ${destinationPath}`);
            return true; 
        }
    })
}

async function newSinNumber(){ 
    const sinNumber = `SIN${Math.floor(Date.now() / 100)}`; 
    try{
        const existAlready = await productVariantModel.countDocuments({sin:sinNumber});
        if(existAlready > 0){
            newSinNumber()
        }
        return sinNumber
    }catch(error){
        console.log(error);
        return sinNumber
    }
}