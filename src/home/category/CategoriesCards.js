import React from "react";
import "./Categories.css";

export default function CategoriesCards() {
  return (
    <>
      <div className="categories1">
        <div className="categories2">
          <img
            className="cat-img1"
            src={require("../../images/category.webp")}
          />

          <div className="new_arr_textt"> New Arrivals</div>
        </div>
        <div>
          <div className="categories2">
            <img
              className="cat-img1"
              src={require("../../images/menshoe.png")}
            />
          </div>
          <div className="new_arr_textt"> Men</div>
        </div>
        <div>
          <div className="categories2">
            <img
              className="cat-img1"
              src={require("../../images/womenshoe.jpg")}
            />
          </div>
          <div className="new_arr_textt"> Women</div>
        </div>
        <div>
          <div className="categories2">
            <img
              className="cat-img1"
              src={require("../../images/kidshoe.jpg")}
            />
          </div>
          <div className="new_arr_textt"> Kids</div>
        </div>
      </div>
    </>
  );
}
