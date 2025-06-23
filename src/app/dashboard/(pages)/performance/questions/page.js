"use client"
import { apiRequest } from '@/Http/apiHelper'
import { baseUrl, dateFormat, fetcher, main_thumb_img_path, variant_thumb_img_path1 } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import useSWR, {mutate} from 'swr'
import { ToastContainer, toast } from 'react-toastify';


const Page = () => {
     const [openModal, setOpenModal] = useState(false);
     const [list, setList] = useState([]);
     const [currentPage, setCurrentPage] = useState(1);
     const [singleQuestion, setSingleQuestion] = useState(null);
     const [answer, setAnswer] = useState("");
     const [errors, setErrors] = useState({});
     const {data, error, isLoading } = useSWR(`${baseUrl}api/seller/question-answer?page=${currentPage}`, fetcher)
    const questionList = data?.data?.list;
    const pagination = data?.data?.pagination;
    
    function paginationFun(page, pageSize, e){
      e.preventDefault()
      setCurrentPage(page)
    }

    async function submmitAnswer(e){
      setErrors({})
      e.preventDefault();
      //  $('.loaderouter').css('display',"flex") 
      const response = await apiRequest(`${baseUrl}api/seller/question-answer`, "POST", {...singleQuestion, answer})
      // $('.loaderouter').css('display',"none") 
     if(response.status){
       mutate(`${baseUrl}api/seller/question-answer?page=${currentPage}`)
      setOpenModal(false);
      toast.success('Success! Thank you!')
     }else if(response.data && response.data?.status_code == 401){ 
      setErrors(response.data.errors)
     }
     
    }
    
  return (
    <>
    <div className="rts-navigation-area-breadcrumb pb--10">

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
                         <div className="loaderouter"><div className="loader"></div></div> 
                          {/* loader end */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
                <ul>
                  <li>
                    <a href="#"> 
                      <Image src={`${baseUrl}front/assets/images/hand_shaking.png`}
                    alt='influencer-marketing.jpg'
                    width={0}
                    height={0}
                    sizes='100vw' 
                    style={{width:"auto", height:"auto"}} 
                    /> 
                      Help
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="navigator-breadcrumb-wrapper text-center mb--20">
                <h3>Question and Answer</h3>
                {/* <p>
                  Boost your offer conversion on Sellora by showcasing customer
                  reviews for high-quality items
                </p> */}
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
        style={{ marginTop: 10 }}
      >
        <thead className="table__head">
          <tr className="winner__table">
            <th style={{ minWidth: 100, width: 100 }} className="text-left" />
            <th width={300} className="text-left">
              Product name
            </th>
            <th width={180} className="text-left">
              Date
            </th>
            <th width={380} className="text-left">
              Question/Answer
            </th>
            <th style={{ minWidth: 180 }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {questionList && questionList.length >0 && 
          questionList.map((itemData, index)=>( 
            <tr className="winner__table" key={index}>
            <td> 
              {itemData.variant?.withImage == "Yes" ? (
                <Image src={`${baseUrl}${variant_thumb_img_path1}/${itemData.variant?.image_1}`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt=''
                  loading='lazy'
                  style={{width:"auto", height:"auto"}} 
                  />
                ):(
                  <Image src={`${baseUrl}${main_thumb_img_path}/${itemData.product?.main_image}`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  alt=''
                  loading='lazy'
                  style={{width:"auto", height:"auto"}} 
                  />
                )}
               
            </td>
            <td>
              <div className="product_details_content">
                <p>
                {itemData.product?.product_name}
                </p>
              </div>
            </td>
            <td>{(()=>{
              const fullDate = new Date(itemData.createdAt);
              const date = fullDate.getDate()
              const month = fullDate.toLocaleString('default', {month:"long"});
              const year = fullDate.getFullYear(); 
              return `${date}/${month.toString().padStart(2,"0")}/${year}`
            })()}</td>
            <td>
              <div className="selller"> {itemData.user?.full_name}</div>
              <div className="question_outer">
                <strong>Q.</strong> {itemData.question}
              </div>
              <div className="anser_outer_01">
              {itemData.answer && ( 
                <><strong className="answer">Answer:</strong> {itemData.answer}</>
              )}
              </div>
            </td>
            <td className="text-center">
              <div className="view-all-reviews">
                <a href="#"   onClick={() => {
                  setAnswer(itemData.answer || "")
                  setSingleQuestion(itemData)
                  setOpenModal(true)
                  }}>
                     {itemData.answer? "Edit Reply": "Reply"}
                  
                </a>
              </div>
            </td>
          </tr>

          ))}
          
        </tbody>
      </table>
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
                  {/* {Array.from({length:pagination.totalPages},(_,i)=>{
                     if (Math.abs(pagination.page - (i + 1)) <= 3) {
                        return (
                          <li className="page-number" key={i}>
                            <Link href="#"> {i + 1}</Link>
                          </li>
                        )
                      }
                    return null
                  })} */}

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

{/* modal */}
{openModal && ( 
<div className="modal fade show d-block view_reasons" tabIndex={-1} role="dialog">
  {/* Modal content */}
  <div className="modal-content">
    <h2>Answer</h2>
    <span className="close-btn" onClick={() => setOpenModal(false)}>
 x</span>
    <div className="container">
      <div className="col-lg-12">
        <form >
          <div className="edit-listing_form">
            {/* <h1>Answer</h1> */}
            <div className="form-group mt--20">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <textarea 
                  value={answer} 
                  onChange={(e)=>setAnswer(e.target.value)}
                  />
                  <span className='error_message'>{errors?.answer}</span>
                </div>
              </div>
            </div>
            <div className="save_all">
              <Link href="#" onClick={(e)=>submmitAnswer(e)} >Submit</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
)}
{openModal && <div className="modal-backdrop fade show" onClick={() => setOpenModal(false)}></div>}

</>

  )
}

export default Page