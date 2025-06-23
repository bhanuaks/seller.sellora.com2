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

      category_id:{
        type:mongoose.Types.ObjectId,
        ref:"Category",
        required:[true, "Category is required"]
    },

     subcategory_id:{
        type:mongoose.Types.ObjectId,
            ref:"subCategory",
            required: false,
            default: null,
    },
    childcategory_id:{
        type:mongoose.Types.ObjectId,
        ref:"ChildCategory",
        required: false,
        default: null,
    },

     variant_id:{
        type:mongoose.Types.ObjectId,
        ref:"ProductVariant",
        require:true
    },

    views:{
        type:Number,
        default:0
    },
    clicks:{
        type:Number,
        default:0
    }

}, {timestamps:true})


export const AdsProductsModals = mongoose.models.AdsProduct || mongoose.model("AdsProduct", sponsoredAdsProductsSchema);