import React, { useEffect } from "react";
import "./Arrivals.css";
import axios from "axios";
import Description from "../description/Description";
import { useNavigate } from "react-router-dom";

export default function ArrivalsCard({ name, image, price, rating }) {
  return (
    <>
      <div style={{ margin: "0.5em" }}>
        <div className="card">
          <div className="img_div">
            <img className="image" src={`http://localhost:1337${image}`} />
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
              <span>Size-{rating}</span>
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
