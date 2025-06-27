"use client"
import TableskeltonLoader from '@/app/skeleton_loader/TableskeltonLoader';
import { baseUrl, calculateListingQuality, currencyCode, main_medium_img_path, variant_medium_img_path1, variant_medium_img_path2 } from '@/Http/helper'
import { fileBasePath } from '@/Http/urlHelper';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const Page = () => {

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
          const response = await fetch(`/api/seller/product/advertisment-recomendation?page=${1}&searchText=${searchText}&searchBy=${searchBy}`);

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

  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
   
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="navigator-breadcrumb-wrapper text-center mt--20 mb--20">
            <h3 className="orange text-center">Advertising Recommendation</h3>
            <p className="small-text">
              These high conversion listings have strong potential. Increasing
              their visibility can drive revenue growth.
            </p>
          </div>
        </div>
        {/*   <div className="col-lg-6 col-md-6">
            <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
                <ul>
                <li><a href="#"><img src="../assets/images/hand_shaking.png">Help</a> </li> 
                </ul>
            </div>
            </div> */}
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
        {/*   <div className="col-lg-6">
  <div className="right_button">
    <ul>
      <li><a href="add-catalog.html">Add Single Listing</a></li>
      <li><a href="add-catalog.html">Add Listing in Bulk</a></li>
    </ul>
  </div>
</div> */}
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
              <th width={50}>
                {/* <input type="checkbox" /> */}
              </th>
              <th width={120}>Product</th>
              <th width={300}>&nbsp;</th>
              <th width={150}>Selling Price</th>
              <th width={150}>Stock</th>
              <th width={150}>Views</th>
              <th width={150}>Clicks</th>
              <th width={150}>Impact</th>
              <th>Listing Quality</th>
              <th width={180}>Action</th>
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
              <td className="text-center font-weight">{currencyCode(product?.variant?.currency || "USD")}{product?.variant?.consumerSalePrice}</td>
              <td className="text-center font-weight">{product?.variant?.stock}</td>
              <td className="text-center font-weight">{product?.totalViews}</td>
              <td className="text-center font-weight">{product?.totalClick}</td>
              <td className="text-center">
                <div className="potential-sale">Potential Sale</div>
                <div className="potential-sale-price">$18.55</div>
              </td>
              <td className="text-center">
                <div className="good">
                  <a href="#"> {calculateListingQuality(product)?.quality}</a>
                </div>
              </td>
              <td className="text-center">
                <div className="recommended">
                  <a href="#">Recommended</a>
                </div>
                <div className="sponsored-ads">
                  <Link href="/dashboard/advertising/sponsored-ads">Sponsored Ads</Link>
                </div>
                <div className="create-campaign">
                  <Link href="/dashboard/advertising/start-advertising">Create Campaign</Link>
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