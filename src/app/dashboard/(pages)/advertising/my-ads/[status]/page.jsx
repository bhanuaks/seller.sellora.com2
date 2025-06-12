"use client"
import { baseUrl, fetcher } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AdslistSeictins from './AdslistSeictins'
import useSWR from 'swr'

function Page() {
  const {data, isLoading, error} = useSWR('/api/seller/ads/reports', fetcher);
  const reportData = data?.data?.report;
  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12 hub1">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <Link href={`${baseUrl}dashboard`}>
              <i className="fa-solid fa-arrow-left" /> Go to Seller hub
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-6">
          <div className="navigator-breadcrumb-wrapper text-center">
            <h3>Campaign Manager</h3>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-6">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <ul>
              <li>
                 <Link href={`${baseUrl}dashboard/advertising/payment-wallet-summary`}>
                  <i className="fa-solid fa-wallet" /> Wallet
                </Link>{" "}
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="details_page_outer">
    <div className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <Link href={`${baseUrl}dashboard/advertising/start-advertising`} className="campaign-btn">
              Create Campaign
            </Link>
          </div>
          <div className="col-12">
            <div className="manager">
              <div className="row g-4 align-items-center">
                <div className="col-lg-2 col-md-3 col-12">
                  <div className="manager_boxs">
                    <h5>Ad Spend</h5>
                    <h6>₹ 0</h6>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-12">
                  <div className="manager_boxs">
                    <h5>Sales</h5>
                    <h6>{reportData?.totalSales || 0}</h6>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-12">
                  <div className="manager_boxs">
                    <h5>ROI</h5>
                    <h6>-</h6>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-12">
                  <div className="manager_boxs">
                    <h5>Views</h5>
                    <h6>{reportData?.totalViews || 0}</h6>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-12">
                  <div className="manager_boxs">
                    <h5>Clicks</h5>
                    <h6>{reportData?.totalClicks || 0}</h6>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-12">
                  <div className="manager_boxs">
                    <h5>Orders</h5>
                    <h6>{reportData?.totalOrders || 0}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AdslistSeictins />
  </div>
</>

  )
}

export default Page