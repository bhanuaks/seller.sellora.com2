import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { responseFun } from "@/Http/helper";
import { orderProductModel } from "@/Http/Models/order";
import { productModel } from "@/Http/Models/productModel";
import mongoose from "mongoose";

export async function GET(request) {
  try {
    const seller = await getLoginSeller();
    if (!seller) {
      return responseFun(false, { message: "unauthorized request" }, 403);
    }

    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const seller_id = seller._id;

    const todaySales = await orderProductModel.aggregate([
      {
        $match: {
          seller_id: new mongoose.Types.ObjectId(seller_id),
          order_status: { $nin: [5, 6, 7, 8] },
        //   createdAt: { $gte: startOfDay, $lte: endOfDay },
        },
      },
      {
        $group: {
          _id: null,
          totalOrder: { $sum: 1 },
          sales: { $sum: "$price" },
          UnitSold: { $sum: "$quantity" },
        },
      },
    ]);

    const ActiveListing = await productModel.aggregate([
        {
            $match:{
                seller_id:new mongoose.Types.ObjectId(seller_id),
                save_as_draft:"0"
            }
        },
        {
            $lookup:{
                from:"productvariants",
                let : {productId: "$_id"},
                pipeline:[
                    {
                        $match:{
                            $expr:{
                                $and:[
                                    { $eq : ["$product_id", "$$productId"] },
                                    { $eq : ["$isProcessing", "Approved"] },
                                    { $eq : ["$listingStatus", 1] }
                                ]
                            }
                        }
                    }
                ],
                as:"variant"
            }
        },
        {
            $unwind:{
                path:"$variant",
                preserveNullAndEmptyArrays:false
            }
        },

        {
            $count:"totalActiveList"
        }
    ]);

     let returnData = null;
    if(todaySales.length > 0 ){
            returnData = {
                ...todaySales[0],
                ...ActiveListing[0]
            }
    }
     
    return responseFun(true, { data:returnData }, 200); 
  } catch (error) {
    console.log(error);
    return responseFun(false, { message: error.message }, 500);
  }
}
