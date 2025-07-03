import { responseFun } from "@/Http/helper";
import mongoose from "mongoose";
import SellerReturnWindow from "@/Http/Models/sellerReturnWindow";
import { connectDb } from "../../../../../lib/dbConnect";
import { sellerModel } from "@/Http/Models/sellerModel";
import SellerUserPermissionModel from "@/Http/Models/SellerUserPermissionModel";


export async function GET(request) {
    await connectDb();
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token')
    
    const user_id = atob(token);

    //const sellerDetail = await sellerModel.findOne({ _id: user_id });

     try{
     
    const permissions = await SellerUserPermissionModel.find({ user_id }).select('menu_id permission');

    const permissionMap = {};
    permissions.forEach((perm) => {
      permissionMap[perm.menu_id.toString()] = perm.permission;
    }); 
     // console.log(permissionMap)
     return responseFun(true, permissionMap, 200)
        
    }catch(error){
        // console.log(error);
        return responseFun(false,{error},200)
    }
        
    
}

export async function POST(request) {
    await connectDb();
    const { userDetail, token } = await request.json();
    
    const user_id = atob(token);

    const sellerDetail = await sellerModel.findOne({ _id: user_id });
    
    try{ 
        if(sellerDetail){
        
        userDetail.map(async(item) => {

        await SellerUserPermissionModel.findOneAndUpdate(
        { user_id, menu_id:item.id },
        { permission: item.value },
        { upsert: true, new: true }
        );

    })
  

       // console.log(returnWindowMap)
        return responseFun(true,{message:'Permission change successfully.'}, 200)
    } else {
        return responseFun(false,{message:'Seller not found.'}, 403)
    } 
    }catch(error){
        console.log(error);
        return responseFun(false,{error}, 200)
    }

         
}

