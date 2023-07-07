import React from "react";
import { Route, Router } from "react-router-dom";
import Login from "./auth/Login";

export default function Main() {
  return (
    <Router>
      <Route path="/login" element={Login} />
    </Router>
  );
}
