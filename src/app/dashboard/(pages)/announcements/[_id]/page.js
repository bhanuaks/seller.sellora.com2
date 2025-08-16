"use client"
import { apiRequest } from '@/Http/apiHelper';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { use, useEffect, useState } from 'react'
import SideSearchBar from '../SideSearchBar';
import SimpleLoader from '@/app/skeleton_loader/SimpleLoader';

function page({params}) {

    const paramsData = use(params)
    const _id = paramsData._id
    const [isLoading, setIsLoading] = useState(false); 
    const [data, setData] = useState(null); 
    const router = useRouter();

       async function loadData(){
            setIsLoading(true)
            const response = await apiRequest(`/api/seller/announcements?_id=${_id}`);
            setIsLoading(false)
            if(response.status){
                setData(response.data.data);
            }
        } 


        useEffect(()=>{
            loadData()
        },[_id])


  return (
    <div className="announcement_page">
  <div className="container">
    <div className="row">
      {/* Sidebar / Filters */}
       <SideSearchBar />
      {/* Announcements list */}
      <div className="col-lg-9">
        <div id="announcementsContainer" className="row announcement-list">

            {isLoading && (
                    <div style={{display:'flex', justifyContent:'center', height:"80vh"}}> 
                        <SimpleLoader />
                    </div>
                )}


          <div className="col-12">
            <div className="ann-card d-flex flex-column flex-md-row align-items-start gap-4">
              <div className="flex-grow-1">
                <div className="align-items-start justify-content-between content_111">
                  <div>
                    <div className="announcement-title">
                      <h2>{data?.announcement}</h2>
                    </div>
                    <div className="d-flex flex-wrap gap-3 mt-2 mb-5">
                      {/* <span className="badge badge-new">Promotions</span> */}
                      {data && ( 
                      <span className="meta">
                        Published{new Date(data?.createdAt).toLocaleDateString("en-US", {
                        day:'numeric',
                        month:'short',
                        year:'numeric', 
                      })} • {new Date(data?.createdAt).toLocaleTimeString("en-US", {
                        timeZone: "Asia/Kolkata", // change to your timezone
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                            })}
                      </span>
                       )}
                    </div>
                    <div className="announcement-excerpt">
                     <span dangerouslySetInnerHTML={{ __html: data?.content }} />
                      <div className="border-top pt-5 mt-5">
                        <Link
                          href="/dashboard/announcements"
                          className="btn btn-outline-secondary btn-sm"
                        >
                          Back to announcements
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default page