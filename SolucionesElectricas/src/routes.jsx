import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import Services from "./pages/services";
import AcInstallationPage from "./pages/servicesPages/AcInstallationPage";
import ACMaintenancePage from "./pages/servicesPages/ACMaintenancePage";
import ElectricalServices from "./pages/servicesPages/ElectricalServices";
import AutomatizacionDomotica from "./pages/servicesPages/HomeAutomation";
import PoolsAndJacuzzisPage from "./pages/servicesPages/PoolsAndJacuzzisPage";
import ElectricGatesInstallation from "./pages/servicesPages/ElectricGatesInstallationPage";
import ComingSoon from "./pages/comingSoon";
import AboutUs from "./pages/aboutUs";
import Faqs from "./pages/FAQs";
import Contact from "./pages/contact";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/servicios" element={<Services />} />
      <Route path="/servicios/AC" element={<AcInstallationPage />} />
      <Route path="/servicios/mantenimiento" element={<ACMaintenancePage />} />
      <Route path="/servicios/electricidad" element={<ElectricalServices />} />
      <Route path="/servicios/domotica" element={<AutomatizacionDomotica />} />
      <Route path="/servicios/portones" element={<ElectricGatesInstallation />} />
      <Route path="/servicios/piscinas" element={<PoolsAndJacuzzisPage />} />
      <Route path="/nosotros" element={<AboutUs />} />
      <Route path="/faqs" element={<Faqs />}/>
      <Route path="/contacto" element={<Contact />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  );
};

export default Routing;
