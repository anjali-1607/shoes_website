import React, { useEffect, useState } from "react";
import Navbar from "../commons/Navbar";
import WomenCard from "./WomenCard";
import { publicAxios } from "../commons/auth";
import { useNavigate } from "react-router-dom";

export default function WomenData() {
  const [data, setData] = useState([]);

  const getData = async () => {
    await publicAxios
      .get(
        "items/products?fields=*,category.name&filter[category][name][_eq]=women"
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
              <div>
                {" "}
                <WomenCard
                  image={e.image}
                  name={e.name}
                  price={e.price}
                  size={e.size}
                  salePrice={e.sale_price}
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
