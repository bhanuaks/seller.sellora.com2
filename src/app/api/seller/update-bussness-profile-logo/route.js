import { responseFun } from "@/Http/helper";
import { getLoginSeller } from "../../getLoginUser/route";
import path from "path";
import { uploadFileFun } from "../../uploadImage/route";
import { sellerBusinessProfileModel } from "@/Http/Models/sellerModel";
import mongoose from "mongoose";
export async function POST(request) {
    
     const formData = await request.formData();
    const uploadingFile = formData.get("profileLogo");

      const seller = await getLoginSeller();
    if(!seller){
        return responseFun(false, "unauthrized request.", 200);
    }
    const seller_id = seller._id;

    try {
        
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
                     const response =  await uploadFileFun(uploadingFile, `public/uploads/seller/profile_brand`, filename, 1400);  
                     if(response){ 
                        imageUrl = `uploads/seller/profile_brand/${filename}`; 
                     }
                  }

        
                  const existData = await sellerBusinessProfileModel.findOne({seller_id:new mongoose.Types.ObjectId(seller_id)})
                  let updateData = null;
                    if(existData){
                        updateData = await sellerBusinessProfileModel.updateOne(
                            {seller_id:new mongoose.Types.ObjectId(seller_id)},
                            { 
                                $set: {   
                                    profileLogo:imageUrl || existData.profileLogo
                                }
                            }
                        )
                    }else{
                        updateData = await sellerBusinessProfileModel.create( 
                            {
                                profileLogo:imageUrl
                            }
                        )
                    }
            return responseFun(true, "success", 200);
    } catch (error) {
        console.log(error);
        return responseFun(false, {message:error.message}, 500)
    }
}