"use client";
import Script from "next/script";
 
import { usePathname } from "next/navigation";
import { baseUrl } from "@/Http/helper";
import SellorHeader from "./seller/sellorcomponents/SellorHeader";
import SellorFooter from "./seller/sellorcomponents/SellorFooter";
import { useEffect } from "react";
import { AppProvider } from "./contaxtData/contextData";
import SellorDashboardCss from "./dashboard/SellorDashboardCss";
import '../../public/front/assets/css/plugins.css'
import '../../public/front/assets/css/style.css'
import { Toaster } from 'sonner';
 

export default function SellorRootLayout({ children }) {
  const pathname = usePathname();

  // Check if route is inside (before_login)
  const isBeforeLogin = pathname.includes("/seller/al");

    useEffect(()=>{
      $('.logoLoader').css('display', 'none')
    },[pathname])

  // Exclude layout for before_login routes
  if (isBeforeLogin || pathname.startsWith('/dashboard') || pathname.startsWith('/seller/profile') ) { 
    return (<>
    <AppProvider>
      {children}
    </AppProvider>
    </>);
  }
   

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="" />
        <title>Sellora</title>
       
        <link
          rel="shortcut icon"
          href="/front/favicon.ico"
          type="image/x-icon"
        />
        {/* <link
          rel="stylesheet preload"
          href="/front/assets/css/plugins.css"
          as="style"
        /> */}
        {/* <link
          rel="stylesheet preload"
          href="/front/assets/css/style.css"
          as="style"
        /> */}
      </head>

      <body className="index-five">
      <AppProvider> 
        {!pathname.startsWith("/seller/product/add-product")   && !pathname.startsWith("/seller/product/add-variant")  &&
        !pathname.startsWith("/seller/p-details") && !pathname.startsWith("/seller/product/compliance-and-key-attributes")  ? (
          <SellorHeader />
        ) : (
          ""
        )}
        <div className="logoLoader">
          <div className="innerloader">
            <img src={`${baseUrl}front/assets/images/logo-01.png`} />
          </div>
        </div>
        {children}
         <Toaster position="top-right" richColors />
        {!pathname.startsWith("/seller/product/add-product")  && !pathname.startsWith("/seller/product/add-variant")  &&
        !pathname.startsWith("/seller/p-details") & !pathname.startsWith("/seller/product/compliance-and-key-attributes") ? (
          <SellorFooter />
        ) : (
          ""
        )}
        <div id="anywhere-home" className="anywere" />
        <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              style={{
                transition: "stroke-dashoffset 10ms linear 0s",
                strokeDasharray: "307.919, 307.919",
                strokeDashoffset: "307.919",
              }}
            ></path>
          </svg>
        </div>
        <Script defer src="/front/assets/js/plugins.js"></Script>
        <Script defer src="/front/assets/js/main.js"></Script>
        <Script defer src="/front/assets/js/tab.js"></Script>
        </AppProvider> 
      </body>
    </html>
  );
}
