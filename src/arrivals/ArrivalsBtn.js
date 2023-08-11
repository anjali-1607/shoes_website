import React from "react";
import { publicAxios } from "../commons/auth";
import { ToastContainer, toast } from "react-toastify";

export default function ArrivalsBtn({ id }) {
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
      <div className="button_arr">
        <button className="cart_arr_btn" onClick={postValue}>
          Add to Cart
        </button>
        <button className="buy_arr_btn">Buy Now</button>
      </div>
    </>
  );
}
