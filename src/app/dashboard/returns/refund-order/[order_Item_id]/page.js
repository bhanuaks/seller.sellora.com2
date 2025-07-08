"use client"
import HelpAndVideoTopSection from '@/app/seller/HelpAndVideoTop'
import { baseUrl, fetcher, getBasePrice, main_thumb_img_path, variant_thumb_img_path1 } from '@/Http/helper'
import Image from 'next/image' 
import { ToastContainer, toast } from "react-toastify";
import useSWR, {mutate} from "swr";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { apiRequest } from '@/Http/apiHelper';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { fileBasePath } from '@/Http/urlHelper';

function Page() {
    const params = useParams();
    const router = useRouter();
    const order_Item_id = params.order_Item_id;
    const {
      data: orderData,
      error,
      isLoading,
    } = useSWR(
      `${baseUrl}api/seller/product/orders/single-product-details?order_Item_id=${order_Item_id}`,
      fetcher
    );
  
    const singleOrder = orderData?.data?.order;
  const [refundFormData, setRefundFormData]  = useState({
    refund_reason:"",
    note:"",
    full_refund:"",
    excluding_tax:"",
    including_tax:"",
    accept_condition:"",
    order_Item_id:order_Item_id
  });

  const [amountData, setAmountData]  = useState({
    totalAmount:"",
    excludingTax:"",
    includingTax:"", 
  });

  const [errors, setErrors] = useState({})
  const [apiLoading, setApiLoading] = useState(false)
    
  useEffect(()=>{
    if(singleOrder){
      if(singleOrder.order_status == 6){
        router.push(`/ashboard/returns/refund-details/${order_Item_id}`)
      }
      const totalAmount = singleOrder.price * singleOrder.quantity;
      const excludingTax = getBasePrice(totalAmount, 18)
      const includingTax = totalAmount - excludingTax;
      setAmountData({
        totalAmount:singleOrder.price * singleOrder.quantity,
        excludingTax:excludingTax,
        includingTax:includingTax,
      })
    }
   
  },[singleOrder])


  function handleChangeInput(e){
    const {name, value, checked } = e.target
     
    if(name == "full_refund"){
      if(checked){
        setRefundFormData((prevData)=>({
          ...prevData,
          [name]:value,
          excluding_tax:Number(amountData.excludingTax)?.toFixed(2),
          including_tax:Number(amountData.includingTax)?.toFixed(2)
        }))
      }else{
        setRefundFormData((prevData)=>({
          ...prevData,
          [name]:""
        }))
      }
     
      return 
  }
    if(name == "accept_condition"){

        setRefundFormData((prevData)=>({
          ...prevData,
          [name]:checked?value:""
        }))
        return 
    }

    if(name == "excluding_tax"){
      const numericValue = value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
      
      setRefundFormData((prevData)=>({
        ...prevData,
        [name]:parseFloat(numericValue) > parseFloat(amountData.excludingTax)?parseFloat(amountData.excludingTax).toFixed(2):numericValue
      }))
      return 
  }

  if(name == "including_tax"){
    const numericValue = value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
    
    setRefundFormData((prevData)=>({
      ...prevData,
      [name]:parseFloat(numericValue) > parseFloat(amountData.includingTax)?parseFloat(amountData.includingTax).toFixed(2):numericValue
    }))
    return 
}

    setRefundFormData((prevData)=>({
      ...prevData,
      [name]:value
    })) 

  }


  async function submitRefundData(e){
    e.preventDefault(); 
    setErrors({})
    setApiLoading(true)
      const response = await apiRequest(`${baseUrl}api/seller/product/orders/refund-cancel-order`, "POST", refundFormData) 
      setApiLoading(false)
      if(response.status){
          toast.success("Order Amount has been refund successfully!");
          router.push('/dashboard/returns/Complete')
      }else if(response.data.status_code == "402"){
        setErrors(response.data.errors)
      }
  }
  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <ToastContainer
            position="bottom-right"
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
        <div className="col-lg-6 col-md-6">
          <div className="navigator-breadcrumb-wrapper">
            <h3>Refund Order</h3>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <HelpAndVideoTopSection />
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="col-lg-8 offset-lg-2">
      <div className="row">
        <div className="col-lg-12">
          <div className="refund_display_box">
            <div className="row">
              <div className="col-lg-12">
                <div className="oreder_02">
                  <span>Order Id</span>  {singleOrder?.order_id}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <div className="row">
                  <div className="col-lg-5 col-5">
                    <div className="product_view">
                       {singleOrder?.variant?.withImage == "Yes" ? (
                            <img
                              src={`${fileBasePath}${variant_thumb_img_path1}${singleOrder?.variant?.image_1}`}
                             
                              alt="product Image" 
                            />
                          ) : (
                            <img
                              src={`${fileBasePath}${main_thumb_img_path}${singleOrder?.product?.main_image}`}
                             
                              alt="product Image" 
                            />
                          )}
                       
                    </div>
                  </div>
                  <div className="col-lg-7 col-7">
                    <div className="_refund_details_product_details_content">
                      <p>
                      {singleOrder?.product_name}
                      </p>
                      <div className="asdjkl_099">
                        <ul>
                        {singleOrder?.sku && ( 
                          <li>
                            <span>SKU ID:</span> {singleOrder?.sku}
                          </li>
                        )}
                        {singleOrder?.sin && ( 
                          <li>
                            <span>SIN:</span>{singleOrder?.sin}
                          </li>
                        )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="_095_list_e4r893489">
                  <ul>
                    <li>
                      <span>Return Reason:</span> Item arrived too late
                    </li>
                    <li>
                      <span>Return Quantity:</span> 1
                    </li>
                    {singleOrder?.shippingInfo?.trakingDetails?.length >0 && (
                      <>
                      <li>
                      <span>Tracking ID: </span> {singleOrder?.shippingInfo?.trakingDetails[0].trakingNumber}
                      </li>
                      <li>
                      <span>Carrier Name: </span>  {singleOrder?.shippingInfo?.trakingDetails[0].shippingCarrier}
                    </li>
                    </>
                    )}
                   
                    
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="_323_095_list_e4r893489">
                  <table
                    width="100%"
                    border={0}
                    cellSpacing={0}
                    cellPadding={0}
                  >
                    <tbody>
                      <tr>
                        <td width={120}>Buyer Feedback:</td>
                        <td>
                          Dummy feedback
                        </td>
                      </tr>
                      <tr>
                        <td>Reason for refund:</td>
                        <td>
                          <select 
                          onChange={(e)=>handleChangeInput(e)} 
                          value={refundFormData.refund_reason}
                          name='refund_reason'
                          >
                            <option value={""} >Select</option>
                            <option value={"Buyer Return"} >Buyer Return</option>
                            <option value={"Product not as described"} >Product not as described</option>
                            <option value={"No Inventory"} >No Inventory</option>
                            <option value={"Order not received"} >Order not received</option>
                            <option value={"Could Not Ship"} >Could Not Ship</option>
                            <option value={"Buyer return"} >Buyer return</option>
                            <option value={"Missed Fulfillment Promise"} >Missed Fulfillment Promise</option>
                            <option value={"Pricing Error"} >Pricing Error</option>
                            <option value={"Buyer Cancelled"} >Buyer Cancelled</option>
                            <option value={"Different item"} >Different item</option>
                            <option value={"Delivered Late by Carrier"} >Delivered Late by Carrier</option>
                          </select>
                          {errors?.refund_reason && (
                            <div className='error_message'>{errors?.refund_reason }</div>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="refund_display_box form_50_4">
                <table className="table_erer">
                  <tbody>
                    <tr>
                      <td width={150}>Order amount</td>
                      <td width={150}>Amount to refund</td>
                      <td width={180}>
                        <label>
                          <input type="checkbox" 
                          onChange={(e)=>handleChangeInput(e)} 
                          value={"Yes"}
                          checked={refundFormData.full_refund == "Yes"?true:false}
                          name='full_refund'
                          />
                          &nbsp;Refund full amount
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="price_457">
                          <span>${Number(amountData?.excludingTax || 0)?.toFixed(2)}</span> (excluding tax)
                        </div>
                      </td>
                      <td>
                        <input type="text" 
                         onChange={(e)=>handleChangeInput(e)} 
                         value={refundFormData.excluding_tax}
                         name='excluding_tax'
                         disabled={refundFormData.excluding_tax == "Yes"}
                         />
                         {errors?.excluding_tax && (
                            <div className='error_message'>{errors.excluding_tax}</div>
                         )}
                      </td>
                      <td>
                        <div className="max_price">Max: ${Number(amountData?.excludingTax || 0).toFixed(2)}</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="price_457">
                          <span>${Number(amountData.includingTax || 0).toFixed(2)}</span> (Including tax)
                        </div>
                      </td>
                      <td>
                      <input type="text" 
                         onChange={(e)=>handleChangeInput(e)} 
                         value={refundFormData.including_tax}
                         name='including_tax'
                         disabled={refundFormData.including_tax == "Yes"}
                         />
                         {errors?.including_tax && (
                         <div className='error_message'>{errors.including_tax}</div>
                         )}
                      </td>
                      <td>
                        <div className="max_price">Max: ${Number(amountData.includingTax || 0).toFixed(2)}</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="price_457">
                          <span>
                            <strong>TOTAL</strong>
                          </span>{" "}
                          <strong>${Number(amountData.totalAmount || 0).toFixed(2)}</strong>
                        </div>
                      </td>
                      <td>
                        <strong>${((Number(refundFormData.excluding_tax|| 0) + Number(refundFormData.including_tax || 0))).toFixed(2)}</strong>
                      </td>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="refund_display_box">
                <div className="take_note_heding">Take Note:</div>
                <div className="take_note">
                  <textarea
                    onChange={(e)=>handleChangeInput(e)} 
                    value={refundFormData.note}
                    name='note'
                     />
                     {errors?.note && (
                      <div className='error_message'>{errors.note}</div>
                    )}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="term">
                <label>
                  <input type="checkbox"
                  onChange={(e)=>handleChangeInput(e)} 
                  value={"Yes"}
                  checked={refundFormData.accept_condition == "Yes"?true:false}
                  name='accept_condition'
                   />I acknowledge that this is a Prepaid
                  order and confirm that I have received the payment from the
                  buyer.
                  {errors?.accept_condition && (
                  <div className='error_message'>{errors?.accept_condition}</div>
                  )}
                </label>
              </div>
              <div className="list_button">
                <button className="border_save">Cancel</button>
                {apiLoading ? (
                  <Link href="#" >
                  <button className="save" >Submiting..</button>
                </Link>
                ):(
                  <Link href="#" onClick={(e)=>submitRefundData(e)}>
                  <button className="save" >Submit Refund</button>
                </Link>
                )}
              
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

export default Page