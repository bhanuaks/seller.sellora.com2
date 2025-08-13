'use client'
import React, { useEffect, useState } from 'react'
import LeftSideBar from '../LeftSideBar';
import LeftMobileSideBar from '../LeftMobileSideBar';
import SearchBox from '../SearchBox';
import { baseUrl } from '@/Http/helper';
import { usePathname } from 'next/navigation';
import { initAccordion } from '../menuListeners';
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
              <Link href={`${baseUrl}dashboard/help-center/featured-guides`}>Feautured Guides</Link>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Tax classification and documentation
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
              <Link href={`${baseUrl}dashboard/help-center/featured-guides`}>Feautured Guides</Link>{" "}
            </li>
            <li>
              <a href="#" className="active_002">
                Tax classification and documentation
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
  <h2>Tax classification and documentation</h2>
  <h3>In this guide</h3>
  <ul className="clean-decorative-list">
    <li>Overview</li>
    <li>How does it work?</li>
    <li>Additional Guidelines</li>
    <li>Frequently asked questions</li>
  </ul>
  <div className="section-box">
    <h3>Overview</h3>
    <p>
      If you plan to sell on the U.S. Marketplace through Sellora, you are
      required to submit a valid Business Tax Identification Number (TIN) or
      Business License Number, along with supporting documentation to verify
      your company’s legal status. These requirements help ensure compliance
      with U.S. tax regulations and confirm your eligibility to operate as a
      business entity. The specific documentation needed may vary depending on
      your country of incorporation, so it’s important to review the guidelines
      carefully. Failure to provide accurate and complete tax information may
      result in restrictions on your account or the inability to list products
      on the U.S. Marketplace.
    </p>
  </div>
  <h3>W-9</h3>
  <p>
    If you are a U.S.-based seller and your country of incorporation is the
    United States, your tax classification falls under W-9. You are required to
    provide a valid Employer Identification Number (EIN) as part of your tax
    documentation. In some cases, Sellora may request additional supporting
    documents such as a copy of IRS Form CP575, 147C, or CP148B to verify your
    EIN. If you do not currently have a U.S. Business Tax ID, you can apply for
    one through the IRS website to meet the requirements for selling on the U.S.
    Marketplace.
  </p>
  <h3>W-8ECI</h3>
  <p>
    If your business is incorporated outside the United States but you have a
    valid U.S. Employer Identification Number (EIN), your tax classification is
    W-8ECI. For countries of incorporation (COIs) that are supported, you can
    complete onboarding by entering your local tax ID details in the Business
    Verification section. However, for certain COIs where local tax IDs are not
    accepted, you may be required to provide a U.S. Tax ID to successfully set
    up your account. It's important to check whether your country is supported
    and ensure that all required documentation is submitted accurately to avoid
    delays in account verification.
  </p>
  <h3>W-8BEN</h3>
  <p>
    The W-8BEN tax classification is supported only for sole proprietors from
    Mexico or India—individuals who own and operate an unincorporated business
    on their own. If you fall under this classification, you must provide your
    personal tax identification details during the onboarding process. Please
    note that if you are a sole proprietor from Mexico, you are only eligible to
    onboard and sell on the Mexico Marketplace. This classification is not
    applicable for incorporated entities or businesses with multiple owners.
  </p>
  <h3>Additional guidelines</h3>
  <p>
    To successfully set up your Sellora seller account, you must provide
    accurate tax information for your business based on your selected country of
    incorporation. In addition, you are required to submit a personal ID of the
    applicant or legal representative, your business address, legal business
    name, and business phone number. These details are essential for verifying
    your identity and business legitimacy. The table above outlines the specific
    documentation required for sellers classified under W-8BEN-E and W-8BEN,
    based on their country of incorporation. Providing complete and correct
    documentation helps ensure a smooth and timely verification process.
  </p>
  <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>Country of Incorporation</th>
          <th>Required documents</th>
        </tr>
      </thead>
      <tbody>
        <tr className="highlighted">
          <td data-label="Country of Incorporation">Canada</td>
          <td data-label="Required Documents">
            <ul>
              <li>
                Notice of Assessment (NOA), Articles of Incorporation (AOI),
                Articles of Amalgamation, or Notice of Registration (Québec
                only).
              </li>
              <li>
                Utility bill or bank statement (within the last 6 months).
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td data-label="Country of Incorporation">Chile</td>
          <td data-label="Required Documents">
            <ul>
              <li>Rol Único Tributario (RUT) Certificate.</li>
              <li>
                Utility bill or bank statement (within the last 6 months).
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td data-label="Country of Incorporation">China</td>
          <td data-label="Required Documents">
            <ul>
              <li>Colored business license (stamped with company chop).</li>
              <li>
                Letter of Authorization (signed by Legal Representative,
                stamped).
              </li>
              <li>Colored ID of Business Legal Representative (stamped).</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td data-label="Country of Incorporation">Germany</td>
          <td data-label="Required Documents">
            <ul>
              <li>Certificate of Commercial Registration.</li>
              <li>
                Utility bill or bank statement (within the last 6 months).
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td data-label="Country of Incorporation">Hong Kong</td>
          <td data-label="Required Documents">
            <ul>
              <li>Business Registration Certificate (stamped).</li>
              <li>Certification of Incorporation (stamped).</li>
              <li>Letter of Authorization (signed by Director, stamped).</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td data-label="Country of Incorporation">
            India (excluding sole proprietors).
          </td>
          <td data-label="Required Documents">
            <ul>
              <li>GST Registration Certificate (mandatory).</li>
              <li>
                Utility bill or bank statement with address (within 6 months).
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td data-label="Country of Incorporation">
            India (sole proprietors only).
          </td>
          <td data-label="Required Documents">
            <ul>
              <li>
                For rental property: Rental Agreement + No Objection Certificate
                (NOC).
              </li>
              <li>For owned property: Utility bill (less than 90 days old).</li>
              <li>MSME Certificate.</li>
              <li>Shop and Establishment License.</li>
              <li>GSTIN Certificate.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td data-label="Country of Incorporation">Japan</td>
          <td data-label="Required Documents">
            <ul>
              <li>Certificate of All Present Matters.</li>
              <li>
                Utility bill or bank statement (within the last 6 months).
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td data-label="Country of Incorporation">Mexico</td>
          <td data-label="Required Documents">
            <ul>
              <li>
                Tax Identification Card (Cédula de Identificación Fiscal).
              </li>
              <li>Articles of Incorporation.</li>
              <li>
                Utility bill or bank statement (within the last 3 months).
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td data-label="Country of Incorporation">Mexico - Individuals</td>
          <td data-label="Required Documents">
            <ul>
              <li>
                Taxpayer Identification Card (Constancia de situación Fiscal).
              </li>
              <li>
                Utility bill or bank statement (within the last 3 months).
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td data-label="Country of Incorporation">Singapore</td>
          <td data-label="Required Documents">
            <ul>
              <li>Certificate of Registration/Incorporation from ACRA.</li>
              <li>
                Utility bill or bank statement (within the last 6 months).
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td data-label="Country of Incorporation">South Korea</td>
          <td data-label="Required Documents">
            <ul>
              <li>
                Business Registration Certificate from the National Tax Service.
              </li>
              <li>
                Utility bill or bank statement (within the last 6 months).
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td data-label="Country of Incorporation">Taiwan</td>
          <td data-label="Required Documents">
            <ul>
              <li>Business Registration Certificate.</li>
              <li>
                Personal ID card of legal representative (color, front and
                back).
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td data-label="Country of Incorporation">Thailand</td>
          <td data-label="Required Documents">
            <ul>
              <li>Thailand Tax Identification Number (TH-TIN).</li>
              <li>
                Utility bill or bank statement (within the last 6 months).
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td data-label="Country of Incorporation">Turkey</td>
          <td data-label="Required Documents">
            <ul>
              <li>
                Trade Certificate of Registry (Ticaret Sicil Tasdiknamesi) or
                Certificate of Activity (Faaliyet Belgesi).
              </li>
              <li>Tax Registration Certificate.</li>
              <li>
                Utility bill or bank statement (within the last 6 months).
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td data-label="Country of Incorporation">
            United Kingdom of Great Britain and Northern Ireland
          </td>
          <td data-label="Required Documents">
            <ul>
              <li>Certificate of Incorporation.</li>
              <li>
                Utility bill or bank statement (within the last 6 months).
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td data-label="Country of Incorporation">Vietnam</td>
          <td data-label="Required Documents">
            <ul>
              <li>Certificate of Enterprise Registration.</li>
              <li>
                Utility bill or bank statement (within the last 6 months).
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="notes_11">
    <h3>Notes</h3>
    <p>
      Sellers based in China must provide the full details of their business’s
      Legal Representative to complete the verification process. This includes
      the name, personal identification information, and a valid phone number of
      the Legal Representative. These details are required in addition to the
      standard documentation, such as the stamped business license,
      authorization letter, and the Legal Representative’s stamped ID. Accurate
      and complete information ensures successful onboarding and compliance with
      Sellora’s verification standards.
    </p>
  </div>
  <h2>Frequently asked questions</h2>
  <div className="faq-container">
    <div className="accordion-item">
      <div className="accordion-header">
        <span>
          I accidentally provided incorrect business information and my business
          verification failed. Can I re-submit?
        </span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Yes, you can re-submit your business information if your verification
          initially failed. Make sure that all details—such as your legal
          business name, tax ID, and address—are entered exactly as they appear
          in your IRS records or other official government-issued documents. If
          your application status remains marked as "Failed" after resubmitting,
          it means that Sellora has determined your business does not currently
          meet the requirements to sell on the Sellora Marketplace.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How long does the business verification take?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          Business verification on Sellora typically takes anywhere from a few
          minutes up to two business days. The exact duration may vary depending
          on the accuracy of the information provided and the country of
          incorporation. To avoid delays, ensure that all submitted documents
          and business details are complete and match official government
          records.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>Why is the business verification title saying “Failed”?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          The “Failed” status appears when Sellora is unable to verify the
          business information you submitted. This can happen due to mismatches
          between your entries and official records, missing documents, or
          incorrect details. To resolve this, carefully review your business
          information and resubmit it with accurate and complete documentation.
          If the issue persists or you need assistance, click the Help button in
          the Seller Center menu bar to contact Sellora Support.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>I need to update my tax details. How do I do that?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          To update or manage your tax details on Sellora, go to the Seller
          Center and navigate to Update Tax Information. Make sure to enter your
          updated information exactly as it appears in your official government
          records to avoid verification issues.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How often do I need to renew my documentation?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          W-9 forms do not expire and do not need to be renewed unless your
          business information changes. However, if you're classified under
          W-8ECI or W-8BEN-E, your documentation must be renewed every three
          years to remain compliant with U.S. tax regulations and maintain your
          eligibility to sell on the Sellora Marketplace.
        </p>
      </div>
    </div>
    <div className="accordion-item">
      <div className="accordion-header">
        <span>How can I add a market?</span>
        <span className="accordion-arrow">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
      <div className="accordion-content">
        <p>
          To add a new market on Sellora, go to the Seller Center homepage and
          click on the U.S. flag icon at the top of the page. From there, select
          the market you want to begin selling in. Follow the on-screen
          instructions to complete the account setup for that market. For
          detailed guidance, refer to the step-by-step tutorial in “Global
          Onboarding: Set up an additional market.”
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