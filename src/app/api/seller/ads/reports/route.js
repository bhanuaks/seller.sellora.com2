import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { responseFun } from "@/Http/helper";
import { AdsStatusModal } from "@/Http/Models/AddModel/campaignStatus";
import mongoose from "mongoose";


export async function GET(request) {

    const seller = await getLoginSeller();
    if(!seller){
        return responseFun(false, {message:"unauthorized user"}, 403)
    }
    const seller_id = seller._id;
    try{
       const adsReports = await AdsStatusModal.aggregate([
                {
                    $match: {
                    seller_id: new mongoose.Types.ObjectId(seller_id)
                    }
                },
                {
                    $group: {
                    _id: null,
                    totalViews: { $sum: "$views" },
                    totalClicks: { $sum: "$clicks" },
                    totalOrders: { $sum: "$orders" },
                    totalSales: { $sum: "$sales" }
                    }
                }
          ]);
        return responseFun(true, {message:"success", adsReports: adsReports.length>0 ?adsReports[0] :{} })
    }catch(error){
        console.log(error.message);
        return responseFun(false, {message:error.message}, 500)
    }
}