import React, { useEffect, useState } from "react";
import "./styles/Navbar.css";
import {
  Menu,
  Input,
  Button,
  Transition,
  Dropdown,
  Icon,
} from "semantic-ui-react";
import { useLocation, useNavigate } from "react-router-dom";
import { secureAxios } from "./auth";
import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";

export default function Navbar() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const gotologin = () => {
    navigate("/login");
  };

  const checkToken = async () => {
    await secureAxios
      .get("users/me")
      .then((res) => {
        console.log(res);
        setName(`${res.first_name} ${res.last_name}`);
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
          active={location.pathname === "/" ? true : false}
          onClick={() => {
            navigate("/");
          }}
        />
        <Menu.Item
          name="New Arrivals"
          active={location.pathname === "/arrivals" ? true : false}
          onClick={() => {
            navigate("/arrivals");
          }}
        />
        <Menu.Item
          name="Men"
          active={location.pathname === "/men" ? true : false}
          onClick={() => {
            navigate("/men");
          }}
        />
        <Menu.Item
          name="Women"
          active={location.pathname === "/women" ? true : false}
          onClick={() => {
            navigate("/women");
          }}
        />
        <Menu.Item
          name="Kids"
          active={location.pathname === "/kids" ? true : false}
          onClick={() => {
            navigate("/kids");
          }}
        />

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <div style={{ marginTop: "12px", cursor: "pointer" }}>
            <Icon
              name="cart arrow down"
              size="large"
              onClick={() => {
                navigate("/mycart");
              }}></Icon>
          </div>
          <div className="login_btn_div">
            {localStorage.getItem("access_token") ? (
              <>
                <Dropdown style={{ padding: "1em" }} icon="user" text={name}>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      text="LogOut"
                      onClick={() => {
                        localStorage.removeItem("access_token");
                        navigate("/login");
                      }}
                    />
                    {/* <Button
                      basic
                      onClick={() => {
                        localStorage.removeItem("access_token");
                        navigate("/login");
                      }}>
                      Log Out
                    </Button> */}
                  </Dropdown.Menu>
                </Dropdown>
              </>
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
      </Menu>
    </div>
  );
}
