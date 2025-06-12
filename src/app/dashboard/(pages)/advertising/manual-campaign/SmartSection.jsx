import React, { useEffect, useState } from 'react'

function SmartSection({selectedProduct, hendleInputChangeInput, campaign, errors, newKeyword, setNewKeyword, addExcildeKeyword, selectedExcludeKeyword}) {
    const [addExcludeKeyword, setAddExcludeKeyword] = useState(false)
  return (
     <>
      <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="listings-selected-content">
            <h5>
              Ad Groups <br />
              Listings selected in the previous step are grouped into Ad Groups
            </h5>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="listings-selected-outer">
            <div className="table-responsive">
              <table className="table table-bordered table-striped br-none listings-selected-table mb-0">
                <thead className="table__head">
                  <tr className="winner__table border-bottom"> 
                    <th width={250}>Adgroups</th>
                    <th width={250}>Expected ROI </th>
                    <th width={250}>Budget Limit (Optional)</th>
                    <th width={300}>Advanced targeting (Optional)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="winner__table"> 
                    <td className="listings-selected-protit">{selectedProduct.length} Product</td>
                    <td className='listings-selected-protit'>
                      <div className="nnn_dform listings-selected-form">
                        <div className="registration_form_single-input">
                          <input type="text"  name="expectedROI"
                            value={campaign.expectedROI}
                            onChange={(e)=>hendleInputChangeInput(e) }/>

                            {errors.expectedROI && (
                                <div className='error_message'>{errors.expectedROI}</div>
                            )}

                          <label htmlFor="f-name" className="mt-2">
                            Choose from: 1-15
                          </label>
                        </div>
                      </div>
                    </td>
                    <td className='listings-selected-protit'>
                      <div className="nnn_dform listings-selected-form">
                        <div className="registration_form_single-input">
                          <input type="text"  
                                name="budgetLimit"
                                value={campaign.budgetLimit}
                                onChange={(e)=>hendleInputChangeInput(e) }
                                />

                            {errors.budgetLimit && ( 
                                <div className='error_message'>{errors.budgetLimit}</div>
                                )}
                          <label htmlFor="f-name" className="mt-2">
                            Set Limit
                          </label>
                        </div>
                      </div>
                    </td>
                    <td className="listings-selected-btn">
                         {addExcludeKeyword && ( 
                            <>
                         <div className="registration_form_single-input"> 
                            <div className=""> 
                                <form role="search" className="sr-input-func">
                                    <input placeholder="Enter exclude keyword name" className="search-int form-control" type="text"  
                                        value={newKeyword?.keywordName}
                                         onChange={(e)=>setNewKeyword((preData)=>({...preData, keywordName:e.target.value})) } />
                                    <a href="#" onClick={(e)=>addExcildeKeyword(e, newKeyword, 1)} >Add</a>
                                    </form>  
                                </div>
                        </div>
                        <div>
                        {selectedExcludeKeyword.length > 0 && selectedExcludeKeyword.map((item, index)=>( 
                            <span style={{color:"#fff"}} className="toothpaste_bg_bg_color22" onClick={(e)=>e.preventDefault()} key={index}>{item.keywordName}</span>
                        ))}
                        </div>
                            </>
                         )}
                            {!addExcludeKeyword && ( 
                                 <a href="#" onClick={(e)=>{e.preventDefault(); setAddExcludeKeyword(true)}}>Add Exclude keywords</a>
                            )}
                    </td>
                  </tr>
                </tbody>
              </table>


             
          

            </div>
          </div>

          
        </div>
      </div>
      
    </div>

            </>
  )
}

export default SmartSection