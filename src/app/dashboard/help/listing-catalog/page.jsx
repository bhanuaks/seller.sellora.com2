"use client"
import { listingCatalogFaq } from '@/Http/PageData/listingCatalogFaq';
import React, { Suspense, useEffect, useRef, useState } from 'react'   
import RightSideBar from '../RightSideBar';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function ListingCatelog() {
   const [activeIndex, setActiveIndex] = useState(null);
  const refs = useRef([]);

   const searchParam = useSearchParams(); 
      const questionRef = searchParam.get("question") || null

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
  if (questionRef !== null) {
    const parsed = parseInt(questionRef, 10) - 1;
    if (!isNaN(parsed)) {
      setActiveIndex(parsed);

      // Wait for the DOM to expand first
      setTimeout(() => {
        const el = refs.current[parsed];
        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 400);
    }
  }
}, [questionRef]);

  useEffect(() => {
    refs.current.forEach((ref, i) => {
      if (ref) {
        if(i == activeIndex){ 
           ref.style.maxHeight = `${ref.scrollHeight}px`;
        }
        ref.style.maxHeight =  activeIndex === i ? `${ref.scrollHeight}px` : '0px';
      }
    });
  }, [activeIndex])

  return (
     <>
   
  <div className="notification_breadcomb_rts-navigation-area-breadcrumb">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="notification_breadcomb">
            <ul>
              <li>
                 <Link href="/dashboard/help">Help</Link>
              </li>
              <li>
                <a href="#" className="active_002"> 
                  Listing  &amp; Catalog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="sellora_045948">
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <div className="head_234">
            <h3 className="light_bg animated fadeIn">Listing  &amp; Catalog</h3>
          </div>
          {/* =================1st-question=open============ */}
          {listingCatalogFaq.map((item, index) => (
        <div key={index} className="faq_outer_23">
          <div
            className={`question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggle(index)}
          >
            {item.question}
          </div>
          <div className="answercont"  ref={(el) => (refs.current[index] = el)}>
            <div
              ref={(el) => (refs.current[index] = el)}
              className="answer"
              style={{
                overflow: 'hidden',
                // maxHeight: '0px',
                transition: 'max-height 0.3s ease',
              }}
            >
              {item.answer}
            </div>
          </div>
        </div>
      ))}


           
        </div>
         <RightSideBar />
      </div>
    </div>
  </div>
</>


  )
}

function page(){
  return (
    <Suspense fallback={<></>}>
      <ListingCatelog />
    </Suspense>
  )
}

export default page