import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectGalleryPage from "./pages/ProjectGalleryPage";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/galeria" element={<ProjectGalleryPage />} />
        </Routes>
    );
}

export default Routing;
