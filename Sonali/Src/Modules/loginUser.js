import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import AsyncStorage from '@react-native-community/async-storage';
import { create } from 'apisauce';
import { BASE_UR, BASE_URL } from '../Config/Url';
export const loginUser = createAsyncThunk('loginUser', async (dispatch) => {
 console.warn('login api params', dispatch.number);

 const api = create({
  baseURL: '',
  headers: {}
 });
 let data = new FormData();
 data.append('mobile_no', dispatch.number);
 return await api
  .post(BASE_URL + 'otp-login', data, {})
  .then((res) => {
   return res.data;
  })
  .catch((error) => console.warn(error));
});

const loginUserSlice = createSlice({
 name: 'login',
 initialState: {
  loginData: [],
  status: null
 },
 extraReducers: {
  [loginUser.pending]: (state, action) => {
   state.status = 'loading';
  },
  [loginUser.fulfilled]: (state, action) => {
   state.status = 'success';
   state.loginData = action.payload;
  },
  [loginUser.rejected]: (state, action) => {
   state.status = 'failed';
  }
 }
});

export default loginUserSlice.reducer;
