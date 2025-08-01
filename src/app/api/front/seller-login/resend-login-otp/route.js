import { dynamincOtp, isEmpty, responseFun } from "@/Http/helper";
import { sellerModel } from "@/Http/Models/sellerModel";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDb } from "../../../../../../lib/dbConnect";
import SellerLoginEmail from "@/app/EmailTemplates/SellerLoginEmail"; 
 import React from "react";
//  import { sendMailByNodeMailer } from "../../sendMail/route";
 import { sendMobileSMS } from "@/Http/smsHelper";
import { sendMailByNodeMailer } from "@/app/api/sendMail/route";
 const ReactDOMServer =  require('react-dom/server');

export async function POST(request) {
    await connectDb()
    const {email, mobile} = await request.json(); 
        const username = email || mobile;
    try{ 

         const seller = await sellerModel.findOne({
                    $or: [
                        { email: username },
                        { mobile: username }
                    ]
                })
        const new_otp =  dynamincOtp(111111, 999999);
        const subject = "Login Otp";
        // const message = `<p>login Otp is ${new_otp}. This otp valid for 10 minutes.</p>` 
        const expirationTime =  Date.now() + (5 * 60 * 1000);
        const otpData = {
            otp:new_otp,
            otp_for:"Login",
            time: new Date().getTime(), 
        }  

                const htmlContent = ReactDOMServer.renderToString(
                    React.createElement(SellerLoginEmail, {name:seller.name, otp: new_otp})
                )
                await sendMailByNodeMailer(email, subject, htmlContent)
                const sender = "sellora";
                const receiver = `+${seller.mobile_code}${seller.mobile}`;
                const message = `Dear ${seller.name}. Your one-time password (OTP) for Login is: ${new_otp}`;
               const responseFun =  await sendMobileSMS(sender, receiver, message);

        const response = NextResponse.json({
            message:"Login Success",
            status:true, 
            expirationTime
        },  { status: 200 });

        

        response.cookies.set('otpData', JSON.stringify(otpData), {
            maxAge: 5 * 60,
            // httpOnly: true,  
            // secure: true,
        }); 

        return response; 
    }catch(error){
        console.log(error);
        return responseFun(false,{error},200)

    }
}