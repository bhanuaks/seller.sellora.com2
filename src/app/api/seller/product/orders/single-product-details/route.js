import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { connectDb } from "@/Http/dbConnect2";
import { responseFun } from "@/Http/helper";
import { orderItemStatusHistryModal, orderProductModel } from "@/Http/Models/order";
import { orderAddressModel } from "@/Http/Models/orderAddress";
import { productModel, productVariantModel } from "@/Http/Models/productModel";
import { sellerPickupAddressModel } from "@/Http/Models/sellerModel";
import { userModal } from "@/Http/Models/userModel";
import mongoose from "mongoose";



export async function GET(request) {
    await connectDb();
    const { searchParams } = new URL(request.url);
    const order_Item_id = searchParams.get("order_Item_id");   

    const seller =  await getLoginSeller();
    if(!seller){
        return responseFun(false, "unauthrized request", 200) 
    }

    try{
        const sellerAddress = await sellerPickupAddressModel.findOne({seller_id:new mongoose.Types.ObjectId(seller._id)});
        const query = {
            seller_id: new mongoose.Types.ObjectId(seller._id), 
            _id: new mongoose.Types.ObjectId(order_Item_id)
        }; 
        const order = await orderProductModel.findOne(query)
        if(!order){
            return responseFun(false, "order not found!", 200) 
        }
            const [
              product,
              variant,
              user,
              shippingInfo,
              deliveryInfo,
              address
            ] = await Promise.all([
              productModel.findOne({ _id: order.product_id }),
              productVariantModel.findOne({ _id: order.variant_id }),
              userModal.findOne({ _id: order.user_id }),
              orderItemStatusHistryModal.findOne({ orderItemId: order._id, status: 2 }),
              orderItemStatusHistryModal.findOne({ orderItemId: order._id, status: 4 }),
              orderAddressModel.findOne({ order_id: order.order_id }).select("first_name last_name email address company_name country city state zipcode phone_number same_address")
            ]);
          
            const data = {
              ...order.toObject(),
              product,
              variant,
              user,
              shippingInfo,
              deliveryInfo,
              address,
              sellerAddress
            };

       
        return responseFun(true, {order:data }, 200)

    }catch(error){
        console.log(error);
        return responseFun(false, "error", 500)
    }

}