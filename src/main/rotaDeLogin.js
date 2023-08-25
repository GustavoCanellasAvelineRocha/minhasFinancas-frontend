import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './Provedor';

function RotaDeLogin({ children }) {
  const {usuario} = useContext(AuthContext)
  if (usuario.estaAutenticado) {
    return <Navigate to="/home"></Navigate>;
  }
  return children;
}

export default RotaDeLogin;