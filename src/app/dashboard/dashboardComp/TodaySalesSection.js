"use client";
import React, { useEffect, useState } from 'react'

function TodaySalesSection() {

      const [reportData, setReportData] = useState(null)
    
        async function LoadData() { 
            const response = await fetch(`api/seller/dashboard/today-sales`);
            
            const res = await response.json();
            if(response.ok){
                if(res.status){ 
                    setReportData(res.data.data)
                }
            }
        }
    
        useEffect(()=>{
            LoadData()
        },[])

  return (
    <div className="col-lg-4">
              <div className="dash-board-boxtop_1">
                <div className="head_5">Your Dashboard <span>. Today</span></div>
                <div className="row">
                  <div className="col-lg-4 col-6">
                    <div className="dd_mm_box_dfd">
                      <div>Unit Sold</div>
                      <div className="bold">{reportData?.UnitSold || 0}</div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6">
                    <div className="dd_mm_box_dfd">
                      <div>Sales</div>
                      <div className="bold">{reportData?.sales || 0}</div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6">
                    <div className="dd_mm_box_dfd">
                      <div>Total Balance </div>
                      <div className="bold"></div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6">
                    <div className="dd_mm_box_dfd">
                      <div>New Order</div>
                      <div className="bold">{reportData?.totalOrder || 0}</div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6">
                    <div className="dd_mm_box_dfd">
                      <div>Active Listing</div>
                      <div className="bold">{reportData?.totalActiveList || 0}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default TodaySalesSection