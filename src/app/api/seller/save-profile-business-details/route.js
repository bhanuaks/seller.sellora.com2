import { isEmpty, responseFun } from "@/Http/helper";
import { getLoginSeller } from "../../getLoginUser/route";
import { sellerBusinessProfileModel, sellerModel } from "@/Http/Models/sellerModel";
import mongoose from "mongoose";
import { connectDb } from "@/Http/dbConnect2";


export async function POST(request) {
    
    await connectDb()

    const { business_overview, 

        TypeOfEnterprise,
        YearFounded,
        ProductLine,
        Headquarters,
        EmployeeCount,
        BrandRegistration,
        QualityCertifications,
        ProductComplianceCertifications,
        PatentStatus,
        RevenueRange, 
        TargetMarkets,
        country,
        state,
        storeName,
        

    SustainabilityPractices,
     } = await request.json();

    const seller = await getLoginSeller();
    if(!seller){
        return responseFun(false, "unauthrized request.", 403);
    }


        const errors = {};
        if(isEmpty(business_overview))errors.business_overview = "Required"
        if(isEmpty(TypeOfEnterprise))errors.TypeOfEnterprise = "Required"
        if(isEmpty(YearFounded))errors.YearFounded = "Required"
        if(isEmpty(ProductLine))errors.ProductLine = "Required"
        // if(isEmpty(Headquarters))errors.Headquarters = "Required"
        if(isEmpty(EmployeeCount))errors.EmployeeCount = "Required"
        if(isEmpty(BrandRegistration))errors.BrandRegistration = "Required"
        if(isEmpty(QualityCertifications))errors.QualityCertifications = "Required"
        if(isEmpty(ProductComplianceCertifications))errors.ProductComplianceCertifications = "Required"
        if(isEmpty(RevenueRange))errors.RevenueRange = "Required"
        if(isEmpty(TargetMarkets))errors.TargetMarkets = "Required"
        if(isEmpty(SustainabilityPractices))errors.SustainabilityPractices = "Required"
        if(isEmpty(PatentStatus))errors.PatentStatus = "Required"
        if(isEmpty(country))errors.country = "Required"
        if(isEmpty(state))errors.state = "Required"

        if(Object.keys(errors).length > 0){
            return responseFun(false, {errors, status_code:402}, 200)
        }
    try{

        const existData = await sellerBusinessProfileModel.findOne({seller_id:new mongoose.Types.ObjectId(seller._id)})
        let updateData = null;
        if(existData){
            updateData = await sellerBusinessProfileModel.updateOne(
                {seller_id:new mongoose.Types.ObjectId(seller._id)},
                { 
                    $set: {   
                        business_overview,
                       TypeOfEnterprise,
                        YearFounded,
                        ProductLine,
                        Headquarters,
                        EmployeeCount,
                        BrandRegistration,
                        QualityCertifications,
                        ProductComplianceCertifications,
                        PatentStatus,
                        RevenueRange, 
                       TargetMarkets,
                        SustainabilityPractices,
                        adminApproved:0,
                        country,
                        state,
                        storeName
                    }
                }
            )
        }else{
            updateData = await sellerBusinessProfileModel.create( 
                {
                    seller_id:seller._id,
                    business_overview,
                    TypeOfEnterprise,
                    YearFounded,
                    ProductLine,
                    Headquarters,
                    EmployeeCount,
                    BrandRegistration,
                    QualityCertifications,
                    ProductComplianceCertifications,
                    PatentStatus,
                    RevenueRange, 
                    TargetMarkets,
                    SustainabilityPractices,
                    adminApproved:0,
                    country,
                    state,
                    storeName
                }
            )
        }
        return responseFun(true, {updateData}, 200);
    }catch(error){
        console.log(error);
        return responseFun(false, "error", 500);
    }
}


export async function GET(request) { 
      await connectDb()
    const seller = await getLoginSeller();
    
    if(!seller){
        return responseFun(false, "unauthrized request.", 403);
    }
    try{ 
        const sellerProfile = await sellerBusinessProfileModel.findOne({seller_id:new mongoose.Types.ObjectId(seller._id)}).lean()
        const sellerData = await sellerModel.findById(seller._id).select("createdAt").lean()
        return responseFun(true, {sellerProfile:{...sellerProfile, joiningDate:sellerData.createdAt}}, 200);
    }catch(error){
        console.log(error);
        return responseFun(false, {message:error.message}, 500);
    }
}