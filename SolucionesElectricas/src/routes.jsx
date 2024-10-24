import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import Services from "./pages/services";
import AcInstallationPage from "./pages/servicesPages/AcInstallationPage";
import ACMaintenancePage from "./pages/servicesPages/ACMaintenancePage";
import AboutUs from "./pages/aboutUs";
import Faqs from "./pages/FAQs";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/servicios" element={<Services />} />
      <Route path="/servicios/AC" element={<AcInstallationPage />} />
      <Route path="/servicios/mantenimiento" element={<ACMaintenancePage />} />
      <Route path="/nosotros" element={<AboutUs />} />
      <Route path="/faqs" element={<Faqs />}/>
    </Routes>
  );
};

export default Routing;
