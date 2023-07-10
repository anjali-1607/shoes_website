import React from "react";

export default function MenCards({ name, image, price, rating }) {
  return (
    <>
      <div>
        <div className="card">
          <div className="img_div">
            <img src={image} />
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
