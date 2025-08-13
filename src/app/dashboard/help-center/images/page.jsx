'use client'
import React, { useEffect, useState } from 'react'
import LeftSideBar from '../LeftSideBar';
import LeftMobileSideBar from '../LeftMobileSideBar';
import SearchBox from '../SearchBox';
import { baseUrl } from '@/Http/helper';
import { usePathname } from 'next/navigation';
import { initAccordion } from '../menuListeners';

function page() {

const pathname = usePathname();

   useEffect(() => {
    const cleanUp = initAccordion();
    return cleanUp;
  }, []);

  return (
    <>
  <div className="notification_breadcomb_rts-navigation-area-breadcrumb d-lg-none d-md-block">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="notification_breadcomb mb-6">
          <ul>
            <li>
              <a href="#">Help </a>{" "}
            </li>
            <li>
              <a href="#"> Listing Set Up </a>{" "}
            </li>
            <li>
              <a href="#"> Listing content, image</a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Images
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>




  {/* ==================new-code================== */}
  <div className="container">
    <div className="row">
      
       <LeftSideBar />
      
      <div className="col-lg-9">
        <div className="notification_breadcomb_rts-navigation-area-breadcrumb d-lg-block d-none">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="notification_breadcomb mb-6">
          <ul>
            <li>
              <a href="#">Help </a>{" "}
            </li>
            <li>
              <a href="#"> Listing Set Up </a>{" "}
            </li>
            <li>
              <a href="#"> Listing content, images </a>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                {" "}
                Images
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>




        {/* ==============mobile-menu-filter-open========================= */}
        <LeftMobileSideBar />
        {/* ===================mobile-menu-filter-end==================== */}
        <div className="main-content_10-7">
          <SearchBox />
          <div className="featured_10-7">
            <div className="new_content_11">
              

             
            <>
  <h2>Images</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How does it work?</li>
    <li>Additional guidelines</li>
    <li>Frequently asked questions</li>
  </ul>
  {/* ==============getting-started-section=open================ */}
  <div className="section-box ">
    <h3>Overview</h3>
    <p>
      As a Marketplace seller, you must comply with Sellora Marketplace’s image
      requirements and guidelines. High quality images help provide accurate
      content for customers so they can enjoy a positive shopping experience on
      Sellora.com.
    </p>
  </div>
  <h3>How does it work?</h3>
  <div className="ragister-brand- number-li">
    <h4>Content requirements</h4>
    <p>
      Images must not violate the  <u> Prohibited Products Policy</u> or any
      other Sellora policies. This includes but is not limited to:&nbsp;
    </p>
    <ul>
      <li>
        Content that portrays glorifies or promotes hatred, violence or
        discrimination.
      </li>
      <li>Content that displays explicit nudity or vulgar language.&nbsp;</li>
      <li>
        Content that contains obscene material, is sexually suggestive or
        pornographic.
      </li>
      <li>Content deemed culturally inappropriate or insensitive.&nbsp;</li>
    </ul>
    <p />
  </div>
  <div className="ragister-brand- number-li">
    <h4>File type requirements</h4>
    <p></p>
    <ul>
      <li>File Format: JPEG, JPG, PNG (GIF images aren't permitted)</li>
      <li>Color Format: RGB</li>
      <li>File Size: 5MB or less</li>
      <li>Bit Depth: 8 bits per pixel&nbsp;</li>
      <li>Minimum Pixel Dimensions for Zoom: 1600px x 1600px&nbsp;</li>
      <li>Aspect Ratio: 1:1 (Square)&nbsp;</li>
      <li>Background: Seamless white (255/255/255 RGB)</li>
    </ul>
    <p />
  </div>
  <div className="ragister-brand- number-li">
    <h4>Image URL requirements</h4>
    <p>
      Sellora offers image hosting so that you don't need your own external
      image space. If you are using Walmart's hosting service, there are URL
      limitations. Review the table below for supported and unsupported URL
      formats.
    </p>
  </div>
  <div className="table-container2">
    <table>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Supported URL formats</th>
          <th style={{ width: "40%" }}>Unsupported URL formats</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
              <li>
                {" "}
                Image URLs must end in an image file type (.jpg, .png,
                etc.)&nbsp;
              </li>
              <li>URL port of communication must be 8080, 80, 443 or 8443</li>
              <li>
                Most Sellora image URLs can be accepted if they meet the
                guidelines on this page
              </li>
              <li>Accepted URL examples:&nbsp;&nbsp;</li>
              <li>
                https://seller.sellora.com/uploads/variant/img1/
                medium//Racerb11745402339139..jpg
              </li>
              <li>
                https://seller.sellora.com/uploads/product/
                main_image/medium//Streax_main_2025041006 1840668..jpg
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li>URLs that aren't publicly accessible</li>
              <li>URLs that are HTML pages</li>
              <li>URLs containing a query</li>
              <li>
                URLs with a port of communication other than 8080, 80, 443 or
                8443
              </li>
              <li>URL paths with special characters and aren't encoded</li>
              <li>
                Certain Photobucket URLs aren't supported if they load as HTML
                pages even when the URL ends in a valid file type
              </li>
              <li>Dropbox URLs aren't supported</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="ragister-brand- number-li">
    <h4>Additional guidelines</h4>
    <p>
      To ensure the best possible customer experience, we recommend that you
      upload a minimum of four images for each listing. See the table below for
      guidance.
    </p>
  </div>
  <div className="table-container2 col-12 col-md-12 col-lg-12 col-xl-10 col-xxl-8">
    <table>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Guideline</th>
          <th style={{ width: "40%" }}>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
              <li>
                All images should correspond with the product name and
                type.&nbsp;
              </li>
            </ul>
          </td>
          <td className="img-bg-colors">
            <div className="images">
              <img src={`${baseUrl}front/assets/images/example1.png`} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>
                There should be no image duplication on the item page.&nbsp;
              </li>
            </ul>
          </td>
          <td className="img-bg-colors">
            <div className="images">
              <img src={`${baseUrl}front/assets/images/example2.png`} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>
                All images must be in focus and professionally lit. Main images
                should feature items on a seamless white background. Images of
                larger items may feature the item in an expected
                environment.  &nbsp;
              </li>
            </ul>
          </td>
          <td className="img-bg-colors">
            <div className="images">
              <img src={`${baseUrl}front/assets/images/example3.png`} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>
                Crop the item as close as possible to the image frame. Avoid
                excessive background space around the item. Don't resize smaller
                images to fill space, as this reduces image
                quality.  &nbsp;&nbsp;
              </li>
            </ul>
          </td>
          <td className="img-bg-colors">
            <div className="images">
              <img src={`${baseUrl}front/assets/images/example4.png`} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>
                The main image shouldn't contain watermarks, your name or your
                logo. &nbsp;&nbsp;
              </li>
            </ul>
          </td>
          <td className="img-bg-colors">
            <div className="images">
              <img src={`${baseUrl}front/assets/images/example5.png`} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>
                The main image can't show accessories that aren't included with
                the item, as it may confuse the customer. Avoid positioning too
                many props in the image.&nbsp;
              </li>
            </ul>
          </td>
          <td className="img-bg-colors">
            <div className="images">
              <img src={`${baseUrl}front/assets/images/example6.png`} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>
                The main image shouldn't include any claims or promotional
                offers about the item.&nbsp;
              </li>
            </ul>
          </td>
          <td className="img-bg-colors">
            <div className="images">
              <img src={`${baseUrl}front/assets/images/example7.png`} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>Swatch images should be provided where applicable.&nbsp;</li>
            </ul>
          </td>
          <td className="img-bg-colors">
            <div className="images">
              <img src={`${baseUrl}front/assets/images/example8.png`} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>
                Images shouldn’t include  Walmart or other retailer/eCommerce
                platform logos or names. &nbsp;
              </li>
            </ul>
          </td>
          <td className="img-bg-colors">
            <div className="images">
              <img src={`${baseUrl}front/assets/images/example9.png`} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>Images shouldn’t include foreign languages. &nbsp;</li>
            </ul>
          </td>
          <td className="img-bg-colors">
            <div className="images">
              <img src={`${baseUrl}front/assets/images/example10.png`} alt="" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <h3>Frequently asked questions</h3>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>
          Are there specific image requirements for each product category?&nbsp;
        </span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          Yes. Depending on your product, you may have additional requirements
          or guidelines to follow.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>Can I use stock photos?&nbsp;</span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>We don't recommend using stock imagery.</p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>
          I submitted an image. Why isn’t it showing on Sellora.com?&nbsp;
        </span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          Because there may be multiple sellers providing content for the same
          item, you may not always be able to define which content will be
          displayed on Sellora.com. Sellora will determine the best available
          content for items unless it's provided by a brand owner or authorized
          reseller. Items that can't be updated will appear locked during the
          updating process.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>
          I’m not sure if my image URL domain is whitelisted by Sellora. How can
          I confirm?&nbsp;&nbsp;
        </span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          If you work with an Approved Solution Provider, reach out to them. If
          not, select the Help button in the Seller Center menu bar to contact
          Support.&nbsp;
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <span>
          Can I add images that include descriptions of my item's
          condition?&nbsp;
        </span>{" "}
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>{" "}
      </div>
      <div className="accordion-content">
        <p>
          No. Images can’t contain descriptions of the item’s condition (e.g.,
          “good,” “grade A,” “scratched,” “refurbished,” etc.).
        </p>
      </div>
    </div>
  </div>
</>







            </div>
          </div>
          {/* ==============getting-started-section=open================ */}
        </div>
        
      </div>
    </div>
  </div>
</>

  )
}

export default page