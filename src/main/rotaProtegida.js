import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './Provedor';

function RotaProtegida({ children }) {
  const {usuario} = useContext(AuthContext)
  
  if (!usuario.estaAutenticado) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
}

export default RotaProtegida;