import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { responseFun } from "@/Http/helper";
import { influencerCampaignModal, influencerCampaignProductModal } from "@/Http/Models/AddModel/InfluencerCamaign";
import mongoose from "mongoose";


export async function POST(request) {
    
    const { 
        _id,
        campaignName, 
        dailyBudget, 
        startDate, 
        endDate, 
        costPerOrder, 
        selectedProduct } = await request.json();

    const seller = await getLoginSeller();

    if(!seller){
        return responseFun(false, {message:"unauthorized user"}, 401)
    }
    const seller_id = seller._id


    try {
        
        let compaign  = null;
        if(_id){
            compaign = await influencerCampaignModal.findByIdAndUpdate(_id, {
                    campaignName, 
                    dailyBudget, 
                    startDate, 
                    endDate,
                    costPerOrder, 
                });

         await influencerCampaignProductModal.deleteMany({influencerCampaignId : compaign._id});
        }else{

            compaign = await influencerCampaignModal.create({
                seller_id,
                campaignName, 
                dailyBudget, 
                startDate, 
                endDate,
                costPerOrder, 
            })

        }
         
         
        const productDoc = selectedProduct.map((product)=>{
            return {
                influencerCampaignId : compaign._id,
                seller_id            : seller_id,
                product_id           : product.product_id,
                variant_id           : product.variant_id,
            }
        })
        
         await influencerCampaignProductModal.insertMany(productDoc); 
         return responseFun(true, { message : "Campaign has been created successfully." }, 200)
    } catch (error) {
        console.log(error);
        return responseFun(false, { message : error.message }, 500)
    }


}


export async function GET(request) {
    
    const seller = await getLoginSeller();

    if(!seller){
        return responseFun(false, {message:"unauthorized user"}, 401)
    }
    const seller_id = seller._id

    try { 
        const compaign = await influencerCampaignModal.findOne({seller_id:new mongoose.Types.ObjectId(seller_id)});
        // const compaignProduct = await influencerCampaignProductModal.find({influencerCampaignId:compaign._id});
        const compaignProduct = await influencerCampaignProductModal.aggregate([
                    {
                        $match:{
                            influencerCampaignId:compaign._id,
                        }
                    },
                    {
                        $lookup:{
                            from:"products",
                            localField:"product_id",
                            foreignField:"_id",
                            as:"product"
                        }
                    },
                    {
                        $unwind:{
                            path:"$product",
                            preserveNullAndEmptyArrays:true
                        }
                    },
        
                     {
                        $lookup:{
                            from:"productvariants",
                            localField:"variant_id",
                            foreignField:"_id",
                            as:"variant"
                        }
                    },
                    {
                        $unwind:{
                            path:"$variant",
                            preserveNullAndEmptyArrays:true
                        }
                    },
                    {
                        $project:{
                            "_id":"$product._id",
                            "ads_id":1,
                            "seller_id":1,
                            "product_id":1,
                            "variant_id":1,
                            "product_name":"$product.product_name",
                            "main_image":"$product.main_image", 
                            "variant" :1
                        }
                    }
                     
                    
                ]);


        return responseFun(true, {message: "success", compaign, compaignProduct}, 200)
    } catch (error) {
        console.log(error);
        return responseFun(false, {message: error.message }, 200)    
    }
    
}