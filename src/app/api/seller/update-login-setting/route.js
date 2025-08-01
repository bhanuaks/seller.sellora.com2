import { isEmpty, responseFun } from "@/Http/helper";
import { getLoginSeller } from "../../getLoginUser/route";
import { sellerModel } from "@/Http/Models/sellerModel";
import mongoose from "mongoose";
import { connectDb } from "@/Http/dbConnect2";


export async function POST(request) {
    
    await connectDb();
    const { edit, data, country_s_name, mobile_code, mobile } =  await request.json();

    const seller = await getLoginSeller();
    if(!seller){
        return responseFun(false, { message: `unauthorized request` }, 403)
    }
    const seller_id = seller._id;

    try{
        const errors = {}
        

        if(edit == "email"){
            if(isEmpty(data)){
            return responseFun(false, { message: `${edit} is required` }, 200)
        }
          const alreadyExists = await sellerModel.countDocuments({
            email: data,
            _id: { $ne: new mongoose.Types.ObjectId(seller_id) }
            });

            if(alreadyExists > 0 ){
                   return responseFun(false, {message: "This email already exists"}, 200)
            }

            await sellerModel.findByIdAndUpdate(seller_id, {
                email:data
            })
            return responseFun(true, { message: "Updated successfully." }, 200)

        }else  if(edit == "mobile"){
             if(!(mobile)){
                return responseFun(false, { message: `${edit} is required` }, 200)
            }
          const alreadyExists = await sellerModel.countDocuments({
            mobile: mobile,
            _id: { $ne: new mongoose.Types.ObjectId(seller_id) }
            });

            if(alreadyExists > 0 ){
                   return responseFun(false, {message: "This number already exists"}, 200)
            }

            await sellerModel.findByIdAndUpdate(seller_id, {
                mobile,
                mobile_code,
                country_s_name
            })
            return responseFun(true, { message: "Updated successfully." }, 200)

        }else if(edit == "name"){ 

            if(isEmpty(data)){
                return responseFun(false, { message: `${edit} is required` }, 200)
            }

            await sellerModel.findByIdAndUpdate(seller_id, {
                    name: data,
            })
            return responseFun(true, { message: "Updated successfully." }, 200)
        }

         return responseFun(false, { message: "something went wrong." }, 200)
    }catch(error){
        console.log(error);
        return responseFun(false, {message: error.message}, 500)
    }
}