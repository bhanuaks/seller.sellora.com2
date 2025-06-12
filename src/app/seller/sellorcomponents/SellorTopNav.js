"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function SellorTopNav() {
    const currentUrl =  usePathname()
  
  return (
    <ul className="mainmenu metismenu" id="mobile-menu-active">
    <li className="parent">
      {" "}
      <Link href="/seller/sell-online" className={currentUrl=="/seller/sell-online"?"current3":''}> Sell Online</Link>{" "}
    </li>
    <li className="parent">
      <Link href="/seller/fees-n-commission" className={currentUrl=="/seller/fees-n-commission"?"current3":''} >Fees &amp; Commission</Link>
    </li>
    <li className="parent">
      <Link href="/seller/grow" className={currentUrl=="/seller/grow"?"current3":''} >Grow</Link>
    </li>
    <li className="parent">
      <Link href="/seller/learn" className={currentUrl=="/seller/learn"?"current3":''} >Learn</Link>
    </li>
  </ul>
  )
}

export default SellorTopNav