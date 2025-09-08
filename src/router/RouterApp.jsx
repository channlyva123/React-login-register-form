import React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { HashRouter, Routes, Route } from "react-router-dom";

export default function RouterApp() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </HashRouter>
  );
}
