"use client";
import HelpAndVideoTopSection from "@/app/seller/HelpAndVideoTop";
import { apiRequest } from "@/Http/apiHelper";
import {
  baseUrl,
  dateFormat,
  fetcher,
  main_thumb_img_path,
  variant_thumb_img_path1,
} from "@/Http/helper";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";

const Page = () => {
  const params = useParams();
  const searchStatus = params.status;
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;
  const size = searchParams.get("size") || 20;
    const [target, setTarget] = useState("")
  const [searchText, setSearchText] = useState("");
  const [searchBy, setSearchBy] = useState("OrderId");
  const [filterByDay, setFilterByDay] = useState("")
  const {
    data: responseData,
    error,
    isLoading,
  } = useSWR(
    `${baseUrl}api/seller/product/orders/cancel-request?status=${searchStatus}&page=${page}&pageSize=${size}&filterByDay=${filterByDay}&searchText=${searchText}&searchBy=${searchBy}`,
    fetcher
  );

  const cancelRequest = responseData?.data?.orders;
  const totalCoute = responseData?.data?.totalCoute;
  const pagination = responseData?.data?.pagination;

  

  function paginationFun(nextPage, listSize, e) {
    e.preventDefault(); 
    mutate(
      `${baseUrl}api/seller/product/orders/cancel-request?status=${searchStatus}&page=${nextPage}&pageSize=${listSize}&filterByDay=${filterByDay}&searchText=${searchText}&searchBy=${searchBy}`
    );
  }

  function changeListSize(e) {
    const { name, value } = e.target;
    mutate(
      `${baseUrl}api/seller/product/orders/cancel-request?status=${searchStatus}&page=${1}&pageSize=${value}&filterByDay=${filterByDay}&searchText=${searchText}&searchBy=${searchBy}`
    );
  }


    useEffect(() => {
        const timeoutId = setTimeout(() => {
           
          mutate(
            `${baseUrl}api/seller/product/orders/cancel-request?status=${searchStatus}&page=${1}&pageSize=${size}&filterByDay=${filterByDay}&searchText=${searchText}&searchBy=${searchBy}`
          );
        }, 300);
    
        return () => clearTimeout(timeoutId);
      }, [searchText, searchBy]);

      useEffect(()=>{
            setTarget("_blank")
      },[])
  return (
    <div>
      <div className="rts-navigation-area-breadcrumb pb--10">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="navigator-breadcrumb-wrapper">
                <h3>Returns</h3>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <HelpAndVideoTopSection />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className>
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="breadcome-heading pb--10">
                    <form role="search" className="sr-input-func">
                    <input
                        type="text"
                        placeholder="Search your product by Order Id , sku"
                        className="search-int form-control"
                        value={searchText}
                        onChange={(e)=>setSearchText(e.target.value)}
                      />
                      <a href="#">
                        <i className="fa fa-search" />
                      </a>
                    </form>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <select  onChange={(e)=>setSearchBy(e.target.value)} value={searchBy}>
                    <option value={"sku"}>SKU</option>
                    <option value={"OrderId"}>Order Id</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <div className="table-responsive">
            <table
              className="table table-bordered table-striped br-none"
              style={{ marginTop: "10px" }}
            >
              <thead className="table__head">
                <tr className="winner__table">
                  <th colSpan={15}>
                    <div className="row">
                      <div className="col-lg-4 col-5">
                        <div className="table_menu">
                          <ul>
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/returns/All`}
                                className={
                                  searchStatus == "All" ? "active" : ""
                                }
                              >
                                All Returns({totalCoute?.all || 0})
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/returns/Pending`}
                                className={
                                  searchStatus == "Pending" ? "active" : ""
                                }
                              >
                                Pending Returns({totalCoute?.pending || 0})
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`${baseUrl}dashboard/returns/Complete`}
                                className={
                                  searchStatus == "Complete" ? "active" : ""
                                }
                              >
                                Complete Returns({totalCoute?.complete || 0})
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-2 col-3">
                        <div className="listing22">
                          <select className onChange={(e)=>setFilterByDay(e.target.value)}
                          value={filterByDay} >
                            <option value={""}>Return Date Range</option>
                            <option value={"0"}>Exact date</option>
                            <option  value={"1"}>Last days</option>
                            <option  value={"3"} >Last 3 days</option>
                            <option  value={"14"}>last 14 days</option>
                            <option  value={"30"}>last 30 days</option>
                            <option  value={"50"}>last 50 days</option>
                            <option  value={"180"}>last 180 days</option>
                            <option  value={"365"}>last 365 days</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-4" />
                    </div>
                  </th>
                </tr>
                <tr className="winner__table">
                  <th width={50}>
                    <input type="checkbox" />
                  </th>
                  <th width={120}>Order Details</th>
                  <th width={150}>Return Quantity</th>
                  <th width={120} />
                  <th width={250} style={{ textAlign: "left" }}>
                    Product Detail
                  </th>
                  <th width={300} style={{ textAlign: "left" }}>
                    Return Details
                  </th>
                  <th width={180} style={{ textAlign: "left" }}>
                    Date
                  </th>
                  <th width={150}>Action</th>
                </tr>
              </thead>
              <tbody>
                {!isLoading && cancelRequest && cancelRequest.length === 0 && (
                  <tr>
                    <td colSpan="13" style={{ textAlign: "center" }}>
                      Data Not Found!
                    </td>
                  </tr>
                )}

                {cancelRequest &&
                  cancelRequest.length > 0 &&
                  cancelRequest.map((item, index) => (
                    <tr className="winner__table" key={index}>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td>
                        <div className="order_id_01">
                          <span>Order Id</span>
                          {item.order_id}
                        </div>
                        <div className="order_id_01">
                          <span>Purchase Order</span>
                          {item.sub_order_id}
                        </div>
                        <div className="order_id_01">
                          <span>Resolution</span>
                          StandardRefund
                        </div>
                      </td>
                      <td className="text-center">1</td>
                      <td>
                        {item?.variant?.withImage == "Yes" ? (
                          <Image
                            src={`${baseUrl}${variant_thumb_img_path1}${item?.variant?.image_1}`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="product Image"
                            loading="lazy"
                            style={{ width: "auto", height: "auto" }}
                          />
                        ) : (
                          <Image
                            src={`${baseUrl}${main_thumb_img_path}${item?.product?.main_image}`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="product Image"
                            loading="lazy"
                            style={{ width: "auto", height: "auto" }}
                          />
                        )}
                      </td>
                      <td>
                        <div className="product_details_content">
                          <p>{item?.product?.product_name}</p>
                          <ul>
                            <li>
                              <span>SKU:</span> {item.sku || item.variant?.sku}
                            </li>
                            <li>
                              <span>SIN:</span> {item.sin || item.variant?.sin}
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td className="text-center">
                        <table className="return_table">
                          <tbody>
                            <tr>
                              <td width={120}>Buyer Name:</td>
                              <td>{item.user?.full_name}</td>
                            </tr>
                            <tr>
                              <td>Return Reason:</td>
                              <td>
                                <b
                                  style={{
                                    color: "#fc7035",
                                    fontWeight: "500",
                                  }}
                                >
                                  {item.cancelByUser?.remarks}
                                </b>
                              </td>
                            </tr>
                            <tr>
                              <td>Buyer Feedback:</td>
                              <td>Dammy feedback</td>
                            </tr>
                            <tr>
                              
                              <td>Tracking ID:</td>
                              <td> {item.shippingInfo?.trakingDetails[0].trakingNumber}</td>
                            </tr>
                            <tr>
                              <td>Carrier Name:</td>
                              <td>{item.shippingInfo?.trakingDetails[0].shippingCarrier}</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                <b
                                  style={{
                                    color: "#fc7035",
                                    fontWeight: "500",
                                  }}
                                >
                                  More info{" "}
                                  <i
                                    className="fa fa-angle-down"
                                    aria-hidden="true"
                                  />
                                </b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td>
                        <div className="request_IDud9er">
                          <ul>
                            <li>
                              Request Date:{" "}
                              {dateFormat(item.cancelByUser?.createdAt)}
                            </li>
                            <li>Order Date: {dateFormat(item.createdAt)}</li>
                            {item.refundDetails && (
                              <li>
                                Approval Date:
                                {dateFormat(item.refundDetails?.createdAt)}
                              </li>
                            )}
                          </ul>
                        </div>
                      </td>
                      <td className="text-center">
                        {item.order_status !== 6 && ( 
                          <div className="issue-refund">
                            <a target={target} href={`${baseUrl}dashboard/returns/refund-order/${item._id}`}>Issue Refund</a>
                          </div>
                        )}
                         {item.order_status == 6 && ( 
                            <div className="complete_refund">
                              <Link href="#">Complete Refund</Link>
                            </div>
                            )}
                       
                        <div className="contact_to_buyer">
                          <Link href="#">Contact to Buyer</Link>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="fixed-table-pagination">
            <div className="row">
              <div className="col-lg-8"> </div>
              <div className="col-lg-4">
                <div className="pull-right pagination d-flex">
                  <div className="result">
                    <select
                      name="size"
                      value={pagination ? pagination.pageSize : 10}
                      onChange={(e) => changeListSize(e)}
                    >
                      <option value={20}>20 results per page</option>
                      <option value={10}>10 results per page</option>
                    </select>
                  </div>

                  {pagination && pagination.totalPages > 1 ? (
                    <ul className="pagination">
                      <li
                        className={`page-pre ${
                          pagination.page <= 1
                            ? "pointer-events-none opacity-50"
                            : ""
                        }`}
                      >
                        <Link
                          href="#"
                          onClick={(e) => {
                            if (pagination.page > 1) {
                              paginationFun(
                                pagination.page - 1,
                                pagination.pageSize,
                                e
                              );
                            }
                          }}
                        >
                          <i className="fa-solid fa-arrow-left" />
                        </Link>
                      </li>

                      {Array.from({ length: pagination.totalPages }, (_, i) => {
                        if (Math.abs(pagination.page - (i + 1)) <= 3) {
                          return (
                            <li
                              className={`page-number current  ${i} ${
                                pagination.page == i + 1 ? "active" : ""
                              }`}
                              key={i}
                            >
                              <a
                                href="#"
                                onClick={(e) =>
                                  paginationFun(i + 1, pagination.pageSize, e)
                                }
                              >
                                {i + 1}
                              </a>
                            </li>
                          );
                        }
                        return null;
                      })}

                      <li
                        className={`page-next ${
                          pagination.page == pagination.totalPages
                            ? "pointer-events-none opacity-50"
                            : ""
                        }`}
                      >
                        <Link
                          href="#"
                          onClick={(e) =>
                            paginationFun(
                              parseInt(pagination.page) + 1,
                              pagination.pageSize,
                              e
                            )
                          }
                        >
                          <i className="fa-solid fa-arrow-right" />
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                  {/* <ul className="pagination">
                <li className="page-pre"><a href="#"><i className="fa-solid fa-arrow-left" /></a></li>
                <li className="page-number"><a href="#">1</a></li>
                <li className="page-number"><a href="#">2</a></li>
                <li className="page-number"><a href="#">3</a></li>
                <li className="page-next"><a href="#"><i className="fa-solid fa-arrow-right" /></a></li>
              </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
