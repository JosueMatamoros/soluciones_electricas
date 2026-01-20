import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectGalleryPage from "./pages/ProjectGalleryPage";
import ServicesPage from "./pages/ServicesPage";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/galeria" element={<ProjectGalleryPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
        </Routes>
    );
}

export default Routing;
