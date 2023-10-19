import React from "react";
import "../productlist/Productslist.css";

export default function SortBy() {
  return (
    <div className="products_lists">
      Sort By
      <button className="sortby_btn">Relevance</button>
      <button className="sortby_btn">Popularity</button>
      <button className="sortby_btn">Price--Low to High</button>
      <button className="sortby_btn">Price--High to Low </button>
      <button className="sortby_btn">Newest First</button>
    </div>
  );
}
