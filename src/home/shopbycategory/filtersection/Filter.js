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
        <div className="second_filter_div">
          <div className="cat_div_">GENDER</div>
          <div className="checkbox">
            <input type="checkbox"></input>
            <label for="vehicle1"> Men</label>
          </div>
          <div className="checkbox">
            <input type="checkbox"></input>
            <label for="vehicle1"> Women</label>
          </div>
          <div className="checkbox">
            <input type="checkbox"></input>
            <label for="vehicle1">Kids</label>
          </div>
        </div>
        <div className="second_filter_div">
          <div className="cat_div_">BRAND</div>
          <div className="checkbox">
            <input type="checkbox"></input>
            <label for="vehicle1"> Adidas</label>
          </div>
          <div className="checkbox">
            <input type="checkbox"></input>
            <label for="vehicle1"> Liberty</label>
          </div>
          <div className="checkbox">
            <input type="checkbox"></input>
            <label for="vehicle1">Woodland</label>
          </div>
          <div className="checkbox">
            <input type="checkbox"></input>
            <label for="vehicle1">Puma</label>
          </div>
          <div className="checkbox">
            <input type="checkbox"></input>
            <label for="vehicle1">Bata</label>
          </div>
          <div className="checkbox">
            <input type="checkbox"></input>
            <label for="vehicle1">RedTape</label>
          </div>
          <div className="checkbox">
            <input type="checkbox"></input>
            <label for="vehicle1">Nike</label>
          </div>
        </div>
      </div>
    </>
  );
}
