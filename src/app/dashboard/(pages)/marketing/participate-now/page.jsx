"use client"
import SearchLoader from '@/app/SearchLoader';
import { baseUrl, currencyCode, isEmpty, main_thumb_img_path } from '@/Http/helper'
import { fileBasePath } from '@/Http/urlHelper';
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react'
import Swal from 'sweetalert2';

function InfluencerPage() {


    const searchParams = useSearchParams();
      const updateId = searchParams.get("update") || null;
    const [minDate, setMinDate] = useState(new Date().toISOString().split("T")[0]);
    const router = useRouter();
    const pathname = usePathname();
    const [campaign, setCampaign] = useState({ 
      campaignName: "", 
      dailyBudget: "",
      startDate: "",
      endDate: "",
      costPerOrder: "",
    });
  
    const [errors, setErrors] = useState({});

    const [productList, setProductList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);

     const [searchText, setSearchText] = useState("");
     const [searchCategoryText, setSearchCategoryText] = useState("");

    const [selectedProduct, setSelectedProduct] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);

     const [searchLoading, setSearchLoading] = useState(false);
     const [submitCampaignLoading, setSubmitCampaignLoading] = useState(false);


     
     
       function hendleInputChangeInput(e) {
         const { name, value } = e.target;
     
            
         if (name == "dailyBudget" || name == "costPerOrder" ) { 
            const numericValue = value.replace(/[^0-9.]/g, "");
            setCampaign((prevData) => ({ ...prevData, [name]: numericValue }));
            setErrors((preErrs) => ({
              ...preErrs,
              [name]: !numericValue ? `required` : "",
            }));
            return;
         }
         
           
         setCampaign((prevData) => ({ ...prevData, [name]: value }));
         setErrors((preErrs) => ({ ...preErrs, [name]: !value ? `required` : "" }));
       }
     


       
         useEffect(() => {
           const timeoutId = setTimeout(() => {
             setSearchLoading(true);
             fetch(`/api/seller/ads/product-listing?searchText=${searchText}`, {
               method: "GET",
             })
               .then((res) => res.json())
               .then((data) => {
                 setSearchLoading(false);
                 if (data.status) {
                   setProductList(data.data?.products);
                 }
               })
               .catch((error) => {
                 setSearchLoading(false);
                 console.error("Error:", error);
               });
           }, 300);
       
           return () => clearTimeout(timeoutId);
         }, [searchText]);
       
         // select product function
         function selectProduct(product) {
           const exitItem = selectedProduct.filter((item) => {
             return (
               item._id === product._id && item.variant?._id === product.variant?._id
             );
           });
           if (exitItem.length > 0) {
             const filterList = selectedProduct.filter((item) => {
               return (
                 item._id !== product._id && item.variant?._id !== product.variant?._id
               );
             });
             setSelectedProduct(filterList);
           } else {
             setSelectedProduct((preArr) => [...preArr, product]);
           }
         }
       
         // Remove products
         function removeProduct(product) {
           const filterList = selectedProduct.filter((item) => {
             return (
               item._id !== product._id && item.variant?._id !== product.variant?._id
             );
           });
           setSelectedProduct(filterList);
         }
       

        //  save and submit data

        
          async function submitCampaign(e){
            e.preventDefault();
          
            setErrors({});
            const newErrors = {};

            if(!(campaign.costPerOrder)){
              newErrors.costPerOrder="required.";
              $('input[name="costPerOrder"]').focus();
            }
            if(!(campaign.endDate)){
              newErrors.endDate="required.";
             $('input[name="endDate"]').focus();
            }
            
             if(!(campaign.startDate)){
               newErrors.startDate = "required.";
               $('input[name="startDate"]').focus();
            }
           
            
             if(!(campaign.dailyBudget)){
                 newErrors.dailyBudget = "Daily Budget is required.";
               $('input[name="dailyBudget"]').focus();
            }
          
             
              if(isEmpty(campaign.campaignName)){
                 newErrors.campaignName = "Campaign name is required.";
                $('input[name="campaignName"]').focus();
              }
            
            
                 if(Number(campaign.costPerOrder) > Number(campaign.dailyBudget)){
                 newErrors.dailyBudget = "Daily Budget must be greter from Cost Per Order.";
                $('input[name="dailyBudget"]').focus();
              }
             
          
              if(Object.keys(newErrors).length > 0){
                 setErrors(newErrors)
                  return
              }
          
            
            if(selectedProduct.length <= 0){
              Swal.fire({
                text:"Please select a product",
                icon:"error",
                title:"Error"
              })
              return
            }
          
            //   if(selectedCategory.length <= 0){
            //     // this condition only for "Manual" Campaign
            //   Swal.fire({
            //     text:"Please add minmum one Category.",
            //     icon:"error",
            //     title:"Error"
            //   })
            //   return
            // }
          
           
              // if(!savedCategories){
              //   // this condition only for "Manual" Campaign
              //   Swal.fire({
              //     text:"Categories has not saved.",
              //     icon:"error",
              //     title:"Error"
              //   })
              //   return
              // }
          
            const produDoc = selectedProduct.map(prod => ({
                          ...prod,
                          product_id: prod._id,
                          variant_id: prod.variant?._id
                      }));
          
            const formDataField = {
              ...campaign, 
              selectedProduct:produDoc, 
            }
           
            // const formData = createFormData(formDataField)
            setSubmitCampaignLoading(true)
            fetch('/api/seller/ads/save-influencer-campaign',{
              method:"POST", 
              body:JSON.stringify(formDataField)
            }).then( async (response)=>{
              if (!response.ok) { 
                throw new Error("Internal Error");
              }
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
                    campaignName: "", 
                    dailyBudget: "",
                    startDate: "",
                    endDate: "",
                    costPerOrder: "",
                  }) 
                // setSelectedCategory([]) 
                setSelectedProduct([])
                // redirect ads list page
                router.push('/dashboard/growth/sellora-promotions');
              }else{
                throw new Error(res.data?.message || "Something went wrong")
              }
            }).catch((error)=>{
              setSubmitCampaignLoading(false) 
               Swal.fire({
                  title:"Error",
                  icon:"error", 
                  text:error.message,
                  confirmButtonText:"Okay"
                });
              console.log(error);
            }) 
          }
        
 

          useEffect(()=>{
                fetch('/api/seller/ads/save-influencer-campaign')
                .then( async (response)=>{
              if (!response.ok) { 
                throw new Error("Internal Error");
              }
              return response.json()
            }).then((res)=>{
              
              if(res.status){ 
                setCampaign({
                  ...res.data.compaign,
                  startDate:res.data.compaign.startDate.split("T")[0],
                  endDate: res.data.compaign.endDate.split("T")[0]
                }) 
                setSelectedProduct(res.data.compaignProduct)
              }else{
                throw new Error(res.data?.message || "Something went wrong")
              }
            }).catch((error)=>{ 
               Swal.fire({
                  title:"Error",
                  icon:"error", 
                  text:error.message,
                  confirmButtonText:"Okay"
                });
              console.log(error);
            }) 
          },[])

  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12 hub1">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            {/* <a href="#"><i className="fa-solid fa-arrow-left"></i> Go to Seller hub</a> */}
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-6">
          <div className="navigator-breadcrumb-wrapper text-center">
            {/* <h3>Ad format</h3> */}
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-6">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <ul>
              <li>
                <a  href={`${baseUrl}dashboard/advertising/payment-wallet-summary`} >
                  <i className="fa-solid fa-wallet" /> Wallet
                </a>{" "}
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="details_page_outer">
    <div className="container">
      <div className="row mt--30">
        <div className="col-lg-6">
          <div className="nnn_dform">
            <div className="registration_form_single-input">
              <label htmlFor="f-name">Campaign Name</label>
              <input
                    type="text"
                    name="campaignName"
                    value={campaign.campaignName}
                    onChange={(e) => hendleInputChangeInput(e)}
                  />
                  
                  {errors.campaignName && (
                    <div className="error_message">{errors.campaignName}</div>
                  )}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="compaign-bot-sec pt-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="nnn_dform mt-3">
              <div className="row align-items-center">
                <div className="col-lg-2">
                  <div className="registration_form_single-input">
                    <label htmlFor="f-name"> Add Daily Budget</label>
                    {/* <input type="text"> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="registration_form_single-input">
                    {/* <label for="f-name">Campaign Name</label> */}
                   <input
                              type="text"
                              name="dailyBudget"
                              value={campaign.dailyBudget}
                              onChange={(e) => hendleInputChangeInput(e)}
                            />
                            {errors.dailyBudget && (
                              <div className="error_message">
                                {errors.dailyBudget}
                              </div>
                            )}
                    <div className="the_minimum">(Suggested Minimum $100)</div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-2">
                  <div className="registration_form_single-input">
                    <label htmlFor="f-name">Set Timeframe</label>
                    {/* <input type="text"> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="registration_form_single-input">
                        {/* <label for="f-name">Campaign Name</label> */}
                      <input
                          type="date" 
                          name="startDate"
                          value={campaign.startDate}
                          onChange={(e) => hendleInputChangeInput(e)}
                          min={minDate}
                        />
                        {errors.startDate && (
                          <div className="error_message">
                            {errors.startDate}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="registration_form_single-input">
                        {/* <label for="f-name">Campaign Name</label> */}
                         <input
                          type="date"
                          placeholder="End Date"
                          name="endDate"
                          value={campaign.endDate}
                          onChange={(e) => hendleInputChangeInput(e)}
                          min={campaign.startDate || minDate}
                        />
                        {errors.endDate && (
                          <div className="error_message">{errors.endDate}</div>
                        )}
                      </div>
                    </div>
                    <div className="the_minimum">
                      (The minimum time period required is 30 days.)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row mt--30">
          <div className="col-lg-6">
            <div className="nnn_dform">
              <div className="registration_form_single-input">
                <label htmlFor="f-name">Select Catalog</label>
                <div className="file-placeholder">
                  <label />
                  <input type="file" className="fileUpload" />
                  <div className="file-browse">
                    <span className="file-browse-txt">
                      Search by product name, SIN, or SKU
                    </span>
                    <span className="browse browse-compaign">Select</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* =============================start product listing=============================== */}
           <div className="row mt-5">
                       <div className="col-lg-6 pe-0">
                         <div
                           className="manual-compaign-table1"
                           style={{
                             borderLeft: "1px solid #f3ebeb",
                             borderRight: "1px solid #f3ebeb",
                             borderTop: "1px solid #f3ebeb",
                             borderBottom: "1px solid #f3ebeb",
                             borderRadius: "3px",
                           }}
                         >
                           {/* search start */}
                           <div
                             className="registration_form_single-input"
                             style={{ padding: "10px" }}
                           >
                             {/* <label htmlFor="f-name">Select Catalog</label> */}
                             <div className="">
                               <form role="search" className="sr-input-func">
                                 <input
                                   placeholder="Search your product by title"
                                   className="search-int form-control"
                                   type="text"
                                   value={searchText}
                                   onChange={(e) => setSearchText(e.target.value)}
                                   name="search"
                                 />
                                 <a href="#">
                                   <i className="far fa-search"></i>
                                 </a>
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
                                 <div>
                                   <SearchLoader />
                                 </div>
                               )}
                               <table className="table table-bordered table-striped br-none compaign-table">
                                 <tbody>
                                   {productList.length > 0 &&
                                     productList.map((prod, index) => (
                                       <tr
                                         className="winner__table"
                                         style={{ borderTop: "none" }}
                                         key={index}
                                       >
                                         <td className="text-center check-bg">
                                           <input
                                             id="cb1"
                                             className="checkbox"
                                             type="checkbox"
                                             checked={
                                               selectedProduct.length > 0 &&
                                               selectedProduct.some(
                                                 (p) =>
                                                   p._id === prod._id &&
                                                   p.variant?._id === prod.variant?._id
                                               )
                                             }
                                             onChange={() => selectProduct(prod)}
                                            
                                           />
                                         </td>
                                         <td style={{ minWidth: 80 }}>
                                           <img
                                             src={`${fileBasePath}/${main_thumb_img_path}/${prod?.main_image}`}
                                             alt=""
                                             className="manual-campaign-img"
                                           />
                                         </td>
                                         <td>
                                           <div className="product_details_content mamual_product_details_content">
                                             <p>{prod.product_name}</p>
                                             <ul>
                                               <li className="mamuallist">
                                                 <span>SIN:</span> {prod.variant?.sin}
                                               </li>
                                               <li>
                                                 <span>SKU:</span> {prod.variant?.sku}{" "}
                                               </li>
                                               <br></br>
                                               <li className="mamuallist">
                                                 <span>Price: </span>{" "}
                                                 {currencyCode(
                                                   prod.variant?.currency || "USD"
                                                 )}
                                                 {prod.variant?.consumerSalePrice}{" "}
                                               </li>
                                               <li>
                                                 <span>Stock: </span>{" "}
                                                 {prod.variant?.stock}
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
                               <div
                                 style={{
                                   width: "100%",
                                   height: "40vh",
                                   display: "flex",
                                   justifyContent: "center",
                                   alignItems: "center",
                                   fontWeight: 800,
                                 }}
                               >
                                 Product Not Found!
                               </div>
                             )}
                           </div>
                         </div>
                       </div>
                       <div className="col-lg-6 ps-0 mt-5 mt-md-0">
                         <div className="manual-compaign-table2">
                           <div className="rightselect d-flex justify-content-between align-items-center mb-3">
                             <h5> Product Selected ({selectedProduct.length})</h5>
                           </div>
                           <div className="table-responsive table-responsive-overflow">
                             <div className="rightselect d-flex justify-content-between align-items-center"></div>
                             <table className="table table-bordered table-striped br-none2 compaign-table ">
                               <tbody>
                                 {selectedProduct.length > 0 &&
                                   selectedProduct.map((prod, index) => (
                                     <tr
                                       className="winner__table rightselect3"
                                       key={index}
                                     >
                                       <td style={{ minWidth: 80 }}>
                                         <img
                                           src={`${fileBasePath}/${main_thumb_img_path}/${prod?.main_image}`}
                                           alt=""
                                           className="manual-campaign-img"
                                         />
                                       </td>
                                       <td>
                                         <div className="product_details_content mamual_product_details_content">
                                           <p>{prod.product_name}</p>
                                           <ul>
                                             <li className="mamuallist">
                                               <span>SIN:</span>
                                               {prod.variant?.sin}
                                             </li>
                                             <li>
                                               <span>SKU:</span> {prod.variant?.sku}
                                             </li>
                                             <br />
                                             <li className="mamuallist">
                                               <span>Price: </span>{" "}
                                               {currencyCode(
                                                 prod.variant?.currency || "USD"
                                               )}
                                               {prod.variant?.consumerSalePrice}
                                             </li>
                                             <li>
                                               <span>Stock: </span> {prod.variant?.stock}
                                             </li>
                                           </ul>
                                           <div
                                             className="close_002"
                                             onClick={() => removeProduct(prod)}
                                           >
                                             <i className="fa-solid fa-times pe-4" />
                                           </div>
                                         </div>
                                       </td>
                                     </tr>
                                   ))}
                               </tbody>
                             </table>
                             {selectedProduct.length == 0 && (
                               <div
                                 style={{
                                   width: "100%",
                                   height: "40vh",
                                   display: "flex",
                                   justifyContent: "center",
                                   alignItems: "center",
                                   fontWeight: 800,
                                 }}
                               >
                                 No Selected Products
                               </div>
                             )}
                           </div>
                         </div>
                       </div>
                     </div>

                     {/* =======================end product listing============= */}
      </div>
    </div>
    <div className="container pt-80">
      <div className="row g-4">
        <div className="col-12">
          <div className="outerhead1">
            <h2>Cost control</h2>
            <p>
              You can now specify your desired percentage for a primary success
              metric. Set your target, and we will optimize our bidding strategy
              to help you achieve it.
            </p>
            <p>
              you can set a success metric at or below your desired percentage.
              We’ll adjust bids and add targets while your campaign runs to stay
              within your specified value. Please allow up to 14 days to achieve
              the desired results.
            </p>
            <h2>Cost per order</h2>
            <div className="cost_per_order">
              <div className="row">
                <div className="col-lg-3">
                  <input type="text"
                   name="costPerOrder"
                              value={campaign.costPerOrder}
                              onChange={(e) => hendleInputChangeInput(e)}
                  />
                  {errors.costPerOrder && (
                      <div className="error_message">{errors.costPerOrder}</div>
                    )}
                  <span>(Minimum Value = 7%)</span>
                </div>
                <div className="col-lg-3">
                  <div className="orange2">%</div>
                </div>
              </div>
              <p>
                A higher percentage may drive more conversions, but we recommend
                not setting it higher than the product price you’re advertising.
                On Sellora, the minimum cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="submit_campaing">
            <ul>
              <li>
                 {submitCampaignLoading ? ( 
                    <a href={`#`} onClick={(e)=>e.preventDefault()}>Submiting..</a>
                  ):(
                    <a href={`#`} onClick={(e)=>submitCampaign(e)}>Submit Campaign</a> 
                  )} 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

function page() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <InfluencerPage />
    </Suspense>
  )
}
export default page