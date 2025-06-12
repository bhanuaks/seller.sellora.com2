"use client";
import { baseUrl } from "@/Http/helper";
import Link from "next/link";
import React, { useState } from "react";
import RightSideBar from "../RightSideBar";

const RaiseTicket = () => {
  const [activeTab, setActiveTab] = useState("email");

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="sellora_045948">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="raise-a-ticket">
              <h2>
                <Link href={`${baseUrl}dashboard/help`}> Help </Link> / <span>Raise a Ticket</span>
              </h2>
              <h3 style={{ margin: 0, padding: 0 }}>Fill out the form below</h3>
              <p style={{ margin: 0, padding: 0 }}>
                And help us understand how we can support you.
              </p>
              <div className="form-container">
                <form>
                  <label htmlFor="category" className="backgrund_with_position">
                    Issue Categories <span style={{ color: "red" }}>*</span>
                  </label>
                  <select id="category" required>
                    <option>Orders &amp; Delivery</option>
                    <option>Returns</option>
                    <option>Listing &amp; Catalog</option>
                    <option>Payments</option>
                    <option>Advertisements</option>
                    <option>Promotions</option>
                    <option>Seller Perfomance</option>
                    <option>Account</option>
                  </select>

                  <label htmlFor="subject" className="backgrund_with_position">
                    Subject <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Label is not getting generated for my order(s)"
                    required
                  />

                  <label htmlFor="description">
                    Provide with the description of issue{" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <textarea id="description" required defaultValue="" />

                  <label>Attach Error File or screenshot</label>
                  <div className="upload-box">
                    <input type="file" style={{ display: "none" }} id="fileUpload" />
                    <div style={{ marginBottom: 10 }}>
                      <img src={`${baseUrl}front/assets/images/up_arrow.png`} alt="upload" />
                    </div>
                    <label
                      htmlFor="fileUpload"
                      style={{ color: "#ff5722", fontWeight: 600 }}
                    >
                      Upload
                    </label>
                  </div>

                  <label>Contact Method</label>
                  <div className="tabs">
                    <div
                      className={`tab ${activeTab === "email" ? "active" : ""}`}
                      onClick={() => switchTab("email")}
                    >
                      {/* <img src={`${baseUrl}front/assets/images/email.png`} alt="email" /> */}
                      <i className="far fa-envelope"></i>
                        &nbsp;Email
                    </div>
                    <div
                      className={`tab ${activeTab === "callback" ? "active" : ""}`}
                      onClick={() => switchTab("callback")}
                    >
                      {/* <img src={`${baseUrl}front/assets/images/phone.png`} alt="callback" />  */}
                      
                      <i className="far fa-phone"></i>
                     &nbsp; Call Back Request
                    </div>
                  </div>

                  {activeTab === "email" && (
                    <div id="email" className="contact-section active">
                      <label>Your Email</label>
                      <input type="email" placeholder="abc@gmail.com" required />
                      <label>
                        Your Number (Optional, if you would like a callback)
                      </label>
                      <div className="row">
                        <div className="col-lg-5">
                          <input type="text" placeholder="(xxx)xxx-xxxx" />
                        </div>
                        <div className="col-lg-2">
                          <input type="text" placeholder="Ext." />
                        </div>
                        <div className="col-lg-5">
                          <select>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>UK</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "callback" && (
                    <div id="callback" className="contact-section active">
                      <label>
                        Your Number <span style={{ color: "red" }}>*</span>
                      </label>
                      <div className="row">
                        <div className="col-lg-5">
                          <input type="text" placeholder="(xxx)xxx-xxxx" required />
                        </div>
                        <div className="col-lg-2">
                          <input type="text" placeholder="Ext." />
                        </div>
                        <div className="col-lg-5">
                          <select>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>UK</option>
                          </select>
                        </div>
                      </div>
                      <label>Your Email</label>
                      <input type="email" placeholder="abc@gmail.com" />
                    </div>
                  )}

                  <div className="button-group2">
                    <button type="submit" className="botton_435">
                      Submit
                    </button>
                    <button
                      type="reset"
                      className="botton_435"
                      style={{
                        border: "1px solid #ff5722",
                        color: "#ff5722",
                        background: "#fff",
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

           <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default RaiseTicket;
