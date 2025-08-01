import { responseFun } from "@/Http/helper";
import { sellerModel } from "@/Http/Models/sellerModel";
import { connectDb } from "../../../../../../lib/dbConnect";
import mongoose from "mongoose";
import SellerReturnWindow from "@/Http/Models/sellerReturnWindow";


export async function GET(request) {
    await connectDb();
    const { searchParams } = new URL(request.url);
    const seller_id = searchParams.get('seller_id')
    //console.log('okkkkk')   
    try{  
        
        const seller = await SellerReturnWindow.find({
            seller_id:seller_id
        })
        const returnWindowMap = Object.fromEntries(
            seller.map(item => [item.category_id.toString(), item.seller_return])
        );
        const replacementWindowMap = Object.fromEntries(
            seller.map(item => [item.category_id.toString(), item.replacement])
        );

       // console.log(returnWindowMap)
        return responseFun(true,{data:returnWindowMap, replacement:replacementWindowMap}, 200) 
    }catch(error){
        console.log(error);
        return responseFun(false,{error}, 200)
    }

         
}

export async function POST(request) {
    await connectDb();
    const data = await request.json();
     
    const errors = {};

    //if(isEmpty(data.seller_id))errors.data.seller_id = "Seller id is required";
    const hasBlankValue = Object.values(data.return_window).every(value => value === '');
    if (hasBlankValue) {
       //errors.data.seller_id = "Seller id is required";
    }

    
    
    for (const [key, value] of Object.entries(data.return_window)) {
    //console.log(`Key: ${key}, Value: ${value}`);
    if(value !='' && key !=''){
        await SellerReturnWindow.updateOne(
        {
            seller_id: new mongoose.Types.ObjectId(data.seller_id),
            category_id: new mongoose.Types.ObjectId(key)
        },
        {
            $set: { seller_return: Number(value) }
        },
        { upsert: true }
        );


        }

    }

    return responseFun(true, {message:"Return window updated successfully."}, 200)

    
     
}