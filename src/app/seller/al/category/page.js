"use client"
import Link from 'next/link'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Sidebar from '../afterlogincomponent/Sidebar'
import TopButton from '../afterlogincomponent/TopButton'
import { AppContext } from '@/app/contaxtData/contextData'
import { baseUrl } from '@/Http/helper'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import $ from 'jquery'
import '../../../../../public/front/loader.css'
import CompletePercentage from '../afterlogincomponent/completePercentage'
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';


function page() {

  const {globalData, setGlobalData} = useContext(AppContext)
  const [sellor, setSellor] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchCategory, setSearchCategory] = useState([]);
  const [searching, setSearching] = useState(false);
  const router = useRouter()
    const phoneInputRef = useRef(null); 

  
      useEffect(() => {
        const input = document.querySelector('#mobile_code');
    
        if (input) {
          const iti = intlTelInput(phoneInputRef.current, {
            initialCountry: sellor && sellor.country_s_name?sellor.country_s_name:'in',
            separateDialCode: true,
            // utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js', 
          });
    
         
          const onCountryChange = () => {
            const selectedCountryData = iti.getSelectedCountryData();  
            setSellor((preData)=>({
                ...preData,
                mobile_code:selectedCountryData.dialCode,
                country_s_name:selectedCountryData.iso2,
            }))
          }; 
          phoneInputRef.current.addEventListener('countrychange', onCountryChange);
          
          return () => {
            iti.destroy();  
          };
        }
      }, [setSellor]);
  useEffect(()=>{ 
    if(globalData.sellor){
      $('.loaderouter').css('display','flex') 
      fetch(`${baseUrl}api/seller/get-profile?user_id=${globalData.sellor._id}&category=Yes`,{
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
            setSellor(res.data.data)
            setCategory(res.data.categories)
          }
      })
    }

  },[globalData.sellor])

  const updateInputData = (_id) => {
    const filterData = selectedCategory.filter((category) => category === _id);
    
    if (filterData.length > 0) { 
      setSelectedCategory(selectedCategory.filter((category) => category !== _id));
    } else { 
      setSelectedCategory([...selectedCategory, _id]);
    }
  };

function submitUpdateForm(e){
  e.preventDefault();
  $('.loaderouter').css('display','flex');
  fetch(`${baseUrl}api/seller/update-profile?update=contact_details`,{
    method:"POST",
    body:JSON.stringify(sellor)
  }).then((response)=>{
      if(!response.ok){
        $('.loaderouter').css('display','none')
        throw new Error('Network Error') 
      }
      return response.json();
  }).then((res)=>{
    $('.loaderouter').css('display','none') 
      if(res.status){
        toast.success('Success! Contact Details Saved.');
        router.push('/seller/al/display-information')
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
            <div className="col-lg-8 offset-lg-2">
              <div className="nnn_dform">
                <h2>Choose Category</h2>
                <div className="registration_form_single-input">
                  <label htmlFor="f-name">Search Category<span className='mandatory_field'>*</span></label>
                  <input type="text" required=""  name='name' /> 
                </div>
                <h2 style={{textAlign:'left'}}>Categories</h2>
                <div className='row'>
                    {!searching && category.length>0 ? category.map((item)=>(
                         <div className='col-lg-4 parent_element'> 
                            <div className={`categories_list ${ selectedCategory.includes(item._id) ? "selected" : "" }`}
                                onClick={() => updateInputData(item._id)}>
                                {item.name}
                            </div>
                        </div>
                    )):null}


                    {/* <div className='col-lg-4 parent_element'> 
                        <div className={`categories_list ${ selectedCategory.includes("id1") ? "selected" : "" }`}
                            onClick={() => updateInputData("id1")} >
                            Category 1
                        </div>
                    </div>
                    <div className='col-lg-4 parent_element'> 
                        <div className={`categories_list ${selectedCategory.includes("id2")?"selected":""}`}
                          onClick={()=>updateInputData("id2")}> category 2</div>
                    </div>
                    <div className='col-lg-4 parent_element'> 
                        <div className={`categories_list ${selectedCategory.includes("id3")?"selected":""}`}
                          onClick={()=>updateInputData("id3")}> category 3 category 3</div>
                    </div>
                    <div className='col-lg-4 parent_element'> 
                        <div className={`categories_list ${selectedCategory.includes("id4")?"selected":""}`}
                          onClick={()=>updateInputData("id4")}> category 4</div>
                    </div>
                    <div className='col-lg-4 parent_element'> 
                        <div className={`categories_list ${selectedCategory.includes("id5")?"selected":""}`}
                          onClick={()=>updateInputData("id5")}> category 5</div>
                    </div>
                    <div className='col-lg-4 parent_element' key={1}> 
                        <div className={`categories_list ${selectedCategory.includes("id6")?"selected":""}`}
                          onClick={()=>updateInputData("id6")}> category 6</div>
                    </div>

                    <div className='col-lg-4 parent_element' key={1}> 
                        <div className={`categories_list ${selectedCategory.includes("id7")?"selected":""}`}
                          onClick={()=>updateInputData("id7")}> category 7</div>
                    </div>
                    <div className='col-lg-4 parent_element' key={1}> 
                        <div className={`categories_list ${selectedCategory.includes("id8")?"selected":""}`}
                          onClick={()=>updateInputData("id8")}> category 8</div>
                    </div>
                    <div className='col-lg-4 parent_element' key={1}> 
                        <div className={`categories_list ${selectedCategory.includes("id9")?"selected":""}`}
                          onClick={()=>updateInputData("id9")}> category 9</div>
                    </div>
                    
                    <div className='col-lg-4 parent_element' key={1}> 
                        <div className={`categories_list ${selectedCategory.includes("id10")?"selected":""}`}
                          onClick={()=>updateInputData("id10")}> category 10</div>
                    </div>
                    <div className='col-lg-4 parent_element' key={1}> 
                        <div className={`categories_list ${selectedCategory.includes("id11")?"selected":""}`}
                          onClick={()=>updateInputData("id11")}> category 11</div>
                    </div>
                    <div className='col-lg-4 parent_element' key={1}> 
                        <div className={`categories_list ${selectedCategory.includes("id12")?"selected":""}`}
                          onClick={()=>updateInputData("id12")}> category 12</div>
                    </div> */}
                     
                </div>
                 
                <div className="registration_form_single-input">
                  {/* <label htmlFor="f-name">Search Category<span className='mandatory_field'>*</span></label>
                  <input type="text" required=""  name='name' />  */}
                </div>
                <button className="save">Save</button>
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="breadcrumb_dashboard_right_box">
          <div className="need-help">
            <i className="far fa-question-circle" aria-hidden="true" /> Need
            help?
          </div>
          <p>
            Our expert team is here to guide you through setting up your shop on
            Sellora.
          </p>
          <div className="send_request_for_call">
            <Link href="#">Send request for call</Link>
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
                    How do you plan to utilize this data in your business
                    strategy?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
                    Where will this information be used?
                  </button>
                </h2>
                <div
                  id="collapse-0"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-0"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
                    In which sections of your research paper will you
                    incorporate this information?
                  </button>
                </h2>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-3"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
          <div className="send_request_for_call">
            <Link href="#">More</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default page