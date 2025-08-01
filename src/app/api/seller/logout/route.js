import { connectDb } from "@/Http/dbConnect2";
import { NextResponse } from "next/server";



export async function POST(request) {

    await connectDb()
    const response = NextResponse.json({status:true,
        message:"Logout"
    },{status:200})

    response.cookies.set("sellerAuthToken",'',{
        maxAge:"0"
    })
    return response;
}