import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Routing from "./routes";
import { NavbarWithMegaMenu } from "./shared/Header";

function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-main-dark-bg text-white" : "bg-main-light-bg text-black"
      } transition-colors duration-500`}
    >
      <NavbarWithMegaMenu />
      <div className="flex-grow">
        <Routing />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
