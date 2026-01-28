import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectGalleryPage from "./pages/ProjectGalleryPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ContactPage from "./pages/ContactPage";
import AirConditioningPage from "./pages/servicesPages/AirConditioningPage";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/galeria" element={<ProjectGalleryPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/servicios/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/servicios/aire-acondicionado" element={<AirConditioningPage />} />
        </Routes>
    );
}

export default Routing;
