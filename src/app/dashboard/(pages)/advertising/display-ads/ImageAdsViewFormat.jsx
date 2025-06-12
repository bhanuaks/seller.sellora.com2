 "use client"
import AutoCreativeFormat from './AutoCreativeFormat'
import RichCreativeFormat from './RichCreativeFormat'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

function ImageAdsViewFormat({product, campaign, adProduct, setAdProduct}) {

    
      const [isEdit, setIsEdit] = useState(false) 
      const [productDisplayName, setProductDisplayName] = useState("")
    
      useEffect(()=>{ 
        fetch('/api/seller/ads/single-product-details', {
          method:"POST",
          body:JSON.stringify({product_id:product?._id, variant_id: product?.variant?._id})
        }).then((response)=>{
          if(!response.ok){
            throw new Error("Internal Error");
          }
          return response.json()
        }).then((res)=>{
           if(res.status){
            setAdProduct(res.data.product)
            setProductDisplayName(res.data?.product?.product_name || "")
           }
        }).catch((error)=>{
          Swal.fire({
            icon:"error",
            text:error.message,
            icon:"error"
          })
        })
    
      },[product, campaign.previewType])


  return (
    <>
         {campaign.previewType == "Auto Creative" && (

            <AutoCreativeFormat 
            isEdit={isEdit} 
            adProduct={adProduct} 
            productDisplayName={productDisplayName}

             setIsEdit={setIsEdit} 
            setAdProduct={setAdProduct} 
            setProductDisplayName={setProductDisplayName}
            campaign={campaign} 
            />

            )}
            { campaign.previewType == "Rich Creative" && (
                
                <RichCreativeFormat 
                 isEdit={isEdit} 
                adProduct={adProduct} 
                productDisplayName={productDisplayName}

                setIsEdit={setIsEdit}
                setAdProduct={setAdProduct}
                setProductDisplayName={setProductDisplayName}
                campaign={campaign} 
             />

            )}
    </>
  )
}

export default ImageAdsViewFormat