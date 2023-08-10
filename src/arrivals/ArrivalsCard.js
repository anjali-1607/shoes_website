import React, { useEffect } from "react";
import "./Arrivals.css";
import axios from "axios";
import Description from "../description/Description";
import { useNavigate } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

export default function ArrivalsCard({ name, image, price, size }) {
  return (
    <>
      <div>
        <div className="grand_product_div">
          <div className="img_div">
            <img
              className="product__image"
              src={`http://localhost:1337${image}`}
            />
          </div>
          <div className="pro_data">
            <div className="name_arr_div">{name} </div>
            <div className="price_arr_div">₹{price} </div>
            <div className="button_arr">
              <button className="cart_arr_btn">Add to Cart</button>
              <button className="buy_arr_btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* <div style={{ margin: "0.5em" }}>
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
      </div> */}
    </>
  );
}
