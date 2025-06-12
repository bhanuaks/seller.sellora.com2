import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HelpAndVideoTopSection from '../../HelpAndVideoTop'

function Page() {
  return (
    <>
    <div className="rts-navigation-area-breadcrumb pb--10">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            
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
            {/*  <ol className="steps">
    <li className="step is-active" data-step="1">
      <span>Categories</span>
    </li>
    <li className="step" data-step="2">
      <span>Brand</span>
    </li>
    <li className="step" data-step="3">
     <span>Download</span>
    </li>
  </ol> */}
            <div className="form_outer">
              <div className="seller_edit_information">
                <div className="row">
                  <div className="col-lg-12">
                    <h2>Add Sub User</h2>
                  </div>
                  <div className="col-lg-10 offset-lg-1">
                    <div className="form_s2">
                      <div className="row">
                        <div className="">
                          <div className="nnn_dform">
                            <div className="registration_form_single-input">
                              <div className="row">
                                <div className="col-lg-3">
                                  <label className="right-text">Role:</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-3">
                                  <label className="right-text">Name:</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-3">
                                  <label className="right-text">Email:</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="email" />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-3">
                                  <label className="right-text">Password:</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="password" />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-3">
                                  <label className="right-text">
                                    Phone Number:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="number" />
                                </div>
                              </div>
                            </div>
                            <div className="registration_form_single-input">
                              <div className="row">
                                <div className="col-lg-3" />
                                <div className="col-lg-4 offset-lg-1">
                                  <div className="d-flex">
                                    <button className="save">Save</button>&nbsp;
                                    <button className="save cancel">
                                      Cancel
                                    </button>
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
        </div>
      </div>
    </div>
  </>
  
  )
}

export default Page