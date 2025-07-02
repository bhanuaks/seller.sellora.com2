import React from "react";
import { encryptText, isEmpty, responseFun } from "@/Http/helper";
import { sellerCountModel, sellerModel, subSellerCountModel } from "@/Http/Models/sellerModel";
import bcrypt from "bcryptjs";
import { connectDb } from "../../../../../lib/dbConnect";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { sellerNotificationSetting } from "@/Http/Models/sellerNotificationModal";
import UserStatusEmail from "@/app/userEmailTemplate/UserStatusEmail";
import { sendUserMail } from "./sendUserMail/route";
const ReactDOMServer =  require('react-dom/server');



export async function GET(request) {
    connectDb(); 
    const { searchParams } = new URL(request.url);
    const seller_id = searchParams.get('seller_id')
    const searchText = searchParams.get('searchText') || '';
    let page = parseInt(searchParams.get('page')) || 1
    let pageSize = parseInt(searchParams.get('pageSize')) || 10
    
    
    const errors = {};
    if (isEmpty(seller_id)) errors.name = "Seller is required";
    if (Object.keys(errors).length > 0) {
      return responseFun(false, { errors, status_code: 403 }, 200);
    }

    if(!page){
        page=4
    }
    if(!pageSize){
        pageSize=10
    }
 
    const skip = (page - 1) * pageSize;

    
    const searchCondition = searchText
    ? {
      $or: [
        { name: { $regex: searchText.trim(), $options: 'i' } },
        { email: { $regex: searchText.trim(), $options: 'i' } },
        { status: { $regex: `^${searchText.trim()}$`, $options: 'i' } }
      ]
    }
    : {};

    try{
 
      
      const query = {owner_id:seller_id, role:'Employee', ...searchCondition}; 
      const userList = await sellerModel.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(pageSize);
      ;
      const total = await sellerModel.countDocuments(query);
      
      let pagination= {
        totalCount:total,
        page,
        pageSize, 
        totalPages: Math.ceil(total / pageSize),
    };
     
        return responseFun(true,
           
          {
            list:userList, 
            pagination:pagination,
           // totalData:totalData
          },
          200)
        
    }catch(error){
        console.log(error);
        return responseFun(false,{error},200)
    }
}

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
        status:'Pending',
        approvalStatus:'Approved',
        selfActive:'Active',
        role:'Employee',
        owner_id:seller_id,
        merchant_id:subMerchantId
      });

      //const encoded = btoa("12345"); // "MTIzNDU="
      //const decoded = atob(encoded);
      const idDetail = btoa(seller._id); 
      const link = `https://seller.sellora.com/seller/user-verify?token=${idDetail}`;
      const subject = "Account Status Verification";

      const htmlContent = ReactDOMServer.renderToString(
            React.createElement(UserStatusEmail, {name:name, link: link})
      )
      await sendUserMail(email, subject, htmlContent)
  
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