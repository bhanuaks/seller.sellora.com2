import { baseUrl } from '@/Http/helper';
import Link from 'next/link';
import React from 'react'
import Swal from 'sweetalert2';

function ErrorPagination({pagination, errorPaginationFun}) {

  return (
    <ul className="pagination">

                    
                  <li className={`page-pre ${pagination.page <= 1? "pointer-events-none opacity-50 deactive_btn":""}`}>
                    <Link href="#" onClick={(e)=>{
                      if(pagination.page > 1){ 
                        errorPaginationFun((pagination.page-1),  pagination.pageSize, e)
                      }else{
                        e.preventDefault();
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
                        <a   href="#"  onClick={(e)=>errorPaginationFun((i+1),  pagination.pageSize, e)}>
                          {i + 1} 
                        </a>
                    </li> 
                  );
                } 
                return null; 
               })} 
                  
                  <li
                      className={`page-next ${pagination.page == pagination.totalPages ? "pointer-events-none opacity-10 deactive_btn" : ""}`}
                    >
                      <Link
                        href="#"
                        onClick={(e) => {
                          if (pagination.page < pagination.totalPages) {
                            errorPaginationFun(parseInt(pagination.page) + 1, pagination.pageSize, e);
                          } else {
                            e.preventDefault();
                          }
                        }}
                      >
                        <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </li>
                  </ul>
  )
}

export default ErrorPagination