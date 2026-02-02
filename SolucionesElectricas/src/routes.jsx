import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectGalleryPage from "./pages/ProjectGalleryPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

// Service-specific pages
import ResidentialInstallationsPage from "./pages/servicesPages/ResidentialInstallationsPage";
import AirConditioningPage from "./pages/servicesPages/AirConditioningPage";
import DomoticsPage from "./pages/servicesPages/DomoticsPage";
import ElectricMotorsPage from "./pages/servicesPages/ElectricMotorsPage";
import AutomaticGatesPage from "./pages/servicesPages/AutomaticGatesPage";
import PoolSystemsPage from "./pages/servicesPages/PoolSystemsPage";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/galeria" element={<ProjectGalleryPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/contacto" element={<ContactPage />} />

            {/* Rutas específicas para cada servicio con diseño personalizado */}
            <Route path="/servicios/instalaciones-residenciales" element={<ResidentialInstallationsPage />} />
            <Route path="/servicios/climatizacion" element={<AirConditioningPage />} />
            <Route path="/servicios/domotica" element={<DomoticsPage />} />
            <Route path="/servicios/motores-electricos" element={<ElectricMotorsPage />} />
            <Route path="/servicios/portones-automaticos" element={<AutomaticGatesPage />} />
            <Route path="/servicios/sistemas-piscinas" element={<PoolSystemsPage />} />

        </Routes>
    );
}

export default Routing;
