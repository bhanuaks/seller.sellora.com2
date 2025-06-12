import { responseFun } from "@/Http/helper";
import { errorProductModal } from "@/Http/Models/ErroreModal/erroreModel";
import { connectDb } from "../../../../../../lib/dbConnect";
import { countTotalProduct } from "../product-listing/route";
import mongoose from "mongoose";




export async function GET(request) {
    await connectDb();
     const { searchParams } = new URL(request.url);
    const seller_id = searchParams.get('seller_id')  

     let page = parseInt(searchParams.get('page')) || 1
    let pageSize = parseInt(searchParams.get('pageSize')) || 50
    const skip = (page - 1) * pageSize;
   
    try{

        const errorList = await errorProductModal.find({seller_id:new mongoose.Types.ObjectId(seller_id)}).populate([
            { path: "category_id" }, 
            // { path: "subcategory_id" }, 
            // { path: "childcategory_id" }, 
            { path: "brand_id" }, 
            ])
        .sort({ sn: 1 })
        .skip(skip)
        .limit(pageSize);

          const totalData = await countTotalProduct({seller_id:seller_id});
         let totalCount = await errorProductModal.countDocuments();

          let pagination= {
            totalCount,
            page,
            pageSize, 
            totalPages: Math.ceil(totalCount / pageSize),
        };
        return responseFun(true, {
                    list:errorList, 
                    pagination:pagination, 
                    totalData
                },200)

    }catch(error){
        console.log(error);
         return responseFun(false, {error:error.message},200)
    }
}


export async function DELETE(request) { 
    const {_id } = await request.json();

    try {
            const deleteRes = await errorProductModal.findByIdAndDelete(_id);
             return responseFun(true, {message:"Deleted successfully."}, 200)
    } catch (error) {
         console.log(error);
         return responseFun(false, {message:error.message},200)
    }
}
