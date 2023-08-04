import React from "react";
import Rotas from "./rotas";
import Navbar from "../components/navbar";

import "bootswatch/dist/cerulean/bootstrap.css";
import "../custom.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mt-5">
        <Rotas></Rotas>
      </div>
    </>
  );
}

export default App;