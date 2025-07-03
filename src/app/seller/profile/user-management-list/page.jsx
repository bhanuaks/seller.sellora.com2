"use client";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { AppContext } from "@/app/contaxtData/contextData";
import $ from "jquery";
import { baseUrl } from "@/Http/helper";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { citizenshipList } from "@/Http/citizenList";
import { list } from "postcss";
import TableskeltonLoader from "@/app/skeleton_loader/TableskeltonLoader";

function page() {
 const sanitize = (val) => typeof val === "string" ? val.replace(/\?/g, "") : val;
 const { globalData, setGlobalData } = useContext(AppContext);
     const countryRef = useRef();
     const router = useRouter();
    // const queryParam = new URLSearchParams(window.location.search);
     const [errors, setErrors] = useState({});
     const [sellor, setSellor] = useState(null);
     const phoneInputRef = useRef(null);
     const [addressData, setAddressData] = useState({
       
       country_s_name: "in",
       mobile_code: "91",
       name: "",
       email: "",
       mobile: "",
       
     });

     const [userList, setUserList] = useState([])
     const [loadingPopup, setLoadingPopup] = useState(false);
     
    //const currentPage = sanitize(router.query?.page || '1');
    //const pageSize = sanitize(router.query?.size || '10');
     
      
     //const queryParam = new URLSearchParams(window.location.search);
     //const pageSize = sanitize(queryParam.get('size')) || 10
     //const currentPage = sanitize(queryParam.get('page')) || 1

    //const [pageSize, setPageSize] = useState(10)
    //const [currentPage, setCurrentPage] = useState(1)

    const [pagination, setPagination] = useState(null)
      const [paginationError, setPaginationError] = useState(null)
      const [refreshList, setRefreshList] = useState(1)
      const [totalData, setTotalData] = useState({})
      const [isLoading, setIsLoading] = useState(false)
    
      const [searchText, setSearchText] = useState({search:''})
        function updateSearchTaxt(e){
          const {name, value} = e.target
          setSearchText((preData)=>({
            ...preData,
            [name]:value
          }))

          //searchProduct();

        }
        const [currentPage, setCurrentPage] = useState(1)
        const [pageSize, setPageSize] = useState(10)
        useEffect(() => {
            if (typeof window !== 'undefined') {
              //console.log('kkkkkkkkkk')
              const queryParam = new URLSearchParams(window.location.search);
              //const tokenValue = params.get('token');
              //setToken(tokenValue);
              if(pageSize == 1 && currentPage == 10){

              } else {
              setCurrentPage(sanitize(queryParam.get('page')));
              setPageSize(sanitize(queryParam.get('size')))
              }
            }
          }, []);
          
     
     
     useEffect(() => {
         const input = document.querySelector("#mobile_code");
     
         if (input) {
           const iti = intlTelInput(phoneInputRef.current, {
             initialCountry:
               addressData && addressData.country_s_name
                 ? addressData.country_s_name
                 : "in",
             separateDialCode: true,
             // utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js',
           });
     
           const onCountryChange = () => {
             const selectedCountryData = iti.getSelectedCountryData();
             setAddressData((preData) => ({
               ...preData,
               mobile_code: selectedCountryData.dialCode,
               country_s_name: selectedCountryData.iso2,
             }));
           };
           phoneInputRef.current.addEventListener("countrychange", onCountryChange);
     
           return () => {
             iti.destroy();
           };
         }
       }, [setAddressData, addressData.country_s_name]);
     
   const fetchUserList = (sellerId, currentPage, pageSize) => {
    setIsLoading(true)
    const params = new URLSearchParams(); 
      params.append("seller_id", sellerId);
      params.append("page", currentPage || 1);
      params.append("pageSize", pageSize || 10);
      if(searchText.search){ 
        params.append("searchText", searchText.search);
        //params.append("searchBy", searchText.searchBy); 
      }  
    
    fetch(
          `${baseUrl}api/seller/user-management?${params.toString()}`,
          {
            method: "GET",
          }
        )
          .then((response) => {
            if (!response.ok) {
              $(".loaderouter").css("display", "none");
              setIsLoading(false)
              throw new Error("Network Error");
            }
            return response.json();
          })
          .then((res) => {
            $(".loaderouter").css("display", "none");
            
            if (res.status) {
              // check complete step
              //alert(res.data.data.complete_step)
              //console.log(res)
              setUserList(res.data.list)
              setPagination(res.data.pagination)
              //setTotalData(res.data.totalData || {})
            }
            setIsLoading(false)
            
          });

   }

function searchProduct(e){
  e.preventDefault();  
  if(globalData.sellor){  
      const params = new URLSearchParams(); 
      params.append("seller_id", globalData.sellor?._id);
      params.append("page", currentPage || 1);
      params.append("pageSize", pageSize || 10);
      if(searchText.search){ 
        params.append("searchText", searchText.search);
       //params.append("searchBy", searchText.searchBy);
        
      }
      
         
          fetch(`${baseUrl}api/seller/user-management?${params.toString()}`,{
              method:"GET", 
          }).then((response)=>{
              if(!response.ok){ 
                  throw new Error("Network Error")
              }
              return response.json();
          }).then((res)=>{ 
              if(res.status){
                setUserList(res.data.list)
                setPagination(res.data.pagination)
                //setTotalData(res.data.totalData || {})
              }  
          })
      }
  }


  function paginationFun(page, size, e){
    e.preventDefault();
    const params = new URLSearchParams(); 
    //params.append("type", type);
    setCurrentPage(page)
    setPageSize(size)
    
    let link = `${baseUrl}seller/profile/user-management-list?size=${size}&page=${page}&${params}`
    router.push(link); 
  }

     useEffect(() => {
      if (globalData.sellor) {
        // $(".loaderouter").css("display", "flex");
        

         fetchUserList(globalData.sellor._id, currentPage, pageSize);


      }
    }, [globalData.sellor, currentPage, pageSize]);
   
     
   
     const updateInputData = (e) => {
       const { name, value } = e.target;
   
       if(name=="zip_code"){
         let alphaNumericValue = value.replace(/[^a-zA-Z0-9]/g, '');
         if(alphaNumericValue && alphaNumericValue.length >8){
           alphaNumericValue = alphaNumericValue.slice(0,8)
         }
         setAddressData((preData)=>({
             ...preData,
             [name]:alphaNumericValue
           })) 
         return
       }
   
       if (name == "mobile") {
         const numericValue = value.replace(/[^0-9]/g, "");
         setAddressData((preData) => ({
           ...preData,
           [name]: numericValue,
         }));
         return;
       }
       setAddressData((preData) => ({
         ...preData,
         [name]: value,
       }));
     };
   
     function submitUpdateForm(e) {
       e.preventDefault();
       setErrors({});
       //console.log(globalData.sellor._id, addressData)
       //$(".loaderouter").css("display", "flex");
       setLoadingPopup(true)
       fetch(`${baseUrl}api/seller/user-management`, {
         method: "POST",
         body: JSON.stringify({
           seller_id:globalData.sellor._id,
           name:addressData.name,
           email:addressData.email,
           mobile:addressData.mobile,
           country_s_name:addressData.country_s_name,
           mobile_code:addressData.mobile_code
           
         }),
       })
         .then((response) => {
           if (!response.ok) {
             //$(".loaderouter").css("display", "none");
             setLoadingPopup(false)
             throw new Error("Network Error");
           }
           return response.json();
         })
         .then((res) => {
           //$(".loaderouter").css("display", "none");
           setLoadingPopup(false)
           if (res.status) {
             //console.log(res.seller)
             //setAddressData(addressData);
             //toast.success("Success! Return Address Saved.");
             setAddressData({name:"", email:"", mobile:""})
             fetchUserList(globalData.sellor._id, currentPage, pageSize);
             const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('add-new-user-Modal'));
             modal.hide();
             //router.push("/seller/profile/user-management-list");
             //$("#return-address-Modal").modal('hide')
 
             //$('#return-address-Modal').hide(true)
             //$('.modal-backdrop').remove();
             //$('body').removeClass('modal-open');
             //$('body').css('padding-right', '');
 
             
 
           } else if (res.data.status_code == 403) {
             setErrors(res.data.errors);
           }
         });
         
     }

     function changeListSize(e){
         const { name, value } = e.target
         let link = `${baseUrl}seller/profile/user-management-list?size=${value}&page=${1}`
         router.push(link); 
       }

       const statusChange = (e, id) => {
           // $(".loaderouter").css("display", "flex");
                  fetch(`${baseUrl}api/seller/user-status-change`, {
                    method: "POST",
                    body: JSON.stringify({
                      user_id:id,
                      
                      
                    }),
                  })
                    .then((response) => {
                      if (!response.ok) {
                        
                        $(".loaderouter").css("display", "none");
                        throw new Error("Network Error");
                      }
                      return response.json();
                    })
                    .then((res) => {
                      $(".loaderouter").css("display", "none");
                      
                      
                      if (res.status) {
                        
                        fetchUserList(globalData.sellor._id, currentPage, pageSize);           
                        
                        
            
                      } else if (res.data.status_code == 403) {
                        
                        fetchUserList(globalData.sellor._id, currentPage, pageSize);
                        
                      }
                    });

       }
 
 
  return (
    <>
  <div className="notification_breadcomb_rts-navigation-area-breadcrumb">
    <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
    {/* loader start */}
      <div className="loaderouter">
        <div className="loader"></div>
      </div>
      {/* loader end */}
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="notification_breadcomb">
            <ul>
              <li>
                <Link href="/dashboard">Dashboard</Link>{" "}
              </li>
              <li>
                <a href="#" className="active_002">
                  User Management List
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <div className="search_outer">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="breadcome-heading">
                    <form role="search" onSubmit={searchProduct} className="sr-input-func">
                      <input
                        type="text"
                        placeholder="Search"
                        className="search-int form-control"
                        name='search'
                        value={searchText.search}
                        onChange={(e)=>updateSearchTaxt(e)}
                      />
                      <Link href="#" onClick={searchProduct}>
                        <i className="far fa-search" />
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right_button">
                <ul>
                  <li>
                    <a href="#" data-bs-toggle="modal"
                  data-bs-target="#add-new-user-Modal">Add New User</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table
            className="table table-bordered user-man"
            style={{ marginTop: 20 }}
          >
            <thead className="table__head">
              <tr className="winner__table">
                <th width={210}>Name</th>
                <th width={330}>E-mail Address</th>
                <th width={100}>Status</th>
                <th width={150}> </th>
              </tr>
            </thead>
            <tbody>
              {isLoading?(
                <TableskeltonLoader totalRows={11} totalColumns={4} />
            ):
              userList && userList.map((list, index) => {
                return (

                  <tr className="winner__table" key={`userList-${index}`}>
                  <td>
                    <div className="name_348937">{list.name}</div>
                  </td>
                  <td>{list.email}</td>
                  <td>
                    {list.status != 'Pending' ?
                    <a href="#" onClick={(e) => statusChange(e, list._id)}>{list.status}</a>
                    :
                    list.status

                  }
                    </td>
                  
                  <td>
                    <div className="manage_permission">
                      <Link href={`${baseUrl}/seller/profile/manage-permission?token=${btoa(list._id)}`}>Manage Permission</Link>
                    </div>
                  </td>
                </tr>

                )
              

              })
            }
              
              

            </tbody>
          </table>
        </div>
        <div className="fixed-table-pagination" style={{ padding: 0 }}>
          <div className="row">
            <div className="col-lg-3">
              <select className="form-select" name="size"
                value={pagination?pagination.pageSize:10}
                onChange={(e)=>changeListSize(e)}>
                  <option value={20}>20 results per page</option>
                  <option value={10}>10 results per page</option>
              </select>
            </div>
            <div className="col-lg-9">
              <div className="pull-right pagination">
                {pagination && pagination.totalPages>1 ?(
                                  <ul className="pagination">
                
                                    
                                  <li className={`page-pre ${pagination.page <= 1? "pointer-events-none opacity-50 deactive_btn":""}`}>
                                    <Link href="#" onClick={(e)=>{
                                      if(pagination.page > 1){ 
                                        paginationFun((pagination.page-1),  pagination.pageSize, e)
                                      }else{
                                        e.preventDefault();
                                      }
                                    }
                                      }>
                                      <i className="fa-solid fa-arrow-left" />
                                    </Link>
                                  </li>
                                   
                
                            {Array.from({length:pagination.totalPages}, (_, i)=>{
                                if (Math.abs(pagination.page - (i + 1)) <= 3) {
                                  return ( 
                                    <li className={`page-number current  ${i} ${pagination.page== (i+1)?'active':''}`} key={i} >
                                        <a   href="#"  onClick={(e)=>paginationFun((i+1),  pagination.pageSize, e)}>
                                          {i + 1} 
                                        </a>
                                    </li> 
                                  );
                                } 
                                return null; 
                               })} 
                                  
                                  <li
                                      className={`page-next ${pagination.page == pagination.totalPages ? "pointer-events-none opacity-10 deactive_btn" : ""}`}
                                    >
                                      <Link
                                        href="#"
                                        onClick={(e) => {
                                          if (pagination.page < pagination.totalPages) {
                                            paginationFun(parseInt(pagination.page) + 1, pagination.pageSize, e);
                                          } else {
                                            e.preventDefault();
                                          }
                                        }}
                                      >
                                        <i className="fa-solid fa-arrow-right" />
                                      </Link>
                                    </li>
                                  </ul>
                              ):null}
                
                { /* <ul className="pagination">
                  <li className="page-pre">
                    <a href="#">
                      <i className="fa-solid fa-arrow-left" />
                    </a>
                  </li>
                  <li className="page-number">
                    <a href="#">1</a>
                  </li>
                  <li className="page-number">
                    <a href="#">2</a>
                  </li>
                  <li className="page-number">
                    <a href="#">3</a>
                  </li>
                  <li className="page-next">
                    <a href="#">
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </li>
                </ul>
                */ }
              </div>
            </div>
          </div>
        </div>
      </div>
       
      
    </div>
  </div>

{/* popup-1-add-new-user-Modal */}
  <div
    className="modal fade"
    id="add-new-user-Modal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <form action="#" onSubmit={(e) => submitUpdateForm(e)}>
        <div className="modal-header">
          <h5 className="modal-title title_request" id="exampleModalLabel">
            Add New User
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <div className="request_form">
            <label>Name<span className="required">*</span></label>
            <input
              type="text"
              name="name"
              placeholder=""
              className="form-control"
            value={addressData.name}
                                    onChange={(e) => updateInputData(e)}
                                  />
                                  {errors.name && errors.name != "" ? (
                                    <span
                                      id="name_error"
                                      className="input-error-tip"
                                      style={{ display: "inline-block" }}
                                    >
                                      {errors.name}
                                    </span>
                                  ) : (
                                    ""
                                  )}
            <label>
              Email Id<span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email Id"
              className="form-control"
            value={addressData.email}
                                    onChange={(e) => updateInputData(e)}
                                  />
                                  {errors.email && errors.email != "" ? (
                                    <span
                                      id="name_error"
                                      className="input-error-tip"
                                      style={{ display: "inline-block" }}
                                    >
                                      {errors.email}
                                    </span>
                                  ) : (
                                    ""
                                  )}
            <label>
              Contact Number<span className="required">*</span>
            </label>
            <input
              type="text"
              id="mobile_code"
              name="mobile"
              ref={phoneInputRef}
              placeholder=""
              className="form-control"
            value={addressData.mobile}
                                    onChange={(e) => updateInputData(e)}
                                  />
                                  {errors.mobile && errors.mobile != "" ? (
                                    <span
                                      id="name_error"
                                      className="input-error-tip"
                                      style={{ display: "inline-block" }}
                                    >
                                      {errors.mobile}
                                    </span>
                                  ) : (
                                    ""
                                  )}
          </div>
        </div>
        <div className="modal_button">
          <button
            type="button"
            className="orange-btn cancel"
            data-bs-dismiss="modal"
            disabled={loadingPopup}

          >
            Cancel
          </button>
          <button className="orange-btn"
          disabled={loadingPopup}

          >
             {loadingPopup ? 'Please wait...' : 'Save'}
          </button>
          
        </div>
        </form>
      </div>
    </div>
  </div>

</>

  )
}

export default page
