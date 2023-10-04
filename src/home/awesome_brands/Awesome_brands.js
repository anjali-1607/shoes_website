import React from "react";
import "./Awesome.css";

export default function Awesome_brands() {
  return (
    <>
      <div className="heading_text">Awesome Brands</div>
      <div className="awesome_grand">
        <img
          className="awesome_logos"
          src={require("../../logo/balenciaga.png")}
        />
        <img className="awesome_logos" src={require("../../logo/puma.jpg")} />
        <img className="awesome_logos" src={require("../../logo/sparx.jpg")} />
        <img className="awesome_logos" src={require("../../logo/adidas.png")} />
        <img className="awesome_logos" src={require("../../logo/nike.webp")} />
      </div>
    </>
  );
}
