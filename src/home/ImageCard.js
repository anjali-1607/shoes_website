import React from "react";
import "./styles/home.css";

export default function ImageCard() {
  return (
    <>
      <div className="grand_carousel">
        <img className="carousel_image" src={require("../images/canva1.png")} />
      </div>
    </>
  );
}
