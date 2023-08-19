import React from "react";

export default function WomenCard({ name, image, price, rating, salePrice }) {
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
            <div style={{ display: "flex" }}>
              {" "}
              <div className="price_arr_div"> ₹{salePrice}</div>
              <div className="saleprice_arr_div"> ₹{price} </div>
            </div>
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
