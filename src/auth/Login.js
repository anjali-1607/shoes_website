import React, { useState } from "react";
import { Button, Form, Input, Menu } from "semantic-ui-react";
import "../commons/styles/Login.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [isopen, setIsopen] = useState(false);
  const navigate = useNavigate();
  const gotoHomepage = () => {
    navigate("/");
  };
  function showModal() {
    setIsopen(true);
    // document.querySelector(".overlay").classList.add("showoverlay");
    // document.querySelector(".signup_form").classList.add("show_signup_form");
  }
  function closeModal() {
    setIsopen(false);
    // document.querySelector(".overlay").classList.remove("showoverlay");
    // document.querySelector(".signup_form").classList.remove("show_signup_form");
  }

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

            {/* <Button
              color="yellow"
              type="submit"
              onClick={() => {
                gotoHomepage();
              }}>
              Login
            </Button> */}
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
            {/* <h5
              onClick={showModal}
              style={{ textDecoration: "underline", cursor: "pointer" }}>
              Create an Account
            </h5> */}
          </Form>
        </div>
      </div>
      <div className={isopen ? "showoverlay overlay" : "overlay"}></div>
      <div className={isopen ? "show_signup_div signup_div" : "signup_div"}>
        <div>
          <Form>
            <h1 style={{ textAlign: "center" }}>SignUp</h1>
            <Form.Field>
              <label className="label_clr"> First Name</label>
              <input placeholder="First Name" />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder="Last Name" />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input placeholder="abc@gmail.com" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type="password" placeholder="*******" />
            </Form.Field>
            <button className="signup_btn2" onClick={closeModal}>
              SignUp
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}
