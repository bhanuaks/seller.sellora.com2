import { responseFun } from "@/Http/helper"; 
import mongoose from "mongoose";
import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { connectDb } from "../../../../../../lib/dbConnect";
import { productModel } from "@/Http/Models/productModel";

 

export async function POST(request) {
await connectDb();

  const body = await request.json();
  const page = parseInt(body.page) || 1;
  const limit = parseInt(body.limit) || 20;
  const searchText = body.searchText || "";
  const status = body.status || "";
  const skip = (page - 1) * limit;
  
   const seller = await getLoginSeller();
  if (!seller) {
    return responseFun(false, { message: "unauthorized user" }, 403);
  }
  const seller_id = seller._id;

  const productQuery = {
    seller_id: new mongoose.Types.ObjectId(seller_id),
          save_as_draft: "0", 
  }

  if(searchText){
    productQuery.product_name = { $regex: searchText, $options: "i" };
  }

  try {

    const pipeline = [
      {
        $match:productQuery
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
                    { $eq: ["$isProcessing", "Approved"] },
                  ],
                },
              },
            },
          ],
          as: "variant",
        },
      },

      {
        $unwind: {
          path: "$variant",
          preserveNullAndEmptyArrays: false,
        },
      },
      {
        $lookup: {
          from: "orderproducts",
          let: {
            productId: "$_id",
            variantId: "$variant._id",
            // reportDay: reportDay,
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$product_id", "$$productId"] },
                    { $eq: ["$variant_id", "$$variantId"] },
                    // { $gte: ["$createdAt", "$$reportDay"] }
                  ],
                },
              },
            }, 
            {
              $group: {
                _id: null,
                grossSale: { $sum: "$price" },
                grossUnit: { $sum: "$quantity" },
                
              },
            },
          ],
          as: "orderStats",
        },
      },
      {
        $lookup:{
            from:"productclicks",
           let: {
                productId: "$_id",
                variantId: "$variant._id", 
            },
             pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$product_id", "$$productId"] }, 
                    { $eq: ["$variant_id", "$$variantId"] }, 
                  ],
                },
              },
            },
          ],
          as: "clicks", 
        }
      },

      {
        $lookup:{
            from:"productviews",
           let: {
                productId: "$_id",
                variantId: "$variant._id", 
            },
             pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$product_id", "$$productId"] }, 
                    { $eq: ["$variant_id", "$$variantId"] }, 
                  ],
                },
              },
            },
          ],
          as: "views", 
        }
      },

      {
        $lookup:{
            from:"carts",
           let: {
                productId: "$_id",
                variantId: "$variant._id", 
            },
             pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$product_id", "$$productId"] }, 
                    { $eq: ["$variant_id", "$$variantId"] }, 
                  ],
                },
              },
            },
          ],
          as: "carts", 
        }
      },


      {
            $lookup: {
                from: "productviews",
                let: {
                productId: "$_id",
                variantId: "$variant._id"
                },
                 let: {
                productId: "$_id",
                variantId: "$variant._id", 
            }, 
                pipeline: [
                {
                    $match: {
                    $expr: {
                        $and: [
                        { $eq: ["$product_id", "$$productId"] },
                        { $eq: ["$variant_id", "$$variantId"] }
                        ]
                    }
                    }
                },
                {
                    $project: {
                    keyword: 1
                    }
                },
                {
                    $group: {
                    _id: null,
                     keywords: { $addToSet: "$keyword" }
                    }
                }
                ],
                as: "keywords"
            }
            },


      {
        $addFields: { 
          carts:{ $size : "$carts"},
          clicks:{ $size : "$clicks"},
          views:{ $size : "$views"}, 
        
          grossSale: {
            $ifNull: [{ $arrayElemAt: ["$orderStats.grossSale", 0] }, 0],
          },
          grossUnit: {
            $ifNull: [{ $arrayElemAt: ["$orderStats.grossUnit", 0] }, 0],
          }, 
        },
      },
    ]

   if (status === "Non") {
      pipeline.push({
        $match: {
          orderStats: { $eq: [] }
        }
      });
    }else if(status == "Top"){
      pipeline.push({
        $match: {
          orderStats: { $not: { $size: 0 } }
        }
      });
    }

     if(status == "New"){
        pipeline.push({
        $sort:{
          createdAt:-1
        }
      })
    }else{
       pipeline.push({
          $sort:{
            grossUnit:-1
          }
        })
    }
    

       pipeline.push({
        $project: {
            carts:1,
            clicks:1,
            views:1, 
          grossSale: 1,
          grossUnit: 1, 
            searchingkeywords:{$arrayElemAt : ["$keywords", 0]},

          _id: 1,
          product_name: 1,
          main_image: 1,
          variant: {
            _id: "$variant._id",
            sku: "$variant.sku",
            sin: "$variant.sin",
            msrp: "$variant.msrp",
            consumerSalePrice: "$variant.consumerSalePrice",
            businessSalePrice: "$variant.businessSalePrice",
            currency: "$variant.currency",
            stock: "$variant.stock",
            customAttributes: "$variant.customAttributes",
            withImage: "$variant.withImage",
            image_1: "$variant.image_1",
            image_1: "$variant.image_1",
          },
        },
      },
       {
        $facet: {
          data: [
            { $skip: skip },
            { $limit: limit },
          ],
          totalCount: [
            { $count: "count" },
          ],
        },
      },

    )
    const product = await productModel.aggregate(pipeline);


    const total = product[0]?.totalCount[0]?.count || 0;
    const productData = product[0]?.data || [];
  const pagination = {
      totalCount:total,
      page:page,
      pageSize:limit,
      totalPages: Math.ceil(total / limit),
    }
    return responseFun(
      true,
      {
         product:productData , pagination
      },
      200
    );
  } catch (error) {
    console.log(error);
   return responseFun(
      false,
      {
         message:error.message
      },
      500
    );
  }
}
