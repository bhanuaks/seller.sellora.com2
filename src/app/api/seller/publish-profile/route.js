import { responseFun } from "@/Http/helper";
import { getLoginSeller } from "../../getLoginUser/route";
import { sellerBusinessProfileModel } from "@/Http/Models/sellerModel";
import mongoose from "mongoose";


export async function POST(request) {
   
    // const {} = await request.json()

    const seller = await getLoginSeller();
    if(!seller){
        return responseFun(false, {message:"unauthoried request",}, 403)
    }
    const seller_id = seller._id;

    try {
        const sellerBussProfile = await sellerBusinessProfileModel.findOne({seller_id : new mongoose.Types.ObjectId(seller_id) })
        if(!sellerBussProfile){
            return responseFun(false, {message:"details not found"}, 401)
        }

        sellerBussProfile.Published = 1;
        await sellerBussProfile.save();
        return responseFun(true, {message: "Your profile has been published."}, 200)
    } catch (error) {
        console.log(error);
        return responseFun(false, {message: error.message}, 500)
    }
}