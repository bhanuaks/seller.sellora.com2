import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { responseFun } from "@/Http/helper";
import { brandSellerModel } from "@/Http/Models/branModel";
import mongoose from "mongoose";



export async function POST(request) {
    

    const seller = await getLoginSeller();
    if(!seller){
        return responseFun(false, {message:"unauthorized use"}, 403)
    }
    const seller_id = seller._id;

    try{
        const checkBrand = await brandSellerModel.findOne({
            seller_id: new mongoose.Types.ObjectId(seller_id),
            brand_owner:"Yes",
            status:1
        });
        if(checkBrand){
             return responseFun(true, { message:"success",  }, 200)
        }
         return responseFun(false, { message:"Display ads allow only for brand owner"}, 200)
    }catch(error){
        console.log(error.message);
        return responseFun(false, { message:error.message }, 500)
    }
}