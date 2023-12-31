import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="abt_div">
        <h1 className="heading_text"> ABOUT US ...</h1>
        <div className="div_border">
          <div>
            <p className="text_design">
              A shoe is an item of footwear intended to protect and comfort the
              human foot. Though the human foot can adapt to varied terrains and
              climate conditions, it is vulnerable, and shoes provide
              protection. Form was originally tied to function but over time
              shoes also became fashion items. Some shoes are worn as safety
              equipment, such as steel-toe boots, which are required footwear at
              industrial worksites. Additionally, fashion has often evolved into
              many different designs, such as high heels, which are most
              commonly worn by women during fancy occasions. Contemporary
              footwear varies widely in style, complexity and cost. Basic
              sandals may consist of only a thin sole and simple strap and be
              sold for a low cost. High fashion shoes made by famous designers
              may be made of expensive materials, use complex construction and
              sell for large sums of money. Some shoes are designed for specific
              purposes, such as boots designed specifically for mountaineering
              or skiing, while others have more generalized usage such as
              sneakers which have transformed from a special purpose sport shoe
              into a general use shoe
            </p>
          </div>
          {/* <div>
            <img
              className="pinkshoe_img"
              src={require("../images/pink_shoe.jpg")}
              alt=""
            />
          </div> */}
        </div>

        {/* <div className="super_div">
          <div className="about_text_div">
            <p>
              A shoe is an item of footwear intended to protect and comfort the
              human foot. Though the human foot can adapt to varied terrains and
              climate conditions, it is vulnerable, and shoes provide
              protection. Form was originally tied to function but over time
              shoes also became fashion items. Some shoes are worn as safety
              equipment, such as steel-toe boots, which are required footwear at
              industrial worksites. Additionally, fashion has often evolved into
              many different designs, such as high heels, which are most
              commonly worn by women during fancy occasions. Contemporary
              footwear varies widely in style, complexity and cost. Basic
              sandals may consist of only a thin sole and simple strap and be
              sold for a low cost. High fashion shoes made by famous designers
              may be made of expensive materials, use complex construction and
              sell for large sums of money. Some shoes are designed for specific
              purposes, such as boots designed specifically for mountaineering
              or skiing, while others have more generalized usage such as
              sneakers which have transformed from a special purpose sport shoe
              into a general use shoe
            </p>
          </div>
          <div className="pink_shoe_div">
            <img
              className="pinkshoe_img"
              src={require("../images/pink_shoe.jpg")}
              alt=""
            />
          </div>
        </div> */}
      </div>
    </>
  );
}
