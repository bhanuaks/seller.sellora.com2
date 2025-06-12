import { responseFun } from "@/Http/helper";
import { productModel, productVariantModel } from "@/Http/Models/productModel";
import { ProductReviewModal } from "@/Http/Models/ProductReview";
import mongoose from "mongoose";


export async function POST(request) {
    
    const { product_id, variant_id } =  await request.json();

    try{
       
    const product = await productModel.findById(product_id).select("_id product_name main_image").lean();
  
    if (!product) {
      return responseFun(false, { message: "Product not found" }, 404);
    }
  

    const variant = await productVariantModel.findById(variant_id)
      .select("sku msrp consumerSalePrice currency withImage image_1")
      .lean();

  
    if (!variant) {
      return responseFun(false, { message: "Variant not found" }, 404);
    }

   
    const ratingResult = await ProductReviewModal.aggregate([
      {
        $match: {
          product_id: new mongoose.Types.ObjectId(product_id),
        },
      },
      {
        $group: {
          _id: "$product_id",
          averageRating: { $avg: "$star" },
        },
      },
    ]);

    const averageRating = ratingResult[0]?.averageRating || 0;

    const  productWithVariant = {
        ...product,
        variant,
        averageRating,
      };

    return responseFun(true, {
      message: "success",
      product: productWithVariant,
    }, 200);

    }catch(error){
        console.log(error);
        return responseFun(false, {error: error.message}, 500)
    }
}