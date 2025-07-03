import { responseFun } from "@/Http/helper";
import mongoose from "mongoose";
import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { connectDb } from "../../../../../../lib/dbConnect";
import { productModel } from "@/Http/Models/productModel";

export async function POST(request) {
  connectDb();

  
  const body = await request.json();
  const page = parseInt(body.page) || 1;
  const limit = parseInt(body.limit) || 20;
  const reportDay = parseInt(body.filter) || 7;
  const searchText = body.searchText || "";
  const status = body.status || "";

  const skip = (page - 1) * limit;


//   const { searchParams } = new URL(request.url);
//   const reportDay = searchParams.get("filter") || "";

  const seller = await getLoginSeller();
  if (!seller) {
    return responseFun(false, { message: "unauthorized user" }, 403);
  }
  const seller_id = seller._id;

  const filterDays = new Date();
  filterDays.setDate(filterDays.getDate() - Number(reportDay));
  
  
   const productQuery = {
      seller_id: new mongoose.Types.ObjectId(seller_id),
            save_as_draft: "0", 
    }
  
    if(searchText){
      productQuery.product_name = { $regex: searchText, $options: "i" };
    }
  
    const pipeline = [
    {
      $match: productQuery
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
        as: "orders",
      },
    },

     {
        $addFields:{
            totalUnitSele :{$sum: "$orders.quantity"}
        }
    },

    // Unwind orders so we analyze them one by one
    {
      $unwind: {
        path: "$orders",
        preserveNullAndEmptyArrays: true,
      },
    },

    // Lookup earlier orders for each user
    {
      $lookup: {
        from: "orderproducts",
        let: {
          userId: "$orders.user_id",
          orderDate: "$orders.createdAt",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$user_id", "$$userId"] },
                  { $lt: ["$createdAt", "$$orderDate"] },
                ],
              },
            },
          },
        ],
        as: "earlierOrders",
      },
    },
];


if (status === "Non") {
      pipeline.push({
        $match: {
          orders: { $eq: null }
        }
      });
    }else if(status == "Top"){
      pipeline.push({
        $match: {
          earlierOrders: { $not: { $size: 0 } }
        }
      });
    }

    




    // Mark user as new or repeat
    pipeline.push({
      $addFields: {
        isNewUser: {
          $cond: [{ $eq: [{ $size: "$earlierOrders" }, 0] }, true, false],
        },
      },
    },
 
    {
      $group: {
        _id: {
          productId: "$_id",
          variantId: "$variant._id",
        },
        totalUnitSele: { $first: "$totalUnitSele" },
        product_name: { $first: "$product_name" },
        variant: { $first: "$variant" },
        main_image: { $first: "$main_image" },

        totalUsersSet: {
          $addToSet: "$orders.user_id",
        },
        newUsersSet: {
          $addToSet: {
            $cond: [{ $eq: ["$isNewUser", true] }, "$orders.user_id", null],
          },
        },
      },
    },
 
    {
      $project: {
        totalUnitSele: 1,
        product_name: 1,
        category_id: 1,
        subcategory_id: 1,
        childcategory_id: 1,
        variant: 1,
        main_image: 1,

        totalUsersCount: {
          $size: {
            $filter: {
              input: "$totalUsersSet",
              as: "u",
              cond: { $ne: ["$$u", null] },
            },
          },
        },
        newUsersCount: {
          $size: {
            $filter: {
              input: "$newUsersSet",
              as: "u",
              cond: { $ne: ["$$u", null] },
            },
          },
        },
      },
    },

    // Add repeat users count
    {
      $addFields: {
        repeatUsersCount: {
          $subtract: ["$totalUsersCount", "$newUsersCount"],
        },
      },
    })

     if(status == "New"){
        pipeline.push({
        $sort:{
          createdAt:-1
        }
      })
    }else{
       pipeline.push({
          $sort:{
            totalUsersCount:-1
          }
        })
    }

      pipeline.push({
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

    );


  const products = await productModel.aggregate(pipeline);

  const total = products[0]?.totalCount[0]?.count || 0;
    const productData = products[0]?.data || [];
    const pagination = {
      totalCount:total,
      page:page,
      pageSize:limit,
      totalPages: Math.ceil(total / limit),
    }


  try {
    return responseFun(true, {  products:productData , pagination }, 200);
  } catch (error) {
    console.log(error);
    return responseFun(false, { message: error.message }, 500);
  }
}
