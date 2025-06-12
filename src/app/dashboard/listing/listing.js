import { baseUrl, dateConvertInDateTime, getVariantAttribute, websiteUrl } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { variant_large_img_path1, main_thumb_img_path} from '@/Http/helper'
import { apiRequest } from '@/Http/apiHelper'
import { toast , ToastContainer } from 'react-toastify'

const Listing = ({productList, editVariant, refreshList, setRefreshList, copyVariant}) => {

  function toggleMenu(event) {
    const menu = event.target.nextElementSibling;
    
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }

    function archiveVariant(variant_id, status){
      if(!confirm(`Are you sure to ${status} this`)){
        return
      }
      $('.loaderouter').css('display', 'flex');

      fetch(`${baseUrl}api/seller/product/update-variant-status`,{
        method:"POST",
        body:JSON.stringify({
          variant_id:variant_id,
          status:status
        })
      }).then((response)=>{

        if(!response.ok){
          $('.loaderouter').css('display', 'none');
          throw new Error("Network Error")
        }
        return response.json();
      }).then((res)=>{
        // $('.loaderouter').css('display', 'none');
        setRefreshList(refreshList+1)
        console.log(res);
      })
    }



    async function deleteDraftProduct(product_id){ 
      $('.loaderouter').css('display', 'flex');
      const response = await apiRequest(`${baseUrl}api/seller/product/delete-draft-product`,"DELETE", {_id:product_id})
      $('.loaderouter').css('display', 'none'); 
      if(response.status){
        setRefreshList(refreshList+1)
        toast.success("Success! Product has been deleted successfully.")
      }
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
                <td>
                  <div className="che">
                    <p>
                     
                      <input type="checkbox" id={`active${key}`} name="" />
                       {(()=>{
                        if(product.save_as_draft == "1"){
                          return   (
                            <label htmlFor={`active${key}`} className="text-danger active222">
                                Draft
                            </label>
                          )
                        }else if(product.variants && product.variants.isProcessing == "Processing"){
                          return  <label htmlFor={`active${key}`} className="text-warning active222">
                           Processing
                        </label>

                        }else if(product.variants && (product.variants?.listingStatus || product.variants?.listingStatus == 0)){
                            return (
                                <label htmlFor={`active${key}`} className="green active222">
                                  {product.variants && product.variants.listingStatus == 1? "Published":''}  {/*Active*/}
                                  {product.variants && product.variants.listingStatus == 0? "Unpublished":''} {/*Inactive*/}
                                  {product.variants && product.variants.listingStatus == 2? "Draft":''}
                                  {product.variants && product.variants.listingStatus == 3? "Archived":''}
                                  {product.variants && product.variants.listingStatus == 4? "Deleted":''}
                                </label>
                              )
                        }else {
                          return<>sdcsd</>
                        }

                       })()}
                     
                      
                    </p>
                    <div className="date_time">
                      <ul>
                        <li> {product.variants && product.variants.createdAt?dateConvertInDateTime(product.variants.createdAt):dateConvertInDateTime(product.createdAt)}  </li>
                      
                      </ul>
                    </div>
                  </div>
                </td>
                <td>
                <div className="product_dash">
                <div> 
            <img src={`${baseUrl}${product.variants && product.variants.withImage=="Yes"?`${variant_large_img_path1}${product.variants.image_1}`:`${main_thumb_img_path}${product?.main_image}`}`}
                       alt="Product Image"
                       loading="lazy"
                       width={0}
                       height={0}
                       sizes="100vw"
                       style={{ width: 'auto', height: 'auto' }}
                       />
                       
                          </div>
                <div>
                <p>
                        {/* <a target='_blank' href={`${baseUrl}seller/p-details/${product._id}/${product._id}`} style={{listStyle:'none'}}> {product.product_name} </a>  */}
                        <a target='_blank' href={`${websiteUrl}/product-details/${product.slug}?pId=${product._id}&vId=${product.variants?._id}`} style={{listStyle:'none'}}> {product.product_name} </a> 
                      </p>
                </div>
              </div> 
                </td>


                <td>
                  {product.category  && (
                    <>
                    <span style={{fontWeight:800}}>Category : </span> {product?.category?.name}  <br />
                    <span style={{fontWeight:800}}>Brand : </span> {product?.brand?.name}  <br />
                       
                    </>
                  )}
              
             
                  
                  </td> 
                <td>
                  <div className="skusdsdfsdfs">
                    <ul>
                      {product.variants?.sku && (
                        <>
                         <li>
                        <span>SKU</span>
                        <span className="divider">:</span>{product.variants?product.variants.sku:''}
                        
                      </li>
                        </>
                      )}
                      {product.variants?.sin && (
                      <li>
                        <span>SIN</span>
                        <span className="divider">:</span>
                         {product.variants?.sin}
                      </li>
                       )}
                    </ul>
                  </div>
                </td>

                <td>
                  <div className="skusdsdfsdfs">
                    <ul>
                      {product.variants && product.variants.customAttributes && Object.entries(product.variants.customAttributes).length>0 ?Object.entries(product.variants.customAttributes).map((variantData, index)=>(
                            <li key={index} style={{display:'flex'}}>
                              <div> {variantData[0]} </div>
                              <div className="divider">:</div> &nbsp; {variantData[1]} 
                            </li> 
                      )):null}
                     
                    </ul>
                  </div>
                </td>

                <td className="text-center small-size">
                  {product.variants?.msrp && (
                    <>
                     MRP: ${product.variants.msrp}<br />
                    Consumer Sale Price: ${product.variants.consumerSalePrice}<br />
                    Business Sale Price: ${product.variants.businessSalePrice} 
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
                <th className="text-center small-size">{product.variants?product.variants.stock:''}</th>
                <td className="text-center small-size">{product?product.fulfillmentBy:''}</td>
                {/* <td className="text-center small-size">Good</td> */}
                <td className="text-center small-size">
                {product?.save_as_draft != 1 ? (
                  <Link href="#" className="edit"  onClick={(e)=>editVariant(e,product)}>
                    Edit Listing
                  </Link>
                ):(
                  <a target='_blank' href={`${baseUrl}seller/product/add-product?category=${product.category_id}&subCategory=${product.subcategory_id != null?product.subcategory_id:''}&childcategory=${product.childcategory_id !=null?product.childcategory_id:''}&brand=${product.brand_id}&product_id=${product._id}`} className="edit" >
                    Complete Listing
                  </a>
                )}
                </td>
                <td>
                  <div className="listing-container">
                    <div className="listing">
                      <button className="kebab-menu" onClick={(e)=>toggleMenu(e)}>
                        ⋮
                      </button>
                      <ul className="menu-options">
                        <li>
                          <Link href={`${baseUrl}seller/product/add-product?category=${product.category_id}&subCategory=${product.subcategory_id != null?product.subcategory_id:''}&childcategory=${product.childcategory_id !=null?product.childcategory_id:''}&brand=${product.brand_id}&product_id=${product._id}`} target="_blank">
                            Edit Catalogue
                          </Link>
                        </li>
                        {product.save_as_draft == "1" && ( 
                          <> 
                             <li onClick={()=>deleteDraftProduct(product?._id)} >Delete Product</li> 
                          </> 
                        )}
                        {product.variants && product?.save_as_draft !== "1" && (
                           product.variants && product.variants.customAttributes ?(
                          <>
                           <li onClick={(e)=>copyVariant(e,product)}> Copy Listing  </li> 
                              <>
                                <li onClick={()=>archiveVariant(product.variants._id, "Archive")} >Archive Listing</li>
                                <li onClick={()=>archiveVariant(product.variants._id, "Delete")} >Delete Listing</li>
                              </>
                          </>
                           ):""
                        )}

                       
                       
                      </ul>
                    </div>
                  </div>
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

export default Listing