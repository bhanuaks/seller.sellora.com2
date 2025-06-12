"use client"
import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import React, { useState } from 'react'
// import DateChart from './DateCart'
import dynamic from 'next/dynamic'; 
// import DateChart from './DateCart';
const DateChart = dynamic(() => import('./DateCart'), { ssr: false });
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
                  <Image src={`${baseUrl}front/assets/images/hand_shaking.png`}
                    alt='influencer-marketing.jpg'
                    width={0}
                    height={0}
                    sizes='100vw' 
                    style={{width:"auto", height:"auto"}} 
                    />  
                  Help
                </a>
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
        <div className="wrapper pb-4 pt--30">
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
          <h5>What changed?</h5>
          <div className="row">
            <div className="col-md-4">
              <div className="box-shadow-container d-flex align-items-center justify-content-between">
                
                 
                 <Image src={`${baseUrl}front/assets/images/devliveryva-icon.png`}
                    alt='img'
                    width={0}
                    height={0}
                    sizes='100vw' 
                    className="deliveryicon"
                    style={{width:"auto", height:"auto"}} 
                    />  
                <h5>Delivered</h5>
                <h5>136 Units</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-shadow-container d-flex align-items-center justify-content-between">
                
               

<Image src={`${baseUrl}front/assets/images/delivery-box-icon.png`}
                    alt='img'
                    width={0}
                    height={0}
                    sizes='100vw' 
                    className="deliveryicon"
                    style={{width:"auto", height:"auto"}} 
                    />  
                <h5>Return</h5>
                <h5>8 Units</h5>
                <h5>Return:5.88%</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-shadow-container d-flex align-items-center justify-content-between">
              <Image src={`${baseUrl}front/assets/images/refund-icon.png`}
                    alt='img'
                    width={0}
                    height={0}
                    sizes='100vw' 
                    className="deliveryicon"
                    style={{width:"auto", height:"auto"}} 
                    />   
                <h5>Refunds</h5>
                <h5>7 Units</h5>
                <h5>Return:87.5%</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <div className="discount_weowe4_box chartcontainer">
          <h5 style={{ marginBottom: 10 }}>
            <span>06 Feb 25</span> <i className="fa-solid fa-arrow-right" />
            <span>12 Feb 25</span>
          </h5>
          <a href="#" className="btn norbtn">
            Delivered
          </a>
          <a href="#" className="btn norbtn">
            Returns
          </a>
          <a href="#" className="btn norbtn">
            Refund
          </a>
          <div><DateChart /></div> 
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
              <th>Delivered</th>
              <th>Returned</th>
              <th width={150}>Refunds</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="winner__table tablenomargin">
              <td> 
                <Image src={`${baseUrl}front/assets/images/preview01.jpg`}
                    alt='img'
                    width={0}
                    height={0}
                    sizes='100vw'  
                    style={{width:"auto", height:"auto"}} 
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
                  
                  <span>1 Unit</span> <span>$29.99</span>
                </div>
              </td>
              <td className="text-center">
                <div className="value">
                  
                  <span>1 Unit</span> <span>$29.99</span>
                </div>
              </td>
              <td className="text-center">
                <div className="value">
                  
                  <span>1 Unit</span> <span>$29.99</span>
                </div>
              </td>
              <td className="text-center">
                <div className="see_details mt--5">
                  <a href="#"  onClick={() => setShowModal(true)}>
                    View Reasons
                  </a>
                </div>
              </td>
            </tr>
            <tr className="winner__table tablenomargin">
              <td> 
                <Image src={`${baseUrl}front/assets/images/preview01.jpg`}
                    alt='img'
                    width={0}
                    height={0}
                    sizes='100vw'  
                    style={{width:"auto", height:"auto"}} 
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
                  
                  <span>1 Unit</span> <span>$29.99</span>
                </div>
              </td>
              <td className="text-center">
                <div className="value">
                  
                  <span>1 Unit</span> <span>$29.99</span>
                </div>
              </td>
              <td className="text-center">
                <div className="value">
                  
                  <span>1 Unit</span> <span>$29.99</span>
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
        <div className="modal fade show d-block view_reasons" tabIndex={-1} role="dialog">
          <div className="modal-dialog modalsize2 modal-dialog-centered">
            <div className="modal-content">
              {/* Close Button */}
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

              {/* Modal Header */}
              <div className="modalheader text-center">
                <h5 className="modal-title mb-3">Return Reason: MISSHIPMENT</h5>
                <div className="subtitleWrapper d-flex gap-3 justify-content-center">
                  <span>Returns: 2 units $28.99</span>
                  <span>Refunds: 1 unit $14.99</span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                <h5 className="text-normal-color">Sub-reasons for MISSHIPMENT</h5>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card border card2">
                      <h6>DIFFERENT SPECIFICATIONS FROM WEBSITE</h6>
                      <ul>
                        <li className="d-flex align-items-center">
                          <span>Returns</span> <span>1 unit $14.99</span>
                        </li>
                        <li className="d-flex align-items-center">
                          <span>Refunds</span> <span>1 unit $14.99</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card border card2">
                      <h6>DIFFERENT SPECIFICATIONS FROM WEBSITE</h6>
                      <ul>
                        <li className="d-flex align-items-center">
                          <span>Returns</span> <span>1 unit $14.99</span>
                        </li>
                        <li className="d-flex align-items-center">
                          <span>Refunds</span> <span>1 unit $14.99</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} 
       {showModal && <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>}
</>

  )
}

export default Page