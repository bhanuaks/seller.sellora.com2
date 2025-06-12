import { responseFun } from "@/Http/helper";
import { productModel, productVariantModel } from "@/Http/Models/productModel";
import mongoose from "mongoose";
import { fetchVariant } from "../add-variant/route";
import { pipeline } from "nodemailer/lib/xoauth2";
import { errorProductModal } from "@/Http/Models/ErroreModal/erroreModel";


export async function GET(request) {
    
    const { searchParams } = new URL(request.url);
    const seller_id = searchParams.get('seller_id')
    const searchText = searchParams.get('searchText')
    const searchBy = searchParams.get('searchBy')
    const type = searchParams.get('type')

    const categoryId = searchParams.get('category')
    const brandIds = searchParams.getAll('brand')
    
    // const condition = searchParams.get('condition')
    // const listing_quantity = searchParams.get('listing_quantity')
    const min_price = searchParams.get('min_price') || 0
    const max_price = searchParams.get('max_price') || 1000000
    const variantsFilterType = searchParams.get('variants')

    let page = parseInt(searchParams.get('page')) || 1
    let pageSize = parseInt(searchParams.get('pageSize')) || 10
    const requestData = {seller_id, searchText, searchBy, type, page, pageSize, categoryId, brandIds, min_price, max_price, variantsFilterType};
    
    if(type == "Unpublished"){
        return  await unpublishedProduct(requestData);
    }else if(type == "Published"){
        return  await publishedProduct(requestData);
    }
    else if(type == "Drafts"){
        return  await DraftProduct(requestData);
    } 
    else if(type == "Processing"){
        return  await ProcessingProduct(requestData);
    } 
    
    const totalData = await countTotalProduct(requestData);

    if(!page){
        page=4
    }
    if(!pageSize){
        pageSize=10
    }
 
    const skip = (page - 1) * pageSize;
     
    try{
             
        const matchCondition = {
            seller_id: new mongoose.Types.ObjectId(seller_id),
            save_as_draft: { $ne: "1" }
        };

        if (categoryId) {
            matchCondition.category_id = new mongoose.Types.ObjectId(categoryId);
          }

          if (brandIds && brandIds.length > 0) {
            const mongBrandId = brandIds
              .filter(id => mongoose.Types.ObjectId.isValid(id))  
              .map(id => new mongoose.Types.ObjectId(id));         
          
            if (mongBrandId.length > 0) {
              matchCondition.brand_id = { $in: mongBrandId };
            }
          }
          
        
        
        if (searchText && typeof searchText === 'string' && searchBy=="title") {
            matchCondition.product_name = { $regex: searchText, $options: "i" };
        }

       

       
         
        const productListingResult = await productModel.aggregate([
            {
              $match: matchCondition
            },

            {
              $lookup:{
                from:"categories",
                localField:"category_id",
                foreignField:"_id",
                as:"category"
              }
            },
             {
              $lookup:{
                from:"brands",
                localField:"brand_id",
                foreignField:"_id",
                as:"brand"
              }
            },
            {
              $lookup: {
                from: "productvariants",
                let: { productId: "$_id" },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $and: [
                          { $eq: ["$product_id", "$$productId"] },
                          { $not: [{ $in: ["$listingStatus", [3, 4]] }] },
                          ...(min_price ? [{ $gte: ["$consumerSalePrice", parseFloat(min_price)] }] : []),
                          ...(max_price ? [{ $lte: ["$consumerSalePrice", parseFloat(max_price)] }] : []),
                        ],
                      },
                    },
                  },
                  ...(searchText && typeof searchText === "string" && searchBy === "SKU"
                    ? [
                        {
                          $match: {
                            sku: { $regex: searchText, $options: "i" },
                          },
                        },
                      ]
                    : []),
                ],
                as: "variants",
              },
            },
            {
              $addFields: {
                variantCount: { $size: "$variants" },
                category: { $arrayElemAt: ["$category", 0] },
                brand: { $arrayElemAt: ["$brand", 0] }
              },
            },
            ...(variantsFilterType === "multi"
              ? [{ $match: { variantCount: { $gte: 2 } } }]
              : []),
            ...(variantsFilterType === "single"
              ? [{ $match: { variantCount: 1 } }]
              : []),
          
            {
              $facet: {
                totalRecored: [
                  { $count: "count" }
                ],
                data: [
                  {
                    $unwind: {
                      path: "$variants",
                      preserveNullAndEmptyArrays: searchBy === "SKU" && searchText ? false : false,
                    },
                  },
                  {
                    $lookup: {
                      from: "variantthresholds",
                      localField: "variants._id",
                      foreignField: "variant_id",
                      as: "tresholdData",
                    },
                  },
                  { $sort: { createdAt: -1 } },
                  { $skip: skip },
                  { $limit: pageSize }
                ]
              }
            }
          ]);
          
          // Destructure the result
          const [{ totalRecored, data }] = productListingResult;
          const total = totalRecored[0]?.count || 0; 

    let pagination= {
        totalCount:total,
        page,
        pageSize, 
        totalPages: Math.ceil(total / pageSize),
    };
    
        return responseFun(true, {
            list:data, 
            pagination:pagination,
            totalData:totalData
        },200)

    }catch(error){
        console.log(error);
        return responseFun(false, {error:error},200)
    }
}

async function unpublishedProduct(requestData) {
    const totalData = await countTotalProduct(requestData)
    const {seller_id, searchText, searchBy, type, page, pageSize, categoryId, brandIds, min_price, max_price, variantsFilterType} = requestData;

    const skip = (page - 1) * pageSize;
   
    try{
            
        const query = {
            
        }

        const matchCondition = {
            seller_id: new mongoose.Types.ObjectId(seller_id)
        };


        if (categoryId) {
            matchCondition.category_id = new mongoose.Types.ObjectId(categoryId);
          }

          if (brandIds && brandIds.length > 0) {
            const mongBrandId = brandIds
              .filter(id => mongoose.Types.ObjectId.isValid(id))  
              .map(id => new mongoose.Types.ObjectId(id));         
          
            if (mongBrandId.length > 0) {
              matchCondition.brand_id = { $in: mongBrandId };
            }
          }

        
        
        if (searchText && typeof searchText === 'string' && searchBy=="title") {
            matchCondition.product_name = { $regex: searchText, $options: "i" };
        }

       
         
        const productListing = await productModel.aggregate([
            { $match: matchCondition },
          
             {
              $lookup:{
                from:"categories",
                localField:"category_id",
                foreignField:"_id",
                as:"category"
              }
            },
             {
              $lookup:{
                from:"brands",
                localField:"brand_id",
                foreignField:"_id",
                as:"brand"
              }
            },
            {
              $lookup: {
                from: "productvariants",
                let: { productId: "$_id" },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $and: [
                          { $eq: ["$product_id", "$$productId"] },
                          { $eq: ["$listingStatus", 0] },
                          { $eq: ["$isProcessing", "Approved"] },
                          ...(min_price ? [{ $gte: ["$consumerSalePrice", parseFloat(min_price)] }] : []),
                          ...(max_price ? [{ $lte: ["$consumerSalePrice", parseFloat(max_price)] }] : []),
                        ],
                      },
                    },
                  },
                  ...(searchText && typeof searchText === "string" && searchBy === "SKU"
                    ? [
                        {
                          $match: {
                            sku: { $regex: searchText, $options: "i" },
                          },
                        },
                      ]
                    : []),
                ],
                as: "variants",
              },
            },

            {
                $addFields: {
                  variantCount: { $size: "$variants" },
                   category: { $arrayElemAt: ["$category", 0] },
                brand: { $arrayElemAt: ["$brand", 0] }
                },
              },
              ...(variantsFilterType === "multi"
                ? [{ $match: { variantCount: { $gte: 2 } } }]
                : []),
              ...(variantsFilterType === "single"
                ? [{ $match: { variantCount: 1 } }]
                : []),

          
            // 🚨 Only keep products that have at least one variant
            {
              $match: {
                variants: { $ne: [] }
              }
            },
          
            {
                $facet: {
                  totalRecords: [
                    { $unwind: "$variants" },
                    { $count: "count" }
                  ],
                  data: [
                    { $unwind: "$variants" },
                    {
                      $lookup: {
                        from: "variantthresholds",
                        localField: "variants._id",
                        foreignField: "variant_id",
                        as: "tresholdData",
                      },
                    },
                    { $sort: { createdAt: -1 } },
                    { $skip: skip },
                    { $limit: pageSize },
                  ]
                }
              }
          ]);
       

     // Destructure the result
     const [{ totalRecords, data }] = productListing;
        const total = totalRecords[0]?.count || 0;
        
    let pagination= {
        totalCount:total,
        page,
        pageSize,
        // totalPages: 20,
        totalPages: Math.ceil(total / pageSize),
    };
    
        return responseFun(true, {
            list:data, 
            pagination:pagination,
            totalData:totalData
        },200)

    }catch(error){
        console.log(error);
        return responseFun(false, {error:error},200)
    }
    
}


async function publishedProduct(requestData) {
    
    const totalData = await countTotalProduct(requestData);
    const {seller_id, searchText, searchBy, page, pageSize,  categoryId, brandIds, min_price, max_price, variantsFilterType} = requestData;

    const skip = (page - 1) * pageSize;
    let totalCount =null;

    try{
            
       

        const matchCondition = {
            seller_id: new mongoose.Types.ObjectId(seller_id),
            save_as_draft: { $ne: "1" },
        };
        
        
        if (categoryId) {
            matchCondition.category_id = new mongoose.Types.ObjectId(categoryId);
          }

          if (brandIds && brandIds.length > 0) {
            const mongBrandId = brandIds
              .filter(id => mongoose.Types.ObjectId.isValid(id))  
              .map(id => new mongoose.Types.ObjectId(id));         
          
            if (mongBrandId.length > 0) {
              matchCondition.brand_id = { $in: mongBrandId };
            }
          }

        if (searchText && typeof searchText === 'string' && searchBy=="title") {
            matchCondition.product_name = { $regex: searchText, $options: "i" };
        }

        totalCount = totalData?.published || 0;
        // totalCount = await productVariantModel.countDocuments({
        //     $and:[
        //         {seller_id: new mongoose.Types.ObjectId(seller_id)},
        //         { listingStatus:1 }
        //     ]
        // });
         
        const productListing = await productModel.aggregate([
            {
                $match:matchCondition,
            },

             {
              $lookup:{
                from:"categories",
                localField:"category_id",
                foreignField:"_id",
                as:"category"
              }
            },
             {
              $lookup:{
                from:"brands",
                localField:"brand_id",
                foreignField:"_id",
                as:"brand"
              }
            },

            {
                $lookup:{
                    from:"productvariants",
                    let: {productId:"$_id"},
                    pipeline:[
                        {
                            $match:{
                                $expr:{
                                    $and:[
                                        { $eq: ["$product_id", "$$productId"] },
                                        { $eq: ["$listingStatus", 1] },
                                        { $eq: ["$isProcessing", "Approved"] }, 
                                        ...(min_price ? [{ $gte: ["$consumerSalePrice", parseFloat(min_price)] }] : []),
                                        ...(max_price ? [{ $lte: ["$consumerSalePrice", parseFloat(max_price)] }] : []),
                                    ]
                                }
                            }
                        },
                        // Search `sku` inside productvariants
                        ...(searchText && typeof searchText === "string" && searchBy === "SKU"
                            ? [
                                {
                                    $match: {
                                        sku: { $regex: searchText, $options: "i" }  
                                    }
                                }
                            ]
                            : [])

                    ], 
                    as:"variants"
                }
            },

            {
                $addFields: {
                  variantCount: { $size: "$variants" },
                   category: { $arrayElemAt: ["$category", 0] },
                brand: { $arrayElemAt: ["$brand", 0] }
                },
              },
              ...(variantsFilterType === "multi"
                ? [{ $match: { variantCount: { $gte: 2 } } }]
                : []),
              ...(variantsFilterType === "single"
                ? [{ $match: { variantCount: 1 } }]
                : []),



            {
                $facet: {
                  totalRecords: [
                    { $unwind: "$variants" },
                    { $count: "count" }
                  ],
                  data: [
                    { $unwind: "$variants" },
                    {
                      $lookup: {
                        from: "variantthresholds",
                        localField: "variants._id",
                        foreignField: "variant_id",
                        as: "tresholdData",
                      },
                    },
                    { $sort: { createdAt: -1 } },
                    { $skip: skip },
                    { $limit: pageSize },
                  ]
                }
              }
            
    ]) 
       
    // Destructure the result
    const [{ totalRecords, data }] = productListing;
    const total = totalRecords[0]?.count || 0;
    
    let pagination= {
        totalCount:total,
        page,
        pageSize,
        // totalPages: 20,
        totalPages: Math.ceil(total / pageSize),
    };

        return responseFun(true, {
            list:data, 
            pagination:pagination,
            totalData:totalData
        },200)

    }catch(error){
        console.log(error);
        return responseFun(false, {error:error},200)
    }
    
}




async function DraftProduct(requestData) {
    const totalData = await countTotalProduct(requestData)
    const {seller_id, searchText, searchBy, page, pageSize, categoryId, brandIds, min_price, max_price, variantsFilterType} = requestData;

    const skip = (page - 1) * pageSize;
    let totalCount =null;

    try{
            
      

        const matchCondition = {
            seller_id: new mongoose.Types.ObjectId(seller_id),
            save_as_draft:"1"
        };
        

        if (categoryId) {
            matchCondition.category_id = new mongoose.Types.ObjectId(categoryId);
          }

          if (brandIds && brandIds.length > 0) {
            const mongBrandId = brandIds
              .filter(id => mongoose.Types.ObjectId.isValid(id))  
              .map(id => new mongoose.Types.ObjectId(id));         
          
            if (mongBrandId.length > 0) {
              matchCondition.brand_id = { $in: mongBrandId };
            }
          }
        
        if (searchText && typeof searchText === 'string' && searchBy=="title") {
            matchCondition.product_name = { $regex: searchText, $options: "i" };
        }
        totalCount = totalData?.drafts || 0;
       
         
        const productListing = await productModel.aggregate([
            {
                $match: matchCondition
            },
             {
              $lookup:{
                from:"categories",
                localField:"category_id",
                foreignField:"_id",
                as:"category"
              }
            },
             {
              $lookup:{
                from:"brands",
                localField:"brand_id",
                foreignField:"_id",
                as:"brand"
              }
            },

            {
                $lookup:{
                    from:"productvariants",
                    let: {productId:"$_id"},
                    pipeline:[
                        {
                            $match:{
                                $expr:{
                                    $and:[
                                        { $eq: ["$product_id", "$$productId"] },
                                        { $not: [{ $in: ["$listingStatus", [3, 4]] }] },
                                        ...(min_price ? [{ $gte: ["$consumerSalePrice", parseFloat(min_price)] }] : []),
                                        ...(max_price ? [{ $lte: ["$consumerSalePrice", parseFloat(max_price)] }] : []),
                                    ]
                                }
                            }
                        },
                        // Search `sku` inside productvariants
                        ...(searchText && typeof searchText === "string" && searchBy === "SKU"
                            ? [
                                {
                                    $match: {
                                        sku: { $regex: searchText, $options: "i" }  
                                    }
                                }
                            ]
                            : [])

                    ],
                    
                    as:"variants"
                }
            },
            {
                $unwind:{
                    path: "$variants",
                    preserveNullAndEmptyArrays:searchBy === "SKU" && searchText ?false:true
                }
            },

             {
                $addFields: { 
                   category: { $arrayElemAt: ["$category", 0] },
                brand: { $arrayElemAt: ["$brand", 0] }
                },
              },
            {
                $lookup:{
                    from:"variantthresholds",
                    localField:"variants._id",
                    foreignField:"variant_id",
                    as:"tresholdData"
                }
            }, 
            {
                $sort: { createdAt: -1 }
            },

            {
                $skip: skip
            },
            {
                $limit: pageSize
            }
           
         
        ]);
       
    let pagination= {
        totalCount,
        page,
        pageSize,
        // totalPages: 20,
        totalPages: Math.ceil(totalCount / pageSize),
    };
    
   
        return responseFun(true, {
            list:productListing, 
            pagination:pagination,
            totalData:totalData, 
        },200)

    }catch(error){
        console.log(error);
        return responseFun(false, {error:error},200)
    }
    
}

export async function countTotalProduct(requestData){ 
    const {seller_id, searchText, searchBy, page, pageSize} = requestData;

    const matchCondition = {
        seller_id: new mongoose.Types.ObjectId(seller_id),
        save_as_draft: "1"
    };
    
    
    if (searchText && typeof searchText === 'string' && searchBy=="title") {
        matchCondition.product_name = { $regex: searchText, $options: "i" };
    }

 

   const published =  await productVariantModel.countDocuments({
                    $and:[
                        {seller_id: new mongoose.Types.ObjectId(seller_id)},
                        { listingStatus:1 }, 
                        { isProcessing:"Approved"},
                    ]
                });

     const unpublished =  await productVariantModel.countDocuments({
                    $and:[
                        {seller_id: new mongoose.Types.ObjectId(seller_id)},
                        { listingStatus:0 },
                        { isProcessing:"Approved"},
                    ]
                })

    //  const draftTotal =  await productModel.aggregate([
    //     {
    //         $match: matchCondition
    //     },
    //     {
    //         $lookup: {
    //             from: "productvariants",
    //             let: { productId: "$_id" },
    //             pipeline: [
    //                 {
    //                     $match: {
    //                         $expr: {
    //                             $and: [
    //                                 { $eq: ["$product_id", "$$productId"] },
    //                                 { $eq: ["$listingStatus", 1] }
    //                             ]
    //                         }
    //                     }
    //                 },
                  
    //             ],
    //             as: "variants"
    //         }
    //     },
    //     {
    //         $match: {
    //             variants: { $size: 0 }  // Only products where productvariants do not exist
    //         }
    //     },
       
    //     {
    //         $sort: {
    //             createdAt: -1
    //         }
    //     }
    // ]);






                
    const totalDraftCount =  await productModel.countDocuments(matchCondition)
    const errorProducts =  await errorProductModal.countDocuments({seller_id: new mongoose.Types.ObjectId(seller_id)})
    
    const  processing = await productVariantModel.countDocuments({
        $and:[
            {seller_id: new mongoose.Types.ObjectId(seller_id)},
            { listingStatus:1 }, 
            { isProcessing:"Processing"}, 
        ]
    })
    const result = await productModel.aggregate([
        {
          $match: {
            seller_id: new mongoose.Types.ObjectId(seller_id),
            save_as_draft: "0"
          }
        },
        {
          $lookup: {
            from: "productvariants",
            let: { productId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$product_id", "$$productId"] },
                      { $eq: ["$listingStatus", 1] },
                      { $eq: ["$isProcessing", "Processing"] }
                    ]
                  }
                }
              }
            ],
            as: "variants"
          }
        },
        {
          $match: {
            "variants.0": { $exists: true } // only include products with at least 1 matching variant
          }
        },
        {
          $count: "totalProcessing"
        }
      ]);
      
      const totalProcessing = result[0]?.totalProcessing || 0;
        // const totalDraftCount = draftTotal?.length || 0 ;
                
    const totalData = {
        published,
        unpublished,
        processing:totalProcessing,
        errors:errorProducts,
        drafts:totalDraftCount,
        
    };
    return totalData

}



    
async function ProcessingProduct(requestData) {
    
    const totalData = await countTotalProduct(requestData);
    const {seller_id, searchText, searchBy, page, pageSize, categoryId, brandIds, min_price, max_price, variantsFilterType} = requestData;

    const skip = (page - 1) * pageSize;
    let totalCount =null;

    try{
             
        const matchCondition = {
            seller_id: new mongoose.Types.ObjectId(seller_id),
            save_as_draft: { $ne: "1" },
        };
         
        if (categoryId) {
            matchCondition.category_id = new mongoose.Types.ObjectId(categoryId);
          }

          if (brandIds && brandIds.length > 0) {
            const mongBrandId = brandIds
              .filter(id => mongoose.Types.ObjectId.isValid(id))  
              .map(id => new mongoose.Types.ObjectId(id));         
          
            if (mongBrandId.length > 0) {
              matchCondition.brand_id = { $in: mongBrandId };
            }
          }


        if (searchText && typeof searchText === 'string' && searchBy=="title") {
            matchCondition.product_name = { $regex: searchText, $options: "i" };
        }

        totalCount = totalData?.published || 0;
        
         
        const productListing = await productModel.aggregate([
            {
                $match:matchCondition,
            },

             {
              $lookup:{
                from:"categories",
                localField:"category_id",
                foreignField:"_id",
                as:"category"
              }
            },
             {
              $lookup:{
                from:"brands",
                localField:"brand_id",
                foreignField:"_id",
                as:"brand"
              }
            },

            {
                $lookup:{
                    from:"productvariants",
                    let: {productId:"$_id"},
                    pipeline:[
                        {
                            $match:{
                                $expr:{
                                    $and:[
                                        { $eq: ["$product_id", "$$productId"] },
                                        { $eq: ["$listingStatus", 1] },
                                        { $eq: ["$isProcessing", "Processing"] }, 
                                        ...(min_price ? [{ $gte: ["$consumerSalePrice", parseFloat(min_price)] }] : []),
                                        ...(max_price ? [{ $lte: ["$consumerSalePrice", parseFloat(max_price)] }] : []),
                                    ]
                                }
                            }
                        },
                        // Search `sku` inside productvariants
                        ...(searchText && typeof searchText === "string" && searchBy === "SKU"
                            ? [
                                {
                                    $match: {
                                        sku: { $regex: searchText, $options: "i" }  
                                    }
                                }
                            ]
                            : [])

                    ],
                    
                    as:"variants"
                }
            },

            {
                $addFields: {
                  variantCount: { $size: "$variants" },
                   category: { $arrayElemAt: ["$category", 0] },
                brand: { $arrayElemAt: ["$brand", 0] }
                },
              },
              ...(variantsFilterType === "multi"
                ? [{ $match: { variantCount: { $gte: 2 } } }]
                : []),
              ...(variantsFilterType === "single"
                ? [{ $match: { variantCount: 1 } }]
                : []),


             {
                $facet: {
                  totalRecords: [
                    { $unwind: "$variants" },
                    { $count: "count" }
                  ],
                  data: [
                    { $unwind: "$variants" },
                    {
                      $lookup: {
                        from: "variantthresholds",
                        localField: "variants._id",
                        foreignField: "variant_id",
                        as: "tresholdData",
                      },
                    },
                    { $sort: { createdAt: -1 } },
                    { $skip: skip },
                    { $limit: pageSize },
                  ]
                }
              }
            
    ]) 
    // Destructure the result
    const [{ totalRecords, data }] = productListing;
    const total = totalRecords[0]?.count || 0;
    
    let pagination= {
        totalCount:total,
        page,
        pageSize,
        // totalPages: 20,
        totalPages: Math.ceil(total / pageSize),
    };

        return responseFun(true, {
            list:data, 
            pagination:pagination,
            totalData:totalData
        },200)

    }catch(error){
        console.log(error);
        return responseFun(false, {error:error},200)
    }
    
}



export async function POST(request) {
    
    try{
  return responseFun(false, "", 500)
    }catch(error){
        console.log(error);
        return responseFun(false, "", 500)
    }
}