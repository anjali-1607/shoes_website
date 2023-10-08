import React from "react";
import "./App.css";
import Main from "./Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import ArrivalsData from "./arrivals/ArrivalsData";
import MenData from "./men/MenData";
import WomenData from "./women/WomenData";
import KidsData from "./kids/KidsData";
import DescriptionData from "./description/DescriptionData";
import MyCart from "./mycart/MyCart";
import Menchappals from "./home/shopbycategory/Menchappals";

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
        <Route path="/product-details/:id" element={<DescriptionData />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/men/chappals" element={<Menchappals />} />
      </Routes>
    </Router>
  );
}
