import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import AsyncStorage from '@react-native-community/async-storage';
import { create } from 'apisauce';
import { BASE_UR, BASE_URL } from '../Config/Url';
export const emailLogin = createAsyncThunk('emailLogin', async (dispatch) => {
 console.warn('login api params', dispatch.email);

 const api = create({
  baseURL: '',
  headers: {}
 });
 let data = new FormData();
 data.append('email', dispatch.email);
 return await api
  .post(BASE_URL + 'email-login', data, {})
  .then((res) => {
   return res.data;
  })
  .catch((error) => console.warn(error));
});

const emailLoginSlice = createSlice({
 name: 'emailLogin',
 initialState: {
  loginData: [],
  status: null
 },
 extraReducers: {
  [emailLogin.pending]: (state, action) => {
   state.status = 'loading';
  },
  [emailLogin.fulfilled]: (state, action) => {
   state.status = 'success';
   state.loginData = action.payload;
  },
  [emailLogin.rejected]: (state, action) => {
   state.status = 'failed';
  }
 }
});

export default emailLoginSlice.reducer;
