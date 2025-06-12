import React from "react";

function ShippingDetails({shippingInfo, sellerAddress}) {
  return (
    <div className="shippin_details_outer">
      <h3>Shipping details</h3>
      <div className="edit_er4i9">
        <ul>
          <li>
          <a
                            href="#" 
                            data-bs-toggle="modal"
                            data-bs-target="#add-bulk"
                          >Edit</a>
          </li>
          <li>
            <a href="#">Print Packing Slip</a>
          </li>
        </ul>
      </div>
      
      {shippingInfo?.trakingDetails?.length > 0 && 
      shippingInfo.trakingDetails.map((itemData, index)=>(
        <div className="row" key={index}>
        <div className="col-lg-2" />
        <div className="col-lg-4">
          <div className="carrier_dfjkl">
            <h1>Carrier / Tracking:</h1>
            <ul>
              <li>{itemData?.shippingCarrier} tracking number</li>
              <li>{itemData?.trakingNumber}</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2" />
        <div className="col-lg-4">
          <div className="carrier_dfjkl">
            <ul>
              <li>
                <span>Ship date:</span>  {new Date(shippingInfo.createdAt).toLocaleDateString("en-us",{
                    weekday:"short",
                    year:"numeric",
                    month: "short",
                    day : "numeric"
                })}
              </li>
              <li>
                <span>Carrier name:</span> {itemData?.shippingCarrier}
              </li>
              <li>
                <span>Ship from:</span> {sellerAddress?.address_line_1} 
                &nbsp; {sellerAddress?.address_line_2} 
                &nbsp; {sellerAddress?.city}
                &nbsp; {sellerAddress?.state}
                &nbsp; {sellerAddress?.country} -
                &nbsp; {sellerAddress?.zip_code}
              </li>
            </ul>
          </div>
        </div>

      </div>

      ))}
     
    </div>
  );
}

export default ShippingDetails;
