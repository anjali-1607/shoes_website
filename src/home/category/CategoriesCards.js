import React from "react";
import "./Categories.css";

export default function CategoriesCards() {
  return (
    <>
      <div className="categories1">
        <div>
          <div className="categories2">
            <img
              className="cat-img1"
              src={require("../../images/cat_shoe.jpg")}
            />
          </div>
          New Arrivals
        </div>
        <div>
          <div className="categories2">
            <img
              className="cat-img1"
              src={require("../../images/menshoe.png")}
            />
          </div>
          Men
        </div>
        <div>
          <div className="categories2">
            <img
              className="cat-img1"
              src={require("../../images/womenshoe.jpg")}
            />
          </div>
          Women
        </div>
        <div>
          <div className="categories2">
            <img
              className="cat-img1"
              src={require("../../images/kidshoe.jpg")}
            />
          </div>
          Kids
        </div>
      </div>
    </>
  );
}
