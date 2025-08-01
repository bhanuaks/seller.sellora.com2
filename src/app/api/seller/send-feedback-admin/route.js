import { isEmpty, responseFun } from "@/Http/helper";
import { getLoginSeller } from "../../getLoginUser/route"; 
import { sellerFeedBackToAdminModal } from "@/Http/Models/sellerFeedBack";


export async function POST(request) {
    
    const { feedback } = await request.json(); 
    const seller = await getLoginSeller();
    if(!seller){
        return responseFun(false, {message:"unauthorized request"}, 403)
    }
    const seller_id = seller._id;

    if(isEmpty(feedback)){
         return responseFun(false, {message:"missing parameters"}, 401)
    }
    
    try {
        await sellerFeedBackToAdminModal.create({
            feedback,
            seller_id
        })
        
        return responseFun(true, {message:"Success! Your feedback has been save successfully."}, 200);

    } catch (error) {
        console.log(error);
        return responseFun(false, {message:error.message}, 500);
    }
}