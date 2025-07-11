"use client"
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
  const { data, error, isLoading } = useSWR(
    `${baseUrl}api/seller/review-and-rating?filter=${filter}&searchText=${searchText}&searchBy=${searchBy}`,
    fetcher
  );

   
 

  const [reviewList, setReviewList] = useState([])
 
  useEffect(()=>{ 
    if(data && data.status){ 
      setReviewList(data.data.reviews)
    }
  },[data])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      mutate( `${baseUrl}api/seller/review-and-rating?filter=${filter}&searchText=${searchText}&searchBy=${searchBy}`)
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchText, searchBy]);

  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
       
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="navigator-breadcrumb-wrapper text-center mb--20">
            <h3>Ratings and Reviews</h3>
            <p>
              Boost your offer conversion on Sellora by showcasing customer
              reviews for high-quality items
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
                  <li>Product reviews</li>
                  <li className="text-right">Brand reviews</li>
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
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
              <select className="" value={searchBy} onChange={(e)=>setSearchBy(e.target.value)}>
                <option value={"sku"}>SKU</option>
                <option value={"name"}>Product Name</option>
              </select>
            </div>
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
                      <Link href={`${baseUrl}dashboard/performance/ratings-and-reviews/All`} className={filter=="All"?"active":''}>
                        All review
                      </Link>
                    </li>
                    <li>
                      <Link href={`${baseUrl}dashboard/performance/ratings-and-reviews/Positive`}  className={filter=="Positive"?"active":''}>Positive review</Link>
                    </li>
                    <li>
                      <Link href={`${baseUrl}dashboard/performance/ratings-and-reviews/Negative`}  className={filter=="Negative"?"active":''}>Negative review</Link>
                    </li>
                  </ul>
                </div>
              </th>
            </tr>
            <tr className="winner__table">
              <th width={150} className="text-left">
                Order Id
              </th>
              <th style={{ minWidth: 100 }} className="text-left">
                &nbsp;
              </th>
              <th width={300} className="text-left">
                Product name
              </th>
              <th width={180} className="text-left">
                Posting Date
              </th>
              <th width={380} className="text-left">
                Review on Product
              </th>
              <th width={150} className="text-left">
                Product Rating
              </th>
              <th style={{ minWidth: 180 }}>Action</th>
            </tr>
          </thead>
          <tbody>

          {!isLoading && reviewList.length === 0 && (
                  <tr>
                    <td colSpan="8" style={{ textAlign: "center" }}>Order Not Found!</td>
                  </tr>
                )}


            {reviewList && reviewList.length > 0 && 
            reviewList.map((item, index)=>(
              <tr className="winner__table" key={index}>
              <td>
                <div className="order_id_01"></div>
              </td>
              <td> 
                <img src={`${fileBasePath}${main_thumb_img_path}${item.product?.main_image}`}
                alt='influencer-marketing.jpg'
                width={0}
                height={0}
                sizes='100vw' 
                style={{width:"auto", height:"auto", maxWidth:"70%"}} 
                /> 
              </td>
              <td>
                <div className="product_details_content">
                  <p>
                   {item.product?.product_name}
                  </p>
                  <ul>
                    {/* <li>
                      <span>SKU:</span> Lora s Choice Purple Toothpaste
                    </li>
                    <li>
                      <span>SIN:</span> B0D8W995465894
                    </li> */}
                  </ul>
                </div>
              </td>
              <td>{formatDate(item.createdAt)}</td>
              <td>
                <div className="review-on-product-user">{item.user?.full_name}</div>
                <div>
                  
                {item.message}
                </div>
              </td>
              <td>
                {item.star} out of 5{/* ffae00 */}
                <div className="product-rating">
                  
                <i className={`fa-star${item.star >0 && item.star < 1?"-half-alt fa-solid selected":""}  ${item.star >=1?"fa-solid selected":"fa-light"}`} />
                <i className={`fa-star${item.star >1 && item.star < 2?"-half-alt fa-solid selected":""} ${item.star >=2?"fa-solid selected":"fa-light"}`} />
                <i className={`fa-star${item.star >2 && item.star < 3?"-half-alt fa-solid selected":""} ${item.star >=3?"fa-solid selected":"fa-light"}`} />
                <i className={`fa-star${item.star >3 && item.star < 4?"-half-alt fa-solid selected":""} ${item.star >=4?"fa-solid selected":"fa-light"}`} /> 
                <i className={`fa-star${item.star >4 && item.star < 5?"-half-alt fa-solid selected":""} ${item.star >=5?"fa-solid selected":"fa-light"}`} />  
              

                 
                </div>
              </td>
              <td className="text-center">
                <div className="view-all-reviews">
                  <a href="#">View all reviews</a>
                </div>
              </td>
            </tr>
            ))}
           
          </tbody>
        </table>
      </div>
       
    </div>
  </div>
</>

  )
}

export default Page