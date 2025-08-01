"use client"
import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import DownloadExcelCompnents from '../brand-choose/DownloadExcelCompnents'

const ListingFilter = ({seller, resetFilter, submitFilter, filterData, setFilterData, downloadProduct, selectedListing}) => {

   

    
    const [categoryList , setCategoryList] = useState([])
    const [searchCategoryList , setSearchCategoryList] = useState([])
    const [categorySText, setCatyegorySText] = useState('')
    const [brandList , setBrandList] = useState([])

    function searchCategory(e){
      // SEARCH CATEGORY
      const { name, value } = e.target
      setCatyegorySText(value)
      let SearchedCategory = [];
        categoryList.forEach((catItem) => { 
           if(catItem.name.toLowerCase().includes(value.toLowerCase())){
            SearchedCategory.push(catItem)
           }
        })
        setSearchCategoryList(SearchedCategory) 
    }


    function updatefilterData(e){
      const { name, value, checked } = e.target
 
      if (name === "brand") {
        setFilterData((prevData) => {
          const brandList = prevData.brand || [];
      
          if (checked) {
            return {
              ...prevData,
              brand: [...brandList, value],
            };
          } else {
            return {
              ...prevData,
              brand: brandList.filter((item) => item !== value),
            };
          }
        });

        return
      }

 
      setFilterData((preData)=>({
        ...preData,
        [name]:value
      }))
    }


    useEffect(()=>{
      
      if(seller){  
          fetch(`${baseUrl}api/seller/fetch-brand-category?seller_id=${seller._id}`,{
            method:"GET", 
        }).then((response)=>{
            if(!response.ok){ 
                throw new Error("Network Error")
            }
            return response.json();
        }).then((res)=>{ 
            if(res.status){
              setCategoryList(res.data.category)
              setBrandList(res.data.brand)
              
            }  
        })
      }
    },[seller])


  return (
    <tr className="winner__table">
    <th colSpan={11}>
      <table className="table_filter">
        <tbody>
          <tr>
            <td>
              <div className="d-flex">
                <div className="fillter">
                  <Link href="#">
                    <i className="fa-solid fa-filter" />
                  </Link>
                </div>
                <div className="dropdown demo_drop">
                  <button
                    className="btn dropdown-toggle menu_button"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    
                    Category
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <div className="default">
                      <ul>
                      <li>
                          <form
                            role="search"
                            className="sr-input-func2"
                          >
                            <input
                              type="text"
                              placeholder=" "
                              className="search-int form-control"
                              onChange={(e)=>searchCategory(e)}
                            />
                            <Link href="#">
                              <i className="fa fa-search" />
                            </Link>
                          </form>
                        </li>

                      {!categorySText && categoryList.length > 0 ? categoryList.slice(0,5).map((categoryItem, index)=>(
                           <li key={index}>
                           <label htmlFor={`category_${index}`}>
                             <input type="radio" name="category"  
                             id={`category_${index}`} 
                             value={categoryItem._id}
                             onChange={(e)=>updatefilterData(e)}
                             checked = {filterData.category==categoryItem._id?true:false}
                             />
                             {categoryItem.name}
                           </label>
                         </li>
                      )):null}

                       {categorySText && searchCategoryList.length > 0 ? searchCategoryList.map((categoryItem, index)=>(
                           <li key={index}>
                           <label htmlFor={`category_${index}`}>
                           <input type="radio" name="category"  
                             id={`category_${index}`} 
                             value={categoryItem._id}
                             onChange={(e)=>updatefilterData(e)}
                             checked = {filterData.category==categoryItem._id?true:false}
                             />
                             {categoryItem.name}
                           </label>
                         </li>
                      )):null}
                         
                        
                      </ul>
                    </div>
                  </ul>
                </div>
                <div className="dropdown demo_drop">
                  <button
                    className="btn dropdown-toggle menu_button"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    
                    Brand
                  </button>
                  <ul
                    className="dropdown-menu  "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <div className="default">
                      <ul>

                      {brandList.length > 0 ? brandList.map((brand, index)=>(
                           <li key={index}>
                           <label htmlFor={`barand_${index}`}>
                             <input type="checkbox" name="brand"  id={`barand_${index}`} 
                              value={brand._id}
                              onChange={(e)=>updatefilterData(e)}
                              checked = {filterData.brand.includes(brand._id)?true:false}
                              />
                             &nbsp;{brand.name}
                           </label>
                         </li>
                      )):null}

                          
                      </ul>
                    </div>

                    {/* <li>
                     
                      <Link className="dropdown-item" href="#">
                        Aahil Mart
                      </Link>
                    </li> */}
                  </ul>
                </div>
                {/* <div className="dropdown demo_drop">
                  <button
                    className="btn dropdown-toggle menu_button"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  > 
                    Condition
                  </button>
                  <ul
                    className="dropdown-menu list_style_1"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="dropdown-item" href="#">
                        New
                      </Link>
                    </li>
                  </ul>
                </div> */}
                {/* <div className="dropdown demo_drop">
                  <button
                    className="btn dropdown-toggle menu_button"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    
                    Listing Quality
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <div className="default">
                      <ul>
                        <li>
                          <label>
                            <input type="radio" name="default" />
                            Excellent
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name="default" />
                            Good
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name="default" />
                            Average
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name="default" />
                            Nose
                          </label>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div> */}
                <div className="dropdown demo_drop">
                  <button
                    className="btn dropdown-toggle menu_button"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    
                    Price
                  </button>
                  <ul
                    className="dropdown-menu price_min-max"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <input type="text" placeholder="$ Min" 
                        onChange={(e)=>updatefilterData(e)}
                        value={filterData.min_price || ""}
                        name='min_price'
                         onBlur={() => { 
                            if (Number(filterData.max_price) < Number(filterData.min_price)) {
                              setFilterData((preData) => ({
                                ...preData, 
                                max_price: filterData.min_price 
                              }))
                            }
                          }}
                        />
                    </li>
                    <li>
                      <input type="text" placeholder="$ Max" 
                        onChange={(e)=>updatefilterData(e)}
                        value={filterData.max_price || ""}
                        name='max_price'
                       onBlur={() => { 
                            if (Number(filterData.max_price) < Number(filterData.min_price)) {
                              setFilterData((preData) => ({
                                ...preData, 
                                max_price: filterData.min_price 
                              }))
                            }
                          }}
                        />
                    </li>
                  </ul>
                </div>
                <div className="dropdown demo_drop">
                  <button
                    className="btn dropdown-toggle menu_button"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    
                    Variants
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <div className="default">
                      <ul>
                        <li>
                          <label>
                            <input type="radio" name="variants" 
                            checked={filterData.variants == "single"?true:false}
                              value={"single"}
                             onChange={(e)=>updatefilterData(e)}
                             />
                            Single listing
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name="variants" 
                              value={"multi"}
                              checked={filterData.variants == "multi"?true:false}
                              onChange={(e)=>updatefilterData(e)}
                             />
                            Variants
                          </label>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div>
                <div className="menu_tab">
                  <ul>
                    <li className="apply_button">
                      <Link href="#" onClick={(e)=>submitFilter(e)}>Apply</Link>
                    </li>
                    <li className="apply_button">
                      <Link href="#"  onClick={(e)=>resetFilter(e)}>Reset</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </td>
            <td>
              <div className="request_download">
                {/* <div className="download_button">
                  <Link href="#" 
                  onClick={(e)=>downloadProduct(e)}
                  >Download</Link>
                </div> */}
                
                {selectedListing.length > 0 && filterData.category && filterData.downloadRequest == "Yes" && (
                  <DownloadExcelCompnents 
                  category={filterData.category}
                  subCategory={""}
                  childcategory={""}
                  selectedListing={selectedListing} 
                 />
                )}
                

                 <div className="download_button">
                  <Link href="#"
                  type="button"
                  // className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#categoryModal2"
                  >Request Download</Link>
                </div>

                {/* <i className="fa-solid fa-circle-check" /> */}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </th>
  </tr>
  )
}

export default ListingFilter