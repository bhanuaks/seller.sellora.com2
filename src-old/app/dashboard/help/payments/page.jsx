import { baseUrl } from '@/Http/helper'
import React from 'react'
import RightSideBar from '../RightSideBar'
import Link from 'next/link'

function PaymentPage() {
  return (
    <div className="sellora_045948">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="head_234">
          <h2>
            <img src={`${baseUrl}front/assets/images/payment.png`} /> <Link href={`${baseUrl}dashboard/help`}> Help </Link> /{" "}
            <span>Payments</span>
          </h2>
          <div className="listi_content_390">
            <div className="card_34259">
              <ul>
                <li>
                  <a href="#">
                    <span>I have not received payments for my orders.</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      I would like to know about my upcoming payments.
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>I need access to my Sales Report.</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>I want to download the Commission Tax Invoice.</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>I have received an incorrect invoice.</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>I would like to change my bank account details.</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      I want to understand how my settlement amount has been
                      calculated.
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      I would like to know the reason for deductions made from
                      my order payment.
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      Where can I access my past and current invoices?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>I am facing other payment-related issues.</span>
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

export default PaymentPage