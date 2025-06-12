import { responseFun } from "@/Http/helper";
import { getLoginSeller } from "../../getLoginUser/route";
import { sellerBusinessProfileModel } from "@/Http/Models/sellerModel";
import mongoose from "mongoose";


export async function POST(request) {
    
    const { business_overview, business_profile } = await request.json();

    const seller = await getLoginSeller();
    if(!seller){
        return responseFun(false, "unauthrized request.", 403);
    }
    try{

        const existData = await sellerBusinessProfileModel.findOne({seller_id:new mongoose.Types.ObjectId(seller._id)})
        let updateData = null;
        if(existData){
            updateData = await sellerBusinessProfileModel.updateOne(
                {seller_id:new mongoose.Types.ObjectId(seller._id)},
                { 
                    $set: {   
                        business_overview,
                        business_profile
                    }
                }
            )
        }else{
            updateData = await sellerBusinessProfileModel.create( 
                {
                    seller_id:seller._id,
                    business_overview,
                    business_profile
                }
            )
        }
        return responseFun(true, {updateData}, 200);
    }catch(error){
        console.log(error);
        return responseFun(false, "error", 500);
    }
}


export async function GET(request) { 
    const seller = await getLoginSeller();
    
    if(!seller){
        return responseFun(false, "unauthrized request.", 403);
    }
    try{ 
        const sellerProfile = await sellerBusinessProfileModel.findOne({seller_id:new mongoose.Types.ObjectId(seller._id)}) 
        return responseFun(true, {sellerProfile}, 200);
    }catch(error){
        console.log(error);
        return responseFun(false, "error", 500);
    }
}