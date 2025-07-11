import { responseFun } from "@/Http/helper";
import { getLoginSeller } from "../../getLoginUser/route";
import { ProductReviewModal } from "@/Http/Models/ProductReview";
import mongoose from "mongoose";
import { connectDb } from "@/Http/dbConnect2";
import { sellerFeedbackModal } from "@/Http/sellerFeedback";



export async function GET(request) {
    await connectDb()
    const seller = await getLoginSeller()
    if(!seller){
        return responseFun(false, {message:"unauthorized"}, 403)
    }
    const seller_id = seller._id;

    try{
        const review = await ProductReviewModal.aggregate([
            {
                $match: {
                seller_id: new mongoose.Types.ObjectId(seller_id),
                },
            },
            {
                $group: {
                _id: null,
                avgStar: { $avg: "$star" },
                count: { $sum: 1 },  
                totalReview: { $sum: "$star" },
                },
            },
        ]);
        const reviewAvgStar = review.length > 0 ? review[0] : {"_id":null,"avgStar":0,"count":0,"totalReview":0};

     
         const feedback = await sellerFeedbackModal.aggregate([
            {
                $match: {
                seller_id: new mongoose.Types.ObjectId(seller_id),
                },
            },
            {
                $group: {
                _id: null,
                avgStar: { $avg: "$star" },
                count: { $sum: 1 },  
                totalReview: { $sum: "$star" },
                },
            },
        ]);
        const feedbackData = feedback.length > 0 ? feedback[0]: {"_id":null,"avgStar":0,"count":0,"totalReview":0};
        
        return responseFun(true, { review:reviewAvgStar, feedback:feedbackData  }, 200)
    }catch(error){
        console.log(error); 
        return responseFun(false, {message:error.message }, 500)
    }
}