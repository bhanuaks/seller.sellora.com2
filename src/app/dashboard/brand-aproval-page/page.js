"use client"
import Link from 'next/link'
import React, { Suspense, useContext, useEffect, useRef, useState } from 'react'
import 'nice-select2/dist/css/nice-select2.css';
import NiceSelect from 'nice-select2';
import Image from 'next/image';
import { baseUrl } from '@/Http/helper';
import '../../../../public/front/error.css'
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import '../../../../public/front/loader.css'
import { ToastContainer, toast } from 'react-toastify';
import { AppContext } from '@/app/contaxtData/contextData';
import  $ from 'jquery'
import HelpAndVideoTopSection from '@/app/seller/HelpAndVideoTop';


const page = () => {

  const ApplyBrandSection = ()=>{

  
  const params =  useSearchParams();
  const brandName = params.get('brandName');
  const update = params.get('update') || null;

  const {globalData, setGlobalData } = useContext(AppContext)
  const certificateRef = useRef(null); 
  const tmStatusRef = useRef(null); 
  const tmTypeRef = useRef(null); 
  const [imagePath, setImagePath] = useState(null); 
  const [errors, setErrors] = useState({}); 
  const router = useRouter();
  const [sellor, setSellor] = useState(null);
  

  const [brandDetails, setBrandDetails] = useState({
    seller_id:'',
    certificate_name:'',
    certificate:'',
    brand_owner:'No',
    are_you_selling_in_other_platform:'No',
    platform_name:'',
    platform_link:'',
    tm_number:'',
    tm_status:'',
    tm_class:'',
    tm_type:'',
    name:brandName || ''
  })

  
  useEffect(()=>{ 
    if(globalData.sellor){
      // $('.loaderouter').css('display','flex') 
      fetch(`${baseUrl}api/seller/get-profile?user_id=${globalData.sellor._id}`,{
        method:"GET", 
      }).then((response)=>{
          if(!response.ok){
            // $('.loaderouter').css('display','none')
            throw new Error('Network Error')
          }
          return response.json();
      }).then((res)=>{
          // $('.loaderouter').css('display','none') 
          if(res.status){ 
            setSellor(res.data.data) 
            setBrandDetails((preData) => ({
              ...preData,
              seller_id: res.data.data._id
            }))
          }
      })
    }

  },[globalData.sellor])
   
  useEffect(() => {
   

    const tmStatusNiceSelect = tmStatusRef.current
      ? new NiceSelect(tmStatusRef.current, {
          // searchable: true,
          placeholder: brandDetails.tm_status?brandDetails.tm_status:'Select an option...',
        })
      : null;


      const tmTypeRefNiceSelect = tmTypeRef.current
      ? new NiceSelect(tmTypeRef.current, {
          // searchable: true,
          placeholder: brandDetails.tm_type? brandDetails.tm_type:'Select an option...',
        })
      : null;
    return () => {
      // Cleanup each instance of NiceSelect
      
      tmStatusNiceSelect?.destroy();
      tmTypeRefNiceSelect?.destroy();
    };
  }, [brandDetails.brand_owner]);


  
  useEffect(() => {
    const certificateNiceSelect = certificateRef.current
      ? new NiceSelect(certificateRef.current, {
          // searchable: true,
          placeholder: brandDetails.certificate_name?brandDetails.certificate_name:'Select an option...',
        })
      : null;
 
    return () => {
      // Cleanup each instance of NiceSelect
      certificateNiceSelect?.destroy();
      
    };
  }, [brandDetails]);


    const handelChangeInput =(e)=>{
      const {name, value} = e.target
        if(!value){
          setErrors((preData)=>({
            ...preData,
            [name] : `${name} is required`
          }))
        }else{
          setErrors((preData)=>({
            ...preData,
            [name] : ``
          }))
        }
      if(name=="certificate"){
        const file = e.target.files[0];

        // if (!file.type.startsWith("image/")) {
        //   alert("Only image files are allowed.");
        //   return;
        // } 
        if (file.size > 10 * 1024 * 1024) {
          //   check image size and alert 
          alert("File size must be 10MB or smaller.");
              if (imageRef.current) {
                  imageRef.current.value = "";
              }
              return;
          }

        if(file){
          setBrandDetails((previousData)=>({
            ...previousData,
            [name]:file
          }))
          $('#button').html(file.name)
          // const reader = new FileReader();
          // reader.onload = () => {
          //   setImagePath(reader.result);  
          // };
          // reader.readAsDataURL(file);
        }else {
          setBrandDetails((previousData) => ({
            ...previousData,
            [name]: null,
          }));
      
          setImagePath(null);  
        } 
          return
      }

      setBrandDetails((previousData)=>({
        ...previousData,
        [name]:value
      }))
      
    }

    function openImageSelect(){ 
      document.getElementById("hidden-input").click()
    }

 const createFormData =(data)=>{
  const formData = new FormData();
    Object.entries(data).forEach(([key, value])=>{
      if(value instanceof File){
        formData.append(key, value);
      }else if(typeof value =="object" && value != ""){
        formData.append(key, JSON.stringify(value))
      }else{
        formData.append(key, value);
      }
    })
    return formData
 }

    function submitBrandForm(e){
      e.preventDefault();
      setErrors({})
      // $('.loaderouter').css('display', 'flex')
      const formData = createFormData(brandDetails);
      console.log(formData);
      fetch(`${baseUrl}api/seller/add-new-brand`,{
        method:"POST",
        body:formData
      }).then((response)=>{
        if(!response.ok){
          // $('.loaderouter').css('display', 'none')
          throw new Error("Network Error")
        }
        return response.json();
      }).then((res)=>{
        // $('.loaderouter').css('display', 'none')
        if(res.status){
          toast.success('Success! Your brand saved successfully. and sent to admin for approval.')
         router.push(`${baseUrl}dashboard/track-approval-requests`)
        }else if(res.data.status_code==403){
          setErrors(res.data.errors)
        }
      })
    }

    useEffect(()=>{
      if(update){

         fetch(`/api/seller/add-new-brand?brand_id=${update}`)
          .then((response)=>{
            if(!response.ok){
              throw new Error("Internal Error")
            }
            return response.json();
          })
          .then((res)=>{
            if(res.status && res.data.brand){
              setBrandDetails(res.data.brand)
            }
          })
          .then((error)=>{
            console.log(error);
          })


      }
     
    },[]);

  return (
    <div className="bg33">

      
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


      <div className="rts-navigation-area-breadcrumb pb--10">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="navigator-breadcrumb-wrapper">
                <h3>Brand Approval</h3>
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
          <div className="col-lg-6 offset-lg-3">

            <div className="form_outer">
              <form action={"#"} onSubmit={(e)=>submitBrandForm(e)}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form_s">
                    <h2>Please provide the essential brand information.</h2>
                  </div>
                </div>
                
                <div className="col-lg-6 offset-lg-3">
                <div className="row pb--10 pt--10">
                      <div className="col-lg-6">
                        <div className="brand_owner">Are you brand owner?</div>
                      </div>
                      <div className="col-lg-6">
                        <div className="owner">
                          <label><span className="buyer-type2">
                            <input type="radio" className="input-radio"  
                            name='brand_owner'
                            value="Yes"
                            onChange={(e)=>handelChangeInput(e)}
                            checked={brandDetails.brand_owner=="Yes"}
                            />Yes</span></label>
                          <label><span className="buyer-type2"> 
                            <input type="radio" className="input-radio"
                              name='brand_owner'
                              value="No"
                              onChange={(e)=>handelChangeInput(e)}
                              checked={brandDetails.brand_owner=="No"} 
                              />
                              No</span></label>
                        </div>
                      </div>
                    </div>
                    <br />
                  <div className="form_s">
                    <div className="col-lg-12">
                      <div className="lable">
                        <input type="text" className="form-control" placeholder="Enter Brand Name" 
                        name='name'
                        value={brandDetails.name}
                        onChange={(e)=>handelChangeInput(e)}
                        />
                        {errors.name && errors.name != ""? ( 
                          <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.name}</span>
                      ):''}
                      </div>
                    </div>
                    <div className="col-lg-12 mb-10">
                      <div className="lable make_nice_select">
                        <select className="form-control "
                         ref={certificateRef}
                         name='certificate_name'
                         value={brandDetails.certificate_name}
                         onChange={(e)=>handelChangeInput(e)}
                         >
                          <option value={"Brand Authorization Letter"} >Brand Authorization Letter</option>
                          <option value={"Trademark Certificate"} >Trademark Certificate</option>
                          <option value={"Invoice"} >Invoice</option>
                        </select>
                        {errors.certificate_name && errors.certificate_name != ""? ( 
                          <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.certificate_name}</span>
                      ):''}
                      </div>
                      <div className="clear"></div>
                    </div>
                    <div className="col-lg-12 mb-10">
                      <div className="bg-gray-500">
                        <div className="mx-auto max-w-screen-lg h-full">
                          {/* <!-- file upload modal --> */}
                          <article aria-label="File Upload Modal"
                            className="relative h-full flex flex-col bg-white rounded-md" 
                            
                            >


                            {/* <!-- scroll area --> */}
                            <section className="h-full w-full h-full flex flex-col">
                              <div className="upload_outer" onClick={()=>openImageSelect()}>
                                <p className="upload">
                                  <span><i className="fa fa-cloud-upload" aria-hidden="true"></i></span>
                                </p>
                                <input id="hidden-input" type="file" multiple className="hidden"
                                name='certificate'  accept="image/jpg, image/jpeg, image/png" 
                                onChange={(e)=>handelChangeInput(e)} />
                                <button id="button" type='button' className="rounded-sm px-3 py-1">
                                  Select the document
                                </button>
                              </div>



                              {/* <!-- image gallery  --> */}
                              {brandDetails.certificate && typeof brandDetails.certificate === "string" && (
                                    <a href={`/${brandDetails.certificate}`} target="_blank" rel="noopener noreferrer">
                                      View file
                                    </a>
                                  )}

                              <ul id="gallery" className="flex flex-1 flex-wrap -m-1">
                              <span className=""><strong>Note:</strong> Allowed file types: .jpg, .png, .pdf. Maximum file size: 10MB.</span>
                                {/* <li id="empty" 
                                  className="h-full w-full text-center flex flex-col justify-center">
                                      {imagePath && (
                                        <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                                            <Image
                                              src={`${imagePath}`}
                                              alt="Feature Image"
                                              fill
                                              style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                      )}
                                      
                                </li> */}
                              </ul>

                            </section>
                            {errors.certificate && errors.certificate != ""? ( 
                          <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.certificate}</span>
                      ):''}

                          </article>
                        </div>
                      </div>

                       
                    </div>



                   


                    <div className="row pb--10 pt--10">
                      <div className="col-lg-8">
                        <div className="brand_owner">Are you selling in other platform?</div>
                      </div>
                      <div className="col-lg-4">
                        <div className="owner">
                          <label><span className="buyer-type2"><input type="radio" className="input-radio" 
                           name='are_you_selling_in_other_platform'
                           value="Yes"
                           onChange={(e)=>handelChangeInput(e)}
                           checked={brandDetails.are_you_selling_in_other_platform=="Yes"} 
                             />Yes</span></label>
                          <label><span className="buyer-type2"> <input type="radio" className="input-radio"
                            name='are_you_selling_in_other_platform'
                            value="No"
                            onChange={(e)=>handelChangeInput(e)}
                            checked={brandDetails.are_you_selling_in_other_platform=="No"} 
                             />No</span></label>
                        </div>
                      </div>
                    </div>
                    <div className="row pb--10 pt--10">
                    {brandDetails.are_you_selling_in_other_platform=="Yes" && (
                      <>
                       <div className="col-lg-6">
                        <div className="lable">
                          <input type="text" className="form-control" placeholder="Platform Name" 
                           name='platform_name'
                           value={brandDetails.platform_name}
                           onChange={(e)=>handelChangeInput(e)}
                           />
                           {errors.platform_name && errors.platform_name != ""? ( 
                          <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.platform_name}</span>
                      ):''}
                        </div> 
                      </div> 
                      <div className="col-lg-6">
                        <div className="lable">
                          <input type="url" className="form-control" placeholder="Store Link" 
                           name='platform_link'
                           value={brandDetails.platform_link}
                           onChange={(e)=>handelChangeInput(e)}
                           />
                           {errors.platform_link && errors.platform_link != ""? ( 
                          <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.platform_link}</span>
                      ):''}
                        </div> 
                      </div>
                      </>
                    )} 
                     

                     {brandDetails.brand_owner=="Yes" && (
                      <div className="registration-form">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="orange"> Fill other document details   </div>
                          </div>
                          <div className="col-lg-6">
                            <label className="size-small">Enter TM Number</label>
                          </div>
                          <div className="col-lg-6">
                            <label><input type="text" className="form-control" 
                             name='tm_number'
                             value={brandDetails.tm_number}
                             onChange={(e)=>handelChangeInput(e)}
                             />
                             {errors.tm_number && errors.tm_number != ""? ( 
                          <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.tm_number}</span>
                      ):''}
                             </label>
                          </div>

                          <div className="col-lg-6">
                            <label className="size-small">TM Status</label>
                          </div>
                          <div className="col-lg-6 make_nice_select">
                            <select className="form-control mb-10 " 
                            ref={tmStatusRef}
                            name='tm_status'
                            value={brandDetails.tm_status}
                            onChange={(e)=>handelChangeInput(e)}
                            >
                              <option>Applied</option>
                              <option>Registered</option>
                              <option>Invalid</option>
                              <option>Other</option>
                            </select>
                            {errors.tm_status && errors.tm_status != ""? ( 
                              <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.tm_status}</span>
                          ):''}
                          </div>

                          <div className="col-lg-6">
                            <label className="size-small">Enter TM Class</label>
                          </div>
                          <div className="col-lg-6"><label>
                            <input type="text" className="form-control" 
                             name='tm_class'
                             value={brandDetails.tm_class}
                             onChange={(e)=>handelChangeInput(e)}
                             />
                             {errors.tm_class && errors.tm_class != ""? ( 
                          <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.tm_class}</span>
                      ):''}
                             </label>

                          </div>

                          <div className="col-lg-6">
                            <label className="size-small">TM Type</label>
                          </div>
                          <div className="col-lg-6 make_nice_select">
                            <select className="form-control " 
                            ref={tmTypeRef}
                            name='tm_type'
                            value={brandDetails.tm_type}
                            onChange={(e)=>handelChangeInput(e)}
                            >
                              <option>Logo</option>
                              <option>Word</option>

                              <option>Other</option>
                            </select>
                            {errors.tm_type && errors.tm_type != ""? ( 
                          <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.tm_type}</span>
                      ):''}
                          </div>
                        </div>
                      </div>
                     )}
                      

                    </div>



                    <div className="col-lg-12 ">
                      <button className="rts-btn btn-primary mb-10" type='submit'>Apply</button>
                    </div> 
                  </div> 
                </div>
                {brandDetails.brand_owner=="Yes" ? (
                  <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <div className="nn_notification">
                      <h1>TMC: This is a document issued by the government and it s a
                        certificate showing ownership of the intellectual property such as your Brand
                        or Company</h1>

                      <h1>Ensure that this document meets the following requirements:</h1>

                      <h2>Trademark Certificate</h2>
                      <ul>
                        <li>Contains application number and brand name</li>
                        <li>Includes TM class that is suitable to the class you wish to sell in</li>
                        <li>Includes the proprietor/seller name and address that is the same as in your Sellora seller
                          account.</li>
                        <li>TM status should be current on the date of this petition</li> 
                      </ul> 
                    </div>
                  </div>
                </div>
                ):(
                  <div className="row">
                      <div className="col-lg-10 offset-lg-1">
                        <div className="nn_notification">
                          <h1>
                            BAL is issued to you by the brand owner or their authorized company,
                            allowing you to sell their products
                          </h1>
                          <h1>Make sure the document meets the following requirements:</h1>
                          <h2>Brand Authorization Letter</h2>
                          <ul>
                            <li>
                              Includes issuance of letterhead, company name, and date on which
                              issued
                            </li>
                            <li>
                              Include your business name that is the same as in your Sellora seller
                              account.
                            </li>
                            <li>
                              Includes the signature and seal (if attached) of the granting company
                              <br />
                              Note: In some cases, the trademark number of the brand may also be
                              necessary on the letter.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> 
                )}
                
              </div>
              </form>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}


return (
  <Suspense fallback={<p>Loading...</p>}>
    <ApplyBrandSection />
  </Suspense>
);


}

export default page