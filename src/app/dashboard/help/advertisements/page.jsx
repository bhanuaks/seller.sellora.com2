import { baseUrl } from '@/Http/helper'
import React from 'react'
import RightSideBar from '../RightSideBar'
import Link from 'next/link'

function Advertisements() {
  return (
    <div className="sellora_045948">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="head_234">
          <h2>
            <img src={`${baseUrl}front/assets/images/advertisment.png`} /> <Link href={`${baseUrl}dashboard/help`}> Help </Link> /{" "}
            <span>Advertisments</span>
          </h2>
          <div className="listi_content_390">
            <div className="card_34259">
              <ul>
                <li>
                  <a href="#">
                    <span>How do I create an ad campaign on Sellora?</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      How can I stop automatic advertisements from running?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      I’m experiencing an issue with an Ad Expert—how can I
                      resolve it?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      I have a problem with my advertising credit not applying
                      correctly—what should I do?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Why am I unable to create a new advertisement?</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      What types of advertisements are available on the Sellora
                      platform?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      How do I opt out of the Sellora Managed Ads Program?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      Are there video ad options on Sellora, and how can I
                      create one?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      Can I run sponsored product ads on Sellora, and how do
                      they work?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      What are the targeting options for Sellora’s ad formats
                      (e.g., keywords, audiences)
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      How do I choose the best ad type for my products on
                      Sellora?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      Are there any restrictions on ad formats based on my
                      seller account type?
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

export default Advertisements