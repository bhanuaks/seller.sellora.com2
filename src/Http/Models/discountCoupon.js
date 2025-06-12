const { Schema, default: mongoose } = require("mongoose");

const discountCouponSchema = new Schema({
  discount: {
    type: Number,
    required: true
  },
  remark: {
    type: String
  },
  offerId: {
    type: String,
    unique: true,
    required: true 
  },
  startDate: {
    type: Date,
    required: true
  },
    endDate: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
            return value > this.startDate;
            },
            message: 'End date must be greater than start date.'
        }
    },
  status: {
    type: String,
     default: "Active",
    enum: ["Active", "Deactive"],
    required: true
  },
  
  startTime:String, 
  endTime:String

}, { timestamps: true });

export const discountCouponModal = mongoose.models.DiscountCoupon || mongoose.model("DiscountCoupon", discountCouponSchema);