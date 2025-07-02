import { encryptText, isEmpty, responseFun } from "@/Http/helper";
import { sellerModel } from "@/Http/Models/sellerModel";
import mongoose from "mongoose";
import SellerReturnWindow from "@/Http/Models/sellerReturnWindow";
import bcrypt from "bcryptjs";
import { connectDb } from "../../../../lib/dbConnect";
import NavMenuModel from "@/Http/Models/NavMenuModel";



export async function GET(request) {
    await connectDb();
    //const { searchParams } = new URL(request.url);
    //const seller_id = atob(searchParams.get('token'))
    //console.log('okkkkkkkkkkkkkkkkkkk',seller_id)   
    try{  
        
        const menuList = await NavMenuModel.aggregate([
            {
                $match: { pid: null }
            },
            {
                $lookup: {
                from: 'navmenus',
                localField: '_id',
                foreignField: 'pid',
                as: 'submenu'
                }
            },
            {
                $sort: { order: 1 }
            }
            ]);

        
        return responseFun(true,{data:menuList}, 200) 
    }catch(error){
        console.log(error);
        return responseFun(false,{error}, 200)
    }

         
}