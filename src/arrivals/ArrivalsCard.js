import React from "react";
import "./Arrivals.css";
import ArrivalsData from "./ArrivalsData";
import { Button, Input, Menu } from "semantic-ui-react";

export default function ArrivalsCard({ name }) {
  return (
    <>
      <div className="menu_div">
        <Menu>
          <Menu.Item className="menu" name="Home" />
          <Menu.Item name="New Arrivals" />
          <Menu.Item name="Men" />
          <Menu.Item name="Women" />
          <Menu.Item name="Kids" />

          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <div className="login_btn_div">
              <Button basic>Log In</Button>
            </div>
          </Menu.Menu>
          <Menu.Item icon="user"></Menu.Item>
        </Menu>
      </div>

      <div className="card_manager">
        <div className="card">
          <div className="img_div">
            <img src="		https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg" />
          </div>
          <h3 style={{ textAlign: "center", marginTop: "5px" }}>{name}</h3>
          <div className="desc">
            <h4 style={{ marginLeft: "30px" }}>
              <span style={{ marginRight: "80px" }}>Price- ₹2500</span>
              <span>Rating-4/5</span>
            </h4>
          </div>
        </div>

        {/* <div className="card">1</div>
        <div className="card">1</div>
        <div className="card">1</div>
        <div className="card">1</div> */}
      </div>
    </>
  );
}
