import React from "react";
import "./Women.css";
import Navbar from "../commons/Navbar";
import WomenCard from "./WomenCard";

export default function WomenData() {
  const data = [
    {
      img: "	https://img.joomcdn.net/aa062f9bdf1e8979464f108f182a2f8eb2379c61_original.jpeg",
      name: "Nike",
      price: "₹2500",
      rating: "4/5",
    },
    {
      img: "	https://img.joomcdn.net/aa062f9bdf1e8979464f108f182a2f8eb2379c61_original.jpeg",
      name: "Nike",
      price: "₹2500",
      rating: "4/5",
    },
    {
      img: "	https://img.joomcdn.net/aa062f9bdf1e8979464f108f182a2f8eb2379c61_original.jpeg",
      name: "Nike",
      price: "₹2500",
      rating: "4/5",
    },
    {
      img: "	https://img.joomcdn.net/aa062f9bdf1e8979464f108f182a2f8eb2379c61_original.jpeg",
      name: "Nike",
      price: "₹2500",
      rating: "4/5",
    },
    {
      img: "	https://img.joomcdn.net/aa062f9bdf1e8979464f108f182a2f8eb2379c61_original.jpeg",
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
            <WomenCard
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
