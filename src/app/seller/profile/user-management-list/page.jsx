import React from 'react' 
import Link from 'next/link'
import { baseUrl } from '@/Http/helper'

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
                <Link href="/dashboard">Dashboard</Link>{" "}
              </li>
              <li>
                <a href="#" className="active_002">
                  User Management List
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
      <div className="col-lg-10 offset-lg-1">
        <div className="search_outer">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="breadcome-heading">
                    <form role="search" className="sr-input-func">
                      <input
                        type="text"
                        placeholder="Search"
                        className="search-int form-control"
                      />
                      <a href="#">
                        <i className="far fa-search" />
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right_button">
                <ul>
                  <li>
                    <a href="add-catalog.html">Add New User</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table
            className="table table-bordered user-man"
            style={{ marginTop: 20 }}
          >
            <thead className="table__head">
              <tr className="winner__table">
                <th width={210}>Name</th>
                <th width={330}>E-mail Address</th>
                <th width={100}>Status</th>
                <th width={150}> </th>
              </tr>
            </thead>
            <tbody>
              <tr className="winner__table">
                <td>
                  <div className="name_348937">AK E-COMMERCE CENTRE</div>
                </td>
                <td>gst.service1985@gmail.com</td>
                <td>Active</td>
                <td>
                  <div className="manage_permission">
                    <Link href={`${baseUrl}/seller/profile/manage-permission`}>Manage Permission</Link>
                  </div>
                </td>
              </tr>
              <tr className="winner__table">
                <td>
                  <div className="name_348937">AK E-COMMERCE CENTRE</div>
                </td>
                <td>gst.service1985@gmail.com</td>
                <td>Active</td>
                <td>
                  <div className="manage_permission">
                    <a href="manage-permission.html">Manage Permission</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="fixed-table-pagination" style={{ padding: 0 }}>
          <div className="row">
            <div className="col-lg-3">
              <select className="form-select">
                <option>10 results per page</option>
                <option>10 results per page</option>
              </select>
            </div>
            <div className="col-lg-9">
              <div className="pull-right pagination">
                <ul className="pagination">
                  <li className="page-pre">
                    <a href="#">
                      <i className="fa-solid fa-arrow-left" />
                    </a>
                  </li>
                  <li className="page-number">
                    <a href="#">1</a>
                  </li>
                  <li className="page-number">
                    <a href="#">2</a>
                  </li>
                  <li className="page-number">
                    <a href="#">3</a>
                  </li>
                  <li className="page-next">
                    <a href="#">
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </li>
                </ul>
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
