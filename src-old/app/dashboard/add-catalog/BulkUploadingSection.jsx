"use client";
import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2';

function BulkUploadingSection() {

  const [excelFile, setExcelFile] = useState(null);
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef(null);
  
   const handleBrowseClick = (e) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  function hendleInput(e){
      
        const file = e.target.files[0];
         if(file){
              const isValidExcel = file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

              if (!isValidExcel) {
                alert("Only .xlsx Excel files are allowed.");
                return;
              }
              // if (file.size > 10 * 1024 * 1024) { 
              // alert("Image size must be 10MB or smaller.");
              //     if (imageRef.current) {
              //         imageRef.current.value = "";
              //     }
              //     return;
              // }
              setExcelFile(file)


            }
      
  }


  useEffect(()=>{

    if(excelFile){
    const formData = new FormData();
    formData.append("file", excelFile || "" );
    setUploading(true)
    fetch('/api/seller/upload-excel-product', {
      method:"POST",
      body:formData,
    }).then((response)=>{
      if(!response.ok){
        
        setUploading(false)
        alert("Error")
        throw new Error("Network Error");
      }
      return response.json();
    }).then((resData)=>{
      if(resData.status){
        Swal.fire({
          icon:"success",
          text:resData.data.message,
          title:"Success"
        })
      }else{
         Swal.fire({
          icon:"error",
          text:resData.data.message,
          title:"Error"
        })
      }
      setUploading(false);
    })
  }
  },[excelFile])


  return (
    <div className="col-lg-10 offset-lg-1">
      {!uploading && (
    <div className="row">
      <div className="col-lg-12">
        <div className="download_outer">
          <h2>Download and Upload spreadsheet</h2>
          <p>For Bulk Listing, Download Tamplates</p>
        </div>
      </div>
      <div className="col-lg-6 p10">
        <Link href="/dashboard/categories?ref=bulk">
          <div className="download_box">
          <Image src={`${baseUrl}front/assets/images/download.jpg`} className="mb-4"
            alt=''
            width={0}
            height={0}
            sizes='100vw'
            loading='lazy'
            style={{width:"auto", height:"auto"}}
          />
             
            <span>Download Tamplates</span>
          </div>
        </Link>
      </div>
      {/* scroll area */}
      <div className="col-lg-6 p10">
        <div className="download_box upload2">
          <Image src={`${baseUrl}front/assets/images/browse.jpg`} className="mb-2"
            alt=''
            width={0}
            height={0}
            sizes='100vw'
            loading='lazy'
            style={{width:"auto", height:"auto"}}
          />
          <input type='file' 
          onChange={(e)=>hendleInput(e)} 
            className='d-none'
             ref={fileInputRef} 
             accept='.xlsx'
             />
          <p>
            Drag and drop a file or <Link href="#" onClick={handleBrowseClick} >browse</Link>{" "}
             
          </p>
          <div className="content_df">
            1 file at a time <span>|</span> XLSX format{" "}
            <span>|</span> 5 MB max
          </div>
        </div>
      </div>
    </div>

    )}

  {uploading && (
    <div style={{display:'flex',flexDirection:'column'}}>
      <div>Uploading..</div>
        <div className="progress" style={{height:'2rem'}}>
          <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
        </div>
    </div>
  )}
  </div>
  )
}

export default BulkUploadingSection