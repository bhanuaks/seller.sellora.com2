import { responseFun } from "@/Http/helper";
import { productModel } from "@/Http/Models/productModel";
import { getLoginSeller } from "../../getLoginUser/route";
import mongoose from "mongoose";



export async function POST(request) {
    
    const { searchText } = await request.json();

    const seller = await getLoginSeller();
    if(!seller){
        return responseFun(false, {message:"unauthorized request"}, 403)
    }
    const seller_id = seller._id;
    try{
        let list = [];

        if(searchText){
            list = await productModel.find({
                product_name : { $regex:searchText, $options:"i" },
                save_as_draft:"0",
                // seller_id: new mongoose.Types.ObjectId(seller_id)
            })
            .select("_id category_id seller_id subcategory_id childcategory_id brand_id product_name slug main_image")
            .lean()
        }
        
        return responseFun(true, { list}, 200)
    }catch(error){
        console.log(error);
        return responseFun(false, {message:error.message }, 500)
    }
}