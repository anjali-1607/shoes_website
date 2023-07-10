import React from "react";
import "./Men.css";

import Navbar from "../commons/Navbar";
import MenCards from "./MenCards";

export default function MenData() {
  const data = [
    {
      img: "https://5.imimg.com/data5/ANDROID/Default/2021/6/UH/ZG/GC/120280019/img-20210624-wa0351-jpg.jpg",
      name: "Nike",
      price: "₹2500",
      rating: "4/5",
    },
    {
      img: "https://5.imimg.com/data5/ANDROID/Default/2021/6/UH/ZG/GC/120280019/img-20210624-wa0351-jpg.jpg",
      name: "Nike",
      price: "₹2500",
      rating: "4/5",
    },
    {
      img: "https://5.imimg.com/data5/ANDROID/Default/2021/6/UH/ZG/GC/120280019/img-20210624-wa0351-jpg.jpg",
      name: "Nike",
      price: "₹2500",
      rating: "4/5",
    },
    {
      img: "https://5.imimg.com/data5/ANDROID/Default/2021/6/UH/ZG/GC/120280019/img-20210624-wa0351-jpg.jpg",
      name: "Nike",
      price: "₹2500",
      rating: "4/5",
    },
    {
      img: "https://5.imimg.com/data5/ANDROID/Default/2021/6/UH/ZG/GC/120280019/img-20210624-wa0351-jpg.jpg",
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
            <MenCards
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
