import { deleteImageOne, uploadImageFun } from "@/app/api/uploadImage/route";
import { isEmpty, main_large_img_path, main_medium_img_path, main_thumb_img_path, product_large_img_path1, product_large_img_path2, product_large_img_path3, product_large_img_path4, product_medium_img_path1, product_medium_img_path2, product_medium_img_path3, product_medium_img_path4, product_thumb_img_path1, product_thumb_img_path2, product_thumb_img_path3, product_thumb_img_path4, responseFun, slugify, variant_large_img_path1 } from "@/Http/helper";
import {product_thumb_img_path5, product_medium_img_path5, product_large_img_path5}  from "@/Http/helper";
import {product_thumb_img_path6, product_medium_img_path6, product_large_img_path6}  from "@/Http/helper";
import {product_thumb_img_path7, product_medium_img_path7, product_large_img_path7}  from "@/Http/helper";

import { productModel, productOtherDetailModel, productVariantModel, variantThresholdSchemaModal } from "@/Http/Models/productModel";
import path from 'path'
import { connectDb } from "../../../../../../lib/dbConnect";
import mongoose from "mongoose";
import { checkFilePath, moveFile } from "@/app/api/ckeckFilePath/route";
import { getLoginSeller } from "@/app/api/getLoginUser/route";

let errors = {};
const imagePaths = [
    { thumb: product_thumb_img_path1, medium: product_medium_img_path1, large: product_large_img_path1 },
    { thumb: product_thumb_img_path2, medium: product_medium_img_path2, large: product_large_img_path2 },
    { thumb: product_thumb_img_path3, medium: product_medium_img_path3, large: product_large_img_path3 },
    { thumb: product_thumb_img_path4, medium: product_medium_img_path4, large: product_large_img_path4 },
    { thumb: product_thumb_img_path5, medium: product_medium_img_path5, large: product_large_img_path5 },
    { thumb: product_thumb_img_path6, medium: product_medium_img_path6, large: product_large_img_path6 },
    { thumb: product_thumb_img_path7, medium: product_medium_img_path7, large: product_large_img_path7 },
];

const imageSizeMap = { large: 1600, medium: 1100, thumb: 400 }; 

const product_large_img_paths = [product_large_img_path2, product_large_img_path3, product_large_img_path4, product_large_img_path5, product_large_img_path6, product_large_img_path7];
const product_medium_img_paths = [product_medium_img_path2, product_medium_img_path3, product_medium_img_path4, product_medium_img_path5, product_medium_img_path6, product_medium_img_path7];
const product_thumb_img_paths = [product_thumb_img_path2, product_thumb_img_path3, product_thumb_img_path4, product_thumb_img_path5, product_thumb_img_path6, product_thumb_img_path7];
  

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
        if (existProduct && existProduct[`image_${index}`] && existProduct[`image_${index}`] != image) {
            await deleteOldImages(index, existProduct, requestImage);
            const oldPath = existProduct[`image_${index}`]
        }
        return image;
    } else if((!image || image == "null") && (existProduct && existProduct[[`image_${index}`]])) {
        
        await deleteOldImages(index, existProduct, requestImage);
        return null;
    }
};



export async function POST(request) {
    errors = {};
   await  connectDb()
    const formData = await request.formData();

    const {
        category_id,
        subcategory_id,
        childcategory_id,
        brand_id,
        product_id,
        product_name,
        product_id_type,
        product_description,
        key_feature,
        search_keywords,
        target_gender,
        age_range,
        material,
        model_name,
        model_number,
        manufacture_part_number,
        safety_warning,
        country_of_origin,
        manufacturer_details,
        packer_details,
        importer_details,


        image_1,
        image_2,
        image_3,
        image_4,
        image_5,
        image_6,
        image_7,


        seller_id,
        _id,

        main_image,
        dynamicField,
        keyAttributes,
        taxCode,
        taxRate,
        currency,
        fulfillmentBy,
        shippingProvider,

       
        packageBreadth,
        product_length,
        product_length_unit,
        product_width,
        product_width_unit ,
        product_weight,
        product_weight_unit,
        packageLength,
        packageLengthUnit,
        packageWidth,
        packageWidthUnit,
        packageHeight,
        packageHeightUnit,
        color,
        size,
        style,
        pettern,
        unit_coun,
        unit_count_type,
        item_type_name,
        recommanded_use,
        packageWeight,
        packageWeightUnit,
        productHeight,
        productHeightUnit,
        numberOfItem,
        handling_time,
        copy

    } = Object.fromEntries(formData);

    const seller = await getLoginSeller();
    if(!seller){
        return responseFun(false, {message:"unauthorized"}, 403)
    }

    let key_feature_array = key_feature ? JSON.parse(key_feature) : [];

    const dynamicFields = dynamicField ? JSON.parse(dynamicField) : [];
    const keyAttributesData = keyAttributes ? JSON.parse(keyAttributes) : [];

   

    if (isEmpty(product_name)) errors.product_name = "This field is required";
    if (isEmpty(product_description)) errors.product_description = "This field is required";
    if (isEmpty(search_keywords)) errors.search_keywords = "This field is required";
    if (!handling_time) errors.handling_time = "This field is required";

    // if (isEmpty(taxCode)) errors.taxCode = `Tax Code is required.`;
    // if (isEmpty(taxRate)) errors.taxRate = `Tax Rate is required.`;
    if (isEmpty(currency)) errors.currency = `Currency is required.`;
    if (isEmpty(fulfillmentBy)) errors.fulfillmentBy = `This field is required.`;
    if (isEmpty(shippingProvider)) errors.shippingProvider = `This field is required.`;

    if (key_feature_array.length == 0) {
        errors.key_feature_0 = "This field is required";
    } else {
        key_feature_array.forEach((keyItem, index) => {
            if (isEmpty(keyItem)) errors[`key_feature_${index}`] = "This field is required";
        })
    }

    if (!image_1 || image_1 == "null") {
        errors.image = "minimum 1 image required";
    }

    if (!main_image || main_image == "null") {
        errors.main_image = "Please select main image.";
    }


    // validate dynamicField
    const dynamicFieldData = [];
    // if (dynamicFields.length > 0) {
    //     dynamicFields.forEach((item) => {
    //         if (isEmpty(item.field_value) && item.required === "Yes") {
    //             errors[`${item.field_name.toLowerCase().replace(/ /g, '_')}_error`] = `${item.field_name} is required.`;
    //         }
    //         const data = {
    //             field_name: item.field_name,
    //             field_value: item.field_value || null
    //         }
    //         dynamicFieldData.push(data)
    //     });
    // }

    // validate key attribute 
    // if (keyAttributesData.length > 0) {
    //     keyAttributesData.forEach((item, key) => {
    //         if (isEmpty(item.key_attribute)) {
    //             errors[`attribute_name_${key}_error`] = "This field is required."
    //         }
    //         if (isEmpty(item.key_value)) {
    //             errors[`attribute_value_${key}_error`] = "This field is required."
    //         }
    //     });
    // }


    if (Object.keys(errors).length > 0) {
        return responseFun(false, { errors, status_code: 400, dynamicFieldData }, 200)
    }
    let image_1_path = image_1 || null;
    let image_2_path = image_2 || null;
    let image_3_path = image_3 || null;
    let image_4_path = image_4 || null;
    let image_5_path = image_5 || null;
    let image_6_path = image_6 || null;
    let image_7_path = image_7 || null;
    let main_image_path = main_image || null
    let existProduct = null;

    
   
    if (_id) { 
        existProduct = await productModel.findById(_id)
        if (copy != "Yes" && existProduct.seller_id.toString() !== seller._id.toString()) {
                return responseFun(false, { message: "You cannot change another seller's product." }, 200);
            }
            
        // const checkExistProductName = await productModel.countDocuments({
        //     _id: { $ne: new mongoose.Types.ObjectId(_id) },
        //     product_name: product_name
        //   });
        // if(checkExistProductName > 0 ){
        //     errors.product_name = "This product name already exist in database.";
        //     return responseFun(false, { errors, status_code: 400 }, 200)
        // }
    }else{
        // const checkExistProductName = await productModel.countDocuments({product_name:product_name})
        //     if(checkExistProductName > 0 ){
        //         errors.product_name = "This product name already exist in database.";
        //         return responseFun(false, { errors, status_code: 400 }, 200)
        //     }
    }

    
    //  upload main image
    if (main_image && typeof main_image != "string") {

        if (existProduct && existProduct.main_image) {
            const oldPath = existProduct.main_image
            await deleteImageOne(`${main_large_img_path}${oldPath}`)
            await deleteImageOne(`${main_medium_img_path}${oldPath}`)
            await deleteImageOne(`${main_thumb_img_path}${oldPath}`)
        }
        const extension = path.extname(main_image.name);
        const accepteExtensions = ['.jpg', '.png', 'jpeg', 'webp'];
        if (!accepteExtensions.includes(extension)) {
            errors.main_image = "image must be jpg, png,jpeg."
        }
        const shortenedProductName = product_name.length > 6 ? product_name.slice(0, 6).toString().trim() : product_name.toString().trim();
        const filname_large = `${shortenedProductName}_main_${new Date().toISOString().replace(/[-:.TZ]/g, "")}.${extension}`;
        const filname_medium = `${shortenedProductName}_main_${new Date().toISOString().replace(/[-:.TZ]/g, "")}.${extension}`;
        const filname = `${shortenedProductName}_main_${new Date().toISOString().replace(/[-:.TZ]/g, "")}.${extension}`;
        const uploadingPath = "public/uploads/product/main_image/";
        await uploadImageFun(main_image, `public/${main_large_img_path}`, filname, 1600)
        await uploadImageFun(main_image, `public/${main_medium_img_path}`, filname, 1100)
        await uploadImageFun(main_image, `public/${main_thumb_img_path}`, filname, 400)
        //   await uploadImageFun(main_image, uploadingPath, filname, 1100)
        main_image_path = filname;

        

    } else if (!main_image && existProduct && existProduct.main_image) {
        const oldPath = existProduct.main_image
        await deleteImageOne(oldPath)
    }

    // end upload main image
    const requestImage = [image_1, image_2, image_3, image_4, image_5, image_6, image_7];
    const fileShortenedProductName = product_name.length > 6 ? product_name.slice(0, 6).toString().trim() : product_name.toString().trim();
    image_1_path =await processImageUpload(image_1, 1, existProduct, fileShortenedProductName, requestImage)
    image_2_path =await processImageUpload(image_2, 2, existProduct, fileShortenedProductName, requestImage)
    image_3_path =await processImageUpload(image_3, 3, existProduct, fileShortenedProductName, requestImage)
    image_4_path =await processImageUpload(image_4, 4, existProduct, fileShortenedProductName, requestImage)
    image_5_path =await processImageUpload(image_5, 5, existProduct, fileShortenedProductName, requestImage)
    image_6_path =await processImageUpload(image_6, 6, existProduct, fileShortenedProductName, requestImage)
    image_7_path =await processImageUpload(image_7, 7, existProduct, fileShortenedProductName, requestImage)

    
 
    


  

 
    if (Object.keys(errors).length > 0) {
        return responseFun(false, { errors, status_code: 400 }, 200)
    }

    try {
        let product = null;
        if (_id && _id != "null" && copy != "Yes") { 

            product = await productModel.findByIdAndUpdate(_id, {
                seller_id,
                category_id,
                subcategory_id: subcategory_id && subcategory_id != "null" ? subcategory_id : null,
                childcategory_id: childcategory_id && childcategory_id != "null" ? childcategory_id : null,
                brand_id: brand_id ? brand_id : null,
                slug: slugify(product_name),
                product_name,
                // product_id,
                // product_id_type,
                product_description,
                key_feature: key_feature_array,
                search_keywords,
                target_gender,
                age_range:age_range || 0,
                material,
                model_name,
                model_number,
                manufacture_part_number,
                safety_warning,
                country_of_origin,
                manufacturer_details,
                packer_details,
                importer_details,
                image_1: image_1_path,
                image_2: image_2_path,
                image_3: image_3_path,
                image_4: image_4_path,
                image_5: image_5_path,
                image_6: image_6_path,
                image_7: image_7_path,
                main_image: main_image_path, 

                currency,
                taxCode:taxCode || "",
                taxRate:Number(taxRate) || 0,
                fulfillmentBy,
                shippingProvider,

                
                packageBreadth,
                product_length,
                product_length_unit,
                product_width,
                product_width_unit ,
                product_weight,
                product_weight_unit,
                packageLength,
                packageLengthUnit,
                packageWidth,
                packageWidthUnit,
                packageHeight,
                packageHeightUnit,
                color,
                size,
                style,
                pettern,
                unit_coun,
                unit_count_type,
                item_type_name,
                recommanded_use,
                packageWeight,
                packageWeightUnit,
                productHeight,
                productHeightUnit,
                numberOfItem,
                handling_time
                 
            })


        } else {
            product = await productModel.create({
                seller_id,
                category_id,
                subcategory_id: subcategory_id && subcategory_id != "null" ? subcategory_id : null,
                childcategory_id: childcategory_id && childcategory_id != "null" ? childcategory_id : null,
                brand_id: brand_id ? brand_id : null,
                slug: slugify(product_name),
                product_name,
                // product_id,
                // product_id_type,
                product_description,
                key_feature: key_feature_array,
                search_keywords,
                target_gender,
                age_range,
                material,
                model_name,
                model_number,
                manufacture_part_number,
                safety_warning,
                country_of_origin,
                manufacturer_details,
                packer_details,
                importer_details,
                image_1: image_1_path,
                image_2: image_2_path,
                image_3: image_3_path,
                image_4: image_4_path,
                main_image: main_image_path, 

                currency,
                taxCode:taxCode || "",
                taxRate:taxRate || null,
                fulfillmentBy,
                shippingProvider,

                packageBreadth,
                product_length,
                product_length_unit,
                product_width,
                product_width_unit ,
                product_weight,
                product_weight_unit,
                packageLength,
                packageLengthUnit,
                packageWidth,
                packageWidthUnit,
                packageHeight,
                packageHeightUnit,
                color,
                size,
                style,
                pettern,
                unit_coun,
                unit_count_type,
                item_type_name,
                recommanded_use,
                packageWeight,
                packageWeightUnit,
                productHeight,
                productHeightUnit,
                numberOfItem,
                handling_time


            })
            
        }

        console.log({copy});
            if(copy == "Yes"){
                await copyVariantAndOtherDetails(existProduct._id, product._id, seller_id);
            }
            
        return responseFun(true, { data: product }, 200)

    } catch (error) {
        console.log(error);
        return responseFun(false, { data: error }, 200)
    }
}


async function copyVariantAndOtherDetails(oldProductId, newProductId, seller_id) {
     
    try {
        const OldProduct = await productModel.findById(oldProductId)
        if(OldProduct?.dynamicFields){ 
            const newProduct = await productModel.findById(newProductId) 
            newProduct.dynamicFields = OldProduct.dynamicFields
            await newProduct.save()
        }
        const oldVariants = await productVariantModel.find({
            product_id: new mongoose.Types.ObjectId(oldProductId)
        });

       
        if (oldVariants.length > 0) {
            await Promise.all(oldVariants.map(async (variant) => {
               
                for(let i = 0; i < imagePaths.length ; i++){
                    await copy
                }
                // Clone variant
                const newVariant = variant.toObject();
                delete newVariant._id;
                newVariant.product_id = newProductId;
                newVariant.seller_id = seller_id;
                newVariant.isProcessing = "Processing";
                
                // Create new variant
                const createdVariant = await productVariantModel.create(newVariant);
                   
                // Clone related threshold records
                const thresholds = await variantThresholdSchemaModal.find({ variant_id: variant._id });

                if (thresholds.length > 0) {
                    const newThresholds = thresholds.map((item) => {
                        const newItem = item.toObject();
                        delete newItem._id;
                        newItem.product_id = newProductId;
                        newItem.seller_id = seller_id;
                        newItem.variant_id = createdVariant._id;
                        return newItem;
                    });

                    await variantThresholdSchemaModal.insertMany(newThresholds);
                }
            }));
        }

       // Copy compliance details
        const oldCompliance = await productOtherDetailModel.findOne({
            product_id: new mongoose.Types.ObjectId(oldProductId)
        });

        
        if (oldCompliance) {
            const newCompliance = oldCompliance.toObject();
            delete newCompliance._id;
            delete newCompliance.createdAt;
            delete newCompliance.updatedAt;
            newCompliance.product_id = newProductId; 

            await productOtherDetailModel.create(newCompliance);
        }

        return true;
    } catch (error) {
        console.error("Error in copyVariantAndOtherDetails:", error);
        return false;
    }
}
