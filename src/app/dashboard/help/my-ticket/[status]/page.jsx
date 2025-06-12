"use client"
import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

function MyTicket( ) {

    const params = useParams();
    const { status } = params; 

  return (
   <div className="sellora_045948">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="raise-a-ticket">
          <h2>
            <Link href={`${baseUrl}dashboard/help`}> Help </Link> / <span>My Tickets</span>
          </h2>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="tabs_12_5">
          <div className={`tab_12_5 ${status =="All"?"active":""}`}>
            <Link href={`${baseUrl}dashboard/help/my-ticket/All`}>All</Link>
          </div>
          <div className={`tab_12_5 ${status =="NeedsAttention"?"active":""}`}>
            <Link href={`${baseUrl}dashboard/help/my-ticket/NeedsAttention`} >Needs Attention</Link>
          </div>
          <div className={`tab_12_5 ${status =="InProgress"?"active":""}`}>
            <Link href={`${baseUrl}dashboard/help/my-ticket/InProgress`}>In Progress</Link>
          </div>
          <div className={`tab_12_5 ${status =="Closed"?"active":""}`}>
            <Link href={`${baseUrl}dashboard/help/my-ticket/Closed`}>Closed</Link>
          </div>
        </div>
        <div className="filters_12_5">
          <div className="filters-left_12_5">
            <div className="filter_by">Filter by:</div>
            <select>
              <option>Created Date</option>
              <option>Last Updated</option>
            </select>
            <select>
              <option>Issue Category</option>
              <option>Orders &amp; Delivery</option>
              <option>Payment</option>
            </select>
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by Sub order ID or Ticket ID"
            />
            <small>
              Press Enter to see search results or Space to add anothor ID
            </small>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table" style={{ marginTop: 20 }}>
          <thead className="table__head">
            <tr className="winner__table">
              <th width={250} style={{ background: "#FCEAD1 !important" }}>
                Created On{" "}
              </th>
              <th width={150} style={{ background: "#FCEAD1 !important" }}>
                Ticket ID
              </th>
              <th width={250} style={{ background: "#FCEAD1 !important" }}>
                Issue
              </th>
              <th width={150} style={{ background: "#FCEAD1 !important" }}>
                Last Update
              </th>
              <th width={250} style={{ background: "#FCEAD1 !important" }}>
                Status
              </th>
              <th width={150} style={{ background: "#FCEAD1 !important" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="winner__table">
              <td colSpan={6}>
                <div className="no-tickets_0">
                  <div className="no-tickers_002">
                    <img src={`${baseUrl}front/assets/images/no-tickets.png`} />
                    <h3>No Tickets!</h3>
                    <p>We are glad that you do not have a complain.</p>
                  </div>
                </div>
              </td>
            </tr>
             
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

  )
}

export default MyTicket