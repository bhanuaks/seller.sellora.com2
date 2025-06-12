import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import React from 'react'
import TabSection from '../TabSection'

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
                  alt=''
                  loading='lazy'
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
          <div className="navigator-breadcrumb-wrapper text-center mt--20 mb--20">
            <h3>Sellora Insights</h3>
            <p>
              Sellora Insights are powerful tools that provide actionable data
              to help optimize sales, manage inventory, and improve customer
              understanding. Businesses can make data-driven decisions that
              drive growth and success by leveraging these insights effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
     <TabSection />
  </div>
  <div className="container">
    <div className="">
      <div className="row">
        <div className="col-lg-6">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12">
              <div className="breadcome-heading">
                <div className="how_you_are_performing">
                  <h4 style={{ marginBottom: 0 }}>
                    Your recent business summary
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <select className="form-select2 form-select">
                <option>7 Days</option>
                <option>Today, 24 Jan</option>
              </select>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div>
                <h5 style={{ marginBottom: 0 }}>(24 Dec 22 Jan)</h5>
              </div>
            </div>
          </div>
        </div>
         
      </div>
      <div className="bg_gray">
        <div className="row">
          <div className="b1">
            <div className="summry_box p-20">
              <div className="total-gross-sales">Total Gross Sales</div>
              <div className="price02">$500</div>
              <div className="unit">Unit 53</div>
            </div>
          </div>
          <div className="b1">
            <div className="summry_box p-20">
              <div className="total-gross-sales">Total Cancellation</div>
              <div className="price02">$50</div>
              <div className="unit">Unit 2</div>
            </div>
          </div>
          <div className="b1">
            <div className="summry_box p-20">
              <div className="total-gross-sales">Sales After Cancellations</div>
              <div className="price02">$450</div>
              <div className="unit">Unit 51</div>
            </div>
          </div>
          <div className="b1">
            <div className="summry_box p-20">
              <div className="total-gross-sales">Returns</div>
              <div className="price02">$0</div>
              <div className="unit">Unit 0</div>
            </div>
          </div>
          <div className="b1">
            <div className="summry_box p-20">
              <div className="total-gross-sales">Net Sales</div>
              <div className="price02">$450</div>
              <div className="unit">Unit 0</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt--30">
        <div className="col-lg-5">
          <div className="nnn_dform">
            <div className="registration_form_single-input">
              <div className="file-placeholder">
                <label />
                <input type="file" className="fileUpload" />
                <div className="file-browse">
                  {" "}
                  <span className="file-browse-txt">Search Product</span>{" "}
                  <span className="browse browse-compaign">Select</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <row>
      <div className="col-lg-12">
        <div className="">
          <h4>Hot Products Today</h4>
        </div>
      </div>
    </row>
    <div>
      <div className="table-responsive">
        <table
          className="table table-bordered table-striped br-none"
          style={{ marginTop: 10 }}
        >
          <thead className="table__head">
            <tr className="winner__table">
              <th colSpan={8}>
                <div className="table_menu">
                  <ul>
                    <li>
                      <a href="#">All Product</a>
                    </li>
                    <li>
                      <a href="#">New Product</a>
                    </li>
                    <li>
                      <a href="#">Top Product</a>
                    </li>
                    <li>
                      <a href="#">Non Selling Product</a>
                    </li>
                  </ul>
                </div>
              </th>
            </tr>
            <tr className="winner__table">
              <th width={100}>Product</th>
              <th width={250}>&nbsp;</th>
              <th width={250}>Gross Sales</th>
              <th width={250}>Cancellation</th>
              <th width={200}>Sales After Cancellations</th>
              <th width={150}>Returns</th>
              <th width={150}>Net Sales</th>
              <th width={120}>Unit Sold</th>
            </tr>
          </thead>
          <tbody>
            <tr className="winner__table">
              <td>
              <Image src={`${baseUrl}front/assets/images/preview01.jpg`} 
                  alt=''
                  loading='lazy'
                  width={0}
                  height={0}
                  sizes='100vw'
                  style={{width:"auto", height:"auto"}}
                  /> 
                
              </td>
              <td>
                <div
                  className="product_details_content"
                  style={{ maxWidth: "100%" }}
                >
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
              <td className="text-center font-weight">
                <div className="text_content">
                  <ul>
                    <li>8,948</li>
                    <li>0 units</li>
                  </ul>
                </div>
              </td>
              <td className="text-center font-weight">
                <div className="text_content">
                  <ul>
                    <li>$ 0</li>
                    <li>0 units</li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <div className="text_content">
                  <ul>
                    <li>$ 8,948</li>
                    <li>0 units </li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <div className="text_content">
                  <ul>
                    <li>$ 0</li>
                    <li>0 units</li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <div className="text_content">
                  <ul>
                    <li>$ 8,948</li>
                    <li>5 units</li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <div className="text_content">
                  <ul>
                    <li>0.00%</li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr className="winner__table">
              <td>
              <Image src={`${baseUrl}front/assets/images/preview01.jpg`} 
                  alt=''
                  loading='lazy'
                  width={0}
                  height={0}
                  sizes='100vw'
                  style={{width:"auto", height:"auto"}}
                  /> 
                 
              </td>
              <td>
                <div
                  className="product_details_content"
                  style={{ maxWidth: "100%" }}
                >
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
              <td className="text-center font-weight">
                <div className="text_content">
                  <ul>
                    <li>8,948</li>
                    <li>0 units</li>
                  </ul>
                </div>
              </td>
              <td className="text-center font-weight">
                <div className="text_content">
                  <ul>
                    <li>$ 0</li>
                    <li>0 units</li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <div className="text_content">
                  <ul>
                    <li>$ 8,948</li>
                    <li>0 units </li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <div className="text_content">
                  <ul>
                    <li>$ 0</li>
                    <li>0 units</li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <div className="text_content">
                  <ul>
                    <li>$ 8,948</li>
                    <li>5 units</li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <div className="text_content">
                  <ul>
                    <li>0.00%</li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr className="winner__table">
              <td>
              <Image src={`${baseUrl}front/assets/images/preview01.jpg`} 
                  alt=''
                  loading='lazy'
                  width={0}
                  height={0}
                  sizes='100vw'
                  style={{width:"auto", height:"auto"}}
                  /> 
                
              </td>
              <td>
                <div
                  className="product_details_content"
                  style={{ maxWidth: "100%" }}
                >
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
              <td className="text-center font-weight">
                <div className="text_content">
                  <ul>
                    <li>8,948</li>
                    <li>0 units</li>
                  </ul>
                </div>
              </td>
              <td className="text-center font-weight">
                <div className="text_content">
                  <ul>
                    <li>$ 0</li>
                    <li>0 units</li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <div className="text_content">
                  <ul>
                    <li>$ 8,948</li>
                    <li>0 units </li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <div className="text_content">
                  <ul>
                    <li>$ 0</li>
                    <li>0 units</li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <div className="text_content">
                  <ul>
                    <li>$ 8,948</li>
                    <li>5 units</li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <div className="text_content">
                  <ul>
                    <li>0.00%</li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr className="winner__table">
              <td>
              <Image src={`${baseUrl}front/assets/images/preview01.jpg`} 
                  alt=''
                  loading='lazy'
                  width={0}
                  height={0}
                  sizes='100vw'
                  style={{width:"auto", height:"auto"}}
                  /> 
               
              </td>
              <td>
                <div
                  className="product_details_content"
                  style={{ maxWidth: "100%" }}
                >
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
              <td className="text-center font-weight">
                <div className="text_content">
                  <ul>
                    <li>8,948</li>
                    <li>0 units</li>
                  </ul>
                </div>
              </td>
              <td className="text-center font-weight">
                <div className="text_content">
                  <ul>
                    <li>$ 0</li>
                    <li>0 units</li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <div className="text_content">
                  <ul>
                    <li>$ 8,948</li>
                    <li>0 units </li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <div className="text_content">
                  <ul>
                    <li>$ 0</li>
                    <li>0 units</li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <div className="text_content">
                  <ul>
                    <li>$ 8,948</li>
                    <li>5 units</li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <div className="text_content">
                  <ul>
                    <li>0.00%</li>
                  </ul>
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