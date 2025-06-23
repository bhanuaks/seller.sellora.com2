import { encryptText, isEmpty, responseFun } from "@/Http/helper";
import { sellerCountModel, sellerModel } from "@/Http/Models/sellerModel";
import bcrypt from "bcryptjs";
import { connectDb } from "../../../../../lib/dbConnect";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { sellerNotificationSetting } from "@/Http/Models/sellerNotificationModal";

export async function POST(request) {
  await connectDb();
  const { name, mobile, email, password, otp, mobile_code, country_s_name } =
    await request.json();

  const errors = {};
  if (isEmpty(name)) errors.name = "name is required";
  if (isEmpty(mobile)) errors.mobile = "mobile is required";
  if (isEmpty(email)) errors.email = "email is required";
  if (isEmpty(password)) errors.password = "password is required";
  if (isEmpty(otp)) errors.otp = "otp is required";

  if (Object.keys(errors).length > 0) {
    return responseFun(false, { errors, status_code: 403 }, 200);
  }

  try {
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

    const otpData1 = request.cookies.get("otpData");
    const otpData = otpData1 ? JSON.parse(otpData1.value) : null;

    if (otpData && otpData.otp_for == "register" && otpData.otp == otp) {
      const hash_password = bcrypt.hashSync(
        password,
        parseInt(process.env.BCRYPT_SALT)
      );
 
      const merchantId = await genrateMerchantId();  
      const seller = await sellerModel.create({
        name,
        mobile,
        email,
        password: hash_password,
        show_password: encryptText(password),
        mobile_code,
        country_s_name,
        lastloginTimeDate: new Date(),
        merchant_id:merchantId
      });

      await sellerNotificationSetting.create({
        ListingCreationEmail:email,
        ComplianceRequirementsEmail:email,
        ListingRecommendationsEmail:email,
        NewOrderEmail:email,
        NewOrderCancellationRiskEmail:email,
        NewReturnRequestEmail:email,
        ReturnDeliveredEmail:email,
        RefundIssuedEmail:email,
        AdvertisementRecommendationEmail:email,
        PriceRecommendationEmail:email,
        SelloraPromotionsEmail:email,
        ReportStatusEmail:email,

        EmergencyNotificationEmail:email,
        EmergencyNotificationNumber:email,
        country_s_name,
        mobile_code
      });
      
      const token = jwt.sign(
        {
          seller: seller,
        },
        process.env.JWT_SECRET
      );
      const response = NextResponse.json(
        {
          message: "Your acoount created successfully",
          status: true,
          seller: seller,
        },
        { status: 200 }
      );

      response.cookies.set("sellerAuthToken", token, {
        expireIn: "1d",
      });
      response.cookies.set("otpData", "", {
        maxAge: "0",
      });

      return response;
      
    } else {
      errors.otp = "invalid otp";
      return responseFun(false, { errors, status_code: 403 }, 200);
    }
  } catch (error) {
    console.log(error);
    return responseFun(false, { error: "failed" }, 200);
  }
}


export async function genrateMerchantId() {
  const sellerCount = await sellerCountModel.findOneAndUpdate(
    {},
    { $inc: { count: 1 } },
    { new: true, upsert: true }
  );

  const sellerNumber = sellerCount.count;
  const merchantId = `US${sellerNumber.toString().padStart(4, '0')}`; 
  const existMerchantId = await sellerModel.countDocuments({ merchant_id: merchantId });

  if (existMerchantId > 0) { 
    return await genrateMerchantId();
  }

  return merchantId;
}