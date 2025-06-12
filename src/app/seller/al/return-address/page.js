"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import Sidebar from '../afterlogincomponent/Sidebar'
import Link from 'next/link'
import TopButton from '../afterlogincomponent/TopButton'
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import { AppContext } from '@/app/contaxtData/contextData'
import $ from 'jquery'
import { baseUrl } from '@/Http/helper'
import { useRouter } from 'next/navigation'
import  '../../../../../public/front/error.css'
import  '../../../../../public/front/loader.css'
import { ToastContainer, toast } from 'react-toastify';
import CompletePercentage from '../afterlogincomponent/completePercentage'

const page = () => {

    const {globalData, setGlobalData} = useContext(AppContext)

    const countryRef = useRef() 
    const router = useRouter();
    const [errors, setErrors] = useState({});
    const [sellor, setSellor] = useState(null);
    const phoneInputRef = useRef(null); 
    const [addressData, setAddressData] = useState({
      country_s_name:'in',
      mobile_code:'91',
      mobile:'',
      name:'',
      address_line_1:'',
      address_line_2:'',
      city:'',
      state:'',
      zip_code:'',
      country:'United States',
    })
    
  
    useEffect(()=>{ 
      if(globalData.sellor){
        $('.loaderouter').css('display','flex') 
        fetch(`${baseUrl}api/seller/get-profile?user_id=${globalData.sellor._id}&with_data=returnAddress`,{
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
                    if(!res.data.data.complete_step ||  res.data.data.complete_step < 3){
                        router.push('/seller/al/contact-details')
                    }
              setSellor(res.data.data)
              if(res.data.referData){
                setAddressData(res.data.referData)
              }
            }
        })
      }
  
    },[globalData.sellor])
  
  
    useEffect(() => {
      const input = document.querySelector('#mobile_code');
  
      if (input) {
        const iti = intlTelInput(phoneInputRef.current, {
          initialCountry: addressData && addressData.country_s_name?addressData.country_s_name:'in',
          separateDialCode: true,
          // utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js', 
        });
  
       
        const onCountryChange = () => {
          const selectedCountryData = iti.getSelectedCountryData();  
          setAddressData((preData)=>({
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
    }, [setAddressData, addressData.country_s_name]);
  
    
  const updateInputData= (e)=>{
  
    const {name, value} = e.target;
      if(name=="mobile"){
          const numericValue = value.replace(/[^0-9]/g, '');
          setAddressData((preData)=>({
            ...preData,
            [name]:numericValue
          })) 
        return
      }

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

      setAddressData((preData)=>({
        ...preData,
        [name]:value
      }))
     
    }
  
  
  
  function submitUpdateForm(e){
    e.preventDefault();
    setErrors({});

    $('.loaderouter').css('display','flex');
    fetch(`${baseUrl}api/seller/update-profile?update=returnAddress`,{
      method:"POST",
      body:JSON.stringify({
        ...sellor,
        address:addressData
      })
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
          router.push('/seller/al/business-details')
        }else if(res.data.status_code==403){
          setErrors(res.data.errors)
        }
    })
  
  
  }
  

  

    return (
        <div className="seller_panel_mmmm">

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

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3" />
                    <div className="col-lg-6">
                        <div className="onboarding_form">
                            <h3>Onboarding Dashboard</h3>
                        </div>
                    </div>
                    <div className="col-lg-3">
                    <TopButton />
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
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="nnn_dform">
                                        <h2>Return Address</h2>
                                        <div className="registration_form_single-input">
                                            <label htmlFor="f-name">Name<span className='mandatory_field'>*</span></label>
                                            <input type="text" 
                                             name='name' 
                                             value={addressData.name}
                                             onChange={(e)=>updateInputData(e)}
                                             />
                                              {errors.name && errors.name != ""? ( 
                            <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.name}</span>
                        ):''}
                                        </div>
                                        <div className="registration_form_single-input">
                                            <label htmlFor="f-name">Address Line 1<span className='mandatory_field'>*</span></label>
                                            <input type="text"  name='address_line_1' 
                                                value={addressData.address_line_1}
                                                onChange={(e)=>updateInputData(e)}
                                                />
                                                {errors.address_line_1 && errors.address_line_1 != ""? ( 
                                                    <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.address_line_1}</span>
                                                ):''}

                                        </div>
                                        <div className="registration_form_single-input">
                                            <label htmlFor="f-name">Address Line 2</label>
                                           <input type="text"  name='address_line_2' 
                                                value={addressData.address_line_2} 
                                                onChange={(e)=>updateInputData(e)}
                                                />
                                                {errors.address_line_2 && errors.address_line_2 != ""? ( 
                                                            <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.address_line_2}</span>
                                                        ):''}
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="registration_form_single-input">
                                                    <label htmlFor="f-name">City<span className='mandatory_field'>*</span></label>
                                                    <input type="text"  name='city' 
                                                            value={addressData.city}
                                                    onChange={(e)=>updateInputData(e)}
                                                    />
                                                    {errors.city && errors.city != ""? ( 
                                                                <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.city}</span>
                                                            ):''}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="registration_form_single-input">
                                                    <label htmlFor="f-name">State<span className='mandatory_field'>*</span></label>
                                                    <input type="text"  name='state' 
                                                            value={addressData.state}
                                                    onChange={(e)=>updateInputData(e)}
                                                    />
                                                    {errors.state && errors.state != ""? ( 
                                                                <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.state}</span>
                                                            ):''}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="registration_form_single-input">
                                                    <label htmlFor="f-name">Zip code<span className='mandatory_field'>*</span></label>
                                                    <input type="text"  name='zip_code' 
                                                            value={addressData.zip_code}
                                                    onChange={(e)=>updateInputData(e)}
                                                    />
                                                    {errors.zip_code && errors.zip_code != ""? ( 
                                                                <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.zip_code}</span>
                                                            ):''}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="registration_form_single-input">
                                                    <label htmlFor="f-name">Country<span className='mandatory_field'>*</span></label> 
                                                            <select  
                                                                name='country'   
                                                                value={addressData.country}
                                                                onChange={(e)=>updateInputData(e)} 
                                                                > 
                                                                <option value="">Select Country</option>
                                                                <option value="Afghanistan">Afghanistan</option>
                                                                <option value="Albania">Albania</option>
                                                                <option value="Algeria">Algeria</option>
                                                                <option value="American Samoa">American Samoa</option>
                                                                <option value="Andorra">Andorra</option>
                                                                <option value="Angola">Angola</option>
                                                                <option value="Anguilla">Anguilla</option>
                                                                <option value="Antarctica">Antarctica</option>
                                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                <option value="Argentina">Argentina</option>
                                                                <option value="Armenia">Armenia</option>
                                                                <option value="Australia">Australia</option>
                                                                <option value="Austria">Austria</option>
                                                                <option value="Azerbaijan">Azerbaijan</option>
                                                                <option value="Bahamas">Bahamas</option>
                                                                <option value="Bahrain">Bahrain</option>
                                                                <option value="Bangladesh">Bangladesh</option>
                                                                <option value="Barbados">Barbados</option>
                                                                <option value="Belarus">Belarus</option>
                                                                <option value="Belgium">Belgium</option>
                                                                <option value="Belize">Belize</option>
                                                                <option value="Benin">Benin</option>
                                                                <option value="Bermuda">Bermuda</option>
                                                                <option value="Bhutan">Bhutan</option>
                                                                <option value="Bolivia">Bolivia</option>
                                                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                <option value="Botswana">Botswana</option>
                                                                <option value="Brazil">Brazil</option>
                                                                <option value="Brunei">Brunei</option>
                                                                <option value="Bulgaria">Bulgaria</option>
                                                                <option value="Burkina Faso">Burkina Faso</option>
                                                                <option value="Burundi">Burundi</option>
                                                                <option value="Cambodia">Cambodia</option>
                                                                <option value="Cameroon">Cameroon</option>
                                                                <option value="Canada">Canada</option>
                                                                <option value="Cape Verde">Cape Verde</option>
                                                                <option value="Central African Republic">Central African Republic</option>
                                                                <option value="Chad">Chad</option>
                                                                <option value="Chile">Chile</option>
                                                                <option value="China">China</option>
                                                                <option value="Colombia">Colombia</option>
                                                                <option value="Comoros">Comoros</option>
                                                                <option value="Congo">Congo</option>
                                                                <option value="Costa Rica">Costa Rica</option>
                                                                <option value="Croatia">Croatia</option>
                                                                <option value="Cuba">Cuba</option>
                                                                <option value="Cyprus">Cyprus</option>
                                                                <option value="Czech Republic">Czech Republic</option>
                                                                <option value="Denmark">Denmark</option>
                                                                <option value="Djibouti">Djibouti</option>
                                                                <option value="Dominica">Dominica</option>
                                                                <option value="Dominican Republic">Dominican Republic</option>
                                                                <option value="Ecuador">Ecuador</option>
                                                                <option value="Egypt">Egypt</option>
                                                                <option value="El Salvador">El Salvador</option>
                                                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                                <option value="Eritrea">Eritrea</option>
                                                                <option value="Estonia">Estonia</option>
                                                                <option value="Ethiopia">Ethiopia</option>
                                                                <option value="Fiji">Fiji</option>
                                                                <option value="Finland">Finland</option>
                                                                <option value="France">France</option>
                                                                <option value="Gabon">Gabon</option>
                                                                <option value="Gambia">Gambia</option>
                                                                <option value="Georgia">Georgia</option>
                                                                <option value="Germany">Germany</option>
                                                                <option value="Ghana">Ghana</option>
                                                                <option value="Greece">Greece</option>
                                                                <option value="Grenada">Grenada</option>
                                                                <option value="Guatemala">Guatemala</option>
                                                                <option value="Guinea">Guinea</option>
                                                                <option value="Guyana">Guyana</option>
                                                                <option value="Haiti">Haiti</option>
                                                                <option value="Honduras">Honduras</option>
                                                                <option value="Hungary">Hungary</option>
                                                                <option value="Iceland">Iceland</option>
                                                                <option value="India">India</option>
                                                                <option value="Indonesia">Indonesia</option>
                                                                <option value="Iran">Iran</option>
                                                                <option value="Iraq">Iraq</option>
                                                                <option value="Ireland">Ireland</option>
                                                                <option value="Israel">Israel</option>
                                                                <option value="Italy">Italy</option>
                                                                <option value="Jamaica">Jamaica</option>
                                                                <option value="Japan">Japan</option>
                                                                <option value="Jordan">Jordan</option>
                                                                <option value="Kazakhstan">Kazakhstan</option>
                                                                <option value="Kenya">Kenya</option>
                                                                <option value="Kuwait">Kuwait</option>
                                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                                <option value="Laos">Laos</option>
                                                                <option value="Latvia">Latvia</option>
                                                                <option value="Lebanon">Lebanon</option>
                                                                <option value="Lesotho">Lesotho</option>
                                                                <option value="Liberia">Liberia</option>
                                                                <option value="Libya">Libya</option>
                                                                <option value="Lithuania">Lithuania</option>
                                                                <option value="Luxembourg">Luxembourg</option>
                                                                <option value="Madagascar">Madagascar</option>
                                                                <option value="Malawi">Malawi</option>
                                                                <option value="Malaysia">Malaysia</option>
                                                                <option value="Maldives">Maldives</option>
                                                                <option value="Mali">Mali</option>
                                                                <option value="Malta">Malta</option>
                                                                <option value="Mauritius">Mauritius</option>
                                                                <option value="Mexico">Mexico</option>
                                                                <option value="Mongolia">Mongolia</option>
                                                                <option value="Morocco">Morocco</option>
                                                                <option value="Nepal">Nepal</option>
                                                                <option value="Netherlands">Netherlands</option>
                                                                <option value="New Zealand">New Zealand</option>
                                                                <option value="Nigeria">Nigeria</option>
                                                                <option value="Norway">Norway</option>
                                                                <option value="Oman">Oman</option>
                                                                <option value="Pakistan">Pakistan</option>
                                                                <option value="Panama">Panama</option>
                                                                <option value="Peru">Peru</option>
                                                                <option value="Philippines">Philippines</option>
                                                                <option value="Poland">Poland</option>
                                                                <option value="Portugal">Portugal</option>
                                                                <option value="Qatar">Qatar</option>
                                                                <option value="Romania">Romania</option>
                                                                <option value="Russia">Russia</option>
                                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                                <option value="South Africa">South Africa</option>
                                                                <option value="Spain">Spain</option>
                                                                <option value="Sweden">Sweden</option>
                                                                <option value="Switzerland">Switzerland</option>
                                                                <option value="Thailand">Thailand</option>
                                                                <option value="Turkey">Turkey</option>
                                                                <option value="Ukraine">Ukraine</option>
                                                                <option value="United Arab Emirates">United Arab Emirates</option>
                                                                <option value="United Kingdom">United Kingdom</option>
                                                                <option value="United States">United States</option>
                                                                <option value="Vietnam">Vietnam</option>
                                                                <option value="Zambia">Zambia</option>
                                                                <option value="Zimbabwe">Zimbabwe</option>
                                            </select>



                                                    {errors.country && errors.country != ""? ( 
                                                                <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.country}</span>
                                                            ):''}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="registration_form_single-input">
                                            <label htmlFor="f-name">Mobile Number<span className='mandatory_field'>*</span></label>
                                            <div className="country_code_outer">
                                            <input
                                                    type="text"
                                                    id="mobile_code"
                                                    placeholder="Mobile number" 
                                                    ref={phoneInputRef}
                                                    name='mobile' 
                                                    value={addressData.mobile}
                                                onChange={(e)=>updateInputData(e)}

                                                    />
                                                    {errors.mobile && errors.mobile != ""? ( 
                                                            <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.mobile}</span>
                                                        ):''}
                                            </div>
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