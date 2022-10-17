import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import authReduser from './toolkit/authorization/slice-auth';
import contactsReduser from './toolkit/contacts/slice-contacts';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReduser);

export const store = configureStore({
  reducer: {
    phonebook: contactsReduser,
    auth: persistedAuthReducer,
  },
  middleware: gedDefaultMiddlewares =>
    gedDefaultMiddlewares({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
