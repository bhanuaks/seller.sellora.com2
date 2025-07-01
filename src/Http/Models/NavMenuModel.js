const { Schema, default: mongoose } = require("mongoose");


const navMenuSchema = new Schema({
    name:{
        type:String, 
        required: true,
    },
    slug:{
        type:String, 
         required: true,
    },
    order:{
        type:Number, 
         
    },
    pid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NavMenu',
    default: null
  },
  status: {
      type: String,
      enum: ['Active', 'Deactive'], // Only these values are allowed
      default: 'Active', // Default to 'Active' if not specified
    },
    

}, {timestamps:true})

const NavMenuModel = mongoose.models.NavMenu || mongoose.model("NavMenu", navMenuSchema);
export default NavMenuModel