"use client"
import React, { useContext } from 'react'
import RightNav from '../component/RightNav'
import { AppContext } from '@/app/contaxtData/contextData'

function page() {

  const {globalData} = useContext(AppContext)

  return (
    <>
  <div className="notification_breadcomb_rts-navigation-area-breadcrumb">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="notification_breadcomb">
            <ul>
              <li>
                <a href="#">Dashboard</a>{" "}
              </li>
              <li>
                <a href="#" className="active_002">
                  Login Setting{" "}
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-9">
        <div className="content_areya">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="login_setting">
                <div className="form_field_outer">
                  <div>
                    <div className="name_heading">Name</div>
                    <div className="name">{globalData?.sellor?.name}</div>
                  </div>
                  <div>
                    {" "}
                    <span className="edit3">Edit</span>{" "}
                  </div>
                </div>
                <div className="form_field_outer">
                  <div>
                    <div className="name_heading">E-Mail</div>
                    <div className="name">{globalData?.sellor?.email}</div>
                  </div>
                  <div>
                    {" "}
                    <span className="edit3">Edit</span>{" "}
                  </div>
                </div>
                <div className="form_field_outer">
                  <div>
                    <div className="name_heading">Primary mobile number:</div>
                    <div className="name">
                      <span>
                        <strong>+{globalData?.sellor?.mobile_code}</strong> {globalData?.sellor?.mobile}
                      </span>
                      <p>
                        Quickly sign in, easily recover passwords, and receive
                        security notifications with this mobile number.
                      </p>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <span className="edit3">Edit</span>{" "}
                  </div>
                </div>
                <div className="form_field_outer">
                  <div>
                    <div className="name_heading">Password</div>
                    <div className="name">*******</div>
                  </div>
                  <div>
                    {" "}
                    <span className="edit3">Edit</span>{" "}
                  </div>
                </div>
                <div className="form_field_outer">
                  <div>
                    <div className="name_heading">2-step verification</div>
                    <div className="name">
                      <span>{globalData?.sellor?.email}</span>
                      <span>+{globalData?.sellor?.mobile_code} {globalData?.sellor?.mobile}</span>
                      <p>
                        Enter a code sent to your verification method, in
                        addition to your password, to sign in securely.
                      </p>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <span className="edit3">Edit</span>{" "}
                  </div>
                </div>
              </div>
              <button className="add-replacement-rule mb-5">Done</button>
            </div>
          </div>
        </div>
      </div>
    
        <RightNav />
       
    </div>
  </div>
  {/* popup-1-add-new-user-Modal */}
  <div
    className="modal fade"
    id="add-new-user-Modal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title title_request" id="exampleModalLabel">
            Add New User
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <div className="request_form">
            <label>Name</label>
            <input
              type="text"
              name=""
              placeholder="Name"
              className="form-control"
            />
            <label>
              Email Id<span className="required">*</span>
            </label>
            <input
              type="text"
              name=""
              placeholder="Email Id"
              className="form-control"
            />
            <label>
              Contact Number<span className="required">*</span>
            </label>
            <input
              type="text"
              name=""
              placeholder="Contact Number"
              className="form-control"
            />
          </div>
        </div>
        <div className="modal_button">
          <button
            type="button"
            className="orange-btn cancel"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="button" className="orange-btn">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default page
