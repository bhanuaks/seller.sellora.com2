import { responseFun } from "@/Http/helper";
import { discountCouponModal } from "@/Http/Models/discountCoupon";
import mongoose from "mongoose";
import { getLoginSeller } from "../../getLoginUser/route";
import { appliedDiscountCouponModal } from "@/Http/Models/AppliedDiscountCoupon";


export async function POST(request) {
    
    const { offerId } = await request.json()
    if(!offerId){
         return responseFun(false, {message: "offer Id required"}, 200)
    }

    const seller = await getLoginSeller();
        if(!seller){
                return responseFun(false, {message:"unauthrized request"}, 401)
        }
        const seller_id = seller._id;

    try {
        
        const coupon = await discountCouponModal.findOne({ offerId:offerId});
        const selectedProduct =  await appliedDiscountCouponModal.find({
            seller_id:new mongoose.Types.ObjectId(seller_id),
            discount_coupon_id : coupon._id
        }).select("product_id variant_id")
        return responseFun(true, {message: "success" , coupon, selectedProduct}, 200) 
    } catch (error) {
        console.log(error);
        return responseFun(false, {message: error.message}, 500)
    }
}

export async function GET(request) {
    
    const { searchParams } = new URL(request.url)
    const status     = searchParams.get("status");
    const searchText = searchParams.get("searchText");

    const query = {status:"Active"}
    if(searchText){
        query.offerId = { $regex: searchText, $options:"i" }
    }

       const seller = await getLoginSeller();
        if(!seller){
                return responseFun(false, {message:"unauthrized request"}, 401)
        }
        const seller_id = seller._id;

    try {
        let list =[];

     
            const pipeline = [
            {
                    $match:query
                },
                {
                    $lookup: {
                    from: "applieddiscountcoupons",
                    let: { couponId: "$_id" },
                    pipeline: [
                        {
                        $match: {
                            $expr: {
                                $and: [
                                    { $eq: ["$discount_coupon_id", "$$couponId"] },
                                    { $eq: ["$seller_id", new mongoose.Types.ObjectId(seller_id)] }
                                ]
                            }
                        }
                        }
                    ],
                    as: "appliedInfo"
                    }
                },
               
                {
                    $addFields: {
                    appliedInfo: {
                            $cond: {
                             if:{$gt :[{$size : "$appliedInfo"}, 0]},
                            then: true,
                            else: false
                            }
                        }
                    
                    }
                 },
                {
                    $sort:{
                        discount:1
                    }
                }
            ];

            if(status == "Your"){
                pipeline.push( 
                    {
                        $match: {
                            appliedInfo: { $ne: false }   
                        }
                    }
                )
            }
          list = await discountCouponModal.aggregate(pipeline);
        
        return responseFun(true, {message: "success" , list}, 200)
    } catch (error) {
        console.log(error);
        return responseFun(false, {message: error.message}, 500)
    }
}