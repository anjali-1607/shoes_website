import React, { useEffect, useState } from "react";
import Description from "./Description";
import { useParams } from "react-router-dom";
import Navbar from "../commons/Navbar";
import { publicAxios } from "../commons/auth";

export default function DescriptionData() {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);
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
    // try {
    //   const response = await publicAxios.get(
    //     `products?populate=category.,image.${productId}`
    //   );
    //   setProduct(response.data[0]);
    // } catch (error) {
    //   console.error("Error fetching product data:", error);
    // }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <Description
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
