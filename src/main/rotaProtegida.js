import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../app/authService';

function RotaProtegida({ children }) {
  const autenticado = AuthService.usuarioEstaAutenticado()
  console.log(autenticado)
  if (!autenticado) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
}

export default RotaProtegida;