import React from "react";
import "./styles/Card.css";
import Card_data from "./Card_data";

export default function Card({ apple, mango }) {
  // console.log(apple);
  // console.log(mango);
  return (
    <>
      <div className="card11">
        <img className="images" src={mango} />
        {/* <h1 style={{ fontFamily: "Cinzel,sans-serif" }}>{apple}</h1> */}
        <div className="texttt">{apple}</div>
      </div>
      {/* <div className="card_div">
        <div className="image_div">
          <img className="images" src={mango} />
        </div>
        <div className="card_name_div">
          {" "}
          <h1 style={{ fontFamily: "Cinzel,sans-serif" }}>{apple}</h1>
        </div>
      </div> */}
    </>
  );
}
