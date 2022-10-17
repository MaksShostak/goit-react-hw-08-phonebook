export const selectToken = state => state.auth.token;
export const selectEmail = state => state.auth.user.email;
export const selectName = state => state.auth.user.name;
export const selectLogin = state => state.auth.isLogin;
