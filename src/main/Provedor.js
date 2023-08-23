import React, { useState } from "react";
import AuthService from "../app/authService";

export const AuthContext = React.createContext();
const AuthProvider = AuthContext.Provider;

function Provedor({ children }) {
  const [usuario, setUsuario] = useState({
    usuarioAutenticado: AuthService.findUsuarioAutenticado(),
    estaAutenticado: AuthService.usuarioEstaAutenticado()
  });

  const fazerLogin = (usuario) => {
    AuthService.logar(usuario);
    setUsuario({
      usuarioAutenticado: usuario,
      estaAutenticado: true,
    });
  };

  const desfazerLogin = () => {
    AuthService.removerUsuarioAutenticado();
    setUsuario({
      usuarioAutenticado: null,
      estaAutenticado: false,
    });
  };

  return <AuthProvider value={{usuario,fazerLogin,desfazerLogin}}>{children}</AuthProvider>;
}

export default Provedor;
