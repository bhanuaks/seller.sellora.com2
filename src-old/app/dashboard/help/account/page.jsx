import { baseUrl } from '@/Http/helper'
import React from 'react'
import RightSideBar from '../RightSideBar'
import Link from 'next/link'

function AccountPage() {
  return (
    <div className="sellora_045948">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="head_234">
          <h2>
            <img src={`${baseUrl}front/assets/images/account.png`} /><Link href={`${baseUrl}dashboard/help`}> Help </Link>/ <span>Account</span>
          </h2>
          <div className="listi_content_390">
            <div className="card_34259">
              <ul>
                <li>
                  <a href="#">
                    <span>My account is deactivated</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>I want to change my Pickup Address</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>I want to change my registered email address</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>I want to change my Display Name</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>I want to change my registered contact number</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>I have an issue with my Account manager</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      Can I update my Business Identification Number
                      (EIN/GSTIN)?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>How to update my bank details?</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>I need account manager</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Other Issue</span>
                  </a>
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

export default AccountPage