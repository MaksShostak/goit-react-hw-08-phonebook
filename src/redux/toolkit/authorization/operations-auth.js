import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const forAxiosToken = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkApi) => {
    try {
      const { data } = await axios.post('/users/signup', user);

      forAxiosToken.set(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (user, thunkApi) => {
  try {
    const { data } = await axios.post('/users/login', user);

    forAxiosToken.set(data.token);

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const currentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkApi) => {
    try {
      forAxiosToken.set(thunkApi.getState().auth.token);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await axios.post('/users/logout');
    forAxiosToken.unset();
    return;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export default axios;
