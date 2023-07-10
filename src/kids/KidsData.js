import React from "react";
import Navbar from "../commons/Navbar";
import KidsCard from "./KidsCard";

export default function KidsData() {
  const data = [
    {
      img: "	https://m.media-amazon.com/images/I/61HkxdsBSXL._AC_UY1000_.jpg",
      name: "Nike",
      price: "₹2500",
      rating: "4/5",
    },
    {
      img: "	https://m.media-amazon.com/images/I/61HkxdsBSXL._AC_UY1000_.jpg",
      name: "Nike",
      price: "₹2500",
      rating: "4/5",
    },
    {
      img: "	https://m.media-amazon.com/images/I/61HkxdsBSXL._AC_UY1000_.jpg",
      name: "Nike",
      price: "₹2500",
      rating: "4/5",
    },
    {
      img: "	https://m.media-amazon.com/images/I/61HkxdsBSXL._AC_UY1000_.jpg",
      name: "Nike",
      price: "₹2500",
      rating: "4/5",
    },
    {
      img: "	https://m.media-amazon.com/images/I/61HkxdsBSXL._AC_UY1000_.jpg",
      name: "Nike",
      price: "₹2500",
      rating: "4/5",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="card_manager">
        {data.map((e) => {
          console.log(e);
          return (
            <KidsCard
              image={e.img}
              name={e.name}
              price={e.price}
              rating={e.rating}
            />
          );
        })}
      </div>
    </>
  );
}
