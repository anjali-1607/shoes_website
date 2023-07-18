import React, { useState } from "react";
import SliderCards from "./SliderCards";
import "./Slider.css";
import { Carousel } from "react-responsive-carousel";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return console.log("carrousel");

  // const [state, setState] = useState();
  // let box = document.querySelector("product_container");
  // const btnpressprev = () => {
  //   // setState((box.scrollLeft = box.scrollLeft - width));
  //   // let width = box.clientWidth;
  //   // box.scrollLeft = box.scrollLeft - width;
  //   // console.log(width);
  // };
  // const btnpressnext = () => {
  //   let width = box.clientWidth;
  //   box.scrollLeft = box.scrollLeft + width;
  //   console.log(width);
  // };
  // return (
  //   <div className="product-carousal">
  //     <button className="pre_btn" onClick={btnpressprev}>
  //       <p>L</p>
  //     </button>
  //     <button className="next_btn" onClick={btnpressnext}>
  //       <p>R</p>
  //     </button>
  //     <div className="product_container">
  //       <SliderCards cardno="1" />
  //       <SliderCards cardno="2" />
  //       <SliderCards cardno="3" />
  //       <SliderCards cardno="3" />
  //       <SliderCards cardno="3" />
  //     </div>
  //   </div>
  // );
}
