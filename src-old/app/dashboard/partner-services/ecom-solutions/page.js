import { baseUrl } from '@/Http/helper'
import Script from 'next/script'
import React from 'react'

function page() {
  return (
    <>
  <div className="rts-navigation-area-breadcrumb">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="navigator-breadcrumb-wrapper">
            {" "}
            <a href={`${baseUrl}dashboard/partner-services/available-services`}>All Services</a>{" "}
            <i className="fa-regular fa-chevron-right" />{" "}
            <a href="#">Account Management</a>{" "}
            <i className="fa-regular fa-chevron-right" />{" "}
            <a className="current" href="#">
              eCOM SOLUTIONS
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-3">
        <div className="logo-section">
          <img src={`${baseUrl}front/assets/images/image_25.png`} alt="eCOM SOLUTIONS Logo" />
        </div>
      </div>
      <div className="col-lg-7">
        <div className="content-section">
          <div className="title">eCOM SOLUTIONS</div>
          <div className="rating">
            <span className="star22">
              5 <i className="fa-solid fa-star" />
            </span>{" "}
            (3386)
          </div>
          <div>
            <span className="price_432908390">
              Starts at <span>₹1999/month</span>
            </span>
            <span className="offer">Buy 2 months Get 1 month FREE</span>
          </div>
          <div className="tags">
            <span className="tag">Performance Management</span>
            <span className="tag">Complete Account Management</span>
            <span className="tag">Brand Protection</span>
          </div>
          <div className="description2">
            Ecom Solutions is a dynamic and rapidly expanding company dedicated
            to delivering a comprehensive suite of services tailored to empower
            sellers on leading ecommerce platforms such as Amazon, Flipkart, and
            more. Our mission is to provide innovative, end-to-end solutions
            that drive success for businesses of all sizes.
          </div>
        </div>
      </div>
      <div className="col-lg-2">
        <button
          className="orange-btn"
          data-bs-toggle="modal"
          data-bs-target="#requestModal"
        >
          Request a quote
        </button>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <section className="sticky-nav-tabs">
          <div className="sticky-nav-tabs-container">
            <a className="sticky-nav-tab" href="#tab-react">
              Service Details
            </a>
            <a className="sticky-nav-tab" href="#tab-angular">
              Service Types
            </a>
            <a className="sticky-nav-tab" href="#tab-cssscript">
              Overview
            </a>
            <a className="sticky-nav-tab" href="#tab-vue">
              Ratings &amp; Review
            </a>
            <span className="sticky-nav-tab-slider" />
          </div>
        </section>
        <div className="spa-main">
          <div className="spa-slide" id="tab-react">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1>Service Details</h1>
                </div>
              </div>
              <div className="text-center grid_e4r3">
                <div className="highlight-box">
                  <div className="icon_tab">
                    <img src={`${baseUrl}front/assets/images/partner.png`} />
                  </div>
                  1st Authorized
                  <br />
                  Partner of <br />
                  Sellora
                </div>
                <div className="highlight-box">
                  <div className="icon_tab">
                    <img src={`${baseUrl}front/assets/images/exprience.png`} />
                  </div>
                  6 Years of <br />
                  experience
                </div>
                <div className="highlight-box">
                  <div className="icon_tab">
                    <img src={`${baseUrl}front/assets/images/associates.png`} />
                  </div>
                  100+ <br />
                  Associates
                </div>
                <div className="highlight-box">
                  <div className="icon_tab">
                    <img src={`${baseUrl}front/assets/images/Happy-Sellers.png`} />
                  </div>
                  5000+ Happy <br />
                  Sellers
                </div>
                <div className="highlight-box">
                  <div className="icon_tab">
                    <img src={`${baseUrl}front/assets/images/Feedback.png`} />
                  </div>
                  Good Customer
                  <br />
                  Feedback
                </div>
              </div>
              <div className="clear" />
              <div className="service-info">
                <div className="info-row">
                  <div className="info-label">About Service</div>
                  <div className="info-value about-text">
                    Sellora streamlines your ecommerce business with
                    comprehensive, end-to-end solutions. A dedicated account
                    manager acts as your single point of contact, managing all
                    operations and updates. Our mission is to simplify your
                    journey, driving growth and satisfaction. Partner with
                    Sellora for seamless success in online selling!
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-label">Service Type</div>
                  <div className="info-value service-types">
                    <button className="service-type-btn">
                      Performance Management
                    </button>
                    <button className="service-type-btn">
                      Complete Account Management
                    </button>
                    <button className="service-type-btn">
                      Brand Protection
                    </button>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-label">Offered language</div>
                  <div className="info-value">English</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Serviceable Location</div>
                  <div className="info-value">UK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spa-slide" id="tab-angular">
          <div className="my-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h5 className="section-header">
                    <span className="text-danger_sr">Service Types</span> Buy 2
                    months Get 1 month FREE
                  </h5>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="service-card">
                    <h6>Complete Account Management</h6>
                    <div className="rating">
                      <span className="star22">
                        5 <i className="fa-solid fa-star" />
                      </span>{" "}
                      (3386)
                    </div>
                    <p>
                      Sell products Online and reach out to millions of
                      customers with Sellora services. We Handle your Sellora
                      Account. Listing, Return, Refund , Claim, Promotion,
                      Everyday Operation etc
                    </p>
                    <div className="price_32489">
                      Price (Including Taxes) <strong>₹1999/month</strong>
                    </div>
                    <button className="orange-btn" data-bs-toggle="modal"
                      data-bs-target="#requestModal">Request a Quote</button>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="service-card">
                    <h6>Performance Management</h6>
                    <div className="rating">
                      <span className="star22">
                        5 <i className="fa-solid fa-star" />
                      </span>{" "}
                      (3386)
                    </div>
                    <p>
                      We Manage Seller's Performance in Sellora to grow their
                      seller account and boost their sales and become a gold
                      seller.
                    </p>
                    <div className="price_32489">
                      Price (Including Taxes) <strong>₹3999/month</strong>
                    </div>
                    <button className="orange-btn"data-bs-toggle="modal"
                      data-bs-target="#requestModal">Request a Quote</button>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="service-card">
                    <h6>Brand Protection</h6>
                    <div className="rating">
                      <span className="star22">
                        5 <i className="fa-solid fa-star" />
                      </span>{" "}
                      (3386)
                    </div>
                    <p>
                      We will help sellers to protect their brand from mapping
                      and help them to grow their sales. works on brand gating
                      etc.
                    </p>
                    <div className="price_32489">
                      Price (Including Taxes) <strong>₹2999/month</strong>
                    </div>
                    <button className="orange-btn"
                     data-bs-toggle="modal"
                      data-bs-target="#requestModal"
                    >Request a Quote</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spa-slide" id="tab-cssscript">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Overview</h1>
                <p>
                  Register &amp; Grow your business today with best online
                  selling platform for e-commerce solutions. Sell products
                  Online and reach out to millions of customers with Sellora
                  services. We Handle your Sellora Account. Listing, Return,
                  Refund , Claim, Promotion, Everyday Operation etc.
                </p>
              </div>
              <div className="service_bg">
                <h2>Our Services</h2>
                <div className="col-lg-10 offset-lg-1">
                  <div className="row">
                    <div className="col-lg-6">
                      <ul>
                        <li>CATALOGING</li>
                        <li>ADVERTISMENT</li>
                        <li>TAXATION</li>
                        <li>ACCOUNT MANAGEMENT</li>
                        <li>IMAGING</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        <li>SELLER ACCOUNT SET-UP</li>
                        <li>SALES BOOST</li>
                        <li>ADS MANAGEMENT</li>
                        <li>PERFOMANCE MANAGEMENT</li>
                        <li>BRAND PROTECTION</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spa-slide" id="tab-vue">
          <div className="container">
            <h1>Rating &amp; Review</h1>
            <div className="col-lg-2">
              <select className="select_344390 form-select">
                <option value=" ">All services types</option>
                <option>...</option>
                <option>...</option>
                <option>...</option>
                <option>...</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-lg-12">
              <div className="rating-categories">
                <div className="tags_22_5 tags_active">
                  Overall rating 4.7 ★
                </div>
                <div className="tags_22_5">Communication 4.7 ★</div>
                <div className="tags_22_5">Quality 4.7 ★</div>
                <div className="tags_22_5">Timeliness of delivery 4.7 ★</div>
                <div className="tags_22_5">Value for money 4.7 ★</div>
              </div>
            </div>
            <div className="star_review_outer">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="overall">
                    <div className="over_rating">Overall Rating</div>
                    <h2>4.7 ★</h2>
                    <p>3386 Ratings and 3386 Reviews</p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="overall-rating">
                    <p>Overall Rating Distribution</p>
                    <div className="distribution">
                      <div className="bar_3342">
                        <span>5.0 ★</span>
                        <div
                          className="bar-fill"
                          style={{ value: "91%", width: "91%" }}
                        >
                          <div
                            style={{
                              width: "91%",
                              height: "100%",
                              background: "#D9D9D9",
                              borderRadius: 6
                            }}
                          />
                        </div>
                        <span>3079</span>
                      </div>
                      <div className="bar_3342">
                        <span>5.0 ★</span>
                        <div
                          className="bar-fill"
                          style={{ value: "1%", width: "1%" }}
                        >
                          <div
                            style={{
                              width: "1%",
                              height: "100%",
                              background: "#d9d9d9",
                              borderRadius: 6
                            }}
                          />
                        </div>
                        <span>30</span>
                      </div>
                      <div className="bar_3342">
                        <span>5.0 ★</span>
                        <div
                          className="bar-fill"
                          style={{ value: "1%", width: "1%" }}
                        >
                          <div
                            style={{
                              width: "1%",
                              height: "100%",
                              background: "#d9d9d9",
                              borderRadius: 6
                            }}
                          />
                        </div>
                        <span>22</span>
                      </div>
                      <div className="bar_3342">
                        <span>5.0 ★</span>
                        <div
                          className="bar-fill"
                          style={{ value: "1%", width: "1%" }}
                        >
                          <div
                            style={{
                              width: "1%",
                              height: "100%",
                              background: "#d9d9d9",
                              borderRadius: 6
                            }}
                          />
                        </div>
                        <span>32</span>
                      </div>
                      <div className="bar_3342">
                        <span>5.0 ★</span>
                        <div
                          className="bar-fill"
                          style={{ value: "7%", width: "7%" }}
                        >
                          <div
                            style={{
                              width: "7%",
                              height: "100%",
                              background: "#d9d9d9",
                              borderRadius: 6
                            }}
                          />
                        </div>
                        <span>223</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <select className="select_344390 form-select">
                <option value=" ">Most Recent</option>
                <option>...</option>
                <option>...</option>
                <option>...</option>
                <option>...</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-lg-12">
              <div className="review_22_5">
                <div className="reviewer_22_5">
                  5 <i className="fa fa-star" /> By Rupal Arora
                  <span style={{}}>- Certified Seller</span>
                </div>
                <div className="rating-categories">
                  <div className="tags_22_5">Complete Account Management</div>
                  <div className="tags_22_5">Communication 4.7 ★</div>
                  <div className="tags_22_5">Quality 4.7 ★</div>
                  <div className="tags_22_5">Timeliness of delivery 4.7 ★</div>
                  <div className="tags_22_5">Value for money 4.7 ★</div>
                </div>
                <p>Very good services, I am so happy. Thank you SSP TEAM.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="review_22_5">
                <div className="reviewer_22_5">
                  5 <i className="fa fa-star" /> By Seema Patil
                  <span style={{}}>- Certified Seller</span>
                </div>
                <div className="rating-categories">
                  <div className="tags_22_5">Complete Account Management</div>
                  <div className="tags_22_5">Communication 4.7 ★</div>
                  <div className="tags_22_5">Quality 4.7 ★</div>
                  <div className="tags_22_5">Timeliness of delivery 4.7 ★</div>
                  <div className="tags_22_5">Value for money 4.7 ★</div>
                </div>
                <p>We highly recommend SSP to any business.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="review_22_5">
                <div className="reviewer_22_5">
                  5 <i className="fa fa-star" />
                  By Om Sen
                  <span style={{}}>- Certified Seller</span>
                </div>
                <div className="rating-categories">
                  <div className="tags_22_5">Complete Account Management</div>
                  <div className="tags_22_5">Communication 4.7 ★</div>
                  <div className="tags_22_5">Quality 4.7 ★</div>
                  <div className="tags_22_5">Timeliness of delivery 4.7 ★</div>
                  <div className="tags_22_5">Value for money 4.7 ★</div>
                </div>
                <p>Very good services, I am so happy. Thank you SSP TEAM.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="review_22_5">
                <div className="reviewer_22_5">
                  5 <i className="fa fa-star" /> By Srilanka Enterprices
                  <span style={{}}>- Certified Seller</span>
                </div>
                <div className="rating-categories">
                  <div className="tags_22_5">Complete Account Management</div>
                  <div className="tags_22_5">Communication 4.7 ★</div>
                  <div className="tags_22_5">Quality 4.7 ★</div>
                  <div className="tags_22_5">Timeliness of delivery 4.7 ★</div>
                  <div className="tags_22_5">Value for money 4.7 ★</div>
                </div>
                <p>We highly recommend SSP to any business.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="disclamer_22">
                <h3>Disclamer</h3>
                <p>
                  Please be aware that Sellora is providing these listings
                  solely as an informational resource. If you choose to retain a
                  service provider, you will be contracting directly with that
                  provider, which will be providing services to you at your
                  direction. Sellora does not endorse any service provider or
                  it’s services. Any prices shown above in a converted currency
                  are presented for your reference only, and the service
                  providers may charge you in a different currency or amount,
                  plus any applicable taxes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* modal */}

   <div className="modal fade" id="requestModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title title_request" id="exampleModalLabel">Request a Quote</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="request_form">
            <p>You are requesting quote from ‘eCOM SOLUTIONS’. Add requirement details to below form and hit submit</p>

            <label>Service Requirement</label>
            <select className="select_344390 form-select">
              <option value="">All Services Types</option>
              <option>Brand Protection</option>
              <option>Complete Account Management</option>
              <option>Perfomance Management</option>

            </select>

            <label>Describe your requirements</label>
            <textarea className="form-control"></textarea>
            <p style={{margin: '0px', padding: '0px', textAlign: 'right', fontSize: '14px', color: '#333'}}>0 / 500</p>

            <label>Email ID</label>
            <input type="text" name="" className="form-control" /> 
            <label>Mobile Number</label>
            <input type="text" name="" placeholder="+91 12345678" className="form-control" /> 
          </div>

        </div>



        <div className="modal_button">
          <button type="button" className="orange-btn cancel" data-bs-dismiss="modal">Cancel</button>
          <button type="button" className="orange-btn">Submit</button>
        </div>
      </div>
    </div>
  </div>

  {/* <Script defer src="/front/assets/js/tab.js"></Script> */}

</>

  )
}

export default page