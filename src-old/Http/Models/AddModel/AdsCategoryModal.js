const { Schema, default: mongoose } = require("mongoose");


const adsCategorySchema = new Schema({

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

    category_id:{
        type:mongoose.Types.ObjectId,
        ref:"Category",
        require:true, 
    }, 
    suggBid:String,
    bid:Number,
     

},{timestamps:true});


export const adsCategoryModal = mongoose.models.AdsCategory || mongoose.model("AdsCategory", adsCategorySchema);