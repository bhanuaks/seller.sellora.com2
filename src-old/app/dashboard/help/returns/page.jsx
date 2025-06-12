import { baseUrl } from '@/Http/helper'
import React from 'react'
import RightSideBar from '../RightSideBar'
import Link from 'next/link'

function Return() {
  return (
    <div className="sellora_045948">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="head_234">
          <h2>
            <img src={`${baseUrl}front/assets/images/001.png`} /> <Link href={`${baseUrl}dashboard/help`}> Help </Link> / <span>Returns</span>
          </h2>
          <div className="listi_content_390">
            <div className="card_34259">
              <ul>
                <li>
                  <Link href={`${baseUrl}dashboard/help/returns/return-policy-concerns-or-suggestions`}
                  >
                    <span>Return Policy Concerns or Suggestions?</span>
                  </Link>
                </li>
                
                <li>
                  <Link href={`${baseUrl}dashboard/help/returns/error-processing-customer-refund`} >
                    <span>Error Processing Customer Refund</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <RightSideBar />
    </div>
  </div>
</div>

  )
}

export default Return