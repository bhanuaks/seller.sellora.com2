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
                  Return Setting
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
        <div className="content_areya border__10_6">
          <div className="mb-5" style={{ marginLeft: 20 }}>
            <p>Seller Fulfilled Returns</p>
          </div>
          <div className="return_setting_outer">
            <div className="row">
              <div className="col-lg-4">
                <div className="return_0344">General Returns Settings</div>
              </div>
              <div className="col-lg-8">
                <div className="re_40540">
                  <h2>RMA (Return Merchandise Authorization) Rules</h2>
                  <p>
                    Sellora automatically approves all return requests based on
                    your predefined return settings and policies. For any
                    exceptions to these rules, customers will reach out to you
                    directly through buyer questions
                  </p>
                  <h4>Refunds</h4>
                  <label>
                    <input
                      type="checkbox"
                      disabled="disabled"
                      defaultChecked="checked"
                    />
                    I will manually issue all refunds within 48 hours of
                    receiving returned items
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="return_setting_outer">
            <div className="row">
              <div className="col-lg-4">
                <div className="return_0344">
                  Extended Holiday Return Window
                </div>
              </div>
              <div className="col-lg-8">
                <div className="re_40540">
                  <h2>Return window is extended for the holidays</h2>
                  <p>
                    Sellora's return window updates automatically, so sellers
                    need no action. Our industry-standard policy ensures shopper
                    peace of mind during holidays, building trust and loyalty
                    with your customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="return_setting_outer">
            <div className="row">
              <div className="col-lg-4">
                <div className="return_0344">Return Address (Required)</div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="second_heding">
                      <h2>Alias</h2>
                      <p>Paula</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="second_heding">
                      <h2>Street Address</h2>
                      <p>asdfghj</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="second_heding">
                      <h2>City, State, Zip</h2>
                      <p>asdfghj</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="second_heding">
                      <h2>Actions</h2>
                      <div
                        className="edit_10_2"
                        data-bs-toggle="modal"
                        data-bs-target="#return-address-Modal"
                      >
                        {" "}
                        <i className="fa fa-pencil" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="return_setting_outer">
            <div className="row">
              <div className="col-lg-4">
                <div className="return_0344">Return Window</div>
                <p>Configure the return window</p>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="second_heding">
                      <h2>Rules by department</h2>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="second_heding">
                      <h2>Department</h2>
                      <p>All</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="second_heding">
                      <h2>Return Window</h2>
                      <p>30 Days</p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="second_heding">
                      <h2>Actions</h2>
                      <div
                        className="edit_10_2"
                        data-bs-toggle="modal"
                        data-bs-target="#rules-by-department-Modal"
                      >
                        {" "}
                        <i className="fa fa-pencil" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="return_setting_outer">
            <div className="row">
              <div className="col-lg-4">
                <div className="return_0344">Replacements by Department</div>
                <p>Enable or disable replacements in specific departments</p>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="second_heding">
                      <h2>Department</h2>
                      <p>All</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="second_heding">
                      <h2>Replacements Enabled ?</h2>
                      <p>No</p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="second_heding">
                      <h2>Actions</h2>
                      <div
                        className="edit_10_2"
                        data-bs-toggle="modal"
                        data-bs-target="#replacements-by-department-Modal"
                      >
                        {" "}
                        <i className="fa fa-pencil" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mlrtb">
            <div className="row">
              <div className="col-lg-3">
                <button className="add-replacement-rule">
                  Add Replacement Rule
                </button>
              </div>
              <div className="clear" />
              <div className="col-lg-9">
                <div className="input-group feedback">
                  <input type="text" className="form-control" />
                  <div className="input-group-append">
                    <button className="ask" type="button">
                      Feedback
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <RightNav />
      
    </div>
  </div>


  <div
    className="modal fade"
    id="return-address-Modal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title title_request" id="exampleModalLabel">
            Edit Return Address
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
            <label>Display name</label>
            <input
              type="text"
              name=""
              placeholder="Mailed It LLC"
              className="form-control"
            />
            <div className="printed">
              Printed on the 'To' field on the return label
            </div>
            <div className="printed">
              Printed as the second line on the return label
            </div>
            <label>Address Line 1</label>
            <input
              type="text"
              name=""
              placeholder="1703 Evans Rd."
              className="form-control"
            />
            <label>Address Line 1</label>
            <input
              type="text"
              name=""
              placeholder="1703 Evans Rd."
              className="form-control"
            />
            <label>Address Line 2 (Optional)</label>
            <input
              type="text"
              name=""
              placeholder={14211}
              className="form-control"
            />
            <div className="row">
              <div className="col-lg-4">
                <label>City</label>
                <input
                  type="text"
                  name=""
                  placeholder="San Antonio"
                  className="form-control"
                />
              </div>
              <div className="col-lg-4">
                <label>State</label>
                <select className="select_344390 form-select">
                  <option value="">All Services Types</option>
                  <option>Texas</option>
                </select>
              </div>
              <div className="col-lg-4">
                <label>Zip</label>
                <input
                  type="text"
                  name=""
                  placeholder={78258}
                  className="form-control"
                />
              </div>
            </div>
            <label>Return Address (Not printed on the return label)</label>
            <input
              type="text"
              name=""
              placeholder="Mailed It, LLC"
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
  {/* popup-2-rules-by-department-Modal */}
  <div
    className="modal fade"
    id="rules-by-department-Modal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title title_request" id="exampleModalLabel">
            Edit Department Rule
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
            <p>Please see the Marketplace Return’s Policy for return center.</p>
            <label>Department </label>
            <input
              type="text"
              name=""
              placeholder="All"
              className="form-control"
            />
            <div className="printed">
              Printed on the 'To' field on the return label
            </div>
            <label>Return window</label>
            <div className="position-relateve">
              <input
                type="text"
                name=""
                placeholder={30}
                className="form-control"
              />
              <span className="days">Days</span>
            </div>
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
  {/* popup-3-replacements-by-department-Modal */}
  <div
    className="modal fade"
    id="replacements-by-department-Modal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title title_request" id="exampleModalLabel">
            Edit Department Rule
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
            <p>Please see the Marketplace Return’s Policy for return center.</p>
            <label>Department </label>
            <input
              type="text"
              name=""
              placeholder="All"
              className="form-control"
            />
            <div className="printed">
              Printed on the 'To' field on the return label
            </div>
            <label>Replacements Enabled ?</label>
            <div className="container">
              <div className="radio">
                <input
                  id="radio-1"
                  name="radio"
                  type="radio"
                  defaultChecked=""
                />
                <label htmlFor="radio-1" className="radio-label">
                  Yes{" "}
                </label>
              </div>
              <div className="radio">
                <input id="radio-2" name="radio" type="radio" />
                <label htmlFor="radio-2" className="radio-label">
                  No
                </label>
              </div>
              {/*  <div className="radio">
    <input id="radio-3" name="radio" type="radio" disabled>
    <label for="radio-3" className="radio-label">Disabled</label>
  </div> */}
            </div>
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
