
const { Schema, default: mongoose } = require("mongoose");

const appliedDiscountCouponSchema = new Schema({
  discount_coupon_id: {
    type: mongoose.Types.ObjectId,
    ref:"DiscountCoupon",
    required: true
  },
  product_id:{
        type:mongoose.Types.ObjectId,
        ref:"Product",
         required: true
    },
    variant_id:{
        type:mongoose.Types.ObjectId,
        ref:"ProductVariant", 
    }, 
     seller_id:{
        type:mongoose.Types.ObjectId,
        ref:"Sellor", 
         required: true
    },
}, { timestamps: true });


export const appliedDiscountCouponModal = mongoose.models.AppliedDiscountCoupon || mongoose.model("AppliedDiscountCoupon", appliedDiscountCouponSchema);