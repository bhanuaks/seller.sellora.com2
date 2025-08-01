import { apiRequest } from "@/Http/apiHelper";
import { baseUrl, main_thumb_img_path } from "@/Http/helper";
import { fileBasePath } from "@/Http/urlHelper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

function SingleLIstingSection() {
  const [searchText, setSearchText] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [list, setList] = useState([]);
  const [emptyList, setEmptyList] = useState(false);
  const inputRef = useRef(null);
  const popupRef = useRef(null);
  const router = useRouter();

  function searchData() {
    setEmptyList(false);
    fetch("/api/seller/search-product-for-listing", {
      method: "POST",
      body: JSON.stringify({ searchText }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Internal issue");
        }
        return response.json();
      })
      .then((res) => {
        if (res.status) {
          setList(res.data.list);
        }
      });
  }

  useEffect(() => {
    const timitId = setTimeout(() => {
      searchData();
    }, 300);
    return () => clearTimeout(timitId);
  }, [searchText]);

  const showPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClickOutside = (event) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target) &&
      inputRef.current &&
      !inputRef.current.contains(event.target)
    ) {
      setIsPopupVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  async function chooseProduct(prod) {

    try {
       const res = await apiRequest('/api/seller/product/check-other-seller-brand', "POST", {brand_id:prod.brand_id})
         const brandName = res.data?.brand?.name || "";
         
      if(res.status){
        
         let link = `/seller/product/add-product?category=${prod.category_id}`;
            if (prod.subcategory_id) {
              link = `${link}&subCategory=${prod.subcategory_id}`;
            }
            if (prod.childcategory_id) {
              link = `${link}&childcategory=${prod.subcategory_id}`;
            }
            if (prod.brand_id) {
              link = `${link}&brand=${prod.brand_id}`;
            }
            if (prod._id) {
              // link = `${link}&product_id=${prod._id}`;
              link = `${link}&product_id=${prod._id}&copy=Yes`
            }
            router.push(link);

      }else{
        Swal.fire({
                 title:"Error",
                 icon:"error",
                 title:"Brand Validation.",
                 text:res.data?.message,
                 confirmButtonText:"Apply Brand",
                 cancelButtonText:"Cancel",
                 showCancelButton:true
               }).then((res)=>{
                  if (res.isConfirmed) {
                     router.push(`/dashboard/brand-aproval-page?brandName=${brandName || ""}`);
                   } else if (res.dismiss === Swal.DismissReason.cancel) {
                     // router.push("/back");
                   }
               })

      }
    } catch (error) {
      console.log(error);
    }
   
   
    // &subCategory=67d8fb3acbc17851f2aded82&childcategory=67d8fb58cbc17851f2aded8c&brand=67a5f777b7eb44a7611b45aa&product_id=68651fd2a5cf5cd7f38f2954`
  }

  function submitSearch(e) {
    e.preventDefault();
    setEmptyList(false);
    fetch("/api/seller/search-product-for-listing", {
      method: "POST",
      body: JSON.stringify({ searchText }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Internal issue");
        }
        return response.json();
      })
      .then((res) => {
        if (res.status) {
          if (res.data.list.length == 0 && searchText) {
            setEmptyList(true);
          } else {
            setList(res.data.list);
          }
        }
      });
  }

  return (
    <div className="form_s2 search_the_sellora_catalog">
      <h2>Search the Sellora catalog</h2>
      <p>
        Search for the item in the Sellora catalog and match it, if exists. If
        not, &nbsp;
        <Link href={`${baseUrl}dashboard/categories?ref=single`}>
          create a new catalog
        </Link>
        .
      </p>
      <div className="category_search seach_df pt--30 pb--10">
        <div className="col-lg-6 offset-lg-3">
          <form
            role="search"
            className="sr-input-func"
            style={{ position: "relative" }}
            onSubmit={(e) => submitSearch(e)}
          >
            <input
              type="text"
              placeholder="Enter an Item Name"
              className="search-int form-control"
              id="searchInput"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              ref={inputRef}
              onClick={showPopup}
            />
            <a href="#" onClick={(e) => submitSearch(e)} >
              <i className="fa fa-search"></i>
            </a>

            {isPopupVisible && list.length > 0 && (
              <div
                className="product-popup-n"
                id="productPopup"
                ref={popupRef}
                style={{
                  display: "block",
                  // position: "absolute",
                  // background: "#fff",
                  // border: "1px solid #ccc",
                  // zIndex: 1000,
                  maxHeight: "400px",
                  overflowY: "auto",
                }}
              >
                <ul>
                  {list.length > 0 &&
                    list.map((prod, index) => (
                      <li key={index} onClick={() => chooseProduct(prod)}>
                        <span>
                          <img
                            src={`${fileBasePath}/${main_thumb_img_path}/${prod.main_image}`}
                          />
                        </span>
                        {prod.product_name}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </form>
          {emptyList && (
            <div
              style={{
                color: "red",
                marginTop: "5px",
              }}
            >
              <div>
                This catalog not present in the list.{" "}
                <Link
                  href="/dashboard/categories?ref=single"
                  className="text-primary"
                >
                  create a new catalog
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleLIstingSection;
