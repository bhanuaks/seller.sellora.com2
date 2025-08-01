import { connectDb } from "@/Http/dbConnect2";
import { responseFun } from "@/Http/helper";
import { NextResponse } from "next/server";


export async function POST(request) {
    await connectDb();
    try{
        const response = NextResponse.json({status:true, message:"Logout successfullu"}, {status:200})
        response.cookies.set('userAuthToken', "",{
            maxAge:"0"
        }) 
        return response;
    }catch(error){
        console.log(error);
        return responseFun(false, {error}, 200)
    }
   
}