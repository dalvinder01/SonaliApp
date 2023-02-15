import { configureStore } from '@reduxjs/toolkit';
import getListReducer from './getList';
import loginApiReducer from './loginApi';
export default configureStore({
 reducer: {
  getList: getListReducer,
  loginApi: loginApiReducer
 }
});
