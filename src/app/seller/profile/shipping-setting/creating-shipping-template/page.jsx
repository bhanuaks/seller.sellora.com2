"use client";
import React, { useContext, useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { AppContext } from "@/app/contaxtData/contextData";
import $ from "jquery";
import { baseUrl } from "@/Http/helper";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import HelpAndVideoTopSection from "@/app/seller/HelpAndVideoTop";
import RightNav from "../../component/RightNav";

function Page() {
  const { globalData, setGlobalData } = useContext(AppContext);

  const countryRef = useRef();
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [sellor, setSellor] = useState(null);
  const phoneInputRef = useRef(null);
  const [shippingTemplete, setShippingTemplete] = useState({
    seller_id: "",
    shipping_content: "",
    shipping_rate_model: "price", // weight
    shipping_type: "Standard",
    address_type: "STREET",
    transit_time: "",
    rate: "",
    shipping_n_handling_charge: "",
    charge_type: "percentage",
    charge_amount: "",
  });

  useEffect(() => {
    if (globalData.sellor) {
      // $(".loaderouter").css("display", "flex");
      fetch(
        `${baseUrl}api/seller/get-profile?user_id=${globalData.sellor._id}&with_data=standerdShippingTemplete`,
        {
          method: "GET",
        }
      )
        .then((response) => {
          if (!response.ok) {
            $(".loaderouter").css("display", "none");
            throw new Error("Network Error");
          }
          return response.json();
        })
        .then((res) => {
          $(".loaderouter").css("display", "none");
          if (res.status) {
            // check complete step
            if (
              !res.data.data.complete_step ||
              res.data.data.complete_step < 2
            ) {
              router.push("/seller/al/contact-details");
            }
            setSellor(res.data.data);
            if (res.data.referData) {
              setShippingTemplete(res.data.referData);
            }
            setShippingTemplete((preData) => ({
              ...preData,
              seller_id: res.data.data._id,
            }));
          }
        });
    }
  }, [globalData.sellor]);

  const updateInputData = (e) => {
    const { name, value } = e.target;
    setShippingTemplete((preData) => ({
      ...preData,
      [name]: value,
    }));
    if (name == "shipping_rate_model") {
      if (value == "price") {
        setShippingTemplete((preData) => ({
          ...preData,
          charge_type: "percentage",
        }));
      } else {
        setShippingTemplete((preData) => ({
          ...preData,
          charge_type: "Pound",
        }));
      }
    }
    console.log(shippingTemplete);
  };

  function submitUpdateForm(e) {
    e.preventDefault();
    setErrors({});

    // $(".loaderouter").css("display", "flex");
    fetch(`${baseUrl}api/seller/create-shipping-templete`, {
      method: "POST",
      body: JSON.stringify(shippingTemplete),
    })
      .then((response) => {
        if (!response.ok) {
          $(".loaderouter").css("display", "none");
          throw new Error("Network Error");
        }
        return response.json();
      })
      .then((res) => {
        $(".loaderouter").css("display", "none");
        if (res.status) {
          toast.success("Success! Pickup Address Saved.");
          router.push("/seller/profile/shipping-setting/expertise");
        } else if (res.data.status_code == 403) {
          setErrors(res.data.errors);
        }
      });
  }

  return (
    <div className="bg33">
      <ToastContainer
        position="top-center"
        autoClose={3000} // Toast disappears after 3 seconds
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

<div className="notification_breadcomb_rts-navigation-area-breadcrumb">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="notification_breadcomb">
            <ul>
              <li>
                <a href="#">Dashboard</a>{" "}
              </li>
              <li>
                <a href="#" className="active_002">
                 Shipping Setting
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

       
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div>
              <div className="form_outer">
                <div className="seller_edit_information">
                <form action="#" onSubmit={(e)=>submitUpdateForm(e)}> 
                  <div className="row">
                    <div className="col-lg-12">
                      <h2>Shipping Setting </h2>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_s2">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="nnn_dform">
                              <div className="contnet_d">
                                <p>Creating Shipping Template </p>
                                <div className="row">
                                  <div className="col-lg-3">
                                    Shipping Rate Model:
                                  </div>
                                  <div className="col-lg-9">
                                    <div className="business-type">
                                      <label>
                                      <input
                                          type="radio"
                                          name="shipping_rate_model"
                                          value="weight"
                                          checked={shippingTemplete.shipping_rate_model == "weight"}
                                          onChange={(e)=>updateInputData(e)}
                                        />
                                        The weight of the total order
                                      </label>
                                      <label>
                                      <input
                                          type="radio"
                                          name="shipping_rate_model"
                                          value="price"
                                          checked={shippingTemplete.shipping_rate_model == "price"}
                                          onChange={(e)=>updateInputData(e)}
                                        />
                                        The price of the total order (tiers)
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <p>Shipping Methods and Regions</p>
                              </div>
                              <div className="table-responsive">
                                <table
                                  className="table table-bordered table-striped sellor_dashboard"
                                  style={{ marginTop: 20 }}
                                >
                                  <thead className="table__head">
                                    <tr className="winner__table">
                                      <td colSpan={5}>
                                        <div className="table_menu">
                                          <ul className="expanded">
                                            <li>
                                              <Link
                                                href={`${baseUrl}seller/profile/shipping-setting/creating-shipping-template`}
                                                className="active"
                                              >
                                                Standard
                                              </Link>
                                            </li>
                                            <li className="active current">
                                              <Link
                                                href={`${baseUrl}seller/profile/shipping-setting/expertise`}
                                              >
                                                Expedited
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td
                                        colSpan={5}
                                        style={{ padding: "0px !important" }}
                                      >
                                        <table className="child_table">
                                          <tbody>
                                            <tr>
                                              <th width={210}>
                                                <div className="region">
                                                  <a href="#">Region keep</a>
                                                  <span>Edit Regions</span>
                                                </div>
                                              </th>
                                              <th width={150}>ADDRESS TYPE</th>
                                              <th width={150}>TRANSIT TIME</th>
                                              <th width={250}>SET RATE</th>
                                              <th width={60}>&nbsp;</th>
                                            </tr>
                                            <tr>
                                              <td>
                                                Pennsylvania, Connecticut,
                                                Massachusetts, Rhode Island,
                                                Maine, New Hampshire, New York,
                                                New Jersey, Vermont, South
                                                Dakota, Minnesota, Missouri,
                                                Wisconsin, Illinois, Indiana,
                                                North Dakota, Nebraska, Iowa,
                                                Kansas, Ohio, Michigan,
                                                Delaware, Texas,
                                              </td>
                                              <td className="text-center">
                                                STREET
                                              </td>
                                              <td>
                                              <select className="" 
                                                name='transit_time' 
                                                value={shippingTemplete.transit_time || ""}
                                                onChange={(e)=>updateInputData(e)}>
                                                  <option value={""}>Select</option>
                                                  <option>2-5 Days</option>
                                                  <option>8 Days</option>
                                                </select>
                                              </td>
                                              <td>
                                                <div className="seat_rate">
                                                  <div className="row align-items-center">
                                                    <div className="col-lg-5">
                                                    <input type="text" placeholder="$" 
                                                      name='shipping_n_handling_charge'
                                                      value={shippingTemplete?.shipping_n_handling_charge || "" }
                                                      onChange={(e)=>updateInputData(e)}/>
                                                    </div>
                                                    <div className="col-lg-7">
                                                      Shipping &amp; Handling
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="seat_rate">
                                                  <div className="row align-items-center">
                                                    <div className="col-lg-5">
                                                    <input type="text" placeholder="$" 
                                        name='charge_amount'
                                        value={shippingTemplete?.charge_amount || ""}
                                        onChange={(e)=>updateInputData(e)} />
                                                    </div>
                                                    <div className="col-lg-7">
                                                    <select className="" 
                                         value={shippingTemplete?.charge_type || ""}
                                         name='charge_type' 
                                         onChange={(e)=>updateInputData(e)}>

                                          {shippingTemplete.shipping_rate_model=="price" ? ( 
                                          <option value={"percentage"}>Percentage</option>
                                          ):null }
                                           {shippingTemplete.shipping_rate_model=="weight" ? (

                                            <>
                                              <option value={"Pound"}>Per Pound</option>
                                              <option value={"Item"}>Per Item</option>
                                            </>

                                          ):null }
                                          
                                        </select>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>
                                              {/* <td className="text-center">
                                                <div className="di_span">
                                                  <span>
                                                    <a href="#">Edit</a>
                                                  </span>
                                                  <span>
                                                    <a
                                                      href="#"
                                                      className="trace"
                                                    >
                                                      <i className="far fa-trash" />
                                                    </a>
                                                  </span>
                                                </div>
                                              </td> */}
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={5}>
                                        <div className="send_request_for_call text-center">
                                          {/* <a href="#">Add Shipping Rule</a> */}
                                          <button href="#">Submit</button>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <RightNav />
        </div>
      </div>
    </div>
  );
}

export default Page;
