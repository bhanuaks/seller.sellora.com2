import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import React from 'react'

function AutoCreativeFormat() {
  return (
    <div className="col-12 mt--30 perviewS">
          <h3 className="text-center">Preview</h3>
          <div className="col-lg-6 box offset-lg-3">
            <div className="card mb-3">
              <div className="row g-0 align-items-center">
                <div className="col-md-4">
                <img src={`${baseUrl}front/assets/images/preview01.jpg`}
                                        alt='' 
                                         className="manual-campaign-img" 
                                        />  
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">Sponsored</h3>
                    <p className="card-text ">
                      Lora's Choice V34 Purple Toothpaste, Tooth Stain
                      Concealer, Teeth Whitening Booster, Colour Correcting
                      Serum for Brightening Teeth - 30ml
                    </p>
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
                  </div>
                </div>
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

export default AutoCreativeFormat