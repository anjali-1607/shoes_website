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

export default function Navbar() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const gotologin = () => {
    navigate("/login");
  };

  const checkToken = async () => {
    await secureAxios
      .get("users/me")
      .then((res) => {
        console.log(res);
        setName(`${res.data.first_name} ${res.data.last_name}`);
        localStorage.setItem("user_id", res.data.id);
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
    <>
      <div className="nav1">
        <div className="nav11">
          <img className="logo2" src={require("../logo/logoo.jpg")} />
        </div>
        <div className="nav11">
          <button
            className="nav123"
            active={location.pathname === "/" ? true : false}
            onClick={() => {
              navigate("/");
            }}>
            Home
          </button>
          <button
            className="nav123"
            active={location.pathname === "/arrivals" ? true : false}
            onClick={() => {
              navigate("/arrivals");
            }}>
            New Arrivals
          </button>
          <button
            className="nav123"
            active={location.pathname === "/men" ? true : false}
            onClick={() => {
              navigate("/men");
            }}>
            Men
          </button>
          <button
            className="nav123"
            active={location.pathname === "/women" ? true : false}
            onClick={() => {
              navigate("/women");
            }}>
            Women
          </button>
          <button
            className="nav123"
            active={location.pathname === "/kids" ? true : false}
            onClick={() => {
              navigate("/kids");
            }}>
            Kids
          </button>
        </div>
        <div className="nav11">
          <Input icon="search" placeholder="Search..." />
          <div style={{ margin: "0 6px", cursor: "pointer" }}>
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
                <Dropdown style={{ padding: "1em" }} text={name}>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      text="LogOut"
                      onClick={() => {
                        localStorage.removeItem("access_token");
                        navigate("/login");
                      }}
                    />
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
        </div>
      </div>
    </>
    // <div className="menu_div">
    //   <Menu>
    //     <Menu.Item name="logo0" />
    //     <Menu.Item
    //       className="menu"
    //       name="Home"
    //       active={location.pathname === "/" ? true : false}
    //       onClick={() => {
    //         navigate("/");
    //       }}
    //     />
    //     <Menu.Item
    //       name="New Arrivals"
    //       active={location.pathname === "/arrivals" ? true : false}
    //       onClick={() => {
    //         navigate("/arrivals");
    //       }}
    //     />
    //     <Menu.Item
    //       name="Men"
    //       active={location.pathname === "/men" ? true : false}
    //       onClick={() => {
    //         navigate("/men");
    //       }}
    //     />
    //     <Menu.Item
    //       name="Women"
    //       active={location.pathname === "/women" ? true : false}
    //       onClick={() => {
    //         navigate("/women");
    //       }}
    //     />
    //     <Menu.Item
    //       name="Kids"
    //       active={location.pathname === "/kids" ? true : false}
    //       onClick={() => {
    //         navigate("/kids");
    //       }}
    //     />

    //     <Menu.Menu position="right">
    //       <Menu.Item>
    //         <Input icon="search" placeholder="Search..." />
    //       </Menu.Item>
    //       <div style={{ marginTop: "12px", cursor: "pointer" }}>
    //         <Icon
    //           name="cart arrow down"
    //           size="large"
    //           onClick={() => {
    //             navigate("/mycart");
    //           }}></Icon>
    //       </div>
    //       <div className="login_btn_div">
    //         {localStorage.getItem("access_token") ? (
    //           <>
    //             <Dropdown style={{ padding: "1em" }} icon="user" text={name}>
    //               <Dropdown.Menu>
    //                 <Dropdown.Item
    //                   text="LogOut"
    //                   onClick={() => {
    //                     localStorage.removeItem("access_token");
    //                     navigate("/login");
    //                   }}
    //                 />
    //               </Dropdown.Menu>
    //             </Dropdown>
    //           </>
    //         ) : (
    //           <Button
    //             basic
    //             onClick={() => {
    //               gotologin();
    //             }}>
    //             Log In
    //           </Button>
    //         )}
    //       </div>
    //     </Menu.Menu>
    //   </Menu>
    // </div>
  );
}
