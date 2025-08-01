import { connectDb } from "@/Http/dbConnect2";
import { responseFun } from "@/Http/helper";
import { productVariantModel } from "@/Http/Models/productModel";


export async function POST(request) {

    await connectDb();

    const {variant_id, status} = await request.json()

    let listingStatus = null
    if(status=="Archive"){
        listingStatus = 0
    }else if(status=="Delete"){
        listingStatus = 4
    }
   
    try{
        const variant = await productVariantModel.findById(variant_id);
        variant.listingStatus = listingStatus
        await variant.save();
        return responseFun(true, {message:"success"}, 200)
    }catch(error){
        console.log(error);
        return responseFun(false, {error}, 200)
    }
}
