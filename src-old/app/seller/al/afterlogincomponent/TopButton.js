import React from 'react'
import Link from 'next/link'
import { baseUrl } from '@/Http/helper'

const TopButton = () => {
  return (
    <div className="breadcumb_dash_board">
              <ul>
                <li>
                  <Link href={`${baseUrl}dashboard/add-catalog`}>Go to listing</Link>
                </li>
                <li>
                  <Link href={`${baseUrl}dashboard`}>
                    Go to seller central
                  </Link>
                </li>
              </ul>
            </div>
  )
}

export default TopButton