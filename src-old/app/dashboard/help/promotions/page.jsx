import { baseUrl } from '@/Http/helper'
import React from 'react'
import RightSideBar from '../RightSideBar'
import Link from 'next/link'

function PromotionsPage() {
  return (
    <div className="sellora_045948">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="head_234">
          <h2>
            <img src={`${baseUrl}front/assets/images/permotion.png`} /> <Link href={`${baseUrl}dashboard/help`}> Help </Link> /{" "}
            <span>Promotions</span>
          </h2>
          <div className="listi_content_390">
            <div className="card_34259">
              <ul>
                <li>
                  <a href="#">
                    <span>
                      What types of promotions are available on the Sellora
                      platform?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>How do I opt-in for a promotion on Sellora?</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      How can I opt-in to participate in a Sellora sale event?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      What are the benefits of participating in a Sellora sales
                      event promotion?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>How do I create a discount coupon on Sellora?</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      What is the minimum discount required for creating a
                      coupon on Sellora?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      How can I participate in influencer marketing on Sellora?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      How does influencer marketing work on the Sellora
                      platform?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      What are the charges or costs associated with influencer
                      marketing on Sellora?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      Why did I receive a promotional order for a disabled
                      Sellora promotion?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      Why are multiple promotions displayed for a particular
                      order on Sellora?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      Why is the promotion option disabled for my account on
                      Sellora?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      How can I schedule a promotion to run during a specific
                      time period on Sellora?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      How do I track the performance of my promotions on
                      Sellora?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      What are the eligibility requirements for running
                      promotions on Sellora?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      How can I cancel or modify an active promotion on Sellora?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      Does Sellora support flash sales, and how can I set one
                      up?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      Can I target specific customer segments with my Sellora
                      promotions?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      Why was my promotion rejected by Sellora, and how can I
                      fix it?
                    </span>
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

export default PromotionsPage