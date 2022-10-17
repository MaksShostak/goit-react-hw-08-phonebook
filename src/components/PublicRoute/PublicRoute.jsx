import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLogin } from 'redux/toolkit/authorization/selector-auth';

export const PublicRoute = ({
  children,
  restricted = false,
  redirect = '/',
}) => {
  const isLogin = useSelector(selectLogin);

  return isLogin && restricted ? <Navigate to={redirect} /> : children;
};
