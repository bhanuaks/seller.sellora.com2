import { connectDb } from "@/Http/dbConnect2";
import { responseFun } from "@/Http/helper";
import { productVariantModel } from "@/Http/Models/productModel";


export async function POST(request) {
    
    await connectDb();
    const { product_id, variant_id, impactPrice } = await request.json();

    try{
        if(!impactPrice || !variant_id){
             return responseFun(false, {message:"parameter is missing."}, 401)
        }
        const variant = await productVariantModel.findById(variant_id);
        if(variant){
            
            variant.consumerSalePrice = impactPrice;
            variant.update_impact_price = "Yes";
            variant.update_impact_price_date = new Date();
            await variant.save();
        }
        return responseFun(true, {message:"Impact price applied successfully!"}, 200)
    }catch(error){
        return responseFun(false, {message:error.message}, 500)
    }
}