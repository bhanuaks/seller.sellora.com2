"use client";

import { useState, useEffect } from "react";

export default function CategoryModal({filterData, setFilterData, submitFilter, setRequestDownload }) {
  const [categories, setCategories] = useState([]);
   useEffect(()=>{
        
        
            fetch(`/api/seller/fetch-brand-category`,{
              method:"GET", 
          }).then((response)=>{
              if(!response.ok){ 
                  throw new Error("Network Error")
              }
              return response.json();
          }).then((res)=>{ 
              if(res.status){
                setCategories(res.data.category) 
                
              }  
          })
        
      },[])

  
  const [selectedId, setSelectedId] = useState(null);

  // This ensures Bootstrap's JS is loaded only on client side
//   useEffect(() => {
//     import("bootstrap/dist/js/bootstrap.bundle.min.js");
//   }, []);

  const handleRadioChange = (id) => {
    setRequestDownload(true)
    setFilterData((preData)=>({
        ...preData,
        category:id,
        downloadRequest:"Yes"
      }))
  };

 

  return (
    <div className="p-4">
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#categoryModal2"
      >
        Open Categories
      </button> */}

      <div
        className="modal fade"
        id="categoryModal2"
        tabIndex="-1"
        aria-labelledby="categoryModalLabel2"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="categoryModalLabel2">
                Select Category
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
             <div
             style={{color:"#2b2828", fontSize:'12px'}}
             className="mb-3"
             ><strong>Note : </strong> <span>Filter products by category, then select the desired products using checkboxes. After selection, click the "Download Now" button to download the selected items in an Excel file.</span></div> 
              <form>
                <div className="row">
                  {categories.length > 0 &&  categories.map((cat, index) => (
                    <div className="col-lg-6"  key={cat._id}>
                      <div className="form-check1">
                        <input
                          className="form-check-input d-none"
                          type="radio"
                          name="category"
                          id={`cat-${cat._id}`}
                          checked={filterData?.category === cat._id}
                          onChange={() => handleRadioChange(cat._id)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`cat-${cat._id}`}
                        >
                          {cat.name}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </form>
            </div>

            <div className="modal-footer">
              {/* <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button> */}
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={(e)=>submitFilter(e)}
              >
               Filter Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
