"use client";
import { baseUrl, fetcher } from "@/Http/helper";
import Link from "next/link";
import React, { use, useEffect, useRef, useState } from "react";

import dynamic from "next/dynamic";
import { apiRequest } from "@/Http/apiHelper";
import useSWR, { mutate } from "swr";
import { useRouter } from "next/navigation";
import { countriesList } from "@/Http/citizenList";
const CkeditorContainer = dynamic(() => import("./CkeditorContainer"), {
  ssr: false,
});

const page = ({ params }) => {
  const {
    data: fetchingData,
    error,
    isLoading,
  } = useSWR(`${baseUrl}/api/seller/save-profile-business-details`, fetcher);

  
  const router = useRouter();
  const sellor_id = use(params).seller_id; 
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});
 
  const [data, setData] = useState({ 
    business_overview: "",  
    TypeOfEnterprise:"",
    YearFounded:"",
    ProductLine:"",
    Headquarters:"",
    EmployeeCount:"",
    BrandRegistration:"",
    QualityCertifications:"",
    ProductComplianceCertifications:"",
    PatentStatus:"",
    RevenueRange:"",

    TargetMarkets:"",
    country:"",
    state:"",
    storeName:"",
    // TargetMarkets1Precentage:"",
    // TargetMarkets2Country:"",
    // TargetMarkets2Precentage:"",
    // TargetMarkets3Country:"",
    // TargetMarkets3Precentage:"", 

    SustainabilityPractices:""
  });

  useEffect(() => {
    fetch(`${baseUrl}api/seller-details?seller_id=${sellor_id}`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Error");
        }
        return response.json();
      })
      .then((res) => {
        console.log(res);
      });
  }, [sellor_id]);

  useEffect(() => {
    if (fetchingData?.status && fetchingData?.data.sellerProfile) {
      setData(fetchingData?.data.sellerProfile || {});
    }
  }, [fetchingData, isLoading]);

  async function saveBusinessDetails(e) {
    e.preventDefault()
    setIsProcessing(true)
    const response = await apiRequest(
      `${baseUrl}/api/seller/save-profile-business-details`,
      "POST",
      data
    );
    setIsProcessing(false)
    if (response.status) {
      router.push('/dashboard/my-store')
    }else if(response.data?.status_code == 402){
      setErrors(response.data.errors)
    }
  }

 
 
  function hendleInputData(e){
    const { name, value } = e.target;

      setData((preInputData)=>({
        ...preInputData,
        [name]:value
      }))

         setErrors((preError)=>({
        ...preError,
        [name]:value?"":"Required"
      }))
  }
 
  return (
    <>
      
      

      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            
            <div className="row">
              <div className="col-lg-2 col-12"></div>
              <div className="col-lg-9 col-12 profile mt-4">
                <form onSubmit={(e)=>saveBusinessDetails(e)}>
                <div className="row"> 
                  <div className="">
                    <h3>Business Overview</h3>
                  </div> 
                    <div className="row">
                      <div className="col-12 col-lg-12">
                        <CkeditorContainer
                          data={data}
                          setData={setData}
                          nameAttr={"business_overview"}
                        />
                        {errors?.business_overview && (
                            <div className="error_message">{errors?.business_overview}</div>
                           )}
                      </div>
                    </div> 
                    <div className="row">
                      <div className="col-lg-11">
                        <div className="business_pfofile pt--30">
                          {/* <img
                            src={`${baseUrl}front/assets/images/djfdl_review.jpg`}
                          />  */}
                          Business Profile
                        </div>
                      </div>  
                    </div>
                 
                   

                  <div className="table-responsive table-wrap pt-5">
                  <div className="col-lg-11 row">


 <div className="form-group col-lg-6">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sku">
                           Stor Name: 
                          </label>
                        </div>
                        <div className="col-lg-8"> 
                          <input type="text" 
                            value={data.storeName || ""}
                            name="storeName" 
                            placeholder="Enter store name."
                            onChange={(e)=>hendleInputData(e)} 
                          />
                           
                           {errors?.storeName && (
                            <div className="error_message">{errors?.storeName}</div>
                           )}
                        </div>
                      </div>
                    </div>


                    <div className="form-group col-lg-6">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sku">
                           Type of Enterprise: 
                          </label>
                        </div>
                        <div className="col-lg-8">
                        <select value={data.TypeOfEnterprise || ""}
                            name="TypeOfEnterprise" 
                            onChange={(e)=>hendleInputData(e)} >
                              <option value={""}>select</option>
                              <option value={"Manufacturer"}>Manufacturer</option>
                              <option value={"Wholesaler"}>Wholesaler</option>
                              <option value={"Retail"}>Retail</option>
                              <option value={"Reseller"}>Reseller</option>

                        </select >
                          {/* <input type="text" 
                            value={data.TypeOfEnterprise || ""}
                            name="TypeOfEnterprise" 
                            onChange={(e)=>hendleInputData(e)} 
                          /> */}
                           
                           {errors?.TypeOfEnterprise && (
                            <div className="error_message">{errors?.TypeOfEnterprise}</div>
                           )}
                        </div>
                      </div>
                    </div>

                     <div className="form-group col-lg-6">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sku">
                            Year Founded:
                          </label>
                        </div>
                        <div className="col-lg-8">
                          
                           <input type="date" 
                            value={data.YearFounded || ""}
                            name="YearFounded" 
                            onChange={(e)=>hendleInputData(e)} 
                              max={new Date().toISOString().split("T")[0]}
                          />
                           
                           {errors?.YearFounded && (
                            <div className="error_message">{errors?.YearFounded}</div>
                           )}
                        </div>
                      </div>
                    </div>

                     <div className="form-group col-lg-6">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sku">
                            Product Line: 
                          </label>
                        </div>
                        <div className="col-lg-8">
                           <input type="text" 
                            value={data.ProductLine || ""}
                            name="ProductLine" 
                            onChange={(e)=>hendleInputData(e)} 
                          />
                           
                           {errors?.ProductLine && (
                            <div className="error_message">{errors?.ProductLine}</div>
                           )}
                        </div>
                      </div>
                    </div>

                     <div className="form-group col-lg-6">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sku">
                            Headquarters: 
                          </label>
                        </div>
                        <div className="col-lg-4">
                            <select value={data.country || ""}
                                name="country"
                                 onChange={(e)=>hendleInputData(e)} 
                            >
                              <option value={""}>select country</option>
                              {countriesList.map((item, index)=>(
                                       <option value={item} key={index} >{item}</option>
                              ))}
                             
                            </select>
                           
                           {errors?.country && (
                            <div className="error_message">{errors?.country}</div>
                           )}
                        </div>

                         <div className="col-lg-4">
                            <input type="text" 
                            placeholder="Enter state"
                            value={data.state || ""}
                            name="state" 
                            onChange={(e)=>hendleInputData(e)} 
                          />
                           
                           {errors?.state && (
                            <div className="error_message">{errors?.state}</div>
                           )}
                        </div>
                      </div>
                    </div>

                    <div className="form-group col-lg-6">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sku">
                            Employee Count:
                          </label>
                        </div>
                        <div className="col-lg-8">

                           <select  value={data.EmployeeCount || ""}
                            name="EmployeeCount" 
                            onChange={(e)=>hendleInputData(e)}  >
                              <option value={""}>select</option>
                              <option value={"1-10 Employees"}>1-10 Employees</option>
                              <option value={"11-50 Employees"}>11-50 Employees</option>
                              <option value={"51-100 Employees"}>51-100 Employees</option>
                              <option value={"101-200 Employees"}>101-200 Employees</option>
                              <option value={"200+ Employees"}>200+ Employees</option>

                        </select >


                           {/* <input type="text" 
                            value={data.EmployeeCount || ""}
                            name="EmployeeCount" 
                            onChange={(e)=>hendleInputData(e)} 
                          /> */}
                           
                           {errors?.EmployeeCount && (
                            <div className="error_message">{errors?.EmployeeCount}</div>
                           )}
                        </div>
                      </div>
                    </div>

                    <div className="form-group col-lg-6">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sku">
                            Brand Registration: 
                          </label>
                        </div>
                        <div className="col-lg-8">
                          <input type="radio"  name="BrandRegistration" checked={data.BrandRegistration == "Registered Trademarks"} 
                          value={"Registered Trademarks"}
                          onChange={(e)=>hendleInputData(e)}
                           /> Yes
                          &nbsp; <input type="radio"  name="BrandRegistration" checked={data.BrandRegistration == "No"} 
                            value={"No"}
                           onChange={(e)=>hendleInputData(e)}/> No
                        </div>
                      </div>
                    </div>

                    <div className="form-group col-lg-6">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sku">
                            Quality Certifications:
                          </label>
                        </div>
                        <div className="col-lg-8">

                             <select   value={data.QualityCertifications || ""}
                            name="QualityCertifications" 
                            onChange={(e)=>hendleInputData(e)}  >
                              <option value={""}>select</option>
                              <option value={"ISO 9001:2015"}>ISO 9001:2015</option>  
                        </select > 
                           
                           {errors?.QualityCertifications && (
                            <div className="error_message">{errors?.QualityCertifications}</div>
                           )}
                        </div>
                      </div>
                    </div>

                    <div className="form-group col-lg-6">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sku">
                            Product Compliance Certifications:
                          </label>
                        </div>
                        <div className="col-lg-8">

                             <select  value={data.ProductComplianceCertifications || ""}
                            name="ProductComplianceCertifications" 
                            onChange={(e)=>hendleInputData(e)} 
                             >
                              <option value={""}>select</option>
                              <option value={"UL Certified"}>UL Certified</option>  
                              <option value={"FCC Certification"}>FCC Certification</option>  
                              <option value={"CPSC Compliance Certificate"}>CPSC Compliance Certificate</option>  
                              <option value={"FDA Registered"}>FDA Registered</option>  
                              <option value={"Made in USA Certified®"}>Made in USA Certified®</option>  
                              <option value={"OEKO-TEX® Standard 100"}>OEKO-TEX® Standard 100</option>   
                        </select > 


                           {/* <input type="text" 
                            value={data.ProductComplianceCertifications || ""}
                            name="ProductComplianceCertifications" 
                            onChange={(e)=>hendleInputData(e)} 
                          /> */}
                           
                           {errors?.ProductComplianceCertifications && (
                            <div className="error_message">{errors?.ProductComplianceCertifications}</div>
                           )}
                        </div>
                      </div>
                    </div>

                    <div className="form-group col-lg-6">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sku">
                            Patent Status:
                          </label>
                        </div>
                        <div className="col-lg-8">

                              <select  value={data.PatentStatus || ""}
                                name="PatentStatus" 
                                onChange={(e)=>hendleInputData(e)} 
                                >
                              <option value={""}>select</option>
                              <option value={"Patent Granted"}>Patent Granted</option>       
                              <option value={"Patent Pending"}>Patent Pending</option>     
                              <option value={"Design Patent Granted"}>Design Patent Granted</option>     
                              <option value={"Utility Patent Granted"}>Utility Patent Granted</option>     
                              <option value={"Trademark Registered"}>Trademark Registered</option>     
                              <option value={"Copyright Registered"}>Copyright Registered</option>     
                        </select > 


                            
                           
                           {errors?.PatentStatus && (
                            <div className="error_message">{errors?.TypeOfEnterprise}</div>
                           )}
                        </div>
                      </div>
                    </div>

                    <div className="form-group col-lg-6">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sku">
                           Revenue Range:
                          </label>
                        </div>
                        <div className="col-lg-8">

                            <select  value={data.RevenueRange || ""}
                            name="RevenueRange" 
                            onChange={(e)=>hendleInputData(e)} 
                             >
                              <option value={""}>select</option>
                              <option value={"Less than $100,000"}>Less than $100,000</option>  
                              <option value={"$100,000 – $500,000"}>$100,000 – $500,000</option>   
                              <option value={"$500,001 – $1,000,000"}>$500,001 – $1,000,000</option>   
                              <option value={"$1,000,001 – $5,000,000"}>$1,000,001 – $5,000,000</option>   
                              <option value={"$5,000,001 – $10,000,000"}>$5,000,001 – $10,000,000</option>   
                              <option value={"More than $10,000,000"}>More than $10,000,000</option>     
                        </select > 


                           {/* <input type="text" 
                            value={data.RevenueRange || ""}
                            name="RevenueRange" 
                            onChange={(e)=>hendleInputData(e)} 
                          /> */}
                           
                           {errors?.RevenueRange && (
                            <div className="error_message">{errors?.RevenueRange}</div>
                           )}
                        </div>
                      </div>
                    </div>

                     

                    <div className="form-group col-lg-6">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label htmlFor="sku">
                           Target Markets:
                          </label>
                        </div>
                        <div className="col-lg-8">

                          
                            <select value={data.TargetMarkets || ""}
                            name="TargetMarkets" 
                            onChange={(e)=>hendleInputData(e)} 
                             >
                              <option value={""}>select</option>
                              <option value={"North America"}>North America</option>     
                        </select > 


                           {/* <input type="text" 
                            value={data.TargetMarkets || ""}
                            name="TargetMarkets" 
                            onChange={(e)=>hendleInputData(e)} 
                          />
                             */}
                           
                           {errors?.TargetMarkets && (
                            <div className="error_message">{errors?.TargetMarkets}</div>
                           )}
                        </div>
                        
                      </div>
                    </div>

                  

                    <div className="form-group col-lg-12">
                      <div className="row align-items-center">
                        <div className="col-lg-2">
                          <label htmlFor="sku">
                          Sustainability Practices:
                          </label>
                        </div>
                        <div className="col-lg-10">

                          <select  value={data.SustainabilityPractices || ""}
                            name="SustainabilityPractices" 
                            onChange={(e)=>hendleInputData(e)} 
                             >
                              <option value={""}>select</option>
                              <option value={"Eco-friendly Packaging"}>Eco-friendly Packaging</option>     
                              <option value={"Made from Recycled Materials"}>Made from Recycled Materials</option>     
                              <option value={"Energy-efficient Manufacturing"}>Energy-efficient Manufacturing</option>     
                              <option value={"Fair Trade Certified"}>Fair Trade Certified</option>     
                              <option value={"Organic Certified"}>Organic Certified</option>     
                              <option value={"Vegan & Cruelty-Free Products"}>Vegan & Cruelty-Free Products</option>     
                              <option value={"No Sustainability Practice Declared"}>No Sustainability Practice Declared</option>     
                        </select > 
                           
                           
                           {errors?.SustainabilityPractices && (
                            <div className="error_message">{errors?.SustainabilityPractices}</div>
                           )}
                        </div>
                        
                      </div>
                    </div> 
                  </div>
                  </div>

                  <div className="col-12 col-lg-12">
                        <div style={{ float: "right", display:"flex",  gap:'2px' }}>
                            <button type="button"
                            className="view_all mt--20" 
                            onClick={()=>router.push("/dashboard/my-store")}
                          > 
                            Cancel
                          </button>

                          <button
                            className="view_all mt--20"
                           type="submit"
                           disabled={isProcessing}
                          > 
                            {isProcessing?"Please wait..":"submit"}
                          </button>
                          
                        </div>
                      </div> 
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </>
  );
};

export default page;
