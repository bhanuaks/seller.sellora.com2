const { Schema, default: mongoose } = require("mongoose");

const walletSchema  = new Schema({

    seller_id:{
        type:mongoose.Types.ObjectId,
        ref:"Seller",
        require:[true, "Seller is required"]
    },

    totalBalance:{
        type:Number,
        default:0,
    },

     adsBalance:{
        type:Number,
        default:0,
    },

     accruingCharge:{
        type:Number,
        default:0,
    },

     adsBilledAmount:{
        type:Number,
        default:0,
    } 
}, {timestamps:true});


export const SellerWalletModel = mongoose.models.SellerWallet || mongoose.model("SellerWallet", walletSchema)


const walletHistorySchema  = new Schema({

    seller_id:{
        type:mongoose.Types.ObjectId,
        ref:"Seller",
        require:[true, "Seller is required"]
    },
    transactionId:{
        type:String, 
    },
    receiptId:{
        type:String, 
    },
    amount:{
        type:Number
    },

     transactionType:{
        type:String, 
    },

     paymentMethod:{
        type:String
    }, 
     remarks:{
        type:String, 
    }, 
    status:{
        type:String, 
        enum:["Success", "Failed", "Canceled"],
        require:true
    }  

}, {timestamps:true});


export const SellerWalletHistoryModel = mongoose.models.SellerWalletHistory || mongoose.model("SellerWalletHistory", walletHistorySchema)


const countReceiptSchema = new mongoose.Schema({
  counter: {
    type: Number,
    default: 1,
  },
});

export const CountReceiptModel = mongoose.models.CountReceipt || mongoose.model("CountReceipt", countReceiptSchema)

