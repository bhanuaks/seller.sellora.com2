import React from 'react'
import RightNav from '../component/RightNav'

function page() {
  return (
    <>
  <div className="notification_breadcomb_rts-navigation-area-breadcrumb">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="notification_breadcomb">
            <ul>
              <li>
                <a href="#">Dashboard</a>{" "}
              </li>
              <li>
                <a href="#"> User Management</a>{" "}
              </li>
              <li>
                <a href="#" className="active_002">
                  Manage Permissions
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-9">
        <div className="adjust_outer">
          <div className="container">
            <div className="radio">
              <input id="radio-1" name="radio" type="radio" defaultChecked="checked" />
              <label htmlFor="radio-1" className="radio-label">
                Adjust access, add/remove users, delegate admin roles, and
                oversee all sites from a single hub
              </label>
            </div>
          </div>
          {/* <label><input type="radio" name="choice" checked> Adjust access, add/remove users, delegate admin roles, and oversee all sites from a single hub</label> */}
        </div>
        <div className="search_outer2">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="breadcome-heading_10_2">
                    <form role="search" className="sr-input-func_10_2">
                      <input
                        type="text"
                        placeholder="Search for a permission"
                        className="search-int2 form-control"
                      />
                      <a href="#">
                        <i className="far fa-search" />
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <select className="form-select">
                <option>9 Countries / Regions</option>
              </select>
            </div>
          </div>
        </div>
        {/* ======================Listing-table==open============================= */}
        <div className="table-responsive">
          <table
            className="table table-bordered user-man"
            style={{ marginTop: 20 }}
          >
            <thead className="table__head">
              <tr className="winner__table">
                <th width={510}>Listings</th>
                <th width={100}>
                  <span className="white-button">None</span>
                </th>
                <th width={100}>
                  <span className="white-button">View</span>
                </th>
                <th width={100}>
                  <span className="white-button">Edit</span>
                </th>
                <th width={100}>
                  <span className="white-button">Admin</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Advertisment{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group" defaultChecked="checked" />
                    </label>
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group" />
                    </label>
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
        {/* ======================Listing-table==end============================= */}
        {/* ======================Growth-table==open============================= */}
        <div className="table-responsive">
          <table
            className="table table-bordered user-man"
            style={{ marginTop: 20 }}
          >
            <thead className="table__head">
              <tr className="winner__table">
                <th width={510}>Growth</th>
                <th width={100}>
                  <span className="white-button">None</span>
                </th>
                <th width={100}>
                  <span className="white-button">View</span>
                </th>
                <th width={100}>
                  <span className="white-button">Edit</span>
                </th>
                <th width={100}>
                  <span className="white-button">Admin</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Sellora Insights{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group2" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group2" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Advertising Recommendations{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group3" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group3" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Price Recommendations
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group4" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group4" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Sellora Promotions{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group5" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group5" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
        {/* ======================Growth-table==end============================= */}
        {/* ======================Advertising-table==open============================= */}
        <div className="table-responsive">
          <table
            className="table table-bordered user-man"
            style={{ marginTop: 20 }}
          >
            <thead className="table__head">
              <tr className="winner__table">
                <th width={510}>Advertising</th>
                <th width={100}>
                  <span className="white-button">None</span>
                </th>
                <th width={100}>
                  <span className="white-button">View</span>
                </th>
                <th width={100}>
                  <span className="white-button">Edit</span>
                </th>
                <th width={100}>
                  <span className="white-button">Admin</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Advertisment{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group6" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group6" />
                    </label>
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group6" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
        {/* ======================Advertising-table==end============================= */}
        {/* ======================Orders-table==open============================= */}
        <div className="table-responsive">
          <table
            className="table table-bordered user-man"
            style={{ marginTop: 20 }}
          >
            <thead className="table__head">
              <tr className="winner__table">
                <th width={510}>Orders</th>
                <th width={100}>
                  <span className="white-button">None</span>
                </th>
                <th width={100}>
                  <span className="white-button">View</span>
                </th>
                <th width={100}>
                  <span className="white-button">Edit</span>
                </th>
                <th width={100}>
                  <span className="white-button">Admin</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Manage Orders{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group7" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group7" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Returns{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group8" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group8" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
        {/* ======================Orders-table==end============================= */}
        {/* ======================Store-table==open============================= */}
        <div className="table-responsive">
          <table
            className="table table-bordered user-man"
            style={{ marginTop: 20 }}
          >
            <thead className="table__head">
              <tr className="winner__table">
                <th width={510}>Store</th>
                <th width={100}>
                  <span className="white-button">None</span>
                </th>
                <th width={100}>
                  <span className="white-button">View</span>
                </th>
                <th width={100}>
                  <span className="white-button">Edit</span>
                </th>
                <th width={100}>
                  <span className="white-button">Admin</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Store{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group9" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group9" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
        {/* ======================Store-table==end============================= */}
        {/* ======================Perfomance-table==open============================= */}
        <div className="table-responsive">
          <table
            className="table table-bordered user-man"
            style={{ marginTop: 20 }}
          >
            <thead className="table__head">
              <tr className="winner__table">
                <th width={510}>Perfomance</th>
                <th width={100}>
                  <span className="white-button">None</span>
                </th>
                <th width={100}>
                  <span className="white-button">View</span>
                </th>
                <th width={100}>
                  <span className="white-button">Edit</span>
                </th>
                <th width={100}>
                  <span className="white-button">Admin</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Ratings &amp; Reviews{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group10" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group10" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Questions{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group11" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group11" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Seller Feedback{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group12" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group12" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Product quality{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group13" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group13" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Returns{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group14" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group14" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Cancellations{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group15" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group15" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Your seller tier{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group16" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group16" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
        {/* ======================Perfomance-table==end============================= */}
        {/* ======================Report -table==open============================= */}
        <div className="table-responsive">
          <table
            className="table table-bordered user-man"
            style={{ marginTop: 20 }}
          >
            <thead className="table__head">
              <tr className="winner__table">
                <th width={510}>Report </th>
                <th width={100}>
                  <span className="white-button">None</span>
                </th>
                <th width={100}>
                  <span className="white-button">View</span>
                </th>
                <th width={100}>
                  <span className="white-button">Edit</span>
                </th>
                <th width={100}>
                  <span className="white-button">Admin</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Report Center{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group17" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group17" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
        {/* ======================Report -table==end============================= */}
        {/* ======================Payments-table==open============================= */}
        <div className="table-responsive">
          <table
            className="table table-bordered user-man"
            style={{ marginTop: 20 }}
          >
            <thead className="table__head">
              <tr className="winner__table">
                <th width={510}>Payments</th>
                <th width={100}>
                  <span className="white-button">None</span>
                </th>
                <th width={100}>
                  <span className="white-button">View</span>
                </th>
                <th width={100}>
                  <span className="white-button">Edit</span>
                </th>
                <th width={100}>
                  <span className="white-button">Admin</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Payments Overview{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group18" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group18" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Transaction{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group19" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group19" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Disdursements{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group20" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group20" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
        {/* ======================Payments-table==end============================= */}
        {/* ======================Partner services-table==open============================= */}
        <div className="table-responsive">
          <table
            className="table table-bordered user-man"
            style={{ marginTop: 20 }}
          >
            <thead className="table__head">
              <tr className="winner__table">
                <th width={510}>Partner services</th>
                <th width={100}>
                  <span className="white-button">None</span>
                </th>
                <th width={100}>
                  <span className="white-button">View</span>
                </th>
                <th width={100}>
                  <span className="white-button">Edit</span>
                </th>
                <th width={100}>
                  <span className="white-button">Admin</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    All Service{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group21" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group21" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    My Service
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group22" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group22" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Help{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group23" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group23" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
        {/* ======================Partner services-table==end============================= */}
        {/* ======================Setting-table==open============================= */}
        <div className="table-responsive">
          <table
            className="table table-bordered user-man"
            style={{ marginTop: 20 }}
          >
            <thead className="table__head">
              <tr className="winner__table">
                <th width={510}>Setting</th>
                <th width={100}>
                  <span className="white-button">None</span>
                </th>
                <th width={100}>
                  <span className="white-button">View</span>
                </th>
                <th width={100}>
                  <span className="white-button">Edit</span>
                </th>
                <th width={100}>
                  <span className="white-button">Admin</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Notification Setting
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group24" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group24" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Contact Details{" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group25" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group25" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Display Information
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group26" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group26" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Pick up Address
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group27" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group27" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Return Setting
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group28" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group28" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Return Address
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group29" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group29" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Business Details
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group30" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group30" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Tax Information
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group31" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group31" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Shipping Setting
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group32" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group32" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    User Management
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group33" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group33" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Login Setting
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group34" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group34" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="content_p2">
                    Logout
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group35" defaultChecked="" />
                    </label>
                  </div>
                </td>
                <td></td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input
                        type="radio"
                        name="group35"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-Modal"
                      />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
        {/* ======================Setting-table==end============================= */}
      </div>
      
        <RightNav />
      
    </div>
  </div>
  {/* popup-1-edit-Modal */}
  <div
    className="modal fade"
    id="edit-Modal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog2 modal-dialog-centered">
      <div
        className="modal-content"
        style={{ background: "#ff5c2a", padding: 5 }}
      >
        <div className="modal-body">
          <div className="row">
            <div className="col-lg-7">
              <div className="addvertise_ment_10">
                <span className="modified">0 Modified</span>
                <span className="remove-user">Remove User</span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="modal_button modal_button2">
                <button
                  type="button"
                  className="orange-btn cancel3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="white-btn">
                  Save Changes
                </button>
                <button
                  type="button"
                  className="btn-close btn-close2"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  X
                </button>
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
