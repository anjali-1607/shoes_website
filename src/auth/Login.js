import React from "react";
import { Button, Form, Input, Menu } from "semantic-ui-react";
import "../commons/styles/Login.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const gotoHomepage = () => {
    navigate("/");
  };
  function showModal() {
    document.querySelector(".overlay").classList.add("showoverlay");
    document.querySelector(".signup_form").classList.add("show_signup_form");
  }
  function closeModal() {
    document.querySelector(".overlay").classList.remove("showoverlay");
    document.querySelector(".signup_form").classList.remove("show_signup_form");
  }

  return (
    <>
      {/* <div className="menu_div">
        <Menu>
          <Menu.Item name="Home" />
          <Menu.Item name="New Arrivals" />
          <Menu.Item name="Men" />
          <Menu.Item name="Women" />
          <Menu.Item name="Kids" />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <div className="login_btn_div">
              <Button basic>Log In</Button>
              <div className="overlay"></div>
            </div>
          </Menu.Menu>
        </Menu>
      </div> */}
      <div>
        <Form className="form_div">
          <Form.Field>
            <label>Email</label>
            <input placeholder="abc@gmail.com" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" placeholder="*******" />
          </Form.Field>

          <Button
            color="yellow"
            type="submit"
            onClick={() => {
              gotoHomepage();
            }}>
            Login
          </Button>
          <h5
            onClick={showModal}
            style={{ textDecoration: "underline", cursor: "pointer" }}>
            Create an Account
          </h5>
        </Form>
      </div>
      <div className="overlay"></div>
      <div className="signup_form">
        <Form className="signup_div">
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

          <Button color="yellow" type="submit">
            SignUp
          </Button>
          <Button
            floated="right"
            color="yellow"
            type="submit"
            onClick={closeModal}>
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}
