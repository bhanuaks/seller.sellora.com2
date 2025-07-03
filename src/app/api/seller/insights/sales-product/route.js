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
  



  const products = await productModel.aggregate([
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
            totalUnitSele :{$sum: "$orders.quantity"},
            totalSeles :{$sum: "$orders.price"}
        }
    },

    {
        $sort:{
            orders:-1
        }
    },
    // Unwind orders so we analyze them one by one
    // {
    //   $unwind: {
    //     path: "$orders",
    //     preserveNullAndEmptyArrays: true,
    //   },
    // },

    // Lookup earlier orders for each user
     

   
     

      {
        $project: {
          _id: 1,
          category_id: 1,
          subcategory_id: 1,
          childcategory_id: 1,
          product_name: 1,
          product_description: 1,
          slug: 1,
          main_image: 1,
          image_1: 1, 
          image_2: 1, 
          image_3: 1, 
          image_4: 1, 
          image_5: 1, 
          image_6: 1, 
          image_7: 1, 
          currency: 1, 
          totalSeles:1,
          totalUnitSele:1,
          variant: 1,
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

  ]);

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
