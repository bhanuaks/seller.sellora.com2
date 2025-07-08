const { Schema, default: mongoose } = require("mongoose");

const viewSchema = new Schema({
     ads_id:{
            type:mongoose.Types.ObjectId,
            ref:"SponsoredAds",
            require:true
        }, 
        views:{
            type:Number,
            default:1 
        },  
         keyword:String
},{timestamps:true});

export const AdsViewsModal = mongoose.models.AdsViews || mongoose.model("AdsViews", viewSchema);

const ClickSchema = new Schema({
        ads_id:{
            type:mongoose.Types.ObjectId,
            ref:"SponsoredAds",
            require:true
        },  
        clicks:{
            type:Number,  
            default:1
        }, 
       totalDeductedAmount:{
            type:Number,  
            default:0,
        }
},{timestamps:true});

export const AdsClicksModal = mongoose.models.AdsClicks || mongoose.model("AdsClicks", ClickSchema);