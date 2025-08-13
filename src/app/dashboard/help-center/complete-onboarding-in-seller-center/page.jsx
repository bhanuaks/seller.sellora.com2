'use client'
import React, { useEffect, useState } from 'react'
import LeftSideBar from '../LeftSideBar';
import LeftMobileSideBar from '../LeftMobileSideBar';
import SearchBox from '../SearchBox';
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
                <a href="#">Help</a>{" "}
              </li>
              <li>
                <a href="#">Getting Started</a>{" "}
              </li>
              <li>
                <a href="#" className="active_002">
                  Complete onboarding in Seller Center
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
                      <a href="#">Getting Started</a>{" "}
                    </li>
                    <li>
                      <a href="#" className="active_002">
                        Complete onboarding in Seller Center
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
              <h2>Complete onboarding in Seller Center</h2>
              <h3>In this guide</h3>
              <ul className="clean-decorative-list">
                <li>Overview</li>
                <li>Complete Onboarding</li>
                <li>Frequently asked questions</li>
              </ul>
              <div className="section-box">
                <h3>Overview</h3>
                <p>
                  After creating your <strong>Sellora Marketplace</strong>{" "}
                  account and accepting the{" "}
                  <strong>Sellora Seller Terms and Conditions</strong>, the next
                  step is to complete your onboarding through the{" "}
                  <strong>Seller Center</strong>
                </p>
              </div>
              <div className="notes_11">
                <h3>Notes</h3>
                <p>
                  Your products will be eligible to go live on Sellora.com only
                  after you’ve successfully completed the full account setup
                  process in the Seller Center. This includes verifying your
                  business details, configuring fulfillment settings, and
                  uploading your product listings.
                </p>
              </div>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/hYiOM4Nwlnw?si=_XNzZlgZVKFHdcmR"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen=""
                />
              </div>
              <h3>Complete onboarding</h3>
              <h3>Step 1 – Create Your Account </h3>
              <ul>
                <li>
                  <strong>Go to</strong> seller.sellora.com
                </li>
                <li>
                  Click the <strong>“Start Selling”</strong> button
                </li>
                <li>
                  Enter your <strong> email address</strong> — you’ll instantly
                  receive a <strong>6-digit OTP</strong>
                </li>
                <li>
                  Enter the OTP to <strong>verify your email</strong>
                </li>
                <li>
                  Provide your <strong>mobile number</strong> and create a{" "}
                  <strong>secure password</strong>
                </li>
                <p>
                  Click Register — you’ll be redirected to your{" "}
                  <strong>Seller Dashboard</strong> to begin the onboarding
                  process
                </p>
                <h3>Step 2 – Display Information </h3>
                <p>
                  This is where you define how your store will appear to
                  customers on <strong>Sellora.com.</strong>
                </p>
                <ul>
                  <li>
                    Enter your <strong>Store Display Name</strong> — this is the
                    name customers will see.
                  </li>
                  <li>
                    Add a <strong>brief description</strong> of your business to
                    help shoppers understand who you are and what you sell.
                    Click <strong>“Save”</strong> to continue.
                  </li>
                </ul>
                <h3>Step 3 – Pick Up Address </h3>
                <p>
                  Provide the address from which your products will be shipped.
                  This is essential for ensuring smooth and timely logistics.
                </p>
                <p>Be sure to include the following details:</p>
                <ul>
                  <li>
                    <strong>Full Name</strong>
                  </li>
                  <li>
                    <strong>Address Line 1 &amp; 2</strong>
                  </li>
                  <li>
                    <strong>City</strong>
                  </li>
                  <li>
                    <strong>State/Province</strong>
                  </li>
                  <li>
                    <strong>ZIP/Postal Code</strong>
                  </li>
                  <li>
                    <strong>Country</strong>
                  </li>
                  <li>
                    <strong>Mobile Number</strong>
                  </li>
                </ul>
                <p>
                  After entering the correct details, click{" "}
                  <strong>“Save”</strong> to continue.
                </p>
                <h3>Step 4 – Return Address</h3>
                <p>
                  Specify the address where returned products should be sent.
                  This can either be:
                </p>
                <ul>
                  <li>The same as your pickup address, or</li>
                  <li>
                    A different location (e.g., your warehouse or return center)
                  </li>
                </ul>
                <p>Fill in all required fields, including:</p>
                <ul>
                  <li>Address Line(s)</li>
                  <li>City</li>
                  <li>State/Province</li>
                  <li>ZIP/Postal Code</li>
                  <li>Country</li>
                </ul>
                <p>
                  Once completed, click <strong>“Save”</strong> to proceed
                </p>
                <h3>Step 5 – Business Details </h3>
                <p>
                  Provide your <strong>legal business information</strong> as
                  part of the verification process. This includes:
                </p>
                <ul>
                  <li>Registered Business Name</li>
                  <li>Business Address</li>
                  <li>Mobile Number</li>
                </ul>
                <p>
                  You’ll also need to enter personal details of the{" "}
                  <strong>beneficiary or authorized representative</strong>,
                  such as:
                </p>
                <ul>
                  <li>
                    <strong>Full Name</strong>
                  </li>
                  <li>
                    <strong>Date of Birth.</strong>
                  </li>
                  <li>
                    <strong>Nationality</strong>
                  </li>
                  <li>
                    <strong>Government-issued ID</strong> (e.g., Aadhaar, PAN,
                    Passport)
                  </li>
                </ul>
                <p>
                  Click <strong>“Upload”</strong> to submit the required
                  documents, then click <strong>“Save”</strong> to move forward.
                </p>
                <h3>Step 6 – Tax Information</h3>
                <p>
                  Provide your <strong>legal business information</strong> as
                  part of the verification process. This includes:
                </p>
                <ul>
                  <li>
                    <strong>Registered Business Name</strong>
                  </li>
                  <li>
                    <strong>Business Address</strong>
                  </li>
                  <li>
                    <strong>Mobile Number</strong>
                  </li>
                </ul>
                <p>
                  You’ll also need to enter personal details of the{" "}
                  <strong>beneficiary or authorized representative</strong>,
                  such as:
                </p>
                <ul>
                  <li>
                    <strong>Full Name</strong>
                  </li>
                  <li>
                    <strong>Date of Birth</strong>
                  </li>
                  <li>
                    <strong>Nationality</strong>
                  </li>
                  <li>
                    <strong>
                      Government-issued ID (e.g., Aadhaar, PAN, Passport)
                    </strong>
                  </li>
                </ul>
                <p>
                  Click <strong>“Upload”</strong> to submit the required
                  documents, then click <strong>“Save”</strong> to move forward.
                </p>
                <h3>Step 7 – Shipping Setting</h3>
                <p>
                  Set up how you want to handle shipping for your orders on{" "}
                  <strong>Sellora Marketplace</strong>.
                </p>
                <p>You can choose to:</p>
                <ul>
                  <li>
                    Set your own shipping rates based on region, weight, or
                    order value
                  </li>
                  <li>
                    Offer free shipping on all orders to attract more customers
                  </li>
                </ul>
                <p>
                  Carefully review the available options to ensure they align
                  with your pricing strategy and fulfillment capabilities.
                </p>
                <p>
                  Once finalized, click <strong>“Save”</strong> to apply your
                  shipping settings.
                </p>
                <h3>Step 8 – Bank Account Information</h3>
                <p>
                  To receive payouts from your sales on Sellora Marketplace,
                  you’ll need to enter your bank account details. Be sure to
                  provide the following information accurately:
                </p>
                <ul>
                  <li>
                    <strong>Country</strong>
                  </li>
                  <li>
                    <strong>Account Holder’s Name</strong>
                  </li>
                  <li>
                    <strong>Account Number</strong>
                  </li>
                  <li>
                    <strong>IFSC Code</strong>
                  </li>
                  <li>
                    <strong>Bank Name</strong>
                  </li>
                  <li>
                    <strong>Bank Address</strong>
                  </li>
                </ul>
                <p>
                  Double-check all information to ensure it matches your
                  official bank records. Once complete, click “Save” to
                  continue.
                </p>
                <h3>Step 9 – Payment Information</h3>
                <p>
                  Provide your card information for billing-related charges,
                  such as advertising fees or service subscriptions.
                </p>
                <p>Enter the following details:</p>
                <ul>
                  <li>Cardholder’s Name</li>
                  <li>Card Number</li>
                  <li>Expiration Date (MM/YY)</li>
                  <li>Security Code (CVV)</li>
                  <li>Billing Address</li>
                </ul>
                <p>
                  Ensure all fields are correctly filled out, then click{" "}
                  <strong>“Save”</strong> to complete this step.
                </p>
                <div className="notes_11">
                  <h3>Notes</h3>
                  <p>
                    It may take up to four hours after adding your inventory for
                    your account setup to be complete.
                  </p>
                </div>
                <h2>Frequently asked questions</h2>
                <div className="faq-container">
                  <div className="accordion-item">
                    <div className="accordion-header">
                      <span>How Long Does Business Verification Take?</span>
                      <span className="accordion-arrow">
                        <i className="fas fa-chevron-right" />
                      </span>
                    </div>
                    <div className="accordion-content">
                      <p></p>
                      <p>
                        The business verification process typically takes
                        anywhere from a few minutes up to two business days,
                        depending on the accuracy of the information and
                        documents provided.
                      </p>
                      <p>
                        To avoid delays, ensure that all details match your
                        official business and government-issued records.
                      </p>
                      <p />
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header">
                      <span>
                        Why Does My Business Verification Status Show “Failed”?
                      </span>
                      <span className="accordion-arrow">
                        <i className="fas fa-chevron-right" />
                      </span>
                    </div>
                    <div className="accordion-content">
                      <p>
                        The status <strong>“Failed”</strong> usually means that{" "}
                        <strong>
                          Sellora was unable to verify the information you
                          submitted
                        </strong>{" "}
                        during the business verification process.
                      </p>
                      <p>Common reasons include:</p>
                      <ul>
                        <li>
                          Mismatched or incorrect{" "}
                          <strong>business name or tax details</strong>
                        </li>
                        <li>
                          Invalid or expired{" "}
                          <strong>identification documents</strong>
                        </li>
                        <li>
                          Incomplete{" "}
                          <strong>personal or banking information</strong>
                        </li>
                      </ul>
                      <h3>What to Do:</h3>
                      <p>
                        <strong>Review your submitted details</strong> for
                        accuracy and ensure they match official documents
                        exactly.
                      </p>
                      <p>
                        If corrections are needed or you’re unsure of the issue,
                        click the <strong>“Help” </strong>button in the{" "}
                        <strong>Seller Center</strong> menu bar to contact{" "}
                        <strong>Sellora Support</strong>.
                      </p>
                      <p>
                        In your case description, mention that you need to{" "}
                        <strong>
                          update or correct your business verification
                          information.
                        </strong>
                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header">
                      {" "}
                      <span>
                        I Need to Update My Company’s Details. How Do I Do That?
                      </span>{" "}
                      <span className="accordion-arrow">
                        <i className="fas fa-chevron-right" />
                      </span>{" "}
                    </div>
                    <div className="accordion-content">
                      <p>
                        To update or manage your company information—including
                        customer service contacts, return address, tax details,
                        and more—follow these steps:
                      </p>
                      <ul>
                        <li>
                          Log in to your <strong>Sellora Seller Center</strong>{" "}
                          account
                        </li>
                        <li>
                          Navigate to the <strong>“Account Settings”</strong>{" "}
                          section
                        </li>
                        <li>
                          Click on <strong>“Manage Company Information”</strong>
                        </li>
                        <li>
                          Make the necessary updates to your business, tax, or
                          contact information
                        </li>
                        <li>
                          Click <strong>“Save”</strong> to apply the changes
                        </li>
                      </ul>
                      <p>
                        If you need help or encounter an issue, use the{" "}
                        <strong>Help</strong> option in the Seller Center menu
                        to contact <strong>Sellora Support</strong>.
                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header">
                      {" "}
                      <span>
                        I currently use Hyperwallet as a payment processor. Can
                        I use the same account for Sellora Marketplace?
                      </span>{" "}
                      <span className="accordion-arrow">
                        <i className="fas fa-chevron-right" />
                      </span>{" "}
                    </div>
                    <div className="accordion-content">
                      <p>
                        No. New Marketplace sellers must create a new
                        Hyperwallet account, even if you currently use them as a
                        payment processor.
                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header">
                      {" "}
                      <span>
                        Can I Connect Multiple Payment Processor Accounts?
                      </span>{" "}
                      <span className="accordion-arrow">
                        <i className="fas fa-chevron-right" />
                      </span>{" "}
                    </div>
                    <div className="accordion-content">
                      <p>
                        <strong>No.</strong> You can only{" "}
                        <strong>link one payment processor account</strong> to
                        your <strong>Sellora Marketplace</strong> seller account
                        at a time.
                      </p>
                      To ensure accurate payouts and reporting, you must choose
                      a single active payment account. If you need to update or
                      switch your payment processor, you can do so through the{" "}
                      <strong>Seller Center.</strong>
                      <p />
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header">
                      {" "}
                      <span>
                        Why Can’t I Set Up My Items Using the Bulk Upload
                        Method?
                      </span>{" "}
                      <span className="accordion-arrow">
                        <i className="fas fa-chevron-right" />
                      </span>{" "}
                    </div>
                    <div className="accordion-content">
                      <p>
                        You won’t be able to use the{" "}
                        <strong>bulk upload feature</strong> until your{" "}
                        <strong>Sellora Marketplace account setup</strong> is
                        fully complete.
                      </p>
                      <p>This includes:</p>
                      <ul>
                        <li>
                          <strong>Business verification</strong>
                        </li>
                        <li>
                          <strong>Market selection and details</strong>
                        </li>
                        <li>
                          <strong>Payment method setup</strong>
                        </li>
                        <li>
                          <strong>Shipping and return configurations</strong>
                        </li>
                      </ul>
                      <p>
                        Once these steps are successfully completed, the bulk
                        upload tool will be enabled in your{" "}
                        <strong>Seller Center</strong>, allowing you to upload
                        multiple items at once.
                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header">
                      {" "}
                      <span>Why Are My Items Showing as “Draft”?</span>{" "}
                      <span className="accordion-arrow">
                        <i className="fas fa-chevron-right" />
                      </span>{" "}
                    </div>
                    <div className="accordion-content">
                      <p>
                        Items will appear as “Draft” in your Sellora Seller
                        Center if certain steps are incomplete. To publish your
                        products live on Sellora.com, you must:
                      </p>
                      <ul>
                        <li>
                          Complete your account setup, including verification
                          and payment configuration
                        </li>
                        <li>
                          <strong>Add inventory</strong> to each listing
                        </li>
                        <li>
                          Set accurate{" "}
                          <strong>pricing and shipping details</strong>
                        </li>
                      </ul>
                      <p>
                        Once all required fields are filled and your account is
                        fully active, your listings will move from{" "}
                        <strong>Draft to Active</strong> and become visible to
                        customers.
                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header">
                      {" "}
                      <span>What is Sellora’s return policy?</span>{" "}
                      <span className="accordion-arrow">
                        <i className="fas fa-chevron-right" />
                      </span>{" "}
                    </div>
                    <div className="accordion-content">
                      <p>
                        For details on how returns should be handled by sellers,
                        please refer to the{" "}
                        <strong>Sellora Seller-Fulfilled Returns Policy</strong>
                        . This outlines the guidelines and expectations for
                        return windows, refund timelines, and return shipping
                        procedures.
                      </p>
                      <p>
                        👉 Visit the{" "}
                        <strong>Seller-Fulfilled Returns Policy</strong> page in{" "}
                        <strong>Seller Center</strong> to review the full policy
                        and ensure your settings comply.
                      </p>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header">
                      {" "}
                      <span>
                        What Is the “Advanced Setup” Option in Shipping
                        Settings?
                      </span>{" "}
                      <span className="accordion-arrow">
                        <i className="fas fa-chevron-right" />
                      </span>{" "}
                    </div>
                    <div className="accordion-content">
                      <p>
                        The <strong>Advanced Setup</strong> option allows you to
                        customize your <strong>Manual Shipping Settings</strong>{" "}
                        during account setup on{" "}
                        <strong>Sellora Marketplace</strong>.
                      </p>
                      <p>Using this option, you can:</p>
                      <ul>
                        <li>
                          Adjust your <strong>shipping rate model</strong>{" "}
                          (e.g., flat rate, weight-based, region-based)
                        </li>
                        <li>
                          Set your <strong>order processing cutoff time</strong>
                        </li>
                        <li>
                          Define specific <strong>shipping methods</strong> for
                          different regions or delivery zones
                        </li>
                      </ul>
                      <p>
                        If you prefer to finish onboarding first, you can always
                        update or refine your shipping settings later by
                        visiting the <strong>Seller Fulfillment section</strong>{" "}
                        in <strong>Seller Center</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
        {/* ==============getting-started-section=open================ */}
      </div>
      
    </div>
  </div>
</>

  )
}

export default page
