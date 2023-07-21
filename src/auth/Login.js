import React from "react";
import { Form } from "semantic-ui-react";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";

export default function Login() {
  const [isSignupOpen, setIsSignupOpen] = React.useState(false);

  const showSignupModal = () => {
    setIsSignupOpen(true);
  };

  const hideSignupModal = (data) => {
    setIsSignupOpen(data);
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
