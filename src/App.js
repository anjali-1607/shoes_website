import React from "react";
import "./App.css";
import Main from "./Main";
import Navbar from "./commons/Navbar";
import Card_data from "./home_cards/Card_data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import ArrivalsCard from "./arrivals/ArrivalsCard";
import ArrivalsData from "./arrivals/ArrivalsData";
import MenCards from "./men/MenCards";
import MenData from "./men/MenData";
import WomenData from "./women/WomenData";
import KidsData from "./kids/KidsData";
import Description from "./description/Description";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/arrivals" element={<ArrivalsData />} />
        <Route path="/men" element={<MenData />} />
        <Route path="/women" element={<WomenData />} />
        <Route path="/kids" element={<KidsData />} />
        <Route path="/desc" element={<Description />} />
      </Routes>
    </Router>
  );
}
