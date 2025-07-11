import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

function WhatOurCustomersSay() {

    const [feeddback, setFeeddback] = useState(null)
    const [reviewData, setReviewData] = useState(null)


    useEffect(()=>{
        fetch('/api/seller/review-and-feedback')
        .then((response)=>{
            if(!response.ok){
                throw new Error("Network Issue")
            }
            return response.json();
        })
        .then((res)=>{
            console.log({res});
            if(res.status){
                setReviewData(res.data.review);
                setFeeddback(res.data.feedback);
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])


    
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
            }, [feeddback, reviewData]);

  return (
    <div className="review_outer">
       
                      <div className="col-lg-9 offset-lg-1">
                        <div className="row">
                          <div className="col-lg-3">
                             <div className="circle-wrapper">
                            <div className="circle-progress" id="circle" ref={circleRef}>
                                <div className="value" id="value" ref={valueLabelRef}>
                                  0
                                    </div>
                            </div>
                            <input type="number" id="inputValue" min="0" max="5" step="0.1" value= {(()=>{
                                        if(feeddback && reviewData){
                                            const totalBothStart = feeddback.totalReview + reviewData.totalReview
                                            const totalCount = feeddback.count + reviewData.count
                                            const avgrage = totalBothStart/totalCount
                                            return avgrage
                                        }else{
                                            return 0
                                        }
                                   })()}
                            ref={inputValueRef} />
                            </div>

                          </div>
                          <div className="col-lg-8 offset-lg-1">
                            <div className="rating_review">
                              <ul>
                                <li>
                                  <span>Vendor Support </span>
                                  <span className="colon_3">:</span>
                                  <div className="product-status2">
                                    <div className="rating-stars-group"> 
                                         <div className="rating-star">
                                             <i className={`fa-star${feeddback?.avgStar >0 && feeddback?.avgStar < 1?"-half-alt fa-solid selected":""}  ${feeddback?.avgStar >=1?"fa-solid selected":"fa-light"}`} />
                                         </div>
                                         <div className="rating-star">
                                             <i className={`fa-star${feeddback?.avgStar >1 && feeddback?.avgStar < 2?"-half-alt fa-solid selected":""} ${feeddback?.avgStar >=2?"fa-solid selected":"fa-light"}`} />
                                         </div>
                                         <div className="rating-star">
                                             <i className={`fa-star${feeddback?.avgStar >2 && feeddback?.avgStar < 3?"-half-alt fa-solid selected":""} ${feeddback?.avgStar >=3?"fa-solid selected":"fa-light"}`} />
                                         </div>
                                         <div className="rating-star">
                                             <i className={`fa-star${feeddback?.avgStar >3 && feeddback?.avgStar < 4?"-half-alt fa-solid selected":""} ${feeddback?.avgStar >=4?"fa-solid selected":"fa-light"}`} />
                                         </div> 
                                         <div className="rating-star">
                                             <i className={`fa-star${feeddback?.avgStar >4 && feeddback?.avgStar < 5?"-half-alt fa-solid selected":""} ${feeddback?.avgStar >=5?"fa-solid selected":"fa-light"}`} /> 
                                         </div> 

                                      
                                      <span className="value_df">{feeddback?.avgStar?.toFixed(1)}</span>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <span>Product Reviews </span>
                                  <span className="colon_3">:</span>
                                  <div className="product-status2">
                                    <div className="rating-stars-group">

                                          <div className="rating-star">
                                             <i className={`fa-star${reviewData?.avgStar >0 && reviewData?.avgStar < 1?"-half-alt fa-solid selected":""}  ${reviewData?.avgStar >=1?"fa-solid selected":"fa-light"}`} />
                                         </div>
                                         <div className="rating-star">
                                             <i className={`fa-star${reviewData?.avgStar >1 && reviewData?.avgStar < 2?"-half-alt fa-solid selected":""} ${reviewData?.avgStar >=2?"fa-solid selected":"fa-light"}`} />
                                         </div>
                                         <div className="rating-star">
                                             <i className={`fa-star${reviewData?.avgStar >2 && reviewData?.avgStar < 3?"-half-alt fa-solid selected":""} ${reviewData?.avgStar >=3?"fa-solid selected":"fa-light"}`} />
                                         </div>
                                         <div className="rating-star">
                                             <i className={`fa-star${reviewData?.avgStar >3 && reviewData?.avgStar < 4?"-half-alt fa-solid selected":""} ${reviewData?.avgStar >=4?"fa-solid selected":"fa-light"}`} />
                                         </div> 
                                         <div className="rating-star">
                                             <i className={`fa-star${reviewData?.avgStar >4 && reviewData?.avgStar < 5?"-half-alt fa-solid selected":""} ${reviewData?.avgStar >=5?"fa-solid selected":"fa-light"}`} /> 
                                         </div> 

                                      
                                      <span className="value_df">{reviewData?.avgStar?.toFixed(1)}</span>
                                    </div>
                                  </div>
                                </li>
                                {/* <li>
                                  <span>Quality Assurance </span>
                                  <span className="colon_3">:</span>
                                  <div className="product-status2">
                                    <div className="rating-stars-group">
                                      <div className="rating-star">
                                        <i className="fas fa-star" />
                                      </div>
                                      <div className="rating-star">
                                        <i className="fas fa-star" />
                                      </div>
                                      <div className="rating-star">
                                        <i className="fas fa-star" />
                                      </div>
                                      <div className="rating-star">
                                        <i className="fas fa-star" />
                                      </div>
                                      <div className="rating-star">
                                        <i className="fas fa-star-half-alt" />
                                      </div>
                                      <span className="value_df">4.7</span>
                                    </div>
                                  </div>
                                </li> */}
                              </ul>
                            </div>
                            <Link
                              href="/dashboard/my-store/review-rating"
                              className="view_all mt--20"
                            >
                              View All Feedback
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
  )
}

export default WhatOurCustomersSay