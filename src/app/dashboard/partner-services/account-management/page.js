import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
  <div className="rts-navigation-area-breadcrumb">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="navigator-breadcrumb-wrapper">
            <a href={`${baseUrl}dashboard/partner-services/available-services`} >All Services</a>
            <i className="fa-regular fa-chevron-right" />
            <a className="current" href="#">
              Account Management
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="layout">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="filters">
            <div className="filter-group">
              <div className="dropdown-container">
                <i className="far fa-map-marker-alt" />
                <select className="location-select form-select">
                  <option value={90015}>90015</option>
                  <option value={90016}>90016</option>
                  <option value={90017}>90017</option>
                  <option value={90018}>90018</option>
                  <option value={90019}>90019</option>
                </select>
              </div>
              <label className="checkbox-label">
                <input type="checkbox" /> Show only local partners near my
                Zipcode
              </label>
            </div>
          </div>
          <div className="filters">
            <div className="filter-group">
              {/* <label for="sort">Sort By</label> */}
              <select id="sort" className="form-select">
                <option>Popularity</option>
              </select>
            </div>
          </div>
          <div className="filters">
            <div className="filter-group">
              <div className="head_935">
                <img src={`${baseUrl}front/assets/images/user_icon.png`} />
                Filters
              </div>
              <div className="ratingf">Rating</div>
              <label className="checkbox-label">
                <input type="checkbox" /> 4 <i className="fa-solid fa-star" />{" "}
                &amp; Above
              </label>
              <label className="checkbox-label">
                <input type="checkbox" /> 3 <i className="fa-solid fa-star" />{" "}
                &amp; Above
              </label>
              <label className="checkbox-label">
                <input type="checkbox" /> 2 <i className="fa-solid fa-star" />{" "}
                &amp; Above
              </label>
              <label className="checkbox-label">
                <input type="checkbox" /> 1 <i className="fa-solid fa-star" />{" "}
                &amp; Above
              </label>
            </div>
            <hr className="ptb-10" />
            <div className="filter-group">
              <div className="ratingf">Offered Language</div>
              <label className="checkbox-label">
                <input type="checkbox" /> English
              </label>
              {/* <label className="checkbox-label">
                <input type="checkbox" /> Spanish
              </label> */}
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="content">
          <div className="tabs">
            <div className="tab">Complete Account Management</div>
            <div className="tab">Brand Protection</div>
            <div className="tab">Performance Management</div>
          </div>
          <div className="cards">
            {/* Card 1 */}
            <div className="card_har_21">
              <Link href={`${baseUrl}dashboard/partner-services/ecom-solutions`}>
                <div className="card-header2">
                  <h4>eCOM SOLUTIONS</h4>
                  <div className="logo-circle">
                    <img src={`${baseUrl}front/assets/images/e-com.png`} />
                  </div>
                </div>
              </Link>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <span className="rating-count">234 ratings</span>
              </div>
              <div className="tags">
                <span className="tag">Brand Protection</span>
                <span className="tag">Complete Account Management</span>
                <span className="tag2">+1</span>
              </div>
              <div className="price_21_5">
                from{" "}
                <span>
                  <strong>$234</strong>/month
                </span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card_har_21">
              <a href="#">
                <div className="card-header2">
                  <h4>Digitom</h4>
                  <div className="logo-circle">
                    <img src={`${baseUrl}front/assets/images/digitom.png`} />
                  </div>
                </div>
              </a>
              <div className="stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <span className="rating-count">234 ratings</span>
              </div>
              <div className="tags">
                <span className="tag">Complete Account Management</span>
                <span className="tag2">+1</span>
                <div className="clear" />
                <span
                  className=""
                  style={{
                    padding: "6px 0px",
                    margin: "2px 4px 2px 0",
                    display: "block"
                  }}
                >
                  &nbsp;
                </span>
              </div>
              <div className="price_21_5">
                from{" "}
                <span>
                  <strong>$234</strong>/month
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default page