import React from "react";
import "./Categories.css";
import { useNavigate } from "react-router-dom";

export default function CategoriesCards() {
  const navigate = useNavigate();
  return (
    <>
      <div className="categories1">
        <div className="categories2">
          <img
            onClick={() => {
              navigate("/arrivals");
            }}
            className="cat-img1"
            src={require("../../images/category.webp")}
          />

          <div className="new_arr_textt"> New Arrivals</div>
        </div>
        <div>
          <div className="categories2">
            <img
              onClick={() => {
                navigate("/men");
              }}
              className="cat-img1"
              src={require("../../images/menshoe.png")}
            />
          </div>
          <div className="new_arr_textt"> Men</div>
        </div>
        <div>
          <div className="categories2">
            <img
              onClick={() => {
                navigate("/women");
              }}
              className="cat-img1"
              src={require("../../images/womenshoe.jpg")}
            />
          </div>
          <div className="new_arr_textt"> Women</div>
        </div>
        <div>
          <div className="categories2">
            <img
              onClick={() => {
                navigate("/kids");
              }}
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
