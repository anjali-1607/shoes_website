import React, { useState } from "react";
import "./styles/MyCart.css";
import moment from "moment";

export default function CartCard({ name, image, price, rating, desc }) {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="cart_product">
        <div>
          <img
            className="images_product"
            src={`http://localhost:1337${image}`}></img>
          <div className="counter">
            {count >= 2 ? (
              <button
                className="btn_minus"
                onClick={() => {
                  setCount(count - 1);
                }}>
                -
              </button>
            ) : (
              <button
                disabled
                className="btn_minus"
                onClick={() => {
                  setCount(count - 1);
                }}>
                -
              </button>
            )}
            <div className="numbers">
              <h4>{count}</h4>
            </div>
            <button
              className="btn_plus"
              onClick={() => {
                setCount(count + 1);
              }}>
              +
            </button>
          </div>
        </div>
        <div className="details_div">
          <div
            style={{
              fontFamily: "Gill Sans, sans-serif",
              fontSize: "20px",
              marginBottom: "2px",
            }}>
            {name}
          </div>
          <div
            style={{
              fontFamily: "Gill Sans, sans-serif",
              fontSize: "14px",
              color: "#808080",
            }}>
            {desc}
          </div>
          <div
            style={{
              fontFamily: "Gill Sans, sans-serif",
              fontSize: "14px",
              color: "#808080",
              marginTop: "6px",
            }}>
            Seller
          </div>
          <div
            style={{
              fontFamily: "Gill Sans, sans-serif",
              fontSize: "18px",
              color: "black",
              marginTop: "8px",
            }}>
            ₹{price}
          </div>
          <div
            style={{
              fontFamily: "Gill Sans, sans-serif",
              fontSize: "18px",
              color: "black",
              marginTop: "22px",
              cursor: "pointer",
            }}>
            Remove
          </div>
        </div>
        <div className="delivery_div">
          Delivery by <b> {moment().add(4, "days").format("Do MMM YYYY")} </b>{" "}
        </div>
      </div>
    </>
  );
}
