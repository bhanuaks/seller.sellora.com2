"use client"
import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

function Page() {
    const router =  useRouter();
  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12 hub1">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <Link href={`${baseUrl}dashboard`} >
              <i className="fa-solid fa-arrow-left" /> Go to Seller hub
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-6">
          <div className="navigator-breadcrumb-wrapper text-center">
            <h3>Ad format</h3>
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
        <div className="row pb--50 para1">
          <div className="col-lg-4 offset-lg-2" onClick={()=>router.push(`/dashboard/advertising/ad-format2`)}>
            <div className="adfor_boxs campaign_box2">
              <div className="row g-4">
                <div className="col-lg-6 col-12">
                  <div className="box1 text-center">
                  <Image src={`${baseUrl}front/assets/images/t-shirt.png`}
                                        alt=''
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                        loading='lazy'  
                                        style={{width:"auto", height:"auto"}}
                                        />  
                  
                    <ul className="review1">
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                      <li>
                        <i className="fa-solid fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="box1 py-5">
                    <i className="fa-solid fa-images" />
                  </div>
                  <p className="pp100" />
                  <p className="pp50" />
                </div>
              </div>
            </div>
            <p className="px-5 mt--30 fw-bold">
              Promote your product with an optional image to captivate your
              audience and enhance engagement
            </p>
          </div>
          <div className="col-lg-4 mt-5 pt-2 pt-md-0 mt-md-0" onClick={()=>router.push(`/dashboard/advertising/ad-format3`)}>
            <div className="adfor_boxs">
              <div className="box1  video">
                <i className="fa-solid fa-play" />
              </div>
              <div className="progress1">
                <p className="pp25" />
                <p className="pp75" />
              </div>
            </div>
            <p className="px-5 mt--30 fw-bold">
              Feature your product or brand with an eye-catching autoplaying
              video ad, designed to captivate your audience instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row mt--30">
        <div className="col-lg-6">
          <div className="nnn_dform">
            <div className="registration_form_single-input">
              <label htmlFor="f-name">Campaign Name</label>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="compaign-bot-sec pt-3">
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
        </div>
        <div className="row mt--30">
          <div className="col-lg-6">
            <div className="nnn_dform">
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
                            Tooth Stain Concealer, Teeth Whitening Booster,
                            Colour Correcting, Toothpaste Color Corrector Serum
                            Brighten and Whiten Teeth -30ml
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
                        

                              <Image src={`${baseUrl}front/assets/images/0002.jpg`}
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
                            Tooth Stain Concealer, Teeth Whitening Booster,
                            Colour Correcting, Toothpaste Color Corrector Serum
                            Brighten and Whiten Teeth -30ml
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
                <div className="rightselect d-flex justify-content-between align-items-center">
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
                            Tooth Stain Concealer, Teeth Whitening Booster,
                            Colour Correcting, Toothpaste Color Corrector Serum
                            Brighten and Whiten Teeth -30ml
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
    </div>
    <div className="container pt-80">
      <div className="row g-4">
        <div className="col-12">
          <div className="outerhead1">
            <h2>Targeting</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="compaign-1-outer h-100">
            <div className="row g-4">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="select1">
                  <select>
                    <option >Brand</option>
                    <option value={1}>....</option>
                    <option value={2}>.....</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <div className="breadcome-heading pb--10">
                  <form role="search" className="sr-input-func sr-input-func3">
                    <input
                      type="text"
                      placeholder="Search keywords"
                      className="search-int search-int3 form-control"
                    />
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                  </form>
                </div>
              </div>
            </div>
            <div className="table-responsive ad3 target1">
              <table
                className="table table-striped compaign-1-table"
                style={{ marginTop: 10 }}
              >
                <thead className="table__head">
                  <tr>
                    <th>Categories</th>
                    <th>Sugg. bid</th>
                    <th className="text-center"> &nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">
                      <a href="#" className="Toothpaste_bg">
                        Beauty &amp; Cosmetics
                      </a>
                    </td>
                    <td>
                      <div className="targeting_list">
                        <ul>
                          <li>$1.34</li>
                          <br />
                          <li>$1.29 - $3.97</li>
                        </ul>
                      </div>
                    </td>
                    <td className="text-center">
                      <a href="#" className="edit add1">
                        {" "}
                        Add
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp; </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#" className="Toothpaste_bg">
                        Beauty Magazines
                      </a>
                    </td>
                    <td>
                      <div className="targeting_list">
                        <ul>
                          <li>$1.34</li>
                          <br />
                          <li>$1.29 - $3.97</li>
                        </ul>
                      </div>
                    </td>
                    <td className="text-center">
                      <a href="#" className="edit add1">
                        {" "}
                        Add
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp; </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#" className="Toothpaste_bg">
                        Beauty, Grooming, &amp; Style
                      </a>
                    </td>
                    <td>
                      <div className="targeting_list">
                        <ul>
                          <li>$1.34</li>
                          <br />
                          <li>$1.29 - $3.97</li>
                        </ul>
                      </div>
                    </td>
                    <td className="text-center">
                      <a href="#" className="edit add1">
                        {" "}
                        Add
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp; </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#" className="Toothpaste_bg">
                        Beauty &amp; Fashion Skin Care
                      </a>
                    </td>
                    <td>
                      <div className="targeting_list">
                        <ul>
                          <li>$1.34</li>
                          <br />
                          <li>$1.29 - $3.97</li>
                        </ul>
                      </div>
                    </td>
                    <td className="text-center">
                      <a href="#" className="edit add1">
                        {" "}
                        Add
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="compaign-1-outer h-100">
            <div className="table-responsive ad3 target1">
              <table
                className="table table-striped compaign-1-table"
                style={{ marginTop: 10 }}
              >
                <thead className="table__head">
                  <tr className="winner__table">
                    <th colSpan={15}> </th>
                  </tr>
                  <tr className="winner__table">
                    <th>Categories</th>
                    <th>Sugg. bid</th>
                    <th width={100}>Bid</th>
                    <th className="small-size">Remove all</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">
                      <a href="#" className="toothpaste_bg_bg_color">
                        Beauty &amp; Cosmetics
                      </a>
                    </td>
                    <td>
                      <div className="targeting_list">
                        <ul>
                          <li>$1.34</li>
                          <br />
                          <li>$1.29 - $3.97</li>
                        </ul>
                      </div>
                    </td>
                    <td className="text-center">
                      <input type="text" className="add_input" />
                    </td>
                    <td>
                      <ul className="match_type text-center">
                        <li>
                          <i className="fa-solid fa-times" />
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="">
                      <a href="#" className="toothpaste_bg_bg_color">
                        Beauty &amp; Cosmetics
                      </a>
                    </td>
                    <td>
                      <div className="targeting_list">
                        <ul>
                          <li>$1.34</li>
                          <br />
                          <li>$1.29 - $3.97</li>
                        </ul>
                      </div>
                    </td>
                    <td className="text-center">
                      <input type="text" className="add_input" />
                    </td>
                    <td>
                      <ul className="match_type text-center">
                        <li>
                          <i className="fa-solid fa-times" />
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="">
                      <a href="#" className="toothpaste_bg_bg_color">
                        Beauty, Grooming, &amp; Style
                      </a>
                    </td>
                    <td>
                      <div className="targeting_list">
                        <ul>
                          <li>$1.34</li>
                          <br />
                          <li>$1.29 - $3.97</li>
                        </ul>
                      </div>
                    </td>
                    <td className="text-center">
                      <input type="text" className="add_input" />
                    </td>
                    <td>
                      <ul className="match_type text-center">
                        <li>
                          <i className="fa-solid fa-times" />
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="">
                      <a href="#" className="toothpaste_bg_bg_color">
                        Beauty &amp; Fashion Skin Care
                      </a>
                    </td>
                    <td>
                      <div className="targeting_list">
                        <ul>
                          <li>$1.34</li>
                          <br />
                          <li>$1.29 - $3.97</li>
                        </ul>
                      </div>
                    </td>
                    <td className="text-center">
                      <input type="text" className="add_input" />
                    </td>
                    <td>
                      <ul className="match_type text-center">
                        <li>
                          <i className="fa-solid fa-times" />
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
              <ul className="butereio">
                <li>
                  <a href="#">Save</a>{" "}
                </li>
                <li>
                  <a href="#" className="without_bg">
                    Cancel
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container pt-80">
      <div className="row g-4">
        <div className="col-12">
          <div className="outerhead1">
            <h2>Choose how you'd like to customize your ad</h2>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="adfor_boxs1">
            <h4>Upload Image</h4>
            <div className="box-img py-5">
              <i className="fa-solid fa-images" />
              <p className="mt-1">Upload</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="adfor_boxs1">
            <h4>Image specs</h4>
            <p className="mb-0">See image guideline</p>
            <ul className="img-specs">
              <li>Image size: 1100 x 576 px or large</li>
              <li>File size: 5MB or smaller</li>
              <li>7 File format: PNG or JPEG</li>
              <li>Content: No text, graphics, or logo added to the image</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="container pt-80">
      <div className="row">
        {/* <div className="col-12">
              <div className="outerhead1">
                  <h2>Choose the creative type for your advertisement</h2>
              </div>
          </div> */}
        <div className="col-lg-6 col-12">
          <div className="row adverCheck">
            <div className="col-md-3 col-6">
              <div className="d-flex align-items-center">
                <input id="cb1" className="checkbox" type="checkbox" />
                <span className="ps-3"> Auto Creative</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="d-flex align-items-center">
                <input
                  id="cb1"
                  className="checkbox"
                  type="checkbox"
                  defaultChecked=""
                />
                <span className="ps-3"> Rich Creative</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt--30 perviewS sponsor">
          <h3 className="text-center">Preview</h3>
          <div className="col-lg-4 box offset-lg-4">
            <div className="card p-4">
              <h5 className="card-title">Sponsored</h5>
             
               <Image src={`${baseUrl}front/assets/images/preview01.jpg`}
                                        alt=''
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                        loading='lazy'  
                                         className="card-img-top spon1 align-items-center"
                                        style={{width:"auto", height:"auto"}}
                                        />  
              <div className="card-body">
                <div className="product-status">
                  <div className="rating-stars-group">
                    <div className="rating-star">
                      <i className="fas fa-star" />
                    </div>
                    <div className="rating-star">
                      <i className="fas fa-star" />
                    </div>
                    <div className="rating-star">
                      <i className="fas fa-star" />
                    </div>
                    <div className="rating-star">
                      <i className="fas fa-star" />
                    </div>
                    <div className="rating-star">
                      <i className="far fa-star" />
                    </div>
                    <span>4.6</span>
                  </div>
                </div>
                <div className="price-area">
                  <span className="current">$24.99</span>
                  <div className="previous">$28.99</div>
                </div>
                <p className="card-text">
                  Lora's Choice V34 Purple Toothpaste, Tooth Stain Concealer,
                  Teeth Whitening Booster, Colour Correcting Serum for
                  Brightening Teeth - 30ml
                </p>
              </div>
            </div>
           
          </div>
          <div className="right_button">
            <ul>
              <li>
                <a href={`${baseUrl}dashboard/advertising/manual-campaign`}>Submit Campaign</a>
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