"use client"
import { baseUrl, currencyCode, main_thumb_img_path } from '@/Http/helper'
import { fileBasePath } from '@/Http/urlHelper'
import Script from 'next/script'
import React, { useEffect, useState } from 'react'

function VideoAdsViewFormat({product, campaign, adProduct, setAdProduct}) {
          const [isEdit, setIsEdit] = useState(false) 
          const [productDisplayName, setProductDisplayName] = useState("")
        
          useEffect(()=>{ 
            fetch('/api/seller/ads/single-product-details', {
              method:"POST",
              body:JSON.stringify({product_id:product?._id, variant_id: product?.variant?._id})
            }).then((response)=>{
              if(!response.ok){
                throw new Error("Internal Error");
              }
              return response.json()
            }).then((res)=>{
               if(res.status){
                setAdProduct(res.data.product)
                setProductDisplayName(res.data?.product?.product_name || "")
               }
            }).catch((error)=>{
              Swal.fire({
                icon:"error",
                text:error.message,
                icon:"error"
              })
            })
        
          },[product])
    

  return (
     <div className="col-12 perviewS sponsor">
              <h3 className="text-center">Preview</h3>
              <div className="row g-4">
                <div className="col-lg-6 col-12">
                  <div className="box2">
                    <div className="video-custom position-relative">
                      <div className="play-pause">
                       
                      </div>
                        {campaign.fileUrlPath ?(
                             <video
                                        className="iframeVideo"
                                        controls
                                        autoPlay={false}
                                        src={campaign.fileUrlPath}
                                        style={{ width: "100%", height: "auto" }}
                                        />
                                ):(
                                    <> 
                                    <span className="play-btn">
                                        <i />
                                            </span>
                                            <span id="pause_button" className="pause-btn">
                                        <i />
                                        </span>
                        
                                        <img src={`${fileBasePath}${main_thumb_img_path}/${adProduct?.main_image}`}
                                                                        alt='' 
                                                                        className="iframeVideo" 
                                                                        /> 
                                    </>
                                )}
                     
                     
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="mb-3 ">
                    <div className="row g-0">
                      {/* <div className="col-md-4">
                        <div className="sponsor-img2">
                          
                           <img src={`${fileBasePath}${main_thumb_img_path}/${adProduct?.main_image}`}
                                            alt='' 
                                            className="img-fluid rounded-start p-2" 
                                            /> 
                        </div>
                      </div> */}
                      <div className="col-md-8">
                        <div className="card-body">
                          <h3 className="card-title">Sponsored</h3>
                          <p className="card-text ">
                           {!isEdit && (
                          adProduct?.product_name
                             )}
                          </p>
                          <div className="width_contain">
                      {!isEdit &&(
                          <div className="icon" onClick={(e)=>{
                            setIsEdit(true);
                            setProductDisplayName(adProduct?.product_name || "")
                            }}><i className="far fa-pencil"></i>
                            </div>
                          )}
                          
                          <div id="myTextarea" className="textarea-container" style={{display:`${isEdit?"block":"none"}`}}>
                            <textarea className="textarea" placeholder="Type here..." value={productDisplayName || ""} 
                              onChange={(e)=>setProductDisplayName(e.target.value)}/> 
                              <div style={{display:"flex"}}>
                            <button type="button" className="button2" onClick={()=>{
                              setAdProduct((predData)=>({...predData, product_name:productDisplayName, 
                              }));
                              setIsEdit(false)
                              }}> Save</button>
                                <button type="button" onClick={()=>{
                                  setProductDisplayName("")
                                setIsEdit(false)
                                }}
                              >Cancel</button>
                                </div>
                          </div>
                        </div>

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
              {/* <div className="right_button">
                <ul>
                  <li>
                    <a href={`#`} onClick={(e)=>submitCampaign(e)}>Submit Campaign</a>
                  </li>
                </ul>
              </div> */}


            

            </div>
  )
}

export default VideoAdsViewFormat