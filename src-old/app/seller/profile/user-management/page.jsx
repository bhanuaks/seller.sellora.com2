import Link from 'next/link'
import React from 'react'
import RightNav from '../component/RightNav'

function page() {
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
                  User Management
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
        <div className="content_areya border__10_6 min_height">
          <div className="mlrtb">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-4">
                <button
                  className="add-replacement-rule mb-5"
                  data-bs-toggle="modal"
                  data-bs-target="#add-new-user-Modal"
                >
                  Add New Users
                </button>
              </div>
              <div className="clear" />
              <div className="col-lg-6">
                <p className="text-center">
                  Assign and Manage Roles and Permissions to a User Add a user,
                  Select Role and Grant Permissions to provide access
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <RightNav />
      </div>
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
            <a href="/seller/profile/user-management-list">Save</a>
          </button>
          
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default page
