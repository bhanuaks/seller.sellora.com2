"use client";
import HelpAndVideoTopSection from "@/app/seller/HelpAndVideoTop";
import { apiRequest } from "@/Http/apiHelper";
import {
  baseUrl,
  dateFormat,
  fetcher,
  getBasePrice,
  main_thumb_img_path,
  variant_thumb_img_path1,
} from "@/Http/helper";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR, {mutate} from "swr";
import ShippingDetails from "./ShippingDetails";
import { ToastContainer, toast } from "react-toastify";


function Page() {
  const params = useParams();
  const order_Item_id = params.order_Item_id;
  const {
    data: orderData,
    error,
    isLoading,
  } = useSWR(
    `${baseUrl}api/seller/product/orders/single-product-details?order_Item_id=${order_Item_id}`,
    fetcher
  );

  const singleOrder = orderData?.data?.order;

  const [trakingInfo, setTrakingInfo] = useState([
    {
      trakingNumber: "",
      shippingCarrier: "USPS",
    },
  ]);

  const [apiLoader, setApiLoader] = useState(false)



  useEffect(()=>{
    if(singleOrder?.shippingInfo){
        setTrakingInfo(singleOrder?.shippingInfo?.trakingDetails)
    }
  },[singleOrder?.shippingInfo])

  function handleTrakingInput(e, index) {
    const { name, value } = e.target;

    setTrakingInfo((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    );
    console.log(trakingInfo);
  }

  function addMoreTraking(e) {
    e.preventDefault();

    setTrakingInfo((prevData) => [
      ...prevData,
      {
        trakingNumber: "",
        shippingCarrier: "USPS",
      },
    ]);
  }

  function removeTraking(e, index) {
    e.preventDefault();

    setTrakingInfo((prevData) => prevData.filter((_, i) => i !== index));
  }

  async function saveShipingData(e) {
    e.preventDefault();
    $(".loaderouter").css("display", "flex");
    setApiLoader(true)
    const response = await apiRequest(
      `${baseUrl}api/seller/product/orders/shipped`,
      "POST",
      { trakingInfo: trakingInfo, order_Item_id: order_Item_id }
    );
    setApiLoader(false)
    $(".loaderouter").css("display", "none");
    console.log(response);
    if (response.status) {
        mutate(`${baseUrl}api/seller/product/orders/single-product-details?order_Item_id=${order_Item_id}`);
        dismissModal();
        toast.success("Success")
    }else{
      toast.error(response.data)
    }
  }

  function dismissModal() {
    const modalElement = document.getElementById('add-bulk'); 
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
      modalInstance.hide();
    }
  }

  return (
    <>

      <div className="rts-navigation-area-breadcrumb pb--10">
      <ToastContainer
        position="bottom-right"
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

        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="order_id_confirm-order">
                <span>Order Id:</span> {singleOrder?.order_id}
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="tabriu_e">
                <ul>
                  <li>
                    <a href="#">Print Packing Slip</a>
                  </li>
                  <li>
                    <a href="#">Refund</a>
                  </li>
                  <li>
                    <a href="#">Cancel Order</a>
                  </li>
                </ul>
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
          <div className="col-lg-9">
            <div className="hed">Shipped</div>
            <div className="row">
              <div className="col-lg-6">
                <div className="oredr_detailssds">
                  <h3>Order details</h3>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <span>Order ID:</span> {singleOrder?.order_id}
                        </li>
                        <li>
                          <span>Ship method:</span> Standard
                        </li>
                        <li>
                          <span>Ordered:</span>
                          {dateFormat(singleOrder?.createdAt)}
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <span>Fulfilled by:</span>
                          {singleOrder?.product?.fulfillmentBy}
                        </li>
                        {singleOrder?.shippingInfo && (
                          <li>
                            <span>Ship by:</span>
                            {dateFormat(singleOrder?.shippingInfo?.createdAt)}
                          </li>
                        )}

                        {singleOrder?.deliveryInfo && (
                          <li>
                            <span>Deliver by:</span>
                            {dateFormat(singleOrder?.deliveryInfo?.createdAt)}
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="oredr_detailssds">
                  <h3>Customer details</h3>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <span>Name: </span> {singleOrder?.address?.first_name}
                          {singleOrder?.address?.last_name}
                        </li>
                        <li>
                          <span>Email:</span> {singleOrder?.address?.email}
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <span>Phone No:</span>
                          {singleOrder?.address?.phone_number}
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-12">
                      <ul>
                        <li>
                          <span>Shipping address:</span>
                          {singleOrder?.address?.company_name}
                          &nbsp; {singleOrder?.address?.address}
                          &nbsp; {singleOrder?.address?.city}
                          &nbsp; {singleOrder?.address?.state}
                          &nbsp; {singleOrder?.address?.country}
                          &nbsp; {singleOrder?.address?.zipcode}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered" style={{ marginTop: 10 }}>
                <thead className="table__head">
                  <tr className="winner__table">
                    <th style={{ minWidth: 100 }}>&nbsp;</th>
                    <th width={350}>Product Detail</th>
                    <th width={400}>Product Information</th>
                    <th width={180}>Quantity:</th>
                    <th width={180}>Price:</th>
                    <th width={280}>Sub Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="winner__table">
                    <td>
                      {singleOrder?.variant?.withImage == "Yes" ? (
                        <Image
                          src={`${baseUrl}${variant_thumb_img_path1}${singleOrder?.variant?.image_1}`}
                          alt=""
                          width={0}
                          height={0}
                          sizes="100vw"
                          loading="lazy"
                          style={{ width: "auto", height: "auto" }}
                        />
                      ) : (
                        <Image
                          src={`${baseUrl}${main_thumb_img_path}${singleOrder?.product?.main_image}`}
                          alt=""
                          width={0}
                          height={0}
                          sizes="100vw"
                          loading="lazy"
                          style={{ width: "auto", height: "auto" }}
                        />
                      )}
                    </td>
                    <td>
                      <div className="product_details_content">
                        <p>{singleOrder?.product_name}</p>
                        <ul>
                          {singleOrder?.sku && (
                            <li>
                              <span>SKU ID:</span> {singleOrder?.sku}
                            </li>
                          )}

                          {singleOrder?.sin && (
                            <li>
                              <span>SIN:</span> {singleOrder?.sin}
                            </li>
                          )}
                        </ul>
                      </div>
                    </td>
                    <td>
                      <div className="list_e4r893489">
                        <ul>
                          <li>
                            <span>Condition:</span> New
                          </li>
                          <li>
                            <span>Order ID:</span> {singleOrder?.order_id}
                          </li>
                          <li>
                            <span>Purchase order:</span>
                            {singleOrder?.sub_order_id}
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td className="text-center">{singleOrder?.quantity}</td>
                    <td className="text-center">
                      <span className="price2">
                        $
                        {singleOrder
                          ? getBasePrice(
                              singleOrder.price * singleOrder.quantity,
                              18
                            ).toFixed(2)
                          : 0}
                      </span>
                    </td>
                    <td>
                      <div className="list_e4r893489">
                        <ul>
                          <li>
                            <span>Sub Total:</span> $
                            {singleOrder
                              ? getBasePrice(
                                  singleOrder.price * singleOrder.quantity,
                                  18
                                ).toFixed(2)
                              : 0}
                          </li>
                          <li>
                            <span>Taxes:</span> $
                            {singleOrder
                              ? (
                                  singleOrder.price * singleOrder.quantity -
                                  getBasePrice(
                                    singleOrder.price * singleOrder.quantity,
                                    18
                                  )
                                ).toFixed(2)
                              : 0}
                          </li>
                          <li>
                            <span>Total:</span> $
                            {singleOrder
                              ? (
                                  singleOrder.price * singleOrder.quantity
                                ).toFixed(2)
                              : 0}
                          </li>
                        </ul>
                      </div>
                      {!singleOrder?.shippingInfo && (
                        <div className="text-center">
                          <a
                            href="#"
                            className="add-treaking"
                            data-bs-toggle="modal"
                            data-bs-target="#add-bulk"
                          >
                            Add Treaking
                          </a>
                        </div>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* shipping Details */}
            {singleOrder?.shippingInfo && ( 
                <ShippingDetails shippingInfo={singleOrder?.shippingInfo}  sellerAddress={singleOrder?.sellerAddress}/>
            )}
            {/* shipping Details */}
          </div>
          <div className="col-lg-3">
            <div className="seller-notes">
              <h3>
                Seller Notes
                <span>
                  <i className="fa fa-pencil" />
                </span>
              </h3>
            </div>
            <div className="notes_input">
              <input type="text" placeholder="No notes from customer" name="" />
            </div>
            <div className="right_fsdkj_sub">
              <div className="sale_sub">
                <ul>
                  <li>Sale Sub Total ({singleOrder?.quantity} item)</li>
                  <li>Payment methods: Standard</li>
                </ul>
              </div>
              <div className="serv_r4r">
                <ul>
                  <li>
                    <span>Subtotal:</span> $
                    {singleOrder
                      ? getBasePrice(
                          singleOrder.price * singleOrder.quantity,
                          18
                        ).toFixed(2)
                      : 0}
                  </li>
                  <li>
                    <span>Shipping fee:</span> $0.00
                  </li>
                  <li>
                    <span>Taxes:</span> $
                    {singleOrder
                      ? (
                          singleOrder.price * singleOrder.quantity -
                          getBasePrice(
                            singleOrder.price * singleOrder.quantity,
                            18
                          )
                        ).toFixed(2)
                      : 0}
                  </li>
                  <li>
                    <span>Total:</span> $
                    {singleOrder
                      ? (singleOrder.price * singleOrder.quantity).toFixed(2)
                      : 0}
                  </li>
                </ul>
              </div>
            </div>
            <div className="seller-notes contactfgdf">
              <h3>
                Contact to Buyer
                <span>
                  <i className="fa fa-pencil" />
                </span>
              </h3>
            </div>
            <div className="right_fsdkj_sub"></div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal modal-add-bulk-dicount-area-start fade"
        id="add-bulk"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1> Add Tracking</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="fonr_3423">
                {trakingInfo.length > 0 &&
                  trakingInfo.map((dataItem, index) => (
                    <div className="row" key={index}>
                      <div className="col-lg-5">
                        <label>Tracking number</label>
                        <input
                          type="text"
                          name="trakingNumber"
                          value={dataItem?.trakingNumber}
                          onChange={(e) => handleTrakingInput(e, index)}
                        />
                      </div>
                      <div className="col-lg-5">
                        <label>Shipping Carrier</label>
                        <select
                          name="shippingCarrier"
                          value={dataItem?.shippingCarrier}
                          onChange={(e) => handleTrakingInput(e, index)}
                        >
                          <option value="USPS">USPS</option>
                        </select>
                      </div>

                      <div className="col-lg-2">
                        {index != 0 && (
                          <>
                            <label>&nbsp;</label>
                            <br />
                            <Link
                              href={"#"}
                              onClick={(e) => removeTraking(e, index)}
                            >
                              {" "}
                              <i className="fa fa-trash" />
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
              {/* <div className="add_ano">
                <a href="#" onClick={(e) => addMoreTraking(e)}>
                  +Add Another Tracking Number
                </a>
              </div> */}
              <div className="col-lg-12">
                <div className="notification2">
                  <ul>
                    <li>Send notification email to customer</li>
                  </ul>
                </div>
              </div>
              <div className="cenrt2">
                <ul className="expanded">
                  <li>
                    <a href="#" onClick={()=>dismissModal()}>Cancel</a>
                  </li>
                  <li>
                    {apiLoader ? (
                    <Link href="#" >
                            Submiting...
                    </Link>
                    ):(
                        <Link href="#" onClick={(e) => saveShipingData(e)} >
                        Save
                        </Link>
                    )}
                   
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
