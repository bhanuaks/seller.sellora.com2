import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HelpAndVideoTopSection from '../../HelpAndVideoTop'

function Page() {
  return (
    <div className="bg33">
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          {/*  <div className="navigator-breadcrumb-wrapper">
    <h3>Bulk Catalog Upload</h3>
  </div> */}
        </div>
        <div className="col-lg-6 col-md-6">
          <HelpAndVideoTopSection />
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <div>
         
          <div className="form_outer">
            <div className="seller_edit_information">
              <div className="row">
                <div className="col-lg-12">
                  <h2>Manage Sub Users</h2>
                  {/* <span className="edit_span"><a href="#">Edit</a></span> */}
                </div>
                <div className="col-lg-10 offset-lg-1">
                  <div className="form_s2">
                    <div className="col-lg-10 offset-lg-1">
                      <Link href={`${baseUrl}seller/profile/add-sub-user`}>
                        <button className="save">Add Sub User</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Page