import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";
import { publicAxios, registerAxios } from "../commons/auth.js";
import axios from "axios";

export default function Signup({ isopen = false, setIsOpen = () => {} }) {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const getSignupVal = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);

    if (event.target.name === "password") {
      if (event.target.value.length < 6) {
        setErrorMessage("Password must contain at least 6 characters");
      } else {
        setErrorMessage(""); // Reset the error message
      }
    }
  };

  const onSignup = async () => {
    let eData = data.email.split("@");
    console.log(eData);
    const pass = data.password;
    console.log(pass.length);

    const username = eData[0];
    console.log(username);
    await publicAxios
      .post("register/register", {
        ...data,
        username: username,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("access_token", response.jwt);
        localStorage.setItem("user_id", response.user.id);
        setData({});
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {" "}
      <div className={isopen ? "showoverlay overlay" : "overlay"}></div>
      <div className={isopen ? "show_signup_div signup_div " : "signup_div"}>
        <div>
          <Form onSubmit={onSignup}>
            <h1 style={{ textAlign: "center" }}>SignUp</h1>
            <Form.Field required={true}>
              <label className="label_clr">First Name</label>
              <input
                required={true}
                placeholder="First Name"
                type="text"
                value={data.first_name || ""}
                name="first_name"
                onChange={getSignupVal}
              />
            </Form.Field>
            <Form.Field required={true}>
              <label>Last Name</label>
              <input
                required={true}
                placeholder="Last Name"
                type="text"
                name="last_name"
                value={data.last_name || ""}
                onChange={getSignupVal}
              />
            </Form.Field>
            <Form.Field required={true}>
              <label>Email</label>
              <input
                type="email"
                required={true}
                placeholder="abc@gmail.com"
                name="email"
                value={data.email || ""}
                onChange={getSignupVal}
              />
            </Form.Field>
            <Form.Field required={true}>
              <label>Password</label>
              <input
                required={true}
                type="password"
                placeholder="*******"
                name="password"
                value={data.password || ""}
                onChange={getSignupVal}
              />
              {errorMessage && (
                <div style={{ color: "red" }}>{errorMessage}</div>
              )}
            </Form.Field>
            <Button
              loading={false}
              // disabled={!data}
              className="signup_btn2"
              type="submit"
              // onClick={() => navigate("/")}
            >
              SignUp
            </Button>
            <a
              onClick={() => {
                setIsOpen(false);
              }}
              style={{
                float: "right",
                marginTop: "0.5em",
                cursor: "pointer",
              }}>
              Are you already a user?
            </a>
          </Form>
        </div>
      </div>
    </>
  );
}
