import { responseFun } from "@/Http/helper"; 
import { getLoginUser } from "../../getLoginUser/route";
import { orderModel, orderProductModel } from "@/Http/Models/order";
import { orderAddressModel } from "@/Http/Models/orderAddress";
import { connectDb } from "@/Http/dbConnect2";

export async function GET(request) {
    
    await connectDb();
    try{
        const user = getLoginUser();
        const query = {user_id: user._id}
        const orderData  = await orderModel.find(query).sort({createdAt:-1})
        const orderWithProdcut = await Promise.all(
            orderData.map(async(order)=>{
                const products = await orderProductModel.aggregate([
                    {
                        $match:{order_id:order.order_id}
                    },
                     
                    {
                        $lookup:{
                            from:"products",
                            localField:"product_id",
                            foreignField:"_id",
                            as:"product_id"
                        }
                    },

                    {
                        $addFields:{product_id:{$arrayElemAt:['$product_id',0]}}
                    },
                    {
                        $match:{ product_id:{$ne:null} }
                    },

                    {
                        $lookup:{
                            from:"productvariants",
                            localField:"variant_id",
                            foreignField:"_id",
                            as:"variant_id"
                        }
                    },
                    {
                        $addFields:{variant_id:{$arrayElemAt:['$variant_id',0]}}
                    },
                    {
                        $match:{variant_id:{$ne:null}}
                    }, 
                     
                    
                ]) 

                // const products = await orderProductModel.find({order_id:order.order_id})
                // .populate({ path: 'product_id', model: 'Product' })
                // .populate('variant_id') 
                 const address =  await orderAddressModel.findOne({order_id:order.order_id})
                return {
                    ...order.toObject(),
                    products,
                    address
                }
            }) 
        )

        return responseFun(true, {orders:orderWithProdcut}, 200)

    }catch(error){
        console.log(error);
        return responseFun(false, {error}, 200)
    }
}