import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Routing from "./routes";
import { NavbarWithMegaMenu } from "./shared/Header";
import Footer from "./shared/Footer";

function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? "bg-dark-bg text-dark-text"
          : "bg-light-bg text-light-text"
      }`}
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
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
