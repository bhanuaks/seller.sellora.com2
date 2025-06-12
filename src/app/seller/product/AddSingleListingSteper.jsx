import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function AddSingleListingSteper({productDetails, searchParams, compliance}) {
    const pathname = usePathname();
  return (
    <div className="row">
                            <div className="col-lg-12">
                                <div className="">
                                    <ol className="steps">
                                        <li className="step is-active" data-step={1}> 
                                          <Link href={`/seller/product/add-product?${searchParams}`}><span>Product Information</span> </Link> 
                                        </li>
                                        <li className={`step ${pathname == "/seller/product/add-variant" || pathname == "/seller/product/compliance-and-key-attributes" ?"is-active":""}`} data-step={2}>
                                            {productDetails?._id ? (
                                                <Link href={`/seller/product/add-variant?${searchParams}`}><span>Image/Price/Inventory/Variation</span> </Link> 
                                            ):(
                                                <span>Image/Price/Inventory/Variation</span>  
                                            )}
                                        </li>
                                        <li className={`step ${pathname == "/seller/product/compliance-and-key-attributes" ?"is-active":""}`} data-step={3}>  
                                            {compliance ? (
                                            <Link href={`/seller/product/compliance-and-key-attributes?${searchParams}`}><span>Compliance and Key attributes</span> </Link> 
                                            ):(
                                               <span>Compliance and Key attributes</span>   
                                            )}
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
  )
}

export default AddSingleListingSteper