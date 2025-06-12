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
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <ul>
              <li>
                <a href="#">
                  <Image src={`${baseUrl}front/assets/images/hand_shaking.png`}
                  alt="icon"
                  width={0}
                  height={0}
                  sizes='100vw'
                  loading="lazy"
                  style={{width:"auto", height:"auto"}} />
                  
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
            <h3>Product Details</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="discount_weowe4_box review-product-details">
            <div className="rOrderId">
              <span>Order Id</span>
              <h5>200012561663320</h5>
            </div>
            <div className="rprImg"> 
              <Image src={`${baseUrl}front/assets/images/preview01.jpg`}
                  alt="icon"
                  width={0}
                  height={0}
                  sizes='100vw'
                  loading="lazy"
                  style={{width:"auto", height:"auto"}} />
            </div>
            <div className="rprcontent">
              <p>
                Lora's Choice Purple Toothpaste Colour Corrector, Tooth Stain
                Concealer, Teeth Whitening Booster, Colour Correcting,
                Toothpaste Color Corrector Serum Brighten and Whiten Teeth
              </p>
              <ul className="rprlist d-flex gap-5" style={{ margin: 0 }}>
                <li>
                  <strong>SKU ID</strong>: Lora's Choice Purple Toothpaste{" "}
                </li>
                <li>
                  <strong>SIN</strong>: BOD8W995465894{" "}
                </li>
                <li>
                  <strong>Price</strong>: $250
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="table-responsive">
          <table
            className="table table-bordered table-striped br-none"
            style={{ marginTop: 10 }}
          >
            <thead className="table__head">
              <tr className="winner__table">
                <th className="text-left" width={30}>
                  &nbsp;
                </th>
                <th className="text-left" width={30}>
                  &nbsp;
                </th>
                <th className="text-left" width="60%">
                  Issue
                </th>
                <th className="text-cener" width="20%">
                  Score
                </th>
                <th className="text-cener" width="10%">
                  &nbsp;
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="winner__table">
                <td>1.</td>
                <td>
                <Image src={`${baseUrl}front/assets/images/exclamation.png`}
                  alt="icon"
                  width={0}
                  height={0}
                  sizes='100vw'
                  loading="lazy"
                  style={{width:"16px", height:"auto"}} />

                  
                </td>
                <td>
                  <div className="product_details_content2">
                    <h4>Product Name</h4>
                    <ul>
                      <li>
                        <h5>1. Missing Key Attributes</h5>
                        <p>
                          This title includes key attributes such as 'brand',
                          but is missing others such as 'form'.
                        </p>
                      </li>
                      <li>
                        <h5>2. Too Long </h5>
                        <p>
                          Product Name should not be more than 100 characters.
                          Enter a Product Name which is lesser than or equal to
                          100 characters.
                        </p>
                      </li>
                      <li>
                        <h5>3. Too Long/too Short</h5>
                        <p>
                          Product Name should not be more than 100 characters.
                          Enter a Product Name which is lesser than or equal to
                          100 characters.
                        </p>
                      </li>
                    </ul>
                  </div>
                </td>
                <td className="text-center">
                  <input
                    type="text"
                    defaultValue="27%"
                    className="form-control reviewinput"
                    style={{ width: 100, margin: "auto" }}
                  />
                </td>
                <td>
                  <a
                    href="javascript:void(0)"
                    className="color-primary"
                    style={{
                      marginTop: 10,
                      display: "inline-block",
                      fontSize: 15
                    }}
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="winner__table">
                <td>2.</td>
                <td>
                  

                <Image src={`${baseUrl}front/assets/images/exclamation.png`}
                  alt="img"
                  width={0}
                  height={0}
                  sizes='100vw'
                  loading="lazy"
                  style={{width:"16px", height:"auto"}} />
                </td>
                <td>
                  <div className="product_details_content2">
                    <h4>Description</h4>
                    <ul>
                      <li>
                        <h5>1. Written Poorly</h5>
                        <p>
                          This description is too simplistic. Descriptions that
                          are more complex tend to perform better. Try
                          increasing the average length of the words and
                          sentences to make it more complex.
                        </p>
                      </li>
                      <li>
                        <h5>2.Too Short </h5>
                        <p>
                          Site Description should not be less than 60, Enter a
                          Site Description which is greater than or equal to 60
                          words.
                        </p>
                      </li>
                    </ul>
                  </div>
                </td>
                <td className="text-center">
                  <input
                    type="text"
                    defaultValue="51%"
                    className="form-control reviewinput"
                    style={{ width: 100, margin: "auto" }}
                  />
                </td>
                <td>
                  <a
                    href="javascript:void(0)"
                    className="color-primary"
                    style={{
                      marginTop: 10,
                      display: "inline-block",
                      fontSize: 15
                    }}
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="winner__table">
                <td>3.</td>
                <td>
                  
                   <Image src={`${baseUrl}front/assets/images/check-box.png`}
                  alt="img"
                  width={0}
                  height={0}
                  sizes='100vw'
                  loading="lazy"
                  style={{width:"16px", height:"auto"}} />
                </td>
                <td>
                  <div className="product_details_content2">
                    <h4>Key Features </h4>
                    <ul className="normalList">
                      <li>Missing Keywords</li>
                      <li>
                        You're missing keywords that drive discoverability, such
                        as 'brand', and 'form'. Please add the missing
                        information in the 'Key Features' (aka 'Product Long
                        Description') field.
                      </li>
                    </ul>
                  </div>
                </td>
                <td className="text-center">
                  <input
                    type="text"
                    defaultValue="85%"
                    className="form-control reviewinput"
                    style={{ width: 100, margin: "auto" }}
                  />
                </td>
                <td>
                  <a
                    href="#"
                    className="color-primary"
                    style={{
                      marginTop: 10,
                      display: "inline-block",
                      fontSize: 15
                    }}
                  >
                    Edit
                  </a>
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