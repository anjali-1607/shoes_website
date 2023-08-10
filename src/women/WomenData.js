import React, { useEffect, useState } from "react";
import Navbar from "../commons/Navbar";
import WomenCard from "./WomenCard";
import { publicAxios } from "../commons/auth";
import { useNavigate } from "react-router-dom";

export default function WomenData() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    await publicAxios
      .get(
        "products?populate=*&filters[category][Name][$eq]=Women&pagination[limit]=1000"
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
                <WomenCard
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
