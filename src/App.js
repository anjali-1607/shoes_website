import React from "react";
import "./App.css";
import Navbar from "./commons/Navbar";
import Login from "./auth/Login";
import Card from "./Card";
import Card_data from "./Card_data";

export default function App() {
  return (
    <>
      <div className="main_div">
        <Navbar />
        <div className="img">
          <div className="image_div">picture</div>
        </div>
        {/* <div className="login_div">
          <Login />
        </div> */}
        <div>
          <Card_data />
        </div>
      </div>
    </>
  );
}
