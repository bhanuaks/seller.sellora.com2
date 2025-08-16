import { connectDb } from "@/Http/dbConnect2";
import { responseFun } from "@/Http/helper";
import { announcementModal } from "@/Http/Models/AnnouncementModal";



export async function GET(request) {
    
    await connectDb();
    const { searchParams }  = new URL(request.url); 
    const _id = searchParams.get("_id") || "";
 
    try{ 
        const data = await announcementModal.findById(_id).lean()
        return responseFun(true, {data}, 200)
    }catch(error){
        console.log(error);
        return responseFun(true, {message:error.message}, 500)
    }
}