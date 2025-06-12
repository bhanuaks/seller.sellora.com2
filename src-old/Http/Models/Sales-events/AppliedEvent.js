const { Schema, default: mongoose } = require("mongoose");


const appliedEventSchema = new Schema({

    event_id:{
        type:mongoose.Types.ObjectId,
        ref:"SalesEvent",
        require:true
    },
    seller_id:{
        type:mongoose.Types.ObjectId,
        ref:"Seller"
    },

    discount:{
        type:Number,
        require:true
    }

}, {timestamps:true})


export const appliedEventModal = mongoose.models.AppliedEvent || mongoose.model("AppliedEvent", appliedEventSchema);



const appliedEventProductSchema = new Schema({

    event_id:{
        type:mongoose.Types.ObjectId,
        ref:"SalesEvent",
        require:true
    },
    appliedEventId:{
        type:mongoose.Types.ObjectId,
        ref:"AppliedEvent"
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
    discount:{
        type:Number, 
        default:0, 
    }


}, {timestamps:true})


export const appliedEventProductModal = mongoose.models.AppliedEventProduct || mongoose.model("AppliedEventProduct", appliedEventProductSchema);