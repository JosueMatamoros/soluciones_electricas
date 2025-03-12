import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Routing from "./routes";
import { NavbarWithMegaMenu } from "./shared/Header";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <NavbarWithMegaMenu />
          <div className="flex-grow">
            <Routing />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
