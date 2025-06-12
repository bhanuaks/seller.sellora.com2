import { decodeJwt, responseFun } from "@/Http/helper";
import { sellerModel } from "@/Http/Models/sellerModel";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function PUT(request) {
    
    try{
        const token = request.cookies.get("sellerAuthToken")?.value;  
        if (!token) {
          throw new Error("Token not found");
        } 
        const seller =  decodeJwt(token);
        
        const sellerDbData =  await sellerModel.findById(seller?.seller?._id);

        if(!sellerDbData){ 
            return responseFun(false, {message:"profile not found!", status_code:403}, 200);
        }
        if(sellerDbData.complete_step < 9){
            return responseFun(false, {message:"Please complete profile first.", status_code:403}, 200);
        }
         
        if(seller && seller?.seller){
             await sellerModel.findByIdAndUpdate(seller?.seller?._id, {
                selfActive:"Active"
            })
        } 

        let updateSeller =  await sellerModel.findById(seller?.seller?._id);
          const tokenData = jwt.sign({
                                seller:updateSeller
                            },process.env.JWT_SECRET) 
            const response = NextResponse.json({
                    message:"update token",
                    status:true,
                    seller:updateSeller
                },  { status: 200 }); 
          response.cookies.set('sellerAuthToken',tokenData,{
                    expireIn:"1d",
                });
        return response
         
    }catch(error){
        console.log(error);
        return responseFun(false, error, 500);
    }
}



