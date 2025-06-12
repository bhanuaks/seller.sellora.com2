import { baseUrl } from "@/Http/helper";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <>
      <div className="rts-navigation-area-breadcrumb pb--10">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 hub1">
              <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
                {/* <a href="#"><i className="fa-solid fa-arrow-left"></i> Go to Seller hub</a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="navigator-breadcrumb-wrapper text-center">
                <h3>Winter Wonderland Sale</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
                <ul>
                  {/* <li><a href="#"><i className="fa-solid fa-wallet"></i> Wallet</a> </li> */}
                  <li>
                    <a href="#">
                      <Image
                        src={`${baseUrl}front/assets/images/hand_shaking.png`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt=""
                        style={{ width: "auto", height: "auto" }}
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
      <div className="pt--20 pb--30">
        <div className="container">
          <div className="col-lg-10 offset-lg-1">
            <div className="row">
              <div className="col-lg-6">
                <div className="upcoming_event">
                  <div className="row align-items-center">
                    {/* black_friday christmas_sale */}
                    <div className="col-lg-4">
                      <div className="inner_immg_93634">
                        <Image
                          src={`${baseUrl}front/assets/images/winter.jpg`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt=""
                          style={{ width: "auto", height: "auto" }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="_wier_heading_df">
                        <ul className="list_duration">
                          <li>
                            <span>Event Duration:</span> 17 - 19th Jan , 6PM -
                            10PM
                          </li>
                          <li>
                            <span>Apply Before:</span> 08 January <br />
                            11:59 PM
                          </li>
                          <li>
                            <span>Available Products:</span> 19
                            <br />
                            Minimum Discount: 10%
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="upcoming_event">
                  <div className="estimated_23">
                    Estimated Increase in Product Visibility:
                  </div>
                  <table className="table_5">
                    <tbody>
                      <tr>
                        <th>Give discount</th>
                        <th>Increase visibility by upto</th>
                      </tr>
                      <tr>
                        <td>
                          <Image
                            src={`${baseUrl}front/assets/images/offer_paracent.jpg`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt=""
                            style={{ width: "auto", height: "auto" }}
                          />
                          Up to5%
                        </td>
                        <td>
                          <Image
                            src={`${baseUrl}front/assets/images/visibility.jpg`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt=""
                            style={{ width: "auto", height: "auto" }}
                          />
                          50%
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Image
                            src={`${baseUrl}front/assets/images/offer_paracent.jpg`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt=""
                            style={{ width: "auto", height: "auto" }}
                          />
                          Up to10%
                        </td>
                        <td>
                          <Image
                            src={`${baseUrl}front/assets/images/visibility.jpg`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt=""
                            style={{ width: "auto", height: "auto" }}
                          />
                          100%
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Image
                            src={`${baseUrl}front/assets/images/offer_paracent.jpg`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt=""
                            style={{ width: "auto", height: "auto" }}
                          />
                          Up to15%
                        </td>
                        <td>
                          <Image
                            src={`${baseUrl}front/assets/images/visibility.jpg`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt=""
                            style={{ width: "auto", height: "auto" }}
                          />
                          150%
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Image
                            src={`${baseUrl}front/assets/images/offer_paracent.jpg`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt=""
                            style={{ width: "auto", height: "auto" }}
                          />
                          Up to20%
                        </td>
                        <td>
                          <Image
                            src={`${baseUrl}front/assets/images/visibility.jpg`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt=""
                            style={{ width: "auto", height: "auto" }}
                          />
                          <Image
                            src={`${baseUrl}front/assets/images/offer_paracent.jpg`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt=""
                            style={{ width: "auto", height: "auto" }}
                          />
                          200%
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
      <div className="container">
        <div>
          <div className="table-responsive">
            <table
              className="table table-bordered table-bordered2 table-striped table-v-align-3"
              style={{ marginTop: 20 }}
            >
              <thead className="table__head">
                <tr className="winner__table">
                  <th colSpan={10}>
                    <div className="row align-items-center">
                      <div className="col-lg-4">
                        <div className="table_menu">
                          <ul>
                            <li>
                              <a href="#" className="active">
                                Select Product{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">Product add to sale</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="searchCam position-relative">
                          <form
                            role="search"
                            className="sr-input-func col-lg-auto"
                          >
                            <a href="#">
                              <i className="fa fa-search" />
                            </a>
                            <input
                              type="text"
                              placeholder="Search product by title sku"
                              className="search-int form-control"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
                <tr className="winner__table">
                  <th width={100} className="text-left">
                    Products
                  </th>
                  <th width={450} className="text-left">
                    &nbsp;
                  </th>
                  <th width={100} className="text-left">
                    &nbsp;
                  </th>
                  <th width={250} className="text-left">
                    Products Price
                  </th>
                  <th width={250} className="text-left">
                    Discount %
                  </th>
                  <th width={200} className="text-left">
                    After Discount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="winner__table">
                  <td>
                    <div className="d-flex">
                      <div className="product_idnf_f">
                        <Image
                          src={`${baseUrl}front/assets/images/preview01.jpg`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt=""
                          style={{ width: "auto", height: "auto" }}
                        />
                        <Image
                          src={`${baseUrl}front/assets/images/offer_paracent.jpg`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt=""
                          style={{ width: "auto", height: "auto" }}
                        />
                        <input id="cb1" type="checkbox" name="" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="prod_content">
                      <p>
                        Loras Choice V34 Purple Toothpaste Colour Corrector,
                        Tooth Stain Concealer, Teeth Whitening Booster, Colour
                        Correcting, Toothpaste Color Corrector Serum Brighten
                        and Whiten Teeth -30ml
                      </p>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="ufld_fsdli">
                            <ul>
                              <li>SIN: B0DDYCB79B</li>
                              <li>Price: $24</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="ufld_fsdli">
                            <ul>
                              <li>SKU: Loras Choice Purple Toothpaste</li>
                              <li>Stock: 10</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td />
                  <td>
                    <div className="price_fds347">
                      {" "}
                      <span>$29.99</span> <span>Transfer Price: $28.99</span>{" "}
                    </div>
                  </td>
                  <td>
                    <span className="precentege0">10%</span>
                  </td>
                  <td>
                    <div className="price_fds347">
                      {" "}
                      <span>$29.99</span> <span>Transfer Price: $28.99</span>{" "}
                    </div>
                  </td>
                </tr>
                <tr className="winner__table">
                  <td>
                    <div className="d-flex">
                      <div className="product_idnf_f"> 
                        <Image
                          src={`${baseUrl}front/assets/images/preview01.jpg`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt=""
                          style={{ width: "auto", height: "auto" }}
                        />
                        <Image
                          src={`${baseUrl}front/assets/images/offer_paracent.jpg`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt=""
                          style={{ width: "auto", height: "auto" }}
                        />
                        <input id="cb1" type="checkbox" name="" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="prod_content">
                      <p>
                        Loras Choice V34 Purple Toothpaste Colour Corrector,
                        Tooth Stain Concealer, Teeth Whitening Booster, Colour
                        Correcting, Toothpaste Color Corrector Serum Brighten
                        and Whiten Teeth -30ml
                      </p>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="ufld_fsdli">
                            <ul>
                              <li>SIN: B0DDYCB79B</li>
                              <li>Price: $24</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="ufld_fsdli">
                            <ul>
                              <li>SKU: Loras Choice Purple Toothpaste</li>
                              <li>Stock: 10</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td />
                  <td>
                    <div className="price_fds347">
                      {" "}
                      <span>$29.99</span> <span>Transfer Price: $28.99</span>{" "}
                    </div>
                  </td>
                  <td>
                    <span className="precentege0">10%</span>
                  </td>
                  <td>
                    <div className="price_fds347">
                      {" "}
                      <span>$29.99</span> <span>Transfer Price: $28.99</span>{" "}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="cenrt">
          <ul>
            <li>
              <a href="#" data-bs-toggle="modal" data-bs-target="#add-bulk">
                Add Product in Bulk
              </a>
            </li>
            <li>
              <a href="#">Add Product to Sale</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Page;
