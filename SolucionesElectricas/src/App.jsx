import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routes";
import { NavbarWithMegaMenu } from "./shared/Header";
import Footer from "./shared/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <NavbarWithMegaMenu />
        <div className="flex-grow">
          <Routing />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
