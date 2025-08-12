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
                  Remove a user from my Seller Center account
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
                        Remove a user from my Seller Center account
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
              <h2>Remove a user from my Seller Center account</h2>
              <h3>In this guide</h3>
              <ul className="clean-decorative-list">
                <li>Overview</li>
                <li>Delete a User</li>
                <li>Frequently asked questions</li>
                <li>Helpful resources</li>
              </ul>
              <div className="section-box">
                <h3>Overview</h3>
                <p>
                  There may come a time when you need to remove a user’s access
                  to the Seller Center. Only sellers with admin level access can
                  delete users within Seller Center. Here’s a quick and easy
                  guide on how to delete a user from your Seller Center account.
                </p>
              </div>
              <div className="notes_11">
                <h3>Notes</h3>
                <p>
                  If you do not have admin level access, reach out to your
                  account administrator for help.
                </p>
              </div>
              <h3>Remove a user</h3>
              <ul>
                <li>
                  <strong>Step 1 – Get started</strong>
                  <ul>
                    <li>
                      Click on the <strong>Settings</strong> icon located at the
                      top-right corner of the dashboard
                    </li>
                    <li>
                      Select <strong>User Management</strong> from the dropdown
                      menu
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Step 2 – Remove a User</strong>
                  <ul>
                    <li>Click on Manage Permissions.</li>
                    <li>
                      Set All Permissions to None for the user you want to
                      remove.
                    </li>
                    <li>Click Remove User at the bottom left of the screen.</li>
                  </ul>
                  <h3>The user has been successfully deleted.</h3>
                  <img src={`${baseUrl}front/assets/images/image-73.png`} />
                  <h2>Frequently asked questions</h2>
                  <div className="faq-container">
                    <div className="accordion-item">
                      <div className="accordion-header">
                        <span>
                          What happens to the data associated with the user’s
                          account after it’s deleted?
                        </span>
                        <span className="accordion-arrow">
                          <i className="fas fa-chevron-right" />
                        </span>
                      </div>
                      <div className="accordion-content">
                        <p>
                          Once a user is deleted, their access to your account
                          and all associated data is permanently deleted. It’s
                          important to remember that this action is final so
                          only delete a user once you’re certain you no longer
                          need them to access your account.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* ==============getting-started-section=open================ */}
        </div>
        <div className="rts-footer-area pt--50 pb--20">
          <div className="container-fluid">
            <div className="container">
              <div className="col-lg-10 offset-lg-1">
                <div className="second_footer_link">
                  <p>Copyright © 2024-2025 Sellora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}
