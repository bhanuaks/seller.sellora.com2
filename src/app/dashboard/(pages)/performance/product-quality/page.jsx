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
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="navigator-breadcrumb-wrapper text-center mb--20">
            <h3>Product Quality</h3>
            <p>
              Discover how customers see your products with Sellora's listing
              quality insights—unlock the secrets to better engagement. Learn
              more!
            </p>
          </div>
        </div>
        <div className="col-lg-6 offset-lg-3">
          <div className="discount_weowe4_box rating-box-container">
            <div className="rating-container giveratings d-flex align-items-center">
              <div className="rating-item">
                <div className="rating-circle excellent">80-100%</div>
                <p>Excellent</p>
              </div>
              <div className="rating-item">
                <div className="rating-circle good">50-80%</div>
                <p>Good</p>
              </div>
              <div className="rating-item">
                <div className="rating-circle average">30-50%</div>
                <p>Average</p>
              </div>
              <div className="rating-item">
                <div className="rating-circle poor">10-30%</div>
                <p>Poor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="breadcome-heading">
              <form role="search" className="sr-input-func">
                <input
                  type="text"
                  placeholder="Search your product by title , sku"
                  className="search-int form-control"
                />
                <a href="#">
                  <i className="fa fa-search" />
                </a>
              </form>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
            <select className="">
              <option>SKU</option>
              <option>SIN</option>
            </select>
          </div>
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
              <th style={{ minWidth: 100 }} className="text-left">
                &nbsp;
              </th>
              <th width={350} className="text-left">
                Product Detail
              </th>
              <th width={200}>SKU and SIN</th>
              <th width={380}>Listing Quality</th>
              <th width={150} className="text-left">
                {" "}
              </th>
              <th style={{ minWidth: 180 }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="winner__table">
              <td> 
                <Image src={`${baseUrl}front/assets/images/preview01.jpg`}
                    alt='influencer-marketing.jpg'
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
              <td>
                <div className="sku-n-sin">
                  <ul>
                    <li>
                      <span>SKU</span> <span className="colon2">:</span> Purple
                      Toothpaste
                    </li>
                    <li>
                      <span>SIN</span> <span className="colon2">:</span>{" "}
                      <b className="gray2">B0D8W995465894</b>
                    </li>
                  </ul>
                </div>
              </td>
              <td className="text-center">35%</td>
              <td className="text-center">
                <div className="average2 mt--5">
                  <a href="#">Average</a>
                </div>
              </td>
              <td className="text-center">
                <div className="see_details mt--5">
                  <Link href={`${baseUrl}dashboard/performance/review-product-details`}>See Details</Link>
                </div>
              </td>
            </tr>
            <tr className="winner__table">
              <td> 
                <Image src={`${baseUrl}front/assets/images/preview01.jpg`}
                    alt='influencer-marketing.jpg'
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
              <td>
                <div className="sku-n-sin">
                  <ul>
                    <li>
                      <span>SKU</span> <span className="colon2">:</span> Purple
                      Toothpaste
                    </li>
                    <li>
                      <span>SIN</span> <span className="colon2">:</span>{" "}
                      <b className="gray2">B0D8W995465894</b>
                    </li>
                  </ul>
                </div>
              </td>
              <td className="text-center">55%</td>
              <td className="text-center">
                <div className="good2 mt--5">
                  <a href="#">Good</a>
                </div>
              </td>
              <td className="text-center">
                <div className="see_details  mt--5">
                <Link href={`${baseUrl}dashboard/performance/review-product-details`}>See Details</Link>
                </div>
              </td>
            </tr>
            <tr className="winner__table">
              <td> 
                <Image src={`${baseUrl}front/assets/images/preview01.jpg`}
                    alt='influencer-marketing.jpg'
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
              <td>
                <div className="sku-n-sin">
                  <ul>
                    <li>
                      <span>SKU</span> <span className="colon2">:</span> Purple
                      Toothpaste
                    </li>
                    <li>
                      <span>SIN</span> <span className="colon2">:</span>{" "}
                      <b className="gray2">B0D8W995465894</b>
                    </li>
                  </ul>
                </div>
              </td>
              <td className="text-center">20%</td>
              <td className="text-center">
                <div className="poor2 mt--5">
                  <a href="#">Poor</a>
                </div>
              </td>
              <td className="text-center">
                <div className="see_details  mt--5">
                <Link href={`${baseUrl}dashboard/performance/review-product-details`}>See Details</Link>
                </div>
              </td>
            </tr>
            <tr className="winner__table">
              <td> 
                <Image src={`${baseUrl}front/assets/images/preview01.jpg`}
                    alt='influencer-marketing.jpg'
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
              <td>
                <div className="sku-n-sin">
                  <ul>
                    <li>
                      <span>SKU</span> <span className="colon2">:</span> Purple
                      Toothpaste
                    </li>
                    <li>
                      <span>SIN</span> <span className="colon2">:</span>{" "}
                      <b className="gray2">B0D8W995465894</b>
                    </li>
                  </ul>
                </div>
              </td>
              <td className="text-center">85%</td>
              <td className="text-center">
                <div className="excellent2 mt--5">
                  <a href="#">Excellent</a>
                </div>
              </td>
              <td className="text-center">
                <div className="see_details  mt--5">
                <Link href={`${baseUrl}dashboard/performance/review-product-details`}>See Details</Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>





</> 
  )
}

export default Page