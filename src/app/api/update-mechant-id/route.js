import { responseFun } from "@/Http/helper";
import { sellerModel } from "@/Http/Models/sellerModel";
import { genrateMerchantId } from "../front/seller-register/route";


export async function GET(request) {
    

    try {
           const sellers = await sellerModel.find().sort({ createdAt: 1 });
           console.log({sellers});
           for (const seller of sellers) {
            const merchantId = await genrateMerchantId();
            seller.merchant_id = merchantId;
            await seller.save();
            console.log({merchantId});
            }
             return responseFun(true, {message:"success"}, 200)
    } catch (error) {
        console.log(error);
        return responseFun(false, {message:error.message}, 500)
    }
}