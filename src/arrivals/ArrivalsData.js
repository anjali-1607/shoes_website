import React from "react";
import "./Arrivals.css";
import ArrivalsCard from "./ArrivalsCard";
import Navbar from "../commons/Navbar";

export default function ArrivalsData() {
  const data = [
    {
      img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg",
      name: "Nike",
      price: "₹2500",
      rating: "4/5",
    },
    {
      img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg",
      name: "Nike",
      price: "₹2500",
      rating: "4/5",
    },
    {
      img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg",
      name: "Nike",
      price: "₹2500",
      rating: "4/5",
    },
    {
      img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg",
      name: "Nike",
      price: "₹2500",
      rating: "4/5",
    },
    {
      img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg",
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
            <ArrivalsCard
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
