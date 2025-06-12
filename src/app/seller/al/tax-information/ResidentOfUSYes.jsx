import { baseUrl } from '@/Http/helper'
import React from 'react'

function ResidentOfUSYes({taxInformation, updateInputData, errors}) {
    
    if(!taxInformation){
        return <></>
    }
  return (
    <>
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">Federal tax classication<span className='mandatory_field'>*</span></label>
                            <select type="text" placeholder="Limited liability company" 
                              name='federal_tax_classication'
                              value={taxInformation.federal_tax_classication || ""}
                              onChange={(e) => updateInputData(e)}
                            >
                              <option value="">select</option>
                              <option value="C corporations">C corporation</option>
                              <option value="S corporations">S corporation</option>
                              <option value="Partnership">Partnership</option> 
                              <option value="trust/estate">Trust/estate</option> 
                              <option value="Limited liability company">Limited liability company</option>
                              <option value="Other">Other</option>
                            </select>
                            
                            {errors.federal_tax_classication && errors.federal_tax_classication != ""? ( 
                                <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.federal_tax_classication}</span>
                            ):''}
                          </div>
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">LLC type<span className='mandatory_field'>*</span></label>
                            <select type="text" placeholder="Partnership"
                              name='llc_type'
                              value={taxInformation.llc_type}
                              onChange={(e) => updateInputData(e)}
                            >
                             <option value="">select</option>
                              <option value="C corporations">C corporation</option>
                              <option value="S corporations">S corporation</option>
                              <option value="Partnership">Partnership</option>  
                            </select>
    
                         {errors.llc_type && errors.llc_type != ""? ( 
                              <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.llc_type}</span>
                          ):''}
                          </div>
                          <div className="col-lg-12">
                            <h3>Tax Identity Information</h3>
                          </div>
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">Full name<span className='mandatory_field'>*</span></label>
                            <input type="text" placeholder="Mailed It, LLC"
                              name='full_name'
                              value={taxInformation.full_name}
                              onChange={(e) => updateInputData(e)}
                            />
                            {errors.full_name && errors.full_name != ""? ( 
                              <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.full_name}</span>
                          ):''}
                          </div>
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">
                              Doing business as “DBA” or trade name (Optional)
                            </label>
                            <input type="text" placeholder="Mailed It, LLC"
                              name='trade_name'
                              value={taxInformation.trade_name}
                              onChange={(e) => updateInputData(e)}
                            />
                            {/* {errors.trade_name && errors.trade_name != ""? ( 
                              <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.trade_name}</span>
                          ):''} */}
                          </div>
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">
                              Taxpayer Identication Number (TIN)<span className='mandatory_field'>*</span>
                            </label>
                            <select 
                             name='employer_identification_number'
                             value={taxInformation.employer_identification_number}
                             onChange={(e) => updateInputData(e)}
                             > 
                              <option value={"Employer Identification Number"}>Employer Identification Number</option>
                            </select>
                            <input type="text" placeholder="XX-XXXXXXX"
                              name='tin_number'
                              value={taxInformation.tin_number}
                              onChange={(e) => updateInputData(e)}
                            />
                            {errors.tin_number && errors.tin_number != ""? ( 
                              <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.tin_number}</span>
                          ):''}
                          </div>
                          <div className="registration_form_single-input">
                            <label htmlFor="f-name">Attach File<span className='mandatory_field'>*</span></label>
                            <div className="file-placeholder">
                              <label />
                              <input type="file" className="fileUpload"
                                name='image'
                                onChange={(e) => updateInputData(e)} />
                              <div className="file-browse">
    
                                <span className="file-browse-txt" id='image_name'>
                                  
                                  {  taxInformation.image && typeof taxInformation.image =="string" ? (
                                      taxInformation.image.split('/').length ==3 ?taxInformation.image.split('/')[2]:"select file"
                                ):"Select file"}
                                </span>
                                <span className="browse">Upload</span>
                              </div>
                              <span style={{color:"#000"}}><strong>Note:</strong> Allowed file types: .jpg, .png, .pdf. Maximum file size: 10MB.</span>
    
                            </div>
                         
                           {  taxInformation.image && typeof taxInformation.image =="string" ? (
                              <a target='_blank'  className='view_image' href={`${baseUrl}${taxInformation.image}`}>View File</a>
                            ):null}
                             </div>
    
                          {errors.image && errors.image != ""? ( 
                              <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.image}</span>
                          ):''}
                        </>
  )
}

export default ResidentOfUSYes