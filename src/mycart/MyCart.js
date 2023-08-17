import React, { useEffect, useState } from "react";
import "./styles/MyCart.css";
import Navbar from "../commons/Navbar";
import CartCard from "./CartCard";
import { useParams } from "react-router-dom";
import { secureAxios } from "../commons/auth";

export default function MyCart({ name, image, price, rating, desc }) {
  const [data, setData] = useState([]);
  const { id: productId } = useParams();
  console.log(productId);

  const getData = async () => {
    await secureAxios
      .get("users/me?fields=products.id,products.products_id.*")
      .then((res) => {
        console.log(res.data);
        setData(res.data.products);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  console.log(data[0].products_id.price);
  const prices = data?.map((productData) => productData?.products_id?.price);
  console.log(prices);

  const totalPrices = prices?.reduce((acc, ele) => acc + ele);
  console.log(totalPrices);

  const salePrices = data?.map(
    (productData) => productData?.products_id?.sale_price
  );
  console.log(salePrices);

  const totalsalePrices = salePrices?.reduce((acc, ele) => acc + ele);
  console.log(totalsalePrices);

  return (
    <>
      <Navbar />
      <div className="cart_grand">
        <div className="item_div">
          <div className="myshoes">
            {" "}
            <h3>My Shoes</h3>{" "}
          </div>
          <div className="second_div">
            <div className="myaddress">From Saved Addresses</div>
            <button className="pincode_btn">Enter Delievery Pincode</button>
          </div>

          <div>
            {data?.map((data) => {
              console.log(data);
              return (
                <>
                  <CartCard
                    image={data?.products_id?.image}
                    name={data?.products_id?.name}
                    price={data?.products_id?.price}
                    // rating={data?.attributes?.size}
                    desc={data?.products_id?.description}
                    product_cart_id={data?.id}
                  />
                </>
              );
            })}
          </div>
        </div>

        <div className="price_div">
          <div className="price_details">PRICE DETAILS</div>
          <div className="details_right_div">
            <div className="price">
              Price
              <div style={{ marginLeft: "auto" }}>₹{totalPrices}</div>
            </div>
            <div className="price">
              Discount{" "}
              <div style={{ marginLeft: "auto" }}>
                ₹{totalPrices - totalsalePrices}{" "}
              </div>
            </div>
            <div className="price">
              Sale Price{" "}
              <div style={{ marginLeft: "auto" }}>₹{totalsalePrices}</div>
            </div>
            <div className="price">
              Delivery Charges <div style={{ marginLeft: "auto" }}>Free</div>
            </div>
            <div className="total_amount">
              Total Amount{" "}
              <div style={{ marginLeft: "auto" }}>₹{totalsalePrices}</div>{" "}
            </div>
            <div className="save_rupees">
              You will save {totalPrices - totalsalePrices} on this order
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
