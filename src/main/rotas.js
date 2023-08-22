import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import Home from "../views/home";
import LancamentoBusca from "../views/lancamentos/lancamentosBusca";
import LancamentosCadastro from "../views/lancamentos/lancamentosCadastro";
import RotaProtegida from "./rotaProtegida";
import AuthService from "../app/authService";;

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
            <RotaProtegida autenticado={AuthService.usuarioEstaAutenticado()}>
              <Home />
            </RotaProtegida>
          }
        />
        <Route
          path="/lancamentos-busca"
          element={
            <RotaProtegida autenticado={AuthService.usuarioEstaAutenticado()}>
              <LancamentoBusca />
            </RotaProtegida>
          }
        />
        <Route
          path="/lancamentos-cadastro"
          element={
            <RotaProtegida autenticado={AuthService.usuarioEstaAutenticado()}>
              <LancamentosCadastro />
            </RotaProtegida>
          }
        />
        <Route
          path="/lancamentos-cadastro/:id"
          element={
            <RotaProtegida autenticado={AuthService.usuarioEstaAutenticado()}>
              <LancamentosCadastro />
            </RotaProtegida>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
