import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import Services from "./pages/services";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/servicios" element={<Services />} />
    </Routes>
  );
};

export default Routing;
