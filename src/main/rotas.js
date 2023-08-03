import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro-usuarios" element={<CadastroUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
