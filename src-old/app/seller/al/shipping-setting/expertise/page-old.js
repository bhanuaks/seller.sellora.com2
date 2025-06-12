import Link from 'next/link'
import React from 'react'
import Sidebar from '../../afterlogincomponent/Sidebar'
import TopButton from '../../afterlogincomponent/TopButton'
import { baseUrl } from '@/Http/helper'

const page = () => {
  return (
    <div className="seller_panel_mmmm">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-3" />
      <div className="col-lg-6">
        <div className="onboarding_form">
          <h3>Onboarding Dashboard</h3>
        </div>
      </div>
      <div className="col-lg-3">
      <TopButton/>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3">
      <div className="left_side_panel">
          {/*  <div className="meter orange nostripes">
    <span style="width: 15%"></span>
  </div> */}
          <div className="card-6-inner">
            <p>Your onboarding completion status</p>
            <div className="meter orange nostripes">
              {" "}
              <span style={{ width: "15%" }} />
              <output id="progress-output-1">15%</output>
            </div>
          </div>
            <Sidebar/>
       
        </div>
      </div>
      <div className="col-lg-6">
        <div className="mm_rts-cart-list-area2">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="nnn_dform"
                style={{ paddingBottom: 0, marginBottom: 0 }}
              >
                <h2>Shipping Setting</h2>
                <div className="contnet_d">
                  <p>Creating Shipping Template </p>
                  <div className="row">
                    <div className="col-lg-3">Shipping Rate Model:</div>
                    <div className="col-lg-9">
                      <div className="business-type">
                        <label>
                          <input
                            type="radio"
                            name="business2"
                            defaultValue="percent"
                            defaultChecked=""
                          />
                          The weight of the total order
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="business2"
                            defaultValue="fixed"
                          />
                          The price of the total order (tiers)
                        </label>
                      </div>
                    </div>
                  </div>
                  <p>Shipping Methods and Regions</p>
                </div>
                <div className="table-responsive">
                  <table
                    className="table table-bordered table-striped sellor_dashboard"
                    style={{ marginTop: 20 }}
                  >
                    <thead className="table__head">
                      <tr className="winner__table">
                        <td colSpan={5}>
                          <div className="table_menu">
                            <ul className="expanded">
                              <li>
                                <Link href="/seller/al/shipping-setting/creating-shipping-template">
                                  Santanderd
                                </Link>
                              </li>
                              <li className="active current">
                                <Link href="/seller/al/shipping-setting/expertise" className="active">
                                  Expertise
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      {/*   <tr className="winner__table">
      <th width="210"> REGION Edit Regions </th>
      <th width="150">ADDRESS TYPE</th>
      <th width="200">TRANSIT TIME</th>
      <th width="200">SET RATE</th>
      <th width="60">&nbsp;</th>
      
    </tr> */}
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={5} style={{ padding: "0px !important" }}>
                          <table className="child_table">
                            <tbody>
                              <tr>
                                <th width={210}>
                                  <div className="region">
                                    REGION Edit <span>Regions</span>{" "}
                                  </div>
                                </th>
                                <th width={150}>ADDRESS TYPE</th>
                                <th width={150}>TRANSIT TIME</th>
                                <th width={250}>SET RATE</th>
                                <th width={60}>&nbsp;</th>
                              </tr>
                              <tr>
                                <td>
                                  Pennsylvania, Connecticut, Massachusetts,
                                  Rhode Island, Maine, New Hampshire, New York,
                                  New Jersey, Vermont, South Dakota, Minnesota,
                                  Missouri, Wisconsin, Illinois, Indiana, North
                                  Dakota, Nebraska, Iowa, Kansas, Ohio,
                                  Michigan, Delaware, Texas,
                                </td>
                                <td className="text-center">STREET</td>
                                <td>
                                  <select className="">
                                    <option>2-3 Days</option>
                                    <option>2-4 Days</option>
                                    <option>3-5 Days</option>
                                  </select>
                                </td>
                                <td>
                                  <div className="seat_rate">
                                    <div className="row align-items-center">
                                      <div className="col-lg-5">
                                        <input type="text" placeholder="$" />
                                      </div>
                                      <div className="col-lg-7">
                                        Shipping &amp; Handling
                                      </div>
                                    </div>
                                  </div>
                                  <div className="seat_rate">
                                    <div className="row align-items-center">
                                      <div className="col-lg-5">
                                        <input type="text" placeholder="$" />
                                      </div>
                                      <div className="col-lg-7">
                                        <select className="">
                                          <option>Per Pound</option>
                                          <option>Per Item</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="text-center">
                                  <div className="di_span">
                                    <span>
                                      <Link href="#">Edit</Link>
                                    </span>
                                    <span>
                                      <Link href="#" className="trace">
                                        <i className="far fa-trash" />
                                      </Link>
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={5}>
                          <div className="send_request_for_call text-center">
                            <Link href={`${baseUrl}seller/profile/expertise2.html`}>Add Shipping Rule</Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="breadcrumb_dashboard_right_box">
          <div className="need-help">
            {" "}
            <i className="far fa-question-circle" aria-hidden="true" /> Need
            help?{" "}
          </div>
          <p>
            Our expert team is here to guide you through setting up your shop on
            Sellora.
          </p>
          <div className="send_request_for_call">
            {" "}
            <Link href="#">Send request for call</Link>{" "}
          </div>
        </div>
        <div className="breadcrumb_dashboard_right_box">
          <div className="need-help">Frequently Asked Questions</div>
          <div className="faq_outer">
            <div className="accordion" id="accordionExample">
              {/*    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           How do you plan to utilize this data in your business strategy?
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
        </div>
      </div> */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    {" "}
                    How do you plan to utilize this data in your business
                    strategy?{" "}
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-0">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-0"
                    aria-expanded="false"
                    aria-controls="collapse-0"
                  >
                    {" "}
                    Where will this information be used?{" "}
                  </button>
                </h2>
                <div
                  id="collapse-0"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-0"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    {" "}
                    In which sections of your research paper will you
                    incorporate this information?{" "}
                  </button>
                </h2>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-3"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
          <div className="send_request_for_call">
            {" "}
            <Link href="#">More</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default page