 
 
 
import { NextResponse } from "next/server"; 
import path from "path";
import { writeFile } from "fs/promises"; 
import { baseUrl, responseFun } from "@/Http/helper";
import { uploadImageFun } from "../uploadImage/route";
import { connectDb } from "@/Http/dbConnect2";
 


export async function POST(request) {

  await connectDb();

  const formData = await request.formData();

  const uploadingFile = formData.get("upload");
  try {
    let imageUrl = ""; 
    if (!(uploadingFile instanceof File)) {
      return responseFun(false, "No file provided", 400);
    } 
    
      if(uploadingFile && typeof uploadingFile !== "string"){
        const extension = path.extname(uploadingFile?.name);
        const fileNameBase = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 15)}`; 
        const filename = `${fileNameBase}.${extension}`;
       const response =  await uploadImageFun(uploadingFile, `public/uploads/ckeditor/seller`, filename,4000); 
       console.log(response);
       if(response){ 
           return NextResponse.json({url:`${baseUrl}uploads/ckeditor/seller/${filename}`});
       }
    }
    return NextResponse.json({url:``});
  } catch (error) {
    
    console.error("S3 Upload Error:", error);
    return responseFun(false, "Failed to upload image", 500);
  }
}



//  const  uploadImageFun = async (image, uploadingPath, filename)=> {

//     const buffer = Buffer.from(await image.arrayBuffer());  
//     const outputFilePath = path.join(process.cwd(), uploadingPath, filename);  
//     try{ 
//             await writeFile(outputFilePath, buffer);
//             return true;
//     }catch(error){
//       console.log(error)
//       return false;
//     }
// }