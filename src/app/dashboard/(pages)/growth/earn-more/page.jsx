"use client"
import { baseUrl, main_medium_img_path, variant_medium_img_path1 } from '@/Http/helper'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import TabSection from '../TabSection'
import { fileBasePath } from '@/Http/urlHelper'
import Link from 'next/link'
import TableskeltonLoader from '@/app/skeleton_loader/TableskeltonLoader'
 

function Page() {

  
  const [status, setStatus] =  useState("All")
  const [summary, setSummary] =  useState({})
  const [filter, setFilter] =  useState(7)
  const [productList, setProductList] =  useState([])
  const [pagination, setPagination] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
    const [searchText, setSearchText] = useState("")

  useEffect(()=>{ 
    LoadData() 
  },[filter])


 async function LoadData() { 

    fetch(`/api/seller/insights/recent-business-summary?filter=${filter}`)
    .then(async (response)=>{ 
      const res = await response.json();
      if(response.ok){
        setSummary(res.data.data)
        
      }else{
        new Error(res.message || "Failed to create coupon")
      }
    })
    .catch((error)=>{
      console.log(error.message)
    })
  
 }


 
 async function LoadProduct() {

  setIsLoading(true)
    fetch(`/api/seller/insights/recent-business-summary?filter=${filter}`,{
      method:"POST",
      body:JSON.stringify({page:currentPage, searchText:searchText, status})
    })
    .then(async (response)=>{ 
      setIsLoading(false)
      const res = await response.json();
      if(response.ok){ 
        setProductList(res.data.product);
        setPagination(res.data.pagination || null)
      }else{
        new Error(res.message || "Failed to create coupon")
      }
    })
    .catch((error)=>{
       console.log(error.message)
    }) 
 }

 useEffect(()=>{
  const timeId = setTimeout(() => { 
    LoadProduct()
  }, 300);
  return ()=>clearTimeout(timeId)
 },[currentPage, searchText, status])

 function paginationFun(newPage, e){
  e.preventDefault();
  setCurrentPage(newPage)
  
 }
  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="navigator-breadcrumb-wrapper text-center mt--20 mb--20">
            <h3>Sellora Insights</h3>
            <p>
              Sellora Insights are powerful tools that provide actionable data
              to help optimize sales, manage inventory, and improve customer
              understanding. Businesses can make data-driven decisions that
              drive growth and success by leveraging these insights effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
     <TabSection />
  </div>
  <div className="container">
    <div className="">
      <div className="row">
        <div className="col-lg-6">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12">
              <div className="breadcome-heading">
                <div className="how_you_are_performing">
                  <h4 style={{ marginBottom: 0 }}>
                    Your recent business summary
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <select className="form-select2 form-select" 
              value={filter || 7}
              onChange={(e)=>setFilter(e.target.value)}>
                
                <option value={1}>Today, {new Date().toLocaleDateString("en-US",{
                  day:"2-digit",
                  month: "long"
                })}</option>

                 <option value={7}>7 Days</option>
                <option value={30}>30 Days</option>
                <option value={60}>60 Days</option>
                <option value={100}>100 Days</option>
                <option value={360}>1 Year</option>

              </select>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div>
                <h5 style={{ marginBottom: 0 }}>
                  {/* (24 Dec 22 Jan) */}
                  </h5>
              </div>
            </div>
          </div>
        </div>
         
      </div>
      <div className="bg_gray">
        <div className="row">

          {/* <div className="b1" >
            <div className="summry_box p-20 skelton-box" style={styles.skeltonBox}> 
            </div>
          </div> */}


          <div className="b1">
            <div className="summry_box p-20">
              <div className="total-gross-sales">Total Gross Sales</div>
              <div className="price02">${summary?.grossSales?.sale || 0}</div>
              <div className="unit">Unit {summary?.grossSales?.unit || 0}</div>
            </div>
          </div>
          <div className="b1">
            <div className="summry_box p-20">
              <div className="total-gross-sales">Total Cancellation</div>
              <div className="price02">${summary?.cancellation?.sale || 0}</div>
              <div className="unit">Unit {summary?.cancellation?.unit || 0}</div>
            </div>
          </div>
          <div className="b1 ">
            <div className="summry_box p-20">
              <div className="total-gross-sales">Sales After Cancellations</div>
              <div className="price02">${summary?.afterCancelData?.sale || 0}</div>
              <div className="unit">Unit {summary?.afterCancelData?.unit || 0}</div>
            </div>
          </div>
          <div className="b1">
            <div className="summry_box p-20">
              <div className="total-gross-sales">Returns</div>
              <div className="price02">${summary?.returnDa?.sale || 0}</div>
              <div className="unit">Unit {summary?.returnDa?.unit || 0}</div>
            </div>
          </div>
          <div className="b1">
            <div className="summry_box p-20">
              <div className="total-gross-sales">Net Sales</div>
              <div className="price02">${summary?.netSale?.sale || 0 }</div>
              <div className="unit">Unit {summary?.netSale?.unit || 0 }</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt--30"> 
      </div>
    </div>
  </div>
  <div className="container">
    <div className='row'>
      <div className="col-lg-9">
        <div className="">
          <h4>Sale Products</h4>
        </div>
      </div>
       <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                      <div className="breadcome-heading pb--10">
                        <form role="search" className="sr-input-func">
                          <input
                            type="text"
                            placeholder={`Search your product by name`}
                            className="search-int form-control"
                            name='search'
                            value={searchText}
                            onChange={(e)=>setSearchText(e.target.value)}
                          />
                          
                          <Link href="#">
                            <i className="fa fa-search" />
                          </Link>
                        </form>
                      </div>
                    </div>

    </div>
    <div>
      <div className="table-responsive fixTableHead">
        <table
          className="table table-bordered table-striped br-none"
          style={{ marginTop: 10 }}
        >
          <thead className="table__head">
            <tr className="winner__table">
              <th colSpan={8}>
                <div className="table_menu">
                  <ul>
                    <li>
                      <a href="#"  className={status== "All"?'active':""}
                      onClick={(e)=>{
                        e.preventDefault();
                        setStatus("All")
                      }}>All Product</a>
                    </li>
                    <li>
                      <a href="#"  className={status== "New"?'active':""}
                      onClick={(e)=>{
                        e.preventDefault();
                        setStatus("New")
                      }}
                      >New Product</a>
                    </li>
                    <li>
                      <a href="#"  className={status== "Top"?'active':""}
                       onClick={(e)=>{
                        e.preventDefault();
                        setStatus("Top")
                      }}
                      >Top Product</a>
                    </li>
                    <li >
                      <a href="#" className={status== "Non"?'active':""}
                       onClick={(e)=>{
                        e.preventDefault();
                        setStatus("Non")
                      }}
                      >Non Selling Product</a>
                    </li>
                  </ul>
                </div>
              </th>
            </tr>
            <tr className="winner__table">
              <th width={100}>Product</th>
              <th width={250}>&nbsp;</th>
              <th width={250}>Gross Sales</th>
              <th width={250}>Cancellation</th>
              <th width={200}>Sales After Cancellations</th>
              <th width={150}>Returns</th>
              <th width={150}>Net Sales</th>
              <th width={120}>Unit Sold</th>
            </tr>
          </thead>
          <tbody>

             {isLoading && (
                            <TableskeltonLoader totalRows={11} totalColumns={8} />
                        )}

                         {!isLoading && productList.length == 0 && (
                          <tr >
                                <td colSpan={8}>
                                  <div style={{
                                    width:"100%", 
                                    height:"200px", 
                                    display:"flex", 
                                    justifyContent:"center", 
                                    alignItems:'center',
                                    fontSize:'20px'

                                  }}> Data Not Found! </div>
                                </td>
                            </tr>
                        )}

  
            {!isLoading && productList && productList.length > 0 && productList.map((product, index)=>(
              <tr className="winner__table" key={index}>
              <td>
                {product.varinat?.withImage == "Yes" ? (
                  <img src={`${fileBasePath}${variant_medium_img_path1}/${product.variant?.image_1}`} 
                  alt=''
                 
                  /> 
                ):(
                  <img src={`${fileBasePath}${main_medium_img_path}/${product.main_image}`} 
                  alt=''
                 
                  /> 
                )}
             
                
              </td>
              <td>
                <div
                  className="product_details_content"
                  style={{ maxWidth: "100%" }}
                >
                  <p>
                   {product.product_name}
                  </p>
                  <ul>
                    <li>
                      <span>SKU:</span>  {product.variant.sku}
                    </li>
                    <li>
                      <span>SIN:</span>  {product.variant.sin}
                    </li>
                  </ul>
                </div>
              </td>
              <td className="text-center font-weight">
                <div className="text_content">
                  <ul>
                    <li>${product.grossSale}</li>
                    <li>{product.grossUnit} Unit</li>
                  </ul>
                </div>
              </td>
              <td className="text-center font-weight">
                <div className="text_content">
                  <ul>
                    <li>${product.cancellationSale}</li>
                    <li>{product.cancellationUnit} Unit</li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <div className="text_content">
                  <ul>
                     <li>${product.afterCancelSale}</li>
                    <li>{product.afterCancelUnit} Unit</li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <div className="text_content">
                  <ul>
                   <li>${product.returnSale}</li>
                    <li>{product.returnUnit} Unit</li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <div className="text_content">
                  <ul>
                     <li>${product.netSale}</li>
                    <li>{product.netUnit} Unit</li>
                  </ul>
                </div>
              </td>
              <td className="text-center">
                <div className="text_content">
                  <ul>
                    <li>{ (product.netUnit / (product.netUnit+product.variant.stock) * 100 ).toFixed(2)}%  </li>
                  </ul>
                </div>
              </td>
            </tr>
            ))}
           
          </tbody>
        </table>
      </div>

 {/* pagination start */}
       {!["New", "Top"].includes(status) &&  pagination && pagination.totalPages>1 ?(
                  <ul className="pagination" style={{float:'right'}} >

                    
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

const styles ={
  skeltonBox:{
        background: 'rgb(255, 233, 233)',
     height:' 85%'
  }
}

export default Page