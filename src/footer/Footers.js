import React from "react";
import "./Footer.css";

export default function Footers() {
  return (
    <>
      <div className="grand_footer">
        <div>
          {" "}
          <h4> Accepted Payments</h4>
          <p>VISA</p>
          <p>Amazon Pay</p>
          <p>Google Pay</p>
          <p>Stripe</p>
        </div>
        <div>
          {" "}
          <h4>Services </h4>
          <p>Gift Card</p>
          <p>Mobile App</p>
          <p>Shipping & Delievery</p>
          <p>Order Pick up</p>
          <p>Account Signup</p>
        </div>
        <div>
          {" "}
          <h4>Helps </h4>
          <p>ShopCart Help</p>
          <p>Returns</p>
          <p>Track Orders</p>
          <p>Contact us</p>
          <p>Feedback</p>
          <p>Security & Fraud</p>
        </div>
      </div>
    </>
  );
}
