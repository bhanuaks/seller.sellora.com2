import { baseUrl } from "@/Http/helper";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <div className="sellor_27_12" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="content_dashboar_6">
                <h2>
                  Join Sellora Unlock Your Potential and Reach Millions of
                  Customers!
                </h2>
                <p>
                  Enjoy 0% Commission &amp; fees for a limited time when you
                  join Sellora. Start selling without worrying about
                  subscription or commission charges.<span>T&amp;C*</span>
                </p>
                <div className="button_6dsfsd mb--30">
                  <Link href={`${baseUrl}seller/register`}>Start Selling</Link>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="input-group how_to_sell">
                <input
                  type="text"
                  className="form-control"
                  placeholder="How to Sell on Sellora"
                />
                <div className="input-group-append">
                  <button className="search" type="button">
                    Search
                  </button>
                </div>
              </div>
              <div className="sell_online_img">
                <img src={`${baseUrl}front/assets/images/learn.jpg`} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="details_page_outer mt--60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="learn">
                <h2 className="text-center">Seller's Guide</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="accordion-main-area-wrapper-style-1">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Why should I sell on Sellora?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Sellora is a trusted and growing e-commerce marketplace
                        designed to connect U.S. sellers with a diverse and
                        engaged audience across the United States. By joining
                        sellora.com, you gain access to a dynamic customer base
                        eager to explore new products. Our platform offers
                        innovative features like "Shop Together" and exclusive
                        shopping events to boost your visibility and drive
                        sales. With low operational costs and a user-friendly
                        interface, Sellora empowers sellers to expand their
                        reach within the U.S. market and grow their business
                        efficiently. Partner with us to elevate your brand and
                        increase your sales today!
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What is Sellora, and how does it benefit sellers?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Sellora, LLC is a trusted U.S.-based e-commerce
                        marketplace that connects sellers with millions of
                        American shoppers via sellora.com. Sellora offers a
                        user-friendly platform with innovative features like
                        "Shop Together" and exclusive shopping events,
                        empowering businesses to grow in the competitive U.S.
                        market.
                      </div>

                      <div className="accordion-body">Benefits for Sellers</div>

                      <div className="accordion-body">
                        Reach Millions of U.S. Customers: Access a large,
                        diverse audience to boost sales and brand visibility.
                      </div>
                      <div className="accordion-body">
                        Effective Marketing Tools: Use targeted promotions and
                        features like "Shop Together" to enhance product
                        discoverability.
                      </div>

                      <div className="accordion-body">
                        Low Costs: Benefit from competitive fees to maximize
                        profits with minimal overhead.
                      </div>

                      <div className="accordion-body">
                        Easy-to-Use Platform: Simplify selling with intuitive
                        tools for listing, inventory, and order management.
                      </div>
                    </div>
                  </div>
                  {/* <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> What is Sellora, and how does it benefit sellers? </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body"> Sign up for a seller account at the Sellora website and fill out the registration form with all your business information.
            Once your account is verified, you can start adding your products. </div>
        </div>
      </div> */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        What can I sell on Sellora?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Please note that you can sell anything from electronics
                        to apparel, home goods, cosmetics, and many more. Just
                        make sure that your products are complying with the
                        Sellora guidelines and policies.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Are there commissions or other fees for selling on
                        Sellora?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        There are listing fees, sales based commissions, and the
                        payment processing fees charged by Sellora. Always
                        review the fee structure on the Sellora platform when
                        getting started to learn what costs are involved.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        How does payment work for sellers?
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                      Payouts for sold products are securely processed
                        through Sellora's payment interface. After applicable
                        fees are deducted, your earnings will be transferred to
                        your bank account according to the specified
                        schedule.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseight"
                        aria-expanded="false"
                        aria-controls="collapseight"
                      >
                        How do I track my inventory and orders at Sellora?
                      </button>
                    </h2>
                    <div
                      id="collapseight"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Sellora will enable you to monitor your inventory
                        levels, orders, and update listings among customer
                        inquiry management from a user friendly dashboard.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collaps09"
                        aria-expanded="false"
                        aria-controls="collaps09"
                      >
                        How can I contact customer support?
                      </button>
                    </h2>
                    <div
                      id="collaps09"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Use the Help &amp; Support section in the Seller Panel
                        or email us at support@sellora.com.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collaps010"
                        aria-expanded="false"
                        aria-controls="collaps010"
                      >
                        What actions are necessary to take when the password is
                        misplaced?
                      </button>
                    </h2>
                    <div
                      id="collaps010"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        In the event that you lose your password, please click
                        on the link that states Forgot Password on the log in
                        page in order to be provided with help concerning the
                        steps that need to be taken to reset the password
                        through email.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collaps011"
                        aria-expanded="false"
                        aria-controls="collaps011"
                      >
                        How do I handle my product listings?
                      </button>
                    </h2>
                    <div
                      id="collaps011"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        You can manage your product listings through your seller
                        dashboard, where you can add new products, edit existing
                        listings, and track inventory levels.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collaps012"
                        aria-expanded="false"
                        aria-controls="collaps012"
                      >
                        How can I check my account health?
                      </button>
                    </h2>
                    <div
                      id="collaps012"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Go to the Performance Dashboard in your Seller Panel to
                        view your account health metrics.
                      </div>
                    </div>
                  </div>
                  <div className="view_all_answer">
                    <Link href="#">View All Answers</Link>
                  </div>
                  <div className="col-lg-12">
                    <div className="learn">
                      <h2 className="text-center orange_color">
                        Selling Costs
                      </h2>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseNine"
                        aria-expanded="true"
                        aria-controls="collapseNine"
                      >
                        What expenses must I be aware of when selling in
                        Sellora?
                      </button>
                    </h2>
                    <div
                      id="collapseNine"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Basic expenses consist of your products listing fee,
                        sales commission, and payment transaction fees.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTen"
                        aria-expanded="false"
                        aria-controls="collapseTen"
                      >
                        Is there a subscription fee for sellers?
                      </button>
                    </h2>
                    <div
                      id="collapseTen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Sellora, allows all U.S. sellers to join and sell on
                        sellora.com completely free of any subscription fees.
                        There are no monthly or recurring charges, making it an
                        accessible and cost-effective platform for businesses of
                        all sizes. Sellers only incur transaction-related costs,
                        such as commissions or fees per sale, ensuring
                        affordability and flexibility.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse0selling_cost1"
                        aria-expanded="false"
                        aria-controls="collapse0selling_cost1"
                      >
                        Are there any hidden costs to be worry of?
                      </button>
                    </h2>
                    <div
                      id="collapse0selling_cost1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {/* While strive towards transparency, you will need to note
                        some advertising and promotional fees, as well as
                        possible costs for other related services. */}
                        We're committed to transparency, so while you take advantage of
                          our services, please note that while there is no subscription fee,
                          there may be some advertising and promotional fees, along with
                          possible costs for other related services, to help boost your
                          success.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse0selling_cost2"
                        aria-expanded="false"
                        aria-controls="collapse0selling_cost2"
                      >
                        Are there any charges for creating an account on
                        Sellora?
                      </button>
                    </h2>
                    <div
                      id="collapse0selling_cost2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {/* No, creating a seller account on Sellora is completely
                        free. */}
                        "In our commitment to transparency, please be advised that while
there is no subscription fee, there may be advertising and
promotional fees, as well as potential costs for other related
services.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse0selling_cost3"
                        aria-expanded="false"
                        aria-controls="collapse0selling_cost3"
                      >
                        Do I have to pay for advertising my products?
                      </button>
                    </h2>
                    <div
                      id="collapse0selling_cost3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Yes, advertising costs are optional. You can set a
                        budget for sponsored ads or promotions to increase
                        product visibility.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse0selling_cost4"
                        aria-expanded="false"
                        aria-controls="collapse0selling_cost4"
                      >
                        How can I promote my products effectively on Sellora?
                      </button>
                    </h2>
                    <div
                      id="collapse0selling_cost4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Yes, advertising costs are optional. You can set a
                        budget for sponsored ads or promotions to increase
                        product visibility.
                      </div>
                    </div>
                  </div>
                  <div className="view_all_answer">
                    <Link href="#">View All Answer</Link>
                  </div>
                  {/* 27-12-24 */}
                  <div className="col-lg-12">
                    <div className="learn">
                      <h2 className="text-center orange_color">
                        Advertisement{" "}
                      </h2>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseadvertisement1"
                        aria-expanded="true"
                        aria-controls="collapseadvertisement1"
                      >
                        How can I promote my products effectively on Sellora?
                      </button>
                    </h2>
                    <div
                      id="collapseadvertisement1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Sellers may look for tips on how to create compelling
                        advertisements, including writing engaging ad copy,
                        choosing the right images, and targeting the right
                        audience to drive traffic to their listings.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseadvertisement2"
                        aria-expanded="false"
                        aria-controls="collapseadvertisement2"
                      >
                        What advertising options are available on Sellora?
                      </button>
                    </h2>
                    <div
                      id="collapseadvertisement2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Sellers want to know the different types of advertising
                        available on Sellora, such as sponsored product ads,
                        display ads and how each option can benefit their
                        business.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseadvertisement3"
                        aria-expanded="false"
                        aria-controls="collapseadvertisement3"
                      >
                        How do I set a budget for advertising on Sellora?
                      </button>
                    </h2>
                    <div
                      id="collapseadvertisement3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Sellers may search for advice on how to set a reasonable
                        ad budget, considering their product margins,
                        marketplace fees, and expected return on investment
                        (ROI)
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseadvertisement4"
                        aria-expanded="false"
                        aria-controls="collapseadvertisement4"
                      >
                        How do I track the performance of my ads on Sellora?
                      </button>
                    </h2>
                    <div
                      id="collapseadvertisement4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Sellers search for ways to monitor their advertising
                        campaigns performance, including metrics like
                        impressions, clicks, conversion rates, and overall sales
                        generated from ads.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseadvertisement5"
                        aria-expanded="false"
                        aria-controls="collapseadvertisement5"
                      >
                        How do I increase my product visibility through paid
                        promotions on Sellora?
                      </button>
                    </h2>
                    <div
                      id="collapseadvertisement5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Sellers often want to know how paid ads can increase
                        their products visibility on the marketplace, making
                        their listings appear higher in search results and
                        increasing the chances of being discovered by potential
                        buyers.
                      </div>
                    </div>
                  </div>
                  <div className="view_all_answer">
                    <Link href="#">View All Answer</Link>
                  </div>
                  {/* ===========================3rd===============section */}
                  <div className="col-lg-12">
                    <div className="learn">
                      <h2 className="text-center orange_color">
                        Return and Refund
                      </h2>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThirteen"
                        aria-expanded="true"
                        aria-controls="collapseThirteen"
                      >
                        What is Sellora's return policy for sellers?
                      </button>
                    </h2>
                    <div
                      id="collapseThirteen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Sellora provides a return policy that sellers must
                        follow. The platform generally allows customers to
                        return products within a set period (30 days), and
                        sellers are required to accept returns for defective or
                        incorrectly described items. Sellers should review and
                        understand Sellora's return guidelines to ensure
                        compliance and avoid penalties.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFourteen"
                        aria-expanded="false"
                        aria-controls="collapseFourteen"
                      >
                        Who pays for return shipping costs on Sellora?
                      </button>
                    </h2>
                    <div
                      id="collapseFourteen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Return shipping costs typically depend on the reason for
                        the return
                        <ul>
                          <li>
                            If the return is due to an error on the seller's
                            part (e.g., the wrong product was sent, or the item
                            is defective), the seller is usually responsible for
                            the return shipping cost.
                          </li>
                          {/* <li>
                            N If the return is due to buyer s remorse, the buyer
                            may be responsible for the return shipping cost, but
                            this depends on the seller s return policy.
                          </li> */}

                          <li>
                            In the case of any issue that is not related to an error on the seller's behalf, 
                            the buyer me be responsible for return shipping costs; however, this is subject to the seller's return policy.
                          </li>


                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFifteen"
                        aria-expanded="false"
                        aria-controls="collapseFifteen"
                      >
                        How do I handle a refund request on Sellora?
                      </button>
                    </h2>
                    <div
                      id="collapseFifteen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        To handle a refund request on Sellora, follow these
                        steps:
                        <ul className="list_457">
                          <li>
                            Review the return reason: Verify if the request
                            meets the conditions for a refund under Sellora's
                            policy.
                          </li>
                          <li>
                            Approve the refund: Once the return request is
                            verified, approve the refund in the seller
                            dashboard.
                          </li>
                          <li>
                            Process the refund: Refund the buyer through the
                            payment method used during the original transaction.
                          </li>
                          <li>
                            Notify the buyer: Inform the buyer when the refund
                            has been processed and any next steps (e.g., the
                            return shipping).
                          </li>
                        </ul>
                        If the return is valid, it's essential to process refunds
                        quickly to maintain positive customer feedback and avoid
                        disputes.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse16"
                        aria-expanded="false"
                        aria-controls="collapse16"
                      >
                        How do I process a return on Sellora?
                      </button>
                    </h2>
                    <div
                      id="collapse16"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        To process a return, review the return request,
                        communicate with the customer, and either approve a
                        refund or exchange, depending on return policy.
                        <p />
                      </div>
                    </div>
                  </div>
                  <div className="view_all_answer">
                    <Link href="#">View All Answer</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mb--50">
        <div className="row">
          <div className="col-lg-8">
            <div className="expan_mmmm">
              <p>
                Expand your wholesale business with Sellora connecting you with
                buyers and increases sales in both B2B and B2C markets
              </p>
              <div className="start_mmmm">
                <Link href={`${baseUrl}seller/register`}>Start Selling</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="wholesale">
              <img src={`${baseUrl}front/assets/images/wholesale_trolly.jpg`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
