import React, { useEffect } from "react";
import Rotas from "./rotas";
import Navbar from "../components/navbar";
import Provedor from "./Provedor";

import "toastr/build/toastr.min.js";

import "bootswatch/dist/materia/bootstrap.css";
import "../custom.css";
import "toastr/build/toastr.css";
import "primeicons/primeicons.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

function App() {
  useEffect(() => {
    const handleBeforeUnload = async () => {
      
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    const clearLocalStorage = () => {
      localStorage.clear();
    };

    window.addEventListener("beforeunload", clearLocalStorage);

    return () => {
      window.removeEventListener("beforeunload", clearLocalStorage);
    };
  }, []);

  return (
    <>
      <Provedor>
        <Navbar></Navbar>
        <div className="container mt-5">
          <Rotas></Rotas>
        </div>
      </Provedor>
    </>
  );
}

export default App;
