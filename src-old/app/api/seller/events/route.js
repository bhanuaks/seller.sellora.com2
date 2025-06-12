import { responseFun } from "@/Http/helper";
import { EventDiscountDataModal, saleEventModal } from "@/Http/Models/Sales-events/SaleEvent";
import mongoose from "mongoose";
import { getLoginSeller } from "../../getLoginUser/route";



export async function GET(request) {
    
    const { searchParams } = new URL(request.url) 
    const searchText = searchParams.get("searchText") || "";
    const status = searchParams.get("status") || "";
    const slug = searchParams.get("slug") || "";
 
    
    const seller = await getLoginSeller();
    if(!seller){
         return responseFun(false, {message:"unauthrized request"}, 401)
    }
    const seller_id = seller._id;

    try{    

        if(slug){
             const  eventData = await saleEventModal.findOne({slug:slug}).lean();
             const eventDiscountData = await EventDiscountDataModal.find({event_id: eventData._id}).select("discountUpTo increaseSellUpTo").sort({discountUpTo:1})
              return responseFun(true, { message:"success", event:{...eventData, discountData:eventDiscountData } }, 200); 
        }
            const query = {};
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if(status=="Upcoming"){
                 query.startDate = { $gte: today };
            }
            else if(status=="Expired"){
                query.closeDate = { $lt: today };
            }
        
        //    const  events = await saleEventModal.find(query).sort({createdAt:-1}).lean();
            const pipeline = [
            {
                $match:query
            },
            {
                $lookup:{
                    from:"appliedevents",
                    let : { eventId : "$_id"},
                    pipeline:[
                        {
                            $match:{
                                $expr:{
                                    $and:[
                                        { $eq: ["$event_id", "$$eventId"] },
                                         { $eq: ["$seller_id", new mongoose.Types.ObjectId(seller_id)] }
                                    ]
                                }
                        }
                    }
                    ],
                    as:"appliedInfo"
                }
            },
            {
                $addFields: {
                    appliedInfo: {
                        $cond: {
                            if: { $gt: [{ $size: "$appliedInfo" }, 0] },
                            then: true,
                            else: false
                        }
                        }
                    }
                },

            {
                $sort:{createdAt:-1}
            }
           ];

            if(status=="Active"){
                pipeline.push( 
                    {
                        $match: {
                            appliedInfo: { $ne: false }   
                        }
                    }
                )
            }

           const  events2 = await saleEventModal.aggregate(pipeline);
        
        return responseFun(true, { message:"success", events:events2 }, 200);

    }catch(error){
        console.log(error.message);
        return responseFun(false, {message:error.message}, 500);
    } 
}
