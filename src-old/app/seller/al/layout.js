"use client";
import Script from "next/script";
import AfterLoginHeader from "./afterlogincomponent/afterLoginHeader";
import AfterLoginFooter from "./afterlogincomponent/afterLoginFooter";
import { baseUrl } from "@/Http/helper";

 
  

    
    export default function AfterLoginLayout({ children }) {

      return (
        <html lang="en">
          <head>
            <meta charSet="UTF-8" />
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content="" />
            <title>Sellora </title>
            <link rel="shortcut icon" href="/front/favicon.ico" type="image/x-icon" />
            <link rel="shortcut icon" href="/front/favicon.ico" type="image/x-icon"/>
            <link rel="stylesheet preload" href="/front/assets/css/plugins.css" as="style"/>
            <link rel="stylesheet preload" href="/front/assets/css/style.css" as="style"/>
            {/* <link rel='stylesheet' href='/front/assets/css/intlTelInput.css'/> */}
          </head>
        <body className="index-five"  style={{ color: "red" }}>

          <AfterLoginHeader/>
           <div className="logoLoader">
                    <div className="innerloader">
                      <img src={`${baseUrl}front/assets/images/logo-01.png`} />
                    </div>
                  </div>
          {children}
          <AfterLoginFooter />

          
        <Script defer src="/front/assets/js/plugins.js"></Script>
        <Script defer src="/front/assets/js/main.js"></Script>
        <Script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></Script>
        
        <Script src="/front/assets/js/jquery.min.js"></Script>




        </body>
      </html>
      );
    }
    