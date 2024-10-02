import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routes"; 
import { NavbarWithMegaMenu } from "./shared/Header";

function App() {
  return (
    <Router>
      <NavbarWithMegaMenu />
      <Routing />
    </Router>
  );
}

export default App;
