import React from "react";

export default function ImageCard() {
  return (
    <>
      <div className="grand_carousel">
        <div className="small_rect">
          <img
            className="carousel_img"
            src={require("./images/blue_shoe.jpg")}
            alt=""
          />
        </div>
        {/* <div className="overlay_div">Content of the overlaid div</div> */}
      </div>
      {/* <div className="grand_carousel"> */}
      {/* <div className="big_rect"></div> */}
      {/* <div className="small_rect"> */}
      {/* <img
              className="carousel_img"
              src={require("./images/image1.png")}
              alt=""
            /> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
