import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { main_large_img_path, product_large_img_path1, product_large_img_path2, product_large_img_path3, product_large_img_path4, product_large_img_path5, product_large_img_path6, product_large_img_path7, responseFun, variant_large_img_path1, variant_large_img_path2, variant_large_img_path3, variant_large_img_path4, variant_large_img_path5, variant_large_img_path6, variant_large_img_path7 } from "@/Http/helper";
import { productVariantModel } from "@/Http/Models/productModel";
import { fileBasePath } from "@/Http/urlHelper";
import mongoose from "mongoose";
import { Category, productDynamicFieldModel } from "../../../../../../lib/categoryModel";
import { connectDb } from "@/Http/dbConnect2";


export async function POST(request) {
    await connectDb()
    const { listing, category_id} = await request.json();

    try{
       
        // const categoryData = await Category.findById(category_id).select("_id name slug category_variant dynamicField")
        //  const dynamicField = await productDynamicFieldModel.find({ category_id: categoryData._id });
        // const category = {
        // ...categoryData.toObject(),
        // dynamicField: dynamicField
        // };

        const seller = await getLoginSeller();
        if(!seller){
            return responseFun(false, {message:"unauthorized request"}, 403)
        }
        if(listing.length == 0){
        return responseFun(false, {message:"Please select aleast one products for download."}, 402)
        }

        const productList = [];
        let list = [];
        for(const {product_id, variant_id} of listing){
            const queryData = {
                product_id: new mongoose.Types.ObjectId(product_id),
                _id: new mongoose.Types.ObjectId(variant_id), 
                seller_id: new mongoose.Types.ObjectId(seller._id), 
            }

            const product = await productVariantModel.aggregate([
                {
                    $match:queryData
                },
                {
                    $lookup:{
                        from:"products",
                        let:{produdtId : "$product_id"},
                        pipeline:[
                            {
                                $match:{
                                    $expr:{
                                        $and:[
                                            {$eq:["$_id", "$$produdtId"]}
                                        ]
                                    }
                                }
                            },

                        // ================= category ==================
                            {
                                $lookup:{
                                    from:"categories",
                                    let:{categoryId : "$category_id"},
                                    pipeline:[
                                        {
                                            $match:{
                                                $expr:{
                                                    $and:[
                                                        {$eq:["$_id", "$$categoryId"]}
                                                    ]
                                                }
                                            }
                                        },
                                        {
                                            $project:{
                                                _id:1,
                                                name:1
                                            }
                                        },
                                    ],
                                    as:"category"
                                }
                            },
                           {
                                $addFields: {
                                category: { $arrayElemAt: ["$category", 0] }
                                }
                            },

                    // =================sub category ==================
                             {
                                $lookup:{
                                    from:"subcategories",
                                    let:{subcategoryId : "$subcategory_id"},
                                    pipeline:[
                                        {
                                            $match:{
                                                $expr:{
                                                    $and:[
                                                        {$eq:["$_id", "$$subcategoryId"]}
                                                    ]
                                                }
                                            }
                                        },
                                        {
                                            $project:{
                                                _id:1,
                                                subCategoryName:1
                                            }
                                        },
                                    ],
                                    as:"subcategory"
                                }
                            },
                           {
                                $addFields: {
                                subcategory: { $arrayElemAt: ["$subcategory", 0] }
                                }
                            },

                           
                             // ================= Child category ==================
                             {
                                $lookup:{
                                    from:"childcategories",
                                    let:{childcategoryId : "$childcategory_id"},
                                    pipeline:[
                                        {
                                            $match:{
                                                $expr:{
                                                    $and:[
                                                        {$eq:["$_id", "$$childcategoryId"]}
                                                    ]
                                                }
                                            }
                                        },
                                        {
                                            $project:{
                                                _id:1,
                                                childCategoryName:1
                                            }
                                        },
                                    ],
                                    as:"childcategory"
                                }
                            },
                           {
                                $addFields: {
                                childcategory: { $arrayElemAt: ["$childcategory", 0] }
                                }
                            },

                             // ================= Brand ==================
                             {
                                $lookup:{
                                    from:"brands",
                                    let:{brandId : "$brand_id"},
                                    pipeline:[
                                        {
                                            $match:{
                                                $expr:{
                                                    $and:[
                                                        {$eq:["$_id", "$$brandId"]}
                                                    ]
                                                }
                                            }
                                        },
                                        {
                                            $project:{
                                                _id:1,
                                                name:1
                                            }
                                        },
                                    ],
                                    as:"brand"
                                }
                            },
                           {
                                $addFields: {
                                brand: { $arrayElemAt: ["$brand", 0] }
                                }
                            },


                            

                            
                        ],
                        as:"product"
                    }
                },
                {
                    $unwind:{
                        path:"$product",
                        preserveNullAndEmptyArrays:false
                    }
                },
                {
                    $lookup:{
                        from:"variantthresholds",
                        let : { variantId : "$_id" },
                        pipeline:[
                            {
                                $match:{
                                    $expr:{
                                        $and:[
                                            {$eq: ["$variant_id", "$$variantId"]}
                                        ]
                                    }
                                }
                            },
                            {
                                $sort:{
                                    unit:1
                                }
                            }
                        ],
                        as:"threshold"
                    }
                },

                    {
                    $lookup:{
                        from:"productotherdetails",
                        localField:"product_id",
                        foreignField:"product_id",
                        as:"complance"
                    }
                },
                {
                    $unwind:{
                        path:"$complance",
                        preserveNullAndEmptyArrays:true
                    }
                },


                 {
                    $addFields: {
                    "product.complance": "$complance",
                    "product.hasVariant": "$product.variant",
                    "product.threshold": "$threshold",
                    "product.variant": {
                        _id: "$_id",
                        product_id: "$product_id",
                        sku: "$sku",  
                        sin: "$sin",       
                        listingStatus: "$listingStatus",   
                        isProcessing: "$isProcessing",   
                        msrp: "$msrp",   
                        consumerSalePrice: "$consumerSalePrice",   
                        businessSalePrice: "$businessSalePrice",   
                        currency: "$currency",   
                        fulfillmentBy: "$fulfillmentBy",   
                        stock: "$stock",   
                        customAttributes: "$customAttributes",   
                        discount_type: "$discount_type",   
                        withImage: "$withImage",   
                        image_1: "$image_1",   
                        image_2: "$image_2",   
                        image_3: "$image_3",   
                        image_4: "$image_4",   
                        image_5: "$image_5",   
                        image_6: "$image_6",   
                        image_7: "$image_7",   
                        stock_status: "$stock_status",   
                        conditionType: "$conditionType",   
                        createdAt: "$createdAt",   
                        updatedAt: "$updatedAt",   
                        updatedAt: "$updatedAt",   
                    }
                    }
                },
                {
                    $replaceRoot:{
                        newRoot:"$product"
                    }
                }

            ]);

            if(product.length>0){ 
                productList.push(product[0])
            }

         list =  productList.map((item)=>{
                
            let status = "Active";
            if(item.variant.listingStatus == 1){
                status = "Active";
            }else if(item.variant.listingStatus == 0){
                status = "Deactive";
            }else if(item.variant.listingStatus == 3){
                status = "Archive";
            }else if(item.variant.listingStatus == 4){
                status = "Delete";
            }

                const returnData = {
                    "Dyanamic Product Id"               : item._id,
                    "Dyanamic Variant Id"               : item.variant._id,
                    "Category"                          :  item.category?.name,
                    "Sub Category"                      :  item.subcategory?.subCategoryName,
                    "Child Category"                    :  item.childcategory?.childCategoryName,
                    "Brand Name"                        :  item.brand?.name,

                    "Product Name"                      :  item.product_name,
                    "Product Description"               :  item.product_description,
                    "Key Features 1"                    :  item.key_feature.length >0 ? item.key_feature[0]:"",
                    "Key Features 2"                    :  item.key_feature.length >1 ? item.key_feature[1]:"",
                    "Key Features 3"                    :  item.key_feature.length >2 ? item.key_feature[2]:"",
                    "Key Features 4"                    :  item.key_feature.length >3 ? item.key_feature[3]:"",
                    "Key Features 5"                    :  item.key_feature.length >4 ? item.key_feature[4]:"",
                    "Search Keywords"                   :  item.search_keywords,
                    "Target Gender"                     :  item.target_gender,
                    "Age Range Description"             :  item.age_range,
                    "Product Color"                     :  item.color,
                    "Product Size"                      :  item.size,
                    "Number Of Item"                    :  item.numberOfItem,
                    "Material"                          :  item.material,
                    "Product Style"                     :  item.style,
                    "Pattern"                           :  item.pettern,
                    "Unit Count"                        :  item.unit_coun,
                    "Unit Count Type"                   :  item.unit_count_type,
                    "Item Type Name"                    :  item.item_type_name,
                    "Recommended Use"                   :  item.recommanded_use,
                    "Model Name"                        :  item.model_name,
                    "Model Number"                      :  item.model_number,
                    "Manufacture Part Number"           :  item.manufacture_part_number,
                    "Country Of Origin"                 :  item.country_of_origin,
                    "Manufacturer"                      :  item.manufacturer_details,

                    "Packer Contact Information"        :  item.packer_details,
                    "Importer Details"                  :  item.importer_details,
                    "Tax Code"                          :  item.taxCode,
                    "Tax Rate"                          :  item.taxRate,
                    "Fullfilment By"                    :  item.fulfillmentBy,
                    "Shipping Provider"                 :  item.shippingProvider,

                    "Product Length"                    :  item.product_length,
                    "Product Length Unit"               :  item.product_length_unit,

                    "Product Width"                     :  item.product_width,
                    "Product Width Unit"                :  item.product_width_unit,

                    "Product Height"                    :  item.productHeight,
                    "Product Height Unit"               :  item.productHeightUnit,

                    "Product Weight"                    :  item.product_weight,
                    "Product Weight Unit"               :  item.product_weight_unit,

                    "Package Length"                    :  item.packageLength,
                    "Package Length Unit"               :  item.packageLengthUnit,

                    "Package Width"                     :  item.packageWidth,
                    "Package Width Unit"                :  item.packageWidthUnit,

                    "Package Height"                    :  item.packageHeight,
                    "Package Height Unit"               :  item.packageHeightUnit,

                    "Package Weight"                    :  item.packageWeight,
                    "Package Weight Unit"               :  item.packageWeightUnit,

                    "Main Image"                        :  `${fileBasePath}/${main_large_img_path}/${item.main_image}`,

                    "Image_1"                           :  item.image_1? `${fileBasePath}/${product_large_img_path1}/${item.image_1}` : "",
                    "Image_2"                           :  item.image_2? `${fileBasePath}/${product_large_img_path2}/${item.image_2}` : "",
                    "Image_3"                           :  item.image_3? `${fileBasePath}/${product_large_img_path3}/${item.image_3}` : "",
                    "Image_4"                           :  item.image_4? `${fileBasePath}/${product_large_img_path4}/${item.image_4}` : "",
                    "Image_5"                           :  item.image_5? `${fileBasePath}/${product_large_img_path5}/${item.image_5}` : "",
                    "Image_6"                           :  item.image_6? `${fileBasePath}/${product_large_img_path6}/${item.image_6}` : "",
                    "Image_7"                           :  item.image_7? `${fileBasePath}/${product_large_img_path7}/${item.image_7}` : "",

                    // variant  data
                    "Variant"                           : item.hasVariant,
                    "Choose Variant"                    : item.variant.customAttributes ? Object.keys(item.variant.customAttributes).join(" and ") : "",
                    "Group Id"                          : item.groupId,
                    "Product Id"                        : item.variant.manual_product_id,
                    "Product Id Type"                   : item.variant.manual_product_id_type,
                    "SKU"                               : item.variant.sku,
                    "Listing Status"                    : status,
                    "MSRP"                              : item.variant.msrp,
                    "Consumer Sale Price"               : item.variant.consumerSalePrice,
                    "Business Sale Price"               : item.variant.businessSalePrice,
                    "Stock"                             : item.variant.stock,
                    "Currency"                          : item.variant.currency,

                    "Condition Type"                    : item.variant.conditionType,
                    "Expire Date"                       : item.variant.expireDate, 
                    "Variant Image"                     : item.variant.withImage,

                    "variant_image_1"                   : item.variant.image_1?`${fileBasePath}/${variant_large_img_path1}/${item.variant.image_1}` : "",
                    "variant_image_2"                   : item.variant.image_2?`${fileBasePath}/${variant_large_img_path2}/${item.variant.image_2}` : "",
                    "variant_image_3"                   : item.variant.image_3?`${fileBasePath}/${variant_large_img_path3}/${item.variant.image_3}` : "",
                    "variant_image_4"                   : item.variant.image_4?`${fileBasePath}/${variant_large_img_path4}/${item.variant.image_4}` : "",
                    "variant_image_5"                   : item.variant.image_5?`${fileBasePath}/${variant_large_img_path5}/${item.variant.image_5}` : "",
                    "variant_image_6"                   : item.variant.image_6?`${fileBasePath}/${variant_large_img_path6}/${item.variant.image_6}` : "",
                    "variant_image_7"                   : item.variant.image_7?`${fileBasePath}/${variant_large_img_path7}/${item.variant.image_7}` : "",


                    // Complance field

                    "Contains Liquid Contents"                         : item.complance.containsLiquidContents,
                    "Liquid Volume"                                     : item.complance.liquidVolume,
                    "Liquid Volume Unit"                                : item.complance.liquidVolumeUnit,

                    "Is The Item Heat Sensitive"                        : item.complance.isTheItemHeaSensitive,
                    "Heat Sensitive Instructions"                       : item.complance.isTheItemHeaSensitiveInstructions,
                    "Is The Liquid Product Double Sealed"               : item.complance.isTheLiquidProductDoubleSealed,
                    "Product Double Sealed Instructions"                : item.complance.isTheLiquidProductDoubleSealedInstructions,

                    "Dangerous Goods Regulations"                       : item.complance.dangerousGoodsRegulations,
                    "Safety Warning"                                    : item.complance.safetyWarning,
                    "Has Written Warranty"                              : item.complance.hasWrittenWarranty,
                    "Product Is Or Contains An Electronic Component"    : item.complance.ProductIsOrContainsAnElectronicComponent,
                    "Product Is Or Contains This Battery Type"          : item.complance.productIsOrContainsThisBatteryType,
                    "Are Batteries Included"                            : item.complance.areBatteriesIncluded,
                    "Battery Cell Composition"                          : item.complance.batteryCellComposition,

                    "Quantity Base Discount Type"                       : item.variant.discount_type,
                    "Handling Time"                                     : item.handling_time || ""

                }
                
                if(item.threshold.length > 0){
                        item.threshold.forEach((thresholdData, index)=>{
                            returnData[`Threshold Level ${index+1} Unit`] = thresholdData.unit;
                            returnData[`Threshold Level ${index+1} Discount`] = thresholdData.discount;
                        })
                }
               
                if(item.variant.customAttributes && Object.keys(item.variant.customAttributes).length > 0){
                     Object.keys(item.variant.customAttributes).forEach((variantKey) => {
                            returnData[variantKey] = item.variant.customAttributes[variantKey];
                        });
                }

                 if(item.dynamicFields && Object.keys(item.dynamicFields).length > 0){
                     item.dynamicFields.forEach((dataItem) => {
                        
                        if(dataItem.field_name && dataItem.field_value){ 
                            returnData[dataItem.field_name] =  dataItem.field_value;
                        }
                        });
                }
                return returnData;
            })
        }
        return responseFun(true, {list}, 200)
    }catch(error){
        console.log(error);
        return responseFun(false, {message:error.message}, 500)
    }
}