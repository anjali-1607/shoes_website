import React, { useEffect, useState } from "react";
import Navbar from "../commons/Navbar";
import MenCards from "./MenCards";
import { publicAxios } from "../commons/auth";
import { useNavigate } from "react-router-dom";

export default function MenData() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    await publicAxios
      .get(
        "items/products?fields=*,category.name&filter[category][name][_eq]=men"
      )

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
          console.log(e);
          return (
            <>
              <div
                onClick={() => {
                  navigate(`/product-details/${e.id}`);
                }}>
                <MenCards
                  image={e.image}
                  name={e.name}
                  price={e.price}
                  size={e.size}
                  salePrice={e.sale_price}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
