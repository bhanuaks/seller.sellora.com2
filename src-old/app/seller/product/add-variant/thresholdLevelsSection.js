"use client"
import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import { baseUrl } from '@/Http/helper'
import { useRouter } from 'next/navigation'
const ThresholdLevelsSection = ({product_id}) => {

    const router = useRouter();
    const [thresholdData, setThresholdData] = useState({
        product_id:product_id,
        quantity_base_discount:"",
        type_threshold_levels_1_unit:"",
        threshold_levels_1_discount:"",

        threshold_levels_2_unit:"",
        threshold_levels_2_discount:"",

        threshold_levels_3_unit:"",
        threshold_levels_3_discount:"",

        threshold_levels_1_fixed_price:"",
        threshold_levels_2_fixed_price:"",
        threshold_levels_3_fixed_price:"",
    })

    function handleOnChangeInput(e){
        const { name, value } = e.target 
        const numericValue = value.replace(/[^0-9.]/g,'')
        setThresholdData((oldData)=>({
            ...oldData,
            [name]:numericValue
        }))
    }


    function saveThresholdData(e){
        e.preventDefault();
        $('.loaderouter').css('display',"flex")

        fetch(`${baseUrl}api/seller/product/save-product-threshold`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(thresholdData)
        }).then((response)=>{ 
            if(!response.ok){
                $('.loaderouter').css('display',"none") 
                throw new Error("Network error")
            }
            return response.json();
        }).then((res)=>{
            if(res.status){
                router.push(`${baseUrl}dashboard/listing`) 
            }
        // $('.loaderouter').css('display',"none") 
            
        })
                
    }


    useEffect(()=>{
        $('.loaderouter').css('display',"flex") 

        fetch(`${baseUrl}api/seller/product/save-product-threshold?product_id=${product_id}`,{
            method:"GET", 
        }).then((response)=>{ 
            if(!response.ok){
                $('.loaderouter').css('display',"none") 
                throw new Error("Network error")
            }
            return response.json();
        }).then((res)=>{
            if(res.status){ 
                if(res.data.threshold){ 
                    setThresholdData(res.data.threshold)
                }
            }
        $('.loaderouter').css('display',"none")     
        })
    },[])

  return (
    <>
    <form action={"#"} onSubmit={(e)=>saveThresholdData(e)}>
     <div className="col-lg-12">
                <div className="head_dfd">
                  <h3> Add Threshold Levels</h3>
                </div>
                <div className="preview_box">
                  <div className="form-container">

                    <div className="form-group">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sale-price">Quantity Base Discount</label>
                        </div>
                        <div className="col-lg-8">
                          <input type="text"
                           name="quantity_base_discount" 
                           value={thresholdData.quantity_base_discount} 
                           onChange={(e)=>handleOnChangeInput(e)}
                            />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sale-price">
                            Type Threshold Levels 1, Unit
                          </label>
                        </div>
                        <div className="col-lg-8">
                          <input type="text"  
                           name="type_threshold_levels_1_unit" 
                           value={thresholdData.type_threshold_levels_1_unit} 
                           onChange={(e)=>handleOnChangeInput(e)}/>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sale-price">
                            Threshold Levels 1, Discount %
                          </label>
                        </div>
                        <div className="col-lg-8">
                          <input type="text" 
                           name="threshold_levels_1_discount" 
                           value={thresholdData.threshold_levels_1_discount} 
                           onChange={(e)=>handleOnChangeInput(e)} 
                           maxLength={2} />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sale-price">
                            Threshold Levels 2, Unit
                          </label>
                        </div>
                        <div className="col-lg-8">
                          <input type="text" 
                           name="threshold_levels_2_unit" 
                           value={thresholdData.threshold_levels_2_unit} 
                           onChange={(e)=>handleOnChangeInput(e)}
                             />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sale-price">
                            Threshold Levels 2, Discount %
                          </label>
                        </div>
                        <div className="col-lg-8">
                          <input type="text" 
                           name="threshold_levels_2_discount" 
                           value={thresholdData.threshold_levels_2_discount} 
                           onChange={(e)=>handleOnChangeInput(e)}
                             />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sale-price">
                            Threshold Levels 3, Unit
                          </label>
                        </div>
                        <div className="col-lg-8">
                          <input type="text" 
                           name="threshold_levels_3_unit" 
                           value={thresholdData.threshold_levels_3_unit} 
                           onChange={(e)=>handleOnChangeInput(e)}
                             />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sale-price">
                            Threshold Levels 3, Discount %
                          </label>
                        </div>
                        <div className="col-lg-8">
                          <input type="text"  
                          name="threshold_levels_3_discount" 
                           value={thresholdData.threshold_levels_3_discount} 
                           onChange={(e)=>handleOnChangeInput(e)}
                           maxLength={2}
                             />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sale-price">
                            Threshold Levels 1, Fixed Price
                          </label>
                        </div>
                        <div className="col-lg-8">
                          <input type="text"  name="threshold_levels_1_fixed_price" 
                           value={thresholdData.threshold_levels_1_fixed_price} 
                           onChange={(e)=>handleOnChangeInput(e)}
                             />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sale-price">
                            Threshold Levels 2, Fixed Price
                          </label>
                        </div>
                        <div className="col-lg-8">
                          <input type="text" 
                           name="threshold_levels_2_fixed_price" 
                           value={thresholdData.threshold_levels_2_fixed_price} 
                           onChange={(e)=>handleOnChangeInput(e)}
                            />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sale-price">
                            Threshold Levels 3, Fixed Price
                          </label>
                        </div>
                        <div className="col-lg-8">
                          <input type="text" 
                           name="threshold_levels_3_fixed_price" 
                           value={thresholdData.threshold_levels_3_fixed_price} 
                           onChange={(e)=>handleOnChangeInput(e)}
                             />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ========================form-2-end===================== */}
              </div>
              <div className="col-lg-4">
                <div className="head_dfd">
                  <h3>&nbsp;</h3>
                  
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="sub_mit_cat">
                    <ul>
                      <li className="orange_09">
                        <button type="submit">Submit Catalog</button>
                      </li>
                      {/* <li>
                        <a href="#">Cancel Catalog</a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              </form>
              </>
  )
}

export default ThresholdLevelsSection