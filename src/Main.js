import React from "react";
import "./App.css";
import Navbar from "./commons/Navbar";
import Card_data from "./home_cards/Card_data";
import Footers from "./footer/Footers";
import ImageCard from "./home/ImageCard";
import Brands from "./home/Brands";
import About from "./home/About";

export default function Main() {
  return (
    <>
      <div className="main_div">
        <Navbar />
        <ImageCard />
        <Brands />
        <Card_data />
        <About />
        <Footers />
      </div>
    </>
  );
}
