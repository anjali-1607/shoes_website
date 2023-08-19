import React, { useEffect, useState } from "react";
import "./Arrivals.css";
import ArrivalsCard from "./ArrivalsCard";
import Navbar from "../commons/Navbar";
import { publicAxios, registerAxios } from "../commons/auth";
import { Router, Switch, useNavigate } from "react-router-dom";

export default function ArrivalsData() {
  const [data, setData] = useState([]);

  const getData = async () => {
    await publicAxios.get("items/products").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="card_manager">
        {data.map((e) => {
          // console.log(e);
          return (
            <>
              <div>
                <ArrivalsCard
                  image={e.image}
                  name={e.name}
                  price={e.price}
                  salePrice={e.sale_price}
                  size={e.size}
                  id={e.id}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
