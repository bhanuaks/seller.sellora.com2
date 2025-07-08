import { responseFun } from "@/Http/helper"; 
import mongoose from "mongoose";
import { getLoginSeller } from "@/app/api/getLoginUser/route"; 
import { productModel } from "@/Http/Models/productModel"; 
import { connectDb } from "@/Http/dbConnect2";

 

export async function POST(request) {
await connectDb();

  const body = await request.json();
  const page = parseInt(body.page) || 1;
  const limit = parseInt(body.limit) || 20;
  const searchText = body.searchText || "";
  const searchBy = body.searchBy || "";
  const status = body.status || "";
  const skip = (page - 1) * limit;
  
   const seller = await getLoginSeller();
  if (!seller) {
    return responseFun(false, { message: "unauthorized user" }, 403);
  }
  const seller_id = seller._id;

  const productQuery = {
    seller_id: new mongoose.Types.ObjectId(seller_id),
        //   save_as_draft: "0", 
  }

  if(searchText && searchBy == "title"){
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
                    // { $eq: ["$isProcessing", "Approved"] },
                     ...(searchText && searchBy === "sku"
                      ? [
                          {
                            $regexMatch: {
                              input: "$sku",
                              regex: searchText,
                              options: "i",
                            },
                          },
                        ]
                      : []),

                        ...(searchText && searchBy === "sin"
                      ? [
                          {
                            $regexMatch: {
                              input: "$sin",
                              regex: searchText,
                              options: "i",
                            },
                          },
                        ]
                      : []),

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
        from: "productotherdetails",
        localField: "_id",
        foreignField: "product_id",
        as: "compliance" 
      }
    },
    {
      $unwind: {
        path: "$compliance",
        preserveNullAndEmptyArrays: true // optional: to keep documents even if no match found
      }
    }

    ]

   
 
       pipeline.push({
          $sort:{
            "variant.createdAt" : -1
          }
        })
    
        // pipeline.push(
        //     { $skip: skip },
        //     { $limit: limit },
        // )

       pipeline.push(
      //   {
      //   $project: {
         

      //     _id: 1,
      //     product_name: 1,
      //     main_image: 1,
      //     variant: {
      //       _id: "$variant._id",
      //       sku: "$variant.sku",
      //       sin: "$variant.sin",
      //       msrp: "$variant.msrp",
      //       consumerSalePrice: "$variant.consumerSalePrice",
      //       businessSalePrice: "$variant.businessSalePrice",
      //       currency: "$variant.currency",
      //       stock: "$variant.stock",
      //       customAttributes: "$variant.customAttributes",
      //       withImage: "$variant.withImage",
      //       image_1: "$variant.image_1",
      //       image_1: "$variant.image_1",
      //     },
      //   },
      // },
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
