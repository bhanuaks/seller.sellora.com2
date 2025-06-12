"use client"
import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import React, { useState } from 'react'
// import DateChart from '../returns/DateCart';
import dynamic from 'next/dynamic'; 
const DateChart = dynamic(() => import('../returns/DateCart'), { ssr: false });
function Page() {
        const [showModal, setShowModal] = useState(false);
    
  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <ul>
              <li>
                <a href="#"> 
                  <Image 
                    src={`${baseUrl}front/assets/images/hand_shaking.png`}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{width:"auto", height:"auto"}}
                    alt="img"
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
  <div className="container">
    <div className="row">
      <div className="col-md-7">
        <div className="wrapper pb-4 pt--50">
          <div className="row">
            <div className="col-md-4">
              <input type="date" className="form-control form-input" />
            </div>
            <div className="col-md-2">
              <select className="form-select form-input">
                <option>Category</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
                <option>Category 4</option>
              </select>
            </div>
            <div className="col-md-2">
              <select className="form-select form-input">
                <option>Brand</option>
                <option>Brand 1</option>
                <option>Brand 2</option>
                <option>Brand 3</option>
                <option>Brand 4</option>
              </select>
            </div>
            <div className="col-md-2">
              <select className="form-select form-input">
                <option>Location</option>
                <option>Location 1</option>
                <option>Location 2</option>
                <option>Location 3</option>
                <option>Location 4</option>
              </select>
            </div>
          </div>
        </div>
        <div className="wrapper">
          {/* <h5>What changed?</h5> */}
          <div className="row">
            <div className="col-md-4">
              <div className="box-shadow-container d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <Image
                    className="deliveryicon"
                    src={`${baseUrl}front/assets/images/cart-icon.png`}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{width:"auto", height:"auto"}}
                    alt="img"
                  />
                  <h5>Gross Sales</h5>
                </div>
                <h5>214 Units</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-shadow-container d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  

                <Image
                    className="deliveryicon"
                    src={`${baseUrl}front/assets/images/cart-remove-icon.png`}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{width:"auto", height:"auto"}}
                    alt="img"
                  />
                  <h5>Cancellations</h5>
                </div>
                <h5>15 Units</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-shadow-container d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  

                    <Image
                    className="deliveryicon"
                    src={`${baseUrl}front/assets/images/courier.png`}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{width:"auto", height:"auto"}}
                    alt="img"
                  />
                  <h5>Courier Returns</h5>
                </div>
                <h5>16 Units</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <div className="discount_weowe4_box chartcontainer">
          <h5 style={{ marginBottom: 10 }}>
            <span>06 Feb 25</span> <i className="fa-solid fa-arrow-right" />{" "}
            <span>12 Feb 25</span>
          </h5>
          <a href="javascript:void(0)" className="btn norbtn">
            Gross Sales
          </a>
          <a href="javascript:void(0)" className="btn norbtn">
            Cancellations
          </a>
          <a href="javascript:void(0)" className="btn norbtn">
            Courier Returns
          </a>
          {/* <div id="dateChartpr" /> */}

          <DateChart />

        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="search_outer">
      <div className="row">
        <div className="col-md-5">
          <div className="tablelistItem">
            <ul className="d-flex justify-content-between align-items-center ulnrns">
              <li>All</li>
              <li>New</li>
              <li>Top Performing</li>
              <li>Slow Selling</li>
              <li>Non Selling</li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="breadcome-heading">
            <form role="search" className="sr-input-func">
              <input
                type="text"
                placeholder="Search your product by name, sku"
                className="search-int form-control"
              />
              <a href="#">
                <i className="fa fa-search" />
              </a>
            </form>
          </div>
        </div>
        <div className="col-md-2">
          <select className="">
            <option>SKU</option>
            <option>SIN</option>
          </select>
        </div>
        <div className="col-md-2">
          <a href="#" className="rts-btn btn-primary btnpadding">
            Download Report
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="d-flex mt--10">
      <div className="fillter2">
        <a href="#">
          <i className="fa-solid fa-filter" />
        </a>
      </div>
      <div className="dropdown333">
        <button>Reason</button>
        <div className="dropdown-content333">
          <div className="highlight">Customer</div>
          <div>Market Place</div>
          <div>Seller</div>
        </div>
      </div>
      <div className="dropdown333">
        <button>Sub Reason</button>
        <div className="dropdown-content333">
          <div className="highlight">Buyer Purchase Mistake</div>
          <div>Delivery Delayed</div>
          <div>Other</div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div>
      <div className="table-responsive">
        <table
          className="table table-bordered table-striped br-none"
          style={{ marginTop: 10 }}
        >
          <thead className="table__head">
            <tr className="winner__table">
              <th width={100}>&nbsp;</th>
              <th width={500} className="text-left">
                Product Detail
              </th>
              <th>All Orders</th>
              <th>Cancellations</th>
              <th width={150}>Courier Returns</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="winner__table tablenomargin">
              <td>
              <Image 
                    src={`${baseUrl}front/assets/images/preview01.jpg`}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{width:"auto", height:"auto"}}
                    alt="img"
                  />
              </td>
              <td>
                <div className="product_details_content">
                  <p>
                    Lora s Choice Purple Toothpaste Colour Corrector, Tooth
                    Stain Concealer, Teeth Whitening Booster, Colour Correcting
                  </p>
                </div>
              </td>
              <td className="text-center">
                <div className="value">
                  <span>1 Unit</span>
                  <span>$29.99</span>
                </div>
              </td>
              <td className="text-center">
                <div className="value">
                  <span>1 Units</span>
                  <span>$29.99</span>
                </div>
              </td>
              <td className="text-center">
                <div className="value">
                  <span>0 Unit</span>
                  <span>$0</span>
                </div>
              </td>
              <td className="text-center">
                <div className="see_details mt--5">
                  <a href="#" onClick={() => setShowModal(true)}>
                    View Reasons
                  </a>
                </div>
              </td>
            </tr>
            <tr className="winner__table tablenomargin">
              <td> 
                <Image 
                    src={`${baseUrl}front/assets/images/preview01.jpg`}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{width:"auto", height:"auto"}}
                    alt="img"
                  />
              </td>
              <td>
                <div className="product_details_content">
                  <p>
                    Lora s Choice Purple Toothpaste Colour Corrector, Tooth
                    Stain Concealer, Teeth Whitening Booster, Colour Correcting
                  </p>
                </div>
              </td>
              <td className="text-center">
                <div className="value">
                  <span>1 Unit</span>
                  <span>$29.99</span>
                </div>
              </td>
              <td className="text-center">
                <div className="value">
                  <span>1 Unit</span>
                  <span>$29.99</span>
                </div>
              </td>
              <td className="text-center">
                <div className="value">
                  <span>0 Unit</span>
                  <span>$0</span>
                </div>
              </td>
              <td className="text-center">
                <div className="see_details mt--5">
                  <a href="#" onClick={() => setShowModal(true)}>
                    View Reasons
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  
   {/* Modal */}  
   {showModal && (

<> 
 
<div className="modal fade show d-block view_reasons" tabIndex={-1} role="dialog">
    <div className="modal-content">
       
      <span className="btnclosemodal2" onClick={() => setShowModal(false)}>
                  <Image 
                    src={`${baseUrl}front/assets/images/close.png`} 
                    alt="ico" 
                    width={0} 
                    height={0} 
                    sizes="100vw" 
                    style={{ width: 'auto', height: 'auto' }} 
                  />
      </span>
      <div className="modalheader text-center">
        <h5 className="modal-title mb-3" id="exampleModalLabel">
          Reasons: Seller 
        </h5>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-md-12">
            <div className="card border card2">
              <ul>
                <li className="d-flex align-items-center">
                  <span>Sub reasons for Seller: </span>
                  <span>cancelled due to pickup reattempts </span>
                </li>
                <li className="d-flex align-items-center">
                  <span>Cancellations: </span>
                  <span>1 units₹6,909</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 

</>     
    )} 
        {showModal && <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>}
</>

  )
}

export default Page