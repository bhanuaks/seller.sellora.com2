import { responseFun } from "@/Http/helper";
import { Category } from "../../../../../lib/categoryModel";
import ChildCategory from "../../../../../lib/childcategoryModel";
import { connectDb } from "../../../../../lib/dbConnect";
import { subCategory } from "../../../../../lib/subcategoryModel";



export async function GET(request) {
    connectDb(); 

    try{
        const query = {status:"Active"}; 
        
        const categories = await Category.find(query)
        .select("_id name slug photo list_image min_return")
        .sort({name:1}); 
        
         

        return responseFun(true, categories, 200)
        
    }catch(error){
        console.log(error);
        return responseFun(false,{error},200)
    }
}


export async function DELET(request) {
    
    try{
        return responseFun(false, "", 500)

    }catch(error){
        return responseFun(false, "", 500)
    }
}