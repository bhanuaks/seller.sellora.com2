const { Schema, default: mongoose } = require("mongoose");



const userSellerChatSchema =  new Schema({
    single_order_id:{
        type:mongoose.Types.ObjectId,
        ref:"OrderProduct"
    },
    senderId:{
        type:mongoose.Types.ObjectId,
         required: true 
    },
    message: { type: String, required: true },
    sendBy:{
        type:String
    }
}, {timestamps:true})

export const userSellerChatModal = mongoose.models.UserSellerChat || mongoose.model("UserSellerChat", userSellerChatSchema)