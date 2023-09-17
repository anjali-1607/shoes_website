import React from "react";

export default function ImageCard() {
  return (
    <>
      <div className="grand_carousel">
        <div className="side_img_div">
          <img
            className="carousel_img"
            src={require("../images/side_1.png")}
            alt=""
          />
          <div>
            <img
              className="carousel_img"
              src={require("../images/Desktop - 2.png")}
            />
          </div>
        </div>
        {/* <div className="square_div"></div> */}
        {/* <div className="text_divv">
          <h1
            className="shoes_text"
            style={{
              fontSize: "100px",
            }}>
            Shoes
          </h1>
        </div>
        <div className="text_divv2">
          {" "}
          <h1
            style={{
              fontSize: "80px",
            }}>
            Specially Made For You
          </h1>
        </div>

        // <div className="small_rect">
        //   <img
        //     className="carousel_img"
        //     src={require("../images/blue_shoe.jpg")}
        //     alt=""
        //   />
        // </div> */}
      </div>
    </>
  );
}
