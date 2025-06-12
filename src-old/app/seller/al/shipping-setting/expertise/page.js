"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
 
import Link from 'next/link'
 
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import { AppContext } from '@/app/contaxtData/contextData'
import $ from 'jquery'
import { baseUrl } from '@/Http/helper'
import { useRouter } from 'next/navigation'
import  '../../../../../../public/front/error.css'
import  '../../../../../../public/front/loader.css'
import { ToastContainer, toast } from 'react-toastify';
import CompletePercentage from '../../afterlogincomponent/completePercentage'
import TopButton from '../../afterlogincomponent/TopButton';
import Sidebar from '../../afterlogincomponent/Sidebar';

const page = () => {

  const {globalData, setGlobalData} = useContext(AppContext)

  const countryRef = useRef() 
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [sellor, setSellor] = useState(null);
  const phoneInputRef = useRef(null); 
  const [shippingTemplete, setShippingTemplete] = useState({
    seller_id:'',
    shipping_content:'',
    shipping_rate_model:'price', // weight
    shipping_type:'Expertise',
    address_type:'STREET',
    transit_time:'',
    rate:'', 
    shipping_n_handling_charge:'',
    charge_type:'percentage',
    charge_amount:'', 
  })
  

  useEffect(()=>{ 
    if(globalData.sellor){
      $('.loaderouter').css('display','flex') 
      fetch(`${baseUrl}api/seller/get-profile?user_id=${globalData.sellor._id}&with_data=ExpertiseShippingTemplete`,{
        method:"GET", 
      }).then((response)=>{
          if(!response.ok){
            $('.loaderouter').css('display','none')
            throw new Error('Network Error')
          }
          return response.json();
      }).then((res)=>{
          $('.loaderouter').css('display','none') 
          if(res.status){
             // check complete step
          if(!res.data.data.complete_step ||  res.data.data.complete_step < 2){
            router.push('/seller/al/contact-details')
          }
            setSellor(res.data.data)
            if(res.data.referData){
              setShippingTemplete(res.data.referData)
            }
            setShippingTemplete((preData) => ({
              ...preData,
              seller_id: res.data.data._id
            }))
          }
      })
    }

  },[globalData.sellor])

 

  
const updateInputData= (e)=>{

    const {name, value} = e.target; 

    if(name=="charge_amount" || name == "shipping_n_handling_charge"){
        const numericValue = value.replace(/[^0-9.]/g, '');
        setShippingTemplete((preData)=>({
            ...preData,
            [name]:numericValue
          }))
          return
    }
    setShippingTemplete((preData)=>({
      ...preData,
      [name]:value
    }))
    if(name == "shipping_rate_model"){

      if(value=="price"){
        setShippingTemplete((preData)=>({
          ...preData,
          charge_type:"percentage"
        }))
      }else{
        setShippingTemplete((preData)=>({
          ...preData,
          charge_type:"Pound"
        }))
      }
      
    }
    
  }



function submitUpdateForm(e){
  e.preventDefault();
  setErrors({}); 

  $('.loaderouter').css('display','flex');
  fetch(`${baseUrl}api/seller/create-shipping-templete`,{
    method:"POST",
    body:JSON.stringify(shippingTemplete)
  }).then((response)=>{
      if(!response.ok){
        $('.loaderouter').css('display','none')
        throw new Error('Network Error') 
      }
      return response.json();
  }).then((res)=>{
    $('.loaderouter').css('display','none') 
      if(res.status){
        toast.success('Success! Pickup Address Saved.');
        router.push('/seller/al/bank-account-information')
      }else if(res.data.status_code == 403){
        setErrors(res.data.errors)
      }
  }) 
}





  return (
    <div className="seller_panel_mmmm">

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
    <div className="row align-items-center">
      <div className="col-lg-3" />
      <div className="col-lg-6">
        <div className="onboarding_form">
          <h3>Onboarding Dashboard</h3>
        </div>
      </div>
      <div className="col-lg-3">
      <TopButton/>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3">
      <div className="left_side_panel">
          {/*  <div className="meter orange nostripes">
    <span style="width: 15%"></span>
  </div> */}
          <div className="card-6-inner">
            <p>Your onboarding completion status</p>
            <div className="meter orange nostripes">
              {" "}
              <CompletePercentage sellor={sellor}/>
            </div>
          </div>
            <Sidebar sellor={sellor}/>
       
        </div>
      </div>
      <div className="col-lg-6">
        <div className="mm_rts-cart-list-area2">
        <form action="#" onSubmit={(e)=>submitUpdateForm(e)}> 
          <div className="row">
            <div className="col-lg-12">
              <div
                className="nnn_dform"
                style={{ paddingBottom: 0, marginBottom: 0 }}
              >
                <h2>Shipping Setting</h2>
                <div className="contnet_d">
                  <p>Creating Shipping Template </p>
                  <div className="row">
                    <div className="col-lg-3">Shipping Rate Model:</div>
                    <div className="col-lg-9">
                      <div className="business-type">
                        <label>
                          <input
                            type="radio"
                            name="shipping_rate_model"
                            value="weight"
                            checked={shippingTemplete.shipping_rate_model == "weight"}
                            onClick={(e)=>updateInputData(e)}
                          />
                          The weight of the total order
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="shipping_rate_model"
                            value="price"
                            checked={shippingTemplete.shipping_rate_model == "price"}
                            onClick={(e)=>updateInputData(e)}
                          />
                          The price of the total order (tiers)
                        </label>
                      </div>
                    </div>
                  </div>
                  <p>Shipping Methods and Regions</p>
                </div>
                <div className="table-responsive">
                  <table
                    className="table table-bordered table-striped sellor_dashboard"
                    style={{ marginTop: 20 }}
                  >
                    <thead className="table__head">
                      <tr className="winner__table">
                        <td colSpan={5}>
                          <div className="table_menu">
                            <ul className="expanded">
                              <li>
                                <Link
                                  href="/seller/al/shipping-setting/creating-shipping-template" 
                                >
                                  Standard
                                </Link>
                              </li>
                              <li className="active current">
                                <Link className='active' href="/seller/al/shipping-setting/expertise">Expertise</Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={5} style={{ padding: "0px !important" }}>
                          <table className="child_table">
                            <tbody>
                              <tr>
                                <th width={210}>
                                  <div className="region">
                                    REGION Edit <span>Regions</span>{" "}
                                  </div>
                                </th>
                                <th width={150}>ADDRESS TYPE</th>
                                <th width={150}>TRANSIT TIME</th>
                                <th width={250}>SET RATE</th>
                                {/* <th width={60}>&nbsp;</th> */}
                              </tr>
                              <tr>
                                <td>
                                  Pennsylvania, Connecticut, Massachusetts,
                                  Rhode Island, Maine, New Hampshire, New York,
                                  New Jersey, Vermont, South Dakota, Minnesota,
                                  Missouri, Wisconsin, Illinois, Indiana, North
                                  Dakota, Nebraska, Iowa, Kansas, Ohio,
                                  Michigan, Delaware, Texas,
                                </td>
                                <td className="text-center">STREET</td>
                                <td>
                                  <select className="" 
                                   name='transit_time' 
                                   value={shippingTemplete.transit_time}
                                   onChange={(e)=>updateInputData(e)}>
                                    <option value={""}>Select</option>
                                    <option>2-5 Days</option>
                                    <option>8 Days</option>
                                  </select>
                                </td>
                                <td>
                                  <div className="seat_rate">
                                    <div className="row align-items-center">
                                      <div className="col-lg-5">
                                        <input type="text" placeholder="$" 
                                        name='shipping_n_handling_charge'
                                        value={shippingTemplete.shipping_n_handling_charge}
                                        onChange={(e)=>updateInputData(e)}/>
                                      </div>
                                      <div className="col-lg-7">
                                        Shipping &amp; Handling
                                      </div>
                                    </div>
                                  </div>
                                  <div className="seat_rate">
                                    <div className="row align-items-center">
                                      <div className="col-lg-5">
                                        <input type="text" placeholder="$" 
                                        name='charge_amount'
                                        value={shippingTemplete.charge_amount}
                                        onChange={(e)=>updateInputData(e)} />
                                      </div>
                                      <div className="col-lg-7">
                                        <select className="" 
                                         value={shippingTemplete.charge_type}
                                         name='charge_type' 
                                         onChange={(e)=>updateInputData(e)}>

                                          {shippingTemplete.shipping_rate_model=="price" ? ( 
                                          <option value={"percentage"}>Percentage</option>
                                          ):null }
                                           {shippingTemplete.shipping_rate_model=="weight" ? (

                                            <>
                                              <option value={"Pound"}>Per Pound</option>
                                              <option value={"Item"}>Per Item</option>
                                            </>

                                          ):null }
                                          
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                {/* <td className="text-center">
                                  <div className="di_span">
                                    <span>
                                      <Link href="#">Edit</Link>
                                    </span>
                                    <span>
                                      <Link href="#" className="trace">
                                        <i className="far fa-trash" />
                                      </Link>
                                    </span>
                                  </div>
                                </td> */}
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={5}>
                          <div className="send_request_for_call text-center">
                            <button href="#">Submit</button>
                          </div>
                        </td>
                      </tr>
                      {/*  <tr className="winner__table">
      <td style="border-top: none;">REGION Edit Regions</td>
      <td>ADDRESS TYPE</td>
      <td>TRANSIT TIME</td>
      <td>SET RATE</td>
      <td>...</td>
       
       
    </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="breadcrumb_dashboard_right_box">
          <div className="need-help">
            {" "}
            <i className="far fa-question-circle" aria-hidden="true" /> Need
            help?{" "}
          </div>
          <p>
            Our expert team is here to guide you through setting up your shop on
            Sellora.
          </p>
          <div className="send_request_for_call">
            {" "}
            <Link href="#">Send request for call</Link>{" "}
          </div>
        </div>
        <div className="breadcrumb_dashboard_right_box">
          <div className="need-help">Frequently Asked Questions</div>
          <div className="faq_outer">
            <div className="accordion" id="accordionExample">
              {/*    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           How do you plan to utilize this data in your business strategy?
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
        </div>
      </div> */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    {" "}
                    How do you plan to utilize this data in your business
                    strategy?{" "}
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-0">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-0"
                    aria-expanded="false"
                    aria-controls="collapse-0"
                  >
                    {" "}
                    Where will this information be used?{" "}
                  </button>
                </h2>
                <div
                  id="collapse-0"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-0"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    {" "}
                    In which sections of your research paper will you
                    incorporate this information?{" "}
                  </button>
                </h2>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-3"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
          <div className="send_request_for_call">
            {" "}
            <Link href="#">More</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default page