import React, { useEffect, useState } from "react";
import Navbar from "../commons/Navbar";
import { useParams } from "react-router-dom";
import "./styles/Description.css";
import { publicAxios } from "../commons/auth";

export default function Description() {
  const [data, setData] = useState([]);
  const { id: productId } = useParams();
  console.log(productId);

  const getData = async () => {
    await publicAxios
      .get(`products?populate=category.,image.${productId}`)
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
      <div className="desc_grand">
        <div className="product_img">
          <img className="image_product" src={data.img} />
        </div>
        <div className="desc_div">
          <h1>ADIDAS</h1>
          <h5>Price-1000</h5>
          <h5>Rating-1000</h5>
        </div>
      </div>
    </>
  );
}
