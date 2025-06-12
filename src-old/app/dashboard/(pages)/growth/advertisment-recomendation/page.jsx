import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="navigator-breadcrumb-wrapper text-center mt--20 mb--20">
            <h3 className="orange text-center">Advertising Recommendation</h3>
            <p className="small-text">
              These high conversion listings have strong potential. Increasing
              their visibility can drive revenue growth.
            </p>
          </div>
        </div>
        {/*   <div className="col-lg-6 col-md-6">
            <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
                <ul>
                <li><a href="#"><img src="../assets/images/hand_shaking.png">Help</a> </li> 
                </ul>
            </div>
            </div> */}
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
        {/*   <div className="col-lg-6">
  <div className="right_button">
    <ul>
      <li><a href="add-catalog.html">Add Single Listing</a></li>
      <li><a href="add-catalog.html">Add Listing in Bulk</a></li>
    </ul>
  </div>
</div> */}
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
              <th width={180}>Action</th>
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
                    style={{width:"auto", height:'auto'}}
                    alt='preview01.jpg'
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
                <div className="potential-sale">Potential Sale</div>
                <div className="potential-sale-price">$18.55</div>
              </td>
              <td className="text-center">
                <div className="good">
                  <a href="#">Good</a>
                </div>
              </td>
              <td className="text-center">
                <div className="recommended">
                  <a href="#">Recommended</a>
                </div>
                <div className="sponsored-ads">
                  <a href="#">Sponsored Ads</a>
                </div>
                <div className="create-campaign">
                  <a href="#">Create Campaign</a>
                </div>
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
                    style={{width:"auto", height:'auto'}}
                    alt='preview01.jpg'
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
                <div className="potential-sale">Potential Sale</div>
                <div className="potential-sale-price">$18.55</div>
              </td>
              <td className="text-center">
                <div className="average">
                  <a href="#">Average</a>
                </div>
              </td>
              <td className="text-center">
                <div className="recommended">
                  <a href="#">Recommended</a>
                </div>
                <div className="sponsored-ads">
                  <a href="#">Display Ads</a>
                </div>
                <div className="create-campaign">
                  <a href="#">Create Campaign</a>
                </div>
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
                    style={{width:"auto", height:'auto'}}
                    alt='preview01.jpg'
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
                <div className="potential-sale">Potential Sale</div>
                <div className="potential-sale-price">$18.55</div>
              </td>
              <td className="text-center">
                <div className="good">
                  <a href="#">Good</a>
                </div>
              </td>
              <td className="text-center">
                <div className="recommended">
                  <a href="#">Recommended</a>
                </div>
                <div className="sponsored-ads">
                  <a href="#">Sponsored Ads</a>
                </div>
                <div className="create-campaign">
                  <a href="#">Create Campaign</a>
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