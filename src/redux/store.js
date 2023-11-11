import { configureStore } from '@reduxjs/toolkit';
// import { contactReducer } from "./contactsSlice";
import { filterReducer } from './filterSlice';
import { contactReducer} from './contactsSlice';

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
import storage from 'redux-persist/lib/storage';

const persistConfig = { key: 'contacts', storage };

const persistedContactsReducer = persistReducer(
  persistConfig,
  contactReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);

// import { configureStore } from "@reduxjs/toolkit";
// import { contactReducer } from "./contactsSlice";
// import { filterReducer } from "./filterSlice";

// export const store = configureStore({
//     reducer:{
//         contacts: contactReducer,
//         filter: filterReducer
//     }
// })
