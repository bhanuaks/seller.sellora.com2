import React from 'react'
import RightSideBar from '../../RightSideBar'
import { baseUrl } from '@/Http/helper'
import Link from 'next/link'

function page() {
  return (
    <div className="sellora_045948">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="head_234">
          <h2>
            <img src={`${baseUrl}front/assets/images/001.png`} /> <Link href={`${baseUrl}dashboard/help/returns`}>Returns</Link> /{" "}
            <span>Return Policy Concerns or Suggestions?</span>
          </h2>
          <div className="listi_content_390">
            <h3 className="light_bg">How can I save my return settings?</h3>
            <p>
              Streamline your return process with our Enhanced Return Setting!
              Add rules effortlessly via the "Add Rule" button in settings. Once
              added, rules shift left under the description for clarity.
              Required rules remain locked until a replacement is set, ensuring
              seamless control. Upgrade your return management today!
            </p>
            <h3 className="light_bg"> How can I communicate with customers?</h3>
            <p>
              Effortlessly manage customer communications with the Message
              Center Dashboard in Sellora Seller Center! View customer emails,
              select "Contact Customer," and input the Order ID and item
              (required). Ensure all communication is order-related,
              professional, and courteous. Discard unneeded drafts with ease.
            </p>
            <h3 className="light_bg">
              {" "}
              A return was initiated, but I haven't received my item. What
              should I do?
            </h3>
            <p>
              Resolve return issues effortlessly with Seller Support in Returns!
              For disputes, find the return in Completed Returns using Order ID
              # or RMA #, then click "Dispute this Return." Submit within 7 days
              with evidence for prompt review by the Sellora Support team.
            </p>
            <p>
              Note for B2B Orders: Sellora advises against initiating refunds
              for B2B orders without first receiving the returned item. Once the
              item is received, refunds can be processed for the buyer. Please
              note that Sellora does not provide reimbursements for B2B
              transactions. We encourage you to streamline your dispute
              resolution process.
            </p>
            <h3 className="light_bg">
              Why do I see return shipping fees on my payment report?
            </h3>
            <p>
              Fees apply for Sellora Return service. Charges based on rate card
              in Seller Center, using higher of actual or dimensional weight.
              Rates may adjust post-shipment, with 10 days’ notice
            </p>
            <h3 className="light_bg">
              What is the Sellora Marketplace return policy?
            </h3>
            <p>
              Sellers must meet minimum return policy standards. See Sellora
              Returns Policy.
            </p>
            <h3 className="light_bg">How do I update my return address?</h3>
            <p>
              Go to Settings &gt; Returns Setting, select Add Return address or
              edit via pencil icon, then Save.
            </p>
            <h3 className="light_bg">
              Can Sellora send email notifications for return labels?
            </h3>
            <p>
              No notifications available. Download return records from Return
              Dashboard under Return &gt; Download.
            </p>
            <h3 className="light_bg">Can I charge restocking fees?</h3>
            <p>No, except for items with Return Exemptions.</p>
            <h3 className="light_bg">
              Can I charge customers a return shipping fee?
            </h3>
            <p>No.</p>
            <h3 className="light_bg">
              Can a Return Be Initiated Outside the Return Policy?
            </h3>
            <p>
              Returns cannot be initiated outside the Sellora Returns Policy.
            </p>
          </div>
        </div>
      </div>
      
      <RightSideBar />
    </div>
  </div>
</div>

  )
}

export default page