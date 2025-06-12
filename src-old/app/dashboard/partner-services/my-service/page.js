"use client";
import { baseUrl } from '@/Http/helper'
import React, { useState } from 'react'
import SidePopup from './SidePopup'

function page() {

    const [openSidePopup, setOpenSidePopup] = useState(false)
  return (
    <>
  <div className="rts-navigation-area-breadcrumb">
    <div className="container">
      <div className="row">
        <div className="col-lg-6"></div>
        <div className="col-lg-6">
          <div className="user-section">
            <ul>
              <li>
                <i className="far fa-bell" aria-hidden="true" />
              </li>
              <li>
                <i className="fa-solid fa-shield-halved" />
              </li>
              <li>
                <div className="dropdown23">
                  <button className="dropbtn23">
                    BIIGBIRD{" "}
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </button>
                  <div className="dropdown-content23">
                    {" "}
                    <a className="drop-link" href="#">
                      Profile
                    </a>{" "}
                    <a className="drop-link" href="#">
                      Switch Account
                    </a>{" "}
                    <a className="drop-link" href="#">
                      Buyer Questions
                    </a>{" "}
                    <a className="drop-link" href="#">
                      Log Out
                    </a>{" "}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
        <div className="col-lg-7"> </div>
        <div className="col-lg-5">
          <div className="filters_2348904890">
            <div className="row">
              <div className="col-lg-5 offset-lg-1 pb--10">
                <select className="select_344390 form-select">
                  <option value=" ">All services</option>
                  <option>All Services</option>
                  <option>Account Management</option>
                  <option>Cataloging</option>
                  <option>Taxation</option>
                  <option>Software solutions</option>
                  <option>Accounting</option>
                  <option>Advertising</option>
                  <option>Imaging</option>
                  <option>Seller Training</option>
                  <option>Warehousing Services</option>
                  <option>Seller Account Reinstat...</option>
                  <option>Liquidation</option>
                  <option>Sourcing</option>
                </select>
              </div>
              <div className="col-lg-4 pb--10">
                <select className="select_344390 form-select">
                  <option value=" ">All Locations</option>
                  <option>All Locations</option>
                  <option>United States</option>
                  <option>Canada</option>
                </select>
              </div>
              <div className="col-lg-2 pb--10">
                <button className="orange-btn">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      {/* Filters */}
      <div className="col-lg-12">
        <div className="filter-btns_23">
          <button className="btn btn-outline-secondary2 active">
            All <span>4</span>
          </button>
          <button className="btn btn-outline-secondary">
            Active <span>0</span>
          </button>
          <span className="line">&nbsp;</span>
          <button className="btn btn-outline-secondary">
            New <span>0</span>
          </button>
          <button className="btn btn-outline-secondary">
            Accepted <span>0</span>
          </button>
          <button className="btn btn-outline-secondary">
            Planned for activation <span>0</span>
          </button>
          <button className="btn btn-outline-secondary">
            Cancelled <span>1</span>
          </button>
          <button className="btn btn-outline-secondary">
            Ended <span>0</span>
          </button>
        </div>
        {/* Table */}
        <div className="table-responsive">
          <table className="table  align-middle">
            <thead className="table-light table-light_heading">
              <tr>
                <th style={{ minWidth: 250 }}>Service</th>
                <th style={{ minWidth: 200 }}>Reference No.</th>
                <th style={{ minWidth: 200 }}>Service Status</th>
                <th style={{ minWidth: 150 }}>Ratings</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="#" id="openPanel" onClick={(e)=>{
                    e.preventDefault();
                    setOpenSidePopup(true)
                  }}>
                    <div className="d-flex align-items-center">
                      <img
                        src={`${baseUrl}front/assets/images/image-25.png`}
                        className="me-3 service-logo"
                        alt="Logo"
                      />
                      <div>
                        <div>FBF Onboarding</div>
                        <div className="text-danger2 small">eCOMSOLUTIONS</div>
                      </div>
                    </div>
                  </a>
                </td>
                <td>RN5400501184</td>
                <td>
                  <span className="status-approved">Service Approved</span>
                </td>
                <td />
                <td>14 Sep</td>
              </tr>
              <tr>
                <td>
                  <a href="#" id="openPanel"   >
                    <div className="d-flex align-items-center">
                      <img
                        src={`${baseUrl}front/assets/images/image-25.png`}
                        className="me-3 service-logo"
                        alt="Logo"
                      />
                      <div>
                        <div>FBF Onboarding</div>
                        <div className="text-danger2 small">eCOMSOLUTIONS</div>
                      </div>
                    </div>
                  </a>
                </td>
                <td>RN5400501184</td>
                <td>
                  <span className="status-approved">Service Approved</span>
                </td>
                <td />
                <td>13 Sep</td>
              </tr>
              <tr>
                <td>
                  <a href="#" id="openPanel">
                    <div className="d-flex align-items-center">
                      <img
                        src={`${baseUrl}front/assets/images/image-25.png`}
                        className="me-3 service-logo"
                        alt="Logo"
                      />
                      <div>
                        <div>FBF Onboarding</div>
                        <div className="text-danger2 small">eCOMSOLUTIONS</div>
                      </div>
                    </div>
                  </a>
                </td>
                <td>RN5400501184</td>
                <td>
                  <span className="status-cancelled">Service Cancelled</span>
                </td>
                <td />
                <td>12 Sep</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>


  {/* side popup */}
    <SidePopup setOpenSidePopup={setOpenSidePopup} openSidePopup={openSidePopup} />

</>

  )
}

export default page