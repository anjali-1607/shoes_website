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
  console.log(data);
  const getData = async () => {
    await secureAxios
      .get("users/me?populate[mycarts][populate][0]=image")
      .then((res) => {
        console.log(res.mycarts);
        setData(res.mycarts);
      });
  };
  useEffect(() => {
    getData();
  }, []);
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
            {data.map((data) => {
              console.log(data);
              return (
                <>
                  <CartCard
                    image={data.image[0].url}
                    name={data.name}
                    price={data.price}
                    // rating={data?.attributes?.size}
                    desc={data.description}
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
              <div style={{ marginLeft: "18em" }}>₹600</div>
            </div>
            <div className="price">
              Discount <div style={{ marginLeft: "16.5em" }}>₹600</div>
            </div>
            <div className="price">
              Sale Free <div style={{ marginLeft: "16em" }}>₹600</div>
            </div>
            <div className="price">
              Delivery Charges <div style={{ marginLeft: "13em" }}>Free</div>
            </div>
            <div className="total_amount">
              Total Amount <div style={{ marginLeft: "11em" }}>₹1200</div>{" "}
            </div>
            <div className="save_rupees">
              You will save ₹1,990 on this order
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
