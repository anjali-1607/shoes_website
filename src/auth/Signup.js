import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";

export default function Signup({ isopen = false, setIsOpen = () => {} }) {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const getSignupVal = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onSignup = async () => {
    let eData = data.email.split("@");
    const username = eData[0];
    try {
      // Commented out for now - API call with axios
      // const response = await axios.post("http://localhost:1337/api/auth/local/register", {
      //   ...data,
      //   username: username,
      // });
      // console.log(response);

      setData({});
      // Add any additional logic here for successful signup, e.g., showing a success message.
      // closeModal();
      // Close the signup modal after successful signup
    } catch (error) {
      console.log(error);
      // Handle signup error here, e.g., show an error message.
    }
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
            </Form.Field>
            <Button
              loading={false}
              className="signup_btn2"
              type="submit"
              onClick={() => navigate("/")}>
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
