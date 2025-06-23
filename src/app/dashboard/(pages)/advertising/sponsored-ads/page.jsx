"use client"
import SearchLoader from '@/app/SearchLoader'
import { baseUrl, currencyCode, isEmpty, main_thumb_img_path, responseFun } from '@/Http/helper'
import { fileBasePath } from '@/Http/urlHelper'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import AddKeywordSection from './AddKeywordSection'
import SmartSection from './SmartSection'

function SponsoredAds() {


  const searchParams = useSearchParams();
  const updateId = searchParams.get("update") || null;

  const [campaign, setCampaign] = useState({
    adsType:"Sponsored",
    campaignType:"Manual",
    campaignName:"",
    defaultBid:"",
    dailyBudget:"",
    startDate:"",
    endDate:"", 
  })

  const [minDate, setMinDate] = useState(new Date().toISOString().split("T")[0]);
  const [errors, setErrors] = useState({});
  const [typeOfKeyword, setTypeOfKeyword] = useState("Keywords")

  const [submitCampaignLoading, setSubmitCampaignLoading] = useState(false)
  const [searchLoading, setSearchLoading] = useState(false)
  const [searchKeyWardLoading, setSearchKeyWardLoading] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState([])
 
  const [newKeyword, setNewKeyword] = useState({
      keywordName:"",
      SuggBid:[2.21, 2.25],
      MatchType:["Phrase", "Exact"],
      selectedBid:2.21,
      selectedMatchType:"Phrase",
  })
  const [selectedKeyword, setSelectedKeyword] = useState([])
  const [selectedExcludeKeyword, setSelectedExcludeKeyword] = useState([])
 
  const [searchText, setSearchText] = useState("")
  const [productList, setProductList] = useState([])
  const [keywordList, setKeywordList] = useState([]) 
  const [savedKeywords, setSavedKeywords] = useState(false) 

  const router = useRouter();

  function hendleInputChangeInput(e){
    const { name, value, checked} = e.target;
    if(name== "dailyBudget" || name == "defaultBid"){
        const numericValue = value.replace(/[^0-9]/g, "");
         setCampaign((prevData)=>({...prevData, [name]:numericValue}))
         setErrors((preErrs)=>({...preErrs, [name]:!numericValue?`required`:""}))
         return;
    }
   if(name == "expectedROI"){
        let numericValue = value.replace(/[^0-9]/g, "");
        if(numericValue && numericValue <= 0){
          numericValue = "";
        }
        setCampaign((prevData)=>({...prevData, [name]:numericValue})) 
         setErrors((preErrs)=>({...preErrs, [name]:!numericValue?`required`:""}))
        return
    }

     if(name == "budgetLimit"){
        let numericValue = value.replace(/[^0-9]/g, "");
        if(numericValue && numericValue <= 0){
          numericValue = "";
        }
        setCampaign((prevData)=>({...prevData, [name]:numericValue})) 
        return
    }

    if(name == "budgetManually"){
        setCampaign((prevData)=>({...prevData, [name]:checked?value:""})) 
        return
    }
    setCampaign((prevData)=>({...prevData, [name]:value}))
    setErrors((preErrs)=>({...preErrs, [name]:!value?`required`:""}))
  }



  useEffect(()=>{

     const timeoutId = setTimeout(() => { 
      setSearchLoading(true)
        fetch(`/api/seller/ads/product-listing?searchText=${searchText}`,{
            method:"GET", 
        }).then(res => res.json())
          .then(data => {
            setSearchLoading(false) 
            if(data.status){
              setProductList(data.data?.products)
            }
          })
          .catch(error => {
            setSearchLoading(false)
            console.error("Error:", error);
          }); 
          }, 300);

       return () => clearTimeout(timeoutId);
  },[searchText])


  // select product function
  function selectProduct(product){ 
        const exitItem = selectedProduct.filter((item) => {
        return item._id === product._id && item.variant?._id === product.variant?._id;
      });
    if(exitItem.length > 0){
       const filterList = selectedProduct.filter((item)=>{
       return item._id !== product._id && item.variant?._id !== product.variant?._id
      })
      setSelectedProduct(filterList)
    }else{
      setSelectedProduct((preArr)=>([...preArr, product]))
    } 
  }

  // Remove products
    function removeProduct(product){ 
      
       const filterList = selectedProduct.filter((item)=>{
       return item._id !== product._id && item.variant?._id !== product.variant?._id
      })
      setSelectedProduct(filterList)
    
  }




  // =================================keyword==================================================//
  
  useEffect(()=>{

     const timeoutId = setTimeout(() => { 
      setSearchKeyWardLoading(true)
        fetch(`/api/seller/ads/suggest-keyword`,{
            method:"Post", 
            body:JSON.stringify({searchText:newKeyword.keywordName})
        }).then(res => res.json())
          .then(data => {
            setSearchKeyWardLoading(false) 
            if(data.status){
              setKeywordList(data.data?.suggKeyword)
              console.log(data.data?.suggKeyword);
            }
          })
          .catch(error => {
            setSearchKeyWardLoading(false)
            console.error("Error:", error);
          }); 
          }, 300);

       return () => clearTimeout(timeoutId);
  },[newKeyword.keywordName])


// add new Keyword

function AddKeyword(e, keywordData, clear=0){
  e.preventDefault();
  if(keywordData.keywordName){
     const checkInKeyword = selectedExcludeKeyword.filter((item)=>item.keywordName == keywordData.keywordName);
      if(checkInKeyword.length > 0 ){
        alert("This keyword has already been added to the excluded keywords. Please remove it from the excluded keywords before adding it again.")
        return
      }

    const existAlready = selectedKeyword.filter((item)=>item.keywordName == keywordData.keywordName);
      if(existAlready.length > 0 ){
        alert("This keyword already Added");
        return
      }
      setSelectedKeyword([...selectedKeyword, {
      keywordName:keywordData.keywordName,
      bid:"",
      SuggBid:keywordData.selectedBid,
      MatchType:keywordData.selectedMatchType
    }])
    setSavedKeywords(false)
    if(clear==1){
      setNewKeyword((preData)=>({...preData, keywordName:""}))
    }
  }
  
}

function addExcildeKeyword(e, keywordData, clear=0){
 e.preventDefault();
    if(keywordData.keywordName){
    const checkInKeyword = selectedKeyword.filter((item)=>item.keywordName == keywordData.keywordName);
      if(checkInKeyword.length > 0 ){
        alert("This keyword has already been added to the keywords list. Please remove it from the keywords before adding it to the excluded keywords.")
        return
      }
    const existAlready = selectedExcludeKeyword.filter((item)=>item.keywordName == keywordData.keywordName);
      if(existAlready.length > 0 ){
        alert("This Exclude Keyword already Added");
        return
      }
      setSelectedExcludeKeyword([...selectedExcludeKeyword, {
      keywordName:keywordData.keywordName,
    }])

    if(clear==1){
      setNewKeyword((preData)=>({...preData, keywordName:""}))
    }
  }
  

}

 
async function saveKeyword(e){
  e.preventDefault();
   setSavedKeywords(true)
}


async function submitCampaign(e){
  e.preventDefault();

  setErrors({});
  const newErrors = {};
  if(!(campaign.endDate)){
    newErrors.endDate="required.";
   $('input[name="endDate"]').focus();
  }
   if(!(campaign.startDate)){
     newErrors.startDate = "required.";
     $('input[name="startDate"]').focus();
  }
 
   if(campaign.budgetManually !== "Yes"){
       newErrors.budgetManually = "required.";
     $('input[name="dailyBudget"]').focus();
  }

     if(campaign.budgetManually == "Yes" && !(campaign.dailyBudget)){
       newErrors.dailyBudget = "Daily Budget is required.";
     $('input[name="dailyBudget"]').focus();
  }

  if(campaign.campaignType == "Smart" && !(campaign.expectedROI)){
     newErrors.expectedROI = "required." 
     $('input[name="expectedROI"]').focus();
  }

 if(campaign.campaignType == "Manual" && !(campaign.defaultBid)){
   newErrors.defaultBid = "Default bid is required."; 
     $('input[name="defaultBid"]').focus();
  }
    if(isEmpty(campaign.campaignName)){
       newErrors.campaignName = "Campaign name is required.";
     $('input[name="campaignName"]').focus();
  }
  
   

    if(Object.keys(newErrors).length > 0){
       setErrors(newErrors)
        return
    }

  
  if(selectedProduct.length <= 0){
    Swal.fire({
      text:"Choose atleast one products",
      icon:"error",
      title:"Error"
    })
    return
  }

    if(campaign.campaignType == "Manual" &&  selectedKeyword.length <= 0){
      // this condition only for "Manual" Campaign
    Swal.fire({
      text:"Add minmum one keyword for searching",
      icon:"error",
      title:"Error"
    })
    return
  }



  if(campaign.campaignType == "Manual" && !savedKeywords){
    // this condition only for "Manual" Campaign
    Swal.fire({
      text:"keyword has not saved.",
      icon:"error",
      title:"Error"
    })
    return
  }

    if(campaign.campaignType == "Smart"){
      // this condition only for "Smart" Campaign
    setSelectedKeyword([]) 
  }

  const produDoc = selectedProduct.map(prod => ({
                ...prod,
                product_id        : prod._id,
                category_id       : prod.category_id || undefined,
                subcategory_id    : prod.subcategory_id || undefined,
                childcategory_id  : prod.childcategory_id || undefined,
                variant_id        : prod.variant?._id
            }));

            console.log({produDoc});
  const formData = {
    ...campaign,
    selectedProduct:produDoc,
    selectedKeyword,
    selectedExcludeKeyword
  }

  setSubmitCampaignLoading(true)
  fetch('/api/seller/ads/create-sponsored-ads',{
    method:"POST",
    body:JSON.stringify(formData)
  }).then((response)=>{
    return response.json()
  }).then((res)=>{
    setSubmitCampaignLoading(false)
    if(res.status){
      Swal.fire({
        title:"Success",
        icon:"success", 
        text:res.data.message,
        confirmButtonText:"Okay"
      });


      
      // reset all data after create
        setCampaign({
          campaignType:"Manual",
          campaignName:"",
          defaultBid:"",
          dailyBudget:"",
          startDate:"",
          endDate:"", 
        }) 
      setSelectedKeyword([])
      setSelectedExcludeKeyword([])
      setSelectedProduct([])
      // redirect ads list page
      router.push('/dashboard/advertising/my-ads/All');
    }else{
      Swal.fire({
        title:"Error",
        icon:"error", 
        text:res.data.message,
        confirmButtonText:"Okay"
      });
    }
  }).catch((error)=>{
    setSubmitCampaignLoading(false) 
    console.log(error);
  }) 
}


useEffect(()=>{

  fetch(`/api/seller/ads/sponsored-ad?updateId=${updateId}`)
  .then((response)=>{
    return response.json()
  }).then((res)=>{ 
    if(res.status){
     setCampaign({
      ...res.data.campaign,
      startDate:res.data.campaign.startDate.split("T")[0],
      endDate:res.data.campaign.endDate.split("T")[0],
     })
     setSelectedProduct(res.data.adProduct)
     setSelectedKeyword(res.data.adsKeyword)
     setSelectedExcludeKeyword(res.data.excludKeyword)
     if(res.data.campaign.startDate.split("T")[0] < minDate){ 
       setMinDate(res.data.campaign.startDate.split("T")[0])
     }
    }
  }).catch((error)=>{ 
    console.log(error);
  }) 

}, [updateId])



  return (
    <>
    
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12 hub1">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <Link href={`${baseUrl}dashboard`}>
              <i className="fa-solid fa-arrow-left" /> Go to Seller hub
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-7">
          <div className="navigator-breadcrumb-wrapper text-center">
            <h3>Choose a campaign type</h3>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-5">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <ul>
              <li>
                <Link href={`${baseUrl}dashboard/advertising/payment-wallet-summary`}>
                  <i className="fa-solid fa-wallet" /> Wallet
                </Link>{" "}
              </li>
              {/* <li>
                <a href="#">
                  <Image src={`${baseUrl}front/assets/images/hand_shaking.png`}
                  alt=''
                  width={0}
                  height={0}
                  sizes='100vw'
                  loading='lazy'
                  style={{width:"auto", height:"auto"}}
                  /> Help
                </a>{" "}
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="details_page_outer">
    <div className="mt-5">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-4 offset-lg-2">
          
            <div className={`boxs_1 adver_boxs campaign_box ${campaign.campaignType== "Manual"?"campaign_box2":""}`}  onClick={()=>
              {
                setCampaign((prevData)=>({...prevData, campaignType:"Manual"})) 
              }
              }  >
              <div className="heding_fl">
               
                <div>Manual Campaign</div>
              </div>
              <p>Promote only the catalogs you select</p>
              {/* <div className="explore_button"><a href="#">Explore Account Health</a></div> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className={`boxs_1 adver_boxs campaign_box  ${campaign.campaignType== "Smart"?"campaign_box2":""}`}  onClick={()=>
              {
                setCampaign((prevData)=>({...prevData, campaignType:"Smart"})) 
              }
              } 
               >
              <div className="heding_fl"> 
                <div>Smart Campaign</div>
              </div>
              <p>Effortlessly select and manage catalogs automatically</p>
              {/* <div className="explore_button"><a href="#">Explore Account Health</a></div> */}
            </div>
          </div>
          {/* <div className="col-lg-12 text-center mt--20">
        <div className="send"><a href="#">Send your Feedback</a></div>
      </div> */}
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="text-center manual-campaign-tit">
            <h2>{campaign.campaignType} Campaign</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="nnn_dform">
            <div className="registration_form_single-input">
              <label htmlFor="f-name">Campaign Name</label>
              <input type="text"
              name="campaignName"
              value={campaign.campaignName}
              onChange={(e)=>hendleInputChangeInput(e) }
              />
              {errors.campaignName && ( 
                <div className='error_message'>{errors.campaignName}</div>
              )}
            </div>
            
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-6 pe-0">
        <div className="manual-compaign-table1" style={{
              borderLeft: '1px solid #f3ebeb',
              borderRight: '1px solid #f3ebeb',
              borderTop: '1px solid #f3ebeb',
              borderBottom: '1px solid #f3ebeb',
              borderRadius: '3px'}}>
           {/* search start */}
                 <div className="registration_form_single-input" style={{padding: '10px'}}>
                    {/* <label htmlFor="f-name">Select Catalog</label> */}
                    <div className=""> 
                    <form role="search" className="sr-input-func">
                        <input placeholder="Search your product by title" className="search-int form-control" type="text" value={searchText}
                        onChange={(e)=>setSearchText(e.target.value)} name="search" />
                        <a href="#"><i className="far fa-search"></i></a>
                        </form>  
                    </div>
                  </div>
            {/* end search section */}

            
          <div className="manual-compaign-table"> 
            <div className="table-responsive">
              <div className="rightselect"> 
                <h5> &nbsp;</h5>
              </div>
              {searchLoading && ( 
                <div >
                  <SearchLoader />
                </div>
                  
              )}
              <table className="table table-bordered table-striped br-none compaign-table">
               
                <tbody> 

            {productList.length >0 && productList.map((prod, index)=>(
                <tr className="winner__table" style={{ borderTop: "none" }} key={index}>
                    <td className="text-center check-bg">
                      <input
                        id="cb1"
                        className="checkbox"
                        type="checkbox"
                          checked={
                            selectedProduct.length > 0 &&
                            selectedProduct.some(
                                (p) =>
                                  p._id === prod._id && p.variant?._id === prod.variant?._id
                              )
                            }
                        onChange={()=>selectProduct(prod)}
                      />
                    </td>
                    <td style={{ minWidth: 80 }}>
                       
                      <img src={`${fileBasePath}/${main_thumb_img_path}/${prod?.main_image}`}
                        alt=''  
                         className="manual-campaign-img"
                        />
                    </td>
                    <td>
                      <div className="product_details_content mamual_product_details_content">
                        <p>
                         {prod.product_name}
                        </p>
                        <ul>
                          <li className="mamuallist">
                            <span>SIN:</span> {prod.variant?.sin}
                          </li>
                          <li>
                            <span>SKU:</span> {prod.variant?.sku} {" "}
                          </li><br></br>
                          <li className="mamuallist">
                            <span>Price: </span> {currencyCode(prod.variant?.currency || "USD")}{prod.variant?.consumerSalePrice} {" "}
                          </li>
                          <li>
                            <span>Stock: </span> {prod.variant?.stock}
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
            ))}

                 
                 
                </tbody>
              </table>
 
            </div>
             {!searchLoading && productList.length == 0 && ( 
               <div style={{width:'100%', height:'40vh', display:'flex', justifyContent:"center", alignItems:"center", fontWeight:800 }}>Product Not Found!</div>
              )}
          </div>
          </div>



        </div>
        <div className="col-lg-6 ps-0 mt-5 mt-md-0">
          <div className="manual-compaign-table2">
            <div  className="rightselect d-flex justify-content-between align-items-center mb-3">
               <h5> Product Selected ({selectedProduct.length})</h5>
            </div>
            <div className="table-responsive table-responsive-overflow">
              <div className="rightselect d-flex justify-content-between align-items-center">
                
              </div>
              <table className="table table-bordered table-striped br-none2 compaign-table ">
                
                <tbody>

                  {selectedProduct.length > 0  && selectedProduct.map((prod, index)=>(
                    <tr className="winner__table rightselect3" key={index}>
                   
                    <td style={{ minWidth: 80 }}>
                      
                       <img src={`${fileBasePath}/${main_thumb_img_path}/${prod?.main_image}`}
                        alt='' 
                         className="manual-campaign-img"
                        />
                    </td>
                    <td>
                      <div className="product_details_content mamual_product_details_content">
                        <p>
                         {prod.product_name}
                        </p>
                        <ul>
                          <li className="mamuallist">
                            <span>SIN:</span>{prod.variant?.sin}
                          </li>
                          <li>
                            <span>SKU:</span> {prod.variant?.sku}
                          </li>
                          <br />
                          <li className="mamuallist">
                            <span>Price: </span> {currencyCode(prod.variant?.currency || "USD")}{prod.variant?.consumerSalePrice}
                          </li>
                          <li>
                            <span>Stock: </span>  {prod.variant?.stock}
                          </li>
                        </ul>
                         <div className="close_002" onClick={()=>removeProduct(prod)}> 
                            <i className="fa-solid fa-times pe-4" /> 
                        </div>
                      </div>
                    </td>
                  </tr>

                  ))}
                   
                </tbody>
              </table>
              {selectedProduct.length == 0 && ( 
               <div style={{width:'100%', height:'40vh', display:'flex', justifyContent:"center", alignItems:"center", fontWeight:800 }}>No Selected Products</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    {campaign.campaignType == "Manual" && (
    <div className="compaign-bot-sec">
      <div className="container">
        <div className="row">
          <div>
            <p className="compaign-bot-content compaign-bot-content2">
              Set default bid
            </p>
          </div>
          <div className="col-lg-12">
            <div className="nnn_dform mt-1">
              <div className="row align-items-center">
                <div className="col-lg-2">
                  <div className="registration_form_single-input">
                    <label htmlFor="f-name">Default bid</label>
                    {/* <input type="text"> */}
                  </div>
                </div>
                <div className="col-lg-2">

                <div className="rupee-input-container">
                    <input type="number" id="amount" placeholder="Enter amount" 
                    name="defaultBid"
                      value={campaign.defaultBid}
                      onChange={(e)=>hendleInputChangeInput(e) }/> 
                      {errors.defaultBid && ( 
                          <div className='error_message'>{errors.defaultBid}</div>
                        )}
                </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
    {/* ===================================================== */}
     {campaign.campaignType == "Smart" && (
      <SmartSection  
      selectedProduct = {selectedProduct} 
      hendleInputChangeInput={hendleInputChangeInput}
      campaign={campaign}
      errors={errors}
      newKeyword={newKeyword}
      setNewKeyword={setNewKeyword}
      addExcildeKeyword={addExcildeKeyword}
      selectedExcludeKeyword={selectedExcludeKeyword}

      />
     )}
    {campaign.campaignType == "Manual" && (
      <AddKeywordSection 
            typeOfKeyword={typeOfKeyword}
            newKeyword={newKeyword}
            setNewKeyword={setNewKeyword} 
            keywordList={keywordList}
            selectedKeyword={selectedKeyword} 
            selectedExcludeKeyword={selectedExcludeKeyword} 
            savedKeywords={savedKeywords} 
            setSelectedKeyword={setSelectedKeyword}   
            setSelectedExcludeKeyword={setSelectedExcludeKeyword}
            setTypeOfKeyword={setTypeOfKeyword}
            saveKeyword={saveKeyword}
            AddKeyword={AddKeyword}
            setKeywordList={setKeywordList}
            addExcildeKeyword={addExcildeKeyword}
          />
    )}
    
    {/* ===================================================== */}
    <div className="compaign-bot-sec">
      <div className="container">
        <div className="row">
          <div>
            <p className="compaign-bot-content">Add Daily Budget</p>
          </div>
          <div className="col-lg-12">
            <div className="nnn_dform mt-3">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="registration_form_single-input">
                    <label htmlFor="f-name">
                      {" "}
                      <input id="cb1" type="checkbox" checked={campaign.budgetManually == "Yes"}
                            name="budgetManually"
                            value="Yes"
                            onChange={(e)=>hendleInputChangeInput(e) }
                      />{" "}
                       {errors.budgetManually && ( 
                              <div className='error_message'>{errors.budgetManually}</div>
                            )}
                      Select budget manually
                    </label>
                    {/* <input type="text"> */}
                  </div>
                </div>
                {campaign.budgetManually == "Yes" && (
                    <div className="col-lg-4">
                      <div className="registration_form_single-input">
                        {/* <label for="f-name">Campaign Name</label> */}
                        <input type="text" 
                          name="dailyBudget"
                          value={campaign.dailyBudget}
                          onChange={(e)=>hendleInputChangeInput(e) }
                          />
                          {errors.dailyBudget && ( 
                              <div className='error_message'>{errors.dailyBudget}</div>
                            )}
                      </div>
                    </div>
                )}
                
              </div>
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="registration_form_single-input">
                    <label htmlFor="f-name">Set Timeframe</label>
                    {/* <input type="text"> */}
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="registration_form_single-input">
                    {/* <label for="f-name">Campaign Name</label> */}
                    <input type="date" placeholder="Start Date" 
                     name="startDate"
                      value={campaign.startDate}
                      onChange={(e)=>hendleInputChangeInput(e) }
                        min={minDate} 
                      />
                       {errors.startDate && ( 
                          <div className='error_message'>{errors.startDate}</div>
                        )}
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="registration_form_single-input">
                    {/* <label for="f-name">Campaign Name</label> */}
                    <input type="date" placeholder="End Date"
                     name="endDate"
                      value={campaign.endDate}
                      onChange={(e)=>hendleInputChangeInput(e) }
                      min={campaign.startDate?campaign.startDate.split("T")[0]:new Date().toISOString().split("T")[0]}
                       />
                        {errors.endDate && ( 
                          <div className='error_message'>{errors.endDate}</div> 
                        )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right_button">
            <ul>
              <li>
                {submitCampaignLoading ? (
                <a href="#" onClick={(e)=>e.preventDefault()}>Submiting..</a> 
                ):(
                <a href="#" onClick={(e)=>submitCampaign(e)}>Submit Campaign</a> 
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  );





  
}


function Page() {
  return (
    <Suspense fallback={<>Loading</>}>
      <SponsoredAds />
    </Suspense>
  )
}

export default Page


