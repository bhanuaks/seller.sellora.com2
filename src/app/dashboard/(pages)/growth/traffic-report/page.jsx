"use client";
import { baseUrl, formatNumber, main_medium_img_path, variant_medium_img_path1 } from "@/Http/helper";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TabSection from "../TabSection";
import TableskeltonLoader from "@/app/skeleton_loader/TableskeltonLoader";
import { fileBasePath } from "@/Http/urlHelper";
import Link from "next/link";

function Page() {
  const [filter, setFilter] = useState(7);
  const [summary, setSummary] = useState({});
  const [status, setStatus] = useState("All");

  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  async function LoadData() {
    fetch(`/api/seller/insights/traffic-report?filter=${filter}`)
      .then(async (response) => {
        const res = await response.json();
        if (response.ok) {
          setSummary(res.data.data);
        } else {
          new Error(res.message || "Failed to create coupon");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    LoadData();
  }, []);

  async function LoadProduct() {
    setIsLoading(true);
    fetch(`/api/seller/insights/traffic-report-products?filter=${filter}`, {
      method: "POST",
      body: JSON.stringify({
        page: currentPage,
        searchText: searchText,
        status,
      }),
    })
      .then(async (response) => {
        setIsLoading(false);
        const res = await response.json();
        if (response.ok) {
          setProductList(res.data.product);
          setPagination(res.data.pagination || null);
        } else {
          new Error(res.message || "Failed to create coupon");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    const timeId = setTimeout(() => {
      LoadProduct();
    }, 300);
    return () => clearTimeout(timeId);
  }, [currentPage, searchText, status]);

  function paginationFun(newPage, e) {
    e.preventDefault();
    setCurrentPage(newPage);
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
                  Sellora Insights are powerful tools that provide actionable
                  data to help optimize sales, manage inventory, and improve
                  customer understanding. Businesses can make data-driven
                  decisions that drive growth and success by leveraging these
                  insights effectively.
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
                  <select
                    className="form-select2 form-select"
                    value={filter || 7}
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    <option value={1}>
                      Today,{" "}
                      {new Date().toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "long",
                      })}
                    </option>
                    <option value={7}>7 Days</option>
                    <option value={30}>30 Days</option>
                    <option value={60}>60 Days</option>
                    <option value={100}>100 Days</option>
                    <option value={360}>1 Year</option>
                  </select>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div>
                    {/* <h5 style={{ marginBottom: 0 }}>(24 Dec 22 Jan)</h5> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg_gray">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="summry_box p-20">
                      <div className="total-gross-sales">Impressions</div>
                      <div className="price02">
                        {formatNumber(summary.totalViews)}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="summry_box p-20">
                      <div className="total-gross-sales">Clicks</div>
                      <div className="price02">
                        {formatNumber(summary.totalClicks)}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="summry_box p-20">
                      <div className="total-gross-sales">Cart Adds</div>
                      <div className="price02">
                        {formatNumber(summary.totalCart)}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="summry_box p-20">
                      <div className="total-gross-sales">Sales</div>
                      <div className="price02">
                        {formatNumber(summary.totalSales)} Units
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="">
              <h4>Hot Products Today</h4>
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
                          <a
                            href="#"
                            className={status == "All" ? "active" : ""}
                            onClick={(e) => {
                              e.preventDefault();
                              setStatus("All");
                            }}
                          >
                            All Product
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className={status == "New" ? "active" : ""}
                            onClick={(e) => {
                              e.preventDefault();
                              setStatus("New");
                            }}
                          >
                            New Product
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className={status == "Top" ? "active" : ""}
                            onClick={(e) => {
                              e.preventDefault();
                              setStatus("Top");
                            }}
                          >
                            Top Product
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className={status == "Non" ? "active" : ""}
                            onClick={(e) => {
                              e.preventDefault();
                              setStatus("Non");
                            }}
                          >
                            Non Selling Product
                          </a>
                        </li>
                      </ul>
                    </div>
                  </th>
                </tr>
                <tr className="winner__table">
                  <th width={100}>Product</th>
                  <th width={250}>&nbsp;</th>
                  <th width={250}>Impressions</th>
                  <th width={250}>Click Through Rate</th>
                  <th width={200}>Cart Add</th>
                  <th width={150}>Sales</th>
                  <th width={150}>Improvement Recommendation</th>
                </tr>
              </thead>
              <tbody>
                {isLoading && (
                  <TableskeltonLoader totalRows={11} totalColumns={7} />
                )}

                {!isLoading && productList.length == 0 && (
                  <tr>
                    <td colSpan={8}>
                      <div
                        style={{
                          width: "100%",
                          height: "200px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "20px",
                        }}
                      >
                        {" "}
                        Data Not Found!{" "}
                      </div>
                    </td>
                  </tr>
                )}

                {productList &&
                  productList.length > 0 &&
                  productList.map((product, index) => (
                    <tr className="winner__table" key={index}>
                      <td>
                        {product.varinat?.withImage == "Yes" ? (
                                                   <img src={`${fileBasePath}${variant_medium_img_path1}/${product.variant?.image_1}`} 
                                                   alt=''
                                                   style={{maxWidth:'100px'}}
                                                   /> 
                                                 ):(
                                                   <img src={`${fileBasePath}${main_medium_img_path}/${product.main_image}`} 
                                                   alt=''
                                                   style={{maxWidth:'100px'}}
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
                              <span>SKU:</span> {product.variant.sku}
                            </li>
                            <li>
                              <span>SIN:</span> {product.variant.sin}
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td className="text-center font-weight">
                        <div className="text_content">
                          <ul>
                            <li>{product.views}</li>
                          </ul>
                        </div>
                      </td>
                      <td className="text-center font-weight">
                        <div className="text_content">
                          <ul>
                            <li>{product.clicks}</li>
                            <li>{
                              (()=>{
                                if(product.views === 0){
                                  return "0.00"
                                }else{
                                  return ((product.clicks / product.views) * 100).toFixed(2)
                                }
                                
                              })()
                            
                             }%</li>
                          </ul>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="text_content">
                          <ul>
                            <li>{product.carts}</li>
                            <li>{
                              (()=>{
                                if(product.views === 0){
                                  return "0.00"
                                }else{
                                  return ((product.carts / product.views) * 100).toFixed(2)
                                }
                                
                              })()
                            
                             }%</li>
                          </ul>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="text_content">
                          <ul>
                            <li>{product.grossUnit}</li>
                            <li>{
                              (()=>{
                                if(product.views === 0){
                                  return "0.00"
                                }else{
                                  return ((product.grossUnit / product.views) * 100).toFixed(2)
                                }
                                
                              })()
                            
                             }%</li>
                          </ul>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="view_search_keywords">
                          <a href="#">View Search Keywords</a>
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
  );
}

export default Page;
