import React from "react";
import "./styles/Navbar.css";
import { Menu, Input, Button, Transition } from "semantic-ui-react";
import Login from "../auth/Login";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";

export default function Navbar() {
  const navigate = useNavigate();
  const gotologin = () => {
    navigate("/login");
  };
  const arr = () => {
    navigate("/arrivals");
  };

  return (
    <div className="menu_div">
      <Menu>
        <Menu.Item
          className="menu"
          name="Home"
          onClick={() => {
            navigate("/");
          }}
        />
        <Menu.Item name="New Arrivals" onClick={arr} />
        <Menu.Item
          name="Men"
          onClick={() => {
            navigate("/men");
          }}
        />
        <Menu.Item
          name="Women"
          onClick={() => {
            navigate("/women");
          }}
        />
        <Menu.Item
          name="Kids"
          onClick={() => {
            navigate("/kids");
          }}
        />

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <div className="login_btn_div">
            <Button
              basic
              onClick={() => {
                gotologin();
              }}>
              Log In
            </Button>
          </div>
        </Menu.Menu>
        <Menu.Item icon="user"></Menu.Item>
      </Menu>
    </div>
  );
}
