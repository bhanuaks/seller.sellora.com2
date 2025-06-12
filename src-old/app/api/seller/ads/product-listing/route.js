import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { responseFun } from "@/Http/helper";
import { productModel } from "@/Http/Models/productModel";
import mongoose from "mongoose";

export async function GET(request) {
     
    const { searchParams } = new URL(request.url)
    const searchText = searchParams.get("searchText");


    const seller = await getLoginSeller();
    if(!seller){
         return responseFun(false, {message:"unauthrized request"}, 500)
    }
    const seller_id = seller._id;
    try{
        const productQuery = {
            seller_id: new mongoose.Types.ObjectId(seller_id),
            save_as_draft:"0"
        }

        if(searchText){
           productQuery.product_name = { $regex: searchText, $options: "i" };
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
                                        {$eq:["$isProcessing", "Approved"]}
                                    ]
                                }
                            }
                        }
                    ],
                    as:"variant"
                }
            }, 
 

            {
                $addFields:{
                 variant: { $arrayElemAt: ["$variant", 0] }
                }
            },
             {
                $match: {
                    variant: { $ne: null }   
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
 
        return responseFun(true, {message:"success", products}, 200)

    }catch(error){
        console.log(error.message);
        return responseFun(false, {message:error.message}, 500)
    }
}