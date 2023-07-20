import React, { useState } from "react";
import { Button, Form, Input, Menu } from "semantic-ui-react";
import "../commons/styles/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [data, setData] = useState({});

  console.log(data);

  const [isopen, setIsopen] = useState(false);
  const navigate = useNavigate();
  const gotoHomepage = () => {
    navigate("/");
  };
  function showModal() {
    setIsopen(true);
  }
  function closeModal() {
    setIsopen(false);
  }

  const getSignupVal = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onSignup = async () => {
    let eData = data.email.split("@");
    // console.log(eData);
    const username = eData[0];
    console.log(username);
    await axios
      .post("http://localhost:1337/api/auth/local/register", {
        ...data,
        username: username,
      })
      .then((response) => {
        console.log(response);
        setData({});
        closeModal();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <div className="login_div">
          <Form>
            <h1 style={{ textAlign: "center" }}>Login</h1>

            <Form.Field>
              <label>Email</label>
              <input placeholder="abc@gmail.com" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type="password" placeholder="*******" />
            </Form.Field>
            <p
              style={{
                textAlign: "right",
                textDecoration: "underline",
                cursor: "pointer",
              }}>
              Forgot Password
            </p>

            <div className="log_sign_btn">
              <button
                className="login_btn"
                onClick={() => {
                  gotoHomepage();
                }}>
                Login
              </button>
              <button className="signup_btn" onClick={showModal}>
                SignUp
              </button>
            </div>
          </Form>
        </div>
      </div>
      <div className={isopen ? "showoverlay overlay" : "overlay"}></div>
      <div className={isopen ? "show_signup_div signup_div" : "signup_div"}>
        <div>
          <Form onSubmit={onSignup}>
            <h1 style={{ textAlign: "center" }}>SignUp</h1>
            <Form.Field required={true}>
              <label className="label_clr"> First Name</label>
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
                onChange={getSignupVal}
              />
            </Form.Field>
            <Button loading={false} className="signup_btn2" type="submit">
              SignUp
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
