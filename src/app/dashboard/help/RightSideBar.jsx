"use client"
import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function RightSideBar() {

  const pathname = usePathname();

  const orders_delivery_path = ["/dashboard/help/orders-delivery", "/dashboard/help/orders-delivery/order-alerts", "/dashboard/help/orders-delivery/unable-to-cancel-order", "/dashboard/help/orders-delivery/issue-acknowledging-new-orders", "/dashboard/help/orders-delivery/unable-to-update-tracking-information"];
  const return_path = ["/dashboard/help/returns", "/dashboard/help/returns/return-policy-concerns-or-suggestions", "/dashboard/help/returns/error-processing-customer-refund"];

  return (
     <div className="col-lg-3">
          <div className="right_sectio_45784 sticky-top_19">
            <h2>Find More Help</h2>
            <ul>
              <li>
              <Link href={`${baseUrl}dashboard/help/orders-delivery`} className={orders_delivery_path.includes(pathname)?"active":""}>Orders &amp; Delivery</Link>
            </li>
            <li>
              <Link href={`${baseUrl}dashboard/help/returns`}  className={return_path.includes(pathname)?"active":""} >Returns</Link>
            </li>
            <li>
              <Link href={`${baseUrl}dashboard/help/listing-catalog`} className={pathname == "/dashboard/help/listing-catalog"?"active":""} >Listing &amp; Catalog</Link>
            </li>
            <li>
              <Link href={`${baseUrl}dashboard/help/payments`} className={pathname == "/dashboard/help/payments"?"active":""} >Payments</Link>
            </li>
            <li>
              <Link href={`${baseUrl}dashboard/help/advertisements`} className={pathname == "/dashboard/help/advertisements"?"active":""} >Advertisements</Link>
            </li>
            <li>
              <Link href={`${baseUrl}dashboard/help/promotions`} className={pathname == "/dashboard/help/promotions"?"active":""}>Promotions</Link>
            </li>
            <li>
              <Link href={`${baseUrl}dashboard/help/seller-perfomance`} className={pathname == "/dashboard/help/seller-perfomance"?"active":""} >Seller Perfomance</Link>
            </li>
            <li>
              <Link href={`${baseUrl}dashboard/help/account`} className={pathname == "/dashboard/help/account"?"active":""} >Account</Link>
            </li>
           
            <li>
              <Link href={`${baseUrl}dashboard/help/raise-a-ticket`}   className={pathname == "/dashboard/help/raise-a-ticket"?"active":""}>
                Still need help?Raise a ticket
              </Link>
            </li>
            </ul>
          </div>
        </div>

    // <div className="col-lg-3 offset-lg-1">
    //     <div className="right_sectio_45784">
    //       <h2>Find More Help</h2>
    //       <ul>
    //         <li>
    //           <Link href={`${baseUrl}dashboard/help/orders-delivery`} className={orders_delivery_path.includes(pathname)?"active":""}>Orders &amp; Delivery</Link>
    //         </li>
    //         <li>
    //           <Link href={`${baseUrl}dashboard/help/returns`}  className={return_path.includes(pathname)?"active":""} >Returns</Link>
    //         </li>
    //         <li>
    //           <Link href={`${baseUrl}dashboard/help/listing-catalog`} className={pathname == "/dashboard/help/listing-catalog"?"active":""} >Listing &amp; Catalog</Link>
    //         </li>
    //         <li>
    //           <Link href={`${baseUrl}dashboard/help/payments`} className={pathname == "/dashboard/help/payments"?"active":""} >Payments</Link>
    //         </li>
    //         <li>
    //           <Link href={`${baseUrl}dashboard/help/advertisements`} className={pathname == "/dashboard/help/advertisements"?"active":""} >Advertisements</Link>
    //         </li>
    //         <li>
    //           <Link href={`${baseUrl}dashboard/help/promotions`} className={pathname == "/dashboard/help/promotions"?"active":""}>Promotions</Link>
    //         </li>
    //         <li>
    //           <Link href={`${baseUrl}dashboard/help/seller-perfomance`} className={pathname == "/dashboard/help/seller-perfomance"?"active":""} >Seller Perfomance</Link>
    //         </li>
    //         <li>
    //           <Link href={`${baseUrl}dashboard/help/account`} className={pathname == "/dashboard/help/account"?"active":""} >Account</Link>
    //         </li>
    //         {/* <li>
    //           <Link href={`${baseUrl}dashboard/help/still-didn-t-find-the-answer`}  className={pathname == "/dashboard/help/still-didn-t-find-the-answer"?"active":""}>
    //             Still didn’t find the answer?
    //           </Link>
    //         </li> */}
    //         <li>
    //           <Link href={`${baseUrl}dashboard/help/raise-a-ticket`}   className={pathname == "/dashboard/help/raise-a-ticket"?"active":""}>
    //             Still need help?Raise a ticket
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
  )
}

export default RightSideBar