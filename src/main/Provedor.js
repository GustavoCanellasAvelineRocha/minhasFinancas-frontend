import React, { useState } from "react";

import AuthService from "../app/authService";

export const AuthContext = React.createContext;
export const AuthConsumer = AuthContext.Consumer;
const AuthProvinder = AuthContext.Provinder;

function Provedor() {
  const [usuario, setUsuario] = useState({
    usuarioAutenticado: null,
    estaAutenticado: false,
  });

  const fazerLogin = (usuario) => {
    AuthService.logar(usuario);
  };
}
