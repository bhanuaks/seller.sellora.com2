"use client"
import TableskeltonLoader from '@/app/skeleton_loader/TableskeltonLoader'
import { apiRequest } from '@/Http/apiHelper'
import { formatDate } from '@/Http/dateHelper'
import { baseUrl, fetcher, main_thumb_img_path } from '@/Http/helper'
import { fileBasePath } from '@/Http/urlHelper'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import useSWR, { mutate } from 'swr'

function Page() {
  const params = useParams();
  const filter = params.condition;
  const [searchText, setSearchText] = useState("");
    const [searchBy, setSearchBy] = useState("name");
    const [pagination, setPagination] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    
  const { data, error, isLoading } = useSWR(
    `/api/seller/my-feedback?filter=${filter}&searchText=${searchText}&searchBy=${searchBy}&page=${currentPage}`,
    fetcher
  );

   
 

  const [reviewList, setReviewList] = useState([])
 
  useEffect(()=>{ 
    if(data && data.status){ 
      setReviewList(data.data.feedback)
      setPagination(data.data.pagination)
    }
  },[data])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      mutate( `/api/seller/my-feedback?filter=${filter}&searchText=${searchText}&searchBy=${searchBy}&page=${1}`)
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchText, searchBy]);


    function paginationFun(newPage, e){
     e.preventDefault();
     setCurrentPage(newPage) 
      mutate( `/api/seller/my-feedback?filter=${filter}&searchText=${searchText}&searchBy=${searchBy}&page=${newPage}`)
    }
  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
       
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="navigator-breadcrumb-wrapper text-center mb--20">
            <h3>Feedback</h3>
            <p>
              Boost your offer conversion on Sellora by showcasing customer
              Feedback for high-quality items
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="search_outer">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="list_634">
                <ul>
                  <li>Product Feedback</li>
                  {/* <li className="text-right">Brand reviews</li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="breadcome-heading">
                <form role="search" className="sr-input-func">
                  <input
                    type="text"
                    placeholder="Search your product by name, sku"
                    className="search-int form-control"
                    value={searchText}
                    onChange={(e)=>setSearchText(e.target.value)}
                  />
                  <a href="#">
                    <i className="fa fa-search" />
                  </a>
                </form>
              </div>
            </div>
            {/* <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
              <select className="" value={searchBy} onChange={(e)=>setSearchBy(e.target.value)}>
                <option value={"sku"}>SKU</option>
                <option value={"name"}>Product Name</option>
              </select>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div>
      <div className="table-responsive">
        <table
          className="table table-bordered table-striped br-none"
          style={{ marginTop: 10 }}
        >
          <thead className="table__head">
            <tr className="winner__table">
              <th colSpan={15}>
                
                <div className="table_menu">
                  <ul>
                    <li>
                      <Link href={`/dashboard/performance/seller-feedback/All`} className={filter=="All"?"active":''}>
                        All 
                      </Link>
                    </li>
                    <li>
                      <Link href={`/dashboard/performance/seller-feedback/Positive`}  className={filter=="Positive"?"active":''}>Positive Feedback</Link>
                    </li>
                    <li>
                      <Link href={`/dashboard/performance/seller-feedback/Negative`}  className={filter=="Negative"?"active":''}>Negative Feedback</Link>
                    </li>
                  </ul>
                </div>
              </th>
            </tr>
            <tr className="winner__table">
               
              <th   className="text-left">
                &nbsp;
              </th>
              <th width={300} className="text-left">
                Product name
              </th> 
              <th width={150} className="text-left">
                Product Feedback
              </th>
              <th style={{ minWidth: 180 }}>Action</th>
            </tr>
          </thead>
          <tbody>
          {isLoading && (
            <TableskeltonLoader totalRows={7}  totalColumns={4} />
          ) }
          {!isLoading && reviewList.length === 0 && (
                  <tr>
                    <td colSpan="8" >
                      <div style={{ textAlign: "center", height:'300px', display:'flex', justifyContent:'center',
                      alignItems:"center",
                      fontSize:"20px"
                    }}>Record Not Found!</div></td>
                  </tr>
                )}


            {!isLoading && reviewList && reviewList.length > 0 && 
            reviewList.map((item, index)=>(
              <tr className="winner__table" key={index}>
              
              <td> 
                <div>

                <img src={`${fileBasePath}${main_thumb_img_path}${item.main_image}`}
                alt='' 
                style={{width:'100px'}}
                /> 
                </div>
              </td>
              <td>
                <div className="product_details_content">
                  <p>
                   {item.product_name}
                  </p>
                  
                </div>
              </td>
             
              <td>
                {item.starAvg} out of 5{/* ffae00 */}
                <div className="product-rating">
                  
                <i className={`fa-star${item.starAvg >0 && item.starAvg < 1?"-half-alt fa-solid selected":""}  ${item.starAvg >=1?"fa-solid selected":"fa-light"}`} />
                <i className={`fa-star${item.starAvg >1 && item.starAvg < 2?"-half-alt fa-solid selected":""} ${item.starAvg >=2?"fa-solid selected":"fa-light"}`} />
                <i className={`fa-star${item.starAvg >2 && item.starAvg < 3?"-half-alt fa-solid selected":""} ${item.starAvg >=3?"fa-solid selected":"fa-light"}`} />
                <i className={`fa-star${item.starAvg >3 && item.starAvg < 4?"-half-alt fa-solid selected":""} ${item.starAvg >=4?"fa-solid selected":"fa-light"}`} /> 
                <i className={`fa-star${item.starAvg >4 && item.starAvg < 5?"-half-alt fa-solid selected":""} ${item.starAvg >=5?"fa-solid selected":"fa-light"}`} />  
              

                 
                </div>
              </td>
              <td className="text-center">
                <div className="view-all-reviews">
                  <Link href={`/dashboard/performance/seller-feedback/product/${item._id}`}>View all Feedback</Link>
                </div>
              </td>
            </tr>
            ))}
           
          </tbody>
        </table>
      </div>
       
       
        {/* pagination start */}
                                  { pagination && pagination.totalPages>1 ?(
                                             <ul className="pagination" style={{float:'right'}}>
                                             <li className={`page-pre ${pagination.page <= 1? "pointer-events-none opacity-50 deactive_btn":""}`}>
                                               <Link href="#" onClick={(e)=>{
                                                 if(pagination.page > 1){ 
                                                   paginationFun((pagination.page-1), e)
                                                 }else{
                                                   e.preventDefault();
                                                 }
                                               }
                                                 }>
                                                 <i className="fa-solid fa-arrow-left" />
                                               </Link>
                                             </li>
                                              
                           
                                       {Array.from({length:pagination.totalPages}, (_, i)=>{
                                           if (Math.abs(pagination.page - (i + 1)) <= 3) {
                                             return ( 
                                               <li className={`page-number current  ${i} ${pagination.page== (i+1)?'active':''}`} key={i} >
                                                   <a   href="#"  onClick={(e)=>paginationFun((i+1), e)}>
                                                     {i + 1} 
                                                   </a>
                                               </li> 
                                             );
                                           } 
                                           return null; 
                                          })} 
                                             
                                             <li
                                                 className={`page-next ${pagination.page == pagination.totalPages ? "pointer-events-none opacity-10 deactive_btn" : ""}`}
                                               >
                                                 <Link
                                                   href="#"
                                                   onClick={(e) => {
                                                     if (pagination.page < pagination.totalPages) {
                                                       paginationFun(parseInt(pagination.page) + 1, e);
                                                     } else {
                                                       e.preventDefault();
                                                     }
                                                   }}
                                                 >
                                                   <i className="fa-solid fa-arrow-right" />
                                                 </Link>
                                               </li>
                                             </ul>
                                         ):null}
                           
                                         {/* pagination end */}

    </div>
  </div>
</>

  )
}

export default Page