import React from 'react'

function AddKeywordSection({
    typeOfKeyword, 
    newKeyword, 
    setNewKeyword, 
    keywordList, 
    selectedKeyword, 
    selectedExcludeKeyword, 
    savedKeywords, 
    setSelectedKeyword,  
    setSelectedExcludeKeyword,
    setTypeOfKeyword,
    saveKeyword,
    AddKeyword,
    setKeywordList,
    addExcildeKeyword
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="compaign-1-outerhead">
            <h4>Add keywords</h4>
          </div>
          <div className="compaign-1-outer h-100">
            <div className="row">
              {/* search start */}
                 <div className="registration_form_single-input" style={{padding: '10px'}}> 
                    <div className=""> 
                    <form role="search" className="sr-input-func">
                        <input placeholder="Search your product by title" className="search-int form-control" type="text" value={newKeyword.keywordName}
                        onChange={(e)=>setNewKeyword((preData)=>({...preData, keywordName:e.target.value})) }   />
                        <a href="#"><i className="far fa-search"></i></a>
                        </form>  
                    </div>
                  </div>
            {/* end search section */}
              
            </div>
            <div className="table-responsive ad3">
              <table
                className="table table-striped compaign-1-table"
                style={{ marginTop: 10 }}
              >
                <thead className="table__head key1">
                  {typeOfKeyword == "Keywords" && (
                    <tr>
                    <th>Keyword</th>
                    <th className="text-center">Sugg. Bid</th>
                    <th className="text-center">Match Type</th>
                    <th className="text-center"> &nbsp;</th>
                  </tr>
                  )}
                   {typeOfKeyword == "Exclude" && (
                    <tr>
                    <th>Keyword</th> 
                    <th className="text-center"> &nbsp;</th>
                  </tr>
                  )}
                  
                </thead>
                <tbody>
                    <br />
                      {typeOfKeyword == "Keywords" && newKeyword.keywordName && (
                    <tr>
                        <td className="">
                          <span  className="Toothpaste_bg" onClick={(e)=>e.preventDefault()}> 
                            {newKeyword.keywordName}
                          </span>
                        </td>
                        <td>
                          <div className="pri_dfdj">
                            <ul className="suggest-bit"> 
                              <li className={newKeyword.selectedBid == 2.21?"active2":""} 
                              onClick={()=>setNewKeyword((preData)=>({...preData, selectedBid:2.21}))}>$2.21</li>

                              <li className={newKeyword.selectedBid == 2.25?"active2":""}  
                              onClick={()=>setNewKeyword((preData)=>({...preData, selectedBid:2.25}))}>$2.25</li> 
                            </ul>
                          </div>
                        </td>
                        <td className="text-center">
                          <ul className="phrase">
                            <li className={newKeyword.selectedMatchType == "Phrase"?"active2":""} 
                            onClick={()=>setNewKeyword((preData)=>({...preData, selectedMatchType:"Phrase"}))}>Phrase</li> 

                            <li className={newKeyword.selectedMatchType == "Exact"?"active2":""} 
                            onClick={()=>setNewKeyword((preData)=>({...preData, selectedMatchType:"Exact"}))}>Exact</li> 
                          </ul>
                        </td>
                        <td className="text-center">
                          <a href="#" className="edit add1" onClick={(e)=>AddKeyword(e, newKeyword)}> 
                            Add
                          </a>
                        </td>
                      </tr>
                  )}


                  {typeOfKeyword == "Exclude" && newKeyword.keywordName && (
                    <tr>
                        <td className="">
                          <span  className="Toothpaste_bg" onClick={(e)=>e.preventDefault()}>
                            {newKeyword.keywordName}
                          </span>
                        </td> 
                        <td className="text-center">
                          <a href="#" className="edit add1" onClick={(e)=>addExcildeKeyword(e, newKeyword)}> 
                            Add
                          </a>
                        </td>
                      </tr>
                  )}

                    <br />
                  {typeOfKeyword == "Keywords" && keywordList.length > 0 && keywordList.map((item, index)=>( 
                      <tr key={index}>
                        <td className="">
                          <a href="#" className="Toothpaste_bg" onClick={(e)=>e.preventDefault()}>
                            {item.keywordName}
                          </a>
                        </td>
                        <td>
                          <div className="pri_dfdj">
                            <ul className='suggest-bit'>
                              {item.SuggBid?.length > 0 &&  item.SuggBid.map((sbid, subIndex)=>(
                                  <li key={subIndex} className={item.selectedBid == sbid?"active2":""}
                                    onClick={() => {
                                          const updatedKeywords = keywordList.map((kItem, i) =>
                                            i === index ? { ...kItem, selectedBid: sbid } : kItem
                                          );
                                          setKeywordList(updatedKeywords);
                                        }}
                                        >
                                          ${sbid}
                                          </li>
                              ))} 
                            </ul>
                          </div>
                        </td>
                        <td className="text-center">
                          <ul className="phrase">
                             {item.MatchType?.length > 0 &&  item.MatchType.map((mType, subIndex)=>(
                                  <li key={subIndex} className={item.selectedMatchType == mType?"active2":""} 
                                  onClick={() => {
                                          const updatedKeywords = keywordList.map((kItem, i) =>
                                            i === index ? { ...kItem, selectedMatchType: mType } : kItem
                                          );
                                          setKeywordList(updatedKeywords);
                                        }}
                                  >{mType}</li>
                              ))}
                          </ul>
                        </td>
                        <td className="text-center">
                          <a href="#" className="edit add1" onClick={(e)=>AddKeyword(e, item)} > 
                            Add
                          </a>
                        </td>
                      </tr>

                  ))} 
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-3 mt-md-0">
          <div className="compaign-1-outerhead">
            <h4>Targeting keywords</h4>
          </div>
          <form onSubmit={(e)=>saveKeyword(e)}>
          <div className="compaign-1-outer ">
            <div className="table-responsive">
              <table
                className="table table-striped compaign-1-table"
                style={{ marginTop: 10 }}
              >
                <thead className="table__head">
                  <tr className="winner__table border-bottom">
                    <th colSpan={15}>
                      <div className="table_menu">
                        <ul>
                          <li>
                            <span  className={typeOfKeyword == "Keywords" ? "active" : ""}
                            onClick={(e)=>{
                              e.preventDefault()
                              setTypeOfKeyword("Keywords")
                            }}>
                              Keywords ({selectedKeyword.length})
                            </span>
                          </li>
                          <li>
                            <a href="#" className={typeOfKeyword == "Exclude"?"active":""}
                              onClick={(e)=>{
                              e.preventDefault()
                              setTypeOfKeyword("Exclude")
                            }}
                            >Exclude Keywords ({selectedExcludeKeyword.length})</a>
                          </li>
                        </ul>
                      </div>
                    </th>
                  </tr>
                   <tr className="winner__table">
                        <th colSpan={15}> </th>
                      </tr>
                  {typeOfKeyword == "Keywords" && ( 
                      <tr className="winner__table key1">
                        <th width={150}>Keyword</th>
                        <th width={150}>Sugg. Bid</th>
                        <th width={150}>Match Type</th>
                        <th width={150} className="text-center">
                          Bid
                        </th>
                        <th>Remove</th>
                      </tr> 
                  )}

                   {typeOfKeyword == "Exclude" && ( 
                      <tr className="winner__table key1">
                        <th style={{width:'80%'}}>Keyword</th> 
                        <th>Remove</th>
                      </tr> 
                  )}
                 
                </thead>
                <tbody>
                  {/* keyword row */}
                  {typeOfKeyword == "Keywords" && selectedKeyword.length > 0  && selectedKeyword.map((keywordItem, index)=>(
                    <tr key={index}>
                      <td className="">
                        <span className="toothpaste_bg_bg_color" onClick={(e)=>e.preventDefault()}>
                          {keywordItem?.keywordName}
                        </span>
                      </td>
                      <td>
                        <div className="targeting_list">
                          <ul>
                            <li>${keywordItem?.SuggBid}</li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <ul className="match_type">
                          <li>{keywordItem.MatchType}</li>
                        </ul>
                      </td>
                      <td className="text-center">
                        <input type="text" className="add_input"
                        value={keywordItem.bid} 
                        disabled={savedKeywords}
                        onChange={(e)=>{
                          const value = e.target.value;
                          const numberValue = value.replace(/[^0-9.]/g, "");
                          const updateData = selectedKeyword.map((itemData, i)=>
                             index == i?{...itemData, bid:numberValue}:itemData 
                          )
                          setSelectedKeyword(updateData)
                        }}
                        required
                        />
                      </td>
                      <td>
                        <ul className="match_type text-center">
                          <li>
                            <i className="fa-solid fa-times" style={{cursor:'pointer'}}
                            onClick={(e)=>{
                              const dataAfterDelete = selectedKeyword.filter((dataItem, i)=> i != index)
                            setSelectedKeyword(dataAfterDelete);
                            }} />
                          </li>
                        </ul>
                      </td>
                    </tr>

                  ))}

                  {typeOfKeyword == "Exclude" && selectedExcludeKeyword .length > 0  && selectedExcludeKeyword.map((keywordItem, index)=>(
                    <tr key={index}>
                      <td className="">
                        <a href="#" className="toothpaste_bg_bg_color" onClick={(e)=>e.preventDefault()}>
                          {keywordItem?.keywordName}
                        </a>
                      </td> 
                      
                      <td>
                        <ul className="match_type text-center">
                          <li>
                            <i className="fa-solid fa-times" style={{cursor:'pointer'}}
                             onClick={(e)=>{
                              const dataAfterDelete = selectedExcludeKeyword.filter((dataItem, i)=> i != index)
                              setSelectedExcludeKeyword(dataAfterDelete);
                            }} />
                          </li>
                        </ul>
                      </td>
                    </tr>

                  ))}
                    
                </tbody>
              </table>
              {!savedKeywords && selectedKeyword.length > 0 && typeOfKeyword == "Keywords" && ( 
                <ul className="butereio">
                  <li>
                    <button href="#">Save</button>{" "}
                  </li>
                  {/* <li>
                    <a href="#" className="without_bg">
                      Cancel
                    </a>{" "}
                  </li> */}
                </ul> 
              )}
              
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddKeywordSection