"use client"
import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import '../../../../public/front/loader.css' 
import $ from 'jquery'
import ListingFilter from './listingFilter';
import Listing from './listing';
import { useRouter, useSearchParams } from 'next/navigation';
import { AppContext } from '@/app/contaxtData/contextData';
import VariantEditModel from './variantEditModel';
import { Suspense } from "react";
import HelpAndVideoTopSection from '@/app/seller/HelpAndVideoTop';
import ErrorListing from './ErrorListing';
import ErrorPagination from './ErrorPagination';
import TableskeltonLoader from '@/app/skeleton_loader/TableskeltonLoader';

const page = () => { 

  const ListingPage = ()=>{ 
    const sanitize = (val) => typeof val === "string" ? val.replace(/\?/g, "") : val;
    
  const {globalData, setGlobalData} = useContext(AppContext)
  const queryParam = useSearchParams()
  const pageSize = sanitize(queryParam.get('size')) || 10
  const currentPage = sanitize(queryParam.get('page')) || 1
  const type = sanitize(queryParam.get('type')) || "All"
  const router = useRouter();
  const [productList, setProductList] = useState([])
  const [pagination, setPagination] = useState(null)
  const [paginationError, setPaginationError] = useState(null)
  const [openModel, setOpenModel] = useState(false)
  const [productVariant, setProductVariant] = useState(null)
  const [refreshList, setRefreshList] = useState(1)
  const [totalData, setTotalData] = useState({})

  const [isLoading, setIsLoading] = useState(false)

  const [errorProducts, setErrorProducts] = useState([])

  
  const [thresholdData, setThresholdData] = useState([
    {
      unit: 0,
      discount: 0,
    }
  ])

 
 
  const [filterData, setFilterData] = useState({
        category: sanitize(queryParam.get("category")) || "",
        brand: queryParam.getAll("brand") || [],
        condition: sanitize(queryParam.get("condition")) || "",
        listing_quantity: sanitize(queryParam.get("listing_quantity")) || "",
        min_price: sanitize(queryParam.get("min_price")) || 0,
        max_price: sanitize(queryParam.get("max_price")) || "",
        variants: sanitize(queryParam.get("variants")) || "",
      })


  function updateFilterData(e){
    const {name, value} = e.target
    setFilterData((preData)=>({
      ...preData,
      [name]:value
    }))
  }

  const [searchText, setSearchText] = useState({search:'',searchBy:'title'})
  function updateSearchTaxt(e){
    const {name, value} = e.target
    setSearchText((preData)=>({
      ...preData,
      [name]:value
    }))
  }
  useEffect(()=>{
    if(globalData.sellor && type != "Errors"){  
      const params = new URLSearchParams(); 
      params.append("seller_id", globalData.sellor?._id);
      params.append("page", currentPage || 1);
      params.append("pageSize", pageSize || 10);
      if(searchText.search){ 
        params.append("searchText", searchText.search);
        params.append("searchBy", searchText.searchBy); 
      }

      if(type){  
        params.append("type", type);
      }

        for (const key in filterData) {
          const value = filterData[key];
          
          if (Array.isArray(value) && value.length > 0) {
            value.forEach((val) => params.append(key, val));
          } else if (value !== "" && value !== null && value !== undefined) {
            params.append(key, value);
          }
        }
 
    // $('.loaderouter').css('display',"flex") 
    setIsLoading(true)
      fetch(`${baseUrl}api/seller/product/product-listing?seller_id=${globalData.sellor._id}&page=${currentPage}&pageSize=${pageSize}&type=${type}`,{
        method:"GET", 
    }).then((response)=>{
        if(!response.ok){
           setIsLoading(false)
            // $('.loaderouter').css('display',"none") 
            throw new Error("Network Error")
        }
        return response.json();
    }).then((res)=>{ 
        if(res.status){
          setProductList(res.data.list)
          setPagination(res.data.pagination)
          setTotalData(res.data.totalData || {})
          
        } 
        // $('.loaderouter').css('display',"none") 
        setIsLoading(false)
    })
  }
  },[globalData.sellor, currentPage, pageSize,refreshList, type])


  useEffect(()=>{
    // control search time
    const timeoutId = setTimeout(() => {
      if(type != "Errors"){ 
        searchProduct()
      }
      // else{
      //   searchErrorProduct() 
      // }
    }, 300); 
    return ()=> clearTimeout(timeoutId)
  },[searchText.search, searchText.searchBy])

  function searchProduct(){
    if(globalData.sellor){  
      const params = new URLSearchParams(); 
      params.append("seller_id", globalData.sellor?._id);
      params.append("page", currentPage || 1);
      params.append("pageSize", pageSize || 10);
      if(searchText.search){ 
        params.append("searchText", searchText.search);
        params.append("searchBy", searchText.searchBy);
        
      }
      if(type){  
        params.append("type", type); 
      }

        for (const key in filterData) {
          const value = filterData[key];
          
          if (Array.isArray(value) && value.length > 0) {
            value.forEach((val) => params.append(key, val));
          } else if (value !== "" && value !== null && value !== undefined) {
            params.append(key, value); 
          }
        } 

         
          fetch(`${baseUrl}api/seller/product/product-listing?${params.toString()}`,{
              method:"GET", 
          }).then((response)=>{
              if(!response.ok){ 
                  throw new Error("Network Error")
              }
              return response.json();
          }).then((res)=>{ 
              if(res.status){
                setProductList(res.data.list)
                setPagination(res.data.pagination)
                setTotalData(res.data.totalData || {})
              }  
          })
      }
  }


  function paginationFun(page, size, e){
    e.preventDefault();
    const params = new URLSearchParams(); 
    params.append("type", type);

    for (const key in filterData) {
      const value = filterData[key];
      
      if (Array.isArray(value) && value.length > 0) {
        value.forEach((val) => params.append(key, val));
      } else if (value !== "" && value !== null && value !== undefined) {
        params.append(key, value);
      }
    }
    let link = `${baseUrl}dashboard/listing?size=${size}&page=${page}&${params}`
    router.push(link); 
  }
  function changeListSize(e){
    const { name, value } = e.target
    let link = `${baseUrl}dashboard/listing?size=${value}&page=${1}`
    router.push(link); 
  }

  function editVariant(e, product){
    e.preventDefault()
    setOpenModel(true)
    product.opration = "edit"
    setProductVariant(product);
    if(product.tresholdData && product.tresholdData.length){ 
      setThresholdData(product.tresholdData);
    }
  }

  function copyVariant(e, product){
    e.preventDefault()
    setOpenModel(true)
    product.opration = "copy"  
    setProductVariant(product); 
    if(product.tresholdData && product.tresholdData.length){ 
      setThresholdData(product.tresholdData);
    }
  }

  function closeVariantModal(){
    setOpenModel(false) 
  }


  // filter function
  function submitFilter(e){
    e.preventDefault()
    const params = new URLSearchParams(); 
    params.append("type", type);

    for (const key in filterData) {
      const value = filterData[key];
      
      if (Array.isArray(value) && value.length > 0) {
        value.forEach((val) => params.append(key, val));
      } else if (value !== "" && value !== null && value !== undefined) {
        params.append(key, value);
      }
    }
    let link = `${baseUrl}dashboard/listing?&${params}`
    router.push(link); 

    // searchProduct()
  }

  // reset filter function
  function resetFilter(e){
    e.preventDefault()
    setFilterData({
      category:"",
      brand:[],
      condition:"",
      listing_quantity:"",
      min_price:0,
      max_price:"",
      variants:""
    })
    setTimeout(() => { 
      searchProduct()
    }, 200);
  }



  // fetch error products
  
  useEffect(()=>{
    if(globalData.sellor && type == "Errors"){   
    // $('.loaderouter').css('display',"flex") 
     setIsLoading(true)
      fetch(`${baseUrl}api/seller/product/error-product-list?seller_id=${globalData.sellor._id}&page=${currentPage}&type=${type}`,{
        method:"GET", 
    }).then((response)=>{
        if(!response.ok){
          setIsLoading(false)
            // $('.loaderouter').css('display',"none") 
            throw new Error("Network Error")
        }
        return response.json();
    }).then((res)=>{ 
        if(res.status){
          setErrorProducts(res.data.list)
          setPaginationError(res.data.pagination) 
          setTotalData(res.data.totalData || {})
          
        } 
        // $('.loaderouter').css('display',"none") 
        setIsLoading(false)
    })
  }
  },[globalData.sellor, type])

  
  // search error products
  function searchErrorProduct(){
    if(globalData.sellor){  
      const params = new URLSearchParams(); 
      params.append("seller_id", globalData.sellor?._id);
      params.append("page",  1); 
      if(searchText.search){ 
        params.append("searchText", searchText.search);
        params.append("searchBy", searchText.searchBy); 
      }
       setIsLoading(true)
        params.append("type", "Errors");    
          fetch(`${baseUrl}api/seller/product/error-product-list?${params.toString()}`,{
              method:"GET", 
          }).then((response)=>{
              if(!response.ok){ 
                setIsLoading(false)
                  throw new Error("Network Error")
              }
              return response.json();
          }).then((res)=>{ 
            setIsLoading(false)
              if(res.status){
                setErrorProducts(res.data.list)
                setPaginationError(res.data.pagination) 
                // setTotalData(res.data.totalData || {})
              }  
          })
      }
  }

  
  function errorPaginationFun(page, size, e){
    e.preventDefault();
    const params = new URLSearchParams(); 
    params.append("type", type);

    for (const key in filterData) {
      const value = filterData[key];
      
      if (Array.isArray(value) && value.length > 0) {
        value.forEach((val) => params.append(key, val));
      } else if (value !== "" && value !== null && value !== undefined) {
        params.append(key, value);
      }
    }
    let link = `${baseUrl}dashboard/listing?size=${size}&page=${page}&type=${type}`
    router.push(link); 
  }
  function changeListSize(e){
    const { name, value } = e.target
    let link = `${baseUrl}dashboard/listing?size=${value}&page=${1}`
    router.push(link); 
  }

  return (
    <>
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
                   <div className="loaderouter"><div className="loader"></div></div> 
                    {/* loader end */}
    <div className="container">

      <style>
        {
          `
          .deactive_btn{
            opacity: 0.5;
          }
           
          `
        }
      </style>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="navigator-breadcrumb-wrapper">
            <h3>Manage All Listing</h3>
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
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="breadcome-heading pb--10">
                <form role="search" className="sr-input-func">
                  <input
                    type="text"
                    placeholder={`Search your product by ${searchText.searchBy}`}
                    className="search-int form-control"
                    name='search'
                    value={searchText.search}
                    onChange={(e)=>updateSearchTaxt(e)}
                  />
                  
                  <Link href="#">
                    <i className="fa fa-search" />
                  </Link>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <select className="nice-select"
              name='searchBy'
               value={searchText.searchBy}
                    onChange={(e)=>updateSearchTaxt(e)}>
                <option value={"SKU"}>SKU</option>
                <option value={"title"}>Product Title</option>
                {/* <option>SIN</option> */}
              </select>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="right_button">
            <ul>
              <li>
                <Link href="/dashboard/add-catalog?ref=single">Add Single Listing</Link>
              </li>
              <li>
                <Link href="/dashboard/add-catalog?ref=bulk">Add Listing in Bulk</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div>
      <div className="table-responsive">
        <table
          className="table table-bordered table-striped"
          style={{ marginTop: 20 }}
        >
          <thead className="table__head">
            <tr className="winner__table">
              <th colSpan={11}>
                <div className="table_menu">
                  <ul>
                    <li>
                      <Link href={`${baseUrl}dashboard/listing?type=All`} className={`${type=="All"?"active":""}`}>
                        All
                      </Link>
                    </li>
                    <li>
                      <Link href={`${baseUrl}dashboard/listing?type=Drafts`} className={`${type=="Drafts"?"active":""}`} >Drafts({totalData?.drafts}) </Link>
                    </li>
                    <li>
                      <Link href={`${baseUrl}dashboard/listing?type=Errors`} className={`${type=="Errors"?"active":""}`} >Errors({totalData?.errors}) </Link>
                    </li>
                    <li>
                      <Link href={`${baseUrl}dashboard/listing?type=Processing`} className={`${type=="Processing"?"active":""}`} >Processing({totalData?.processing}) </Link>
                    </li>
                    <li>
                      <Link href={`${baseUrl}dashboard/listing?type=Published`} className={`${type=="Published"?"active":""}`} >Published({totalData?.published}) </Link>
                    </li>
                    <li>
                      <Link href={`${baseUrl}dashboard/listing?type=Unpublished`} className={`${type=="Unpublished"?"active":""}`} >Unpublished({totalData?.unpublished})</Link>
                    </li>
                  </ul>
                </div>
              </th>
            </tr>

            {type != "Errors" && (
              <ListingFilter 
                seller={globalData.sellor} 
                resetFilter={resetFilter}
                submitFilter={submitFilter} 
                filterData={filterData}
                setFilterData={setFilterData}
                />
            )}
           
            {type != "Errors" && (
            <tr className="winner__table">
              <th width={110}>
                <div className="che">
                  <p>
                    <input type="checkbox" id="status" name="" />
                    <label htmlFor="status">Status</label>
                  </p>
                </div>
              </th>
              <th width={330}>Product Detail</th>
              <th width={300}>
                Category And Brand
                {/* <br /> */}
                {/* <span style={{fontWeight:300}}>(Length x Width x Height; Weight)</span> */}
                </th>
               
              <th width={250}>SKU and SIN </th>
              <th width={150}>Variants</th>
              <th width={150}>Price</th>
              {/* <th>
                Estimated fees <span className="per_nuit">per unit sold</span>
              </th> */}
              <th>Stock</th>
              <th>Fulfillment</th>
              {/* <th>Listing Quality</th> */}
              <th>Action</th>
              <th></th>
               
            </tr>
            )}

             {type == "Errors" && (
            <tr className="winner__table">
              <th>Excel Row</th>
              <th width={110}>
                <div className="che">
                  <p>
                    <input type="checkbox" id="status" name="" />
                    <label htmlFor="status">Status</label>
                  </p>
                </div>
              </th>

              <th style={{minWidth:'300px'}}>Errors</th>

              <th width={330}>Product Detail</th>
              <th width={330}>
                Category  
                </th> 
              <th width={250}>SKU and SIN </th>
              <th width={150}>Variants</th>
              <th width={150}>Price</th>
             
              <th>Stock</th>
              <th>Fulfillment</th> 
              <th>Action</th>
              
            </tr>
            )}


          </thead>
           {type != "Errors" && (
            <>
            {isLoading?(
                <TableskeltonLoader totalRows={11} totalColumns={11} />
            ):(
                <Listing productList={productList} editVariant={editVariant} refreshList={refreshList} setRefreshList={setRefreshList}
                    copyVariant={copyVariant}
                />
            )}
           
                
              </>
           )}

            {type == "Errors" && (

               <>
            {isLoading?(
                <TableskeltonLoader totalRows={11} totalColumns={11} />
            ):(
               <ErrorListing productList={errorProducts} refreshList={refreshList} setRefreshList={setRefreshList}
                  setErrorProducts={setErrorProducts}
              />
            )}
           
                
              </>
           
           )}
        </table>
      </div>
      <div className="fixed-table-pagination">
        <div className="row">
          <div className="col-lg-8"> </div>
          <div className="col-lg-4">
            <div className="pull-right pagination d-flex">
              {type != "Errors" && (
              <div className="result">
                <select className='nice-select' name="size" 
                value={pagination?pagination.pageSize:10}
                onChange={(e)=>changeListSize(e)}>
                  <option value={20}>20 results per page</option>
                  <option value={10}>10 results per page</option>
                </select>
              </div>
                )}
              {type != "Errors" && pagination && pagination.totalPages>1 ?(
                  <ul className="pagination">

                    
                  <li className={`page-pre ${pagination.page <= 1? "pointer-events-none opacity-50 deactive_btn":""}`}>
                    <Link href="#" onClick={(e)=>{
                      if(pagination.page > 1){ 
                        paginationFun((pagination.page-1),  pagination.pageSize, e)
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
                        <a   href="#"  onClick={(e)=>paginationFun((i+1),  pagination.pageSize, e)}>
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
                            paginationFun(parseInt(pagination.page) + 1, pagination.pageSize, e);
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

               {type == "Errors" && paginationError && paginationError.totalPages > 1 ?(
                  <ErrorPagination pagination={paginationError} errorPaginationFun={errorPaginationFun} />
                 ):null}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <VariantEditModel openModel={openModel}  closeVariantModal={closeVariantModal} productVariant={productVariant} 
  refreshList={refreshList} setRefreshList={setRefreshList}
  thresholdData={thresholdData}
  setThresholdData = {setThresholdData}
  />
</>

  )
}
return (
  <Suspense fallback={<div>Loading...</div>}> 
    <ListingPage />
</Suspense>
)
}

export default page