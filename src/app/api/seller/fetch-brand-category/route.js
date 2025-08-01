import { responseFun } from "@/Http/helper";
import { brandModel, brandSellerModel } from "@/Http/Models/branModel";
import { Category } from "../../../../../lib/categoryModel";
import mongoose from "mongoose";
import { connectDb } from "@/Http/dbConnect2";
import { getLoginSeller } from "../../getLoginUser/route";

export async function GET(request) {
    await connectDb();
    const { searchParams } = new URL(request.url)
    // const seller_id = searchParams.get('seller_id')
    
    const seller = await getLoginSeller()
    if(!seller){
        return responseFun(false, {message:"unauthorized request"}, 403)
    }
    const seller_id = seller._id
    const session = await mongoose.startSession();
    session.startTransaction();
    try{
       let brand = [];

            const sellerBrand = await brandSellerModel
            .find({ status: 1, seller_id: new mongoose.Types.ObjectId(seller_id) })
            .select("_id");

            if (sellerBrand.length > 0) {
            const brandIds = sellerBrand.map(item => item._id);
                
            brand = await brandModel.find({
                status: 1,
                _id: { $in: brandIds }
            });
            }
        const category = await Category.find({status:"Active"});
        session.commitTransaction();
        return responseFun(true, {brand, category}, 200)

    }catch(error){
        console.log(error);
        session.abortTransaction();
        return responseFun(false, {error}, 200)
    } finally {
        session.endSession(); 
    }
}