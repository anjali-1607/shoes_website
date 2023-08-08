import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/Description.css";

export default function Description({ name, image, price, rating, desc }) {
  const showToastMessage = () => {
    console.log("abc");
    toast.success("Successfully Added to Cart ", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  return (
    <>
      <ToastContainer />
      <div className="desc_grand">
        <div className="product_img">
          <img
            className="image_product"
            src={`http://localhost:1337${image}`}
          />
        </div>
        <div className="desc_div">
          <h1>{name}</h1>
          <h5>{price}</h5>
          <h5> {rating} </h5>
          <p>{desc}</p>
          <button
            className="btn_cartt"
            onClick={() => {
              showToastMessage();
            }}>
            Add to cart
          </button>

          <button className="btn_buyy">Buy Now</button>
        </div>
        <div></div>
      </div>
    </>
  );
}
