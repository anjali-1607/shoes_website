import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../commons/Navbar";
import { publicAxios } from "../commons/auth";
import MyCart from "./MyCart";

export default function DescriptionData() {
  const [data, setData] = useState([]);
  const { id: productId } = useParams();
  console.log(productId);
  console.log(data);
  const getData = async () => {
    await publicAxios
      .get(`products/${productId}?populate=category.,image.`)
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
      <div>
        <MyCart
          image={data?.attributes?.image?.data[0]?.attributes.url}
          name={data?.attributes?.name}
          price={data?.attributes?.price}
          rating={data?.attributes?.size}
          desc={data?.attributes?.description}
        />
      </div>
    </>
  );
}
