import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import React from 'react'

function RichCreativeFormat() {
  return (
    <div className="col-12 mt--30 perviewS sponsor">
              <h3 className="text-center">Preview</h3>
              <div className="col-lg-4 box offset-lg-4">
                <div className="card p-4">
                  <h5 className="card-title">Sponsored</h5>
                 
                   <img src={`${baseUrl}front/assets/images/preview01.jpg`}
                                            alt='' 
                                             className="card-img-top spon1 align-items-center" 
                                            />  
                  <div className="card-body">
                    <div className="product-status">
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
                          <i className="far fa-star" />
                        </div>
                        <span>4.6</span>
                      </div>
                    </div>
                    <div className="price-area">
                      <span className="current">$24.99</span>
                      <div className="previous">$28.99</div>
                    </div>
                    <p className="card-text">
                      Lora's Choice V34 Purple Toothpaste, Tooth Stain Concealer,
                      Teeth Whitening Booster, Colour Correcting Serum for
                      Brightening Teeth - 30ml
                    </p>
                  </div>
                </div>
               
              </div>
              <div className="right_button">
                <ul>
                  <li>
                    <a href={`${baseUrl}dashboard/advertising/manual-campaign`}>Submit Campaign</a>
                  </li>
                </ul>
              </div>
            </div>
  )
}

export default RichCreativeFormat