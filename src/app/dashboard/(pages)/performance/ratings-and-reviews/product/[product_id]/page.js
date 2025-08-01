"use client";
import SimpleLoader from "@/app/skeleton_loader/SimpleLoader";
import { fetcher, main_thumb_img_path, websiteUrl } from "@/Http/helper";
import { fileBasePath } from "@/Http/urlHelper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { use, useEffect, useRef, useState } from "react";
import useSWR from "swr"; 

function page({params}) {
    const productId = use(params).product_id
 

  const router = useRouter(); 
  const [feeddback, setFeeddback] = useState(null); 
  const [product, setProduct] = useState(null);  
  const [isLoading, setIsLoading] = useState(false);  

 
 
 
 

  useEffect(() => {
    setIsLoading(true)
    fetch(`/api/seller/user-reviews?product_id=${productId}`)
      .then((response) => {
        setIsLoading(false)
        if (!response.ok) {
          throw new Error("Network Issue");
        }
        return response.json();
      })
      .then((res) => {
        if (res.status) {
          setProduct(res.data.product);
          setFeeddback(res.data.reviews);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  const circleRef = useRef();
  const inputValueRef = useRef();
  const valueLabelRef = useRef();
  function updateProgress(val) {
    val = Math.max(0, Math.min(5, parseFloat(val) || 0));
    const angle = (val / 5) * 360;
    circleRef.current.style.background = `conic-gradient(#ff6e35 ${angle}deg, #e0e0e0 0deg)`;
    valueLabelRef.current.textContent = val.toFixed(1);
  }

  useEffect(() => {
    const input = inputValueRef.current;

    if (input) {
      const handler = (e) => updateProgress(e.target.value);
      input.addEventListener("input", handler);

      // Initial set
      updateProgress(input.value);

      return () => {
        input.removeEventListener("input", handler);
      };
    }
  }, [product]);


  if(isLoading){
    return(
        <div style={{height:'80vh'}}>
            <SimpleLoader />
        </div>
    )
  }

  return (
    <>
 
     
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 ">
            
            <div className="row">
              {/* <div className="col-lg-3 col-12"> </div> */}
              <div className="col-lg-12 col-12 profile">
                <div className="row">
                  <div className="col-lg-11 mt-5">
                    <h3 style={{ textAlign: "left" }}>
                      Product
                    </h3>
                  </div>
                  <div className="col-lg-12">
                    <div className="review_outer mb_50">
                      <div className="col-lg-12">
                         {product &&  (
                            <div className="feedback-product-container"> 
                                <div><img src={`${fileBasePath}/${main_thumb_img_path}/${product.main_image}`}/></div>
                                <div><h4>{product.product_name} </h4> </div>
                            </div>
                            )}
                              {product &&  (
                                <div className="row align-items-center">
                                <div className="col-lg-3"> 
                                    <div className="circle-wrapper">
                                    <div
                                        className="circle-progress"
                                        id="circle"
                                        ref={circleRef}
                                    >
                                        <div
                                        className="value"
                                        id="value"
                                        ref={valueLabelRef}
                                        >
                                        0
                                        </div>
                                    </div>
                                    <input
                                        type="number"
                                        id="inputValue"
                                        min="0"
                                        max="5"
                                        step="0.1"
                                        value={(() => {
                                        if (product) { 
                                            return product.starAvg;
                                        } else {
                                            return 0;
                                        }
                                        })()}
                                        ref={inputValueRef}
                                        onChange={()=>console.log('object')}
                                    />
                                    </div>
                                </div>
                                <div className="col-lg-8 offset-lg-1">
                                    <div className="rating_review">
                                    <ul>
                                        
                                        <li style={{cursor:'pointer'}} >
                                        <span>Product Reviews </span>
                                        <span className="colon_3">:</span>
                                        <div className="progress2">
                                            <div
                                            className="progress-bar progress-orange"
                                            style={{
                                                width: `${
                                                (product?.starAvg || 0) * 20
                                                }%`,
                                            }}
                                            />
                                        </div>
                                        <span className="value_df">
                                            {product?.starAvg?.toFixed(1)}
                                        </span>
                                        </li>
                                    
                                    </ul>
                                    </div>
                                
                                </div>
                                </div>
                              )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             {feeddback &&  feeddback.length > 0 &&( 
                <div style={{width:'100%', display:'flex', justifyContent: 'center' }}><h4>Product Reviews</h4></div>
             )}
             
            <div className="row">
              {/* <div className="col-lg-2" /> */}
              <div className="col-lg-12">
                
                {feeddback &&
                  feeddback.length > 0 &&
                  feeddback.map((item, index) => (
                    <div className="testimonial_outer" key={index}>
                      <div className="row">
                        <div className="col-lg-2">
                          <div className="_testi_img user_image_container">
                            {" "}
                            <img src={`/front/assets/images/user.png`} />{" "}
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className="testimonial_content_2">
                            <p style={{marginBottom:"0px"}}>
                              {item.user?.full_name}   
                            </p>
                            {item.order_id && ( 
                                <div style={{float:'right'}}>Order Id: {item.order_id}</div>
                            )}
                            

                            <div className="product-status3 "  style={{marginBottom:"0px"}}>
                              <div className="rating-stars-group_sdf">
                                  <div className="rating-star_02">
                                             <i className={`fa-star${item?.star >0 && item?.star < 1?"-half-alt fa-solid selected":""}  ${item?.star >=1?"fa-solid selected":"fa-light"}`} />
                                         </div>
                                         <div className="rating-star_02">
                                             <i className={`fa-star${item?.star >1 && item?.star < 2?"-half-alt fa-solid selected":""} ${item?.star >=2?"fa-solid selected":"fa-light"}`} />
                                         </div>
                                         <div className="rating-star_02">
                                             <i className={`fa-star${item?.star >2 && item?.star < 3?"-half-alt fa-solid selected":""} ${item?.star >=3?"fa-solid selected":"fa-light"}`} />
                                         </div> 
                                         <div className="rating-star_02">
                                             <i className={`fa-star${item?.star >3 && item?.star < 4?"-half-alt fa-solid selected":""} ${item?.star >=4?"fa-solid selected":"fa-light"}`} />
                                         </div> 
                                         <div className="rating-star_02">
                                             <i className={`fa-star${item?.star >4 && item?.star < 5?"-half-alt fa-solid selected":""} ${item?.star >=5?"fa-solid selected":"fa-light"}`} /> 
                                         </div> 
                              </div>
                            </div>
                            <div className="row align-items-center"> 
                              <div className="col-lg-5 col-8">
                                <div className="testimonial_content_3"> 
                                 {item.title}<br />
                                 {item.message}
                                </div>
                                <div style={{display:"flex", justifyContent:'left', gap:'5px'}}>
                                  {item.files.length > 0 && item.files.map((imgFile, index)=>( 
                                  <img key={index} src={`${websiteUrl}/${imgFile}`}  alt=""  
                                  style={{width:'100px', border:'1px solid'}}/>
                                  ))} 

                                </div>
                              </div>
                            
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
