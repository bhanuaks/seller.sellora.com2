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
import HelpAndVideoTopSection from "../../HelpAndVideoTop";
import RightNav from "../component/RightNav";

function Page() {
  const { globalData, setGlobalData } = useContext(AppContext);

  const countryRef = useRef();
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [sellor, setSellor] = useState(null);
  const [shippingSetting, setShippingSetting] = useState({
    shipping_setting: 1,
    shipping_rate: 0,
  });

  useEffect(() => {
    if (globalData.sellor) {
      // $(".loaderouter").css("display", "flex");
      fetch(
        `${baseUrl}api/seller/get-profile?user_id=${globalData.sellor._id}&with_data=shippingSetting`,
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
              res.data.data.complete_step < 6
            ) {
              router.push("/seller/al/contact-details");
            }
            setSellor(res.data.data);
            if (res.data.referData) {
              setShippingSetting(res.data.referData);
            }
            setShippingSetting((preData) => ({
              ...preData,
              seller_id: res.data.data._id,
            }));
          }
        });
    }
  }, [globalData.sellor]);

  const updateInputData = (e) => {
    const { name, value } = e.target;

    setShippingSetting((previouseData) => ({
      ...previouseData,
      [name]: value,
    }));
  };

  function submitUpdateForm(e) {
    e.preventDefault();
    setErrors({});
    // $(".loaderouter").css("display", "flex");
    fetch(`${baseUrl}api/seller/update-profile?update=shippingSetting`, {
      method: "POST",
      body: JSON.stringify(shippingSetting),
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
          toast.success("Success! Business Details Saved.");
          if (shippingSetting.shipping_setting == 1) {
            router.push("/seller/profile/bank-account-information");
          } else {
            router.push(
              "/seller/profile/shipping-setting/creating-shipping-template"
            );
          }
        } else if (res.data.status_code == 403) {
          setErrors(res.data.errors);
        }
      });
  }

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
                  <form action={"#"} onSubmit={(e) => submitUpdateForm(e)}>
                    <div className="row">
                      <div className="col-lg-12">
                        <h2>Shipping Setting</h2>
                        {/* <span className="edit_span"><a href="#">Edit</a></span> */}
                      </div>
                      <div className="col-lg-10 offset-lg-1">
                        <div className="form_s2">
                          <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                              <div className="nnn_dform">
                                <div className="registration_form_single-input">
                                  <div className="list_Fsdf">
                                    <ul className="">
                                      <li className="current">
                                        <label>
                                          <input
                                            type="radio"
                                            name="shipping_setting"
                                            value="1"
                                            checked={
                                              shippingSetting.shipping_setting ==
                                              1
                                            }
                                            onChange={(e) => updateInputData(e)}
                                          />
                                          Set free shipping on all orders
                                        </label>
                                      </li>
                                      <li className="current active">
                                        <label>
                                          <input
                                            type="radio"
                                            name="shipping_setting"
                                            value="2"
                                            checked={
                                              shippingSetting.shipping_setting ==
                                              2
                                            }
                                            onChange={(e) => updateInputData(e)}
                                          />
                                          Set your own Shipping Rate
                                        </label>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-10 offset-lg-1">
                              <button className="save">
                                {shippingSetting.shipping_setting == 1
                                  ? "Set Free Shipping"
                                  : "Creating Shipping Template"}
                              </button>
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
