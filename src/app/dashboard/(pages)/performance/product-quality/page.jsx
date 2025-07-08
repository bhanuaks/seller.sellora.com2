"use client"
import TableskeltonLoader from '@/app/skeleton_loader/TableskeltonLoader'
import { baseUrl, calculateListingQuality, main_medium_img_path, variant_medium_img_path1 } from '@/Http/helper'
import { fileBasePath } from '@/Http/urlHelper'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react' 


function Page() {

    
     
    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [searchBy, setSearchBy] = useState("title");//sku

  
    async function LoadProduct() {
      setIsLoading(true);
      fetch(`/api/seller/quality-products`, {
        method: "POST",
        body: JSON.stringify({
          page: currentPage,
          searchText: searchText,
          searchBy:searchBy
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
    }, [currentPage, searchText, searchBy]);
  
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
          <div className="navigator-breadcrumb-wrapper text-center mb--20">
            <h3>Product Quality</h3>
            <p>
              Discover how customers see your products with Sellora's listing
              quality insights—unlock the secrets to better engagement. Learn
              more!
            </p>
          </div>
        </div>
        <div className="col-lg-6 offset-lg-3">
          <div className="discount_weowe4_box rating-box-container">
            <div className="rating-container giveratings d-flex align-items-center">
              <div className="rating-item">
                <div className="rating-circle excellent">80-100%</div>
                <p>Excellent</p>
              </div>
              <div className="rating-item">
                <div className="rating-circle good">50-80%</div>
                <p>Good</p>
              </div>
              <div className="rating-item">
                <div className="rating-circle average">30-50%</div>
                <p>Average</p>
              </div>
              <div className="rating-item">
                <div className="rating-circle poor">10-30%</div>
                <p>Poor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="breadcome-heading">
              <form role="search" className="sr-input-func">
                <input
                  type="text"
                  placeholder="Search your product by title , sku"
                  className="search-int form-control"
                  value={searchText || ""}
                  onChange={(e)=>setSearchText(e.target.value)}
                />
                <a href="#">
                  <i className="fa fa-search" />
                </a>
              </form>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
            <select className="" value={searchBy || ""} onChange={(e)=>setSearchBy(e.target.value)}>
              <option value={"title"}>Product Name</option>
              <option value={"sku"}>SKU</option>
              <option value={"sin"}>SIN</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div>
      <div className="table-responsive fixTableHead">
        <table
          className="table table-bordered table-striped br-none"
          style={{ marginTop: 10 }}
        >
          <thead className="table__head">
            <tr className="winner__table">
              <th style={{ minWidth: 100 }} className="text-left">
                &nbsp;
              </th>
              <th width={350} className="text-left">
                Product Detail
              </th>
              <th width={200}>SKU and SIN</th>
              <th width={380}>Listing Quality</th>
              <th width={150} className="text-left">
                {" "}
              </th>
              <th style={{ minWidth: 180 }}>Action</th>
            </tr>
          </thead>
          <tbody>

 {isLoading && (
                  <TableskeltonLoader totalRows={11} totalColumns={6} />
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

            {productList && productList.length > 0 && productList.map((product, index)=>(
                 <tr className="winner__table" key={index}>
              <td> 
                 {product.varinat?.withImage == "Yes" ? (
                      <img src={`${fileBasePath}${variant_medium_img_path1}/${product.variant?.image_1}`} 
                      alt=''
                      style={{maxWidth:'150px'}}
                      /> 
                    ):(
                      <img src={`${fileBasePath}${main_medium_img_path}/${product.main_image}`} 
                      alt=''
                      style={{maxWidth:'150px'}}
                      /> 
                    )}
              </td>
              <td>
                <div className="product_details_content">
                  <p>
                    {product.product_name}
                  </p>
                </div>
              </td>
              <td>
                <div className="sku-n-sin">
                  <ul>
                    <li>
                      <span>SKU</span> <span className="colon2">:</span> {product.variant.sku}
                    </li>
                    <li>
                      <span>SIN</span> <span className="colon2">:</span>{" "}
                      <b className="gray2">{product.variant.sin}</b>
                    </li>
                  </ul>
                </div>
              </td>
              <td className="text-center">{calculateListingQuality(product)?.score}%</td>
              <td className="text-center">
                <div className={`${(()=>{
                  const score = calculateListingQuality(product)?.score || 0;
                  if(score < 30){
                    return "poor2"
                  }else if(score >= 30 && score < 50){
                      return "average2"
                  }else if(score >= 50 && score < 80){
                      return "good2"
                  }else if(score >= 80){
                      return "excellent2"
                  } 
                })() } mt--5`}>


                  <a href="#">{calculateListingQuality(product)?.quality}</a>
                </div>
              </td>
              <td className="text-center">
                <div className="see_details mt--5">
                  <Link href={`/dashboard/performance/review-product-details/${product._id}/${product.variant._id}`}>See Details</Link>
                </div>
              </td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
      
                 {/* pagination start */}
                       {pagination && pagination.totalPages>1 ?(
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

export default Page