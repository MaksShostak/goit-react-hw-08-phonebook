import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLogin } from 'redux/toolkit/authorization/selector-auth';

const PrivateRoute = ({ children, redirect = '/' }) => {
  const isLogin = useSelector(selectLogin);

  return isLogin ? children : <Navigate to={redirect} />;
};

export default PrivateRoute;
