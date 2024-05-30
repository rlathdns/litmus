import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import darkModeReducer from './darkModeSlice';
import neverSeeReducer from './neverSeeSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  neverSee: neverSeeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
