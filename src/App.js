import React from "react";
import "./App.css";
import Main from "./Main";
import Navbar from "./commons/Navbar";
import Card_data from "./Card_data";
import { Route, Router } from "react-router-dom";
import Login from "./auth/Login";

export default function App() {
  return (
    <Router>
      <Route path="" element={Main} />
      <Route path="/login" element={Login} />
    </Router>
  );
}
