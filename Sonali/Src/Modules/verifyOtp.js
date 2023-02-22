import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import { create } from 'apisauce';
import { BASE_URL } from '../Config/Url';
export const verifyOtp = createAsyncThunk('verifyOtp', async (dispatch) => {
 console.warn('login api params', dispatch.otp);

 const api = create({
  baseURL: '',
  headers: {}
 });
 let data = new FormData();
 data.append('otp', dispatch.otp);
 return await api
  .post(BASE_URL + 'verify-otp', data, {})
  .then((res) => {
   console.warn(res?.data?.access_token);
   AsyncStorage.setItem('token', res?.data?.access_token);
   return res.data;
  })
  .catch((error) => console.warn(error));
});

const verifyOtpSlice = createSlice({
 name: 'verifyOtp',
 initialState: {
  loginData: [],
  status: null
 },
 extraReducers: {
  [verifyOtp.pending]: (state, action) => {
   state.status = 'loading';
  },
  [verifyOtp.fulfilled]: (state, action) => {
   state.status = 'success';
   state.loginData = action.payload;
  },
  [verifyOtp.rejected]: (state, action) => {
   state.status = 'failed';
  }
 }
});

export default verifyOtpSlice.reducer;
