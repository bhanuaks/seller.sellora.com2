"use client"
import TableskeltonLoader from '@/app/skeleton_loader/TableskeltonLoader'
import { formatDate, formatDateTime } from '@/Http/dateHelper'
import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function MyTicket( ) {

    const params = useParams();
    const { status } = params; 
    const [isLoading, setIsLoading] = useState(false);
    const [list, setList] = useState([]);
    const [sortBy, setSortBy] = useState("createdAt");
    const [filterBy, setFilterBy] = useState("");
    const [searchText, setSearchText] = useState("");
    const [viewMore, setViewMore] = useState("");
    
 
      async function LoadData(){  
        setIsLoading(true)
        const response =  await fetch(`/api/seller/help/save-query?status=${status}&searchText=${searchText}&sortBy=${sortBy}&filterBy=${filterBy}`); 
        const res = await response.json();
        setIsLoading(false)
        if(response.ok){
            if(res.status){
                setList(res.data.list)
            }
        } 
      }

      useEffect(()=>{
        const timdId = setTimeout(() => { 
          LoadData()
        }, 300);
        return ()=>clearTimeout(timdId)
      },[sortBy, filterBy,searchText])
    



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
            <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
              <option value={"Created"}>Created Date</option>
              <option value={"Updated"}>Last Updated</option>
            </select>
            <select value={filterBy}  onChange={(e)=>setFilterBy(e.target.value)}>
                         <option value={""} >select</option>
                         <option value={"Orders and Delivery"} >Orders &amp; Delivery</option>
                        <option value={"Returns"} >Returns</option>
                        <option value={"Listing &amp; Catalog"} >Listing &amp; Catalog</option>
                        <option value={"Payments"} >Payments</option>
                        <option value={"Advertisements"} >Advertisements</option>
                        <option value={"Promotions"} >Promotions</option>
                        <option value={"Seller Perfomance"} >Seller Perfomance</option>
                        <option value={"Account"} >Account</option>
            </select>
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by Sub order ID or Ticket ID"
              value={searchText}
              onChange={(e)=>setSearchText(e.target.value)}
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
              <th width={250} style={{ background: "#FCEAD1 !important" }}>
                Description of issue
              </th>
                
              
              <th width={150} style={{ background: "#FCEAD1 !important" }}>
                Last Update
              </th>
              <th width={250} style={{ background: "#FCEAD1 !important" }}>
                Status
              </th>
              {/* <th width={150} style={{ background: "#FCEAD1 !important" }}>
                Actions
              </th> */}
            </tr>
          </thead>
          <tbody>
           
            {list.length > 0 && list.map((item, index)=>(
               <tr className="winner__table" key={index}>
              <td>{formatDateTime(item.createdAt)} </td>
              <td>{item.ticketId}  </td>
             
              <td> <strong>Issue :</strong> {item.issueCategories} <br />
                  <strong> Subject :</strong> {item.subject}
              </td>
              <td> {item.description.slice(0,viewMore == item._id?2000:50)}
                {viewMore !== item._id && item.description.length > 50 && ( 
                <div class="view-all" onClick={()=>setViewMore(item._id)}><span style={{fontSize:'10px'}}>View more</span></div>
                )}
                 {viewMore == item._id && item.description.length > 50 && ( 
                <div class="view-all" onClick={()=>setViewMore()}><span style={{fontSize:'10px'}}>View Less</span></div>
                )}
                </td> 
              <td> {formatDateTime(item.updatedAt)}</td> 
              <td>
                <span style={{ padding:' 8px 30px',
                  border: '1px solid #FC7035',
                  borderRadius: '4px'}}>{item.status}</span>
                 </td>
              {/* <td>&nbsp; </td> */}
            </tr>
            ))}

             {!isLoading && list.length == 0 && (

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

             )}
        
        {isLoading && (
          <TableskeltonLoader totalRows={10} totalColumns={7} />
        )}
             
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

  )
}

export default MyTicket