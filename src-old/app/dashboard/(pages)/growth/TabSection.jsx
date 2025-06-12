"use client"
import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function TabSection() {
    const pathname = usePathname()
  return (
    <div className="col-lg-12">
      <div className="selora-insights-list">
        <ul>
          <li>
            <Link href={`${baseUrl}dashboard/growth/sellora-insights`} className={pathname=="/dashboard/growth/sellora-insights"?"active":""} >Sales</Link>
          </li>
          <li>
            <Link href={`${baseUrl}dashboard/growth/earn-more`} className={pathname=="/dashboard/growth/earn-more"?"active":""}  >Earn More </Link>
          </li>
          <li>
            <Link href={`${baseUrl}dashboard/growth/traffic-report`}  className={pathname=="/dashboard/growth/traffic-report"?"active":""}  >Traffic report </Link>
          </li>
          <li>
            <Link href={`${baseUrl}dashboard/growth/customer-segments`}  className={pathname=="/dashboard/growth/customer-segments"?"active":""}  >
              Customer Segments
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TabSection