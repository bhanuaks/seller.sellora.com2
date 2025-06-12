import mongoose, { Schema } from "mongoose";

const adsStatusSchema =  new Schema({
    ads_id:{
        type:mongoose.Types.ObjectId,
        ref:"SponsoredAds",
        require:true
    },
    seller_id:{
        type:mongoose.Types.ObjectId,
        ref:"Seller",
        require:true, 
    }, 

    views:{
        type:Number, 
        default:0
    }, 
     clicks:{
        type:Number, 
        default:0
    }, 

     orders:{
        type:Number, 
        default:0
    }, 
     sales:{
        type:Number, 
        default:0
    },
    
}, {timestamps:true})


export const AdsStatusModal = mongoose.models.AdsStatus || mongoose.model("AdsStatus", adsStatusSchema);