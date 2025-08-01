const { Schema, default: mongoose } = require("mongoose");


const productReviewScema = new Schema({
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
      order_id:{
        type:String,
    },
     sub_order_id:{
        type:String,
    },
    
     seller_id:{
            type:mongoose.Types.ObjectId,
            ref:"Seller"
        },
    title:{
        type:String,    
    },
    star:{
        type:Number,    
    },
    files:{
        type:Array, 
    },
    message:{
        type:String,  
    }, 
},{timestamps:true})


export const ProductReviewModal = mongoose.models.ProductReview || mongoose.model("ProductReview", productReviewScema);