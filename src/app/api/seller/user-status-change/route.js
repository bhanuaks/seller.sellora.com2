import { responseFun } from "@/Http/helper";
import mongoose from "mongoose";
import SellerReturnWindow from "@/Http/Models/sellerReturnWindow";
import { connectDb } from "../../../../../lib/dbConnect";
import { sellerModel } from "@/Http/Models/sellerModel";
import SellerUserPermissionModel from "@/Http/Models/SellerUserPermissionModel";

export async function POST(request) {
    await connectDb();
    const { user_id } = await request.json();
    
    //const user_id = atob(token);

    const sellerDetail = await sellerModel.findOne({ _id: user_id });
    
    try{ 
        if(sellerDetail){
            //console.log(sellerDetail)
            let statusChange;
            if(sellerDetail.status == 'Active'){
                statusChange = 'Deactive'
            } else {
                statusChange = 'Active'
            }
            const sellerUpdate = await sellerModel.findByIdAndUpdate(sellerDetail._id,{
                        status:statusChange, 
                        
                    })
            
            

                console.log(sellerUpdate)

             return responseFun(true,{message:'Status change successfully.'}, 200)

    
  

       // console.log(returnWindowMap)
       
    } else {
        return responseFun(false,{message:'Seller not found.'}, 403)
    } 
    }catch(error){
        console.log(error);
        return responseFun(false,{error}, 200)
    }

         
}