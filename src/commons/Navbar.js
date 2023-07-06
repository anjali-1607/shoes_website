import React from "react";
import "./styles/Navbar.css";
import { Menu, Input, Button } from "semantic-ui-react";
import Login from "../auth/Login";

export default function Navbar() {
  function aa() {
    console.log("ANJALIA");
  }

  return (
    <div className="menu_div">
      <Menu>
        <Menu.Item name="Home" onClick={aa} />
        <Menu.Item name="New Arrivals" />
        <Menu.Item name="Men" />
        <Menu.Item name="Women" />
        <Menu.Item name="Kids" />

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <div className="login_btn_div">
            <Button basic onClick={Login}>
              Log In
            </Button>
          </div>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
