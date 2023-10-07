import React from "react";

export default function Womencat() {
  return (
    <>
      <div className="catimage_div">
        <div>
          <img className="catimages" src={require("./images/women4.jpg")} />
          <div className="catsubheading">Women Formal Shoes</div>
          <div className="catsubheading2">Graceful & Professional Footwear</div>
          <button className="shopbtn">Shop Women Formal Shoes</button>
        </div>
        <div>
          <img className="catimages" src={require("./images/women1.jpg")} />
          <div className="catsubheading"> Women Wedding Sandals</div>
          <div className="catsubheading2">Walk Down the Aisle in Style</div>
          <button className="shopbtn">Shop Women Wedding Sandals</button>
        </div>
        <div>
          <img className="catimages" src={require("./images/women3.jpg")} />
          <div className="catsubheading"> Women Sandals</div>
          <div className="catsubheading2"> Chic Comfort for Every Step</div>
          <button className="shopbtn">Shop Women Sandals</button>
        </div>
        <div>
          <img className="catimages" src={require("./images/women2.jpg")} />
          <div className="catsubheading"> Heels For Women</div>
          <div className="catsubheading2">
            Elevate Your Fashion with Elegance
          </div>
          <button className="shopbtn">Shop Womwn Heels</button>
        </div>
      </div>
    </>
  );
}
