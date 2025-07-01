import { encryptText, isEmpty, responseFun } from "@/Http/helper";
import { sellerModel } from "@/Http/Models/sellerModel";
import mongoose from "mongoose";
import SellerReturnWindow from "@/Http/Models/sellerReturnWindow";
import bcrypt from "bcryptjs";
import { connectDb } from "../../../../lib/dbConnect";



export async function GET(request) {
    await connectDb();
    const { searchParams } = new URL(request.url);
    const seller_id = atob(searchParams.get('token'))
    //console.log('okkkkkkkkkkkkkkkkkkk',seller_id)   
    try{  
        
        const seller = await sellerModel.findById(seller_id)
        
        return responseFun(true,{data:seller}, 200) 
    }catch(error){
        console.log(error);
        return responseFun(false,{error}, 200)
    }

         
}

export async function POST(request) {
    await connectDb();
    const { password, confirm_password, token } = await request.json();
    
      //  console.log(name, seller_id)
      const errors = {};
      if (isEmpty(password)) errors.password = "Password is required";
      if (isEmpty(confirm_password)) errors.confirm_password = "Confirm password is required";
      if (isEmpty(token)) errors.token = "Token is required";
      
      if(password != confirm_password){
        errors.confirm_password = "Password and Confirm Password does not match";
      }
      
      
      const seller_id = atob(token);
    const seller = await sellerModel.findById(seller_id)

    if (!seller) {
      errors.name = "Seller not found";
    }
    
    
      if (Object.keys(errors).length > 0) {
        return responseFun(false, { errors, status_code: 403 }, 200);
      }

      const hash_password = bcrypt.hashSync(
              password,
              parseInt(process.env.BCRYPT_SALT)
            );
      

       const sellerUpdate = await sellerModel.findByIdAndUpdate(seller._id,{ 
                  password: hash_password,
                  show_password: encryptText(password),
                  status:'Active'
              })


    return responseFun(true, {message:"Password updated successfully."}, 200)

    
     
}