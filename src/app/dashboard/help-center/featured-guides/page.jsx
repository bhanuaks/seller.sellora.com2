'use client'
import React, { useEffect, useState } from 'react'
import LeftSideBar from '../leftSideBar';
import LeftMobileSideBar from '../LeftMobileSideBar';
import SearchBox from '../SearchBox';
import { usePathname } from 'next/navigation';
import { initAccordion } from '../menuListeners';
import { baseUrl } from '@/Http/helper';
import Link from 'next/link';


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
                <a href="#">Help</a>{" "}
              </li>
              <li>
                <a href="#" className="active_002">
                  Feautured Guides
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
                      <a href="#">Help</a>{" "}
                    </li>
                    <li>
                      <a href="#" className="active_002">
                        Feautured Guides
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
            <h2>Featured Guides</h2>
            <div className="cards_10-7">
              <div className="card_10-7">
                <h3>Selling and Item Limits</h3>
                <span className="tag">Getting Started</span>
                <p>
                  Once your application is vetted and approved to join the
                  Sellora Marketplace, your account will be assigned specific
                  selling and item limits. These limits define the number of
                  items you are allowed to list and sell at a given time...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/selling-and-item-limits`}>Go To Guide</Link>
              </div>
              <div className="card_10-7">
                <h3>Tax Classification and Documentation</h3>
                <span className="tag">Getting Started</span>
                <p>
                  If you plan to sell on the U.S. Marketplace through Sellora,
                  you are required to submit a valid Business Tax Identification
                  Number (TIN) or Business License Number, along with supporting
                  documentation to verify your ...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/tax-classification-and-documentation`}>
                  Go To Guide
                </Link>
              </div>
              <div className="card_10-7">
                <h3>Prohibited Products Policy</h3>
                <span className="tag">Getting Started</span>
                <p>
                  To ensure a safe, legal, and trustworthy shopping experience
                  for all users, all products listed on Sellora.com must comply
                  with applicable local, state, and federal laws and
                  regulations...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/prohibited-products-policy`}>Go To Guide</Link>
              </div>
              <div className="card_10-7">
                <h3>Customer Care Policy</h3>
                <span className="tag">Getting Started</span>
                <p>
                  As a Sellora Marketplace seller, you are responsible for
                  responding promptly and professionally to all order-related
                  inquiries from customers and Sellora Customer Care...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/customer-care-policy`}>Go To Guide</Link>
              </div>
              <div className="card_10-7">
                <h3>Seller - Fulfilled Returns Policy</h3>
                <span className="tag">Getting Started</span>
                <p>
                  To ensure a smooth and consistent returns experience for
                  customers, all seller-fulfilled orders must follow the
                  Marketplace’s minimum return policy requirements. Sellers are
                  required to provide a valid U.S. return address...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/seller-fulfilled-returns-policy`}>Go To Guide</Link>
              </div>
            </div>
          </div>
          {/* ==============getting-started-section=open================ */}
          <div className="featured_10-7 mt-5">
            <h2>Getting Started</h2>
            <div className="cards_10-7">
              <div className="card_10-7">
                <h3>Start Selling with Sellora</h3>
                <span className="tag">Getting Started</span>
                <p>
                  Sellora’s New-Seller Savings program offers incentives and
                  benefits, including 0% commission on sales for a limited time,
                  to help you successfully launch and scale your business on
                  Sellora.com. This guide explains the program details and ...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/start-selling-with-sellora`}>Go To Guide</Link>
              </div>
              <div className="card_10-7">
                <h3>Your Guide to Selling on Sellora</h3>
                <span className="tag">Getting Started</span>
                <p>
                  To sell on the Sellora Marketplace, your business must meet
                  specific eligibility criteria and provide the required legal
                  documentation. This guide outlines the essential requirements
                  and steps to help you get started as a Marketplace seller...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/your-guide-to-selling-on-sellora`}>Go To Guide</Link>
              </div>
              <div className="card_10-7">
                <h3>Complete onboarding in Seller Center</h3>
                <span className="tag">Getting Started</span>
                <p>
                  After creating your Sellora Marketplace account and accepting
                  the Sellora Seller Terms and Conditions, the next step is to
                  complete your onboarding through the Seller Center.
                </p>
                <Link href={`${baseUrl}dashboard/help-center/complete-onboarding-in-seller-center`}>
                  Go To Guide
                </Link>
              </div>
              <div className="card_10-7">
                <h3>Referral fee schedule for Product categories</h3>
                <span className="tag">Getting Started</span>
                <p>
                  As a Marketplace seller on Sellora, you are required to pay a
                  Referral Fee for every product sold. This fee is calculated
                  based on the product category (also referred to as the product
                  type) assigned to your item...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/referral-fee-schedule-for-categories`}>
                  Go To Guide
                </Link>
              </div>
              <div className="card_10-7">
                <h3>Update my Login Settings in Seller Center</h3>
                <span className="tag">Getting Started</span>
                <p>
                  This guide will help you update your personal information
                  within the Login Setting section of the Sellora Seller Center.
                  You’ll learn how to modify details such as your Name, Email,
                  and Password to keep your account information ...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/update-my-login-settings-in-seller-center`}>
                  Go To Guide
                </Link>
              </div>
              <div className="card_10-7">
                <h3>Manage Display Information in Seller Center</h3>
                <span className="tag">Getting Started</span>
                <p>
                  You must provide accurate, up‑to‑date Display information for
                  customers and Sellora Marketplace. This information is
                  displayed on your Sellora.com listings. In this guide, we’ll
                  show you how to manage your display name and company...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/manage-display-information-in-seller-center`}>
                  Go To Guide
                </Link>
              </div>
              <div className="card_10-7">
                <h3>Manage Contact Details in Seller Center</h3>
                <span className="tag">Getting Started</span>
                <p>
                  In the Manage Contacts Details section of Seller Center, you
                  can update your contact details. This guide will walk you
                  through the process.
                </p>
                <Link href={`${baseUrl}dashboard/help-center/manage-contact-details-in-seller-center`}>
                  Go To Guide
                </Link>
              </div>
              <div className="card_10-7">
                <h3>Add a new user to my Seller Center account</h3>
                <span className="tag">Getting Started</span>
                <p>
                  As a Sellora Marketplace seller, you may need to add a new
                  user to your Seller Center account—for example, to grant
                  access to another member of your organization. Only users with
                  admin-level access can add new users in the...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/add-a-new-user-to-my-seller-center-account`}>
                  Go To Guide
                </Link>
              </div>
              <div className="card_10-7">
                <h3>Remove a user from my Seller Center account</h3>
                <span className="tag">Getting Started</span>
                <p>
                  There may come a time when you need to remove a user’s access
                  to the Seller Center. Only sellers with admin level access can
                  delete users within Seller Center. Here’s a quick and easy
                  guide on how to delete a user from you...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/remove-a-user-from-my-seller-center-account`}>
                  Go To Guide
                </Link>
              </div>
              <div className="card_10-7">
                <h3>Update tax information in Seller Center</h3>
                <span className="tag">Getting Started</span>
                <p>
                  If you need to update your tax classification, Employer
                  Identification Number (EIN), legal business name, or business
                  address, you can do so by editing your Tax Profile in the
                  Seller Center. Please note that only users...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/update-tax-information-in-seller-center`}>
                  Go To Guide
                </Link>
              </div>
              <div className="card_10-7">
                <h3>Set up Payout Information in Seller Center</h3>
                <span className="tag">Getting Started</span>
                <p>
                  If you have an administrator account in the Sellora Seller
                  Center, you can set up your Marketplace Wallet or link a
                  third-party payout processor to receive your payout funds.This
                  guide will walk you through the steps to set up your...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/set-up-payout-information-in-seller-center`}>
                  Go To Guide
                </Link>
              </div>
              <div className="card_10-7">
                <h3>Manage notifications in Seller Center</h3>
                <span className="tag">Getting Started</span>
                <p>
                  The Notifications panel in the Sellora Seller Center is a
                  centralized location where you can view important updates that
                  may require your immediate attention. These may include
                  business-critical alerts or time-sensitive...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/manage-notifications-in-seller-center`}>
                  Go To Guide
                </Link>
              </div>
              <div className="card_10-7">
                <h3>Reset Seller Center password</h3>
                <span className="tag">Getting Started</span>
                <p>
                  Forgot your Sellora Seller Center password? No worries — just
                  follow the steps below to securely reset your password and
                  regain access to your account.
                </p>
                <Link href={`${baseUrl}dashboard/help-center/reset-seller-center-password`}>Go To Guide</Link>
              </div>
              <div className="card_10-7">
                <h3>Enable 2-step verification in Seller Center</h3>
                <span className="tag">Getting Started</span>
                <p>
                  One of the most effective ways to protect your Sellora Seller
                  Center account is by enabling an extra layer of security.
                  2-step verification (also known as multi-factor
                  authentication) significantly reduces the risk of unauthorized
                  access to your...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/enable-2-step-verification-in-seller-center`}>
                  Go To Guide
                </Link>
              </div>
              <div className="card_10-7">
                <h3>How to update listing</h3>
                <span className="tag">Getting Started</span>
                <p>
                  Keeping your Listing on Sellora.com up to date with accurate,
                  relevant, and engaging product content is essential for
                  delivering a seamless shopping experience. Whether you need to
                  update an item’s description, images, or oth...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/how-to-update-listing`}>Go To Guide</Link>
              </div>
              <div className="card_10-7">
                <h3>How to update seller-fulfilled inventory: Overview</h3>
                <span className="tag">Getting Started</span>
                <p>
                  Keeping your inventory up to date is essential to ensure your
                  products remain available for purchase on Sellora.com and do
                  not go out of stock. Accurate inventory management helps
                  improve customer satisfaction and boost sales...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/how-to-update-seller-fulfilled-inventory-overview`}>
                  Go To Guide
                </Link>
              </div>
              <div className="card_10-7">
                <h3>Choose an Approved Partner Services Provider</h3>
                <span className="tag">Getting Started</span>
                <p>
                  An Approved Partner Services Provider is a third-party company
                  listed in the Sellora Marketplace that offers specialized
                  services to support and enhance your eCommerce business
                  operations. Collaborating with a Solution Provider...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/choose-an-approved-partner-services-provider`}>
                  Go To Guide
                </Link>
              </div>
              <div className="card_10-7">
                <h3>
                  Connect an approved Partner Services Provider in Seller Center
                </h3>
                <span className="tag">Getting Started</span>
                <p>
                  If you work with an approved Partner Services Provider to
                  manage your Sellora Marketplace business, you can set up your
                  approved Partner Services Provider integration through the App
                  Store in Seller Center. In this guide, we’ll show you...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/connect-an-approved-partner-services-provider-in-seller-center`}>
                  Go To Guide
                </Link>
              </div>
              <div className="card_10-7">
                <h3>Register your brand on Sellora Marketplace</h3>
                <span className="tag">Getting Started</span>
                <p>
                  Sellora.com makes it easy for brand owners to protect their
                  intellectual property and manage their brand presence on the
                  platform. In this guide, you’ll learn how to use the Sellora
                  Brand Portal to...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/register-your-brand-on-sellora-marketplace`}>
                  Go To Guide
                </Link>
              </div>
              <div className="card_10-7">
                <h3>Sellora Marketplace advertising solutions: Overview</h3>
                <span className="tag">Getting Started</span>
                <p>
                  As a Sellora Marketplace seller, you have access to a variety
                  of advertising tools designed to increase your product
                  visibility and reach more potential customers. In this guide,
                  you’ll learn about the...
                </p>
                <Link href={`${baseUrl}dashboard/help-center/sellora-marketplace-advertising-solutions-overview`}>
                  Go To Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
        


      </div>
    </div>
  </div>
</>

 
    
    


  
  

    
                  )}


export default page;