import { connectDb } from "@/Http/dbConnect2";
import { responseFun } from "@/Http/helper";
import { brandModel, brandSellerModel } from "@/Http/Models/branModel";
import { sellerModel } from "@/Http/Models/sellerModel";
import mongoose from "mongoose";
import { getLoginSeller } from "../../getLoginUser/route";

export async function GET(request) {
    await connectDb();
     const { searchParams } = new URL(request.url)
    //  const seller_id = searchParams.get('user_id');
     const status = searchParams.get('status');
     const search = searchParams.get('search');

        const seller = await getLoginSeller();

        if(!seller){
            return responseFun(false, {message:"unautorized request"}, 403)
        }
        const sellerObjId = new mongoose.Types.ObjectId(seller._id)
     try{
        const query = {seller_id:sellerObjId}
        if(status){
            query.status = status
        }

        if (search && search != null) {
            const searchNumber = parseFloat(search);
            query.$or = [
                { name: { $regex: search, $options: "i" } }, 
                
            ];

            if (!isNaN(searchNumber)) {
                query.$or.push({ request_id: searchNumber });
            }
        }


        const totalBrand = await brandSellerModel.countDocuments({seller_id: sellerObjId});
        const totalApproveBrand = await brandSellerModel.countDocuments({status:1, seller_id: sellerObjId});
        const totalPendingBrand = await brandSellerModel.countDocuments({status:2, seller_id: sellerObjId});
        const brandList  = await brandSellerModel.find(query)
        const sellerData = await sellerModel.findById(seller._id)
        return responseFun(true, {brandList, seller:sellerData, total:{totalBrand,totalApproveBrand,totalPendingBrand}}, 200)

     }catch(error){
        console.log(error);
        return responseFun(false, {message:error.message}, 200)
     }
}

export async function DELETE(request) {
    
    const {_id} = await request.json();

    try{
        const res =  await brandSellerModel.findByIdAndDelete(_id);
        return responseFun(true, {message: "Brand deleted"}, 200)
    }catch(error){
        console.log(error);
        return responseFun(false, {message:error.message}, 200)
    }
}