import { createSlice } from '@reduxjs/toolkit';
import { register, currentUser, logout, login } from './operations-auth';

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLogin: false,
  isOnline: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
    },
    [login.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
    },
    [currentUser.pending](state, { payload }) {
      state.isOnline = true;
    },
    [currentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLogin = true;
      state.isOnline = false;
    },
    [currentUser.rejected](state, { payload }) {
      state.isOnline = false;
    },
    [logout.fulfilled]() {
      return initialState;
    },
  },
});

export default authSlice.reducer;
