import { baseUrl } from "@/Http/helper";
import Image from "next/image";
import React from "react";
import TabSection from "../TabSection";

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
                      <img src="../assets/images/hand_shaking.png" />
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
                  Sellora Insights are powerful tools that provide actionable
                  data to help optimize sales, manage inventory, and improve
                  customer understanding. Businesses can make data-driven
                  decisions that drive growth and success by leveraging these
                  insights effectively.
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
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                  <div className="breadcome-heading">
                    <div className="how_you_are_performing">
                      <h4 style={{ marginBottom: 0 }}>
                        How you are performing
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <select className="form-select2 form-select">
                    <option>Today, 24 Jan</option>
                    <option>Today, 24 Jan</option>
                  </select>
                </div>
              </div>
            </div>
             
          </div>
          <div className="row">
            <div className="col-lg-10">
              <div className="summry_box mt--30"> 
                <Image src={`${baseUrl}front/assets/images/sales_graph.jpg`}
                        width={0}
                        height={0}
                        sizes={'100vw'}
                        style={{width:"auto", height:"auto"}} 
                        alt="img"
                        />
              </div>
              <div> </div>
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
                  <th width={100}>Product</th>
                  <th width={350}>&nbsp;</th>
                  <th width={250}>Sales</th>
                  <th width={250}>Unit Sold</th>
                  <th width={120}>Listing Quality</th>
                </tr>
              </thead>
              <tbody>
                <tr className="winner__table">
                  <td>
                    
                    <Image src={`${baseUrl}front/assets/images/preview01.jpg`}
                        width={0}
                        height={0}
                        sizes={'100vw'}
                        style={{width:"auto", height:"auto"}} 
                        alt="img"
                        />
                  </td>
                  <td>
                    <div
                      className="product_details_content"
                      style={{ maxWidth: "100%" }}
                    >
                      <p>
                        Lora s Choice Purple Toothpaste Colour Corrector, Tooth
                        Stain Concealer, Teeth Whitening Booster, Colour
                        Correcting, Toothpaste Color Corrector Serum Brighten
                        and Whiten Teeth
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
                  <td className="text-center font-weight">$ 20.00</td>
                  <td className="text-center font-weight">1</td>
                  <td className="text-center">
                    <div className="good">
                      <a href="#">Good</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
