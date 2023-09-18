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
            {/* <img src={require("../images/Desktop - 2.png")} /> */}
          </div>
          Men
        </div>
        <div>
          <div className="categories2"></div>
          Women
        </div>
        <div>
          <div className="categories2"></div>
          Kids
        </div>
      </div>
    </>
  );
}
