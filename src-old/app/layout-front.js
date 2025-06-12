"use client";
import Script from "next/script";
// import SellorFooter from "./sellorcomponents/SellorFooter";
// import SellorHeader from "./sellorcomponents/SellorHeader";
import { usePathname } from "next/navigation";
import { baseUrl } from "@/Http/helper";
import SellorHeader from "./seller/sellorcomponents/SellorHeader";
import SellorFooter from "./seller/sellorcomponents/SellorFooter";

// export const metadata = {
//     title: "Sellor Section",
//     description: "Custom layout for Sellor section",
//   };

export default function SellorRootLayout({ children }) {
  const pathname = usePathname();

  // Check if route is inside (before_login)
  const isBeforeLogin = pathname.includes("/seller/al");

  // Exclude layout for before_login routes
  if (isBeforeLogin) {
    return <>{children}</>;
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
        <link
          rel="stylesheet preload"
          href="/front/assets/css/plugins.css"
          as="style"
        />
        <link
          rel="stylesheet preload"
          href="/front/assets/css/style.css"
          as="style"
        />
      </head>

      <body className="index-five">
        {!pathname.startsWith("/seller/product/add-product") && !pathname.startsWith("/seller/product/add-variant") &&
        !pathname.startsWith("/seller/p-details") ? (
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
        {!pathname.startsWith("/seller/product/add-product") && !pathname.startsWith("/seller/product/add-variant")  &&
        !pathname.startsWith("/seller/p-details") ? (
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
      </body>
    </html>
  );
}
