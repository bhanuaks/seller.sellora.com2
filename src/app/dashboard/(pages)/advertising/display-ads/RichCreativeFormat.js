import { baseUrl, currencyCode, main_thumb_img_path } from '@/Http/helper'
import { fileBasePath } from '@/Http/urlHelper'
import Image from 'next/image'
import React from 'react'

function RichCreativeFormat({ 
            isEdit,
            adProduct,
            productDisplayName, 
            setIsEdit,
            setAdProduct,
            setProductDisplayName,
            campaign,
          }) {
  return (
    <div className="col-12 mt--30 perviewS sponsor">
              <h3 className="text-center">Preview</h3>
              <div className="col-lg-4 box offset-lg-4">
                <div className="card p-4">
                  <h5 className="card-title">Sponsored</h5>

                  {campaign.fileUrlPath ?(
                    <img src={campaign.fileUrlPath}
                                            alt='' 
                                             className="card-img-top spon11 align-items-center" 
                                            /> 
                  ):(
                      <img src={`${fileBasePath}${main_thumb_img_path}/${adProduct?.main_image}`}
                                            alt='' 
                                             className="card-img-top spon11 align-items-center" 
                                            />  
                  )}
                   
                  <div className="card-body">
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
                    <p className="card-text">
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
                  </div>
                </div>
               
              </div>
               
            </div>
  )
}

export default RichCreativeFormat