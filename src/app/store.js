import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice'
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  storage,

}

//combine multiple reducers 
const rootReducer = combineReducers({
  user: userReducer
})


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});


