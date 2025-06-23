import { getLoginSeller } from "@/app/api/getLoginUser/route";
import { responseFun } from "@/Http/helper";
import { adsCategoryModal } from "@/Http/Models/AddModel/AdsCategoryModal";
import { AdsProductsModals } from "@/Http/Models/AddModel/saponsoredAdsProducts";
import { adsKeywordModal, ExcludeKeywordModal, SponsoredAdsModal } from "@/Http/Models/AddModel/SponsoredAdsModal";
import mongoose from "mongoose";



export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const updateId = searchParams.get("updateId") || undefined;

    if(!updateId){
        return responseFun(false, {message:"ad id in not recieved."}, 200)
    }

    const seller = await getLoginSeller();
    if(!seller){
         return responseFun(false, {message:"unauthorized request"}, 403)
    }
    const seller_id = seller._id;
    try{
        const ads = await SponsoredAdsModal.findById(updateId)
        // const adsCategory =  await adsCategoryModal.find({
        //     ads_id:ads._id,
        //     seller_id: new mongoose.Types.ObjectId(seller_id)
        // });

      const adsCategory = await adsCategoryModal.aggregate([
        {
            $match: {
            ads_id: ads._id,
            seller_id: new mongoose.Types.ObjectId(seller_id),
            },
        },
        {
            $lookup: {
            from: "categories",
            localField: "category_id",   
            foreignField: "_id",        
            as: "category",
            },
        },
        {
            $unwind: {
            path: "$category",
            preserveNullAndEmptyArrays: true,
            },
        },
        {
            $project: {
            ads_id: 1,
            category_id: 1,
            suggBid: 1,
            bid: 1,
            _id: "$category._id",      
            name: "$category.name",
            photo: "$category.photo",
            },
        },
        ]);
        
        const adProduct = await AdsProductsModals.aggregate([
            {
                $match:{
                    ads_id:ads._id,
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
                     "category_id":"$product.category_id",
                    "subcategory_id":"$product.subcategory_id",
                    "childcategory_id":"$product.childcategory_id", 
                    "variant_id":1,
                    "product_name":"$product.product_name",
                    "main_image":"$product.main_image", 
                    "variant" :1
                }
            }
             
            
        ]);

        return responseFun(true, {adProduct, campaign:ads, adsCategory}, 200);
    }catch(error){
        console.log(error.message);
        return responseFun(false, {message:error.message}, 500)
    }

}