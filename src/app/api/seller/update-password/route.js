import { encryptText, isEmpty, responseFun } from "@/Http/helper";
import { getLoginSeller } from "../../getLoginUser/route";
import { sellerModel } from "@/Http/Models/sellerModel";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";
import { connectDb } from "@/Http/dbConnect2";

export async function POST(request) {
    
    await connectDb();
    const { current_password, new_password, confirm_password } = await request.json();

    try {
        const loginSeller = await getLoginSeller();

        if(!loginSeller){
             return responseFun(false, {message:"unauthorized request"}, 403)
        }
        const seller_id = loginSeller._id

        const errors = {}
            if(isEmpty(current_password))errors.current_password = "Current password is required."
            if(isEmpty(new_password))errors.new_password = "New password is required."
            if(isEmpty(confirm_password))errors.confirm_password = "Confirm password is required."

            if(current_password == new_password){
                errors.new_password = "current password and new password can not be same."
            }
            //  if(new_password.length < 8){
            //     errors.new_password  = "The new password must be at least 8 characters long."
            // }
            if(new_password !== confirm_password){
                errors.confirm_password = "New password and confirm password must be same."
            }

            if(Object.keys(errors).length > 0){
                  return responseFun(false,{errors, status_code:401},200)
            }

            const seller = await sellerModel.findById(seller_id).select('+password')
             const matchPassword = bcrypt.compareSync(current_password, seller.password);
             if(!matchPassword){
                    errors.current_password = "Current password invalid."
                    return responseFun(false,{errors, status_code:401},200)
                }

                const hash_password = bcrypt.hashSync(
                        new_password,
                        parseInt(process.env.BCRYPT_SALT)
                      );

                await sellerModel.findByIdAndUpdate(seller_id, {
                        password: hash_password,
                        show_password: encryptText(new_password),
                })

                 const response = NextResponse.json({status:true,
                        message:"Your password has been changed successfully."
                    },{status:200}) 
                    response.cookies.set("sellerAuthToken",'',{
                        maxAge:"0"
                    })
                    return response;

              
    } catch (error) {
        console.log(error);
        return responseFun(false, {message:error.message}, 500)
    }
}