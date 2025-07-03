import { responseFun } from "@/Http/helper"; 
import mongoose from "mongoose";
import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { connectDb } from "../../../../../../lib/dbConnect";
import { productModel, productVariantModel } from "@/Http/Models/productModel";

export async function GET(request) {

  connectDb(); 
  const { searchParams } = new URL(request.url);
  const reportDay = searchParams.get("filter") || "";

  const seller = await getLoginSeller();
  if (!seller) {
    return responseFun(false, { message: "unauthorized user" }, 403);
  }
  const seller_id = seller._id;

  const sellerObjectId = new mongoose.Types.ObjectId(seller_id);

  const filterDays = new Date();
  filterDays.setDate(filterDays.getDate() - Number(reportDay));
 const productQuery = {
            seller_id: new mongoose.Types.ObjectId(seller_id),
            save_as_draft:"0"
        }

        

        const products = await productModel.aggregate([
            
              {
                $match: {
                  seller_id: new mongoose.Types.ObjectId(seller_id),
                  save_as_draft: "0",
                },
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
                    product_name     : 1,
                    category_id      : 1, 
                    subcategory_id   : 1, 
                    childcategory_id : 1, 
                    variant          : 1,
                    main_image       : 1
                }
            }
            
        ]);
  const variant = await productVariantModel.find({product_id :products[0]._id })
  try {
    return responseFun(true, {products, variant}, 200);
  } catch (error) {
    console.log(error);
    return responseFun(false, { message: error.message }, 500);
  }
}
