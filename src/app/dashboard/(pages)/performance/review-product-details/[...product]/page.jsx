"use client";
import {
  baseUrl,
  calculateListingQuality,
  currencyCode,
  main_medium_img_path,
  variant_medium_img_path1,
} from "@/Http/helper";
import { fileBasePath } from "@/Http/urlHelper";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SimpleLoader from "@/app/skeleton_loader/SimpleLoader";
import Link from "next/link";

const Page = () => {
  const params = useParams();
  const [productId, variantId] = params.product || []; // Safely handle undefined

  const [product, setProduct] = useState(null);
  const [issueList, setIssueList] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  const [productQuality, setProductQuality] = useState("");
  const [productScore, setProductScore] = useState(0);

  async function LoadProduct() {
    setIsLoading(true);
    fetch(`/api/seller/quality-review-product`, {
      method: "POST",
      body: JSON.stringify({
        product_id: productId,
        variant_id: variantId,
      }),
    })
      .then(async (response) => {
        setIsLoading(false);
        const res = await response.json();
        if (response.ok) {
          setProduct(res.data.product);
          if (res.data.product) {
            const qualityRes = calculateListingQuality(res.data.product);
            setIssueList(qualityRes?.issues || []);
            setProductScore(qualityRes?.score || 0);
            setProductQuality(qualityRes?.quality || null);
          }
        } else {
          new Error(res.message || "Failed to create coupon");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    // const timeId = setTimeout(() => {
    LoadProduct();
    // }, 300);
    // return () => clearTimeout(timeId);
  }, []);

  if(isLoading){
    return (
      <SimpleLoader />
    )
  }

  return (
    <>
      <div className="rts-navigation-area-breadcrumb pb--10">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="navigator-breadcrumb-wrapper text-center mb--20">
                <h3>Product Details</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="discount_weowe4_box review-product-details">
                {/* <div className="rOrderId">
              <span>Order Id</span>
              <h5>200012561663320</h5>
            </div> */}
                <div className="rprImg">
                  {product && product?.varinat?.withImage == "Yes" && (
                    <img
                      src={`${fileBasePath}${variant_medium_img_path1}/${product.variant?.image_1}`}
                      alt=""
                      style={{ maxWidth: "150px" }}
                    />
                  )}

                  {product && product?.varinat?.withImage !== "Yes" && (
                    <img
                      src={`${fileBasePath}${main_medium_img_path}/${product.main_image}`}
                      alt=""
                      style={{ maxWidth: "150px" }}
                    />
                  )}
                </div>
                <div className="rprcontent">
                  <p>{product?.product_name}</p>
                  <ul className="rprlist d-flex gap-5" style={{ margin: 0 }}>
                    <li>
                      <strong>SKU ID</strong>: {product?.variant?.sku}
                    </li>
                    <li>
                      <strong>SIN</strong>: {product?.variant?.sin}
                    </li>
                    <li>
                      <strong>Price</strong>:{" "}
                      {currencyCode(product?.variant?.currency)}
                      {product?.variant?.consumerSalePrice}
                    </li>

                    <li>
                      <strong>Total Quality Score</strong>: {productScore}
                    </li>

                    <li>
                      <strong>Quality</strong>: {productQuality}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="table-responsive">
              <table
                className="table table-bordered table-striped br-none"
                style={{ marginTop: 10 }}
              >
                <thead className="table__head">
                  <tr className="winner__table">
                    <th className="text-left" width={30}>
                      &nbsp;
                    </th>
                    <th className="text-left" width={30}>
                      &nbsp;
                    </th>
                    <th className="text-left" width="60%">
                      Issue
                    </th>
                    <th className="text-cener" width="20%">
                      Score
                    </th>
                    <th className="text-cener" width="10%">
                      &nbsp;
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {issueList.length > 0 &&
                    issueList.map((issue, index) => (
                      <tr className="winner__table" key={index}>
                        <td>1.</td>
                        <td>
                          {!issue.sign ? (
                            <img
                              src={`${baseUrl}front/assets/images/exclamation.png`}
                              alt="icon"
                            />
                          ) : (
                            <img
                              src={`${baseUrl}front/assets/images/check-box.png`}
                              alt="img"
                            />
                          )}
                        </td>
                        <td>
                          <div className="product_details_content2">
                            <h4>{issue.section}</h4>
                            {(() => {
                              if (
                                issue.section == "Product Name" &&
                                !issue.sign
                              ) {
                                return (
                                  <ul>
                                    <li>
                                      <h5>1. Missing Key Attributes</h5>
                                      <p>
                                        This title includes key attributes such
                                        as 'brand', but is missing others such
                                        as 'form'.
                                      </p>
                                    </li>
                                    <li>
                                      <h5>2. Too Long </h5>
                                      <p>
                                        Product Name should not be more than 100
                                        characters. Enter a Product Name which
                                        is lesser than or equal to 100
                                        characters.
                                      </p>
                                    </li>
                                    <li>
                                      <h5>3. Too Long/too Short</h5>
                                      <p>
                                        Product Name should not be more than 100
                                        characters. Enter a Product Name which
                                        is lesser than or equal to 100
                                        characters.
                                      </p>
                                    </li>
                                  </ul>
                                );
                              } else if (
                                issue.section == "Description" &&
                                !issue.sign
                              ) {
                                return (
                                  <ul>
                                    <li>
                                      <h5>1. Written Poorly</h5>
                                      <p>
                                        This description is too simplistic.
                                        Descriptions that are more complex tend
                                        to perform better. Try increasing the
                                        average length of the words and
                                        sentences to make it more complex.
                                      </p>
                                    </li>
                                    <li>
                                      <h5>2.Too Short </h5>
                                      <p>
                                        Site Description should not be less than
                                        60, Enter a Site Description which is
                                        greater than or equal to 60 words.
                                      </p>
                                    </li>
                                  </ul>
                                );
                              }else{
                                return (
                                  <ul>
                                  <li>
                                    {/* <h5>1. Missing Key Attributes</h5> */}
                                    <p>{issue.message}</p>
                                  </li> 
                                </ul>
                                )
                              }
                            })()}
                            
                          </div>
                        </td>
                        <td className="text-center">
                          {/* <SingleScore setPrevScore={setPrevScore} prevScore={prevScore} issue={issue} /> */}
                          <input
                            type="text"
                            defaultValue={`${issue.score}%`}
                            className="form-control reviewinput"
                            style={{ width: 100, margin: "auto" }}
                          />
                        </td>
                        <td>
                          <Link
                            href={`/seller/product/add-product?category=${product.category_id}&subCategory=${product.subcategory_id || ""}&childcategory=${product.childcategory_id}&brand=${product.brand_id}&product_id=${product._id}`}
                            className="color-primary"
                            style={{
                              marginTop: 10,
                              display: "inline-block",
                              fontSize: 15,
                            }}
                          >
                            Edit
                          </Link>
                        </td>
                      </tr>
                    ))}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
