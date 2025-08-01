import { responseFun } from "@/Http/helper";
import { sellerModel } from "@/Http/Models/sellerModel";
import { getLoginSeller } from "../getLoginUser/route";
import { connectDb } from "@/Http/dbConnect2";


export async function GET(request) {

    await connectDb();

    const { searchParams } = new URL(request.url)
    // const seller_id = searchParams.get('seller_id')

    const seller = await getLoginSeller();
    if(!seller){
          return responseFun(false, {message:"unauthorized request"}, 403)
    }
    const seller_id = seller._id
    try{
        const seller = await sellerModel.findById(seller_id)
        return responseFun(true, {seller}, 200)

    }catch(error){
        console.log(error);
        return responseFun(false, error, 200)
    }
}


export async function POST(request) {
    
    return responseFun(true, "", 200)
}