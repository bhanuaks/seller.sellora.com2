import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
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
                  <h2>Login Details</h2>
                  <span className="edit_span">
                    <a href="#">Edit</a>
                  </span>
                </div>
                <div className="col-lg-10 offset-lg-1">
                  <div className="form_s2">
                    <div className="row">
                      <div className="col-lg-8 offset-lg-2">
                        <div className="nnn_dform">
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">Name</label>
                            <input
                              type="text"
                              defaultValue="Goody2’s"
                              readOnly=""
                            />
                          </div>
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">Mobile Number</label>
                            <input
                              type="text"
                              defaultValue="+1808 500 4235"
                              readOnly=""
                            />
                          </div>
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">Email address</label>
                            <input
                              type="text"
                              defaultValue="paula@maileditllc.com"
                              readOnly=""
                            />
                          </div>
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">Password</label>
                            <input
                              type="password"
                              defaultValue="Password"
                              readOnly=""
                            />
                          </div>
                          <button className="save">Update</button>
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
  </div>
</div>

  )
}

export default Page