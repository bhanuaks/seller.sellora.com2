import { responseFun } from "@/Http/helper";
import { SponsoredAdsModal } from "@/Http/Models/AddModel/SponsoredAdsModal";


export async function PUT(request) {
        const { status, _id }= await request.json()
    try{
        await SponsoredAdsModal.findByIdAndUpdate(_id, {Status:status});
        return responseFun(true, {message:"Status has been updated successfully."}, 200) 
    }catch(error){
        console.log(error.message);
        return responseFun(false, {message:error.message}, 500)
    }
}