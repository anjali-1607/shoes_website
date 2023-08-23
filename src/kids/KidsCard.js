import React from "react";
import Kidsbtn from "./Kidsbtn";
import { useNavigate } from "react-router-dom";

export default function KidsCard({
  name,
  image,
  price,
  rating,
  salePrice,
  id,
}) {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="grand_product_div">
          <div
            className="img_div"
            onClick={() => {
              navigate(`/product-details/${id}`);
            }}>
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
          </div>
          <Kidsbtn id={id} />
        </div>
      </div>
    </>
  );
}
