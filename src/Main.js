import React from "react";
import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/alice-carousel.css";
import Navbar from "./commons/Navbar";
import Card_data from "./Card_data";

export default function Main() {
  return (
    <>
      <div className="main_div">
        <Navbar />
        <div className="img">
          <div className="image_div">
            <img src="https://www.womensrunning.co.uk/wp-content/uploads/2020/05/spring-shoes-2020.jpg" />
            <img src="https://www.womensrunning.co.uk/wp-content/uploads/2020/05/spring-shoes-2020.jpg" />
            <img src="https://www.womensrunning.co.uk/wp-content/uploads/2020/05/spring-shoes-2020.jpg" />
          </div>
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
