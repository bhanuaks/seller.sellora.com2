import { responseFun } from "@/Http/helper";
import { getLoginSeller } from "../../getLoginUser/route";
import { ProductReviewModal } from "@/Http/Models/ProductReview";
import mongoose from "mongoose";


export async function GET(request) {

        const { searchParams }  = new URL(request.url)
        const filter =  searchParams.get("filter") || "All"
        const seller = await getLoginSeller();
        if(!seller){
            return responseFun(false, {message:"Unauthrized user"}, 403)
        }
    try{
        const query = {};
        if (filter == "Negative") {
            query.star = { $lte: 2 }; 
        } else if (filter == "Positive") {
            query.star = { $gte: 3 };  
        }
        const reviews = await ProductReviewModal.aggregate([
            {
                $match:query
            },
            {
                $lookup: {
                    from: "products",
                    let: { productId: "$product_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$productId"] }
                            }, 
                        },
                        {
                            $project: {
                                product_name: 1,
                                main_image: 1
                            }
                        }
                    ],
                    as: "product"
                }
            },

            {
                $lookup: {
                    from: "consumers",
                    let: { userId: "$user_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$userId"] }
                            }, 
                        },
                        {
                            $project: {
                                full_name: 1,
                                email: 1
                            }
                        }
                    ],
                    as: "user"
                }
            },

            {
                $addFields: {
                    product: { $arrayElemAt: ["$product", 0] },
                    user: { $arrayElemAt: ["$user", 0] }  
                }
            }
        ]);
        return responseFun(true, {reviews}, 200)
    }catch(error){
        console.log(error);
        return responseFun(false, error, 500)
    }
}