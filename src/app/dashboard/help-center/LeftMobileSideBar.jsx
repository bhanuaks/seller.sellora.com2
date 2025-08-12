'use client'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { attachMenuListeners, attachMobileMenuListeners } from './menuListeners';
import { baseUrl } from '@/Http/helper';
import Link from 'next/link';

function LeftMobileSideBar() {

const [isVisible, setIsVisible] = useState(false);

  const toggleDiv = () => {
    
    setIsVisible(!isVisible);
  };

  const pathname = usePathname();

  useEffect(() => {
    if (!isVisible) return;
    const cleanup = attachMobileMenuListeners('.sidebar-mobile');
    return cleanup;
  }, [pathname, isVisible]);

  


  return (
    <>
    <div className="d-lg-none d-md-block">
          <button onClick={toggleDiv} className="filter_outer">
            <i className="far fa-bars" aria-hidden="true" /> Menu
          </button>
         {isVisible && (
          <div id="myDiv" style={{display:'block'}}>
            <div className="sidebar-mobile sidebar_10_7">
              <div className="marketplace">
                <h1>Marketplace Learn</h1>
              </div>
              <h2>Guides</h2>
              <ul className="menu_10_7">
                <li>
                  <div className="menu-header_10_7">Getting Started</div>
                  <ul className="submenu_10_7">
                    <li>
                                        <Link href={`${baseUrl}dashboard/help-center/start-selling-with-sellora`}>
                                          Start Selling with Sellora
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/your-guide-to-selling-on-sellora`}>
                                          Your Guide to Selling on Sellora
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/complete-onboarding-in-seller-center`}>
                                          Complete onboarding in Seller Center
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/referral-fee-schedule-for-categories`}>
                                          Referral fee schedule for categories
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/update-my-login-settings-in-seller-center`}>
                                          Update my Login Settings in Seller Center
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/manage-display-information-in-seller-senter`}>
                                          Manage Display Information in Seller Center
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/manage-contact-details-in-seller-center`}>
                                          Manage Contact Details in Seller Center
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/add-a-new-user-to-my-seller-center-account`}>
                                          Add a new user to my Seller Center account
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/remove-a-user-from-my-seller-center-account`}>
                                          Remove a user from my Seller Center account
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/update-tax-information-in-seller-center`}>
                                          Update tax information in Seller Center
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/set-up-payout-information-in-seller-center`}>
                                          Set up Payout Information in Seller Center
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/manage-notifications-in-seller-center`}>
                                          Manage notifications in Seller Center
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/reset-seller-center-password`}>
                                          Reset Seller Center password
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/enable-2-step-verification-in-seller-center`}>
                                          Enable 2-step verification in Seller Center
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/how-to-update-listing`}>
                                          How to update listing
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/how-to-update-seller-fulfilled-inventory-overview`}>
                                          How to update seller-fulfilled inventory: Overview
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/choose-an-approved-partner-services-provider`}>
                                          Choose an Approved Partner Services Provider
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/connect-an-approved-partner-services-provider-in-seller-center`}>
                                          Connect an approved Partner Services Provider in Seller
                                          Center
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/register-your-brand-on-sellora-marketplace`}>
                                          Register your brand on Sellora Marketplace
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/sellora-marketplace-advertising-solutions-overview`}>
                                          Sellora Marketplace advertising solutions: Overview
                                        </Link>
                                      </li>
                  </ul>
                </li>
                {/* Main Menu 2 */}
                <li>
                  <div className="menu-header_10_7">Listing Setup</div>
                  <ul className="submenu_10_7">
                    <li>
                      <div className="submenu-header_10_7">
                        Add Catalog Overview
                      </div>
                      <ul className="childmenu_10_7">
                        <li>
                        <Link href={`${baseUrl}dashboard/help-center/apply-brand-approval`}>
                          Apply for Brand Approval
                        </Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/help-center/create-listing-already`}>
                          Create the listing if it already exists on sellora.com
                        </Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/help-center/add-single-manual-listing`}>
                          Add Single Manual Listing
                        </Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/help-center/add-bulk-catalog-upload`}>
                          Add Bulk Catalog Upload
                        </Link>
                      </li>
                      </ul>
                    </li>
                    <li>
                      <div className="submenu-header_10_7">
                        Listing content, images
                      </div>
                      <ul className="childmenu_10_7">
                        <li>
                                                <Link href={`${baseUrl}dashboard/help-center/product-detail-page`}>
                                                  Product detail page: Overview
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href={`${baseUrl}dashboard/help-center/listing-atribuition`}>
                                                  Listing attribution &amp; categorization
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href={`${baseUrl}dashboard/help-center/the-buy-box`}>The Buy Box</Link>
                                              </li>
                                              <li>
                                                <Link href={`${baseUrl}dashboard/help-center/pricing`}>Pricing</Link>
                                              </li>
                                              <li>
                                                <Link href={`${baseUrl}dashboard/help-center/images`}>Images</Link>
                                              </li>
                      </ul>
                    </li>
                    <li>
                      <div className="submenu-header_10_7">
                        Variant Set Guide
                      </div>
                      <ul className="childmenu_10_7">
                        <li>
                        <Link href={`${baseUrl}dashboard/help-center/product-variations-overview`}>
                          Product Variations Overview
                        </Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/help-center/full-variant-group-guide`}>
                          Full Variant Group Guide
                        </Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/help-center/fix-product-variant-issues`}>
                          Fix Product Variant Issues
                        </Link>
                      </li>
                      </ul>
                    </li>
                    { /* <li>
                      <a href="#">Add Catalog Overview</a>
                    </li>
                    <li>
                      <a href="#">Submenu 2.2</a>
                    </li>
                    */ }
                  </ul>
                </li>
                <li>
                  <div className="menu-header_10_7">Catalog Management</div>
                  <ul className="submenu_10_7">
                    <li>
                                        <Link href={`${baseUrl}dashboard/help-center/listing-management`}>Listing Management</Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/merchant-fulfillment-inventory`}>
                                          Merchant Fulfillment Inventory
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/price-set-up`}>Price Setup</Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/listing-error-troubleshooter`}>
                                          Listing Error Troubleshooter
                                        </Link>
                                      </li>
                  </ul>
                </li>
                <li>
                  <div className="menu-header_10_7">
                    Seller Fulfillment Services
                  </div>
                  <ul className="submenu_10_7">
                    <li>
                                        <Link href={`${baseUrl}dashboard/help-center/shipping-methods`}>Shipping methods</Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/shipping-templates`}>Shipping Templates</Link>
                                      </li>
                                      <li>
                                        <Link href={`${baseUrl}dashboard/help-center/merchant-fulfillment-settings`}>
                                          Merchant Fulfillment settings
                                        </Link>
                                      </li>
                  </ul>
                </li>
                <li>
                  <div className="menu-header_10_7">Listing Optimization</div>
                  <ul className="submenu_10_7">
                    <li>
                    <Link href={`${baseUrl}dashboard/help-center/listing-and-inventory`}>
                      Listing and inventory
                    </Link>
                  </li>
                  <li>
                    <Link href={`${baseUrl}dashboard/help-center/manage-price-and-business-price`}>
                      Manage Price &amp; Business price
                    </Link>
                  </li>
                  <li>
                    <Link href={`${baseUrl}dashboard/help-center/reviews-and-rating`}>Reviews &amp; Rating</Link>
                  </li>
                  <li>
                    <Link href={`${baseUrl}dashboard/help-center/listing-quality`}>Listing Quality</Link>
                  </li>
                  <li>
                    <Link href={`${baseUrl}dashboard/help-center/how-to-remove-a-review`}>
                      How to Remove a Review
                    </Link>
                  </li>
                  </ul>
                </li>
                <li>
                  <div className="menu-header_10_7">Order Management</div>
                  <ul className="submenu_10_7">
                    <li>
                    <Link href={`${baseUrl}dashboard/help-center/manage-your-orders`}>Manage Your Orders</Link>
                  </li>
                  <li>
                    <Link href={`${baseUrl}dashboard/help-center/update-shipping-tracking-information-on-orders`}>
                      Update Order Tracking information
                    </Link>
                  </li>
                  <li>
                    <Link href={`${baseUrl}dashboard/help-center/cancel-an-order-in-seller-center`}>
                      Cancel an order in Seller Center
                    </Link>
                  </li>
                  <li>
                    <Link href={`${baseUrl}dashboard/help-center/pause-sales-and-order-operations`}>
                      Pause sales &amp; order operations
                    </Link>
                  </li>
                    <li>
                      <div className="submenu-header_10_7">
                        Customer Support
                      </div>
                      <ul className="childmenu_10_7">
                        <li>
                        <Link href={`${baseUrl}dashboard/help-center/customer-care-policy`}>
                          Customer Care Policy
                        </Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/help-center/manage-buyer-communications`}>
                          Manage Buyer Communications
                        </Link>
                      </li>
                      </ul>
                    </li>
                    <li>
                      <div className="submenu-header_10_7">
                        Returns &amp; refunds
                      </div>
                      <ul className="childmenu_10_7">
                        <li>
                        <Link href={`${baseUrl}dashboard/help-center/manage-return-settings`}>
                          Manage Return Settings
                        </Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/help-center/seller-fulfilled-returns-policy`}>
                          Seller-fulfilled returns policy
                        </Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/help-center/returns-insights-overview`}>
                          Returns insights: Overview
                        </Link>
                      </li>
                      </ul>
                    </li>
                    <li>
                      <div className="submenu-header_10_7">Reporting</div>
                      <ul className="childmenu_10_7">
                        <li>
                        <Link href={`${baseUrl}dashboard/help-center/how-to-download-report`}>
                          How to download report
                        </Link>
                      </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="menu-header_10_7">Taxes &amp; payments</div>
                  <ul className="submenu_10_7">
                    {/* <li><a href="#">Settings</a></li> */}
                    <li>
                    <Link href={`${baseUrl}dashboard/help-center/payments`}>Payments</Link>
                  </li>
                  <li>
                    <Link href={`${baseUrl}dashboard/help-center/wallet`}>Wallets</Link>
                  </li>
                  {/* <li><a href="#">Billing Information</a></li> */}
                  <li>
                    <Link href={`${baseUrl}dashboard/help-center/tax-information`}>Tax Information</Link>
                  </li>
                  </ul>
                </li>
                <li>
                  <div className="menu-header_10_7">
                    Policies &amp; Standards
                  </div>
                  <ul className="submenu_10_7">
                    <li>
                    <Link href={`${baseUrl}dashboard/help-center/account`}>Account</Link>
                  </li>
                  <li>
                    <Link href={`${baseUrl}dashboard/help-center/performance`}>Performance</Link>
                  </li>
                  <li>
                    <Link href={`${baseUrl}dashboard/help-center/policies-payments`}>Payments</Link>
                  </li>
                  <li>
                    <Link href={`${baseUrl}dashboard/help-center/prohibited-products-and-brands`}>
                      Prohibited products &amp; brands
                    </Link>
                  </li>
                  <li>
                    <Link href={`${baseUrl}dashboard/help-center/product-listings`}>Product listings</Link>
                  </li>
                  <li>
                    <Link href={`${baseUrl}dashboard/help-center/shipping-and-fulfillment`}>
                      Shipping &amp; fulfillment
                    </Link>
                  </li>
                  <li>
                    <Link href={`${baseUrl}dashboard/help-center/orders-and-returns`}>Orders &amp; returns</Link>
                  </li>
                  <li>
                    <Link href={`${baseUrl}dashboard/help-center/selling-on-sellora-fee-schedule`}>
                      Selling on Sellora – Fee Schedule
                    </Link>
                  </li>
                  </ul>
                </li>
                <li>
                  <div className="menu-header_10_7">Growth Opportunities</div>
                  <ul className="submenu_10_7">
                    <li>
                    <Link href={`${baseUrl}dashboard/help-center/sellora-insights`}>Sellora Insights</Link>
                  </li>
                  <li>
                    <Link href={`${baseUrl}dashboard/help-center/advertising-recommendation`}>
                      Advertising Recommendation
                    </Link>
                  </li>
                  <li>
                    <Link href={`${baseUrl}dashboard/help-center/price-recommendations`}>
                      Price Recommendations
                    </Link>
                  </li>
                  { /* <li>
                    <a href="#">Sellora Promotions</a>
                  </li>
                  */ }
                  <li>
                    <Link href={`${baseUrl}dashboard/help-center/your-seller-tier`}>Your Seller Tier</Link>
                  </li>
                  </ul>
                </li>
                <li>
                  <div className="menu-header_10_7">
                    Advertising &amp; Promotions Overview
                  </div>
                  <ul className="submenu_10_7">
                    <li>
                      <div className="submenu-header_10_7">
                        Promotions Overview
                      </div>
                      <ul className="childmenu_10_7">
                        <li>
                        <Link href={`${baseUrl}dashboard/help-center/sale-events`}>Sale Events</Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/help-center/promotions-discount-coupon`}>Discount Coupon</Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/help-center/influencer-marketing`}>
                          Influencer Marketing
                        </Link>
                      </li>
                      </ul>
                    </li>
                    <li>
                      <div className="submenu-header_10_7">Advertising</div>
                      <ul className="childmenu_10_7">
                        <li>
                        <Link href={`${baseUrl}dashboard/help-center/manual-campaign`}>Manual Campaign</Link>
                      </li>
                      <li>
                        <Link href={`${baseUrl}dashboard/help-center/smart-campaign`}>Smart Campaign</Link>
                      </li>
                      </ul>
                    </li>
                    <li>
                      <div className="submenu-header_10_7">Display Ads</div>
                      <ul className="childmenu_10_7">
                        <li>
                                                <Link href={`${baseUrl}dashboard/help-center/sponsored-image-ads`}>
                                                  Sponsored Image Ads
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href={`${baseUrl}dashboard/help-center/sponsored-video-ads`}>Display Video Ads</Link>
                                              </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

         )}
        </div>
    </>
  )
}

export default LeftMobileSideBar