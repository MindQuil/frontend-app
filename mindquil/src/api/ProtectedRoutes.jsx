import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ component: component, ...rest }) => {
  const token = localStorage.getItem('token');
  //   //   console.log(token);
  return token ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace={true} />
  );
};

export default ProtectedRoute;
