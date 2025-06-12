import { baseUrl } from '@/Http/helper'
import React from 'react'

function SidePopup({setOpenSidePopup, openSidePopup}) {
  return (
    
  <div className={`slide-panel ${openSidePopup?"active":""}`} id="timelinePanel">
  <button className="close-btn_23" id="closePanel" onClick={(e)=>setOpenSidePopup(false)}>
    ×
  </button>
  <div className="clear" />
  <div className="header_23">
    <div className="logo_23">
      <img src={`${baseUrl}front/assets/images/image-25.png`} alt="eCOMSOLUTIONS" />
      <div>
        FBF Onboarding <br />
        <span style={{ color: "orangered" }}>eCOMSOLUTIONS</span>
      </div>
    </div>
    <div className="ref_23">
      Reference No. <span>RNS400501184</span>
    </div>
  </div>
  <div className="tabs_23">
    <div className="tab_23 active_23">Activity</div>
    <div className="tab_23">Documents/Shared Items</div>
  </div>
  <div className="timeline_23">
    <div className="event_23">
      <time>20 May 2025, 02:07PM</time>
      <h4>Service Request Sent</h4>
    </div>
    <div className="event_23">
      <time>20 May 2025, 03:39PM</time>
      <h4>Service Agreement</h4>
    </div>
    <div className="event_23 cancelled">
      <time>22 May 2025, 03:00PM</time>
      <h4>Service Not Accepted</h4>
      <p>
        Service was cancelled as partner did not reach out on time. We regret
        the inconvenience. Please reach out to other partners for the service.
      </p>
    </div>
  </div>
</div>
  )
}

export default SidePopup