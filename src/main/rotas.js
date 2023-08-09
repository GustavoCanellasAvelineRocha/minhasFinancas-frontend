import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import Home from "../views/home";
import Lancamento from "../views/lancamentos/lancamentos";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro-usuarios" element={<CadastroUsuario />} />
        <Route path="/home" element={<Home />} />
        <Route path="/lancamentos" element={<Lancamento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
