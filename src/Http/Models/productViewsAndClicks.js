const { Schema, default: mongoose } = require("mongoose");

const productViewSchema = new Schema(
  {
    product_id: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },

    variant_id: {
      type: mongoose.Types.ObjectId,
      ref: "ProductVariant",
    },
    views: {
      type: Number,
      default: 1,
    },
     deviceName:String,
     keyword:String,
  },
  
  { timestamps: true }
);

export const productViewsModal =
  mongoose.models.ProductViews ||
  mongoose.model("ProductViews", productViewSchema);

const productClickSchema = new Schema(
  {
    product_id: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
    variant_id: {
      type: mongoose.Types.ObjectId,
      ref: "ProductVariant",
    },
    clicks: {
      type: Number,
      default: 1,
    },
    deviceName:String,
  },
  { timestamps: true }
);

export const productClicksModal =
  mongoose.models.productClicks ||
  mongoose.model("productClicks", productClickSchema);
