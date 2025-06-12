import { isEmpty, responseFun} from "@/Http/helper";
import { productModel, productVariantModel, variantThresholdSchemaModal } from "@/Http/Models/productModel";
import mongoose from "mongoose";
import { connectDb } from "../../../../../../lib/dbConnect";
import ColorModel from "../../../../../../lib/variant/ColorModel";
import SizeModel from "../../../../../../lib/variant/SizeModel";
import ItemBreadthModel from "../../../../../../lib/variant/ItemBreadthModel";
import ItemHeightModel from "../../../../../../lib/variant/ItemHeightModel";
import ItemLengthModel from "../../../../../../lib/variant/ItemLengthModel";
import ItemWeightModel from "../../../../../../lib/variant/ItemWeightModel";
import PackageBreadthModel from "../../../../../../lib/variant/PackageBreadthModel";
import PackageHeightModel from "../../../../../../lib/variant/PackageHeightModel";
// import PackageLengthModel from "../../../../../../lib/variant/PackageLengthModel";
import PackageWeightModel from "../../../../../../lib/variant/PackageWeightModel";
import PackageLengthModel from "../../../../../../lib/variant/PackageLengthModel";
import { deleteImageOne, uploadImageFun } from "@/app/api/uploadImage/route";
import path from 'path'
import { checkFilePath, moveFile } from "@/app/api/ckeckFilePath/route";

import { variant_thumb_img_path1, variant_thumb_img_path2, variant_thumb_img_path3, variant_thumb_img_path4,variant_thumb_img_path5, variant_thumb_img_path6, variant_thumb_img_path7 } from "@/Http/helper";
import { variant_medium_img_path1, variant_medium_img_path2, variant_medium_img_path3, variant_medium_img_path4, variant_medium_img_path5, variant_medium_img_path6, variant_medium_img_path7 } from "@/Http/helper";
import { variant_large_img_path1, variant_large_img_path2, variant_large_img_path3, variant_large_img_path4, variant_large_img_path5, variant_large_img_path6, variant_large_img_path7 } from "@/Http/helper";
import { time } from "framer-motion";
import { Category } from "../../../../../../lib/categoryModel";




let errors = {};
const imagePaths = [
    { thumb: variant_thumb_img_path1, medium: variant_medium_img_path1, large: variant_large_img_path1 },
    { thumb: variant_thumb_img_path2, medium: variant_medium_img_path2, large: variant_large_img_path2 },
    { thumb: variant_thumb_img_path3, medium: variant_medium_img_path3, large: variant_large_img_path3 },
    { thumb: variant_thumb_img_path4, medium: variant_medium_img_path4, large: variant_large_img_path4 },
    { thumb: variant_thumb_img_path5, medium: variant_medium_img_path5, large: variant_large_img_path5 },
    { thumb: variant_thumb_img_path6, medium: variant_medium_img_path6, large: variant_large_img_path6 },
    { thumb: variant_thumb_img_path7, medium: variant_medium_img_path7, large: variant_large_img_path7 },
];

const imageSizeMap = { large: 1600, medium: 1100, thumb: 400 };  

const product_large_img_paths = [variant_large_img_path2, variant_large_img_path3, variant_large_img_path4, variant_large_img_path5, variant_large_img_path6, variant_large_img_path7];
const product_medium_img_paths = [variant_medium_img_path2, variant_medium_img_path3, variant_medium_img_path4, variant_medium_img_path5, variant_medium_img_path6, variant_medium_img_path7];
const product_thumb_img_paths = [variant_thumb_img_path2, variant_thumb_img_path3, variant_thumb_img_path4, variant_thumb_img_path5, variant_thumb_img_path6, variant_thumb_img_path7];
  


async function moveImageIfExists(imageIndex, imageFile) { 
    for (let i = 0; i < product_large_img_paths.length; i++) { 
        const largPath = `public/${product_large_img_paths[i]}`;
        const mediumPath = `public/${product_medium_img_paths[i]}`;
        const thumbPath = `public/${product_thumb_img_paths[i]}`;
        let exisPath = await checkFilePath(largPath, imageFile); 
        if (exisPath) {
            const res= await moveFile(largPath, imageFile, `public/${imagePaths[imageIndex-1].large}`);
            console.log(largPath, imageFile, `public/${imagePaths[imageIndex-1].large}`, imageIndex);
            await moveFile(mediumPath, imageFile, `public/${imagePaths[imageIndex-1].medium}`);
            await moveFile(thumbPath, imageFile, `public/${imagePaths[imageIndex-1].thumb}`);
        }
    }
}


const uploadImages = async (image, index, productName) => {
    const extension = path.extname(image.name);
    const acceptedExtensions = ['.jpg', '.png', '.jpeg', '.webp'];
    if (!acceptedExtensions.includes(extension)) {
        errors[`image_${index}`] = "Image must be jpg, png, jpeg, or webp.";
        return null;
    }
    const filename = `${productName}${index}${Date.now()}.${extension}`;
    
    for (const [sizeType, size] of Object.entries(imageSizeMap)) {
        await uploadImageFun(image, `public/${imagePaths[index - 1][sizeType]}`, filename, size);
    }
    return filename;
};

const deleteOldImages = async (index, existProduct, requestImage) => {
    const oldPath = existProduct?.[`image_${index}`];
    if (!requestImage.includes(oldPath)) { 
        for (const sizeType of Object.keys(imageSizeMap)) {
            await deleteImageOne(`${imagePaths[index - 1][sizeType]}${oldPath}`);
        }
    }
};
// upload images
const processImageUpload = async (image, index, existProduct, productName, requestImage) => {
   
    if (image && typeof image !== "string") {
        const newImagePath = await uploadImages(image, index, productName);
        await deleteOldImages(index, existProduct, requestImage);
        return newImagePath;
    } else if (image && image !== "null") {
       
        await moveImageIfExists(index, image)
        // after move delete  old uploaded image
        if (existProduct && existProduct[`image_${index}`] && (existProduct && existProduct[`image_${index}`] != image)) {
            await deleteOldImages(index, existProduct, requestImage);
            const oldPath = existProduct[`image_${index}`]
        }
        return image;
    } else if((!image || image == "null") && (existProduct && existProduct[[`image_${index}`]])) {
        console.log({image, index}, existProduct[`image_${index}`]);
        await deleteOldImages(index, existProduct, requestImage);
        return null;
    }
};





export async function POST(request) { 
    errors = {};
await connectDb();
            const formData = await request.formData();
    const { 
                _id,
                product_id,
                category_id,
                sku,
                listingStatus,
                msrp,
                consumerSalePrice,
                businessSalePrice,
                seller_id,
                stock,
                customAttributes,
                withImage,
                image_1,
                image_2,
                image_3,
                image_4,
                image_5,
                image_6,
                image_7,
                threshold,
                discount_type,
                variant,
                currency,

                manual_product_id,
                manual_product_id_type,
                conditionType,
                expireDate

            }  = Object.fromEntries(formData); 
            
             
            
            if(isEmpty(product_id))errors.product_id = `product_id is required.`;
            if(isEmpty(sku))errors.sku = `sku is required.`;
            if(isEmpty(msrp))errors.msrp = `msrp is required.`;
            if(isEmpty(consumerSalePrice))errors.consumerSalePrice = `this field is required.`;
            if(isEmpty(businessSalePrice))errors.businessSalePrice = `this field is required.`; 
            if(isEmpty(stock))errors.stock = `stock is required.`;  
            if(isEmpty(conditionType))errors.conditionType = `required.`;  
            if(isEmpty(currency))errors.currency = `required.`;  


            if(withImage=="Yes"){
                if(!image_1  || image_1 =="null"){
                    errors.image  = "minimum 1 image required";
                }
            }

            if(Object.keys(errors).length>0){
                return responseFun(false, {errors, status_code:400, image_1:!image_1},200)
            }

    try{

        let image_1_path =  null;
        let image_2_path =  null;
        let image_3_path =  null;
        let image_4_path =  null;
        let image_5_path =  null;
        let image_6_path =  null;
        let image_7_path =  null; 
        let existVariant =null
        if(_id){
             existVariant = await productVariantModel.findById(_id)
        }
        
        if(withImage=="Yes"){
            const requestImage = [image_1, image_2, image_3, image_4, image_5, image_6, image_7]; 
            const fileShortenedProductName = sku.length > 6 ? sku.slice(0, 6).toString().trim() : sku.toString().trim();
            image_1_path =await processImageUpload(image_1, 1, existVariant, fileShortenedProductName, requestImage)
            image_2_path =await processImageUpload(image_2, 2, existVariant, fileShortenedProductName, requestImage)
            image_3_path =await processImageUpload(image_3, 3, existVariant, fileShortenedProductName, requestImage)
            image_4_path =await processImageUpload(image_4, 4, existVariant, fileShortenedProductName, requestImage)
            image_5_path =await processImageUpload(image_5, 5, existVariant, fileShortenedProductName, requestImage)
            image_6_path =await processImageUpload(image_6, 6, existVariant, fileShortenedProductName, requestImage)
            image_7_path =await processImageUpload(image_7, 7, existVariant, fileShortenedProductName, requestImage)
        }

        // ========================image uploading end ===============================================================
        const CategotyVariant = await Category.findById(category_id).select("category_variant");
       
        if(variant == "No" || Object.keys(CategotyVariant?.category_variant).length === 0){
            // await productVariantModel.deleteMany({
            //     _id: { $ne: _id } ,
            //     product_id: new mongoose.Types.ObjectId(product_id)
            // });

            await productVariantModel.updateMany(
                {
                  _id: { $ne: _id },
                  product_id: new mongoose.Types.ObjectId(product_id)
                },
                {
                  $set: {
                    listingStatus: 4
                  }
                }
              );
        }

        await productModel.findByIdAndUpdate(product_id,{
            variant
        })
        let sevedVariant = null;

        
        if(_id){
            const sinNumber = existVariant && existVariant.sin ? existVariant.sin :await newSinNumber();
            sevedVariant = await productVariantModel.findByIdAndUpdate(_id,{
                seller_id,
                product_id, 
                sku,
                listingStatus,
                msrp,
                consumerSalePrice,
                businessSalePrice, 
                stock,
                customAttributes: variant != "No" && customAttributes?JSON.parse(customAttributes):null, 
                withImage,
                image_1:image_1_path,
                image_2:image_2_path,
                image_3:image_3_path,
                image_4:image_4_path,
                image_5:image_5_path,
                image_6:image_6_path,
                image_7:image_7_path,
                discount_type,
                currency,
                sin:sinNumber,
                manual_product_id,
                manual_product_id_type,
                conditionType,
                expireDate

            })
        }else{

           
            const sinNumber = await newSinNumber();
            sevedVariant = await productVariantModel.create({
                seller_id,
                product_id, 
                sku,
                listingStatus,
                isProcessing:"Processing", 
                msrp,
                consumerSalePrice,
                businessSalePrice, 
                stock,
                customAttributes: variant != "No" && customAttributes?JSON.parse(customAttributes):null, 
                withImage,
                image_1:image_1_path,
                image_2:image_2_path,
                image_3:image_3_path,
                image_4:image_4_path,
                image_5:image_5_path,
                image_6:image_6_path,
                image_7:image_7_path,
                discount_type,
                currency,
                 sin:sinNumber,
                 manual_product_id,
                manual_product_id_type,
                conditionType,
                expireDate

            })
        }

        await variantThresholdSchemaModal.deleteMany({
            variant_id:new mongoose.Types.ObjectId(sevedVariant._id)
        })
        const thresholdArr = JSON.parse(threshold) || []
        if(thresholdArr && thresholdArr.length>0){
            thresholdArr.forEach(async (element) => {
                await variantThresholdSchemaModal.create({
                    product_id:product_id,
                    variant_id:sevedVariant._id, 
                    unit:element['unit'],
                    discount:element['discount'],
                })
            });
        }

        const variantList = await getVariant(product_id); 
        return responseFun(true, {message: "Variant Addedd", variantList:variantList},200) 
    }catch(error){
        console.log(error);
        return responseFun(false, {error:error},200)
    }
}

export async function getVariant(product_id) {
    
    try{ 
        const variantList = await productVariantModel.find({
            product_id: new mongoose.Types.ObjectId(product_id),
            listingStatus: { $in: [0, 1, 2] }
        }).sort({createdAt:-1})

        const variantListWithValue = await Promise.all( 
            variantList.map(async (variant) => { 
                const threshold = await variantThresholdSchemaModal.find({variant_id: variant._id}).sort({unit:1})
                return { 
                    ...variant.toObject(),  
                    threshold:threshold
                };  
            }) 
        )
        return variantListWithValue;

    }catch(error){
        console.log(error);
        return [];
    }
}


export async function fetchVariant(variantName, _id) {
     let variant = null
     
     const validObjectId = mongoose.Types.ObjectId.isValid(_id);
        if (!validObjectId) {
            throw new Error("Invalid ObjectId provided");
        }
        if (variantName == "colorId") {
            variant = await ColorModel.findById(_id);
        }
        if (variantName == "sizeId") {
            variant = await SizeModel.findById(_id);
        }
    
        if (variantName == "itemBreadthId") {
            variant.itemBreadthId = await ItemBreadthModel.findById(_id);
        }
    
        if (variantName == "itemHeightId") {
            variant = await ItemHeightModel.findById(_id);
        }
    
        if (variantName == "itemLengthId") {
            variant = await ItemLengthModel.findById(_id);
        }
    
        if (variantName == "itemWeightId" ) {
            variant = await ItemWeightModel.findById(_id);
        }
    
        if (variantName == "packageBreadthId") {
            variant = await PackageBreadthModel.findById(_id);
        }
        if (variantName == "packageHeightId" ) {
            variant = await PackageHeightModel.findById(_id);
        }
    
        if (variantName == "packageLengthId" ) {
            variant = await PackageLengthModel.findById(_id);
        }
    
        if (variantName == "packageWeightId") {
            variant = await PackageWeightModel.findById(_id);
        }
    
        return variant;
}


export async function DELETE(request) {
        const { _id } = await request.json();
        try{
            const response = await productVariantModel.findByIdAndDelete(_id)
            return responseFun(true, {message:"Deleted successfully"}, 200)

        }catch(error){
            console.log(error);
            return responseFun(false, {error:error}, 200)
        }
}


async function uploadAndDeleteImages(image, variantPaths, filename, sizes) {
    for (const { path, size } of sizes) {
        await uploadImageFun(image, path, filename, size);
    }
    
    if (existVariant?.image_1) {
        for (const { path } of sizes) {
            await deleteImageOne(`${path.path}${existVariant.image_1}`);
        }
    }
}

async function moveAndDeleteImages(image, variantPaths) {
    for (const path of variantPaths) {
        if (await checkFilePath(`public/${path}`, image)) {
            await Promise.all([
                moveFile(`public/${path}`, image, `public/${variant_large_img_path1}`),
                moveFile(`public/${path.replace('large', 'medium')}`, image, `public/${variant_medium_img_path1}`),
                moveFile(`public/${path.replace('large', 'thumb')}`, image, `public/${variant_thumb_img_path1}`)
            ]);
        }
    }
}




export async function newSinNumber(){ 
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