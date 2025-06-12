"use client"
import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function Page() {
      const router = useRouter();
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
        <div className="col-lg-4 col-md-4 col-7">
          <div className="navigator-breadcrumb-wrapper text-center">
            <h3>Choose a campaign type</h3>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-5">
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
                                    />  Help
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
          {/* <div className="col-lg-12">
        <div className="stay_informed_heding ads_help_heading">How Ads Help Grow Your Orders:</div>
      </div> */}
          <div className="col-lg-4 offset-lg-2">
            <div className="boxs_1 adver_boxs campaign_box" onClick={()=>router.push(`${baseUrl}dashboard/advertising/manual-campaign`)} >
              <div className="heding_fl">
                {/* <div><img src="assets/images/adver-icon-01.jpg"></div> */}
                <div>Manual Campaign</div>
              </div>
              <p>Promote only the catalogs you select</p>
              {/* <div className="explore_button"><a href="#">Explore Account Health</a></div> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="boxs_1 adver_boxs campaign_box campaign_box2"  onClick={()=>router.push(`${baseUrl}dashboard/advertising/smart-campaign`)}>
              <div className="heding_fl">
                {/* <div><img src="assets/images/adver-icon-01.jpg"></div> */}
                <div>Smart Campaign</div>
              </div>
              <p>Effortlessly select and manage catalogs automatically</p>
              {/* <div className="explore_button"><a href="#">Explore Account Health</a></div> */}
            </div>
          </div>
          {/* <div className="col-lg-12 text-center mt--20">
        <div className="send"><a href="#">Send your Feedback</a></div>
      </div> */}
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="text-center manual-campaign-tit">
            <h2>Smart Campaign</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="nnn_dform">
            <div className="registration_form_single-input">
              <label htmlFor="f-name">Campaign Name</label>
              <input type="text" />
            </div>
            <div className="registration_form_single-input">
              <label htmlFor="f-name">Select Catalog</label>
              <div className="file-placeholder">
                <label />
                <input type="file" className="fileUpload" />
                <div className="file-browse">
                  <span className="file-browse-txt">
                    Search by product name, SIN, or SKU
                  </span>
                  <span className="browse browse-compaign">Select</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-6 pe-0">
          <div className="manual-compaign-table">
            <div className="table-responsive">
              <div className="rightselect">
                <h5> &nbsp;</h5>
              </div>
              <table className="table table-bordered table-striped br-none compaign-table">
                {/* <thead className="table__head">
           
          
              <tr className="winner__table">
                <th width="50"><input type="checkbox"></th>
                <th width="120">Order Date</th>
                <th width="150">Order ID/PO </th>
                <th style="min-width: 100px">&nbsp;</th>
                <th width="400">Product Detail</th>
                <th width="180">Customer Name</th>
                <th width="180">Shipping type </th>
                <th width="180">Ship by</th>
                <th width="180">Fulfilled by</th>
                <th width="180">Total order</th>
                <th width="180">Qty</th>
                <th>Status</th>
                <th width="180">Action</th>
                 
              </tr>
            </thead> */}
                <tbody>
                  <tr className="winner__table" style={{ borderTop: "none" }}>
                    <td className="text-center check-bg">
                      <input
                        id="cb1"
                        className="checkbox"
                        type="checkbox"
                        defaultChecked=""
                      />
                    </td>
                    <td style={{ minWidth: 80 }}>
                      
                       <Image src={`${baseUrl}front/assets/images/preview01.jpg`}
                                        alt=''
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                        loading='lazy'
                                        className="manual-campaign-img"
                                        style={{width:"auto", height:"auto"}}
                                        /> 
                    </td>
                    <td>
                      <div className="product_details_content mamual_product_details_content">
                        <p>
                          Loras Choice V34 Purple Toothpaste Colour Corrector,
                          Tooth Stain Concealer, Teeth Whitening Booster, Colour
                          Correcting, Toothpaste Color Corrector Serum Brighten
                          and Whiten Teeth -30ml
                        </p>
                        <ul>
                          <li className="mamuallist">
                            <span>SIN:</span> B0DDYCB79B
                          </li>
                          <li>
                            <span>SKU:</span> Loras Choice Purple Toothpaste
                          </li>
                          <li className="mamuallist">
                            <span>Price: </span> $24{" "}
                          </li>
                          <li>
                            <span>Stock: </span> 10{" "}
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr className="winner__table">
                    <td className="text-center">
                      <input
                        id="cb1"
                        type="checkbox"
                        defaultChecked=""
                        disabled=""
                      />
                    </td>
                    <td style={{ minWidth: 80 }}>
                    <Image src={`${baseUrl}front/assets/images/preview01.jpg`}
                                        alt=''
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                        loading='lazy'
                                        className="manual-campaign-img"
                                        style={{width:"auto", height:"auto"}}
                                        /> 
                    </td>
                    <td>
                      <div className="product_details_content mamual_product_details_content">
                        <p>
                          Loras Choice V34 Purple Toothpaste Colour Corrector,
                          Tooth Stain Concealer, Teeth Whitening Booster, Colour
                          Correcting, Toothpaste Color Corrector Serum Brighten
                          and Whiten Teeth -30ml
                        </p>
                        <ul>
                          <li className="mamuallist">
                            <span>SIN:</span> B0DDYCB79B
                          </li>
                          <li>
                            <span>SKU:</span> Loras Choice Purple Toothpaste
                          </li>
                          <li className="mamuallist">
                            <span>Price: </span> $24{" "}
                          </li>
                          <li>
                            <span>Stock: </span> 10{" "}
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-lg-6 ps-0 mt-5 mt-md-0">
          <div className="manual-compaign-table2">
            <div className="table-responsive">
              <div className="rightselect  d-flex justify-content-between align-items-center">
                <h5> Product Selected (1)</h5>
                <ul className="match_type">
                  <li>
                    <i className="fa-solid fa-times pe-4" />
                  </li>
                </ul>
              </div>
              <table className="table table-bordered table-striped br-none compaign-table ">
                {/* <thead className="table__head">
           
          
              <tr className="winner__table">
                <th width="50"><input type="checkbox"></th>
                <th width="120">Order Date</th>
                <th width="150">Order ID/PO </th>
                <th style="min-width: 100px">&nbsp;</th>
                <th width="400">Product Detail</th>
                <th width="180">Customer Name</th>
                <th width="180">Shipping type </th>
                <th width="180">Ship by</th>
                <th width="180">Fulfilled by</th>
                <th width="180">Total order</th>
                <th width="180">Qty</th>
                <th>Status</th>
                <th width="180">Action</th>
                 
              </tr>
            </thead> */}
                <tbody>
                  <tr className="winner__table rightselect3">
                    {/* <td className="text-center check-bg"><input className="checkbox" type="checkbox" checked></td> */}
                    <td style={{ minWidth: 80 }}>
                    <Image src={`${baseUrl}front/assets/images/preview01.jpg`}
                                        alt=''
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                        loading='lazy'
                                        className="manual-campaign-img"
                                        style={{width:"auto", height:"auto"}}
                                        /> 
                    </td>
                    <td>
                      <div className="product_details_content mamual_product_details_content">
                        <p>
                          Loras Choice V34 Purple Toothpaste Colour Corrector,
                          Tooth Stain Concealer, Teeth Whitening Booster, Colour
                          Correcting, Toothpaste Color Corrector Serum Brighten
                          and Whiten Teeth -30ml
                        </p>
                        <ul>
                          <li className="mamuallist">
                            <span>SIN:</span> B0DDYCB79B
                          </li>
                          <li>
                            <span>SKU:</span> Loras Choice Purple Toothpaste
                          </li>
                          <li className="mamuallist">
                            <span>Price: </span> $24{" "}
                          </li>
                          <li>
                            <span>Stock: </span> 10{" "}
                          </li>
                        </ul>
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
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="listings-selected-content">
            <h5>
              Ad Groups <br />
              Listings selected in the previous step are grouped into Ad Groups
            </h5>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="listings-selected-outer">
            <div className="table-responsive">
              <table className="table table-bordered table-striped br-none listings-selected-table mb-0">
                <thead className="table__head">
                  <tr className="winner__table border-bottom">
                    {/* <th width="50"><input type="checkbox"></th> */}
                    <th width={250}>Adgroups</th>
                    <th width={250}>Expected ROI </th>
                    <th width={250}>Budget Limit (Optional)</th>
                    <th width={300}>Advanced targeting (Optional)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="winner__table">
                    {/* <td className="text-center check-bg"><input className="checkbox" type="checkbox" checked></td> */}
                    <td className="listings-selected-protit">1 Product</td>
                    <td>
                      <div className="nnn_dform listings-selected-form">
                        <div className="registration_form_single-input">
                          <input type="text" />
                          <label htmlFor="f-name" className="mt-2">
                            Choose from: 1 15
                          </label>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="nnn_dform listings-selected-form">
                        <div className="registration_form_single-input">
                          <input type="text" />
                          <label htmlFor="f-name" className="mt-2">
                            Set Limit
                          </label>
                        </div>
                      </div>
                    </td>
                    <td className="listings-selected-btn">
                      <a href="#">Add Exclude keywords</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="compaign-bot-sec">
      <div className="container">
        <div className="row">
          <div>
            <p className="compaign-bot-content">Add Daily Budget</p>
          </div>
          <div className="col-lg-12">
            <div className="nnn_dform mt-3">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="registration_form_single-input">
                    <label htmlFor="f-name">
                      {" "}
                      <input id="cb1" type="checkbox" defaultChecked="" />{" "}
                      Select budget manually
                    </label>
                    {/* <input type="text"> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="registration_form_single-input">
                    {/* <label for="f-name">Campaign Name</label> */}
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="registration_form_single-input">
                    <label htmlFor="f-name">Set Timeframe</label>
                    {/* <input type="text"> */}
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="registration_form_single-input">
                    {/* <label for="f-name">Campaign Name</label> */}
                    <input type="date" placeholder="Start Date" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="registration_form_single-input">
                    {/* <label for="f-name">Campaign Name</label> */}
                    <input type="date" placeholder="End Date" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right_button">
            <ul>
              <li>
                <a href={`${baseUrl}dashboard/advertising/create-campaign`}>Submit Campaign</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Page