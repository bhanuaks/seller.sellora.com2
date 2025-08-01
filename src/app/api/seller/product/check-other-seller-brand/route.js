import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { responseFun } from "@/Http/helper";
import { brandModel, brandSellerModel } from "@/Http/Models/branModel";
import mongoose from "mongoose";


export async function POST(request){

    const {brand_id} = await request.json();
    if(!brand_id){
        return responseFun(false, { message: "parameter is missing." }, 401)
    }
    const seller  = await getLoginSeller();

    if(!seller){
        return responseFun(false, { message: "Unauthorized request" }, 403)
    }
    const seller_id = seller._id;
    try{
        const brand = await brandModel.findById(brand_id).select("name");
        if(!brand){
            return responseFun(false, { message: "This product brand not apply or approved. if not apply brand then please apply brand first and wait for approval by admin", brand }, 200)
        }
        const sellerBrand = await brandSellerModel.findOne({
            seller_id : new mongoose.Types.ObjectId(seller_id),
            name: brand.name
        })
         if(!sellerBrand){
            return responseFun(false, { message: "This product brand not apply or approved. if not apply brand then please apply brand first and wait for approval by admin", brand}, 200)
        }
        return responseFun(true, { message: "Success" }, 200)
    }catch(error){
        console.log(error);
        return responseFun(false, { message: error.message }, 500)
    }
}