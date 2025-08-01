import { responseFun } from "@/Http/helper";
import {
  productVariantModel,
  variantThresholdSchemaModal,
} from "@/Http/Models/productModel";
import { getLoginSeller } from "../../getLoginUser/route";
import mongoose from "mongoose";

export async function POST(request) {
  const { sku, category_id } = await request.json();

  const seller = await getLoginSeller();
  if (!seller) {
    return responseFun(false, { message: "unauthorized user" }, 403);
  }
  try {
    const variantData = await productVariantModel.aggregate([
      {
        $match: {
          sku: sku,
          seller_id: new mongoose.Types.ObjectId(seller._id),
        },
      },
      {
        $lookup: {
          from: "products",
          let: { productId: "$product_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$_id", "$$productId"] },
                    {
                      $eq: [
                        "$category_id",
                        new mongoose.Types.ObjectId(category_id),
                      ],
                    },
                  ],
                },
              },
            },
          ],
          as: "product",
        },
      },
      {
        $match: {
          $expr: { $gt: [{ $size: "$product" }, 0] },
        },
      },
    ]);

    
    const variant = variantData.length > 0 ? variantData[0] : null;
    // const variant = await productVariantModel.findOne({
    //   sku: sku,
    //   seller_id: new mongoose.Types.ObjectId(seller._id),
    // });
    let returnData;
    if (variant) {
      const threshold = await variantThresholdSchemaModal
        .find({ variant_id: variant._id })
        .sort({ unit: 1 })
        .lean();
      returnData = {
        ...variant,
        threshold: threshold,
      };
    }
    return responseFun(true, { variant: returnData }, 200);
  } catch (error) {
    console.log(error);
    return responseFun(false, { message: error.message }, 200);
  }
}
