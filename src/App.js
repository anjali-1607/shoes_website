import React from "react";
import "./App.css";
import Main from "./Main";
import Navbar from "./commons/Navbar";
import Card_data from "./Card_data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Route, Router } from "react-router-dom";
import Login from "./auth/Login";
import ArrivalsCard from "./arrivals/ArrivalsCard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/arrivals" element={<ArrivalsCard />} />
      </Routes>
    </Router>
  );
}
