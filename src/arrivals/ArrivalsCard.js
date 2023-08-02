import React from "react";
import "./Arrivals.css";
import axios from "axios";

export default function ArrivalsCard({ name, image, price, rating }) {
  axios.get("https://shoes-collections.p.rapidapi.com/shoes/3");
  //

  return (
    <>
      <div>
        <div className="card">
          <div className="img_div">
            <img className="image" src={image} />
          </div>
          <h3
            style={{
              textAlign: "center",
              marginTop: " 5px",
              marginBottom: "-3px",
            }}>
            {name}
          </h3>
          <div className="desc">
            <h5 style={{ marginLeft: "10px" }}>
              <span style={{ marginRight: "80px" }}>Price-{price}</span>
              <span>Rating{rating}</span>
            </h5>
            <div className="btns">
              <button className="btn_cart">Add to cart</button>
              <button className="btn_buy">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
