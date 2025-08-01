"use client"
import { AppContext } from '@/app/contaxtData/contextData';
import { baseUrl } from '@/Http/helper';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify';

function Sidebar({sellor=null}) {
  const pathname = usePathname();
  

    const { globalData } = useContext(AppContext);

function activeSeller(e){
  e.preventDefault();
 

  
  fetch(`/api/seller/active-my-profile`,{
    method:"PUT", 
  }).then((response)=>{
      if(!response.ok){ 
        throw new Error('Network Error') 
      }
      return response.json();
  }).then((res)=>{
      
      if(res.status){
         window.location.reload()
      }else if(res.data.status_code && res.data.status_code == 403){ 
          toast.error(res.data.message);
      }
  }) 
}




  return (
    <div className="nav_outer">

             <ToastContainer 
                      position="top-center"
                      autoClose={3000} // Toast disappears after 3 seconds
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="colored"
                  />


            <ul>
              <li>
                <Link href="/seller/al/contact-details" className={`${pathname === "/seller/al/contact-details" ? 'active_current' : ''}`}>
                  Contact Details <i className={`fa fa-check ${sellor && sellor.complete_step >= 1 ? 'active_current2' : ''}`} />
                </Link>
              </li>
              {/* <li>
                <Link href="/seller/al/login-details" className={`${pathname === "/seller/al/login-details" ? 'active_current' : ''}`}>
                  Login Details <i className={`fa fa-check ${pathname === "/seller/al/login-details" ? 'active_current2' : ''}`} />
                </Link>
              </li> */}

              {/* <li>
                <Link href="/seller/al/category" className={`${pathname === "/seller/al/category" ? 'active_current' : ''}`}>
                  Category <i className={`fa fa-check `} />
                </Link>
              </li> */}


              <li>
                <Link href="/seller/al/display-information" className={`${pathname === "/seller/al/display-information" ? 'active_current' : ''}  ${(sellor && sellor.complete_step >= 1)  ? '' : 'disabled'}` } >
                  Display Information <i className={`fa fa-check ${sellor && sellor.complete_step >= 2 ? 'active_current2' : ''}`} />
                </Link>
              </li>
              <li>
                <Link href="/seller/al/pickup-address" className={`${pathname === "/seller/al/pickup-address" ? 'active_current' : ''}  ${(sellor && sellor.complete_step >= 2)  ? '' : 'disabled'}`}>
                  Pick up Address <i className={`fa fa-check ${sellor && sellor.complete_step >= 3 ? 'active_current2' : ''}`} />
                </Link>
              </li>
              <li>
                <Link href="/seller/al/return-setting" className={`${pathname === "/seller/al/return-setting" ? 'active_current' : ''}  ${(sellor && sellor.complete_step >= 3)  ? '' : 'disabled'}`}>
                  Return Setting <i className={`fa fa-check ${sellor && sellor.complete_step >= 4 ? 'active_current2' : ''}`} />
                </Link>
              </li>
              <li>
                <Link href="/seller/al/business-details" className={`${pathname === "/seller/al/business-details" ? 'active_current' : ''}  ${(sellor && sellor.complete_step >= 4) ? '' : 'disabled'}`}>
                  Business Details <i className={`fa fa-check ${sellor && sellor.complete_step >= 5 ? 'active_current2' : ''}`} />
                </Link>
              </li>
              <li>
                <Link href="/seller/al/tax-information" className={`${pathname === "/seller/al/tax-information" ? 'active_current' : ''}  ${(sellor && sellor.complete_step >= 5) ? '' : 'disabled'}`}>
                  Tax Information <i className={`fa fa-check ${sellor && sellor.complete_step >= 6 ? 'active_current2' : ''}`} />
                </Link>
              </li>
              <li>
                <Link href="/seller/al/shipping-setting" className={`${pathname === "/seller/al/shipping-setting" ? 'active_current' : ''}  ${(sellor && sellor.complete_step >= 6) ? '' : 'disabled'}`}>
                  Shipping Setting <i className={`fa fa-check ${sellor && sellor.complete_step >= 7 ? 'active_current2' : ''}`} />
                </Link>
              </li>
              <li>
                <Link href="/seller/al/bank-account-information" className={`${pathname === "/seller/al/bank-account-information" ? 'active_current' : ''}  ${(sellor && sellor.complete_step >= 7) ? '' : 'disabled'}`}>
                  Bank Account Information <i className={`fa fa-check ${sellor && sellor.complete_step >= 8 ? 'active_current2' : ''}`} />
                </Link>
              </li>
              {/* <li>
                <Link href="/seller/al/payment-information" className={`${pathname === "/seller/al/payment-information" ? 'active_current' : ''}  ${(sellor &&  sellor.complete_step >= 8)  ? '' : 'disabled'}`}>
                  Payment Information <i className={`fa fa-check ${sellor && sellor.complete_step >= 9 ? 'active_current2' : ''}`} />
                </Link>
              </li> */}
              <li>
                <Link href="/seller/al/listing" className={`${pathname === "/seller/al/listing" ? 'active_current' : ''}  ${(sellor && sellor.complete_step >= 9)   ? '' : 'disabled'}`}>
                  Listing <i className={`fa fa-check ${sellor && sellor.complete_step >= 10 ? 'active_current2' : ''}`} />
                </Link>
              </li>
            </ul>
            <Link href="/" onClick={(e)=>activeSeller(e)}>
              <div className="activate" >{globalData && globalData.sellor?.selfActive =="Active" ? "Activated" :"Activate"}</div>
            </Link>
          </div>
  )
}

export default Sidebar