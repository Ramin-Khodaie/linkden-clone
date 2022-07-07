import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice'
import modalReducer from '../features/modal/modalSlice'
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  storage,

}

//combine multiple reducers 
const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer
})


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});


