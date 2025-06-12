import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HelpAndVideoTopSection() {
  return (
    <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <ul>
              {/* <li>
                <Link href="#">
                  <Image src={`${baseUrl}front/assets/images/hand_shaking.png`} 
                  alt=''
                  width={0}
                  height={0}
                  loading='lazy'
                  sizes='100vw'
                  style={{width:"auto", height:"auto"}}
                  />
                  Help
                </Link>{" "}
              </li> */}
              <li>
                {/* <Link href="#">
                  <i className="fa-solid fa-video" />
                  Learn How to do Listing
                </Link>{" "} */}
              </li>
            </ul>
          </div>
  )
}

export default HelpAndVideoTopSection