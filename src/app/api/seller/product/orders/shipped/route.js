import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { connectDb } from "@/Http/dbConnect2";
import { responseFun } from "@/Http/helper";
import { orderItemStatusHistryModal, orderProductModel } from "@/Http/Models/order";
import mongoose from "mongoose";


export async function POST(request) {
    
    await connectDb();
    const { trakingInfo, order_Item_id } = await request.json();

    if (!trakingInfo || trakingInfo.length === 0) {
        return responseFun(false, "Tracking number required", 200);
    }
    
    // Use `.some()` to check if any tracking number is missing
    const isMissingTrackingNumber = trakingInfo.some(item => !item.trakingNumber || item.trakingNumber === "");
    
    if (isMissingTrackingNumber) {
        return responseFun(false, "Tracking number required", 200);
    }
    const seller =  await getLoginSeller();
    if(!seller){
        return responseFun(false, "unauthrized request", 200) 
    }

    const session = await mongoose.startSession();
    session.startTransaction(); 
    try{
         const query = {
                    seller_id: new mongoose.Types.ObjectId(seller._id), 
                    _id: new mongoose.Types.ObjectId(order_Item_id)
                }; 
         const order = await orderProductModel.findByIdAndUpdate(order_Item_id, {
            order_status:2
         })

         const shippingExist =  await orderItemStatusHistryModal.findOne({ orderItemId: order._id, status: 2});
         if(shippingExist){
            await orderItemStatusHistryModal.findByIdAndUpdate(shippingExist._id, 
                {
                    orderItemId:order._id,
                    status:2,
                    trakingDetails:trakingInfo
                }
            );
         }else{
            await orderItemStatusHistryModal.create( 
                {
                    orderItemId:order._id,
                    status:2,
                    trakingDetails:trakingInfo
                }
            );
         }
         session.commitTransaction();
         return responseFun(true, "success", 200) 
    }catch(error){
        session.abortTransaction();
        console.log(error);
        return responseFun(false, "error", 500)
    }
}