import React, { useEffect, useState } from "react";
import Description from "./Description";
import { useParams } from "react-router-dom";
import Navbar from "../commons/Navbar";
import { publicAxios } from "../commons/auth";

export default function DescriptionData() {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState(null);
  const { id: productId } = useParams();
  console.log(productId);

  const getData = async () => {
    try {
      const response = await publicAxios.get(
        `products?populate=category.,image.${productId}`
      );

      if (response.data && response.data.length > 0) {
        setProduct(response.data[0]);
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {product && (
          <Description
            image={product.attributes.image.data[0].attributes.url}
            name={product.attributes.name}
            price={product.attributes.price}
            rating={product.attributes.size}
          />
        )}
      </div>
    </>
  );
}
