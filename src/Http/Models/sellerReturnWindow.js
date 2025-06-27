import mongoose from 'mongoose';

const { Schema } = mongoose;  

// Define the category schema

const sellerReturnWindowSchema = new Schema({
  seller_id:{
    type:mongoose.Types.ObjectId,
    ref:"Seller",
    required:[true, "Seller id is required."]
    },
  category_id:{
    type:mongoose.Types.ObjectId,
    ref:"Category",
    required:[true, "Category id is required."]
  },
  
  seller_return:{
    type:Number,
    default:null
  }
}, {timestamps:true})


const SellerReturnWindow = mongoose.models.SellerReturnWindow || mongoose.model("SellerReturnWindow", sellerReturnWindowSchema) 
export default SellerReturnWindow;
