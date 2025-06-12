"use client"
import { baseUrl } from '@/Http/helper'
import React, { useEffect, useState, Suspense, useRef  } from 'react'
import $ from 'jquery'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import  '../../../../public/front/loader.css'
// import  '../../../../public/front/error.css' 
import { ToastContainer, toast } from 'react-toastify'; 
import HelpAndVideoTopSection from '@/app/seller/HelpAndVideoTop'

const page = ({params}) => {
 
  const CategoryPage = ({params})=>{
  const router = useRouter();
  const brandRef = useRef();
   const searchParams = useSearchParams();
  const search = searchParams.get("search")
  const entryType = searchParams.get("ref") || "single"
  const [searchText, setSearchText] = useState(search?search:"");
  const [categoryList, setCategoryList] = useState([]);
  const [selectCategory, setSelectCategory] = useState({
    category:'',
    category_id:'',
    category_slug:'',
    subcategory:'',
    subcategory_id:'',
    subcategory_slug:'',
    childcategory:'',
    childcategory_id:'',
    childcategory_slug:''
  })
  const [hoverCategory, setHoverCategory] = useState({
    category:'',
    subcategory:'',
    childcategory:''
  })


  useEffect(()=>{
    
    $('.loaderouter').css('display','flex');

    fetch(`${baseUrl}api/front/fetch-categories?search=${search?search:''}`,{
      method:"GET"
    }).then((response)=>{
      if(!response.ok){
        $('.loaderouter').css('display','none'); 
        throw new Error("Network Error")
      }
      return response.json();
    }).then((res)=>{
         $('.loaderouter').css('display','none'); 
        if(res.status){
          setCategoryList(res.data.categories)
        }
    }) 

  },[search])

  const selectCategoryFun =(e, category, subcategory=null, childcategory=null)=>{ 
    e.preventDefault(); 
    $('#caegory_error_message').html("")
    setSelectCategory((preData)=>({
      ...preData, 
      category : category.name,
      category_id : category._id,
      category_slug : category?category.slug:'', 

      subcategory : subcategory?subcategory.subCategoryName:'',
      subcategory_id : subcategory?subcategory._id:'',
      subcategory_slug : subcategory?subcategory.slug:'', 
      childcategory : childcategory?childcategory.childCategoryName:'',
      childcategory_id : childcategory?childcategory._id:'',
      childcategory_slug : childcategory?childcategory.slug:''
    })) 

    if(brandRef.current){
      brandRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }


  const searchCategorySubmit=(e)=>{
    e.preventDefault();
    const link = `${baseUrl}dashboard/categories?search=${searchText}`
    setSelectCategory({
      category:'',
      category_id:'',
      category_slug:'',
      subcategory:'',
      subcategory_id:'',
      subcategory_slug:'',
      childcategory:'',
      childcategory_id:'',
      childcategory_slug:''
    })
    router.push(link);
  }

  
  const selectBrand=(e)=>{
    e.preventDefault();
    $('#caegory_error_message').html("")
    if(selectCategory.category_id =="" || selectCategory.category_id == null){
      $('#caegory_error_message').html("Please select category first.")
      return
    }
    const link = `${baseUrl}dashboard/brand-choose?ref=${entryType}&category=${selectCategory.category_id}&subCategory=${selectCategory.subcategory_id}&childcategory=${selectCategory.childcategory_id}`
    
    router.push(link);
  }
  

  return (
    < >
       <div className="rts-navigation-area-breadcrumb pb--10"> 
        <ToastContainer 
                        position="top-center"
                        autoClose={3000} // Toast disappears after 3 seconds
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
               <div className="loaderouter"><div className="loader"></div></div> 
                {/* loader end */}

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="navigator-breadcrumb-wrapper">
              <h3> 
                {entryType == "bulk" && "Bulk Catalog Upload"}
                {entryType == "single" && "Add a single listing"}
              </h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <HelpAndVideoTopSection />
          </div>
        </div>
      </div>
    </div>
    <div className="container">

      <div className="row">
        <div className="col-lg-8 offset-lg-2"> 
          <div className="margin-50">
            <ol className="steps">
              <li className="step is-active" data-step="1">
                <span>Categories</span>
              </li>
              <li className="step" data-step="2">
                <span>Brand</span>
              </li>
              <li className="step" data-step="3">
                <span>
                {entryType == "bulk" && "Download"}
                {entryType == "single" && "Create New Listing"}
                </span>
              </li>
            </ol>

            <div className="form_outer">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="form_s2">
                    <h2 className="">Search Category</h2>

                    <div className="category_search pb--10">
                      <form role="search" className="sr-input-func"  onSubmit={(e)=>searchCategorySubmit(e)}>
                        <input type="text" placeholder="Enter Category Name" className="search-int form-control" 
                        value={searchText}
                        onChange={(e)=>{setSearchText(e.target.value)}}/>
                        <a href="#" onClick={(e)=>searchCategorySubmit(e)}><i className="fa fa-search"></i></a>
                      </form>
                    </div>

                    <div className="bredcrumb_list">
                      <ul>
                        {selectCategory.category && ( 
                          <li><a href="#">{selectCategory.category}</a></li>
                        )}
                         {selectCategory.subcategory && ( 
                          <li><a href="#">{selectCategory.subcategory}</a></li>
                        )}
                         {selectCategory.childcategory && ( 
                          <li><a href="#">{selectCategory.childcategory}</a></li>
                        )}
                        {/* <li><a href="#">Bottom Wear</a></li>
                        <li><a href="#">Capris</a></li> */}

                      </ul>
                    </div>
                    <div className="row align-items-center">
                    <div className="col-lg-4">

                      <nav className="vertical-menu">
                        <ul className="nav flex-column customnav">
                          {/* <!--  <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li> --> */}

                {categoryList.length > 0 ?
                  categoryList.map((categoryItem, index)=>(
                    <li className="nav-item dropdown" key={categoryItem._id}>
                            <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="servicesDropdown"
                              role="button" onClick={(e)=>selectCategoryFun(e, categoryItem)}>{categoryItem.name} <span className={`${categoryItem.subcategories.length>0?"menu-arrow":""}`}> </span></a>
                            

                            {categoryItem.subcategories && categoryItem.subcategories.length > 0 ? (
                            <ul className="dropdown-menu submenu" >
                               {categoryItem.subcategories.map((subCateIten, key2)=>(
                                <li className="dropdown-submenu" key={subCateIten._id}>
                                  <a className="dropdown-item dropdown-toggle"
                                  href="javascript:void(0)" onClick={(e)=>selectCategoryFun(e, categoryItem,subCateIten)}>{subCateIten.subCategoryName} <span className={`${subCateIten.childcategory.length>0?"menu-arrow":""}`}> </span></a> 
                                    
                                    {subCateIten.childcategory.length>0?(

                                      <ul className="dropdown-menu child-submenu"  >
                                         {subCateIten.childcategory.map((childCatItem, key3)=>(
                                           <li key={childCatItem._id}><a className="dropdown-item" href="#"  onClick={(e)=>selectCategoryFun(e, categoryItem,subCateIten,childCatItem)}>{childCatItem.childCategoryName}</a></li>
                                         ))}
                                           
                                      </ul>

                                    ):null} 
                                </li>  
                               ))}
                              
                            </ul>
                            ):null}
                          </li>
                  ))
                :null}
                          
 

                        </ul>
                      </nav>


                    </div>

                    
                   

                    <div className="col-lg-8">
                      <div className="box2343">
                      <div className="bredcrumb_list">
                      <ul>
                        {selectCategory.category && ( 
                          <li><a href="#">{selectCategory.category}</a></li>
                        )}
                         {selectCategory.subcategory && ( 
                          <li><a href="#">{selectCategory.subcategory}</a></li>
                        )}
                         {selectCategory.childcategory && ( 
                          <li><a href="#">{selectCategory.childcategory}</a></li>
                        )}
                         
                      </ul>
                    </div> 
                    
                        <p>Please select a brand to start selling in this Category.</p> 
                        <div className="select_btn" ref={brandRef}><Link href={`${baseUrl}dashboard/brand-choose`} onClick={(e)=>selectBrand(e)}>Select Brand</Link></div> 
                      <div id='caegory_error_message' className='mt-5' style={{color:"red"}}></div>
                      </div>
                    </div>
                    </div>

                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>


    </div>
    </>
  )
}
return (
  <Suspense fallback={<div>Loading...</div>}> 
    <CategoryPage params={params}/>
</Suspense>
)
}

export default page