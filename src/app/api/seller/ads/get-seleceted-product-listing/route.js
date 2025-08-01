import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { connectDb } from "@/Http/dbConnect2";
import { responseFun } from "@/Http/helper";
import { productModel } from "@/Http/Models/productModel";
import mongoose from "mongoose";


export async function POST(request) {
    await connectDb();

    const { selectedProduct } = await request.json();

     const seller = await getLoginSeller();
        if(!seller){
             return responseFun(false, {message:"unauthrized request"}, 401)
        }
        const seller_id = seller._id;

    try {
            const productIds = selectedProduct.map((itemData)=>new mongoose.Types.ObjectId(itemData.product_id))
            const variantIds = selectedProduct.map((itemData)=>new mongoose.Types.ObjectId(itemData.variant_id))
            
            const productQuery = {
                       seller_id: new mongoose.Types.ObjectId(seller_id),
                       _id:{$in:productIds}
                   }


                    const products = await productModel.aggregate([ 
                                {
                                    $match:productQuery
                                }, 
                                {
                                    $lookup:{
                                        from:"productvariants",
                                        let:{ productId:"$_id"},
                                        pipeline:[
                                            {
                                                $match:{
                                                    $expr:{
                                                        $and:[
                                                            {$eq:["$product_id", "$$productId"]},
                                                             { $in: ["$_id", variantIds] } 
                                                        ]
                                                    }
                                                }
                                            }
                                        ],
                                        as:"variant"
                                    }
                                },
                    
                               {
                                $addFields: {
                                        variant: { $arrayElemAt: ["$variant", 0] }
                                    }
                                },
                                {
                                    $match: {
                                        "variant": { $ne: null }  
                                    }
                                },
                                {
                                    $project:{
                                        product_name:1,
                                        variant:1,
                                        main_image:1
                                    }
                                }
                                
                            ]);
        return responseFun(true, {message:"success", list:products }, 200)
    } catch (error) {
        console.log(error);
        return responseFun(true, {message:error.message}, 500)
    }
}