import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { create } from 'apisauce';
import { API_BASE_URL } from '../Services/apiUrl';
import AsyncStorage from '@react-native-community/async-storage';
import { showToast } from '../Component/showMessage';
export const loginApi = createAsyncThunk('loginApi', async (dispatch) => {
 console.warn('dispatch', dispatch);
 const api = create({
  baseURL: '',
  headers: {}
 });
 let data = new FormData();
 data.append('email', dispatch.email);
 data.append('password', dispatch.password);
 return await api
  .post(API_BASE_URL + 'user/login_faster', data, {})
  .then(async (res) => {
   await AsyncStorage.setItem('token', res.data.data.token);
   return res.data;
  })
  .catch((e) => {
   console.warn('api error', e);
   showToast('check email and password');
  });
});

const loginApiSlice = createSlice({
 name: 'loginApi',
 initialState: {
  listData: [],
  status: null
 },
 extraReducers: {
  [loginApi.pending]: (state, action) => {
   state.status = 'loading';
  },
  [loginApi.fulfilled]: (state, action) => {
   state.status = 'success';
   state.listData = action.payload;
  },
  [loginApi.rejected]: (state, action) => {
   state.status = 'failed';
  }
 }
});

export default loginApiSlice.reducer;
