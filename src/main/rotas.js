import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import Home from "../views/home";
import LancamentoBusca from "../views/lancamentos/lancamentosBusca";
import LancamentosCadastro from "../views/lancamentos/lancamentosCadastro";
import RotaProtegida from "./rotaProtegida";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro-usuarios" element={<CadastroUsuario />} />

        <Route
          path="/home"
          element={
            <RotaProtegida >
              <Home />
            </RotaProtegida>
          }
        />
        <Route
          path="/lancamentos-busca"
          element={
            <RotaProtegida >
              <LancamentoBusca />
            </RotaProtegida>
          }
        />
        <Route
          path="/lancamentos-cadastro"
          element={
            <RotaProtegida >
              <LancamentosCadastro />
            </RotaProtegida>
          }
        />
        <Route
          path="/lancamentos-cadastro/:id"
          element={
            <RotaProtegida >
              <LancamentosCadastro />
            </RotaProtegida>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
