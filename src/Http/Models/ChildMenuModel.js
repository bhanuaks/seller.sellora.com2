const { Schema, default: mongoose } = require("mongoose");


const childMenuSchema = new Schema({
    name:{
        type:String, 
        required: true,
    },
    slug:{
        type:String, 
         required: true,
    },
    
   menuId: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'NavMenu',
     default: null
  },
  subMenuId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NavMenu',
    default: null
  },
  permission: {
      type: String,
      enum: ['Edit', 'View'], // Only these values are allowed
      default: 'View', // Default to 'View' if not specified
    },
    
    

}, {timestamps:true})

const ChildMenuModel = mongoose.models.NavPermissionMenu || mongoose.model("NavPermissionMenu", childMenuSchema);
export default ChildMenuModel