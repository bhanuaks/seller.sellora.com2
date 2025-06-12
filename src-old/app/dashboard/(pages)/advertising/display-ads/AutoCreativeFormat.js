import { baseUrl, currencyCode, main_thumb_img_path } from '@/Http/helper'
import { fileBasePath } from '@/Http/urlHelper'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

function AutoCreativeFormat({ 
            isEdit,
            adProduct,
            productDisplayName, 
            setIsEdit,
            setAdProduct,
            setProductDisplayName,
            campaign, 
          }) {

 
  

  
 


  return (
    <div className="col-12 mt--30 perviewS">
          <h3 className="text-center">Preview</h3>
          <div className="col-lg-6 box offset-lg-3">
            <div className="card mb-3">
              <div className="row g-0 align-items-center">
                <div className="col-md-4">
                 
              <img src={`${fileBasePath}${main_thumb_img_path}/${adProduct?.main_image}`}
                                        alt='' 
                                        style={{width:"100% !important"}}
                                         className="manual-campaign-img1" 
                                        />  
                
                
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">Sponsored</h3>
                    <p className="card-text ">
                      { 
                          adProduct?.product_name
                      }
                     
                     <div className="width_contain"></div>
                    </p>
                    <div className="product-status">
                      <div className="rating-stars-group">
                           <div className="rating-star">  <i className={`fa-star${adProduct?.averageRating >0 && adProduct?.averageRating < 1?"-half-alt fa-solid selected":""}  ${adProduct?.averageRating >=1?"fa-solid selected":"fa-light"}`} /> </div>
                           <div className="rating-star">  <i className={`fa-star${adProduct?.averageRating >1 && adProduct?.averageRating < 2?"-half-alt fa-solid selected":""} ${adProduct?.averageRating >=2?"fa-solid selected":"fa-light"}`} /> </div>
                           <div className="rating-star">  <i className={`fa-star${adProduct?.averageRating >2 && adProduct?.averageRating < 3?"-half-alt fa-solid selected":""} ${adProduct?.averageRating >=3?"fa-solid selected":"fa-light"}`} /> </div>
                           <div className="rating-star"> <i className={`fa-star${adProduct?.averageRating >3 && adProduct?.averageRating < 4?"-half-alt fa-solid selected":""} ${adProduct?.averageRating >=4?"fa-solid selected":"fa-light"}`} /> </div>
                           <div className="rating-star">  <i className={`fa-star${adProduct?.averageRating >4 && adProduct?.averageRating < 5?"-half-alt fa-solid selected":""} ${adProduct?.averageRating >=5?"fa-solid selected":"fa-light"}`} /> </div> 
                         
                  
                        <span>{adProduct?.averageRating?.toFixed(1)}</span>
                      </div>
                    </div>
                    <div className="price-area">
                      <span className="current">{currencyCode(adProduct?.variant?.currency || "USD")}{adProduct?.variant?.consumerSalePrice}</span>
                      <div className="previous">{currencyCode(adProduct?.variant?.currency || "USD")}{adProduct?.variant?.msrp}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           
        </div>
  )
}

export default AutoCreativeFormat