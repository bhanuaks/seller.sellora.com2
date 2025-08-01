import { responseFun } from "@/Http/helper";
import { productModel } from "@/Http/Models/productModel";
import mongoose from "mongoose";
import { getLoginSeller } from "../../getLoginUser/route";
import { sellerFeedbackModal } from "@/Http/sellerFeedback";
import { ProductReviewModal } from "@/Http/Models/ProductReview";


export async function GET(request) {
    
    const { searchParams } = new URL(request.url);
    const product_id = searchParams.get("product_id") || "";
    const productObjectId = new mongoose.Types.ObjectId(product_id);

        const seller = await getLoginSeller();
        if(!seller){
            return responseFun(false, {message:"unauthorized request."}, 403)
        }

    try {
      
        
        const product = await productModel.aggregate([
          {
            $match: {
                // seller_id: new mongoose.Types.ObjectId(seller._id),
                _id: productObjectId
            }
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
          $project: {
            _id: 1,
            product_name: 1,
            main_image: 1,
            starAvg: 1,
            starCount: 1
          }
        }
        ]);

        const reviews = await ProductReviewModal.aggregate([
            {
                $match:{
                        product_id: productObjectId
                } 
            },
            {
                $lookup:{
                    from:"consumers",
                    let: { userId:"$user_id" },
                    pipeline:[
                        {
                            $match:{
                                $expr:{
                                    $and:[
                                        {$eq : ["$_id", "$$userId"] }
                                    ]
                                }
                            }
                        },
                        {
                            $project:{
                                full_name:1,
                                
                            }
                        }
                    ],
                    as:"user"
                    
                }
            },
            {
                $unwind:{
                    path:"$user",
                    preserveNullAndEmptyArrays:false
                }
            }
        ]);
        
        const productData = product.length>0?product[0]:null;
        
        return responseFun(true, { product:productData, reviews }, 200)
    } catch (error) {
        console.log(error);
        return responseFun(false, {message: error.message }, 500)
    }
}