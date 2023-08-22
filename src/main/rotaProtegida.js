// RotaTeste.js
import React from 'react';
import { Navigate } from 'react-router-dom';

function RotaProtegida({ autenticado, children }) {
  if (!autenticado) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
}

export default RotaProtegida;