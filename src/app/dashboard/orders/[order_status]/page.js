"use client";
import HelpAndVideoTopSection from "@/app/seller/HelpAndVideoTop";
import { apiRequest } from "@/Http/apiHelper";
import { formatDateTime } from "@/Http/dateHelper";
import { baseUrl, getPrecentageAmount, getPricingLabel, main_thumb_img_path, variant_thumb_img_path1 } from "@/Http/helper";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";


const page = () => {
  const params = useParams();
  const searchStatus = params.order_status;
  const [orderList, setOrderList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchBy, setSearchBy] = useState("OrderId");
   const [pagination, setPagination] = useState(null)
  
  const [totalData, setTotalData] = useState({
    totalAllOrder: 0,
    totalCanceledOrder: 0,
    totalShippedOrder: 0,
    totalUnshippedOrder: 0
  });
  const [loading, setLoading] = useState(false);
  async function getOrders(page=1, size=10) {
    setLoading(true)
    const data = await apiRequest(`${baseUrl}api/seller/product/orders?status=${searchStatus}&page=${page}&pageSize=${size}&searchText=${searchText}&searchBy=${searchBy}`);
    setLoading(false)
    if (data.status) {
      setOrderList(data.data.orders);
      setTotalData(data.data.totalData);
      setPagination(data.data.pagination);
      
    }
  }

  useEffect(() => {
    getOrders();
  }, [searchStatus]);


    function paginationFun(page, size, e){
      e.preventDefault();
      getOrders(page, size);
    }
    function changeListSize(e){
      const { name, value } = e.target
      getOrders(pagination.pageSize, parseInt(value));  
    }

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        getOrders(1, pagination?.pageSize);
      }, 300);
  
      return () => clearTimeout(timeoutId);
    }, [searchText, searchBy]);

    
    function changeOrderStaus(e, _id){
      const { name, value } = e.target
      if(value == "Confirm"){
        window.open(`${baseUrl}/dashboard/orders/details/${_id}`, "_blank");
      }else if(value === "Cancel" || value == "Refund"){
        window.open(`${baseUrl}dashboard/returns/refund-order/${_id}`, "_blank");
      }
    }
  return (
    <div>

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



      <div className="rts-navigation-area-breadcrumb pb--10">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="navigator-breadcrumb-wrapper">
                <h3>Orders</h3>
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
              style={{ "marginTop": "10px" }}
            >
              <thead className="table__head">
                <tr className="winner__table">
                  <th colSpan={15}>
                    <div className="table_menu">
                      <ul>
                        <li>
                          <Link href={`${baseUrl}dashboard/orders/Unshipped`} className={searchStatus=="Unshipped"?"active":""} >
                            Unshipped Order ({totalData?.totalUnshippedOrder})
                          </Link>
                        </li>
                        <li>
                          <Link href={`${baseUrl}dashboard/orders/Shipped`} className={searchStatus=="Shipped"?"active":""} >Shipped Order ({totalData?.totalShippedOrder})</Link>
                        </li>
                        <li>
                          <Link href={`${baseUrl}dashboard/orders/Canceled`} className={searchStatus=="Canceled"?"active":""} >Canceled ({totalData?.totalCanceledOrder})</Link>
                        </li>
                        <li>
                          <Link href={`${baseUrl}dashboard/orders/All`} className={searchStatus=="All"?"active":""} >All Order ({totalData?.totalAllOrder})</Link>
                        </li>
                      </ul>
                    </div>
                  </th>
                </tr>
                <tr className="winner__table">
                  <th colSpan={15}>
                    <table className="table_filter">
                      <tbody>
                        <tr>
                          <td style={{ border: "none !important" }}>
                            <div className="d-flex">
                              <div className="fillter">
                                <a href="#">
                                  <i className="fa-solid fa-filter" />
                                </a>
                              </div>
                              <div className="dropdown demo_drop">
                                <button
                                  className="btn dropdown-toggle menu_button"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                > 
                                  Status
                                </button>
                              </div>
                              <div className="dropdown demo_drop">
                                <button
                                  className="btn dropdown-toggle menu_button"
                                  type="button"
                                  id="dropdownMenuButton1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Ship by
                                </button>
                              </div>
                              <div className="dropdown demo_drop">
                                <button
                                  className="btn dropdown-toggle menu_button"
                                  type="button"
                                  id="dropdownMenuButton1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                > 
                                  Order date
                                </button>
                              </div>
                              <div className="dropdown demo_drop">
                                <button
                                  className="btn dropdown-toggle menu_button"
                                  type="button"
                                  id="dropdownMenuButton1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Condition
                                </button>
                              </div>
                              <div className="menu_tab">
                                <ul>
                                  <li className="apply_button">
                                    <a href="#">Apply</a>
                                  </li>
                                  <li className="apply_button">
                                    <a href="#">Reset</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                          <td style={{ border: "none !important" }} />
                        </tr>
                      </tbody>
                    </table>
                  </th>
                </tr>
                <tr className="winner__table">
                  <th width={50}>
                    <input type="checkbox" />
                  </th>
                  <th width={120}>Order Date</th>
                  <th width={150}>Order ID/PO </th>
                  <th width={180} />
                  <th width={400}>Product Detail</th>
                  <th width={180}>Customer Name</th>
                  <th width={180}>Shipping type </th>
                  <th width={180}>Ship by</th>
                  <th width={180}>Fulfilled by</th>
                  <th width={180}>Total order</th>
                  <th width={180}>Qty</th>
                  <th>Status</th>
                  <th width={180}>Action</th>
                </tr>
              </thead>
              <tbody>
              {!loading && orderList.length === 0 && (
                  <tr>
                    <td colSpan="13" style={{ textAlign: "center" }}>Order Not Found!</td>
                  </tr>
                )}
                {orderList && orderList.length > 0 && 
                orderList.map((order, index)=>(
                  <tr className="winner__table" key={index}>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td>
                  {formatDateTime(order.createdAt)} 
                  </td>
                  <td>
                    <div className="order_id_01">
                      <span>Order Id</span>
                      {order.order_id}
                    </div>
                    <div className="order_id_01">
                      <span>Purchase Order</span>
                      {order.sub_order_id}
                    </div>
                  </td>
                  <td>
                    {order?.variant?.withImage == "Yes" ? (
                      <Image src={`${baseUrl}${variant_thumb_img_path1}${order?.variant?.image_1}`} 
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="product Image"
                      loading="lazy" 
                      style={{width:"auto", height:"auto"}}/> 
                    ):(
                      <Image src={`${baseUrl}${main_thumb_img_path}${order?.product?.main_image}`} 
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="product Image"
                      loading="lazy"
                      style={{width:"auto", height:"auto"}}/> 

                    )}
                  </td>
                  <td>
                    <div className="product_details_content">
                      <p>
                       {order.product_name}
                      </p>
                      <ul>
                      {(order.sku || order.variant?.sku) && (
                        <li>
                          <span>SKU:</span>{order.sku || order.variant?.sku}
                        </li>
                      )}
                        
                        {( order.sin || order.variant?.sin ) && (
                        <li>
                          <span>SIN:</span> {order.sin || order.variant?.sin}
                        </li>
                         )}
                      </ul>
                    </div>
                  </td>
                  <td className="text-center">{order.user?.full_name}</td>
                  <td className="text-center">
                    {/* Standard */}
                    </td>
                  <td className="text-center">
                    {/* 12/04/2024 */}
                    </td>
                  <td className="text-center">Seller</td>
                  <td className="text-center">{getPricingLabel(order.price*order.quantity)}</td>
                  <td className="text-center">{order.quantity}</td>
                  <td className="text-center">
                    <div className="unshipped">
                      <a href="#">
                        
                        {(() => {
                          switch (order?.order_status) {
                            // case 0:
                            //   return "Unshipped";
                            case 1:
                              return "Unshipped";
                            case 2:
                              return "Shipped";
                            case 3:
                              return "Out of delivery";
                            case 4:
                              return "Deliverd";
                            case 5:
                              return "Canceled";
                            case 7:
                                return "Canceled";
                            case 6:
                                return "Refund";
                            default:
                              return "Unknown Status";
                          }
                        })()}
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="listing22" style={{minWidth:"100px"}}>
                      <select onChange={(e)=>changeOrderStaus(e, order._id)}>
                        <option  value={""}>Select</option>
                        {order?.order_status == 0 || order?.order_status == 1 ?( 
                            <option  value={"Confirm"}>Confirm Order</option>
                        ):null}
                         {order?.order_status !== 5 && order?.order_status !== 7 && order?.order_status !== 6 ?( 
                              <option  value={"Cancel"} >Cancel Order</option>
                        ):null}
                        <option  value={"Print"} >Print Packing Slip</option>
                        { order?.order_status === 7 ?( 
                          <option value={"Refund"} >Refund</option>
                        ):null}
                      </select>
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
                  <select   name="size" 
                value={pagination?pagination.pageSize:10}
                onChange={(e)=>changeListSize(e)}>
                  <option value={20}>20 results per page</option>
                  <option value={10}>10 results per page</option>
                </select>
                  </div>

                   {pagination && pagination.totalPages>1 ?(
                                    <ul className="pagination">
                                    <li className={`page-pre ${pagination.page <= 1? "pointer-events-none opacity-50":""}`}>
                                      <Link href="#" onClick={(e)=>{
                                        if(pagination.page > 1){ 
                                          paginationFun((pagination.page-1),  pagination.pageSize, e)
                                        } 
                                      }
                                        }>
                                        <i className="fa-solid fa-arrow-left" />
                                      </Link>
                                    </li>
                                 
                  
                              {Array.from({length:pagination.totalPages}, (_, i)=>{
                                  if (Math.abs(pagination.page - (i + 1)) <= 3) {
                                    return ( 
                                      <li className={`page-number current  ${i} ${pagination.page== (i+1)?'active':''}`} key={i} >
                                          <a   href="#"  onClick={(e)=>paginationFun((i+1),  pagination.pageSize, e)}>
                                            {i + 1} 
                                          </a>
                                      </li> 
                                    );
                                  } 
                                  return null; 
                                 })} 
                                    
                                    <li className={`page-next ${pagination.page == pagination.totalPages? "pointer-events-none opacity-50":""}`}>
                                      <Link href="#" onClick={(e)=>paginationFun((parseInt(pagination.page)+1), pagination.pageSize,e)}>
                                        <i className="fa-solid fa-arrow-right" />
                                      </Link>
                                    </li>
                                    </ul>
                                ):null}


                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
