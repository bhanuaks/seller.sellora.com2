"use client"
import TableskeltonLoader from '@/app/skeleton_loader/TableskeltonLoader'
import { exportToDataInExel } from '@/Http/ExcelHelper'
import { baseUrl, getPricingLabel, rand } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

function Page() {
  
  const [openModal, setOpenModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [isProcess, setIsProcess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(null);
  const [reloadData, setReloadData] = useState(0);
  const [showTrans, setShowTrans] = useState("Payment");

  const pathname = usePathname();
  const [wallet, setWallet] =  useState({
    seller_id:"",
    totalBalance:0,
    adsBalance:0,
    accruingCharge:0,
    adsBilledAmount:0
  });
  const [walletHistory, setWalletHistory] = useState([]);


  const [addAmount, setAddAmount]= useState({
    amount:"",
    paymentMethod:"Credit/Debit Cards"
  });

  function hendleInput(e){
    const {name, value} = e.target;

    if(name == "amount"){
      const numericValue = value.replace(/[^0-9]/g, ""); 
      setAddAmount((prevData)=>({
        ...prevData,
        [name]:numericValue
      })) 
      setErrors((preErr)=>({...preErr, [name]:!numericValue?"Please enter valid amount.":""}))
      return
    } 

    setAddAmount((prevData)=>({
        ...prevData,
        [name]:value
      }))


  }


  // submit add balance 
  function submitAddBalance(e){
    e.preventDefault(); 

    setIsProcess(true)  
      fetch(`/api/seller/wallet/add-wallet-balance`, {
            method:"POST",
            headers:{
              type: "application/json"
            },
            body:JSON.stringify(addAmount)
          }).then((response)=>{
            if(!response.ok){
              setIsProcess(false) 
               throw new Error("Failed to add balance");
            }
             return response.json() 
          }).then((resData)=>{
            setIsProcess(false) 
            if(resData.status){
              setReloadData(rand(1111,9999))
              setOpenModal(false)
              setAddAmount({
                    amount:"",
                    paymentMethod:"Credit/Debit Cards"
                  })
              Swal.fire({
                icon:"success",
                title:"Success",
                text:resData?.data?.message || "Success", 
              })
            }else if(resData.data.status_code == 400){
              setErrors(resData.data.errors)
            }else{
              
              Swal.fire({
                icon:"error",
                title:"Error",
                text:resData?.data?.message || "Failed", 
              })
            }
          })   
  }




  useEffect(()=>{
    setIsLoading(true)
    fetch('/api/seller/wallet/wallet-info')
    .then((response)=>{
      if(!response.ok){
        setIsLoading(false)
        throw new Error("Network Errors")
      }
      return response.json();
    }).then((res)=>{
      setIsLoading(false) 
      if(res.status){
        if(res.data.wallet){ 
          setWallet(res.data.wallet)
        }
        if(res.data.walletHistoty){ 
          setWalletHistory(res.data.walletHistoty)
        }
      }
 
    })
  },[pathname, reloadData])


  // download Receipt

  const downloadReceipt = async (e, _id) => {
    e.preventDefault();
    setIsDownloading(_id)
    const res = await fetch("/api/seller/wallet/download-receipt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id }),
      });

      if (!res.ok) return alert("Failed to download PDF.");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `receipt-${Date.now()}.pdf`;
      a.click();
      setIsDownloading(null)
      window.URL.revokeObjectURL(url);
};


function ExportTransaction(e){
  e.preventDefault();
     const formattedData = walletHistory.map(item => ({
      'Transaction Id': item.transactionId,
      'Receipt Id': item.receiptId,
      'Amount': item.amount,
      'Transaction Type': item.transactionType,
      'Payment Method': item.paymentMethod,
      // 'Remarks': item.remarks,
      "Date": new Date(item.createdAt).toLocaleDateString("es-Us", {
        year:"numeric",
        month:"short",
        day:"numeric"
      }),
    }));
  exportToDataInExel(formattedData)
}



  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12 hub1">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <Link href={`${baseUrl}dashboard`}>
              <i className="fa-solid fa-arrow-left" /> Go to Seller hub
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-6">
          <div className="navigator-breadcrumb-wrapper text-center">
            <h3>Wallet Summary</h3>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-6">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <ul>
              <li>
                <Link href={`${baseUrl}dashboard/advertising/payment-wallet-summary`}>
                  <i className="fa-solid fa-wallet" /> Wallet
                </Link>{" "}
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="details_page_outer">
    <div className="mt-5">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-12 text-center">
                  <a href="#" className="campaign-btn">Create Campaign</a>
              </div> */}
          <div className="col-12">
            <div className="manager walletS">
              <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 align-items-center">
                <div className="col">
                  <div className="manager_boxs">
                    <h5>Ads Wallet Balance</h5>
                    <h6>{isLoading?"...":getPricingLabel(wallet?.adsBalance|| 0)}</h6>
                  </div>
                </div>
                <div className="col">
                  <div className="manager_boxs">
                    <h5>Accruing charges</h5>
                    <h6>{isLoading?"...":getPricingLabel(wallet?.accruingCharge|| 0)}</h6>
                  </div>
                </div>
                <div className="col">
                  <div className="manager_boxs">
                    <h5>Ads Billed Amount</h5>
                    <h6>{isLoading?"...":getPricingLabel(wallet?.adsBilledAmount|| 0)}</h6>
                  </div>
                </div>
                <div className="col">
                  <div className="manager_boxs">
                    <h5>Total balance</h5>
                    <h6>{isLoading?"...":getPricingLabel(wallet?.totalBalance|| 0)}</h6>
                  </div>
                </div>
                <div className="col">
                  <a
                    href="#"
                    className="campaign-btn mb-1" 
                   onClick={()=>setOpenModal(true)}
                  >
                    Add Money
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt--30 campaigns-table transaction">
      <div className="row pt-5">
        <div className="col-lg-6 col-12">
          <div className="row align-items-center">
            <div className="col-md-3 col-12">
              <h5>All Transactions</h5>
            </div>
            {/* <div className="col-md-6 col-12">
              <div className="searchCam position-relative">
                <form role="search" className="sr-input-func col-lg-auto">
                  <a href="#">
                    <i className="fa fa-search" />
                  </a>
                  <input
                    type="text"
                    placeholder="Search Campaign "
                    className="search-int form-control"
                  />
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div>
        <div className="table-responsive wall1">
          <table
            className="table table-bordered table-striped"
            style={{ marginTop: 20 }}
          >
            <thead className="table__head">
              <tr className="winner__table position-relative export">
                <th colSpan={12}>
                  <div className="table_menu">
                    <ul>
                      <li>
                        <Link href={`${baseUrl}dashboard/advertising/ads-bills-wallet-summary`}
                        className={`${showTrans=="Bills"?"active":""}`}

                         onClick={(e)=>{
                          e.preventDefault()
                          setShowTrans("Bills")
                        }}
                        >Ads Bills</Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/advertising/payment-wallet-summary`} className={`${showTrans=="Payment"?"active":""}`}
                        onClick={(e)=>{
                          e.preventDefault()
                          setShowTrans("Payment")
                        }}>
                          Payment{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <span>
                    <a href="#" className="campaign-btn mb-0" onClick={(e)=>ExportTransaction(e)}>
                      Export All
                    </a>
                  </span>
                </th>
              </tr>
              
              {showTrans=="Payment" && ( 
                <tr className="winner__table">
                  <th>Date Paid</th>
                  <th>Type </th>
                  <th>Deposit Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr> 
              )}

               {showTrans=="Bills" && ( 
               <tr className="winner__table">
                <th>Invoice Number</th>
                <th>Issued date </th>
                <th>Payment Date</th>
                <th>Country</th>
                <th>Invoice Status</th>
                <th>Payment Method</th>
                <th>Total Amount Billed</th>
                <th>Action</th>
              </tr>
              )}
             
            </thead>
            <tbody>
              
              {isLoading && (
                <TableskeltonLoader  totalRows={3} totalColumns={5} />
              )}
              {showTrans =="Payment" && walletHistory && walletHistory.length > 0 ?
              walletHistory.map((item, index)=>(
                 <tr className="winner__table"  key={index}>
                    <td className="text-center">
                      {new Date(item.createdAt).toLocaleDateString("en-Us", {
                        year:"numeric",
                        month:"short",
                        day: "numeric"
                      })} 
                      </td>
                    <td className="text-center small-size">{item?.transactionType}</td>
                    <td className="text-center small-size">{getPricingLabel(item.amount || 0)}</td>
                    <td className="text-center small-size">{item?.status}</td>
                    <td className="text-center small-size">
                      <a className="downpdf" href="file.pdf" onClick={(e)=>downloadReceipt(e, item._id)}  >
                        {isDownloading == item._id ?"Downloading..":"Download"}
                      </a>
                    </td>
                  </tr>
              )):""}

                {!isLoading && walletHistory.length == 0 && (
                  <tr>
                    <td colSpan={5}>
                      <div className='d-flex'>No Data Found!</div>
                    </td>
                  </tr>
                ) }

                {/* {showTrans=="Bills" && ( 
                <tr className="winner__table">
                  <td className="text-center">TR7VZZYQL-11</td>
                  <td className="text-center ">Dec 3, 2024</td>
                  <td className="text-center small-size">Dec 4, 2024</td>
                  <td className="text-center small-size">United States</td>
                  <td className="text-center small-size">Fully Paid</td>
                  <td className="text-center small-size">Seller Payable</td>
                  <td className="text-center small-size">$120.69</td>
                  <td className="text-center small-size">
                    <a className="downpdf" href="file.pdf" download="file.pdf">
                      Download
                    </a>
                  </td>
                </tr>
              )} */}
             
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  </div>

  
  {openModal && ( 
       

<div className="modal fade show d-block view_reasons" tabIndex={-1} role="dialog">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h2 className="modal-title text-center" id="exampleModalLabel">
          Add Money
        </h2>
        <button
          type="button"
          className="btn-close"
          onClick={()=>setOpenModal(false)}
        />
      </div>
      <div className="modal-body">
          <div className="money-box">
            <form action="#" onSubmit={(e) => submitAddBalance(e)}>
              <div className="row pb-5">
                <div className="col-lg-4 col-12">
                  <h4 className="mb-0">Enter Amount</h4>
                </div>
                <div className="col-lg-6 col-12">
                  <input
                    type="text"
                    className="amount"
                    name="amount"
                    placeholder="Enter Amount"
                    value={addAmount.amount || ""}
                    onChange={(e) => hendleInput(e)}
                  />
                  {errors.amount && (
                    <div className="error_message">{errors.amount}</div>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col-12 pt-3">
                  <div className="mb-3">
                    <input
                      id="cb1"
                      className="checkbox"
                      type="radio"
                      checked={addAmount.paymentMethod === "Credit/Debit Cards"}
                      name="paymentMethod"
                      value="Credit/Debit Cards"
                      onChange={(e) => hendleInput(e)}
                    />
                    <span>Credit/Debit Cards</span>
                  </div>
                  <div>
                    <input
                      id="cb2"
                      className="checkbox"
                      type="radio"
                      checked={addAmount.paymentMethod === "Net Banking"}
                      name="paymentMethod"
                      value="Net Banking"
                      onChange={(e) => hendleInput(e)}
                    />
                    <span>Net Banking</span>
                  </div>
                </div>

                <div className="col-12 pt-5 text-center">
                  <button type="submit" className="campaign-btn mb-1">
                    {isProcess ? "Please wait..." : "Proceed to Pay"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

      {/* <div className="modal-footer">
                  <button type="button" className="btn btn-primary">Proceed to Pay</button>
              </div> */}
    </div>
  </div>
</div>




    
  )}
  
  {openModal && <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>}



</>

  )
}

export default Page