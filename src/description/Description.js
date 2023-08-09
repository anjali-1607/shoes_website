import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/Description.css";
import { Button, Icon } from "semantic-ui-react";
import { publicAxios } from "../commons/auth";

export default function Description({ name, image, price, id, desc }) {
  // const { id } = useParams();
  const showToastMessage = () => {
    toast.success("Successfully Added to Cart ", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const postValue = async () => {
    console.log("anjali");
    const userId = localStorage.getItem("user_id");
    await publicAxios
      .put(`products/${id}`, {
        data: {
          users: [userId],
        },
      })
      .then((res) => {
        console.log(res.data);
        showToastMessage();
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="desc_grand">
        <div className="product_img_1">
          <div className="product_img">
            {" "}
            <img
              className="image_product"
              src={`http://localhost:1337${image}`}
            />{" "}
          </div>
          <div className="bottom_img_div">
            <div className="div__1"></div>
            <div className="div__1"></div>
            <div className="div__1"></div>
            <div className="div__1"></div>
          </div>
        </div>

        <div className="desc_div">
          <div style={{ padding: "1em" }}>
            <div>
              {" "}
              <h2> {name} </h2>
            </div>
            <div>
              {" "}
              <p> {desc} </p>
            </div>
            <div className="price__div">
              {" "}
              <h2> ₹{price} </h2>
            </div>
            <div className="size__div">
              {" "}
              {/* <p> size </p> */}
              <button className="size_circle">3</button>
              <button className="size_circle">4</button>
              <button className="size_circle">5</button>
              <button className="size_circle">6</button>
              <button className="size_circle">7</button>
            </div>
            <div style={{ margin: "1em 0" }}>
              <h5>Available offers</h5>
              <p>
                {" "}
                <Icon name="tag" /> Bank OfferGet 10% Cashback on Samsung Axis
                bank Credit Card{" "}
              </p>
              <p>
                {" "}
                <Icon name="tag" /> 10% Instant Discount on ICICI Bank Credit
                Card Txns, up to ₹750 on orders of ₹5,000 and above
              </p>
              <p>
                {" "}
                <Icon name="tag" /> 10% Instant Discount on ICICI Bank Credit
                Card EMI Txns, up to ₹1,250 on orders of ₹5,000 and above
              </p>
            </div>
          </div>
          <div className="btns__div">
            <Button
              color="instagram"
              size="big"
              onClick={postValue}
              // onClick={() => {
              //   showToastMessage();
              // }}
            >
              <Icon name="cart" /> Add to Cart
            </Button>
            <Button color="instagram" size="big" style={{ marginLeft: "1em" }}>
              <Icon name="lightning" /> Buy Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
