import React from "react";

export default function KidsCard({ name, image, price, rating }) {
  return (
    <>
      <div>
        <div className="grand_product_div">
          <div className="img_div">
            <img
              className="product__image"
              src={`http://localhost:8055/assets/${image}`}
            />
          </div>
          <div className="pro_data">
            <div className="name_arr_div">{name} </div>
            <div className="price_arr_div">₹{price} </div>
            <div className="button_arr">
              <button className="cart_arr_btn">Add to Cart</button>
              <button className="buy_arr_btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
