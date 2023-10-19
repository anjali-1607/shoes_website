import React from "react";
import SortBy from "./SortBy";
import ArrivalsCard from "../../../arrivals/ArrivalsCard";

export default function Productslist({ data }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}>
        <SortBy />
        <div className="card_manager">
          {data?.map((e) => {
            // console.log(e);/
            return (
              <>
                <div>
                  <ArrivalsCard
                    image={e.image}
                    name={e.name}
                    price={e.price}
                    salePrice={e.sale_price}
                    size={e.size}
                    id={e.id}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
