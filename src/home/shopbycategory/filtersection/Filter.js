import React from "react";
import "./Filter.css";
import { Icon } from "semantic-ui-react";

export default function Filter() {
  return (
    <>
      <div className="filter_cat">
        <div className="filter_text_cat">Fliters</div>
        <div className="second_filter_div">
          <div className="cat_div_"> Categories</div>
          <div className="foot_div">
            {" "}
            <Icon name="angle down" />
            Footwear
          </div>
          <a href="http://localhost:3000/women" className="inner_text">
            Women's Footwear
          </a>
          <a href="http://localhost:3000/kids" className="inner_text">
            Kids and Infant Footwear
          </a>
          <a href="http://localhost:3000/men" className="inner_text">
            Men's Footwear
          </a>
        </div>
      </div>
    </>
  );
}
