import React from "react";
import "./Arrivals.css";
import ArrivalsData from "./ArrivalsData";
import { Button, Input, Menu } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

export default function ArrivalsCard({ name, image, price, rating }) {
  const navigate = useNavigate();
  const gotohome = () => {
    navigate("/");
  };
  return (
    <>
      <div>
        <div className="card">
          <div className="img_div">
            <img className="image" src={image} />
          </div>
          <h3 style={{ textAlign: "center", marginTop: "5px" }}>{name}</h3>
          <div className="desc">
            <h4 style={{ marginLeft: "30px" }}>
              <span style={{ marginRight: "80px" }}>Price-{price}</span>
              <span>Rating{rating}</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
