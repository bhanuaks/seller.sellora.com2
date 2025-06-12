"use client"
import { baseUrl, convertTo12Hour, websiteUrl } from "@/Http/helper";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import EventProductSection from "./EventProductSection";

function Page() {

  
    const [event, setEvent] = useState(null); 
    const [selectedProduct, setSelectedProduct] = useState([])
    const [selectedDiscount, setSelectedDiscount] = useState(0)

    const params = useParams();
    const slug = params.slug || ""; 
      useEffect(()=>{
        fetch(`/api/seller/events?slug=${slug}`)
        .then((response)=>{
          if(!response.ok){
            throw new Error("Internal Server Error");
          }
          return response.json();
        })
        .then((res)=>{
          if(res.status){
            setEvent(res.data.event); 
            setSelectedDiscount(res.data.event.discountData[0].discountUpTo); 
          }
        })
        .catch((error)=>{
          Swal.fire(error.message)
        })
      },[])
    

     function addAndSelectProduct(product) {
        setSelectedProduct((prevSelected) => { 
          const existsIndex = prevSelected.findIndex(
            (item) => 
              item.product_id === product._id && 
              item.variant_id === product.variant._id
          );
 
          if (existsIndex !== -1) {
            return prevSelected.filter((_, index) => index !== existsIndex);
          }  
          else {
            return [
              { product_id: product._id, variant_id: product.variant._id },
              ...prevSelected,
            ];
          }
        });
      }
      
      if(!event){
        return (
          <div style={{height:'300px'}}></div>
        )
      }
  return (
    <>
      <div className="rts-navigation-area-breadcrumb pb--10">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 hub1">
              <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
                {/* <a href="#"><i className="fa-solid fa-arrow-left"></i> Go to Seller hub</a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="navigator-breadcrumb-wrapper text-center">
                <h3>{event?.eventName}</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
                {/* <ul>
                  <li><a href="#"><i className="fa-solid fa-wallet"></i> Wallet</a> </li>
                  <li>
                    <a href="#">
                      <Image
                        src={`${baseUrl}front/assets/images/hand_shaking.png`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt=""
                        style={{ width: "auto", height: "auto" }}
                      />
                      Help
                    </a>{" "}
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt--20 pb--30">
        <div className="container">
          <div className="col-lg-10 offset-lg-1">
            <div className="row">
              <div className="col-lg-6">
                <div className="upcoming_event">
                  <div className="row align-items-center">
                    {/* black_friday christmas_sale */}
                    <div className="col-lg-4">
                      <div className="inner_immg_93634">
                        <img
                          src={`${websiteUrl}${event?.image}`} 
                          alt="" 
                        />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="_wier_heading_df">
                        <ul className="list_duration">
                          <li>
                            <span>Event Duration:</span> {new Date(event?.startDate).toLocaleDateString("en-US", {
                                day:"numeric",
                                month:"short"
                            })} - {new Date(event?.closeDate).toLocaleDateString("en-US", {
                                day:"numeric",
                                month:"short"
                            })} , {event?.startDate ?convertTo12Hour(event?.startDate):""} -
                            {event?.closeTime?convertTo12Hour(event?.closeTime):''}
                          </li>
                          <li>
                            <span>Apply Before:</span> {new Date(event?.applyBeforDate).toLocaleDateString("en-US", {
                                day:"numeric",
                                month:"long"
                            })} <br />
                            {event?.closeTime?convertTo12Hour(event?.applyBeforTime):''}
                          </li>
                          <li>
                            <span>Available Products:</span> 19
                            <br />
                            Minimum Discount: {event?.discountData[0]?.discountUpTo}%
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="upcoming_event">
                  <div className="estimated_23">
                    Estimated Increase in Product Visibility:
                  </div>
                  <table className="table_5">
                    <tbody>
                      <tr>
                        <th>Give discount</th>
                        <th>Increase visibility by upto</th>
                      </tr>
                      {event?.discountData?.length > 0 && event.discountData.map((discout, index)=>(
                    <tr key={index}>
                        <td>
                          <input type="radio" value={discout.discountUpTo} 
                          name="discountUpTo" 
                          checked={selectedDiscount == discout.discountUpTo}
                          onChange={(e)=>setSelectedDiscount(e.target.value)}
                          /> 
                          &nbsp; <img
                            src={`${baseUrl}front/assets/images/offer_paracent.jpg`} 
                            alt="" 
                          />
                          Up to {discout.discountUpTo}%
                        </td>
                        <td>
                          <img
                            src={`${baseUrl}front/assets/images/visibility.jpg`}  
                            alt="" 
                          />
                          {discout.increaseSellUpTo}%
                        </td>
                      </tr>
                      ))}
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <EventProductSection 
    selectedDiscount={selectedDiscount}
    setSelectedDiscount={setSelectedDiscount}
    selectedProduct={selectedProduct}
    addAndSelectProduct={addAndSelectProduct}
    event={event}
    />
    </>
  );
}

export default Page;
