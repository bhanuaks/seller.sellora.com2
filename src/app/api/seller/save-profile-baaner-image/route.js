import { responseFun } from "@/Http/helper";
import { sellerBusinessProfileModel } from "@/Http/Models/sellerModel";
import mongoose from "mongoose";
import { getLoginSeller } from "../../getLoginUser/route";
import { uploadImageFun } from "../../uploadImage/route";
import path from "path";

export async function POST(request) {
    const formData = await request.formData();
    const uploadingFile = formData.get("banner");

     const seller = await getLoginSeller();
        if(!seller){
            return responseFun(false, "unauthrized request.", 200);
        }

    try{
       let imageUrl = ""; 
          if (!(uploadingFile instanceof File)) {
            return responseFun(false, "No file provided", 200);
          }  
            if(uploadingFile && typeof uploadingFile !== "string"){
              const extension = path.extname(uploadingFile?.name);
              const fileNameBase = `${Date.now()}-${Math.random()
              .toString(36)
              .substring(2, 15)}`; 
              const filename = `${fileNameBase}.${extension}`;
             const response =  await uploadImageFun(uploadingFile, `public/uploads/seller/banner`, filename, 1400);  
             if(response){ 
                imageUrl = `uploads/seller/banner/${filename}`; 
             }
          }


            const existData = await sellerBusinessProfileModel.findOne({seller_id:new mongoose.Types.ObjectId(seller._id)})
                  let updateData = null;
                  if(existData){
                      updateData = await sellerBusinessProfileModel.updateOne(
                          {seller_id:new mongoose.Types.ObjectId(seller._id)},
                          { 
                              $set: {   
                                banner:imageUrl || existData.banner
                              }
                          }
                      )
                  }else{
                      updateData = await sellerBusinessProfileModel.create( 
                          {
                            banner:imageUrl
                          }
                      )
                  }
        return responseFun(true, "success", 200);
    }catch(error){
        console.log(error);
        return responseFun(false, "something went wrong. please try leter", 200)
    }
}