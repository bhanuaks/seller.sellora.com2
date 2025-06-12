import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12 hub1">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <Link href={`${baseUrl}dashboard`}>
              <i className="fa-solid fa-arrow-left" /> Go to Seller hub
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-6">
          <div className="navigator-breadcrumb-wrapper text-center">
            <h3>Campaign Manager</h3>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-6">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <ul>
              <li>
                 <Link href={`${baseUrl}dashboard/advertising/payment-wallet-summary`}>
                  <i className="fa-solid fa-wallet" /> Wallet
                </Link>{" "}
              </li>
              <li>
                <a href="#">
                <Image src={`${baseUrl}front/assets/images/hand_shaking.png`}
                                        alt=''
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                        loading='lazy' 
                                        style={{width:"auto", height:"auto"}}
                                        /> 
                                         Help
                  
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="details_page_outer">
    <div className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <Link href={`${baseUrl}dashboard/advertising/start-advertising`} className="campaign-btn">
              Create Campaign
            </Link>
          </div>
          <div className="col-12">
            <div className="manager">
              <div className="row g-4 align-items-center">
                <div className="col-lg-2 col-md-3 col-12">
                  <div className="manager_boxs">
                    <h5>Ad Spend</h5>
                    <h6>₹ 0</h6>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-12">
                  <div className="manager_boxs">
                    <h5>Sales</h5>
                    <h6>-</h6>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-12">
                  <div className="manager_boxs">
                    <h5>ROI</h5>
                    <h6>-</h6>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-12">
                  <div className="manager_boxs">
                    <h5>Views</h5>
                    <h6>-</h6>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-12">
                  <div className="manager_boxs">
                    <h5>Clicks</h5>
                    <h6>-</h6>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-12">
                  <div className="manager_boxs">
                    <h5>Orders</h5>
                    <h6>-</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt--30 campaigns-table">
      <div>
        <div className="managerF">
          <table
            className="table table-bordered table-striped"
            style={{ marginTop: 20 }}
          >
            <thead className="table__head">
              <tr className="winner__table">
                <th colSpan={12}>
                  <div className="table_menu">
                    <ul>
                      <li>
                        <a href="#" className="active">
                          All Campaigns
                        </a>
                      </li>
                      <li>
                        <a href="#">Active Campaigns </a>
                      </li>
                      <li>
                        <a href="#">Inactive Campaigns </a>
                      </li>
                      <li>
                        <div className="searchCam position-relative">
                          <form
                            role="search"
                            className="sr-input-func col-lg-auto"
                          >
                            <a href="#">
                              <i className="fa fa-search" />
                            </a>
                            <input
                              type="text"
                              placeholder="Search Campaign "
                              className="search-int form-control"
                            />
                          </form>
                        </div>
                      </li>
                    </ul>
                  </div>
                </th>
              </tr>
              <tr className="winner__table">
                {/* <th width="110">
                              <div className="che">
                                  <p>
                                      <input type="checkbox" id="status" name="">
                                      <label for="status">Status</label>
                                  </p>
                              </div>
                          </th> */}
                <th>Campaign Name</th>
                <th>Campaign Type </th>
                <th>Budget</th>
                <th>Budget Utilized</th>
                <th>Views</th>
                <th>Clicks</th>
                <th>Orders</th>
                <th>Sales</th>
                <th>ACOS</th>
                <th>ROI</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="winner__table">
                <td>
                  <div className="product_dash">
                    <div>
                    <Image src={`${baseUrl}front/assets/images/preview01.jpg`}
                                        alt=''
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                        loading='lazy' 
                                        style={{width:"auto", height:"auto"}}
                                        /> 
                     
                    </div>
                    <div>
                      <p>Toothpaste </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="skusdsdfsdfs text-center">
                    <ul>
                      <li>
                        <strong>Sponsored Ads</strong>
                      </li>
                      <li>Manual Campaign</li>
                    </ul>
                  </div>
                </td>
                <td className="text-center small-size">$ 30</td>
                <td className="text-center small-size">$ 30.9</td>
                <td className="text-center small-size">37979</td>
                <td className="text-center small-size">267</td>
                <td className="text-center small-size">-</td>
                <td className="text-center small-size">-</td>
                <td className="text-center small-size">-</td>
                <td className="text-center small-size">-</td>
                <td className="text-center small-size">
                  <div className="selected">
                    <select>
                      <option >Edit</option>
                      <option value={1}>Paused</option>
                      <option value={2}>Archive</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="product_dash">
                    <div>
                    <Image src={`${baseUrl}front/assets/images/preview01.jpg`}
                                        alt=''
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                        loading='lazy' 
                                        style={{width:"auto", height:"auto"}}
                                        />  
                    </div>
                    <div>
                      <p>Shampoo </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="skusdsdfsdfs text-center">
                    <ul>
                      <li>
                        <strong>Sponsored Ads</strong>
                      </li>
                      <li>Manual Campaign</li>
                    </ul>
                  </div>
                </td>
                <td className="text-center small-size">$ 30</td>
                <td className="text-center small-size">$ 30.9</td>
                <td className="text-center small-size">37979</td>
                <td className="text-center small-size">267</td>
                <td className="text-center small-size">-</td>
                <td className="text-center small-size">-</td>
                <td className="text-center small-size">-</td>
                <td className="text-center small-size">-</td>
                <td className="text-center small-size">
                  <div className="selected">
                    <select>
                      <option >Edit</option>
                      <option value={1}>Paused</option>
                      <option value={2}>Archive</option>
                    </select>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      
      </div>
    </div>
  </div>
</>

  )
}

export default Page