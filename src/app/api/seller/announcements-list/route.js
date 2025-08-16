import { connectDb } from "@/Http/dbConnect2";
import { responseFun } from "@/Http/helper";
import { announcementModal } from "@/Http/Models/AnnouncementModal";



export async function GET(request) {
    
    await connectDb();
    const { searchParams }  = new URL(request.url);
    const page = Number(searchParams.get("page") || 1);
    const searchText = searchParams.get("searchText") || "";
    const limit = 20; 
    const skip = (page-1) * limit;
    try{
       const fronDate = new Date();
            fronDate.setMonth(fronDate.getMonth() - 3); 

            const query = { createdAt: { $gte: fronDate } }

            if(searchText){
                query.announcement = { $regex:searchText, $options:"i" }
            }
            const list = await announcementModal.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .lean();

            const totalRecords = await announcementModal.countDocuments(query)
            const pagination = {
                page,
                totalPages:Math.ceil(totalRecords/limit),
                totalRecords,
                pageSize:limit
            }
            return responseFun(true, {list, pagination}, 200)
    }catch(error){
        console.log(error);
        return responseFun(true, {message:error.message}, 500)
    }
}