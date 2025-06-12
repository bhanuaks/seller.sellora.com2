
"use client"
import Link from 'next/link'
import React, { useContext, useEffect, useRef, useState } from 'react' 
import '../../../../public/front/loader.css'
import { ToastContainer, toast } from 'react-toastify';
import { AppContext } from '@/app/contaxtData/contextData';
import  $ from 'jquery'
import { baseUrl, dateConvertInDateTime } from '@/Http/helper';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from "react";
import HelpAndVideoTopSection from '@/app/seller/HelpAndVideoTop';
// import '../../../../public/front/assets/css/plugins.css'


const page = ({params}) => {

  const TrackApprovedRequest =({params})=>{

   
    const {globalData, setGlobalData } = useContext(AppContext)
    const [sellor, setSellor] = useState(null); 
    const [searchText, setSearchText] = useState(""); 
    const [brandList, setBrandList] = useState([]); 
    const router = useRouter();
    const searchParams = useSearchParams();
    const status = searchParams.get('status')
    const search = searchParams.get('search')
    const [total, setTotal] = useState({
      totalBrand:0,
      totalApproveBrand:0,
      totalPendingBrand:0
    })
    
  useEffect(()=>{ 
   
    if(globalData.sellor){
      $('.loaderouter').css('display','flex') 
      fetch(`${baseUrl}api/seller/get-brand-list?user_id=${globalData.sellor._id}&status=${status?status:''}&search=${search?search:""}`,{
        method:"GET", 
      }).then((response)=>{
          if(!response.ok){
            $('.loaderouter').css('display','none')
            throw new Error('Network Error')
          }
          return response.json();
      }).then((res)=>{
          $('.loaderouter').css('display','none') 
          if(res.status){ 
            setSellor(res.data.seller) 
            setBrandList(res.data.brandList);
            setTotal(res.data.total)
          }
      })
    }

  },[globalData.sellor, status, search])


  function searchBrand(e){
    e.preventDefault();
    const link = `${baseUrl}dashboard/track-approval-requests?status=&search=${searchText}`
    // setSearchText("")
    router.push(link) 
  }


  
  function deletdBrand(e,_id){
    e.preventDefault();
    if(globalData.sellor){
      $('.loaderouter').css('display','flex') 
      fetch(`${baseUrl}api/seller/get-brand-list`,{
        method:"DELETE", 
        body:JSON.stringify({_id:_id})
      }).then((response)=>{
          if(!response.ok){
            $('.loaderouter').css('display','none')
            throw new Error('Network Error')
          }
          return response.json();
      }).then((res)=>{
          $('.loaderouter').css('display','none') 
          if(res.status){
            toast.success("Success! Brand has been deleted successfully.")
            setBrandList(brandList.filter((item)=>item._id != _id));
          }
      })
    }
  }


  return (
    <div>
  <div className="rts-navigation-area-breadcrumb pb--10">
    
    <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          {/* loader start */}
          <div className="loaderouter">
            <div className="loader"></div>
            </div>
          {/* loader end */} 
    

    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="navigator-breadcrumb-wrapper">
            <h3>Track Approval Requests</h3>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
           <HelpAndVideoTopSection />
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="search_outer">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
              <div className="breadcome-heading">
                <form role="search" className="sr-input-func"  onSubmit={(e)=>searchBrand(e)}>
                  <input type="text" placeholder="Search your Approval by brand name, request id" className="search-int form-control" 
                    name='searchText' onChange={(e)=>setSearchText(e.target.value)} />
                  <Link href="#" onClick={(e)=>searchBrand(e)}><i className="fa fa-search" /></Link>
                </form>
              </div>
            </div>
           
          </div>
        </div>
        {/* <div className="col-lg-6">
  <div className="right_button">
    <ul>
      <li><Link href="#">Add Single Listing</Link></li>
      <li><Link href="#">Add Listing in Bulk</Link></li>
    </ul>
  </div>
</div> */}
      </div>
    </div>
  </div>
  <div className="container">
    <div>
      <div className="table-responsive">
        <table className="table table-bordered table-bordered2 table-striped" style={{"marginTop":"20px"}}>
          <thead className="table__head">
            <tr className="winner__table">
              <th colSpan={10}>
                <div className="table_menu">
                  <ul>
                    <li><Link href={`${baseUrl}dashboard/track-approval-requests?status=`} className={`${status=="all" || !status ?"active":''}`} >All Request({total.totalBrand})</Link></li>
                    <li><Link href="#">Action Required(0)</Link></li>
                    <li><Link href={`${baseUrl}dashboard/track-approval-requests?status=${2}`} className={`${status==2?"active":''}`} > Pending({total.totalPendingBrand})</Link></li>
                    <li><Link href={`${baseUrl}dashboard/track-approval-requests?status=${1}`} className={`${status==1?"active":''}`} > Approved({total.totalApproveBrand})</Link></li>
                  </ul>
                </div>
              </th>
            </tr>
            <tr className="winner__table">
              
              <th width={350} className="text-left">Request ID <br />Approval type</th>
              <th width={250} className="text-left">Brand</th>
              {/* <th width={250} className="text-left">Category</th> */}
              <th width={350} className="text-left">Remark</th>
              <th width={150}>Status</th>
              <th width={150}>Action</th>
            </tr>
          </thead>
          <tbody>
            {brandList.length>0 && brandList.map((brand, index)=>(
              <tr className="winner__table" key={index}>
              <td>
                <div className="request_ID">{(brand.request_id).toString().padStart("8",'0')} </div>
                <div className="request_ID">Brand </div>
                <div className="request_date">{dateConvertInDateTime(brand.createdAt)}</div>
              </td>
              <td>{brand.name}</td>
              {/* <td> </td> */}
              <td className="small-size">{brand.remarks}</td>
              <td className="text-center small-size">
                <div className="declined">
                  <Link href="#" className={`${brand.status==1?"green":""}${brand.status==2?"yellow":""}`}>
                    {brand.status==0?"Declined":""}
                    {brand.status==2?"Pending":""}
                    {brand.status==1?"Approved":""}
                </Link></div>
              </td>
              <td className="text-center small-size">
              {brand.status==1 && (
                <>
                <div className="reapply"><Link href={`${baseUrl}dashboard/add-catalog?ref=single`}>Add Products</Link></div>
                </>
              )}
               {brand.status==0 && (
                <>
                   <div className="reapply"><Link href="#">Reapply</Link></div>
                </>
              )}

              {brand.status==2 && (
                <>
                   <div className="reapply"><Link href="#" onClick={(e)=>deletdBrand(e,brand._id)}>Delete</Link></div>
                </>
              )}
                
              </td>
            </tr>
            ))}
            {/* <tr className="winner__table">
              <td>
                <div className="request_ID">125698754 </div>
                <div className="request_date">Sep 17, 2024, 09:34 PM</div>
              </td>
              <td> Sellera</td>
              <td>Mask</td>
              <td className="small-size">Similar Brand Name in Use | Your request has been rejected as similar Brand Name in
                use already exists; Please reapply with a registered trademark certificate instead.</td>
              <td className="text-center small-size">
                <div className="declined"><Link href="#">Declined</Link></div>
              </td>
              <td className="text-center small-size">
                <div className="reapply"><Link href="#">Reapply</Link></div>
              </td>
            </tr>
            <tr className="winner__table">
              <td>
                <div className="request_ID">125695895</div>
                <div className="request_date">Sep 17, 2024, 09:34 PM</div>
              </td>
              <td> Sellera</td>
              <td>Mask</td>
              <td className="small-size">Similar Brand Name in Use | Your request has been rejected as similar Brand Name in
                use already exists; Please reapply with a registered trademark certificate instead.</td>
              <td className="text-center small-size">
                <div className="declined"><Link href="#">Declined</Link></div>
              </td>
              <td className="text-center small-size">
                <div className="reapply"><Link href="#">Reapply</Link></div>
              </td>
            </tr>
            <tr className="winner__table">
              <td>
                <div className="request_ID">125615236</div>
                <div className="request_date">Sep 27, 2024, 09:34 PM</div>
              </td>
              <td>Aahilmart</td>
              <td>Mask</td>
              <td className="small-size">Similar Brand Name in Use | Your request has been rejected as similar Brand Name in
                use already exists; Please reapply with a registered trademark certificate instead.</td>
              <td className="text-center small-size">
                <div className="declined"><Link href="#" className="green">Approved</Link></div>
              </td>
              <td className="text-center small-size">
                <div className="reapply"><Link href="add-catalog.html">Add Products</Link></div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )

}

return (
  <Suspense fallback={<div>Loading...</div>}> 
    <TrackApprovedRequest params={params}/>
</Suspense>
)
}

export default page