
"use client"
import { baseUrl, getPrecentageAmount, getStatus, getVariantAttribute, main_thumb_img_path, product_thumb_img_path1, product_thumb_img_path2, product_thumb_img_path3, product_thumb_img_path4, variant_thumb_img_path1 } from '@/Http/helper'
import React, { use, useContext, useEffect, useState } from 'react'
import $ from 'jquery'
import '../../../../../../public/front/loader.css'
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
import { AppContext } from '@/app/contaxtData/contextData'
import Image from 'next/image'
import {variant_thumb_img_path4, variant_thumb_img_path2,variant_thumb_img_path3} from '@/Http/helper'

const page = ({ params }) => {

    const { globalData, setGlobalData } = useContext(AppContext)

    const { product_id, variant_id } = use(params);

    const [product, setProduct] = useState(null)
    const [variants, setVariants] = useState(null)
    const [prodOtherDetail, setProdOtherDetail] = useState(null)




    useEffect(() => {

        $('.loaderouter').css('display', 'flex')
        fetch(`${baseUrl}api/seller/product/fetch-product-details?product_id=${product_id}&variant_id=${variant_id}`, {
            method: "Get",
        }).then((response) => {
            if (!response.ok) {
                $('.loaderouter').css('display', 'none')
                throw new Error("Network Error")
            }
            return response.json();
        }).then((res) => {
            $('.loaderouter').css('display', 'none')
            if (res.status) {
                setProduct(res.data.product);
                setVariants(res.data.variants);
                setProdOtherDetail(res.data.otherDetail)
            }
        })

    }, [])


    function printDocument(e) {
        e.preventDefault();
        window.print();
    }



    return (
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
            {/* The Modal */}

            <div className="modal-content_page" >

                <div className="container">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="choice_outer">
                            <div className='row'>
                                {product && product.main_image ? (
                                    <div className='col-lg-2 image_container' >
                                        <img src={`${baseUrl}${product && `${main_thumb_img_path}${product.main_image}`}`} />
                                        <span> Main Image</span>
                                    </div>
                                ) : ''}

                                {product && product.image_1 ? (
                                    <div className='col-lg-2 image_container'>
                                        <img src={`${baseUrl}${product && `${product_thumb_img_path1}${product.image_1}`}`} />
                                        <span>Image 1</span>
                                    </div>
                                ) : ''}
                                {product && product.image_2 ? (
                                    <div className='col-lg-2 image_container'>
                                        <img src={`${baseUrl}${product && `${product_thumb_img_path2}${product.image_2}`}`} />
                                        <span>Image 2</span>

                                    </div>
                                ) : ''}
                                {product && product.image_3 ? (
                                    <div className='col-lg-2 image_container'>
                                        <img src={`${baseUrl}${product && `${product_thumb_img_path3}${product.image_3}`}`} />
                                        <span>Image 3</span>

                                    </div>
                                ) : ''}
                                {product && product.image_4 ? (
                                    <div className='col-lg-2 image_container'>
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={`${baseUrl}${product ? `${product_thumb_img_path4}${product.image_4}` : ''}`}
                                                className="object-cover"
                                                fill
                                                alt=""
                                            />
                                        </div>
                                        <span>Image 4</span>

                                    </div>
                                ) : ''}

                            </div>

                            <p>
                                {product && product.product_name}
                            </p>
                            <ul>
                                {/* <li>
                                        <span>SKU ID:</span>  
                                    </li> */}

                            </ul>
                        </div>
                        <form>
                            <div className="edit-listing_form">
                                <h1 className='h1_headeng'>Product information</h1>
                                <div className="form-group">
                                    <div className="row align-items-center">

                                        {/* ======================================= */}
                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Product Name :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {product && product.product_name}
                                            </div>
                                        </div>
                                        {/* ======================================== */}
                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Category Name :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {product && product.category_id ? product.category_id.name : 'Not Selected'}
                                            </div>
                                        </div>

                                        {/* ======================================= */}
                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Sub Category Name :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {product && product.subcategory_id ? product.subcategory_id.subCategoryName : 'Not Selected'}
                                            </div>
                                        </div>
                                        {/* ======================================= */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Child Category Name :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {product && product.childcategory_id ? product.childcategory_id.childCategoryName : 'Not Selected'}
                                            </div>
                                        </div>
                                        {/* ======================================= */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Brand Name :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {product && product.brand_id ? product.brand_id.name : 'Not Selected'}
                                            </div>
                                        </div>
                                        {/* ======================================= */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Product Type :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {product ? product.product_id_type : ''}
                                            </div>
                                        </div>
                                        {/* ======================================= */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Description :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {product ? product.product_description : ''}
                                            </div>
                                        </div>
                                        {/* ======================================= */}
                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    key_feature :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {product && product.key_feature ? (
                                                    <ul>
                                                        <div dangerouslySetInnerHTML={{ __html: "<li/>" + product.key_feature.join("<br /><br /><li/> ") }}></div>
                                                    </ul>
                                                ) : ''}
                                                {/* {product && product.key_feature? product.key_feature.join(",<br /> ") :''} */}
                                            </div>
                                        </div>
                                        {/* ======================================= */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Search Keywords :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {product ? product.search_keywords : ''}
                                            </div>
                                        </div>
                                        {/* ======================================= */}
                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Target Gender :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {product ? product.target_gender : 'Not Selected'}
                                            </div>
                                        </div>
                                        {/* ======================================= */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Age Range :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {product ? product.age_range : 'Not Selected'}
                                            </div>
                                        </div>
                                        {/* ======================================= */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Material :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {product ? product.material : ''}
                                            </div>
                                        </div>
                                        {/* ======================================= */}
                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Model Name :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {product ? product.model_name : ''}
                                            </div>
                                        </div>
                                        {/* ======================================= */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Model Number :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {product ? product.model_number : ''}
                                            </div>
                                        </div>
                                        {/* ======================================= */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Manufacture Part Number :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {product ? product.manufacture_part_number : ''}
                                            </div>
                                        </div>
                                        {/* ======================================= */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Safety Warning :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {product ? product.safety_warning : ''}
                                            </div>
                                        </div>
                                        {/* ======================================= */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Country Of Origin :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {product ? product.country_of_origin : ''}
                                            </div>
                                        </div>
                                        {/* ======================================= */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Manufacturer Details :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {product ? product.manufacturer_details : ''}
                                            </div>
                                        </div>
                                        {/* ======================================= */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Packer Details :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {product ? product.packer_details : ''}
                                            </div>
                                        </div>
                                        {/* ======================================= */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Importer Details :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {product ? product.importer_details : ''}
                                            </div>
                                        </div>
                                        {/* ======================================= */}

                                    </div>
                                </div>

                                <h1>Compliance and Other Attributes</h1>

                                <div className="form-group">
                                    <div className="row align-items-center">

                                        {/* ======================================= */}
                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Fit Type :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {prodOtherDetail && prodOtherDetail.fit_type}
                                            </div>
                                        </div>
                                        {/* ======================================== */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Outer Material :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {prodOtherDetail && prodOtherDetail.outer_material}
                                            </div>
                                        </div>
                                        {/* ======================================== */}
                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Fabric Type :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {prodOtherDetail && prodOtherDetail.fabric_type}
                                            </div>
                                        </div>
                                        {/* ======================================== */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Fabric Description :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {prodOtherDetail && prodOtherDetail.fabric_description}
                                            </div>
                                        </div>
                                        {/* ======================================== */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Features :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {prodOtherDetail && prodOtherDetail.features}
                                            </div>
                                        </div>
                                        {/* ======================================== */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Instruction Of Use :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {prodOtherDetail && prodOtherDetail.instruction_of_use}
                                            </div>
                                        </div>
                                        {/* ======================================== */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Material/Fabric Regulations :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {prodOtherDetail && prodOtherDetail.fabric_regulations}
                                            </div>
                                        </div>
                                        {/* ======================================== */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Pattern :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {prodOtherDetail && prodOtherDetail.pattern}
                                            </div>
                                        </div>
                                        {/* ======================================== */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Dangerous Goods Regulations :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {prodOtherDetail && prodOtherDetail.dangerous_goods_regulations}
                                            </div>
                                        </div>
                                        {/* ======================================== */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Has Written Warranty :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {prodOtherDetail && prodOtherDetail.has_written_warranty}
                                            </div>
                                        </div>
                                        {/* ======================================== */}
                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Product is or Contains an Electronic Component? :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {prodOtherDetail && prodOtherDetail.contains_an_electronic_component}
                                            </div>
                                        </div>
                                        {/* ======================================== */}

                                        <div className='row col-lg-6'>
                                            <div className="col-lg-4">
                                                <label htmlFor="sku">
                                                    Product is or Contains this Battery Type :
                                                </label>
                                            </div>
                                            <div className="col-lg-8">
                                                {prodOtherDetail && prodOtherDetail.product_is_or_contains_this_battery_type}
                                            </div>
                                        </div>
                                        {/* ======================================== */}



                                    </div>
                                </div>

                                <h1>Price/Inventory/Variation</h1>
                                <div className="form-group">
                                    <div className="row align-items-center">
                                        {variants && variants.length > 0 ?
                                            variants.map((variantItem, index) => (
                                                <div className='row col-lg-12 variant_details_container' key={index}>
                                                    <h1>Variant {index + 1} Details</h1>
                                                    {/* ======================================= */}
                                                    <div className='row col-lg-4'>
                                                        <div className="col-lg-4">
                                                            <label htmlFor="sku">
                                                                sku :
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            {variantItem.sku}
                                                        </div>
                                                    </div>
                                                    {/* ======================================== */}

                                                    <div className='row col-lg-4'>
                                                        <div className="col-lg-4">
                                                            <label htmlFor="sku">
                                                                Listing Status :
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            {getStatus(variantItem.listingStatus)}
                                                        </div>
                                                    </div>
                                                    {/* ======================================== */}

                                                    <div className='row col-lg-4'>
                                                        <div className="col-lg-4">
                                                            <label htmlFor="sku">
                                                                MSRP :
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            {variantItem.msrp}
                                                        </div>
                                                    </div>
                                                    {/* ======================================== */}
                                                    <div className='row col-lg-4'>
                                                        <div className="col-lg-4">
                                                            <label htmlFor="sku">
                                                                Consumer Sale Price :
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            {variantItem.consumerSalePrice}
                                                        </div>
                                                    </div>
                                                    {/* ======================================== */}

                                                    <div className='row col-lg-4'>
                                                        <div className="col-lg-4">
                                                            <label htmlFor="sku">
                                                                Business Sale Price :
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            {variantItem.businessSalePrice}
                                                        </div>
                                                    </div>
                                                    {/* ======================================== */}

                                                    <div className='row col-lg-4'>
                                                        <div className="col-lg-4">
                                                            <label htmlFor="sku">
                                                                Currency :
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            {variantItem.currency}
                                                        </div>
                                                    </div>
                                                    {/* ======================================== */}

                                                    <div className='row col-lg-4'>
                                                        <div className="col-lg-4">
                                                            <label htmlFor="sku">
                                                                Tax Code :
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            {variantItem.taxCode}
                                                        </div>
                                                    </div>
                                                    {/* ======================================== */}

                                                    <div className='row col-lg-4'>
                                                        <div className="col-lg-4">
                                                            <label htmlFor="sku">
                                                                Tax Rate :
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            {variantItem.taxRate}
                                                        </div>
                                                    </div>
                                                    {/* ======================================== */}

                                                    <div className='row col-lg-4'>
                                                        <div className="col-lg-4">
                                                            <label htmlFor="sku">
                                                                Fulfillment By :
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            {variantItem.fulfillmentBy}
                                                        </div>
                                                    </div>
                                                    {/* ======================================== */}

                                                    <div className='row col-lg-4'>
                                                        <div className="col-lg-4">
                                                            <label htmlFor="sku">
                                                                Shipping Provider :
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            {variantItem.shippingProvider}
                                                        </div>
                                                    </div>
                                                    {/* ======================================== */}

                                                    <div className='row col-lg-4'>
                                                        <div className="col-lg-4">
                                                            <label htmlFor="sku">
                                                                Procurement type :
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            {variantItem.stock_status}
                                                        </div>
                                                    </div>

                                                    <div className='row col-lg-4'>
                                                        <div className="col-lg-4">
                                                            <label htmlFor="sku">
                                                                Stock/Inventory :
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            {variantItem.stock}
                                                        </div>
                                                    </div>

                                                    {variantItem.customAttributes && Object.entries(variantItem.customAttributes).length > 0 ?
                                                        Object.entries(variantItem.customAttributes).map((value, key) => (
                                                            <div className='row col-lg-4' key={key + key}>
                                                                <div className="col-lg-4">
                                                                    <label htmlFor="sku">
                                                                        {value[0]} :
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-8">
                                                                    {value[1]}
                                                                </div>
                                                            </div>
                                                        ))
                                                        : null}
                                                    {/* ======================================== */}

                                                    {variantItem.threshold && variantItem.threshold.length > 0 ?
                                                        <>


                                                            {variantItem.threshold.map((thresholdData, key) => (
                                                                <div key={key} className='row col-lg-12'  >
                                                                    <div className='row col-lg-4'>
                                                                        <div className="col-lg-4">
                                                                            <label htmlFor="sku">
                                                                                Discount :
                                                                            </label>
                                                                        </div>
                                                                        <div className="col-lg-8">
                                                                            Unit ({thresholdData.unit})  {'=>'}  {variantItem.discount_type == "fixed" ? "$" : ""}{thresholdData.discount} {variantItem.discount_type == "percentage" ? "%" : ""}
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                            ))}
                                                        </>
                                                        : null}
                                                    {/* ======================================== */}
                                                    {variantItem.withImage == "Yes" ? (
                                                        <div className="choice_outer1">
                                                            <div className='row'>
                                                                {variantItem && variantItem.image_1 ? (
                                                                    <div className='col-lg-3 variant_image_container'>
                                                                        <img src={`${baseUrl}${variant_thumb_img_path1}${variantItem && variantItem.image_1}`} />
                                                                        <span>Image 1</span>
                                                                    </div>
                                                                ) : ''}
                                                                {variantItem && variantItem.image_2 ? (
                                                                    <div className='col-lg-3 variant_image_container'>
                                                                        <img src={`${baseUrl}${variant_thumb_img_path2}${variantItem && variantItem.image_2}`} />
                                                                        <span>Image 2</span>

                                                                    </div>
                                                                ) : ''}
                                                                {variantItem && variantItem.image_3 ? (
                                                                    <div className='col-lg-3 variant_image_container'>
                                                                        <img src={`${baseUrl}${variant_thumb_img_path3}${variantItem && variantItem.image_3}`} />
                                                                        <span>Image 3</span>

                                                                    </div>
                                                                ) : ''}
                                                                {variantItem && variantItem.image_4 ? (
                                                                    <div className='col-lg-3 variant_image_container'>
                                                                        <img src={`${baseUrl}${variant_thumb_img_path4}${variantItem && variantItem.image_4}`} />
                                                                        <span>Image 4</span>

                                                                    </div>
                                                                ) : ''}
                                                            </div>
                                                        </div>
                                                    ) : ''}
                                                </div>
                                            ))
                                            : null}





                                    </div>
                                </div>


                                <div className="save_all">
                                    {/* <span type='button' href="#"   className='mr-3 cencel_button'>Cencel</span> */}
                                    <a href="#" onClick={(e) => printDocument(e)} > Print</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>

    )
}

export default page