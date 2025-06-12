import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import React from 'react'

function Page() {
  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="navigator-breadcrumb-wrapper">
            <h3>Report centre</h3>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <ul>
              <li>
                <a href="#"> 
                  <Image src={`${baseUrl}front/assets/images/hand_shaking.png`}
                    alt='icon'
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
    </div>
  </div>
  <div className="container">
    <div className="report_search_outer">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-3">
              <div className="all-request">All Request Report</div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
              <div className="breadcome-heading">
                <form role="search" className="sr-input-func">
                  <input
                    type="text"
                    placeholder=""
                    className="search-int form-control"
                  />
                  <a href="#">
                    <i className="fa fa-search" />
                  </a>
                </form>
              </div>
            </div>
            {/*  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
      <select className="">
        <option>SKU</option>
        <option>SIN</option>
      </select>
    </div> */}
          </div>
        </div>
        {/* <div className="col-lg-6">
  <div className="right_button">
    <ul>
      <li><a href="#">Add Single Listing</a></li>
      <li><a href="#">Add Listing in Bulk</a></li>
    </ul>
  </div>
</div> */}
      </div>
    </div>
  </div>
  <div className="filter">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="row space">
            <div className="col-lg-5 col-6">
              <div className="filter_form">
                <label>&nbsp;</label>
                <select className="form-select" >
                  <option>Inventory Report</option>
                  <option >Return Report</option>
                  <option>Fulfilment Reports</option>
                  <option>Advertising Report</option>
                  <option>Custom Report</option>
                  <option>Seller Fees Tax Invoice Report</option>
                  <option>Seller Fees Credit Note Report</option>
                  <option>Sales Report</option>
                </select>
              </div>
            </div>
            <div className="col-lg-5 col-6">
              <div className="filter_form">
                <label>&nbsp;</label>
                <select className="form-select">
                  <option>Last Day</option>
                  <option>Last 7 Day</option>
                  <option>Last 30 Day</option>
                  <option >Exact Date</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1">
          <div className="row">
            <div className="col-lg-3 col-4">
              <div className="filter_form">
                <label>From</label>
                <input type="date" placeholder="" />
              </div>
            </div>
            <div className="col-lg-3 col-4">
              <div className="filter_form">
                <label>To</label>
                <input type="date" placeholder="" />
              </div>
            </div>
            <div className="col-lg-4 col-4">
              <label className="d-block pb--5">&nbsp;</label>
              <div className="request_report">
                <a href="#">Request Report</a>
              </div>
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
          className="table table-bordered table-bordered2 table-bordered3 table-striped"
          style={{ marginTop: 20 }}
        >
          <thead className="table__head">
            {/*  <tr className="winner__table">
      <th colspan="10" > <div className="table_menu">
          <ul>
            <li><a href="#" className="active">All Request(3)</a></li>
            <li><a href="#">Action Required(0)</a></li>
            <li><a href="#">Pending(0)</a></li>
            <li><a href="#">Approved(1)</a></li>
          </ul>
        </div>
      </th>
    </tr> */}
            <tr className="winner__table">
              <th style={{ minWidth: 250 }} className="text-left">
                Report type{" "}
              </th>
              <th style={{ minWidth: 250 }} className="text-left">
                Date range covered
              </th>
              <th style={{ minWidth: 250 }} className="text-left">
                Requested On
              </th>
              <th style={{ minWidth: 150 }} className="text-left">
                Status
              </th>
              <th style={{ minWidth: 150 }} className="text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="winner__table border_none">
              <td>Return Report</td>
              <td>2/03/2025 - 28/03/2025</td>
              <td>2-03-2025\ 1:00</td>
              <td className="completed">Completed</td>
              <td className="small-size">
                <div className="download_report">
                  <a href="#">Download Report</a>
                </div>
              </td>
            </tr>
            <tr className="winner__table border_none">
              <td>Sales Report</td>
              <td>2/03/2025 - 28/03/2025</td>
              <td>2-03-2025\ 1:00</td>
              <td className="completed">Completed</td>
              <td className="small-size">
                <div className="download_report">
                  <a href="#">Download Report</a>
                </div>
              </td>
            </tr>
            <tr className="winner__table border_none">
              <td>Sales Report</td>
              <td>2/03/2025 - 28/03/2025</td>
              <td>2-03-2025\ 1:00</td>
              <td className="completed">Completed</td>
              <td className="small-size">
                <div className="download_report">
                  <a href="#">Download Report</a>
                </div>
              </td>
            </tr>
            <tr className="winner__table">
              <td>Sales Report</td>
              <td>2/03/2025 - 28/03/2025</td>
              <td>2-03-2025\ 1:00</td>
              <td className="completed">Completed</td>
              <td className="small-size">
                <div className="download_report">
                  <a href="#">Download Report</a>
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