import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import Home from "../views/home";
import LancamentoBusca from "../views/lancamentos/lancamentosBusca";
import LancamentosCadastro from "../views/lancamentos/lancamentosCadastro"

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro-usuarios" element={<CadastroUsuario />} />
        <Route path="/home" element={<Home />} />
        <Route path="/lancamentos-busca" element={<LancamentoBusca />} />
        <Route path="/lancamentos-cadastro" element={<LancamentosCadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
