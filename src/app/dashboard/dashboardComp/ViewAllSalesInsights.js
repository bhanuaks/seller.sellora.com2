

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function ViewAllSalesInsights() {

    const [reportData, setReportData] = useState([])
    const [maxSales, setMaxSales] = useState(0)
    const [totalSales, setTotalSales] = useState(0)

    async function LoadData() {
        
        const response = await fetch(`api/seller/dashboard/daily-salses-report`)
          const res = await response.json();
            if(response.ok){
                if(res.status){ 
                    setReportData(res.data.data)
                    setMaxSales(res.data.maxSale)
                    setTotalSales(res.data.totalSales)
                }
            }
    }

    useEffect(()=>{
        LoadData()
    },[])
  return (
  <div className="col-lg-4">
            <div className="dash-board-boxtop_1">
              <div className="row">
                <div className="col-lg-4">
                  <div className="sales">Sales : <span>${totalSales}</span></div>
                </div>
                <div className="col-lg-6 offset-lg-2">
                  <div className="view_all_text"><Link href={"/dashboard/growth/sellora-insights"}>view all sales insights</Link></div>
                </div>
                <div className="col-lg-12">
                  <div id="datasets-example-4">
                    <table className="charts-css column multiple show-labels data-spacing-5 datasets-spacing-1">
                      <caption>
                        Front End Developer Salary
                      </caption>
                      <tbody>
                        {reportData && reportData.length > 0 && reportData.map((data, index)=>(
                            <tr key={index}>
                            <th scope="row" className="text_2">{data.date}</th>
                            <td  style={{
                                    "--size": `calc(${(data.totalSales / maxSales).toFixed(2)})`
                                }}
                                ><span className="data"> {data.totalSales} </span></td>
                            </tr>
                        ))}
                        {/* <tr>
                          <th scope="row" className="text_2">1 Oct</th>
                          <td style={{"--size":"calc( 30 / 100 )"}}><span className="data"> 1000 </span></td>
                        </tr>
                        <tr>
                          <th scope="row" className="text_2">2 Oct</th>
                          <td style={{"--size":"calc( 60 / 100 )"}}><span className="data"> 2000 </span></td>
                        </tr><tr>
                          <th scope="row" className="text_2">3 Oct</th>
                          <td style={{"--size":"calc( 40 / 100 )"}}><span className="data"> 1300 </span></td>
                        </tr>
                        <tr>
                          <th scope="row" className="text_2"> 4 Oct</th>
                          <td style={{"--size":"calc( 40 / 100 )"}}><span className="data"> 1300 </span></td>
                        </tr>
                        <tr>
                          <th scope="row" className="text_2"> 5 Oct </th>
                          <td style={{"--size":"calc( 50 / 100 )"}}><span className="data"> 1800 </span></td>
                        </tr>
                        <tr>
                          <th scope="row" className="text_2"> 6 Oct </th>
                          <td style={{"--size":"calc( 30 / 100 )"}}><span className="data"> 1000 </span></td>
                        </tr>
                        <tr>
                          <th scope="row" className="text_2"> 7 Oct </th>
                          <td style={{"--size":"calc( 20 / 100 )"}}><span className="data"> 800 </span></td>
                        </tr>
                        <tr>
                          <th scope="row" className="text_2"> 8 Oct </th>
                          <td style={{"--size":"calc( 75 / 100 )"}}><span className="data"> 2500 </span></td>
                        </tr> */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ViewAllSalesInsights