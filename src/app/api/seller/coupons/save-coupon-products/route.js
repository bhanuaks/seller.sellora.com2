import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { connectDb } from "@/Http/dbConnect2";
import { responseFun } from "@/Http/helper"; 
import { appliedDiscountCouponModal } from "@/Http/Models/AppliedDiscountCoupon";
import { appliedEventProductModal } from "@/Http/Models/Sales-events/AppliedEvent";
import mongoose from "mongoose";


export async function POST(request) {
    
    await connectDb();
    const { selectedProduct, _id, discount_coupon_id, discount } = await request.json()

    const seller = await getLoginSeller();
    if(!seller){
            return responseFun(false, {message:"unauthrized request"}, 401)
    }
    const seller_id = seller._id;


    try {
     
               const productData = selectedProduct.map((prod)=>{
                    return {
                        discount_coupon_id  : discount_coupon_id, 
                        product_id          : prod.product_id,
                        variant_id          : prod.variant_id,
                        seller_id
                    }
                })  
             await appliedDiscountCouponModal.deleteMany({ 
                    discount_coupon_id: new mongoose.Types.ObjectId(discount_coupon_id),
                    seller_id: new mongoose.Types.ObjectId(seller_id) 
                })
             await appliedDiscountCouponModal.insertMany(productData) 

         return responseFun(true, { message:"Your discount coupon applied successfuly." }, 200)

    } catch (error) {
        console.log(error);
          return responseFun(false, { message:error.message }, 500)
    }
}