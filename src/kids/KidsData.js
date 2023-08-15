import React, { useEffect, useState } from "react";
import Navbar from "../commons/Navbar";
import KidsCard from "./KidsCard";
import { publicAxios } from "../commons/auth";
import { useNavigate } from "react-router-dom";

export default function KidsData() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    await publicAxios
      .get(
        "items/products?fields=*,category.name&filter[category][name][_eq]=kids"
      )
      .then((res) => {
        // console.log(res.data);
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
                {" "}
                <KidsCard
                  image={e.image}
                  name={e.name}
                  price={e.price}
                  size={e.size}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
