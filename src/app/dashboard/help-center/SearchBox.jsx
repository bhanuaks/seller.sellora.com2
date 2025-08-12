'use client'
import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React from 'react'

function SearchBox() {
  return (
    <>
    <div className="topbar_10-7">
            <div className="search-container_10_7">
              <i className="fas fa-search search-icon" />
              <input
                type="text"
                placeholder="Search guides, lessons, FAQ, News and more."
              />
            </div>
          </div>
          <div className="tabs_10-7">
            <ul>
              <li>
                <Link href={`${baseUrl}dashboard/help-center/sellora-learn`}>
                  <i className="far fa-star" /> Learn
                </Link>
              </li>
              <li>
                <a href="#">
                  <i className="far fa-info-circle" /> Guides
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="far fa-calendar" /> Events
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="far fa-file-text" /> News
                </a>
              </li>
              <li>
                <Link href={`${baseUrl}dashboard/help-center/faq`}>
                  <i className="fa fa-question" /> FAQ
                </Link>
              </li>
            </ul>
          </div>
    </>
  )
}

export default SearchBox