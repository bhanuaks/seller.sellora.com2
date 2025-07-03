import { NextResponse } from "next/server";
import { cookies } from 'next/headers'; 

export function middleware(request){
    const res = NextResponse.next();
   
    res.headers.set('Access-Control-Allow-Origin', '*')
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')

    const sellerAuth = request.cookies.get('sellerAuthToken','');
    const adminAuth = request.cookies.get('adminAuthToken', '');
    const userAuth = request.cookies.get('userAuthToken', '');
    const requestUrl = request.nextUrl;

    const isSellerLogin = sellerAuth && sellerAuth.name == "sellerAuthToken";
    const isAdminLogin = adminAuth && adminAuth.name == "adminAuthToken";
    const isUserLogin = userAuth && userAuth.name == "userAuthToken";
    
     const accesWithoutLoginPage = ['/seller/sell-online', '/seller/fees-n-commission', '/seller/grow', '/seller/learn', '/seller/login', '/seller/register', '/seller/login-otp','/seller/user-verify']
    if((requestUrl.pathname.startsWith('/seller')  && !accesWithoutLoginPage.includes(requestUrl.pathname)) || requestUrl.pathname.startsWith('/dashboard')){
         
        if(!isSellerLogin){
            const redirectUrl = new URL('/seller/login', request.url)
            return NextResponse.redirect(redirectUrl)
        }
    }else if(requestUrl.pathname.startsWith('/seller/login') || requestUrl.pathname.startsWith('/seller/register')){
        if(isSellerLogin){
            const redirectUrl = new URL('/dashboard', request.url)
            return NextResponse.redirect(redirectUrl)
        }
    }else if(requestUrl.pathname.startsWith('/admin')) {
        if (!isAdminLogin && !requestUrl.pathname.startsWith('/admin-login')) {
            // Redirect to login if not logged in and not already on the login page
            const redirectUrl = new URL('/admin-login', request.url);
            
            return NextResponse.redirect(redirectUrl);
        } else if (isAdminLogin && requestUrl.pathname === '/admin-login') {
            // Redirect logged-in admin from the login page to the dashboard
            const redirectUrl = new URL('/admin/dashboard', request.url);
            return NextResponse.redirect(redirectUrl);
        }
    }

    // user authentication page
    if(requestUrl.pathname.startsWith('/user') && (!requestUrl.pathname.startsWith('/user/login') && !requestUrl.pathname.startsWith('/user/register'))){
         
        if(!isUserLogin){
            const cookieStore = cookies();
            cookieStore.set('requestUrl', request.nextUrl.href, {
                httpOnly: false,  
                path: '/',  
                maxAge: 86400
            });

            const redirectUrl = new URL('/user/login', request.url)
            return NextResponse.redirect(redirectUrl)
        }
    }else if(requestUrl.pathname.startsWith('/user/login') || requestUrl.pathname.startsWith('/user/register')){
        //if already login user then redirect to user profile page
        if(isUserLogin){
            const redirectUrl = new URL('/user/my-profile', request.url)
            return NextResponse.redirect(redirectUrl)
        }
    }

    //  authentication User API
    if(requestUrl.pathname.startsWith('/api/user')){ 
        if(!isUserLogin){ 
            return NextResponse.json({status:false, message:"Unauthorized User"},403)
        }
    }

     //  authentication Seller API
    if(requestUrl.pathname.startsWith('/api/seller')){ 
        if(!isSellerLogin){
            return NextResponse.json({status:false, message:"Unauthorized User"},403)
        }
    }


    return res;
}

export const config ={
    matcher:['/:path*']
}