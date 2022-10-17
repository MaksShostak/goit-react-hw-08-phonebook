import React from 'react';

import { useSelector } from 'react-redux';
// import UserMenu from 'components/UserMenu/UserMenu';
import { selectLogin } from 'redux/toolkit/authorization/selector-auth';
import { Link, Navigate } from './Navigation.styled';

const Navigation = () => {
  const isLogin = useSelector(selectLogin);

  return (
    <Navigate>
      <Link to="home">Home</Link>
      {isLogin ? (
        <>
          <Link to="contacts">Phonebook</Link>
          {/* <UserMenu /> */}
        </>
      ) : (
        <>
          <Link to="register">Register</Link>
          <Link to="login">Login</Link>
        </>
      )}
    </Navigate>
  );
};

export default Navigation;
