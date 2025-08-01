import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { connectDb } from "@/Http/dbConnect2";
import { responseFun } from "@/Http/helper";
import { AdsStatusModal } from "@/Http/Models/AddModel/campaignStatus";
import { SponsoredAdsModal } from "@/Http/Models/AddModel/SponsoredAdsModal";
import { orderProductModel } from "@/Http/Models/order";
import mongoose from "mongoose";


export async function GET(request) {

    await connectDb();
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

          const result = await SponsoredAdsModal.aggregate([
            {
                $match:{
                    seller_id : new mongoose.Types.ObjectId(seller_id)
                }
            },
            {
                $group:{
                    _id:null,
                    totalSpendAmount : { $sum :"$totalDeductedAmount" },
                    adIds: { $push: "$_id" }
                }
            }
          ]);

           const totalSpendAmount = result[0]?.totalSpendAmount || 0;
            const adsIdsArray = result[0]?.adIds || []; 
          let report = adsReports.length > 0 ? adsReports[0] :{};


          const orderProduct = await orderProductModel.aggregate([
            {
                $match:{ 
                      ads_id : { $in : adsIdsArray },
                      order_status : { $in : [1, 2, 3, 4] } 
                }
            },
             {
                $group: {
                    _id: null,
                    countOrder: { $sum: 1 },
                    totalSales: { $sum: "$price" },
                    saleQuantity: { $sum: "$quantity" }
                }
            }
          ])
           const resultData = orderProduct.length > 0 ? orderProduct[0] : null;
          const returnData = {
             countOrder : resultData?.countOrder || 0,
            totalSales : resultData?.totalSales || 0,
            saleQuantity : resultData?.saleQuantity || 0,
            saleQuantity : resultData?.saleQuantity || 0,

            totalViews: report?.totalViews,
            totalClicks: report?.totalClicks,
            totalSpendAmount:totalSpendAmount
          }
       

        return responseFun(true, {message:"success", adsReports: returnData}, 200)
    }catch(error){
        console.log(error.message);
        return responseFun(false, {message:error.message}, 500)
    }
}