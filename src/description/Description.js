import React, { useEffect, useState } from "react";
import Navbar from "../commons/Navbar";
import { useParams } from "react-router-dom";
import "./styles/Description.css";
import { publicAxios } from "../commons/auth";

export default function Description({ name, image, price, rating }) {
  return (
    <>
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
        </div>
      </div>
    </>
  );
}
