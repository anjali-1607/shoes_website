import React from "react";
import "./styles/MyCart.css";
import Navbar from "../commons/Navbar";

export default function MyCart({ name, image, price, rating, desc }) {
  return (
    <>
      <Navbar />
      <div className="desc_grand">
        <div className="item_div"></div>
        <div className="price_div"></div>

        {/* <div className="product_img">
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
          <button className="btn_cartt">Add to cart</button>
          <button className="btn_buyy">Buy Now</button>
        </div> */}
      </div>
    </>
  );
}
