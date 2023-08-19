import React, { useEffect } from "react";
import "./Arrivals.css";
import { publicAxios } from "../commons/auth";
import { ToastContainer } from "react-toastify";
import ArrivalsBtn from "./ArrivalsBtn";
import { useNavigate } from "react-router-dom";

export default function ArrivalsCard({ name, image, price, id, salePrice }) {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="grand_product_div">
          <div
            className="parent_arr_div"
            onClick={() => {
              navigate(`/product-details/${id}`);
            }}>
            <div className="img_div">
              <img
                className="product__image"
                src={`http://localhost:8055/assets/${image}`}
              />
            </div>
            <div className="pro_data">
              <div className="name_arr_div">{name} </div>
              <div style={{ display: "flex" }}>
                {" "}
                <div className="price_arr_div"> ₹{salePrice}</div>
                <div className="saleprice_arr_div"> ₹{price} </div>
              </div>
            </div>
          </div>
          <ArrivalsBtn id={id} />
        </div>
      </div>
    </>
  );
}
