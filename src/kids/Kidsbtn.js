import React from "react";
import { publicAxios, secureAxios } from "../commons/auth";
import { ToastContainer, toast } from "react-toastify";

export default function Kidsbtn({ id }) {
  // const { id: productId } = useParams();
  const showToastMessage = () => {
    toast.success("Successfully Added to Cart ", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const postValue = async (productId) => {
    // console.log("anjali");
    const userId = localStorage.getItem("user_id");
    await secureAxios
      .post(`/items/products_directus_users   `, {
        directus_users_id: userId,
        products_id: productId,
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
        <button
          className="cart_arr_btn"
          onClick={() => {
            postValue(id);
          }}>
          Add to Cart
        </button>
      </div>
    </>
  );
}
