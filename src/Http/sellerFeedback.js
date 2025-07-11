const { Schema, default: mongoose } = require("mongoose");


const sellerFeedBackScema = new Schema({
    user_id:{
        type:mongoose.Types.ObjectId,
        ref:"Consumer",
        require:[true, "user id required"]
    },
    product_id:{
        type:mongoose.Types.ObjectId,
        ref:"Product"
    },
    variant_id:{
        type:mongoose.Types.ObjectId,
        ref:"ProductVariant",
        default: null, 
        required: false  
    }, 
     seller_id:{
        type:mongoose.Types.ObjectId,
        ref:"Seller"
    },

    order_id:String,
    suborder_id:String, 
     
    star:{
        type:Number,    
    }, 
    message:{
        type:String,  
    }, 

},{timestamps:true})


export const sellerFeedbackModal = mongoose.models.sellerFeedback || mongoose.model("sellerFeedback", sellerFeedBackScema);