import React, { useState } from "react";
import "./styles/MyCart.css";
import moment from "moment";
import { secureAxios } from "../commons/auth";
import { ToastContainer, toast } from "react-toastify";

export default function CartCard({
  name,
  image,
  price,
  desc,
  product_cart_id,
  counter,
}) {
  const [count, setCount] = useState(1);
  console.log(count);
  counter(count);

  const showToastMessage = () => {
    toast.error("Successfully Removed from Cart ", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  const onRemove = async (id) => {
    await secureAxios
      .delete(`/items/products_directus_users/${id}`)
      .then((res) => {
        console.log(res);
        showToastMessage();
      });
  };
  return (
    <>
      <ToastContainer />
      <div className="cart_product">
        <div>
          <img
            className="images_product"
            src={`http://localhost:8055/assets/${image}`}></img>
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
          <div>
            <button
              className="btn_removed_cart"
              onClick={() => {
                onRemove(product_cart_id);
              }}>
              {" "}
              Remove
            </button>
          </div>
        </div>
        <div className="delivery_div">
          Delivery by <b> {moment().add(4, "days").format("Do MMM YYYY")} </b>{" "}
        </div>
      </div>
    </>
  );
}
