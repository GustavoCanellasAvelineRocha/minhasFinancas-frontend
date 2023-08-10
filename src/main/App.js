import React from "react";
import Rotas from "./rotas";
import Navbar from "../components/navbar";

import 'toastr/build/toastr.min.js'

import "bootswatch/dist/pulse/bootstrap.css";
import "../custom.css";
import 'toastr/build/toastr.css'

import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";    

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