import React from "react";
import AliceCarousel from "react-alice-carousel";
import "./App.css";
// import "react-alice-carousel/lib/alice-carousel.css";
import Navbar from "./commons/Navbar";
import Card_data from "./home_cards/Card_data";
import Slider from "./sliders/Slider";
import SliderCards from "./sliders/SliderCards";

import Footers from "./footer/Footers";
import ImageCard from "./ImageCard";

export default function Main() {
  return (
    <>
      <div className="main_div">
        <Navbar />
        <ImageCard />

        <div className="brand">
          <div className="brand_div">
            {" "}
            <h1 className="brands_best_sellers"> Brands Best Sellers </h1>
          </div>
        </div>
        <div>
          <Card_data />
        </div>
        <div className="abt_div">
          <h1 className="about_us_text"> ABOUT US</h1>
          <p style={{ padding: "2em 16em 2em 16em", fontSize: "15px" }}>
            A shoe is an item of footwear intended to protect and comfort the
            human foot. Though the human foot can adapt to varied terrains and
            climate conditions, it is vulnerable, and shoes provide protection.
            Form was originally tied to function but over time shoes also became
            fashion items. Some shoes are worn as safety equipment, such as
            steel-toe boots, which are required footwear at industrial
            worksites. Additionally, fashion has often evolved into many
            different designs, such as high heels, which are most commonly worn
            by women during fancy occasions. Contemporary footwear varies widely
            in style, complexity and cost. Basic sandals may consist of only a
            thin sole and simple strap and be sold for a low cost. High fashion
            shoes made by famous designers may be made of expensive materials,
            use complex construction and sell for large sums of money. Some
            shoes are designed for specific purposes, such as boots designed
            specifically for mountaineering or skiing, while others have more
            generalized usage such as sneakers which have transformed from a
            special purpose sport shoe into a general use shoe
          </p>
        </div>
        <div className="footer">
          <Footers />
        </div>
      </div>
    </>
  );
}
