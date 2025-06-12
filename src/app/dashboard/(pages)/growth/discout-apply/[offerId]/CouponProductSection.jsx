"use client"
import TableskeltonLoader from '@/app/skeleton_loader/TableskeltonLoader'
import { baseUrl, currencyCode, getPrecentageAmount, main_thumb_img_path } from '@/Http/helper'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

function CouponProductSection({coupon, selectedProduct, setSelectedProduct }) {
 
    const router = useRouter();
    const [addToSaleProduct, setAddToSaleProduct] = useState([])
    const [productList, setProductList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const [searchText, setSearchText] = useState("")
     const [tab, setTab] = useState("Select Product"); 

      useEffect(() => {
        const timeoutId = setTimeout(() => {
          setIsLoading(true);
          fetch(`/api/seller/ads/product-listing?searchText=${searchText}`, {
            method: "GET",
          })
            .then((res) => res.json())
            .then((data) => {
              setIsLoading(false);
              if (data.status) {
                setProductList(data.data?.products); 
              }
            })
            .catch((error) => {
              setIsLoading(false);
              console.error("Error:", error);
            });
        }, 500);
    
        return () => clearTimeout(timeoutId);
      }, [searchText]);

      function addTosaleProduct(e){
        e.preventDefault();
        if(selectedProduct.length <= 0){
          Swal.fire({
            icon:"error",
            text:"Please add atleast one product for sale.",
            title:"Validation Error",
          })
          return
        }

        // get product details  
         setIsLoading(true);
         fetch(`/api/seller/ads/get-seleceted-product-listing`, {
            method: "POST",
            body:JSON.stringify({selectedProduct})
          })
          .then((res) => res.json())
          .then((data) => { 
             setIsLoading(false);
            if (data.status) {
            setAddToSaleProduct(data.data.list)
            
            setTab("Product add to sale")
            }
          })
          .catch((error) => { 
              setIsLoading(false);
            console.error("Error:", error);
          });
 
      }


      function submitCouponProduct(e){
        e.preventDefault();
        setIsSubmit(true)
        fetch('/api/seller/coupons/save-coupon-products',{
          method:"POST",
          body:JSON.stringify({
            selectedProduct, 
            discount_coupon_id:coupon._id, 

          })
        }).then((respone)=>{
          if(!respone.ok){ 
            throw new Error("Server Error")
          }
          return respone.json();
        }).then((res)=>{
            setIsSubmit(false)
          if(res.status){
             Swal.fire({
                icon:"success",
                text:res.data.message,
                title:"success"
              })
              router.push('/dashboard/growth/sellora-promotions');
          }
        }).catch((error)=>{
            setIsSubmit(false)
          Swal.fire({
            icon:"error",
            text:error.message,
            title:"error"
          })

        })

      }


      

     function addAndSelectProduct(product) {
        setSelectedProduct((prevSelected) => { 
          const existsIndex = prevSelected.findIndex(
            (item) => 
              item.product_id === product._id && 
              item.variant_id === product.variant._id
          );
 
          if (existsIndex !== -1) {
            return prevSelected.filter((_, index) => index !== existsIndex);
          }  
          else {
            return [
              { product_id: product._id, variant_id: product.variant._id },
              ...prevSelected,
            ];
          }
        });
      }


  return (
      <div className="container">
        <div>
          <div className="table-responsive fixTableHead">
            <table
              className="table table-bordered table-bordered2 table-striped table-v-align-3 "
              style={{ marginTop: 20 }}
            >
             
              <thead className="table__head">
                <tr className="winner__table">
                  <th colSpan={10}>
                    <div className="row align-items-center">
                      <div className="col-lg-4">
                        <div className="table_menu">
                          <ul>
                            <li>
                              <a href="#" className={tab == "Select Product"?"active":""}
                              onClick={(e)=>e.preventDefault()}>
                                 Products
                              </a>
                            </li>
                            <li>
                              <a href="#" className={tab == "Product add to sale"?"active":""}
                              onClick={(e)=>e.preventDefault()} >Selected Products</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4">
                                  {tab == "Select Product" && (
                        <div className="searchCam position-relative">
                          <form
                            role="search"
                            className="sr-input-func col-lg-auto"
                          >
                            <a href="#">
                              <i className="fa fa-search" />
                            </a>
                            <input
                              type="text"
                              placeholder="Search product by title"
                              className="search-int form-control"
                              value={searchText}
                              onChange={(e)=>setSearchText(e.target.value)}
                            />
                          </form>
                        </div>
                                  )}
                      </div>
                    </div>
                  </th>
                </tr>
                <tr className="winner__table">
                  <th width={100} className="text-left">
                    Products
                  </th>
                  <th width={450} className="text-left">
                    &nbsp;
                  </th>
                  <th width={100} className="text-left">
                    &nbsp;
                  </th>
                  <th width={250} className="text-left">
                    Products Price
                  </th>
                  <th width={250} className="text-left">
                    Discount %
                  </th>
                  <th width={200} className="text-left">
                    After Discount
                  </th>
                </tr>
              </thead>
              <tbody>

                    {isLoading && (
                    <TableskeltonLoader totalRows={5} totalColumns={6}/>
                  )}

                {tab == "Select Product" && !isLoading && productList.length > 0  && productList.map((product, index)=>(

                <tr className="winner__table" key={index}>
                  <td>
                    <div className="d-flex">
                      <div className="product_idnf_f">
                        <img
                          src={`${baseUrl}${main_thumb_img_path}/${product.main_image}`} 
                          alt="" 
                        />
                        <img
                          src={`${baseUrl}front/assets/images/offer_paracent.jpg`} 
                          alt="" 
                        />
                        <input id="cb1" type="checkbox" name="" 
                         checked={
                            selectedProduct.length > 0 &&
                            selectedProduct.some(
                                (p) =>
                                  p.product_id === product._id && p.variant_id === product.variant?._id
                              )
                            }

                        onChange={(e)=>addAndSelectProduct(product)}/>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="prod_content">
                      <p>
                       {product?.product_name}
                      </p>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="ufld_fsdli">
                            <ul>
                              <li>SIN: {product?.variant?.sin}</li>
                              <li>Price: { currencyCode(product?.variant?.currency || "USD") } {product?.variant?.consumerSalePrice}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="ufld_fsdli">
                            <ul>
                              <li>SKU: {product?.variant?.sku}</li>
                              <li>Stock: {product?.variant?.stock}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td />
                  <td>
                    <div className="price_fds347">
                      {" "}
                      <span>{ currencyCode(product?.variant?.currency || "USD") }{product?.variant?.consumerSalePrice}</span> 
                      {/* <span>Transfer Price: $28.99</span>{" "} */}
                    </div>
                  </td>
                  <td>
                    <span className="precentege0">{coupon?.discount}%</span>
                  </td>
                  <td>
                    <div className="price_fds347">
                      {" "}
                      <span>
                        { currencyCode(product?.variant?.currency || "USD") }
                        {(() => {
                          const originalPrice = product?.variant?.consumerSalePrice || 0;
                          const discount = coupon?.discount || 0;
                          const discountAmount = originalPrice - (originalPrice * discount / 100);
                          return discountAmount.toFixed(2);
                        })()} 
                         </span> 
                      {/* <span>Transfer Price: $28.99</span>{" "} */}
                    </div>
                  </td>
                </tr>

                ))}


                {tab == "Product add to sale" && addToSaleProduct.length > 0  && addToSaleProduct.map((product, index)=>(

                <tr className="winner__table" key={index}>
                  <td>
                    <div className="d-flex">
                      <div className="product_idnf_f">
                        <img
                          src={`${baseUrl}${main_thumb_img_path}/${product.main_image}`} 
                          alt="" 
                        />
                        <img
                          src={`${baseUrl}front/assets/images/offer_paracent.jpg`} 
                          alt="" 
                        />
                        
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="prod_content">
                      <p>
                       {product?.product_name}
                      </p>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="ufld_fsdli">
                            <ul>
                              <li>SIN: {product?.variant?.sin}</li>
                              <li>Price: { currencyCode(product?.variant?.currency || "USD") } {product?.variant?.consumerSalePrice}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="ufld_fsdli">
                            <ul>
                              <li>SKU: {product?.variant?.sku}</li>
                              <li>Stock: {product?.variant?.stock}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td />
                  <td>
                    <div className="price_fds347">
                      {" "}
                      <span>{ currencyCode(product?.variant?.currency || "USD") }{product?.variant?.consumerSalePrice}</span> 
                      {/* <span>Transfer Price: $28.99</span>{" "} */}
                    </div>
                  </td>
                  <td>
                    <span className="precentege0">{coupon?.discount}%</span>
                  </td>
                  <td>
                    <div className="price_fds347">
                      {" "}
                      <span>
                        { currencyCode(product?.variant?.currency || "USD") }
                        {(() => {
                          const originalPrice = product?.variant?.consumerSalePrice || 0;
                          const discount = coupon?.discount || 0;
                          // return originalPrice - (originalPrice * discount / 100);
                          const discountAmount = originalPrice - (originalPrice * discount / 100);
                          return discountAmount.toFixed(2);
                        })()} 
                         </span> 
                      {/* <span>Transfer Price: $28.99</span>{" "} */}
                    </div>
                  </td>
                </tr>

                ))}


                 
              </tbody>
            </table>
          </div>
        </div>
        <div className="cenrt">
           
            {/* <li>
              <a href="#" data-bs-toggle="modal" data-bs-target="#add-bulk">
                Add Product in Bulk
              </a>
            </li> */}
            {tab == "Select Product" && (
              <ul> 
                <li>
                  <a href="#" onClick={(e)=>addTosaleProduct(e)}>Continue</a>
                </li>
             </ul>
            )}
             {tab == "Product add to sale" && (
              <ul>
                 <li>
                   {!isSubmit && (
                    <a href="#" onClick={(e)=>{
                    e.preventDefault();
                      setTab("Select Product")
                  }}>
                    Back
                  </a>
                   )}
                 
                </li>
                  <li>
                    {isSubmit ?(
                         <a href="#" onClick={(e)=>e.preventDefault()}>Please Wait..</a>
                    ):(
                        <a href="#" onClick={(e)=>submitCouponProduct(e)}>Submit</a>
                    )}
                    
                  </li>
               </ul>
            )}
           

       
        </div>
      </div>
  )
}

export default CouponProductSection