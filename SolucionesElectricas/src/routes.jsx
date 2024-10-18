import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import Services from "./pages/services";
import AcInstallationPage from "./pages/servicesPages/AcInstallationPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/servicios" element={<Services />} />
      <Route path="/servicios/AC" element={<AcInstallationPage />} />
    </Routes>
  );
};

export default Routing;
