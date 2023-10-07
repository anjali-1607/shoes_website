import React from "react";
import "./App.css";
import Navbar from "./commons/Navbar";
import Card_data from "./home_cards/Card_data";
import Footers from "./footer/Footers";
import ImageCard from "./home/ImageCard";
import Brands from "./home/Brands";
import About from "./home/about/About";
import Categories from "./home/category/Categories";
import CategoriesCards from "./home/category/CategoriesCards";
import Awesome_brands from "./home/awesome_brands/Awesome_brands";
import Shopbycat from "./home/shopbycategory/Shopbycat";

export default function Main() {
  return (
    <>
      <div className="main_div">
        <Navbar />
        <ImageCard />
        <Categories />
        <CategoriesCards />
        <Shopbycat />
        <Brands />
        <Card_data />
        <Awesome_brands />
        <About />
        <Footers />
      </div>
    </>
  );
}
