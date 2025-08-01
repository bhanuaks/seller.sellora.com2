import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { connectDb } from "@/Http/dbConnect2";
import { responseFun } from "@/Http/helper";
import { orderProductModel } from "@/Http/Models/order";
import mongoose from "mongoose";


export async function POST(request) {
    
    await connectDb();
    
    const { seller_note, order_Item_id } = await request.json();

    try {
        
        const seller = await getLoginSeller();

        const order = await orderProductModel.findOne({
            seller_id : new mongoose.Types.ObjectId(seller._id),
            _id : new mongoose.Types.ObjectId(order_Item_id)
        })
        if(order){
            order.seller_note = seller_note;
            await order.save();
        }
                return responseFun(true, {message: "success" }, 200)
    } catch (error) {
        console.log(error);
        return responseFun(false, {message: error.message }, 500)
    }
}