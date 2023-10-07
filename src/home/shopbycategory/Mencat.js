import React from "react";

export default function Mencat() {
  return (
    <>
      <div className="catimage_div">
        <div>
          <img className="catimages" src={require("./images/men2.jpg")} />
          <div className="catsubheading"> Men Chappals</div>
          <div className="catsubheading2"> Elevate Your Footwear Game</div>
          <button className="shopbtn">Shop Men Chappals</button>
        </div>
        <div>
          <img className="catimages" src={require("./images/men1.jpg")} />
          <div className="catsubheading"> Men Formal Shoes</div>
          <div className="catsubheading2">
            Classic Elegance for Every Occasion
          </div>
          <button className="shopbtn">Shop Men Formal Shoes</button>
        </div>
        <div>
          <img className="catimages" src={require("./images/men3.jpg")} />
          <div className="catsubheading"> Men Sports Shoes</div>
          <div className="catsubheading2"> Unleash Your Athletic Potential</div>
          <button className="shopbtn">Shop Men Sports Shoes</button>
        </div>
        <div>
          <img className="catimages" src={require("./images/men4.jpg")} />
          <div className="catsubheading"> Men Ethnic Shoes</div>
          <div className="catsubheading2"> Unleash Your Athletic Potential</div>
          <button className="shopbtn">Shop Men Ethenic Shoes</button>
        </div>
      </div>
    </>
  );
}
