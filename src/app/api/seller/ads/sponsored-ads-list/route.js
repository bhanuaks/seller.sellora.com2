import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { connectDb } from "@/Http/dbConnect2";
import { responseFun } from "@/Http/helper";
import { SponsoredAdsModal } from "@/Http/Models/AddModel/SponsoredAdsModal";
import mongoose from "mongoose";


export async function GET(request) {
    
    await connectDb();

    const seller = await getLoginSeller();
    if(!seller){
        return responseFun(false, {message:"unauthrized user"})
    }
    const seller_id = seller._id;

    const  { searchParams } =  new URL(request.url);
    const status = searchParams.get("status");
    const searchText = searchParams.get("searchText");

    const matchQuest = { seller_id: new mongoose.Types.ObjectId(seller_id)}
    if(status == "All"){
        // show all record
    }if(status == "Inactive"){
        matchQuest.Status = "Inactive"
    }else if(status == "Archive"){ 
        matchQuest.Status = "Archive" 
    }else if(status == "Active"){ 
        matchQuest.Status = "Active" 
    }

    if(searchText){
         matchQuest.campaignName = { $regex: searchText, $options: "i" };
    }
    try {
        const adsList = await SponsoredAdsModal.aggregate([
            {
                $match:matchQuest
            },
            {
                $lookup:{
                    from:"adsstatuses",
                    localField:"_id",
                    foreignField:"ads_id",
                    as:"repoonse"
                }
            },
            {
                $unwind:{
                 path: '$repoonse',
                  preserveNullAndEmptyArrays: false
                }
            },
            {
                $lookup:{
                    from:"orderproducts",
                    let : { eventId : "$_id" },
                    pipeline:[
                        {
                            $match:{
                                $expr:{
                                    $and:[
                                         { $eq: ["$ads_id", "$$eventId"] },
                                         { $in: ["$order_status", [1, 2, 3, 4]] }
                                    ]
                                }
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
                    ],
                    as:"orders"
                }
            },
            {
                $unwind:{
                    path: "$orders",
                    preserveNullAndEmptyArrays:true
                }
            },

             {
                $sort:{
                    createdAt:-1
                }
            },

        ])
        return responseFun(true, {message:"success", adsList}, 200)
    } catch (error) {
        console.log(error);
         return responseFun(false, {message:error.message}, 500)
    }
}