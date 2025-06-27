"use client" 
import { advertisementFAQ } from '@/Http/PageData/advertisementFaq';
import React, { useEffect, useRef, useState } from 'react'   
import RightSideBar from '../RightSideBar';

function page() {
   const [activeIndex, setActiveIndex] = useState(null);
  const refs = useRef([]);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

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
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#" className="active_002">
                  Orders &amp; Delivery
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
            <h3 className="light_bg animated fadeIn">Orders &amp; Delivery</h3>
          </div>
          {/* =================1st-question=open============ */}
          {advertisementFAQ.map((item, index) => (
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

export default page