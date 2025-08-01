import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { connectDb } from "@/Http/dbConnect2";
import { responseFun } from "@/Http/helper";
import { productModel } from "@/Http/Models/productModel";
import mongoose from "mongoose";

export async function GET(request) {

  await connectDb();
  
  const { searchParams } = new URL(request.url);
  const searchBy = searchParams.get("searchBy") || null;
  const searchText = searchParams.get("searchText") || null;

  const page = parseInt(searchParams.get("page")) || 1;
  const pageSize = parseInt(searchParams.get("pageSize")) || 10;

  const last20Days = new Date();
  last20Days.setDate(last20Days.getDate() - 20);

  const seller = await getLoginSeller();
  if (!seller) {
    return responseFun(false, { message: "unauthorized request" }, 403);
  }
  const seller_id = seller._id;

  try {
    const pipeline = [];
    if (searchBy == "name" && searchText) {
      pipeline.push({
        $match: {
          seller_id: new mongoose.Types.ObjectId(seller_id),
          save_as_draft: "0",
          product_name: { $regex: searchText, $options: "i" },
        },
      });
    } else {
      pipeline.push({
        $match: {
          seller_id: new mongoose.Types.ObjectId(seller_id),
          save_as_draft: "0",
        },
      });
    }

    if (searchBy == "sku" && searchText) {
      pipeline.push(
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
                      { $eq: ["$listingStatus", 1] },
                      {
                        $regexMatch: {
                          input: "$sku",
                          regex: searchText,
                          options: "i",
                        },
                      },
                    ],
                  },
                },
              },
            ],
            as: "varinat",
          },
        },
        {
          $unwind: {
            path: "$varinat",
            preserveNullAndEmptyArrays: false,
          },
        }
      );
    } else {
      pipeline.push(
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
                      { $eq: ["$listingStatus", 1] },
                    ],
                  },
                },
              },
            ],
            as: "varinat",
          },
        },
        {
          $unwind: {
            path: "$varinat",
            preserveNullAndEmptyArrays: false,
          },
        },
        {
          $match: {
            $expr: {
              $or: [
                { $ne: ["$varinat.update_impact_price", "Yes"] }, 
                {
                  $and: [
                    { $eq: ["$varinat.update_impact_price", "Yes"] },
                    { $lte: ["$varinat.update_impact_price_date", last20Days] },
                  ],
                },
              ],
            },
          },
        }
      );
    }

    pipeline.push(
      {
        $lookup: {
          from: "productviews",
          let: { productId: "$_id", variantId: "$varinat._id" },
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
        },
      },

      {
        $addFields: {
          totalViews: { $size: "$views" },
        },
      },

      {
        $lookup: {
          from: "productclicks",
          let: { productId: "$_id", variantId: "$varinat._id" },
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
          as: "click",
        },
      },

      {
        $addFields: {
          totalClick: { $size: "$click" },
        },
      },
      {
        $match: {
          $expr: {
            $gt: ["$totalViews", "$totalClick"],
          },
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },

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
          currency: 1,
          totalViews: 1,
          totalClick: 1,
          variant: {
            _id: "$varinat._id",
            sku: "$varinat.sku",
            sin: "$varinat.sin",
            msrp: "$varinat.msrp",
            consumerSalePrice: "$varinat.consumerSalePrice",
            businessSalePrice: "$varinat.businessSalePrice",
            stock: "$varinat.stock",
            customAttributes: "$varinat.customAttributes",
            withImage: "$varinat.withImage",
            currency: "$varinat.currency",
            image_1: "$varinat.image_1",
          },
        },
      }
    );
    const list = await productModel.aggregate(pipeline);

    return responseFun(true, { message: "success", list }, 200);
  } catch (error) {
    console.log(error);
    return responseFun(false, { message: error.message }, 200);
  }
}
