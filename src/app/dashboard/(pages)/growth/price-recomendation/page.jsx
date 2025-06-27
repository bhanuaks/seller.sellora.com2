"use client";
import TableskeltonLoader from '@/app/skeleton_loader/TableskeltonLoader';
import { baseUrl, calculateListingQuality, currencyCode, impactPriceAndPercentage, main_medium_img_path, variant_medium_img_path1 } from '@/Http/helper'
import { fileBasePath } from '@/Http/urlHelper';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

function Page() {

    const [searchText, setSearchText] = useState("");
      const [searchBy, setSearchBy] = useState("sku");
      const [isLoading, setIsLoading] = useState(false);
      const [list, setList] = useState([]);
  
  
         useEffect(() => { 
            const timeoutId = setTimeout(() => { 
             LoadProducts();
            }, 300); 
            return () => clearTimeout(timeoutId); 
          }, [searchText, searchBy]);
      
        
          const LoadProducts = async() => { 
            setIsLoading(true)
            const response = await fetch(`/api/seller/product/pice-recomendation?page=${1}&searchText=${searchText}&searchBy=${searchBy}`);
  
            setIsLoading(false) 
            const res = await response.json();
            if(res.status){
              setList(res.data.list);
            }else{
              Swal.fire({
                icon:"error",
                text:res.data.message,
                title:"error"
              })
            } 
          }
  


const applyImpactPrice = async (e, productData) => {
  e.preventDefault();

  const result = await Swal.fire({
    icon: "warning",
    title: "Warning",
    text: "Are you sure you want to apply the impact price? After applying it, the sale price will be replaced by the impact price. Please confirm.",
    confirmButtonText: "Confirm",
    showCancelButton: true,
  });

  if (result.isConfirmed) {
    const { impactPrice } = impactPriceAndPercentage(
      productData.variant.consumerSalePrice,
      productData.totalViews,
      productData.totalClick
    );

    const formData = {
      product_id: productData._id,
      variant_id: productData.variant._id,
      impactPrice: Number(impactPrice?.toFixed(0)),
    };

    try {
      const response = await fetch('/api/seller/product/pice-recomendation/change-recomended-price', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const res = await response.json();

      if (res.status) {
        await Swal.fire({
          title: "Success",
          icon: "success",
          text: res.data.message || "Impact price applied successfully!",
        });
      } else {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: res.data.message || "Something went wrong!",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "Network or server error occurred.",
      });
    }
  }
};


  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="navigator-breadcrumb-wrapper text-center mt--20 mb--20">
            <h3 className="orange text-center">Price Recommendation</h3>
            <p className="small-text">
              High traffic but low conversions? Optimize content and pricing to
              boost sales!
            </p>
          </div>
        </div>
       
      </div>
    </div>
  </div>
  <div className="container">
    <div className="">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="breadcome-heading pb--10">
                <form role="search" className="sr-input-func">
                  <input
                    type="text"
                    placeholder={`Search your product by ${searchBy}`}
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
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
             <select  onChange={(e)=>setSearchBy(e.target.value)} value={searchBy}>
                    <option value={"sku"}>SKU</option>
                    <option value={"name"}>Product name</option>
                  </select>
            </div>
          </div>
        </div>
        <div className="clear-fix" />
        <div className="col-lg-6 mt--20 mb--10">
          <div className="all-recommendation">All Recommendation</div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div>
      <div className="table-responsive fixTableHead">
        <table
          className="table table-bordered table-striped br-none "
          style={{ marginTop: 10 }}
        >
          <thead className="table__head">
            <tr className="winner__table">
              <th width={50}>
                {/* <input type="checkbox" /> */}
              </th>
              <th width={120}>Product</th>
              <th width={300}>&nbsp;</th>
              <th width={150}>Impact Price</th>
              <th width={150}>Stock</th>
              <th width={150}>Views</th>
              <th width={150}>Clicks</th>
              <th width={150}>Impact</th>
              <th>Listing Quality</th>
              <th width={220}>Action</th>
            </tr>
          </thead>
          <tbody>

             {isLoading && (
              <TableskeltonLoader totalRows={7} totalColumns={10} />
            )}

             {!isLoading && list.length === 0 && (
              <tr>
                <td colSpan={10}>
                <div style={{width:"100%", height:"200px", display:"flex", justifyContent:"center",alignItems:"center"}}> Product Not found!</div>

                </td>
              </tr>
            )}
            {!isLoading && list.length > 0  && list.map((product, index)=>(
               <tr className="winner__table" key={index}>
              <td className="text-center">
                {/* <input type="checkbox" /> */}
              </td>
              <td>
                {product.variant.withImage == "Yes"?(
                    <img src={`${fileBasePath}/${variant_medium_img_path1}/${product.variant.image_1}`} 
                    alt='preview01.jpg'
                />
                ):(
                    <img src={`${fileBasePath}/${main_medium_img_path}/${product.main_image}`} 
                    alt='preview01.jpg'
                />
                )}
                
                 
              </td>
              <td>
                <div className="product_details_content">
                  <p>
                  {product.product_name}
                  </p>
                  <ul>
                    <li>
                      <span>SKU:</span> {product.variant?.sku}
                    </li>
                    <li>
                      <span>SIN:</span> {product.variant?.sin}
                    </li>
                  </ul>
                </div>
              </td>
              <td className="text-center font-weight">{currencyCode(product?.variant?.currency || "USD")}
                {impactPriceAndPercentage(product.variant.consumerSalePrice, product.totalViews, product.totalClick)?.impactPrice?.toFixed(0)}
                 
                </td>
              <td className="text-center font-weight">{product?.variant?.stock}</td>
              <td className="text-center font-weight">{product?.totalViews}</td>
              <td className="text-center font-weight">{product?.totalClick}</td>
              <td className="text-center">
                <div className="potential-sale-price">
                  <span>  {impactPriceAndPercentage(product.variant.consumerSalePrice, product.totalViews, product.totalClick)?.impactPercentage?.toFixed(0)}%</span>
                  
                  <img src={`${baseUrl}front/assets/images/top_arrow.jpg`}  
                        alt=''
                        />
                </div>
              </td>
              <td className="text-center">
                <div className="good">
                  <a href="#"> 
                    {calculateListingQuality(product)?.quality}
                  </a>
                </div>
              </td>
              <td className="text-center">
               
               
                <div className="create-campaign">
                  <Link href="#"  onClick={(e)=>applyImpactPrice(e, product)}>Apply</Link>
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