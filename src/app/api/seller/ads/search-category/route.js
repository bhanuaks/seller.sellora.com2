import { responseFun } from "@/Http/helper";
import { Category } from "../../../../../../lib/categoryModel";
import { connectDb } from "@/Http/dbConnect2";


export async function POST(request) {
    
    await connectDb();
     const { searchText } = await request.json();

     try{
         const query = {status:"Active"};
               
            if(searchText){
                query.name = { $regex: searchText, $options: "i" }; 
            } 
            const list = await Category.find(query).select("_id name photo").lean();
            const listWithBid = list.map((item)=>{
            const data =  {
                ...item,
                suggBid:"$1.29 - $3.97"
            }
            return data
            
        }
        )
         return responseFun(true, { message:"success", list:listWithBid }, 200); 
     }catch(error){
        console.log(error.message);
        return responseFun(false, {message:error.message}, 500)
     }
}