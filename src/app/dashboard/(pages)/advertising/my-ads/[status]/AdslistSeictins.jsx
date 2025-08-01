"use client"
import TableskeltonLoader from '@/app/skeleton_loader/TableskeltonLoader'
import { acosFun, baseUrl, fetcher, roiFun } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import useSWR, { mutate } from 'swr'
// import { elements } from '../../../../../../../public/assets-admin/assets/libs/chart.js/chart.umd'

function AdslistSeictins() {
    const router = useRouter()
    const params = useParams();
    const status = params.status;
const [searchText, setSearchText] = useState("")

 

const [adsList, setAdsList] = useState([])
const [isLoading, setIsLoading] = useState(false) 

function LoadData(loader=1){
  setIsLoading(loader?true:false)
  fetch(`/api/seller/ads/sponsored-ads-list/?status=${status || "All"}&searchText=${searchText}`)
  .then((respone)=>{return respone.json()})
  .then((res)=>{
    setIsLoading(false)
    if(res.status){ 
      if(res.data.adsList.length == 0){
        router.push('/dashboard/advertising')
      }
      setAdsList(res.data.adsList)
    }
  }).catch((error)=>{
    setIsLoading(false) 
    console.log(error);
  })
}



useEffect(() => {
  const timerId = setTimeout(() => {
   LoadData()
  }, 300);

  return () => clearTimeout(timerId);  
}, [searchText, status]);

 async function changeStatus(e, item) {
  const { value } = e.target;

  if (item.Status === value) {
    alert(`This ad is already ${value}`);
    return;
  }
  if(value=="Edit"){
    if(item.adsType == "Display"){
      router.push(`/dashboard/advertising/display-ads?update=${item._id}`);  
    }else{
      router.push(`/dashboard/advertising/sponsored-ads?update=${item._id}`); 
    }
    // alert("Working in process.")
  }
if(!["Active", "Inactive"].includes(value)){
  return
}
  const changeStatusPromise = new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(`/api/seller/ads/change-ads-status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: value, _id: item?._id })
      });

      const data = await res.json();

      if (data.status) {
        LoadData(0); // refresh data
        resolve("Success");
      } else {
        reject(new Error("Failed to update status"));
      }
    } catch (err) {
      reject(new Error(err.message || "Unknown error occurred"));
    }
  });

  toast.promise(changeStatusPromise, {
    loading: "Please wait...",
    success: () => "Status updated successfully",
    error: (err) => err.message,
  });
}


  return (
    <div className="container mt--30 campaigns-table">
          <div>
            <div className="managerF">
              <table
                className="table table-bordered table-striped"
                style={{ marginTop: 20 }}
              >
                <thead className="table__head">
                  <tr className="winner__table">
                    <th colSpan={12}>
                      <div className="table_menu">
                        <ul>
                          <li>
                            <Link href="/dashboard/advertising/my-ads/All" className={status=="All"?"active":""}>
                              All Campaigns
                            </Link>
                          </li>
                          <li>
                            <Link href="/dashboard/advertising/my-ads/Active" className={status=="Active"?"active":""} >Active Campaigns </Link>
                          </li>
                          <li>
                            <Link href="/dashboard/advertising/my-ads/Inactive" className={status=="Inactive"?"active":""} >Inactive Campaigns </Link>
                          </li>
                          <li>
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
                                  placeholder="Search Campaign "
                                  className="search-int form-control"
                                  value={searchText}
                                  onChange={(e)=>setSearchText(e.target.value)}
                                />
                              </form>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </th>
                  </tr>
                  <tr className="winner__table">
                   
                    <th>Campaign Name</th>
                    <th>Campaign Type </th>
                    <th>Budget</th>
                    {/* <th>Daily Budget</th> */}
                    <th>Budget Spend</th>
                    <th>Views</th>
                    <th>Clicks</th>
                    <th>Orders</th>
                    <th>Sales</th>
                    <th>ACOS</th>
                    <th>ROI</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading && (
                    <TableskeltonLoader totalRows={5} totalColumns={12}/>
                  )}
                    {!isLoading && adsList && adsList.length > 0 && 
                    adsList.map((adItem, keyIndex)=>(
                        <tr className="winner__table" key={keyIndex}>
                            <td className='text-center'>
                                {adItem.campaignName}
                            {/* <div className="product_dash text-center">
                               
                                <div>
                                <p>{adItem.campaignName} </p>
                                </div>
                            </div> */}
                            </td>
                            <td>
                            <div className="skusdsdfsdfs text-center">
                                <ul>
                                <li>
                                    <strong>{adItem.adsType} Ads</strong>
                                </li>
                                {adItem.campaignType && ( 
                                  <li>{adItem.campaignType} Campaign</li>
                                )}
                                {adItem.adFormat && ( 
                                  <li>{adItem.adFormat} Format</li>
                                )}
                                </ul>
                            </div>
                            </td>
                             {/* <td className="text-center small-size">$ 
                                { adItem.spendAmount || 0 } 
                            </td> */}
                            <td className="text-center small-size">$ 
                                { (adItem.dailyBudget || 0).toFixed(2) } 
                            </td>
                            <td className="text-center small-size">${(adItem.totalDeductedAmount || 0).toFixed(2)}</td>

                            <td className="text-center small-size">{adItem.repoonse?.views}</td>
                            <td className="text-center small-size">{adItem.repoonse?.clicks}</td>
                            <td className="text-center small-size">{adItem.orders?.countOrder || 0 }</td>
                            <td className="text-center small-size">${(adItem.orders?.totalSales || 0).toFixed(2) }</td> 
                            <td className="text-center small-size">{acosFun((adItem.orders?.totalSales|| 0), (adItem.totalDeductedAmount || 0)) }</td>
                            
                            <td className="text-center small-size">{roiFun((adItem.orders?.totalSales|| 0), (adItem.totalDeductedAmount || 0))}</td>

                            <td className="text-center small-size">{adItem.Status}</td>
                            <td className="text-center small-size">
                            <div className="selected">
                                <select onChange={(e)=>changeStatus( e, adItem )}>
                                <option value={""}>Action</option> 
                                <option value={"Edit"}>Edit</option>
                                {adItem.Status !== "Active" && ( 
                                  <option value={"Active"}>Active</option>
                                )}
                                 {adItem.Status !== "Inactive" && ( 
                                 <option value={"Inactive"}>Paused</option>
                                )}
                               
                                {/* <option value={"Archive"}>Archive</option> */}
                                </select>
                            </div>
                            </td>
                        </tr>


                    ))}

                    {!isLoading && (!adsList || adsList.length == 0) ?(
                      <tr>
                        <td colSpan={12}>
                          <div style={{display:'flex', justifyContent:'center'}}>
                            {status !== "All"? `No ${status} Campaigns`:""}
                            {status == "All" && (
                              <div style={{display:'flex', flexDirection:'column', textAlign:'center', gap:'10px'}}>
                              <div>No campaigns are currently active.</div>
                              {/* <a className="campaign-btn" href="/dashboard/advertising/start-advertising">Create Campaign</a> */}
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ):""}
                   
                </tbody>
              </table>
            </div>
          
          </div>
        </div>
  )
}

export default AdslistSeictins