import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import React from 'react'

function Page() {
  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="navigator-breadcrumb-wrapper text-center mt--20 mb--20">
            <h3 className="orange text-center">Price Recommendation</h3>
            <p className="small-text">
              High traffic but low conversions? Optimize content and pricing to
              boost sales!
            </p>
          </div>
        </div>
       
      </div>
    </div>
  </div>
  <div className="container">
    <div className="">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="breadcome-heading pb--10">
                <form role="search" className="sr-input-func">
                  <input
                    type="text"
                    placeholder="Search your product by Order Id , sku"
                    className="search-int form-control"
                  />
                  <a href="#">
                    <i className="fa fa-search" />
                  </a>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <select className="">
                <option>Sku Id</option>
                <option>...</option>
              </select>
            </div>
          </div>
        </div>
        <div className="clear-fix" />
        <div className="col-lg-6 mt--20 mb--10">
          <div className="all-recommendation">All Recommendation</div>
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
              <th width={50}>
                <input type="checkbox" />
              </th>
              <th width={120}>Product</th>
              <th width={300}>&nbsp;</th>
              <th width={150}>Selling Price</th>
              <th width={150}>Stock</th>
              <th width={150}>Views</th>
              <th width={150}>Clicks</th>
              <th width={150}>Impact</th>
              <th>Listing Quality</th>
              <th width={220}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="winner__table">
              <td className="text-center">
                <input type="checkbox" />
              </td>
              <td>
                <Image src={`${baseUrl}front/assets/images/preview01.jpg`} 
                width={0}
                height={0}
                sizes='100vw'
                style={{width:'auto', height:"auto"}}
                alt=''
                />

              </td>
              <td>
                <div className="product_details_content">
                  <p>
                    Lora s Choice Purple Toothpaste Colour Corrector, Tooth
                    Stain Concealer, Teeth Whitening Booster, Colour Correcting,
                    Toothpaste Color Corrector Serum Brighten and Whiten Teeth
                  </p>
                  <ul>
                    <li>
                      <span>SKU:</span> Lora s Choice Purple Toothpaste
                    </li>
                    <li>
                      <span>SIN:</span> B0D8W995465894
                    </li>
                  </ul>
                </div>
              </td>
              <td className="text-center font-weight">$15</td>
              <td className="text-center font-weight">40</td>
              <td className="text-center font-weight">400</td>
              <td className="text-center font-weight">398</td>
              <td className="text-center">
                <div className="potential-sale"> 
                  {/* <Image src={`${baseUrl}front/assets/images/top_arrow.jpg`} 
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{width:'auto', height:"auto"}}
                        alt=''
                        /> */}
                </div>
                <div className="potential-sale-price">
                  $18.55<span>(5(13%))</span>
                  
                  <Image src={`${baseUrl}front/assets/images/top_arrow.jpg`} 
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{width:'auto', height:"auto"}}
                        alt=''
                        />
                </div>
              </td>
              <td className="text-center">
                <div className="good">
                  <a href="#">Good</a>
                </div>
              </td>
              <td className="text-center">
                <div className="create-campaign">
                  <a href="#">Apply</a>
                </div>
                <span className="close_price_recomendation">
                  <a href="#">X</a>
                </span>
              </td>
            </tr>
            <tr className="winner__table">
              <td className="text-center">
                <input type="checkbox" />
              </td>
              <td>
                 
                <Image src={`${baseUrl}front/assets/images/preview01.jpg`} 
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{width:'auto', height:"auto"}}
                        alt=''
                        />
              </td>
              <td>
                <div className="product_details_content">
                  <p>
                    Lora s Choice Purple Toothpaste Colour Corrector, Tooth
                    Stain Concealer, Teeth Whitening Booster, Colour Correcting,
                    Toothpaste Color Corrector Serum Brighten and Whiten Teeth
                  </p>
                  <ul>
                    <li>
                      <span>SKU:</span> Lora s Choice Purple Toothpaste
                    </li>
                    <li>
                      <span>SIN:</span> B0D8W995465894
                    </li>
                  </ul>
                </div>
              </td>
              <td className="text-center font-weight">$15</td>
              <td className="text-center font-weight">40</td>
              <td className="text-center font-weight">400</td>
              <td className="text-center font-weight">398</td>
              <td className="text-center">
                <div className="potential-sale-price">
                  $18.55 <span>(5(13%))</span>
                  
                  <Image src={`${baseUrl}front/assets/images/top_arrow.jpg`} 
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{width:'auto', height:"auto"}}
                        alt=''
                        />
                </div>
              </td>
              <td className="text-center">
                <div className="average">
                  <a href="#">Average</a>
                </div>
              </td>
              <td className="text-center">
                <div className="create-campaign">
                  <a href="#">Apply</a>
                </div>
                <span className="close_price_recomendation">
                  <a href="#">X</a>
                </span>
              </td>
            </tr>
            <tr className="winner__table">
              <td className="text-center">
                <input type="checkbox" />
              </td>
              <td>
             
                <Image src={`${baseUrl}front/assets/images/preview01.jpg`} 
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{width:'auto', height:"auto"}}
                        alt=''
                        />
              </td>
              <td>
                <div className="product_details_content">
                  <p>
                    Lora s Choice Purple Toothpaste Colour Corrector, Tooth
                    Stain Concealer, Teeth Whitening Booster, Colour Correcting,
                    Toothpaste Color Corrector Serum Brighten and Whiten Teeth
                  </p>
                  <ul>
                    <li>
                      <span>SKU:</span> Lora s Choice Purple Toothpaste
                    </li>
                    <li>
                      <span>SIN:</span> B0D8W995465894
                    </li>
                  </ul>
                </div>
              </td>
              <td className="text-center font-weight">$15</td>
              <td className="text-center font-weight">40</td>
              <td className="text-center font-weight">400</td>
              <td className="text-center font-weight">398</td>
              <td className="text-center">
                <div className="potential-sale-price">
                  $18.55<span>(5(13%))</span>
                 
                  <Image src={`${baseUrl}front/assets/images/top_arrow.jpg`} 
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{width:'auto', height:"auto"}}
                        alt=''
                        />
                </div>
              </td>
              <td className="text-center">
                <div className="good">
                  <a href="#">Good</a>
                </div>
              </td>
              <td className="text-center">
                <div className="create-campaign">
                  <a href="#">Apply</a>
                </div>
                <span className="close_price_recomendation">
                  <a href="#">X</a>
                </span>
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