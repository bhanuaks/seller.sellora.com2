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
                  Notification
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
          <div className="mb-5">
            <p>
              Choose which notifications you receive. We’ll always send you
              important notifications related to your account. (Not all options
              are available at this time)
            </p>
          </div>
          <div className="container_box">
            <h2>Listing Notification</h2>
            <div className="listing-notification_outer">
              <div className="row_outer">
                <div className="label2">Listing Creation</div>
                <div className="checkbox">
                  <input type="checkbox" />
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    placeholder="Email"
                    defaultValue="abc@gmail.com"
                    disabled=""
                  />
                </div>
                <div className="edit-icon">
                  {" "}
                  <i className="fa fa-pencil" />{" "}
                </div>
              </div>
              <div className="row_outer">
                <div className="label2">
                  Compliance requirements apply to this listing
                </div>
                <div className="checkbox">
                  <input type="checkbox" />
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    placeholder="Email"
                    defaultValue="abc@gmail.com"
                    disabled=""
                  />
                </div>
                <div className="edit-icon">
                  {" "}
                  <i className="fa fa-pencil" />{" "}
                </div>
              </div>
              <div className="row_outer">
                <div className="label2">Listing recommendations</div>
                <div className="checkbox">
                  <input type="checkbox" />
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    placeholder="Email"
                    defaultValue="abc@gmail.com"
                    disabled=""
                  />
                </div>
                <div className="edit-icon">
                  {" "}
                  <i className="fa fa-pencil" />{" "}
                </div>
              </div>
            </div>
            {/* =============devider====end============================= */}
            {/* =============devider====open============================= */}
            <h2>Order Notification</h2>
            <div className="listing-notification_outer">
              <div className="row_outer">
                <div className="label2">New Order (Solid. Ship)</div>
                <div className="checkbox">
                  <input type="checkbox" />
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    placeholder="Email"
                    defaultValue="abc@gmail.com"
                    disabled=""
                  />
                </div>
                <div className="edit-icon">
                  {" "}
                  <i className="fa fa-pencil" />{" "}
                </div>
              </div>
              <div className="row_outer">
                <div className="label2">New Order Cancellation Risk</div>
                <div className="checkbox">
                  <input type="checkbox" />
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    placeholder="Email"
                    defaultValue="abc@gmail.com"
                    disabled=""
                  />
                </div>
                <div className="edit-icon">
                  {" "}
                  <i className="fa fa-pencil" />{" "}
                </div>
              </div>
            </div>
            {/* =============devider====end============================= */}
            {/* =============devider=open================================ */}
            <h2>Returns &amp; Refunds</h2>
            <div className="listing-notification_outer">
              <div className="row_outer">
                <div className="label2">New Return Request</div>
                <div className="checkbox">
                  <input type="checkbox" />
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    placeholder="Email"
                    defaultValue="abc@gmail.com"
                    disabled=""
                  />
                </div>
                <div className="edit-icon">
                  {" "}
                  <i className="fa fa-pencil" />{" "}
                </div>
              </div>
              <div className="row_outer">
                <div className="label2">Return Delivered</div>
                <div className="checkbox">
                  <input type="checkbox" />
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    placeholder="Email"
                    defaultValue="abc@gmail.com"
                    disabled=""
                  />
                </div>
                <div className="edit-icon">
                  {" "}
                  <i className="fa fa-pencil" />{" "}
                </div>
              </div>
              <div className="row_outer">
                <div className="label2">Refund Issued</div>
                <div className="checkbox">
                  <input type="checkbox" />
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    placeholder="Email"
                    defaultValue="abc@gmail.com"
                    disabled=""
                  />
                </div>
                <div className="edit-icon">
                  {" "}
                  <i className="fa fa-pencil" />{" "}
                </div>
              </div>
            </div>
            {/* =============devider====end============================= */}
            {/* =============devider=open================================ */}
            <h2>Growth Opportunities</h2>
            <div className="listing-notification_outer">
              <div className="row_outer">
                <div className="label2">Advertisement Recommendation</div>
                <div className="checkbox">
                  <input type="checkbox" />
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    placeholder="Email"
                    defaultValue="abc@gmail.com"
                    disabled=""
                  />
                </div>
                <div className="edit-icon">
                  {" "}
                  <i className="fa fa-pencil" />{" "}
                </div>
              </div>
              <div className="row_outer">
                <div className="label2">Price Recommendation</div>
                <div className="checkbox">
                  <input type="checkbox" />
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    placeholder="Email"
                    defaultValue="abc@gmail.com"
                    disabled=""
                  />
                </div>
                <div className="edit-icon">
                  {" "}
                  <i className="fa fa-pencil" />{" "}
                </div>
              </div>
              <div className="row_outer">
                <div className="label2">
                  Sellora Promotions (Sales Event, Discount Coupon)
                </div>
                <div className="checkbox">
                  <input type="checkbox" />
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    placeholder="Email"
                    defaultValue="abc@gmail.com"
                    disabled=""
                  />
                </div>
                <div className="edit-icon">
                  {" "}
                  <i className="fa fa-pencil" />{" "}
                </div>
              </div>
            </div>
            {/* =============devider====end============================= */}
            {/* =============devider=open================================ */}
            <h2>Report</h2>
            <div className="listing-notification_outer">
              <div className="row_outer">
                <div className="label2">Report Status</div>
                <div className="checkbox">
                  <input type="checkbox" />
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    placeholder="Email"
                    defaultValue="abc@gmail.com"
                    disabled=""
                  />
                </div>
                <div className="edit-icon">
                  {" "}
                  <i className="fa fa-pencil" />{" "}
                </div>
              </div>
            </div>
            {/* =============devider====end============================= */}
            <div className="ewr0_footer_text4290">
              <div className="row">
                <div className="col-lg-5">
                  <div className="noti">
                    <strong>Emergency Notification</strong>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="d-flex mb-2">
                    <div className="email_459804">Email</div>
                    <div className="orange_349">abc@gmail.com</div>
                  </div>
                  <div className="d-flex mb-2">
                    <div className="email_459804">Phone Number</div>
                    <div className="orange_349">123456781</div>
                  </div>
                </div>
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
