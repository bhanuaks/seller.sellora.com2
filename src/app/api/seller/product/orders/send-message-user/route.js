import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { responseFun } from "@/Http/helper";
import { userSellerChatModal } from "@/Http/Models/Chat/USerSellerChat";
import mongoose from "mongoose";


export async function POST(request) {
    
    const { message, order_Item_id } = await request.json();

    const seller = await getLoginSeller();
    if(!seller){
        return responseFun(false, {message:error.message}, 403)
    }

    try {
        const newChat = new userSellerChatModal({
            message:message,
            single_order_id:order_Item_id,
            senderId: new mongoose.Types.ObjectId(seller._id),
            sendBy:"Seller"
        })
        await newChat.save();
        return responseFun(true, {message:"Success", newChat }, 200)
    } catch (error) {
        console.log(error);
        return responseFun(false, {message:error.message}, 500)
    }
}

export async function GET(request) {
        const { searchParams } = new URL(request.url);
        const order_Item_id = searchParams.get("order_Item_id");
    try{

         const newChat = await userSellerChatModal.find({single_order_id : order_Item_id}).limit(100)
         return responseFun(true, { newChat }, 200)

    }catch(error){
        console.log(error);
        return responseFun(false, {message: error.message}, 500)
    }
}