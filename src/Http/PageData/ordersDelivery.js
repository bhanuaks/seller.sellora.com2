
export const ordersDeliveryFaq = [
   {
    question: 'Order Alerts',
    answer: (
      <>
       <h2>How do I set up order notifications?</h2>
                  <ul>
                    <li>
                      In Sellora Seller Center, select Notifications &gt; Settings.
                    </li>
                    <li>
                      Choose notifications via Seller Center, email, or both.
                    </li>
                    <li>Check boxes for desired notification types.</li>
                    <li>Greyed-out options cannot be modified.</li>
                    <li>
                      Click Save. Email notifications use your Sellora Seller
                      Center login email.
                    </li>
                  </ul>
      </>
    ),
  },
  {
    question: 'Unable to Cancel Order',
    answer: (
      <>
         <h2>How do I cancel an order?</h2>
                  <ul>
                    <li>
                      Go to the Order Management Dashboard in the Sellora Seller
                      Center.
                    </li>
                    <li>Select the orders you wish to cancel.</li>
                    <li>
                      Choose the appropriate cancellation reason from the list
                      below:
                    </li>
                    <li>Customer Changed Mind</li>
                    <li>Pricing Error</li>
                    <li>Out of Stock</li>
                    <li>Fraud – Stop Shipment</li>
                    <li>Address is Not Serviceable</li>
                    <li>Click Submit to confirm the cancellation.</li>
                  </ul>
                  <h2>
                    What do I do if a customer requests order cancellation?
                  </h2>
                  <ul>
                    <li>
                      If unshipped, cancel via Order Management Dashboard:
                    </li>
                    <li>Search by Order Id #.</li>
                    <li>Click three dots, select Cancel.</li>
                    <li>Choose Customer request for cancellation.</li>
                    <li>Click cancel order.</li>
                  </ul>
                  <h2>Will an auto-cancelled order impact my performance?</h2>
                  <ul>
                    <li>
                      Yes, auto-cancelled orders negatively affect performance
                      metrics and sellora will charge you cancellation charges.
                    </li>
                  </ul>
                  <h2>Why was my order canceled?</h2>
                  <ul>
                    <li>
                      Orders auto-cancel if valid tracking isn’t provided by the
                      3rd day after Expected Ship Date (ESD). Ship and add
                      tracking by ESD to avoid this
                    </li>
                  </ul>
                  <h2>What is the expected ship date?</h2>
                  <ul>
                    <li>
                      Expected Ship Date (ESD) refers to the date by which the
                      seller must ship the order. For more details, please refer
                      to our Shipping Methods & Timing Policy.
                    </li>
                  </ul>
                  <h2>Can I reverse-cancel an order?</h2>
                  <ul>
                    <li>No, cancellations are final and cannot be reversed.</li>
                  </ul>
                  <h2>Can a customer change their payment information?</h2>
                  <ul>
                    <li>
                      No, payment info can’t be changed post-order. Customers
                      should cancel and reorder.
                    </li>
                  </ul>
                  <h2>Can I cancel an order marked as shipped?</h2>
                  <ul>
                    <li>
                      No, shipped orders cannot be canceled. If the order has
                      not yet been shipped, you may cancel it, but cancellation
                      charges will apply
                    </li>
                  </ul>
                  <h2>
                    What if I get an auto-cancellation warning after shipping
                    with valid tracking?
                  </h2>
                  <ul>
                    <li>
                      Contact Seller Support to report the issue with tracking
                      details.
                    </li>
                  </ul>
      </>
    ),
  },
  {
    question: 'Issue Acknowledging New Orders',
    answer: (
      <>
          <h2>Why was my delivery service rejected?</h2>

                  <p>
                    To ensure smooth tracking and delivery, please use one of
                    the preferred carriers listed in our 'Provide Valid Tracking
                    Numbers' policy—FedEx, UPS, USPS, DHL, OnTrac, or Lasership.
                    If you're using a non-preferred carrier, select
                    'OtherCarrier' in the Sellora Seller Center when entering
                    tracking information.
                  </p>

                  <h2>How do I update the shipping address on my order?</h2>
                  <p>
                    Shipping address changes are not allowed. Cancel the order
                    and instruct the customer to reorder.
                  </p>

                  <h2>What does an "Acknowledge" status mean?</h2>
                  <p>
                    Acknowledged status means you’ve confirmed receipt of the
                    order in Sellora Seller Center.
                  </p>
      </>
    ),
  },
  {
    question: 'Unable to update tracking information',
    answer: (
      <>
         <h2>How do I update tracking information?</h2>
                  <ul>
                    <li>
                      Go to the Orders Dashboard in the Sellora Seller Center.
                    </li>
                    <li>
                      Click on the Unshipped Orders tab or search by Order ID.
                    </li>
                    <li>
                      Select the relevant Unshipped Order ID to view order
                      details.
                    </li>
                    <li>Click Confirm Order under the "Actions" section.</li>
                    <li>Enter the Shipping Details.</li>
                    <li>Update the Shipping Carrier and Tracking Number.</li>
                    <li>Click Save to complete the process.</li>
                  </ul>
      </>
    ),
  },
  
];