import React, { useEffect, useState } from "react";
import Navbar from "../commons/Navbar";
import KidsCard from "./KidsCard";
import { publicAxios } from "../commons/auth";

export default function KidsData() {
  const [data, setData] = useState([]);

  const getData = async () => {
    await publicAxios
      .get(
        "products?populate=*&filters[category][Name][$eq]=Kids&pagination[limit]=1000"
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
            <KidsCard
              image={e.attributes.image.data[0].attributes.url}
              name={e.attributes.name}
              price={e.attributes.price}
              rating={e.attributes.size}
            />
          );
        })}
      </div>
    </>
  );
}
