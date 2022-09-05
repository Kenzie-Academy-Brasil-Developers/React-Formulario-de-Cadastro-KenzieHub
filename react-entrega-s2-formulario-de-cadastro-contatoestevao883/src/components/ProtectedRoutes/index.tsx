import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../conxtexts/AuthContext';
import React from 'react';

const ProtectedRoutes = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to='/' replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;