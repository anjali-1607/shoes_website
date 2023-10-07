import React from "react";

export default function Kidscat() {
  return (
    <>
      <div className="catimage_div">
        <div>
          <img className="catimages" src={require("./images/kids4.jpg")} />
          <div className="catsubheading"> Boys Shoes</div>
          <div className="catsubheading2">
            Comfy & Stylish Choices for Young Feet
          </div>
          <button className="shopbtn">Shop Boys Shoes</button>
        </div>
        <div>
          <img className="catimages" src={require("./images/kids2.jpg")} />
          <div className="catsubheading"> Boys Formal Shoes</div>
          <div className="catsubheading2">Dressing Up with Confidence</div>
          <button className="shopbtn">Shop Boys Formal Shoes</button>
        </div>
        <div>
          <img className="catimages" src={require("./images/kids1.jpg")} />
          <div className="catsubheading"> Girls Shoes</div>
          <div className="catsubheading2">
            Adorable & Comfortable Picks for Little Ones
          </div>
          <button className="shopbtn">Shop Girls Shoes</button>
        </div>
        <div>
          <img className="catimages" src={require("./images/kids3.jpg")} />
          <div className="catsubheading"> Girls Ballerinas</div>
          <div className="catsubheading2">
            Darling Ballet Flats for Young Dancers
          </div>
          <button className="shopbtn">Shop Girls Ballerinas</button>
        </div>
      </div>
    </>
  );
}
