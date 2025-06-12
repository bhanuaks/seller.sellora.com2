"use client"
import HelpAndVideoTopSection from '@/app/seller/HelpAndVideoTop'
import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import BulkUploadingSection from './BulkUploadingSection'
import SingleLIstingSection from './SingleLIstingSection'
import { Suspense } from 'react' 
import { exportExcelWithData } from '@/Http/ExcelHelper'
const AddProductPage = ({params}) => {

  const searchParams = useSearchParams();
  const entryType = searchParams.get('ref') || "single";

 



  return (
    <div className="bg33">
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          
        </div>
        <div className="col-lg-6 col-md-6">
          <HelpAndVideoTopSection />
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <div className="row">
          <div className="col-lg-12">
            <div className="crate_yout_catalog">
              <h2>Create Your Catalog</h2>
              <p>
                Add, organize, and customize your items exactly how you want
              </p>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="form_outer">
            <div className="row">
              {entryType == "bulk" && ( 
                 <BulkUploadingSection  />  
              )}

            {entryType == "single" && ( 
                 <SingleLIstingSection />  
              )}

               
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

const page =()=>{
  return (
    <Suspense fallback={<>Loading..</>}>
      <AddProductPage />
    </Suspense>
  )
}
export default page