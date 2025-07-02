 
import { responseFun } from "@/Http/helper";
import { orderProductModel } from "@/Http/Models/order";
import mongoose from "mongoose"; 
import { getLoginSeller } from "@/app/api/getLoginUser/route"; 


export async function GET(request) {
     

    const seller = await getLoginSeller();
    if(!seller){
        return responseFun(false, {message:"unauthorized user"}, 403)
    }
    const seller_id = seller._id;

    const sellerObjectId = new mongoose.Types.ObjectId(seller_id);
    try{
       const totalOrder = await orderProductModel.countDocuments({
            seller_id: sellerObjectId,
            });
       const result = await orderProductModel.aggregate([
        { $match: { seller_id: sellerObjectId } },
        {
            $group: {
            _id: null,
            totalSale: { $sum: "$total_price" }
            }
        }
        ]);

        const totalSale = result[0]?.totalSale || 0;

        const grossSales = {
            totalOrder,
            totalSale
        }
         return responseFun(false, { grossSales }, 500)
    }catch(error){
        console.log(error);
        return responseFun(false, {message:error.message}, 500)
    }
}