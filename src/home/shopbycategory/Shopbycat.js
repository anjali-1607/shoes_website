import React, { useState } from "react";
import "./Shopbycat.css";
import Mencat from "./Mencat";
import Womencat from "./Womencat";
import Kidscat from "./Kidscat";

export default function Shopbycat() {
  const [active, setActive] = useState("men");
  return (
    <>
      <div className="heading_text">SHOP BY CATEGORIES</div>
      <div className="shopbycat">
        <button
          className="filter"
          onClick={() => {
            setActive("men");
          }}>
          Men
        </button>
        <button
          className="filter"
          onClick={() => {
            setActive("women");
          }}>
          Women
        </button>
        <button
          className="filter"
          onClick={() => {
            setActive("kids");
          }}>
          Kids
        </button>
      </div>

      {active === "men" && <Mencat />}
      {active == "women" && <Womencat />}
      {active === "kids" && <Kidscat />}
    </>
  );
}
