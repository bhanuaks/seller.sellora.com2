
"use client"
import SimpleLoader from '@/app/skeleton_loader/SimpleLoader';
import { apiRequest } from '@/Http/apiHelper';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import PaginationComponent from './Pagination';
import SideSearchBar from './SideSearchBar';

function page() {

    const [list, setList] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [isLoading, setIsLoading] = useState(true); 
    const [searchText, setSearchText] = useState("");
    const searchParams = useSearchParams();
    const router = useRouter();

    const page = Number(searchParams.get("page") || 1);
    const searchData = searchParams.get("searchData") || "";

    async function loadData(){
        setIsLoading(true)
        const response = await apiRequest(`/api/seller/announcements-list?page=${page}&searchText=${searchData}`);
        setIsLoading(false)
        if(response.status){
            setList(response.data.list)
            setPagination(response.data.pagination)
        }
    } 
    useEffect(()=>{
        loadData()
    },[searchData, page])







    function onPageChange(e, page){
        e.preventDefault();
          const query = new URLSearchParams(searchParams); 
        query.set("page", page);
        router.push(`/dashboard/announcements?${query.toString()}`)
    }

  return (
    <div className="announcement_page">
  <div className="container">
    <div className="row">
      {/* Sidebar / Filters */}
        <SideSearchBar />
      {/* Announcements list */}
      <div className="col-lg-9">
        {/* top controls */}
        <div className="mb-3 cont_new">
          <h1>
            <i
              className="fas fa-bullhorn"
              style={{ color: "#ff6600", marginRight: 8 }}
            />
            Latest Announcements
          </h1>
          <p>Important updates about products, delivery and offers</p>
        </div>
        <div id="announcementsContainer" className="row announcement-list">
          {/* Example item 1 */}
        {isLoading && (
            <div style={{display:'flex', justifyContent:'center', height:"80vh"}}> 
                <SimpleLoader />
            </div>
        )}
        {!isLoading && list?.length == 0 && (
           <div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80vh",
  flexDirection: "column"
}}>
  <div className="flex-shrink-0 text-center">
    <div className="" style={{ fontSize: "22px", fontWeight: "600", color: "#555" }}>
      <i
        className="fas fa-bullhorn"
        style={{ color: "#ff6600", marginRight: "10px", fontSize: "40px" }}
      ></i>
      No Announcements Found!
    </div>
    <p style={{ marginTop: "10px", color: "#888", fontSize: "16px" }}>
      Please check back later.
    </p>
  </div>
</div>
        )}

          {!isLoading && list?.length > 0 && list.map((item, index)=>(
             <div className="col-12" key={index}>
            <div className="ann-card d-flex flex-column flex-md-row align-items-start gap-4">
              <div className="flex-shrink-0">
                <div className="new">
                    <i className="fas fa-bullhorn" style={{color:'#ff6600', marginRight:'8px', fontSize:'40px' }}></i>
                </div>
              </div>
              <div className="flex-grow-1">
                <div className="align-items-start justify-content-between content_111">
                  <div>
                    <div className="announcement-title">
                      <h2>{item.announcement}</h2>
                    </div>
                    <div className="announcement-excerpt">
                      <p>
                       {item.short_description}
                      </p>
                    </div>
                  </div>
                  <div className="text-end date_box">
                    {/* <div className="badge badge-new">Promotions</div> */}
                    <div className="meta mt-2">
                      Published {new Date(item.createdAt).toLocaleDateString("en-US", {
                        day:'numeric',
                        month:'short',
                        year:'numeric', 
                      })}• <br />
                      <span> {new Date(item.createdAt).toLocaleTimeString("en-US", {
                        timeZone: "Asia/Kolkata", // change to your timezone
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                            })}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 d-flex gap-2">
                  {" "}
                  <Link
                    href={`/dashboard/announcements/${item._id}`}
                    className="btn btn-sm read_more"
                  >
                    Read more
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>

          ))}
          
        </div>
        {pagination && pagination.totalPages > 1 && ( 
                <PaginationComponent pagination={pagination} onPageChange={onPageChange}  />
        )}
      </div>
    </div>
  </div>
</div>

  )
}

export default page