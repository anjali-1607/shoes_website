import React from "react";
import "./Menchappals.css";
import Navbar from "../../commons/Navbar";
import Filter from "./filtersection/Filter";
import Productslist from "./productlist/Productslist";

export default function Menchappals() {
  return (
    <>
      <Navbar />
      <div className="section">
        <Filter />
        <Productslist />
      </div>
    </>
  );
}
