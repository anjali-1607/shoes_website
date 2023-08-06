import React, { useEffect, useState } from "react";
import "./Arrivals.css";
import ArrivalsCard from "./ArrivalsCard";
import Navbar from "../commons/Navbar";
import { publicAxios } from "../commons/auth";
import { Router, Switch, useNavigate } from "react-router-dom";

export default function ArrivalsData() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    await publicAxios
      .get("products?populate=category.,image.&pagination[limit]=100")
      .then((res) => {
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
              <div
                onClick={() => {
                  navigate(`/product-details/${e.id}`);
                }}>
                <ArrivalsCard
                  image={e.attributes.image.data[0].attributes.url}
                  name={e.attributes.name}
                  price={e.attributes.price}
                  rating={e.attributes.size}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
