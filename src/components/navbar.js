import React from "react";
import NavbarItem from "./navbarItem";

function Navbar() {
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
              <NavbarItem href="/home" label="Home"></NavbarItem>
              <NavbarItem href="/login" label="Login"></NavbarItem>
              <NavbarItem
                href="/cadastro-usuarios"
                label="Cadastro"
              ></NavbarItem>
              <NavbarItem href="/lancamentos" label="Lancamentos"></NavbarItem>
            </ul>
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
