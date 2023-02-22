import { configureStore } from '@reduxjs/toolkit';
import loginUserReducer from '../Modules/loginUser';
import emailLoginReducer from '../Modules/emailLogin';
import getCountryReducer from '../Modules/getCountry';
import verifyOtpReducer from '../Modules/verifyOtp';
import addRoleReducer from '../Modules/addRole';
export const store = configureStore({
 reducer: {
  loginUser: loginUserReducer,
  getCountry: getCountryReducer,
  verifyOtp: verifyOtpReducer,
  addRole: addRoleReducer,
  emailLogin:emailLoginReducer
 }
});
