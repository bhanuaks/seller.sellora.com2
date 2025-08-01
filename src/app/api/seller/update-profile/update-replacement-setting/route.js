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

       // console.log(returnWindowMap)
        return responseFun(true,{data:returnWindowMap}, 200) 
    }catch(error){
        console.log(error);
        return responseFun(false,{error}, 200)
    }

         
}

export async function POST(request) {
    await connectDb();
    const data = await request.json();
     
    // const errors = {};

   
    // const hasBlankValue = Object.values(data.replacementData).every(value => value === '');
    // if (hasBlankValue) {
     
    // }

    
    
    for (const [key, value] of Object.entries(data.replacementData)) { 
    if(value !='' && key !=''){
        
        await SellerReturnWindow.updateOne(
        {
            seller_id: new mongoose.Types.ObjectId(data.seller_id),
            category_id: new mongoose.Types.ObjectId(key)
        },
        {
            $set: { replacement: value }
        },
        { upsert: true }
        ); 
        } 
    }

    return responseFun(true, {message:"Replacement setting updated successfully."}, 200)

    
     
}