"use client";
import Script from "next/script";
import SellorFooter from "./sellorcomponents/SellorFooter";
import SellorHeader from "./sellorcomponents/SellorHeader";
import { usePathname } from "next/navigation";
import { baseUrl } from "@/Http/helper";
import { AppProvider } from "../contaxtData/contextData";

// export const metadata = {
//     title: "Sellor Section",
//     description: "Custom layout for Sellor section",
//   };

export default function SellorRootLayout({ children }) {
  const pathname = usePathname();

  // Check if route is inside (before_login)
  const isBeforeLogin = pathname.includes("/seller/al");

  // Exclude layout for before_login routes
 
    return( <> 
      {children} 
      </>);
 

  
}
