import { responseFun } from "@/Http/helper";
import { sellerModel, sellerPickupAddressModel, sellerReturnAddressModel, sellorAccountInformationModel, sellorBusinessAndBeneficiaryAddressModel, sellorCardInformationModel, sellorSettingModel, sellorShippingTempleteModel } from "@/Http/Models/sellerModel";
import { connectDb } from "../../../../../lib/dbConnect";
import mongoose from "mongoose";
import { sellerTaxInformationModel } from "@/Http/Models/sellerTaxInformation";
import { brandModel, brandSellerModel } from "@/Http/Models/branModel";
import { Category } from "../../../../../lib/categoryModel"; 
import { getLoginSeller } from "../../getLoginUser/route";


export async function GET(request) {
    await connectDb();
    const { searchParams } = new URL(request.url);
    // const user_id = searchParams.get('user_id')
    const with_data = searchParams.get('with_data')
    const category = searchParams.get('category')
    const sellerData = await getLoginSeller() 
    if(!sellerData){
        return responseFun(false, {message:"unauthorized request"}, 403);
    }
    const user_id = sellerData._id;
    try{  
        let with_another_data = null;
        const sellor = await sellerModel.findById(user_id)

        let categories = [];
        if(category &&  category=="Yes"){
            categories =  await Category.find({status:"Active"})
            .select('_id name photo slug')
        }
        if(with_data=="pickupAddress"){
            with_another_data = await sellerPickupAddressModel.findOne({seller_id: new mongoose.Types.ObjectId(user_id)})
        }else if(with_data=="returnAddress"){
            with_another_data = await sellerReturnAddressModel.findOne({seller_id: new mongoose.Types.ObjectId(user_id)}) 
        }else if(with_data=="businessDetails"){
            with_another_data = await sellorBusinessAndBeneficiaryAddressModel.findOne({seller_id: new mongoose.Types.ObjectId(user_id)})  
        }else if(with_data=="taxInformation"){
            with_another_data = await sellerTaxInformationModel.findOne({seller_id: new mongoose.Types.ObjectId(user_id)})  
        }else if(with_data=="shippingSetting"){
            with_another_data = await sellorSettingModel.findOne({seller_id: new mongoose.Types.ObjectId(user_id)})  
        }else if(with_data=="bankDetails"){
            with_another_data = await sellorAccountInformationModel.findOne({seller_id: new mongoose.Types.ObjectId(user_id)})  
        }else if(with_data=="cardDetails"){
            with_another_data = await sellorCardInformationModel.findOne({seller_id: new mongoose.Types.ObjectId(user_id)})  
        }else if(with_data=="standerdShippingTemplete"){
            with_another_data = await sellorShippingTempleteModel.findOne(
                {
                    seller_id: new mongoose.Types.ObjectId(user_id),
                    shipping_type: "Standard"
                }
            )  
        }else if(with_data=="ExpertiseShippingTemplete"){
            with_another_data = await sellorShippingTempleteModel.findOne(
                {
                    seller_id: new mongoose.Types.ObjectId(user_id),
                    shipping_type: "Expertise"
                }
            )  
        }else if(with_data=="brands"){
            // find barnd in sellor list
           const sellerBrand = await brandSellerModel.find(
                {
                    seller_id: new mongoose.Types.ObjectId(user_id),
                    status: 1
                }
            );
            // get seller brand name array
            const brandNames = sellerBrand.map(brand => brand.name);
            // convert each name to a case-insensitive regex
            const regexNames = brandNames.map(name => new RegExp(`^${name}$`, 'i')); 
            // search seller brand in brand collection
            with_another_data = await brandModel.find(
                { 
                    status: 1,
                    name: { $in: regexNames }
                }
            )  
        }

        const sellerCount = await sellerModel.countDocuments({owner_id:user_id,role:'Employee'});


        return responseFun(true,{data:sellor, referData:with_another_data, categories:categories, sellerCount:sellerCount}, 200) 
    }catch(error){
        console.log(error);
        return responseFun(false,{error}, 200)
    }
}

export async function DELETE(request) { 

    try{    
        return responseFun(true,{data:''}, 200) 
    }catch(error){
        console.log(error);
        return responseFun(false,{error}, 200)
    }
}