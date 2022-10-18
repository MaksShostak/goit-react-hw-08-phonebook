import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route
          path="register"
          element={
            <PublicRoute redirect="/contacts" restricted>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute redirect="/contacts" restricted>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirect="/login">
              <Contacts />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/register" />} />
    </Routes>
  );
};

export default Router;
