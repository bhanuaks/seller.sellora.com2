import { baseUrl } from '@/Http/helper'
import React from 'react'
import RightSideBar from '../RightSideBar'
import Link from 'next/link'

function ListingCatalog() {
  return (
    <div className="sellora_045948">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="head_234">
          <h2>
            <img src={`${baseUrl}front/assets/images/listing1.png`} /> <Link href={`${baseUrl}dashboard/help`}> Help </Link> /{" "}
            <span>Listing Catalog</span>
          </h2>
          <div className="listi_content_390">
            <div className="card_34259">
              <ul>
                <li>
                  <a href="#my-uploaded-file-is-not-live-yet.html">
                    <span>My uploaded file is not live yet</span>
                  </a>
                </li>
                <li>
                  <a href="#i-want-to-edit-catalog-details.html">
                    <span>I want to edit catalog details</span>
                  </a>
                </li>
                <li>
                  <a href="#i-want-catalog-upload-training.thml">
                    <span>I want catalog upload training</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      I am receiving an error while uploading the catalog via
                      Bulk Upload
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>I want to change price of a product/catalog</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      Wrong discount / No discount is applied to my sale
                      catalogs
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      I have an issue with the price of the product/catalog
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      How to promote my products/ increase visibility of my
                      catalogs by using ads on Sellora?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>What is the price recommendation feature?</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      What are various charges and commissions applied on
                      Sellora?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>I'm not able to fix error</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      I'm not able to find the category I want to list
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      Our brand is not shown in drop down while listing the
                      product
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>How to price my product ?</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>My catalogs are under the 'Blocked' tab</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      My catalogs/Listing are blocked due to brand infringement
                      issues.
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      I am not able to understand details asked in Catalog
                      Upload
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      Our attribute values are not shown in dropdown while
                      listing
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>My catalogs are not visible in the Meesho shop</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Other catalog related issue</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <RightSideBar />
    </div>
  </div>
</div>

  )
}

export default ListingCatalog