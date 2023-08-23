import React, { useContext } from "react";
import NavbarItem from "./navbarItem";
import AuthService from "../app/authService";
import { AuthContext } from "../main/Provedor";

function Navbar() {
  const {usuario}  = useContext(AuthContext);

  const deslogar = () => {
    AuthService.removerUsuarioAutenticado();
  };

  function usuarioEstaAutenticado() {
    return usuario.estaAutenticado;
  }

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand " href="/home">
          Minhas financas
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <NavbarItem
              render={usuarioEstaAutenticado()}
              href="/home"
              label="Home"
            ></NavbarItem>
            <NavbarItem
              render={usuarioEstaAutenticado()}
              href="/lancamentos-busca"
              label="Lancamentos"
            ></NavbarItem>
            <NavbarItem
              render={usuarioEstaAutenticado()}
              onClick={deslogar}
              href="/login"
              label="Sair"
            ></NavbarItem>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
