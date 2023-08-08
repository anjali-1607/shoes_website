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
          <div className="myshoes">My Shoes</div>
          <div className="myaddress">From Saved Addresses</div>
          <div className="cart_product">
            <div>
              <img
                className="image_product"
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
            <div className="details_div">ADidas Black 600</div>
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
