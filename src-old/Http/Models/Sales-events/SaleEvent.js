const { Schema, default: mongoose } = require("mongoose");


const saleEventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
  },
  applyBeforDate: {
    type: Date,
    required: true,
  },
  applyBeforTime: {
    type: String,  
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  closeDate: {
    type: Date,
    required: true,
  },
  closeTime: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Active", "Deactive"],
  },
  image: {
    type: String,   
  },
   slug: {
    type: String,   
  },
}, { timestamps: true });


export const saleEventModal = mongoose.models.SalesEvent || mongoose.model("SalesEvent", saleEventSchema);

const eventDiscountDataSchema =  new Schema({
    event_id:{
        type:mongoose.Types.ObjectId,
        ref:"SalesEvent"
    },
    discountUpTo:Number,
    increaseSellUpTo:Number
},{timestamps:true})

export const EventDiscountDataModal = mongoose.models.EventDiscountData || mongoose.model("EventDiscountData", eventDiscountDataSchema);