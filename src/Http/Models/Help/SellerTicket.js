 

const { Schema, default: mongoose } = require("mongoose");


const ticketSchema = new Schema({

     ticketId:{
        type:String,
        unique:true
    },
    issueCategories:String,
    subject:String,
    description:String,
    screenshot:String,
    contactMethod:String,
    mobile:String,
    country_s_name:String,
    mobile_code:String,
    country:String,
    ext:String,
    email:String,
    status:{
        type:String,
        enum:["Pending", "In Progress", "Closed"],
        default:"Pending"
    }
  

}, {timestamps:true})

export const sellerTicketModal = mongoose.models.SellerTicket || mongoose.model("SellerTicket", ticketSchema);

const ticketCountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    counter: {
      type: Number,
      default: 1,
    },
  },
  { collection: "ticketCounter" }
);

export const sellerTicketCountModal =
  mongoose.models.ticketCounter ||
  mongoose.model("ticketCounter", ticketCountSchema);