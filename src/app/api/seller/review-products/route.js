
import mongoose from "mongoose";
import { connectDb } from "@/Http/dbConnect2";
import { main_medium_img_path, responseFun } from "@/Http/helper";
import { getLoginSeller } from "../../getLoginUser/route";
import { ProductReviewModal } from "@/Http/Models/ProductReview";
import { sellerFeedbackModal } from "@/Http/sellerFeedback";

export async function GET(request) {
    
   const {searchParams} = new URL(request.url);
    const type = searchParams.get("type");

     await connectDb()
        const seller = await getLoginSeller()
        if(!seller){
            return responseFun(false, {message:"unauthorized"}, 403)
        }
        const seller_id = seller._id;

         if(type == "Vendor Feedback"){
            return await venderFeedBackProduct(seller_id)
         }

        try{
                const reviewProducts = await ProductReviewModal.aggregate([
                {
                    $match: {
                    seller_id: new mongoose.Types.ObjectId(seller_id),
                    },
                },
                {
                    $lookup: {
                    from: "products",
                    let: { productId: "$product_id" },
                    pipeline: [
                        {
                        $match: {
                            $expr: {
                            $eq: ["$_id", "$$productId"],
                            },
                        },
                        },
                        {
                        $project: {
                            _id: 1,
                            product_name: 1,
                            main_image: {
                            $concat: [
                                main_medium_img_path,  
                                "$main_image",
                            ],
                            },
                        },
                        },
                    ],
                    as: "product",
                    },
                },
                {
                    $sort:{
                        star:-1
                    }
                },
                {
                    $unwind: {
                    path: "$product",
                    preserveNullAndEmptyArrays: true,
                    },
                },
                {
                    $group: {
                    _id: "$product._id",
                    avgStar: { $avg: "$star" }, 
                    title: { $first: "$title" },
                    message: { $first: "$message" },
                    productName: { $first: "$product.product_name" },
                    mainImage: { $first: "$product.main_image" },
                    },
                },
                ]);
               
                
                return responseFun(true, { reviewProducts }, 200)
            }catch(error){
                console.log(error); 
                return responseFun(false, {message:error.message }, 500)
            }



}


export async function venderFeedBackProduct(seller_id){

    try{
         const reviewProducts = await sellerFeedbackModal.aggregate([
                {
                    $match: {
                    seller_id: new mongoose.Types.ObjectId(seller_id),
                    },
                },
                {
                    $lookup: {
                    from: "products",
                    let: { productId: "$product_id" },
                    pipeline: [
                        {
                        $match: {
                            $expr: {
                            $eq: ["$_id", "$$productId"],
                            },
                        },
                        },
                        {
                        $project: {
                            _id: 1,
                            product_name: 1,
                            main_image: {
                            $concat: [
                                main_medium_img_path,  
                                "$main_image",
                            ],
                            },
                        },
                        },
                    ],
                    as: "product",
                    },
                },
                {
                    $sort:{
                        star:-1
                    }
                },
                {
                    $unwind: {
                    path: "$product",
                    preserveNullAndEmptyArrays: true,
                    },
                },
                {
                    $group: {
                    _id: "$product._id",
                    avgStar: { $avg: "$star" }, 
                    title: { $first: "" },
                    message: { $first: "$message" },
                    productName: { $first: "$product.product_name" },
                    mainImage: { $first: "$product.main_image" },
                    },
                },
                ]);
               
                
                return responseFun(true, { reviewProducts }, 200)

            }catch(error){
                console.log(error); 
                return responseFun(false, {message:error.message }, 500)
            }

}