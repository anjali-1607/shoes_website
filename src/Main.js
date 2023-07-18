import React from "react";
import AliceCarousel from "react-alice-carousel";
import "./App.css";
// import "react-alice-carousel/lib/alice-carousel.css";
import Navbar from "./commons/Navbar";
import Card_data from "./home_cards/Card_data";
import Slider from "./sliders/Slider";
import SliderCards from "./sliders/SliderCards";

export default function Main() {
  return (
    <>
      <div className="main_div">
        <Navbar />
        <div className="grand_carousel">
          <img
            className="carousel_img"
            src={require("./images/carousel_1.jpg")}
            alt=""
          />
          {/* <Slider /> */}
        </div>
        {/* <div className="login_div">
            <Login />
          </div> */}
        <div className="brand">
          <div className="brand_div">
            {" "}
            <h1> Brands Best Sellers </h1>
          </div>
        </div>
        <div>
          <Card_data />
        </div>
        <div className="abt_div">
          <h1> ABOUT US</h1>
        </div>
      </div>
    </>
  );
}
