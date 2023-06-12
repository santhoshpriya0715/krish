import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import AuthReducer from './reducers/AuthReducer';
import DBReducer from './reducers/DBReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  authReducer: AuthReducer,
  dbReducer: DBReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const ReduxStore = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(ReduxStore);
