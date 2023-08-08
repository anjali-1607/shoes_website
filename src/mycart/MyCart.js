import React, { useState } from "react";
import "./styles/MyCart.css";
import Navbar from "../commons/Navbar";

export default function MyCart({ name, image, price, rating, desc }) {
  const [count, setCount] = useState(1);
  return (
    <>
      <Navbar />
      <div className="desc_grand">
        <div className="item_div">
          <div className="myshoes">
            {" "}
            <h3>My Shoes</h3>{" "}
          </div>
          <div className="second_div">
            <div className="myaddress">From Saved Addresses</div>
            <button className="pincode_btn">Enter Delievery Pincode</button>
          </div>
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
                Adidas
              </div>
              <div
                style={{
                  fontFamily: "Gill Sans, sans-serif",
                  fontSize: "14px",
                  color: "#808080",
                }}>
                Lorem nshfu dushfu ighdug ufhg 9us drftyejhn ujrfighsd{" "}
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
                ₹600
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
            <div className="delivery_div">Delivery by Sat Aug 12 | Free</div>
          </div>
        </div>
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
