import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { responseFun } from "@/Http/helper";
import { sellerNotificationSetting } from "@/Http/Models/sellerNotificationModal";
import mongoose from "mongoose";


export async function POST(request) {
    
    const {  data } =  await request.json();

    try{
        const seller = await getLoginSeller()
        if(!seller){
            return responseFun(false, {message:"invalid request"}, 401)
        }
        const seller_id = seller._id

    const updateData = await sellerNotificationSetting.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(seller_id) },
            { $set: { ...data, seller_id } },
            { new: true, upsert: true }
        );
    return responseFun(true, {message:"success"}, 200)
    }catch(error){
        console.log(error);
        return responseFun(false, {message:error.message}, 500)
    }
}


export async function PUT(request) {
    
    const {  data } =  await request.json();

    try{
        const seller = await getLoginSeller()
        if(!seller){
            return responseFun(false, {message:"invalid request"}, 401)
        }
        const seller_id = seller._id

    const updateData = await sellerNotificationSetting.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(seller_id) },
            { $set: { ...data, seller_id } },
            { new: true, upsert: true }
        );
    return responseFun(true, {message:"success"}, 200)
    }catch(error){
        console.log(error);
        return responseFun(false, {message:error.message}, 500)
    }
}



export async function GET(request) {
     
    try{
        const seller = await getLoginSeller()
        if(!seller){
            return responseFun(false, {message:"invalid request"}, 401)
        }
        const seller_id = seller._id

    const settings = await sellerNotificationSetting.findById(seller_id);
    return responseFun(true, {message:"success", settings}, 200)
    }catch(error){
        console.log(error);
        return responseFun(false, {message:error.message}, 500)
    }
}