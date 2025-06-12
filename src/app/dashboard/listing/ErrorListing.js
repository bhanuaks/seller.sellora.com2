import { baseUrl, dateConvertInDateTime, getVariantAttribute, slugToTitle, websiteUrl } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { variant_large_img_path1, main_thumb_img_path} from '@/Http/helper'
import { apiRequest } from '@/Http/apiHelper'
import { toast , ToastContainer } from 'react-toastify'
import Swal from 'sweetalert2'

const ErrorListing = ({productList, refreshList, setRefreshList, setErrorProducts}) => {

  const [deleteProceess, setDeleteProceess] = useState(null);
   
  
      function deleteDraftProductFun(e, _id){ 
          e.preventDefault()
           setDeleteProceess(_id)
            
                fetch(`${baseUrl}api/seller/product/error-product-list`,{
                  method:"DELETE", 
                   headers: {
                    "Content-Type": "application/json"
                  },
                  body:JSON.stringify({_id})
              }).then((response)=>{
                  if(!response.ok){
                     setDeleteProceess(null) 
                      throw new Error("Network Error")
                  }
                  return response.json();
              }).then((res)=>{ 
                     setDeleteProceess(null) 
                  if(res.status){
                    const filterData = productList.filter((item)=>item._id != _id)
                    setErrorProducts(filterData)
                     Swal.fire({
                      icon:"success",
                      text:res.data.message,
                      title:"Success"
                     })
                  }else{
                      Swal.fire({
                      icon:"error",
                      text:res.data.message,
                      title:"Error"
                     })
                  } 
              })
            
      }

  return (
    <> 
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

    <tbody>
 
        {productList.length > 0 ? 
            productList.map((product, key)=>(
                <tr className="winner__table" key={key}>
                  <td>{product?.sn}</td>
                <td>
                  <div className="che">
                    <p> 
                      <input type="checkbox" id={`active${key}`} name="" /> 
                            <label htmlFor={`active${key}`} className="text-danger active222">
                                Error
                            </label> 
                    </p>
                    <div className="date_time">
                      <ul>
                        <li> {product.variants && product.variants.createdAt?dateConvertInDateTime(product.variants.createdAt):dateConvertInDateTime(product.createdAt)}  </li>
                      
                      </ul>
                    </div>
                  </div>
                </td>


                <td>
                   <div className="skusdsdfsdfs text-danger">
                    <ul>
                      {product && product.errorsList && Object.entries(product.errorsList).length>0 ?Object.entries(product.errorsList).map((error, index)=>(
                            <li key={index} style={{display:'flex'}} className='text-danger'>
                              <div style={{fontWeight:900}}> {slugToTitle(error[0])} </div>
                              <div className="divider">:</div> &nbsp; {error[1]} 
                            </li> 
                      )):null}
                     
                    </ul>
                  </div>

                </td>



                <td>
                <div className="product_dash">
                <div> 
            <img src={product.image_1}
                       alt="Product Image"
                       loading="lazy"
                       width={0}
                       height={0}
                       sizes="100vw"
                       style={{ width: 'auto', height: 'auto' }}
                       />
                       
                          </div>
                    <div>
                      <p> {product.product_name}   </p>
                    </div>
              </div> 
                </td>


                <td>
                  {product.product_length && product.product_length_unit && (
                    <>
                    {product?.category_id?.name && (
                      <>
                      <span style={{fontWeight:800}}>Category :</span> {product?.category_id?.name}    <br />
                      </>
                    )}
                    
                     {product?.subcategory_id?.subCategoryName && (
                        <>
                         <span style={{fontWeight:800}}>Sub Category :</span> {product?.subcategory_id?.subCategoryName}    <br />
                        </>
                    )} 
                     {product?.childcategory_id?.childCategoryName && (
                          <>
                          <span style={{fontWeight:800}}>child Category :</span> {product?.childcategory_id?.childCategoryName} 
                          </>
                      )}
                   
                   {product?.brand_id?.name && (
                          <>
                          <span style={{fontWeight:800}}>Brand :</span> {product?.brand_id?.name} 
                          </>
                      )}
                        
                    </>
                  )}
              
             
                  
                  </td> 
                <td>
                  <div className="skusdsdfsdfs">
                    <ul>
                      {product?.variantData?.sku && (
                        <>
                         <li>
                        <span>SKU</span>
                        <span className="divider">:</span>{product?.variantData?product.variantData.sku:''}
                        
                      </li>
                        </>
                      )}
                      {product?.variantData?.sin && (
                      <li>
                        <span>SIN</span>
                        <span className="divider">:</span>
                         {product?.variantData?.sin}
                      </li>
                       )}
                    </ul>
                  </div>
                </td>

                <td>
                  <div className="skusdsdfsdfs">
                    <ul>
                      {product.variantData && product.variantData.customAttributes && Object.entries(product.variantData.customAttributes).length>0 ?Object.entries(product.variantData.customAttributes).map((variantData1, index)=>(
                            <li key={index} style={{display:'flex'}}>
                              <div> {variantData1[0]} </div>
                              <div className="divider">:</div> &nbsp; {variantData1[1]} 
                            </li> 
                      )):null}
                     
                    </ul>
                  </div>
                </td>

                <td className="text-center small-size">
                  {product.variantData?.msrp && (
                    <>
                     MRP: ${product.variantData.msrp}<br />
                    Consumer Sale Price: ${product.variantData.consumerSalePrice}<br />
                    Business Sale Price: ${product.variantData.businessSalePrice} 
                    </>
                  )}
                 
                </td>
                {/* <td className="text-center small-size">
                  Total fees
                  <br />
                  $10
                  <br />
                  <span className="calculate">Calculate</span>
                </td> */}
                <th className="text-center small-size">{product.variantData?product.variantData.stock:''}</th>
                <td className="text-center small-size">{product?product.fulfillmentBy:''}</td>
                {/* <td className="text-center small-size">Good</td> */}
                <td className="text-center small-size">
                  {deleteProceess == product._id ?(
                      <Link href="#" className="edit"  >
                    Deleting..
                  </Link>
                  ):(
                    <Link href="#" className="edit"  onClick={(e)=>deleteDraftProductFun(e, product._id)}>
                    Delete
                  </Link>
                  )}
                 
                
                </td>
                 
              </tr>
            ))
         :<tr>
         <td colSpan={10}>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%', fontSize:'20px' }}>
            listing Not Found!
          </div>
          </td>
         </tr>
         }
          </tbody>
          </>
  )
}

export default ErrorListing