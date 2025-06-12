import { isEmpty, responseFun } from "@/Http/helper";
import { orderItemStatusHistryModal, orderProductModel } from "@/Http/Models/order";
import mongoose from "mongoose";



export async function POST(request) {
    
    const {
        refund_reason, 
        note, 
        full_refund, 
        excluding_tax, 
        including_tax,
        accept_condition,
        order_Item_id

        } = await request.json();

        const errors = {};

        if(isEmpty(refund_reason))errors.refund_reason = "required";
        if(isEmpty(order_Item_id))errors.order_Item_id = "order not found!";
        if(isEmpty(including_tax))errors.including_tax = "required";
        if(isEmpty(excluding_tax))errors.excluding_tax = "required";
        if(isEmpty(accept_condition))errors.accept_condition = "Required";
        if(isEmpty(note))errors.note = "Required";

        if(Object.keys(errors).length > 0 ){
            return responseFun(false, {errors, status_code:402}, 200)
        }

        const session = await mongoose.startSession();
        session.startTransaction();
        try{
            const orderItem  = await orderProductModel.findById(order_Item_id)
            if(!orderItem){
                return responseFun(false, {message:"Order not found!", status_code:404}, 200)
            }
            if(orderItem.order_status == 6){
                return responseFun(false, {message:"This order payment already refunded", status_code:409}, 200)
            } 
            orderItem.order_status = 6; // status 6 is refund successfully

            const createRefund = await orderItemStatusHistryModal.create({
                orderItemId:order_Item_id,
                status:6, // status 6 is refund successfully
                excluding : Number(excluding_tax),
                Including : Number(excluding_tax),
                refund_amount: Number(excluding_tax) + Number(including_tax),
                refund_full_amount: full_refund == "Yes"?full_refund:"No",
                remarks:note
            })
            await orderItem.save();
            session.commitTransaction();
            return responseFun(true, {message:"success"}, 200)
        }catch(error){
            console.log(error);
            session.abortTransaction();
            return responseFun(false, {error}, 500)

        }



}