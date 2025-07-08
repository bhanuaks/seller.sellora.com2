import { responseFun } from "@/Http/helper";
import { getLoginSeller } from "../../getLoginUser/route";
import { productModel } from "@/Http/Models/productModel";
import mongoose from "mongoose";


export async function POST(request) {
    
    const {product_id, variant_id} = await request.json();

    if(!product_id || !variant_id)
    {
         return responseFun(false, {message: "parameter is missing"}, 401);
    }

    const seller = await getLoginSeller();
    if(!seller){
         return responseFun(false, {message: "unauthorized request"}, 401);
    }
    const seller_id = seller._id;
    try{

        // const product = await productModel.findOne({
        //     product_id: new mongoose.Types.ObjectId(product_id),
        //     seller_id: new mongoose.Types.ObjectId(seller_id) 
        // }).lean();

         const product = await productModel.aggregate([
            {
                $match:{
                    _id: new mongoose.Types.ObjectId(product_id),
                    seller_id: new mongoose.Types.ObjectId(seller_id) 
                }
            },
             {
                $lookup: {
                    from: "productotherdetails",
                    localField: "_id",
                    foreignField: "product_id",
                    as: "compliance" 
                }
                },
                {
                $unwind: {
                    path: "$compliance",
                    preserveNullAndEmptyArrays: true 
                }
                },
            {
                $lookup:{
                    from:"productvariants",
                    let : { 
                        productId : "$_id",
                        variantId : new mongoose.Types.ObjectId(variant_id)
                    },
                    pipeline:[
                        {
                            $match:{
                                $expr:{
                                    $and:[
                                        {$eq : ["$product_id", "$$productId"]},
                                        {$eq : ["$_id", "$$variantId"]},
                                    ]
                                }
                            }
                        }
                    ],
                    as:"variant"

                }
            },
              {
                $unwind: {
                    path: "$variant",
                    preserveNullAndEmptyArrays: false 
                }
                },

         ]);

             return responseFun(true, {message: "success", product:product[0] || null  }, 200)
        
    }catch(error){
        console.log(error);
        return responseFun(false, {message: error.message}, 500)
    }
}