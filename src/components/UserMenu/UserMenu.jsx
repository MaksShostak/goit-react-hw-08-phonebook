import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/toolkit/authorization/operations-auth';
import {
  selectEmail,
  selectName,
} from 'redux/toolkit/authorization/selector-auth';
import { Container, WelcomeName, ButtonLoguot } from './UserMenu.styled';

const UserMenu = () => {
  const email = useSelector(selectEmail);
  const name = useSelector(selectName);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <WelcomeName>Welcome {name.toUpperCase()}</WelcomeName>
      <p>{email}</p>
      <ButtonLoguot type="button" onClick={handleLogout}>
        Logout
      </ButtonLoguot>
    </Container>
  );
};

export default UserMenu;
