import { responseFun } from "@/Http/helper";
import { getLoginSeller } from "../../getLoginUser/route";
import { ProductReviewModal } from "@/Http/Models/ProductReview";
import mongoose from "mongoose";
import { connectDb } from "@/Http/dbConnect2";
import { sellerFeedbackModal } from "@/Http/sellerFeedback";
import { productModel } from "@/Http/Models/productModel";

export async function GET(request) {
  await connectDb();
  const { searchParams } = new URL(request.url);
  const filter = searchParams.get("filter") || "All";
  const searchText = searchParams.get("searchText") || "";

   const page = parseInt(searchParams.get("page") || 1);
   const limit =  20;
   const skip = (page - 1) * limit;

  const seller = await getLoginSeller();
  if (!seller) {
    return responseFun(false, { message: "Unauthrized user" }, 403);
  }
  let matchStarQuery = { starAvg: { $lte: 10 } }; 
    if (filter === "Negative") {
    matchStarQuery = { starAvg: { 
        $gte: 1,
        $lte: 3,

     } };
    } else if (filter === "Positive") {
    matchStarQuery = { starAvg: { $gte: 4 } };
    }
  try {
    const query = {seller_id: new mongoose.Types.ObjectId(seller._id)};
     if (searchText) {
       query.product_name = { $regex: searchText, $options: "i" }; 
    } 

    // if (filter == "Negative") {
    //   query.star = { $lte: 2 };
    // } else if (filter == "Positive") {
    //   query.star = { $gte: 3 };
    // }

const feedback = await productModel.aggregate([
  {
    $match: query
  },
  {
    $lookup: {
      from: "sellerfeedbacks",
      let: { productId: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$product_id", "$$productId"],
            },
          },
        },
        {
          $group: {
            _id: null,
            starAvg: { $avg: "$star" },
            starCount: { $sum: 1 },
          },
        },
      ],
      as: "feedbackStats",
    },
  },
  {
    $unwind: {
      path: "$feedbackStats",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $addFields: {
      starAvg: { $ifNull: ["$feedbackStats.starAvg", 0] },
      starCount: { $ifNull: ["$feedbackStats.starCount", 0] },
    },
  },
  {
    $sort:{
        starAvg:-1
    }
  },
 {
    $match: matchStarQuery
  },

  
  {
  $project: {
    _id: 1,
    product_name: 1,
    main_image: 1,
    starAvg: 1,
    starCount: 1
  }
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
 
 const total = feedback[0]?.totalCount[0]?.count || 0;
    const feedbackData = feedback[0]?.data || [];
    const pagination = {
      totalCount:total,
      page:page,
      pageSize:limit,
      totalPages: Math.ceil(total / limit)
    }


    return responseFun(true, {  feedback:feedbackData,  pagination }, 200);
  } catch (error) {
    console.log(error);
    return responseFun(false, error, 500);
  }
}
