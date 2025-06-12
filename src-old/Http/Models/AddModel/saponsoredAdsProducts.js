const { Schema, default: mongoose } = require("mongoose");


const sponsoredAdsProductsSchema = new Schema({
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

    product_id:{
        type:mongoose.Types.ObjectId,
        ref:"Product",
        require:true
    },

     variant_id:{
        type:mongoose.Types.ObjectId,
        ref:"ProductVariant",
        require:true
    },

    click:{
        type:Number,
        default:0
    }

}, {timestamps:true})


export const AdsProductsModals = mongoose.models.AdsProduct || mongoose.model("AdsProduct", sponsoredAdsProductsSchema);