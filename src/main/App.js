import React from "react";
import Rotas from "./rotas";
import Navbar from "../components/navbar";  

import "bootswatch/dist/zephyr/bootstrap.css";
import "../custom.css";

function App() {
  return (
    <Navbar>
    <div className="container">
      <Rotas></Rotas>
    </div>
    </Navbar>
  );
}

export default App;
