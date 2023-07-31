import React, { useEffect } from "react";
import "./styles/Navbar.css";
import { Menu, Input, Button, Transition } from "semantic-ui-react";
import Login from "../auth/Login";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";
import { secureAxios } from "./auth";

export default function Navbar() {
  const navigate = useNavigate();
  const gotologin = () => {
    navigate("/login");
  };
  const arr = () => {
    navigate("/arrivals");
  };
  const checkToken = async () => {
    await secureAxios
      .get("users/me")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      checkToken();
    } else {
    }
  }, []);

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
            {localStorage.getItem("access_token") ? (
              <Button
                basic
                onClick={() => {
                  localStorage.removeItem("access_token");
                  navigate("/login");
                }}>
                Log Out
              </Button>
            ) : (
              <Button
                basic
                onClick={() => {
                  gotologin();
                }}>
                Log In
              </Button>
            )}
          </div>
        </Menu.Menu>
        <Menu.Item icon="user"></Menu.Item>
      </Menu>
    </div>
  );
}
