import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/toolkit/authorization/selector-auth';

import Router from './Router/Router';
import { currentUser } from 'redux/toolkit/authorization/operations-auth';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) dispatch(currentUser());
  }, [token, dispatch]);

  return <Router />;
};
