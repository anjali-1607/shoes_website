import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";
import { publicAxios, registerAxios } from "../commons/auth";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [err, setErr] = useState("");
  const [isSignupOpen, setIsSignupOpen] = React.useState(false);

  const showSignupModal = () => {
    setIsSignupOpen(true);
  };

  const hideSignupModal = (data) => {
    setIsSignupOpen(data);
  };

  const getSignupVal = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };

  const onSignup = async () => {
    await registerAxios
      .post("auth/login", {
        ...data,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("access_token", response.jwt);
        localStorage.setItem("user_id", response.user.id);
        setData({});
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErr("Invalid Credentials");
      });
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div>
        <div className="login_div">
          <Form onSubmit={onSignup}>
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <Form.Field required>
              <label>Email</label>
              <input
                type="email"
                required={true}
                placeholder="abc@gmail.com"
                name="identifier"
                value={data.identifier || ""}
                onChange={getSignupVal}
              />
            </Form.Field>
            <Form.Field required>
              <label>Password</label>
              <input
                type="password"
                placeholder="*******"
                required={true}
                name="password"
                value={data.password || ""}
                onChange={getSignupVal}
              />
            </Form.Field>
            {err ? <p style={{ color: "red" }}>{err}</p> : ""}
            <p
              style={{
                textAlign: "right",
                textDecoration: "underline",
                cursor: "pointer",
              }}>
              Forgot Password
            </p>

            <div className="log_sign_btn">
              <button className="login_btn">Login</button>
              <button className="signup_btn" onClick={showSignupModal}>
                SignUp
              </button>
            </div>
          </Form>
        </div>
      </div>

      <div className={""}>
        {<Signup isopen={isSignupOpen} setIsOpen={hideSignupModal} />}
      </div>
    </>
  );
}
