const { Schema, default: mongoose } = require("mongoose");


const PermissionSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seller',
      required: true
    },
    menu_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'NavMenu',
      required: true
    },
    permission: {
      type: String,
      enum: ['none', 'view', 'edit', 'admin'],
      default: 'none'
    }
  },
  { timestamps: true }
);

const UserPermissionModel = mongoose.models.UserPermission || mongoose.model("UserPermission", PermissionSchema);
export default UserPermissionModel