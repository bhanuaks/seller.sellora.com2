import { responseFun } from "@/Http/helper";
import { getLoginSeller } from "../../getLoginUser/route";
import { ProductReviewModal } from "@/Http/Models/ProductReview";
import mongoose from "mongoose";
import { connectDb } from "@/Http/dbConnect2";
import { productModel } from "@/Http/Models/productModel";


// export async function GET(request) {

//     await connectDb();
//         const { searchParams }  = new URL(request.url)
//         const filter =  searchParams.get("filter") || "All"
//         const seller = await getLoginSeller();
//         if(!seller){
//             return responseFun(false, {message:"Unauthrized user"}, 403)
//         }
//     try{
//         const query = {};
//         if (filter == "Negative") {
//             query.star = { $lte: 2 }; 
//         } else if (filter == "Positive") {
//             query.star = { $gte: 3 };  
//         }
//         const reviews = await ProductReviewModal.aggregate([
//             {
//                 $match:query
//             },
//             {
//                 $lookup: {
//                     from: "products",
//                     let: { productId: "$product_id" },
//                     pipeline: [
//                         {
//                             $match: {
//                                 $expr: { $eq: ["$_id", "$$productId"] }
//                             }, 
//                         },
//                         {
//                             $project: {
//                                 product_name: 1,
//                                 main_image: 1
//                             }
//                         }
//                     ],
//                     as: "product"
//                 }
//             },

//             {
//                 $lookup: {
//                     from: "consumers",
//                     let: { userId: "$user_id" },
//                     pipeline: [
//                         {
//                             $match: {
//                                 $expr: { $eq: ["$_id", "$$userId"] }
//                             }, 
//                         },
//                         {
//                             $project: {
//                                 full_name: 1,
//                                 email: 1
//                             }
//                         }
//                     ],
//                     as: "user"
//                 }
//             },

//             {
//                 $addFields: {
//                     product: { $arrayElemAt: ["$product", 0] },
//                     user: { $arrayElemAt: ["$user", 0] }  
//                 }
//             }
//         ]);
//         return responseFun(true, {reviews}, 200)
//     }catch(error){
//         console.log(error);
//         return responseFun(false, error, 500)
//     }
// }



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

const reviews = await productModel.aggregate([
  {
    $match: query
  },
  {
    $lookup: {
      from: "productreviews",
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
      as: "reviews",
    },
  },
  {
    $unwind: {
      path: "$reviews",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $addFields: {
      starAvg: { $ifNull: ["$reviews.starAvg", 0] },
      starCount: { $ifNull: ["$reviews.starCount", 0] },
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

 const total = reviews[0]?.totalCount[0]?.count || 0;
    const reviewsData = reviews[0]?.data || [];
    const pagination = {
      totalCount:total,
      page:page,
      pageSize:limit,
      totalPages: Math.ceil(total / limit)
    }
 
    return responseFun(true, {  reviews:reviewsData, pagination }, 200);
  } catch (error) {
    console.log(error);
    return responseFun(false, { message:error.message }, 500);
  }
}
