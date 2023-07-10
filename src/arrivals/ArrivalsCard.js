import React from "react";
import "./Arrivals.css";
import ArrivalsData from "./ArrivalsData";
import { Button, Input, Menu } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

export default function ArrivalsCard({ name }) {
  const navigate = useNavigate();
  const gotohome = () => {
    navigate("/");
  };
  return (
    <>
      <div>
        <div className="card">
          <div className="img_div">
            <img src="https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg" />
          </div>
          <h3 style={{ textAlign: "center", marginTop: "5px" }}>{name}</h3>
          <div className="desc">
            <h4 style={{ marginLeft: "30px" }}>
              <span style={{ marginRight: "80px" }}>Price- ₹2500</span>
              <span>Rating-4/5</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
