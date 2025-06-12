

"use client";
import Script from "next/script";

import { usePathname } from "next/navigation";
import Header from "./sd_components/Header";
import Footer from "./sd_components/Footer";
import { baseUrl } from "@/Http/helper";
import { useEffect } from "react";
import SellerDashboardFooter from "./sd_components/SellerDashboardFooter";

import '../../../public/front/assets/css/charts.min.css'
import '../../../public/front/assets/css/plugins.css'
import '../../../public/front/assets/css/style.css'
 
  
  export default function SellorDashboardRootLayout({ children }) {
      const pathname =  usePathname();
          useEffect(()=>{
            $('.logoLoader').css('display', 'none')
          },[pathname]) 

    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="keywords" content="" />
          <title>My Listing | Sellora</title>
          {/* plugins css */}
          <link rel="shortcut icon" href="/front/favicon.ico" type="image/x-icon" />
          {/* <link rel="stylesheet preload" href="/front/assets/css/plugins.css" as="style" />
          <link rel="stylesheet preload" href="/front/assets/css/style.css" as="style" />
          <link rel="stylesheet" href="/front/assets/css/charts.min.css" /> */}
        </head>
      <body className="index-five">

      <Header/>
      <div className="logoLoader">
          <div className="innerloader">
            <img src={`${baseUrl}front/assets/images/logo-01.png`} />
          </div>
        </div>
        {children}
        
        {pathname =="/dashboard" ? (
          <SellerDashboardFooter />
        ):( 
        <Footer />
        )}
 
  <Script defer src="/front/assets/js/plugins.js"></Script>
  <Script defer src="/front/assets/js/main.js"></Script>
  <Script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></Script>
  <Script src="/front/assets/js/jquery.min.js"></Script>
  <Script defer src="/front/assets/js/tab.js"></Script>
 

      </body>
    </html>
    );
  }
  