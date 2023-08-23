import React, { useState } from "react";
import AuthService from "../app/authService";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;
const AuthProvider = AuthContext.Provider;

function Provedor({ children }) {
  const [usuario, setUsuario] = useState({
    usuarioAutenticado: null,
    estaAutenticado: false
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

  if (usuario.isloading) {
    return null;
  } else {
    const contexto = {
      usuarioAutenticado: usuario.usuarioAutenticado,
      estaAutenticado: usuario.estaAutenticado,
      fazerLogin: fazerLogin,
      desfazerLogin: desfazerLogin,
    };
    return <AuthProvider value={contexto}>{children}</AuthProvider>;
  }
}

export default Provedor;
