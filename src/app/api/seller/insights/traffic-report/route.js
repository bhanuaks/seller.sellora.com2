import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { connectDb } from "../../../../../../lib/dbConnect";
import { responseFun } from "@/Http/helper";
import { productClicksModal } from "@/Http/Models/productViewsAndClicks";
import { productModel } from "@/Http/Models/productModel";
import mongoose from "mongoose";
import { orderProductModel } from "@/Http/Models/order";

export async function GET(request) {
    await connectDb()
    
    const { searchParams } = new URL(request.url);
  const reportDay = searchParams.get("filter") || "";
    const seller = await getLoginSeller();
    if (!seller) {
      return responseFun(false, { message: "unauthorized user" }, 403);
    }
    const seller_id = seller._id; 

    const filterDays = new Date();
  filterDays.setDate(filterDays.getDate() - Number(reportDay));

  
  try{
    const totalClick = await productModel.aggregate([
        {
            $match: {
                seller_id: new mongoose.Types.ObjectId(seller_id),
                save_as_draft: "0",
            },
        },
        {
            $lookup:{
                from:"productclicks",
                localField:"_id",
                foreignField:"product_id",
                as:"clicks"
            }
        },
         {
            $lookup:{
                from:"productviews",
                localField:"_id",
                foreignField:"product_id",
                as:"views"
            }
        },

           {
                $lookup:{
                    from:"carts",
                    localField:"_id",
                    foreignField:"product_id",
                    as:"cartItem"
                }
            },

              

            {
            $addFields: {
            clicks: { $size: { $ifNull: ["$clicks", []] } },
            views: { $size: { $ifNull: ["$views", []] } },
            cart: { $size: { $ifNull: ["$cartItem", []] } },
            },
        },
        {
            $group: {
            _id: null,
            totalClicks: { $sum: "$clicks" },
            totalViews: { $sum: "$views" },
            totalCart: { $sum: "$cart" },
            },
        },
        {
            $project: {
            _id: 0,
            totalClicks: 1,
            totalViews: 1,
            totalCart: 1,
            },
        },
        
    ]);


    const totalSales = await orderProductModel.aggregate([
    {
        $match: {
        seller_id: new mongoose.Types.ObjectId(seller_id),
        },
    },
    {
        $group: {
        _id: null,
        totalQuantity: { $sum: "$quantity" },
        },
    },
    ]);
    

    return responseFun(true, {message:"success", data:{...totalClick[0], totalSales: totalSales[0].totalQuantity || 0}}, 200)
  }catch(error){
    console.log(error);
    return responseFun(false, {message:error.message}, 500)
  }

}