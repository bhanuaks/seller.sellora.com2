const { Schema, default: mongoose } = require("mongoose");


const sellerFeedBackToAdminSchema = new Schema({
    seller_id:{
        type: mongoose.Types.ObjectId,
        ref:"Seller",
        required:true
    },
    feedback:{
        type:String,
        required:true
    }
}, {timestamps:true});


export const sellerFeedBackToAdminModal = mongoose.models.SellerAdminFeedback || mongoose.model("SellerAdminFeedback", sellerFeedBackToAdminSchema);