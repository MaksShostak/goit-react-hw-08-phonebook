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

import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { slice } from './toolkit/slice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, slice.reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: gedDefaultMiddlewares =>
    gedDefaultMiddlewares({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
