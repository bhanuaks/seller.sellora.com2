import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import React from 'react'

function Page() {
  return (
    
<>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <ul>
              <li>
                <a href="#"> 
                  <Image src={`${baseUrl}front/assets/images/hand_shaking.jpg`}
                    alt='influencer-marketing.jpg'
                    width={0}
                    height={0}
                    sizes='100vw' 
                    style={{width:"auto", height:"auto"}} 
                    /> 
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="navigator-breadcrumb-wrapper text-center mb--20">
            <h3>Seller Feedback </h3>
            <p>...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div
      style={{
        textAlign: "center",
        minHeight: 300,
        border: "1px solid #ccc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20
      }}
    >
      coming soon
    </div>
  </div>
</>
  )
}

export default Page