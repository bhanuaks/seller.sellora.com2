"use client"
import { baseUrl, createFormData, product_thumb_img_path1, product_thumb_img_path2, product_thumb_img_path3, product_thumb_img_path4, product_thumb_img_path5, product_thumb_img_path6, product_thumb_img_path7 } from '@/Http/helper'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import $ from 'jquery'
// import '../../../../../public/front/error.css'
import '../../../../../public/front/loader.css'
import { ToastContainer, toast } from 'react-toastify';
import { AppContext } from '@/app/contaxtData/contextData'
import { useRouter, useSearchParams } from 'next/navigation'
import ProductImageSection from './productImageSection'
import UploadMainImageSection from './UploadMainImageSection'
import Link from 'next/link'
import { Suspense } from "react";
import KeyAttributeSection from './keyAttributeSection'
import { colorList, countriesList, materialType } from '@/Http/citizenList'
import AddSingleListingSteper from '../AddSingleListingSteper'
import Swal from 'sweetalert2'

 


const page = ({params}) => {


    const AddProductPage =({params})=>{

     const {globalData, setGlobalData } = useContext(AppContext);
     const router = useRouter();
     const [sellor, setSellor] = useState(null); 
     const [category, setCategory] = useState(null); 
     const [subcategory, setSubcategory] = useState(null); 
     const [childcategory, setChildcategory] = useState(null); 
     const [brand, setBrand] = useState(null); 
     const [issaveProccess, setIssaveProccess] = useState(false); 
     const [compliance, setCompliance] = useState(null); 
     const [dynamicField, setDynamicField] = useState([]); 
     const [keyAttributes, setKeyAttributes] = useState([])
     
    const searchParams = useSearchParams();

    const category_id = searchParams.get('category')
    const subcategory_id = searchParams.get('subCategory')
    const childcategory_id = searchParams.get('childcategory')
    const brand_id = searchParams.get('brand')
    const product_id = searchParams.get('product_id') || ""
    const copy = searchParams.get('copy') || ""
     const errorRedirctUtl = `${baseUrl}dashboard/categories`
    const [errors, setErrors] = useState({})

     const [image, setImage] = useState([])
    const [imagePath, setImagePath] = useState([]);


     const [productDetails, setProductDetails]  = useState({
        category_id:category_id,
        subcategory_id:subcategory_id,
        childcategory_id:childcategory_id,
        brand_id:brand_id,

        product_name:"",
        // product_id:"",
        // product_id_type:"",
        product_description:"",
        key_feature:[],
        search_keywords:"",
        target_gender:"",
        age_range:"",
        material:"",
        model_name:"",
        model_number:"",
        manufacture_part_number:"",
        safety_warning:"",
        country_of_origin:"",
        manufacturer_details:"",
        packer_details:"",
        importer_details:"",
        main_image:"", 

        taxCode: "",
        taxRate: "",
        fulfillmentBy: "Seller",
        shippingProvider: "Merchant",
        currency: "USD",


        packageWeight:"",
        packageBreadth:"", 

        product_length:"",
        product_length_unit : "",
        product_width:"",
        product_width_unit : "",
        product_weight:"",
        product_weight_unit : "",
        packageLength:"",
        packageLengthUnit: "",
        packageWidth:"",
        packageWidthUnit:"",
        packageHeight:"",
        packageHeightUnit:"",
        color:"",
        size:"",
        style:"",
        pettern:"",
        unit_coun:"",
        unit_count_type:"",
        item_type_name:"",
        recommanded_use:"",
        packageWeightUnit:"",

        productHeight:"",
        productHeightUnit:"",
        numberOfItem:"",
        handling_time:"",
        
     })
 

     const [keyFeature, setKeyFeature] = useState([''])
     const addMoreKeyFeature = () => {
        setKeyFeature([...keyFeature, '']);
      };
    
      const deleteMoreKeyFeature =(index)=>{
        const updatedProperty = keyFeature.filter((_,i)=> i !== index);
        setKeyFeature(updatedProperty); 
        setTimeout(() => {
            setProductDetails((preData)=>({
                ...preData,
                key_feature:keyFeature
            })) 
        }, 100);
      }

      function updateKeyFeature(index, value){ 
        setKeyFeature((prevData)=> 
            prevData.map((item,i)=>(i==index? value:item)), 
        )
        setTimeout(() => {
            setProductDetails((preData)=>({
                ...preData,
                key_feature:keyFeature
            })) 
        }, 100);
        
      }


    useEffect(()=>{  
        if(!category_id || !brand_id){
            router.push(errorRedirctUtl)
        }

        if(globalData.sellor){
        //   $('.loaderouter').css('display','flex') 
          fetch(`${baseUrl}api/seller/get-category-and-brand`,{
            method:"POST", 
            body:JSON.stringify({
                seller_id:globalData.sellor._id,
                category_id,
                subcategory_id, 
                childcategory_id, 
                brand_id,
                seller:"yes",
                product_id:product_id,
                withData:"Compliance"
            })
          }).then((response)=>{
              if(!response.ok){
                // $('.loaderouter').css('display','none')
                throw new Error('Network Error')
              }
              return response.json();
          }).then((res)=>{
            //   $('.loaderouter').css('display','none') 
              if(res.status){ 
               
                if(res.data.brand.status != 1){
                    router.push(errorRedirctUtl)
                }
                // if(subcategory_id && !(res.data.subcategory)){
                //     router.push(errorRedirctUtl)
                // }
                // if(childcategory_id && !(res.data.childcategory)){
                //     router.push(errorRedirctUtl)
                // }

                if(brand_id && !(res.data.brand)){
                    router.push(errorRedirctUtl)
                }

                if( !(res.data.category)){
                    router.push(errorRedirctUtl)
                }
                setCompliance(res.data.compliance || null)
                setProductDetails((prevData)=>({
                    ...prevData,
                    seller_id:res.data.seller._id
                }))  
                setSellor(res.data.seller)
                setCategory(res.data.category)
                setSubcategory(res.data.subcategory)
                setChildcategory(res.data.childcategory)
                setBrand(res.data.brand)
                setDynamicField(res.data.category.dynamicField)
                if(product_id){ 
                    const updateProd = res.data.product;
                    
                    // set dynamic field value start
                    if (updateProd.dynamicFields && updateProd.dynamicFields.length > 0) {
                        let updatedValue = res.data.category.dynamicField;   
                        updateProd.dynamicFields.forEach((element) => {
                            updatedValue = updatedValue.map((prevData) => {
                                if (prevData.field_name === element.field_name) {
                                    return { ...prevData, field_value: element.field_value };
                                }
                                return prevData;
                            });
                        }); 
                        setDynamicField(updatedValue); 
                    }
                    // set dynamic field value end
                    setKeyAttributes(updateProd.keyAttributes)
                    if(copy == "Yes"){
                         setProductDetails({...updateProd, 
                            main_image: null,
                            image_1: null,
                            image_2: null,
                            image_3: null,
                            image_4: null,
                            image_5: null,
                            image_6: null,
                            image_7: null,
                        })
                    }else{

                        setProductDetails(updateProd)
                    }
                    if(updateProd.key_feature){ 
                        setKeyFeature(updateProd.key_feature.filter((item)=> item != ""))
                    }
                    
                    if(res.data.compliance){
                        Object.keys(res.data.compliance).map((data)=>{ 
                            if(data != "_id" && data != "__v"){
                                setProductDetails((prevData)=>({
                                    ...prevData,
                                    [data]:res.data.compliance[data]
                                }))  
                            }
                           
                        })
                    }
                     const imgPath = [];
                        const allImage = [];
                        if(copy !== "Yes"){ 
                            // if product copy then upload new product Image
                        if(updateProd?.image_1){
                          imgPath.push(`${baseUrl}${product_thumb_img_path1}${updateProd.image_1}`)
                          allImage.push(`${updateProd.image_1}`)
                        }
                        if(updateProd?.image_2){
                          imgPath.push(`${baseUrl}${product_thumb_img_path2}${updateProd.image_2}`)
                          allImage.push(`${updateProd.image_2}`)
                        }
                        if(updateProd?.image_3){
                          imgPath.push(`${baseUrl}${product_thumb_img_path3}${updateProd.image_3}`)
                          allImage.push(`${updateProd.image_3}`)
                        }
                        if(updateProd?.image_4){
                          imgPath.push(`${baseUrl}${product_thumb_img_path4}${updateProd.image_4}`)
                          allImage.push(`${updateProd.image_4}`)
                        }
                        if(updateProd?.image_5){
                            imgPath.push(`${baseUrl}${product_thumb_img_path5}${updateProd.image_5}`)
                            allImage.push(`${updateProd.image_5}`)
                          }
                          if(updateProd?.image_6){
                            imgPath.push(`${baseUrl}${product_thumb_img_path6}${updateProd.image_6}`)
                            allImage.push(`${updateProd.image_6}`)
                          }
                          if(updateProd.image_7){
                            imgPath.push(`${baseUrl}${product_thumb_img_path7}${updateProd.image_7}`)
                            allImage.push(`${updateProd.image_7}`)
                          }



                            setImagePath(imgPath)
                            setImage(allImage)
                        }
                        
                       

                }
              }else{
                router.push(errorRedirctUtl)
              }
          }).catch((err)=>{
            console.log(err);
            $('.loaderouter').css('display','flex') 
          })
        }
    
      },[globalData.sellor])

      function changeProductInfoInput(e){
        const {name, value} = e.target;
        if(name == "taxRate"){
            const numericValue = value.replace(/[^0-9.]/g, '');
            setProductDetails((prevData)=>({
                ...prevData,
                [name]:numericValue
            }))  
            return
        }

        if(name == "product_length" || name == "product_width" || name == "productHeight" || name == "product_weight" || name == "packageLength" || name == "packageWidth" || name == "packageHeight" || name == "packageWeight"){
            const numericValue = value.replace(/[^0-9.]/g, '');
            setProductDetails((prevData)=>({
                ...prevData,
                [name]:numericValue
            }))  
            return
        }

        setProductDetails((prevData)=>({
            ...prevData,
            [name]:value
        }))  
      }


   

    //   =======================================================

    function saveProductInforemationData(e){
        e.preventDefault();
        
        const formData = createFormData({
            ...productDetails, 
            dynamicField:JSON.stringify(dynamicField),
            keyAttributes:JSON.stringify(keyAttributes),
            key_feature:keyFeature,
            copy:copy || ""
        });
             setIssaveProccess(true)
        fetch(`/api/seller/product/add-single-product`,{
            method:"POST",
            body:formData
        }).then((response)=>{ 
            setIssaveProccess(false)
            if(!response.ok){
                throw new Error("Network Error")
            }
            return response.json();
        }).then((res)=>{
           
            if(res.status){
                 const params = new URLSearchParams(searchParams.toString());
                params.set("product_id", res.data.data._id);
             router.push(`${baseUrl}seller/product/add-variant?${params.toString()}`);
                // if(copy == "Yes"){
                //     router.push(`${baseUrl}seller/product/add-variant?${searchParams}&copy_product_id=${res.data.data._id}`)

                // }else{ 
                //     router.push(`${baseUrl}seller/product/add-variant?${searchParams}&product_id=${res.data.data._id}`)
                // }
            }else if(res.data.status_code == 400){ 
                setErrors(res.data.errors)
                if (Object.keys(res.data.errors)[0].includes('key_feature')) {
                    $(`input[name="key_feature"]`).focus();
                    $(`select[name="key_feature"]`).focus();
                }
                $(`input[name="${Object.keys(res.data.errors)[0]}"]`).focus();
                $(`select[name="${Object.keys(res.data.errors)[0]}"]`).focus();
                $(`textarea[name="${Object.keys(res.data.errors)[0]}"]`).focus();
               
            }else{
                Swal.fire({
                    title:"Error",
                    icon:"error",
                    text:res.data?.message
                })
            }
        })
    }

    function changeDynamicFieldValue(key, e) {
        const { name, value } = e.target;
         
        const updatedValue = dynamicField.map((prevData, i) => {
            if (i === key) {
                return { ...prevData, [name]: value };
            }
            return prevData;  
        });
        
        setDynamicField(updatedValue);
    }
    return (
        <div>
            <>
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
                   <div className="loaderouter"><div className="loader"></div></div> 
                    {/* loader end */}
                <div className="add-product-streep text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="add-product">Create Single Listing</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg33 pt-20">
                    <div className="container">
                        <AddSingleListingSteper searchParams={searchParams} productDetails={productDetails} compliance={compliance} />
                    </div>
                    <div className="container-fluid">
                        <div className="form_outer mt">
                           
                            <form action={"#"} onSubmit={(e)=>saveProductInforemationData(e)}> 
                            <div className="row">
                                <div className="col-lg-8">
                                    {/* =====================form-1-end======================== */}
                                    {/* ==================form2=open=============== */}
                                    <div className="head_dfd">
                                        <h3>Product Information</h3>
                                    </div>
                                    <div className="preview_box">
                                        <div className="form-container">
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="sku">
                                                            Product Name<span>*</span>
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text" 
                                                        name="product_name" 
                                                        value={productDetails.product_name}
                                                        onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                         {errors.product_name && ( 
                                                            <span className='error_message'>{errors.product_name}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="sale-price">
                                                            Brand Name<span>*</span>
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"
                                                         name="product_name" 
                                                         value={productDetails.product_name}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                          />
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="msrp">
                                                            Product Id<span></span>
                                                            
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"
                                                          name="product_id" 
                                                          value={productDetails.product_id || ""}
                                                          onChange={(e)=>changeProductInfoInput(e)}
                                                           />
                                                           {errors.product_id && ( 
                                                              <span className='error_message'>{errors.product_id}</span>
                                                           )}
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="business-price">Product Id Type</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <select 
                                                            name="product_id_type" 
                                                            value={productDetails.product_id_type || "" }
                                                            onChange={(e)=>changeProductInfoInput(e)}
                                                        >
                                                            <option value="">Select</option>
                                                            <option value="UPC">UPC</option>
                                                            <option value="EIN">EIN</option>
                                                            <option value="GTIN">GTIN</option>
                                                            <option value="ISBN">ISBN</option>
                                                           
                                                        </select>
                                                        
                                                    </div>
                                                </div>
                                            </div> */}

                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="msrp">
                                                            Brand Name<span></span>
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"
                                                          name="product_id" 
                                                          value={brand?.name ||''} 
                                                          onChange={(e)=>console.log('')}
                                                          readOnly={true}
                                                           />
                                                           
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Product Description<span>*</span>
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <textarea  
                                                         name="product_description" 
                                                         value={productDetails.product_description}
                                                         onChange={(e)=>changeProductInfoInput(e)}/>
                                                           {errors.product_description && ( 
                                                            <span className='error_message'>{errors.product_description}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {keyFeature.map((features, keys)=>(
                                                <div className="form-group" key={keys}>
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Key Features {keys+1}<span>*</span>
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input type="text"
                                                         name="key_feature" 
                                                         value={keyFeature[keys]}
                                                         onChange={(e)=>updateKeyFeature(keys, e.target.value)} 
                                                         />
                                                          {errors[`key_feature_${keys}`] && (
                                                                    <span className='error_message'>{errors[`key_feature_${keys}`]}</span>
                                                                )}
                                                    </div>
                                                    <div className="col-lg-2">
                                                        {keys != 0 && (
                                                         <div className="add-more" style={{cursor:"pointer"}} onClick={()=>deleteMoreKeyFeature(keys)}><i className="fas fa-trash-alt" /> Delete</div> 
                                                        )}
                                                       {keys+1==keyFeature.length?(
                                                           <div className="add-more" style={{cursor:"pointer"}} onClick={()=>addMoreKeyFeature()}>+Add more</div> 
                                                       ):null} 
                                               
                                                    </div>
                                                    
                                                </div>
                                              
                                            </div>
                                            ))}
                                            
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Search Keywords<span>*</span>
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"
                                                         name="search_keywords" 
                                                         value={productDetails.search_keywords}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                           {errors.search_keywords && ( 
                                                            <span className='error_message'>{errors.search_keywords}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Target Gender<span></span>
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <select
                                                            name="target_gender" 
                                                            value={productDetails.target_gender || ""}
                                                            onChange={(e)=>changeProductInfoInput(e)}
                                                        >
                                                            <option value="">Select</option> 
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                            <option value="Unisex">Unisex</option>
                                                        </select>
                                                        {errors.target_gender && ( 
                                                            <span className='error_message'>{errors.target_gender}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Age Range Description
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <select
                                                             name="age_range" 
                                                             value={productDetails.age_range || ""}
                                                             onChange={(e)=>changeProductInfoInput(e)}
                                                        >
                                                            <option value="">Select</option>
                                                            <option value="Kid">Kid</option>
                                                            <option value="Teen">Teen</option>
                                                            <option value="Adult">Adult</option>
                                                            
                                                        </select>
                                                        {errors.age_range && ( 
                                                            <span className='error_message'>{errors.age_range}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* new field */}
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Color </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <select
                                                             name="color" 
                                                             value={productDetails.color || ""}
                                                             onChange={(e)=>changeProductInfoInput(e)}
                                                        >
                                                            <option value="">Select</option>
                                                            {colorList?.map((colorItem, index)=>(
                                                                <option value={colorItem} key={index}>{colorItem}</option>
                                                            ))}
                                                            
                                                        </select>
                                                        {errors.color && ( 
                                                            <span className='error_message'>{errors.color}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Size  
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"
                                                         name="size" 
                                                         value={productDetails.size || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                           {errors.size && ( 
                                                            <span className='error_message'>{errors.size}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Number of Item  
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"
                                                         name="numberOfItem" 
                                                         value={productDetails.numberOfItem || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                           {errors.numberOfItem && ( 
                                                                <span className='error_message'>{errors.numberOfItem}</span>
                                                            )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Material<span></span>
                                                             
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <select
                                                            name="material" 
                                                            value={productDetails.material || ""}
                                                            onChange={(e)=>changeProductInfoInput(e)}
                                                        >
                                                               <option value="">Select</option>
                                                            {materialType && materialType.map((item, index)=>( 
                                                                <option value={item} key={index}>{item}</option> 
                                                            ))}
                                                         
                                                            
                                                           
                                                        </select>
                                                        {errors.material && ( 
                                                            <span className='error_message'>{errors.material}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Style  
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"
                                                         name="style" 
                                                         value={productDetails.style || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                           {errors.style && ( 
                                                            <span className='error_message'>{errors.style}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Pattern  
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"
                                                         name="pettern" 
                                                         value={productDetails.pettern || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                           {errors.pettern && ( 
                                                            <span className='error_message'>{errors.pettern}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Unit Count  
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"
                                                         name="unit_coun" 
                                                         value={productDetails.unit_coun || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                           {errors.unit_coun && ( 
                                                            <span className='error_message'>{errors.unit_coun}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Unit Count Type </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <select
                                                             name="unit_count_type" 
                                                             value={productDetails.unit_count_type || ""}
                                                             onChange={(e)=>changeProductInfoInput(e)}
                                                        >
                                                            <option value="">Select</option>
                                                            <option value="Inches">Inches</option>
                                                            <option value="kilogram(s)">kilogram(s)</option>
                                                            <option value=" liter(s)"> liter(s)</option>
                                                            <option value="meter(s)">meter(s)</option>
                                                            <option value="milliliter(s)">milliliter(s)</option>
                                                            <option value="Millimeters">Millimeters</option>
                                                            <option value="Ounce">Ounce</option>
                                                            <option value="Pack">Pack</option>
                                                            <option value="Piece">Piece</option>
                                                            <option value="Pint">Pint</option>
                                                            <option value="Pouch">Pouch</option>
                                                            
                                                        </select>
                                                        {errors.unit_count_type && ( 
                                                            <span className='error_message'>{errors.unit_count_type}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Item Type Name
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"
                                                         name="item_type_name" 
                                                         value={productDetails.item_type_name || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                           {errors.item_type_name && ( 
                                                            <span className='error_message'>{errors.item_type_name}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Recommended Use
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"
                                                         name="recommanded_use" 
                                                         value={productDetails.recommanded_use || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                           {errors.recommanded_use && ( 
                                                            <span className='error_message'>{errors.recommanded_use}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end new field */}
                                           
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Model Name<span></span>
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"
                                                         name="model_name" 
                                                         value={productDetails.model_name}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                          />
                                                            {errors.model_name && ( 
                                                            <span className='error_message'>{errors.model_name}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Model Number<span></span>
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"  
                                                        name="model_number" 
                                                        value={productDetails.model_number}
                                                        onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                           {errors.model_number && ( 
                                                            <span className='error_message'>{errors.model_number}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Manufacture Part Number<span>*</span>
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text" 
                                                         name="manufacture_part_number" 
                                                         value={productDetails.manufacture_part_number}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                          />
                                                            {errors.manufacture_part_number && ( 
                                                            <span className='error_message'>{errors.manufacture_part_number}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Model Number<span>*</span>
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"
                                                         name="model_number" 
                                                         value={productDetails.model_number}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                          />
                                                            {errors.model_number && ( 
                                                            <span className='error_message'>{errors.model_number}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Safety Warning
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text" 
                                                         name="safety_warning" 
                                                         value={productDetails.safety_warning}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                           {errors.safety_warning && ( 
                                                            <span className='error_message'>{errors.safety_warning}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Country of Origin
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <select type="text" 
                                                         name="country_of_origin" 
                                                         value={productDetails.country_of_origin}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         >  
                                                         <option value={""}>select</option>
                                                            {countriesList?.map((item,index)=>(
                                                                    <option value={item} key={index}>{item}</option>
                                                            ))}

                                                            </select>
                                                           {errors.country_of_origin && ( 
                                                            <span className='error_message'>{errors.country_of_origin}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Manufacturer 
                                                            {/* Details */}
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text" 
                                                         name="manufacturer_details" 
                                                         value={productDetails.manufacturer_details}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                           {errors.manufacturer_details && ( 
                                                            <span className='error_message'>{errors.manufacturer_details}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            {/* Packer Details */}
                                                            Packer Contact Information
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text"
                                                         name="packer_details" 
                                                         value={productDetails.packer_details}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                           {errors.packer_details && ( 
                                                            <span className='error_message'>{errors.packer_details}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Importer Details
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text" 
                                                         name="importer_details" 
                                                         value={productDetails.importer_details}
                                                         onChange={(e)=>changeProductInfoInput(e)}/>
                                                           {errors.importer_details && ( 
                                                            <span className='error_message'>{errors.importer_details}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* ===================---============== */}
                                            {/* <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Currency<span>*</span>
                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <select name='currency'
                                                         value={productDetails.currency}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         >
                                                            <option value={'USD'}>USD</option>
                                                         </select>
                                                         
                                                           {errors.currency && ( 
                                                            <span className='error_message'>{errors.currency}</span>
                                                         )} 
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* ===================---============== */}
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                           Tax Code <span></span>
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text" 
                                                         name="taxCode" 
                                                         value={productDetails.taxCode || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}/>
                                                           {errors.taxCode && ( 
                                                            <span className='error_message'>{errors.taxCode}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* ===================---============== */}
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Tax Rate<span></span>
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text" 
                                                         name="taxRate" 
                                                         value={productDetails?.taxRate || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}/>
                                                           {errors.taxRate && ( 
                                                            <span className='error_message'>{errors.taxRate}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* ===================---============== */}
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Fullfilment By <span>*</span>
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        
                                                        
                                                    <select name='fulfillmentBy'
                                                         value={productDetails?.fulfillmentBy}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         >
                                                            <option value={'Seller'}>Seller</option>
                                                         </select>

                                                           {errors.fulfillmentBy && ( 
                                                            <span className='error_message'>{errors.fulfillmentBy}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* ===================---============== */}
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                            Shipping Provider <span>*</span>
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <select name='shippingProvider'
                                                         value={productDetails.shippingProvider}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         >
                                                            <option value={'Merchant'}>Merchant</option> 
                                                         </select>
                                                        
                                                           {errors.shippingProvider && ( 
                                                            <span className='error_message'>{errors.shippingProvider}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* ===================---============== */}
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Product Length 
                                                         
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <input type="text" name='product_length'
                                                         value={productDetails.product_length  || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                             
                                                        
                                                           {errors.product_length && ( 
                                                            <span className='error_message'>{errors.product_length}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                             {/* ===================---============== */}
                                             <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Product Length Unit  <span>*</span>
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        
                                                        
                                                    <select name='product_length_unit'
                                                         value={productDetails?.product_length_unit}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         >
                                                            <option value={''}>select one</option>
                                                            <option value={'Centimetres'}>Centimetres</option>
                                                            <option value={'Metres'}>Metres</option>
                                                            <option value={'Inches'}>Inches</option>
                                                            <option value={'Feet'}>Feet</option>
                                                            <option value={'Yards'}>Yards</option>
                                                         </select>

                                                           {errors.product_length_unit && ( 
                                                            <span className='error_message'>{errors.product_length_unit}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>

                                               {/* ===================---============== */}
                                               <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Product Width 
                                                         
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <input type="text" name='product_width'
                                                         value={productDetails.product_width  || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                             
                                                        
                                                           {errors.product_width && ( 
                                                            <span className='error_message'>{errors.product_width}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                             {/* ===================---============== */}
                                             <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Product Width Unit  <span></span>
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        
                                                        
                                                    <select name='product_width_unit'
                                                         value={productDetails?.product_width_unit}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         >
                                                            <option value={''}>select one</option> 
                                                           <option value={'Centimetres'}>Centimetres</option>
                                                            <option value={'Metres'}>Metres</option>
                                                            <option value={'Inches'}>Inches</option>
                                                            <option value={'Feet'}>Feet</option>
                                                            <option value={'Yards'}>Yards</option>
                                                         </select>

                                                           {errors.product_width_unit && ( 
                                                            <span className='error_message'>{errors.product_width_unit}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>



                                             {/* ===================---============== */}
                                             <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Product Height 
                                                         
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <input type="text" name='productHeight'
                                                         value={productDetails.productHeight  || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                             
                                                        
                                                           {errors.productHeight && ( 
                                                            <span className='error_message'>{errors.productHeight}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                             {/* ===================---============== */}
                                             <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Product Height Unit   
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        
                                                        
                                                    <select name='productHeightUnit'
                                                         value={productDetails?.productHeightUnit || "" }
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         >
                                                            <option value={''}>select one</option> 
                                                           <option value={'Centimetres'}>Centimetres</option>
                                                            <option value={'Metres'}>Metres</option>
                                                            <option value={'Inches'}>Inches</option>
                                                            <option value={'Feet'}>Feet</option>
                                                            <option value={'Yards'}>Yards</option>
                                                         </select>

                                                           {errors.productHeightUnit && ( 
                                                            <span className='error_message'>{errors.productHeightUnit}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>




                                               {/* ===================---============== */}
                                               <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Product Weight 
                                                         
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <input type="text" name='product_weight'
                                                         value={productDetails.product_weight  || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                             
                                                        
                                                           {errors.product_weight && ( 
                                                            <span className='error_message'>{errors.product_weight}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>
                                             {/* ===================---============== */}
                                             <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Product Weight Unit  
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        
                                                        
                                                    <select name='product_weight_unit'
                                                         value={productDetails?.product_weight_unit || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         >
                                                            <option value={""}>select one</option> 
                                                            <option value={'Milligrams'}>Milligrams</option>
                                                            <option value={'Grams'}>Grams</option>
                                                            <option value={'Kilograms'}>Kilograms</option>
                                                            <option value={'Ounces'}>Ounces</option>
                                                            <option value={'Pounds'}>Pounds</option>
                                                         </select>

                                                           {errors.product_weight_unit && ( 
                                                            <span className='error_message'>{errors.product_weight_unit}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>


                                            {/* ===================---============== */}
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Package Length  
                                                         
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <input type="text" name='packageLength'
                                                         value={productDetails.packageLength || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                             
                                                        
                                                           {errors.packageLength && ( 
                                                            <span className='error_message'>{errors.packageLength}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>

                                             {/* ===================---============== */}
                                             <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Package Length Unit  
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        
                                                        
                                                    <select name='packageLengthUnit'
                                                         value={productDetails?.packageLengthUnit || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         >
                                                            <option value={""}>select one</option> 
                                                            <option value={'Milligrams'}>Centimetres</option>
                                                            <option value={'Grams'}>Metres</option>
                                                            <option value={'Kilograms'}>Inches</option>
                                                            <option value={'Ounces'}>Feet</option>
                                                            <option value={'Pounds'}>Yards</option>
                                                         </select>

                                                           {errors.packageLengthUnit && ( 
                                                            <span className='error_message'>{errors.packageLengthUnit}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>


                                             {/* ===================---============== */}
                                             <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Package Width 

                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <input 
                                                    type='text'
                                                    name='packageWidth'
                                                         value={productDetails.packageWidth || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                          />
                                                        
                                                           {errors.packageWidth && ( 
                                                            <span className='error_message'>{errors.packageWidth}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>

                                               {/* ===================---============== */}
                                               <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Package Width Unit  
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        
                                                        
                                                    <select name='packageWidthUnit'
                                                         value={productDetails?.packageWidthUnit || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         >
                                                            <option value={""}>select one</option> 
                                                            <option value={'Centimetres'}>Centimetres</option>
                                                            <option value={'Metres'}>Metres</option>
                                                            <option value={'Inches'}>Inches</option>
                                                            <option value={'Feet'}>Feet</option>
                                                            <option value={'Yards'}>Yards</option>
                                                         </select>

                                                           {errors.packageWidthUnit && ( 
                                                            <span className='error_message'>{errors.packageWidthUnit}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>


                                            {/* ===================---============== */}
                                            {/* <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Package Breadth (in cm)

                                                            <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <input type="text"
                                                    name='packageBreadth'
                                                         value={productDetails.packageBreadth || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         />
                                                             
                                                        
                                                           {errors.packageBreadth && ( 
                                                            <span className='error_message'>{errors.packageBreadth}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* ===================---============== */}
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Package Height  

                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <input 
                                                    type='text'
                                                    name='packageHeight'
                                                         value={productDetails.packageHeight || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                          />
                                                             
                                                        
                                                           {errors.packageHeight && ( 
                                                            <span className='error_message'>{errors.packageHeight}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* ===================---============== */}
                                            <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Package Height Unit 
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        
                                                        
                                                    <select name='packageHeightUnit'
                                                         value={productDetails?.packageHeightUnit || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         >
                                                            <option value={""}>select one</option> 
                                                            <option value={'Centimetres'}>Centimetres</option>
                                                            <option value={'Metres'}>Metres</option>
                                                            <option value={'Inches'}>Inches</option>
                                                            <option value={'Feet'}>Feet</option>
                                                            <option value={'Yards'}>Yards</option>
                                                         </select>

                                                           {errors.packageHeightUnit && ( 
                                                            <span className='error_message'>{errors.packageHeightUnit}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>


                                              {/* ===================---============== */}
                                              <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Package Weight 

                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <input 
                                                    type='text'
                                                    name='packageWeight'
                                                         value={productDetails.packageWeight || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                          />
                                                        
                                                           {errors.packageWeight && ( 
                                                            <span className='error_message'>{errors.packageWeight}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>

                                               {/* ===================---============== */}
                                               <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Package Weight Unit  
                                                            {/* <i
                                                                className="fa fa-info color_bg"
                                                                aria-hidden="true"
                                                                data-tooltip="I’m the tooltip text."
                                                            /> */}
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        
                                                        
                                                    <select name='packageWeightUnit'
                                                         value={productDetails?.packageWeightUnit || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                         >
                                                            <option value={""}>select one</option> 
                                                             <option value={'Milligrams'}>Milligrams</option>
                                                            <option value={'Grams'}>Grams</option>
                                                            <option value={'Kilograms'}>Kilograms</option>
                                                            <option value={'Ounces'}>Ounces</option>
                                                            <option value={'Pounds'}>Pounds</option>
                                                         </select>

                                                           {errors.packageWeightUnit && ( 
                                                            <span className='error_message'>{errors.packageWeightUnit}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>


                                            {/* ===================---============== */}
                                              <div className="form-group">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <label htmlFor="listing-status">
                                                        Handling time (In Days) <span>*</span>
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <input 
                                                    type='number'
                                                    name='handling_time'
                                                         value={productDetails.handling_time || ""}
                                                         onChange={(e)=>changeProductInfoInput(e)}
                                                          />
                                                        
                                                           {errors.handling_time && ( 
                                                            <span className='error_message'>{errors.handling_time}</span>
                                                         )}
                                                    </div>
                                                </div>
                                            </div>

                                            
                                           
                                            {/* =========================================================== */}
                                        </div>
                                    </div>
                                     
                                    {/* ========================form-3-end===================== */}
                                </div>
                                <div className="col-lg-4">
                                    <div className="head_dfd">
                                        <h3>&nbsp;</h3>
                                    </div>
                                    <div className="preview_box">
                                        <div className="image_right_guideline">
                                            <h2>Image Guidelines</h2>
                                            <ul>
                                                <li>
                                                    Images with text/Watermark are not acceptable in primary
                                                    images.
                                                </li>
                                                <li>Product image should not have any text</li>
                                                <li>Please add solo product image without any props.</li>
                                                <li>Images with minimum resolution of 1600x1600 px</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <UploadMainImageSection  productDetails={productDetails} setProductDetails={setProductDetails}
                                       
                                       errors={errors}
                                       setErrors={setErrors}
                                       />
                                    <ProductImageSection productDetails={productDetails} setProductDetails={setProductDetails}
                                       image={image} setImage={setImage} imagePath={imagePath} setImagePath={setImagePath}
                                       errors={errors}
                                       setErrors={setErrors}
                                       />

                                {/* <KeyAttributeSection  errors={errors} changeProductInfoInput={changeProductInfoInput}
                                 productDetails={productDetails} keyAttributes={keyAttributes} setKeyAttributes={setKeyAttributes} /> */}
                                    
                                </div>
                                <div className="row align-items-center">
                                    
                                    <div className="col-lg-8">
                                        <div className="sub_mit_cat">
                                            <ul>
                                                <li className="orange_09">
                                                    <button disabled={issaveProccess}>
                                                        {issaveProccess?"Please wait..":"Save And Next"}
                                                    </button>
                                                </li>
                                                <li>
                                                    <Link href={`${baseUrl}dashboard/listing`}>Cancel Catalog</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        {/* <a href="#" className="save-as-draft">
                                            Save as Draft
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>


        </div>
    )
}

    return (
            <Suspense fallback={<div>Loading...</div>}> 
              <AddProductPage params={params}/>
          </Suspense>
          )
}

export default page