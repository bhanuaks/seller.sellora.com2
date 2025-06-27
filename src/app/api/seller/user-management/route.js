import { encryptText, isEmpty, responseFun } from "@/Http/helper";
import { sellerCountModel, sellerModel, subSellerCountModel } from "@/Http/Models/sellerModel";
import bcrypt from "bcryptjs";
import { connectDb } from "../../../../../lib/dbConnect";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { sellerNotificationSetting } from "@/Http/Models/sellerNotificationModal";

export async function POST(request) {
  await connectDb();
  const { name, mobile, email, mobile_code, country_s_name, seller_id } =
    await request.json();

  //  console.log(name, seller_id)
  const errors = {};
  if (isEmpty(name)) errors.name = "name is required";
  if (isEmpty(mobile)) errors.mobile = "mobile is required";
  if (isEmpty(email)) errors.email = "email is required";
  

  if (Object.keys(errors).length > 0) {
    return responseFun(false, { errors, status_code: 403 }, 200);
  }

  try {
    const sellerDetail = await sellerModel.findOne({ _id: seller_id });
    
    const sellerExists = await sellerModel.findOne({ mobile: mobile });
    const sellerEmailExists = await sellerModel.findOne({ email: email });

    if (sellerExists) {
      errors.mobile = "this mobile already registered";
      return responseFun(false, { errors, status_code: 403 }, 200);
    }
    if (sellerEmailExists) {
      errors.email = "this email already registered";
      return responseFun(false, { errors, status_code: 403 }, 200);
    }

    
      const subMerchantId = await generateMerchantId(seller_id, sellerDetail.merchant_id);
      //console.log(subMerchantId)
      //const subMerchantId  = `${sellerDetail.merchant_id}-${merchantId}`; 
      const seller = await sellerModel.create({
        name,
        mobile,
        email,
        mobile_code,
        country_s_name,
        status:'Deactive',
        approvalStatus:'Approved',
        selfActive:'Active',
        role:'Employee',
        owner_id:seller_id,
        merchant_id:subMerchantId
      });
  
      const response = NextResponse.json(
        {
          message: "Your user created successfully",
          status: true,
          //seller: sellerDetail,
        },
        { status: 200 }
      );

      
      return response;
      
    
  } catch (error) {
    console.log(error);
    return responseFun(false, { error: "failed" }, 200);
  }
}


export async function generateMerchantId(sellerId, merchant_id) {
  const sellerCount = await subSellerCountModel.findOneAndUpdate(
  { seller_id: sellerId },
  { $inc: { count: 1 } },
  { new: true, upsert: true }
);

  const sellerNumber = sellerCount.count;
  
  
  const merchantId = `${merchant_id}-${sellerNumber.toString().padStart(3, '0')}`;
  //const merchantId = `US${sellerNumber.toString().padStart(4, '0')}`; 
   const existMerchantId = await sellerModel.countDocuments({ merchant_id: merchantId });

  if (existMerchantId > 0) { 
    return await generateMerchantId(sellerId, merchant_id);
  }
  

  return merchantId;
}