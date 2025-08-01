import { connectDb } from "@/Http/dbConnect2";
import { responseFun } from "@/Http/helper";
import { productModel, productOtherDetailModel, productVariantModel, variantThresholdSchemaModal } from "@/Http/Models/productModel";
import { getLoginSeller } from "../getLoginUser/route";
import mongoose from "mongoose";



export async function GET(request) {
    await connectDb()
        try {
        const startOfToday = new Date();
        startOfToday.setHours(0, 0, 0, 0);  
        const seller = await getLoginSeller();
        await variantThresholdSchemaModal.deleteMany({ createdAt: { $gte: startOfToday }, seller_id: new mongoose.Types.ObjectId(seller._id) });
        await productModel.deleteMany({ createdAt: { $gte: startOfToday }, seller_id: new mongoose.Types.ObjectId(seller._id) });
        await productVariantModel.deleteMany({ createdAt: { $gte: startOfToday }, seller_id: new mongoose.Types.ObjectId(seller._id) });
        await productOtherDetailModel.deleteMany({ createdAt: { $gte: startOfToday }, seller_id: new mongoose.Types.ObjectId(seller._id) });

        return responseFun(true, { message: "Documents deleted successfully." });
        } catch (error) {
        console.error(error);
        return responseFun(false, { message: error.message }, 500);
        }
}