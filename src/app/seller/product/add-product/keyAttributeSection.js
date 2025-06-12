import { baseUrl } from '@/Http/helper';
import React, { useEffect, useRef, useState } from 'react'


const KeyAttributeSection = ({ errors, changeProductInfoInput, productDetails, keyAttributes, setKeyAttributes }) => {


    // const [keyAttributes, setKeyAttributes] = useState([{key_attribute:'', key_value:''}])

    const addMoreKeyAttribute = () => {
        setKeyAttributes([...keyAttributes, {key_attribute:'', key_value:''} ]);
        
      };

      const deleteKeyAttribute =(index)=>{
        const updatedProperty = keyAttributes.filter((_,i)=> i !== index);
        setKeyAttributes(updatedProperty);   
      }

      function updateKeyAttribute(index, e){ 
        const {name, value} = e.target
        setKeyAttributes((prevData) => 
            prevData.map((item, i) => {
                if (i === index) {
                    return { ...item, [name]: value };  
                }
                return item;  
            })
        ); 
      }


    return (
        <div className="uploaded_images">
            <div className="uplaod_image_heading">
                <h2>Key Attributes  </h2>
            </div>
            <div className="row">

                
                <div className="form-group">
                    <div className="row align-items-center">
                        {keyAttributes.length > 0 ? keyAttributes.map((attr, index)=>(
                            <div className='row col-lg-12' key={index} style={{marginTop:'0px'}}>
                            <div className="col-lg-6">
                            <label htmlFor="listing-status">
                                Attribute name {index+1} 
                                <input type="text"
                                name="key_attribute"
                                value={attr.key_attribute}
                                 placeholder='Attribute'
                                onChange={(e) => updateKeyAttribute(index, e)}
                            />
                             {errors[`attribute_name_${index}_error`] && ( 
                                    <span className='error_message'>{errors[`attribute_name_${index}_error`]}</span>
                                    )}
                            </label>
                            
                            <span style={{color:'red', margin:'0px, 5px', cursor:'pointer'}} onClick={()=>deleteKeyAttribute(index)}> Delete</span>
                            
                        </div>
                        <div className="col-lg-6">
                        <label htmlFor="listing-status">
                                Attribute value {index+1} 
                                <input type="text"
                                name="key_value"
                                value={attr.key_value}
                                placeholder='Value'
                                onChange={(e) => updateKeyAttribute(index, e)}
                            />

                            {errors[`attribute_value_${index}_error`] && ( 
                                    <span className='error_message'>{errors[`attribute_value_${index}_error`]}</span>
                                    )}
                            {index != 0 > 0 ?( 
                             <span> &nbsp;</span>
                            ):""}
                            </label> 
                        </div>
                        {/* <div className="col-lg-12 mt-3" /> */}
                        </div>
                        )):""}
                        

                            <div className="col-lg-12">
                                <div className="mb-3" >
                                    <label className="form-label" onClick={()=>addMoreKeyAttribute()}>
                                        <a className="add_more_product_field">+Add {keyAttributes.length>0?"More":""} Attribute</a>
                                    </label>
                                </div>
                            </div>
                            
                    </div>
                </div>





            </div>
        </div>
    )
}

export default KeyAttributeSection