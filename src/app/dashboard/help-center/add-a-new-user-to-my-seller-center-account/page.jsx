'use client'
import React, { useEffect, useState } from 'react'
import LeftSideBar from '../leftSideBar';
import LeftMobileSideBar from '../LeftMobileSideBar';
import SearchBox from '../SearchBox';
import { baseUrl } from '@/Http/helper';
import { usePathname } from 'next/navigation';
import { initAccordion } from '../menuListeners';

export default function page() {

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
                  Add a new user to my Seller Center account
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
                        Add a new user to my Seller Center account
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
              <h2>Add a new user to my Seller Center account</h2>
              <h3>In this guide</h3>
              <ul className="clean-decorative-list">
                <li>Overview</li>
                <li>User roles</li>
                <li>Add a new user</li>
                <li>Frequently asked questions</li>
              </ul>
              <div className="section-box">
                <h3>Overview</h3>
                <p>
                  As a Sellora Marketplace seller, you may need to add a new
                  user to your Seller Center account—for example, to grant
                  access to another member of your organization. Only users with
                  admin-level access can add new users in the Seller Center. The
                  process is simple and straightforward, and this guide will
                  walk you through each step.
                </p>
              </div>
              <div className="notes_11">
                <h3>Notes</h3>
                <p>
                  If you do not have admin-level access, please contact your
                  account administrator for assistance.
                </p>
              </div>
              <h3>User roles</h3>
              <ul>
                <li>
                  <strong>Admin:-</strong> Admin access provides full control
                  over your Sellora Seller Center account. Admins can:
                  <ul>
                    <li>Manage all areas of the Seller Center</li>
                    <li>
                      Request access to restricted or special-approval
                      categories
                    </li>
                    <li>Add and manage user accounts for your team</li>
                    <li>
                      Review and accept legal agreements on behalf of the
                      business
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Read and Write:-</strong> This role allows users to
                  perform essential operating tasks, such as listing products,
                  updating inventory, managing orders, and viewing performance
                  reports.
                </li>
                <li>
                  <strong>Read Only:-</strong> Users with Read Only access can
                  view dashboard data, reports, and product listings but cannot
                  make any changes to the account or listings.
                </li>
              </ul>
              <div className="notes_11">
                <h3>Notes</h3>
                <p>
                  You are responsible for the actions of all users on your
                  Sellora Seller Center account. Assign user roles carefully,
                  and limit Admin access to trusted individuals within your
                  company who are authorized to accept binding terms and
                  agreements on behalf of your business.
                </p>
              </div>
              <h3>Add a new user</h3>
              <h3>Step 1 – Get started</h3>
              <ul>
                <li>
                  Click on the Settings icon located at the top-right corner of
                  the dashboard
                </li>
                <li>Select User Management from the dropdown menu</li>
              </ul>
              <h3>Step 2 – Add user</h3>
              <p>
                Click on Add New Users. As a reminder, only sellers with admin
                level access can add users within Seller Center.
              </p>
              <h3>Step 3 – Add user info</h3>
              <ul>
                <li>
                  Enter the new user’s details, including their{" "}
                  <strong>name, email address, and contact number.</strong>
                </li>
                <li>
                  Once all required fields are filled, click{" "}
                  <strong>Save</strong> to complete the process.
                </li>
              </ul>
              <img src={`${baseUrl}front/assets/images/image-72.png`} />
              <div className="text-center pt--7">
                <p>
                  <strong>Note:</strong> Please wait a few seconds after saving
                  your information. The user will receive an email to create a
                  password for logging into their seller account.
                </p>
              </div>
              <h3>Step 4– Manage Permission</h3>
              <p>
                Click on Manage Permissions to set access levels for the new
                user. You can choose from the following permission types for
                each section:
              </p>
              <ul>
                <li>None – The user will not have access to this section.</li>
                <li>
                  View – The user can view information but cannot make any
                  changes.
                </li>
                <li>
                  Edit – The user can view and make changes to the section.
                </li>
              </ul>
              <h3>Step 5 – Confirm and Save</h3>
              <p>
                After selecting all the necessary permissions for the user,
                review your choices to ensure accuracy. Once confirmed, click on{" "}
                <strong>Save</strong> to finalize the user setup
              </p>
              <h2>Frequently asked questions</h2>
              <div className="faq-container">
                <div className="accordion-item">
                  <div className="accordion-header">
                    <span>
                      Can I edit or remove users once they’ve been added to my
                      Seller Center account?
                    </span>
                    <span className="accordion-arrow">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-content">
                    <p>
                      Yes. You can easily edit or remove users from your Seller
                      Center account at any time.
                    </p>
                  </div>
                </div>
              </div>
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
