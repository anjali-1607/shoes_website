import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
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
    await axios
      .post(" http://localhost:1337/api/auth/local", {
        ...data,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("access_token", response.data.jwt);
        setData({});
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <div className="login_div">
          <Form onSubmit={onSignup}>
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <Form.Field>
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
            <Form.Field>
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
